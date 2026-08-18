"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Loader2,
  Lock,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { easeOutExpo } from "@/lib/motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  arDaysOptions,
  arOver90Options,
  calculateRevenueLeakage,
  denialRateOptions,
  formatCurrency,
  practiceSizeOptions,
  specialtyOptions,
  type CalculatorInputs,
} from "@/lib/calculators/revenue-leakage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const unlockSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  practiceName: z.string().min(2, "Please enter your practice name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
});

type UnlockValues = z.infer<typeof unlockSchema>;

const defaultInputs: CalculatorInputs = {
  monthlyCollections: 100000,
  specialty: "specialty-clinic",
  practiceSize: "small-group",
  denialRate: "not-sure",
  arDays: "not-sure",
  arOver90: "not-sure",
};

const steps = ["Practice", "Revenue Health", "Estimate"] as const;

export function RevenueLeakageCalculator() {
  const [step, setStep] = useState(0);
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs);
  const [unlocked, setUnlocked] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const estimate = useMemo(() => calculateRevenueLeakage(inputs), [inputs]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UnlockValues>({
    resolver: zodResolver(unlockSchema),
    defaultValues: {
      name: "",
      practiceName: "",
      email: "",
      phone: "",
    },
  });

  const update = <K extends keyof CalculatorInputs>(
    key: K,
    value: CalculatorInputs[K]
  ) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const canContinue =
    step === 0
      ? inputs.monthlyCollections >= 5000 && !!inputs.specialty
      : step === 1
        ? true
        : true;

  const onUnlock = handleSubmit(async (values) => {
    setSubmitError(null);
    try {
      const response = await fetch("/api/calculator-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          inputs,
          estimate: {
            monthlyLikely: estimate.monthlyLikely,
            annualLikely: estimate.annualLikely,
            riskLevel: estimate.riskLevel,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Unable to unlock report");
      }

      setUnlocked(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
  });

  return (
    <div className="gradient-border overflow-hidden rounded-[1.75rem]">
      <div className="border-b border-white/50 bg-gradient-to-r from-primary/5 via-white/40 to-accent/5 px-6 py-5 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-white">
              <Calculator className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Revenue Leakage Calculator
              </p>
              <p className="text-xs text-muted">
                Estimate denials + aging AR impact in under 60 seconds
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {steps.map((label, index) => (
              <div key={label} className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold",
                    index <= step
                      ? "bg-primary text-white"
                      : "bg-border/60 text-muted"
                  )}
                >
                  {index + 1}
                </span>
                <span
                  className={cn(
                    "hidden text-xs font-medium sm:inline",
                    index <= step ? "text-primary" : "text-muted"
                  )}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="p-6 md:p-8">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="step-0"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.45, ease: easeOutExpo }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Tell us about your practice
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    We&apos;ll tailor benchmarks to your specialty and size.
                  </p>
                </div>

                <Field label="Approximate monthly collections">
                  <div className="relative">
                    <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted">
                      $
                    </span>
                    <Input
                      type="number"
                      min={5000}
                      step={1000}
                      className="pl-8"
                      value={inputs.monthlyCollections}
                      onChange={(e) =>
                        update(
                          "monthlyCollections",
                          Number(e.target.value || 0)
                        )
                      }
                    />
                  </div>
                  <input
                    type="range"
                    min={20000}
                    max={1000000}
                    step={5000}
                    value={Math.min(inputs.monthlyCollections, 1000000)}
                    onChange={(e) =>
                      update("monthlyCollections", Number(e.target.value))
                    }
                    className="mt-3 w-full accent-primary"
                    aria-label="Monthly collections slider"
                  />
                </Field>

                <Field label="Specialty">
                  <Select
                    value={inputs.specialty}
                    onChange={(value) =>
                      update("specialty", value as CalculatorInputs["specialty"])
                    }
                    options={specialtyOptions}
                  />
                </Field>

                <Field label="Practice size">
                  <Select
                    value={inputs.practiceSize}
                    onChange={(value) =>
                      update(
                        "practiceSize",
                        value as CalculatorInputs["practiceSize"]
                      )
                    }
                    options={practiceSizeOptions}
                  />
                </Field>
              </motion.div>
            )}

            {step === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.45, ease: easeOutExpo }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Current revenue health
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    Choose “Not sure” if you don&apos;t track these yet. We&apos;ll
                    use specialty benchmarks.
                  </p>
                </div>

                <Field label="Estimated claim denial rate">
                  <OptionGrid
                    value={inputs.denialRate}
                    options={denialRateOptions}
                    onChange={(value) =>
                      update(
                        "denialRate",
                        value as CalculatorInputs["denialRate"]
                      )
                    }
                  />
                </Field>

                <Field label="Average AR days">
                  <OptionGrid
                    value={inputs.arDays}
                    options={arDaysOptions}
                    onChange={(value) =>
                      update("arDays", value as CalculatorInputs["arDays"])
                    }
                  />
                </Field>

                <Field label="% of AR over 90 days">
                  <OptionGrid
                    value={inputs.arOver90}
                    options={arOver90Options}
                    onChange={(value) =>
                      update("arOver90", value as CalculatorInputs["arOver90"])
                    }
                  />
                </Field>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 18 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.45, ease: easeOutExpo }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-foreground">
                    Your estimated revenue leakage
                  </h2>
                  <p className="mt-2 text-sm text-muted">
                    Educational estimate based on your inputs and specialty
                    benchmarks, not a formal audit.
                  </p>
                </div>

                <div className="rounded-[1.5rem] bg-gradient-to-br from-primary to-secondary p-6 text-white shadow-[0_16px_40px_rgba(15,76,129,0.25)]">
                  <p className="text-sm font-medium text-white/80">
                    Likely monthly leakage
                  </p>
                  <p className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
                    {formatCurrency(estimate.monthlyLikely)}
                  </p>
                  <p className="mt-3 text-sm text-white/85">
                    Range: {formatCurrency(estimate.monthlyLow)} –{" "}
                    {formatCurrency(estimate.monthlyHigh)} / month
                  </p>
                  <p className="mt-1 text-sm text-white/85">
                    ~{formatCurrency(estimate.annualLikely)} per year at current
                    performance
                  </p>
                </div>

                {!unlocked ? (
                  <div className="glass-soft rounded-[1.5rem] p-5 md:p-6">
                    <div className="mb-4 flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <Lock className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-semibold text-foreground">
                          Unlock your full breakdown
                        </h3>
                        <p className="mt-1 text-sm text-muted">
                          Get denial vs aging AR split, recovery potential, and
                          recommended next steps.
                        </p>
                      </div>
                    </div>

                    <form className="space-y-4" onSubmit={onUnlock} noValidate>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="calc-name">Name</Label>
                          <Input
                            id="calc-name"
                            aria-invalid={!!errors.name}
                            {...register("name")}
                          />
                          {errors.name ? (
                            <p className="text-xs text-red-600">
                              {errors.name.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="calc-practice">Practice Name</Label>
                          <Input
                            id="calc-practice"
                            aria-invalid={!!errors.practiceName}
                            {...register("practiceName")}
                          />
                          {errors.practiceName ? (
                            <p className="text-xs text-red-600">
                              {errors.practiceName.message}
                            </p>
                          ) : null}
                        </div>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="calc-email">Email</Label>
                          <Input
                            id="calc-email"
                            type="email"
                            aria-invalid={!!errors.email}
                            {...register("email")}
                          />
                          {errors.email ? (
                            <p className="text-xs text-red-600">
                              {errors.email.message}
                            </p>
                          ) : null}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="calc-phone">Phone (optional)</Label>
                          <Input
                            id="calc-phone"
                            type="tel"
                            {...register("phone")}
                          />
                        </div>
                      </div>

                      {submitError ? (
                        <p className="text-sm text-red-600" role="alert">
                          {submitError}
                        </p>
                      ) : null}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2
                              className="h-4 w-4 animate-spin"
                              aria-hidden="true"
                            />
                            Unlocking...
                          </>
                        ) : (
                          <>
                            Unlock Full Report
                            <Sparkles className="h-4 w-4" aria-hidden="true" />
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: easeOutExpo }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 rounded-2xl bg-accent/10 px-4 py-3 text-sm font-medium text-primary">
                      <CheckCircle2
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />
                      Report unlocked. Here&apos;s your personalized breakdown.
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <StatCard
                        label="Denial leakage"
                        value={formatCurrency(estimate.denialLeakage)}
                        hint="Unrecovered denied claims / month"
                      />
                      <StatCard
                        label="Aging AR risk"
                        value={formatCurrency(estimate.agingLeakage)}
                        hint="At-risk 90+ balances / month"
                      />
                      <StatCard
                        label="Recovery potential"
                        value={`${formatCurrency(estimate.recoveryPotentialLow)} – ${formatCurrency(estimate.recoveryPotentialHigh)}`}
                        hint="Monthly opportunity with optimized RCM"
                      />
                      <StatCard
                        label="Risk level"
                        value={estimate.riskLevel}
                        hint={`Using ~${Math.round(estimate.denialRateUsed * 100)}% denial + ~${Math.round(estimate.arOver90Used * 100)}% AR 90+`}
                      />
                    </div>

                    <div className="glass-soft rounded-[1.5rem] p-5">
                      <h3 className="font-semibold text-foreground">
                        Recommended next steps
                      </h3>
                      <ul className="mt-3 space-y-2 text-sm text-muted">
                        {estimate.insights.map((insight) => (
                          <li key={insight} className="flex gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                            {insight}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <Button asChild>
                          <Link href="/contact">
                            Get a Free Billing Analysis
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </Link>
                        </Button>
                        <Button asChild variant="outline">
                          <Link href="/medical-billing">
                            Explore Medical Billing Services
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6">
            <Button
              type="button"
              variant="outline"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </Button>
            {step < 2 ? (
              <Button
                type="button"
                disabled={!canContinue}
                onClick={() => setStep((s) => Math.min(2, s + 1))}
              >
                Continue
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            ) : (
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setStep(0);
                  setUnlocked(false);
                  setInputs(defaultInputs);
                }}
              >
                Start over
              </Button>
            )}
          </div>
        </div>

        <aside className="border-t border-white/50 bg-white/25 p-6 backdrop-blur-md md:p-8 lg:border-l lg:border-t-0">
          <div className="sticky top-28 space-y-5">
            <div className="glass rounded-[1.5rem] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                Live preview
              </p>
              <p className="mt-3 text-3xl font-bold text-primary">
                {formatCurrency(estimate.monthlyLikely)}
              </p>
              <p className="mt-1 text-sm text-muted">
                estimated leakage / month
              </p>
              <div className="mt-4 flex items-center gap-2 text-sm">
                <ShieldAlert
                  className={cn(
                    "h-4 w-4",
                    estimate.riskLevel === "Low" && "text-accent",
                    estimate.riskLevel === "Moderate" && "text-secondary",
                    (estimate.riskLevel === "High" ||
                      estimate.riskLevel === "Critical") &&
                      "text-red-500"
                  )}
                  aria-hidden="true"
                />
                <span className="font-medium text-foreground">
                  {estimate.riskLevel} risk profile
                </span>
              </div>
            </div>

            <div className="glass rounded-[1.5rem] p-5 text-sm text-muted">
              <p className="font-semibold text-foreground">How this works</p>
              <ul className="mt-3 space-y-2">
                <li>1. Enter collections + specialty</li>
                <li>2. Share denial / AR health (or use defaults)</li>
                <li>3. Unlock a full leakage breakdown</li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed">
                Estimates are directional and for education only. Actual
                recovery depends on payer mix, specialty, documentation, and
                follow-up processes.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  options: readonly { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="glass-strong flex h-12 w-full rounded-2xl px-4 text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

function OptionGrid({
  value,
  options,
  onChange,
}: {
  value: string;
  options: readonly { value: string; label: string }[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={cn(
              "rounded-2xl border px-4 py-3 text-left text-sm font-medium transition",
              active
                ? "border-secondary bg-secondary/10 text-primary backdrop-blur-md"
                : "glass text-muted hover:border-secondary/40 hover:text-foreground"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}

function StatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="glass rounded-[1.25rem] p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-2 text-lg font-bold text-primary">{value}</p>
      <p className="mt-1 text-xs text-muted">{hint}</p>
    </div>
  );
}
