"use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Headset,
  LineChart,
  Rocket,
  Settings2,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

type Step = {
  step?: string;
  year?: string;
  title: string;
  description: string;
};

type TimelineProps = {
  title: string;
  description?: string;
  steps: readonly Step[] | Step[];
  eyebrow?: string;
};

const stepIcons: LucideIcon[] = [
  ClipboardList,
  Settings2,
  Headset,
  LineChart,
  BadgeCheck,
  Users,
  ShieldCheck,
  Rocket,
];

export function Timeline({
  title,
  description,
  steps,
  eyebrow = "Process",
}: TimelineProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="section-alt py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <FadeIn className="mt-8 md:mt-10">
          {/* Desktop / tablet: hover-expand strip */}
          <div
            className="hidden h-[240px] gap-3 md:flex lg:h-[260px]"
            onMouseLeave={() => setActive(0)}
          >
            {steps.map((item, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const isActive = active === index;
              const label =
                item.step ?? item.year ?? String(index + 1).padStart(2, "0");

              return (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  aria-expanded={isActive}
                  className={cn(
                    "group relative h-full min-w-0 overflow-hidden rounded-[1.35rem] border text-left",
                    "transition-[flex-grow,background-color,border-color,box-shadow,color] duration-500 ease-in-out",
                    isActive
                      ? "grow-[2.4] border-primary bg-gradient-to-br from-primary via-[#135a96] to-secondary text-white shadow-[0_18px_40px_rgba(15,76,129,0.25)]"
                      : "glass grow text-foreground"
                  )}
                >
                  {/* Collapsed view */}
                  <div
                    className={cn(
                      "absolute inset-0 z-[1] flex flex-col items-center justify-center gap-3 px-3 py-5 transition-opacity duration-300 ease-in-out",
                      isActive
                        ? "pointer-events-none opacity-0"
                        : "opacity-100"
                    )}
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold tracking-[0.14em] text-secondary">
                      {label}
                    </span>
                    <h3 className="px-1 text-center text-[15px] font-bold leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <span className="glass mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full text-muted">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Expanded view */}
                  <div
                    className={cn(
                      "absolute inset-0 z-[2] flex transition-opacity duration-300 ease-in-out",
                      isActive
                        ? "opacity-100 delay-75"
                        : "pointer-events-none opacity-0"
                    )}
                  >
                    <div className="relative z-[1] flex h-full w-full flex-col justify-between p-6 lg:p-7">
                      <div>
                        <div className="flex items-center justify-between gap-3">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                            <Icon className="h-5 w-5" aria-hidden="true" />
                          </span>
                          <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
                            Step {label}
                          </span>
                        </div>

                        <h3 className="mt-4 text-xl font-bold leading-snug text-white lg:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/88 lg:text-[15px]">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white text-primary">
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>

                    <div
                      className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 rounded-full bg-accent/20 blur-2xl"
                      aria-hidden="true"
                    />
                    <div
                      className="pointer-events-none absolute -bottom-8 right-8 h-24 w-24 rounded-full bg-white/10 blur-2xl"
                      aria-hidden="true"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile: tap-to-expand accordion cards */}
          <div className="space-y-3 md:hidden">
            {steps.map((item, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const isActive = active === index;
              const label =
                item.step ?? item.year ?? String(index + 1).padStart(2, "0");

              return (
                <button
                  key={`${item.title}-${index}-mobile`}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-expanded={isActive}
                  className={cn(
                    "w-full rounded-[1.35rem] border p-4 text-left transition-[background-color,border-color,box-shadow,color] duration-500 ease-in-out",
                    isActive
                      ? "border-primary bg-gradient-to-br from-primary to-secondary text-white shadow-[0_16px_40px_rgba(15,76,129,0.25)]"
                      : "glass text-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-colors duration-500",
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-primary/8 text-primary"
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          "text-xs font-semibold tracking-[0.14em] transition-colors duration-500",
                          isActive ? "text-white/75" : "text-secondary"
                        )}
                      >
                        {label}
                      </p>
                      <h3 className="text-base font-bold">{item.title}</h3>
                    </div>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-500",
                        isActive
                          ? "border-white/30 bg-white text-primary"
                          : "glass text-muted"
                      )}
                    >
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out",
                      isActive
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm leading-relaxed text-white/85">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
