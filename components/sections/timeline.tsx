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
    <section className="section-alt py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <FadeIn className="mt-12 md:mt-14">
          {/* Desktop / tablet: hover-expand strip */}
          <div
            className="hidden h-[360px] gap-3 md:flex"
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
                    "group relative h-full min-w-0 overflow-hidden rounded-[1.5rem] border text-left",
                    "transition-[flex-grow,background-color,border-color,box-shadow,color] duration-500 ease-in-out",
                    isActive
                      ? "grow-[3.2] border-primary bg-gradient-to-br from-primary via-[#135a96] to-secondary text-white shadow-[0_20px_50px_rgba(15,76,129,0.28)]"
                      : "glass grow text-foreground"
                  )}
                >
                  {/* Collapsed view: fades out as card expands */}
                  <div
                    className={cn(
                      "absolute inset-0 z-[1] flex flex-col items-center px-3 py-8 transition-opacity duration-300 ease-in-out",
                      isActive
                        ? "pointer-events-none opacity-0"
                        : "opacity-100"
                    )}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/8 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="mt-5 text-xs font-bold tracking-[0.14em] text-secondary">
                      {label}
                    </span>
                    <h3 className="mt-auto px-1 text-center text-base font-bold leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <span className="glass mt-8 inline-flex h-10 w-10 items-center justify-center rounded-full text-muted">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Expanded view: fades in after width starts growing */}
                  <div
                    className={cn(
                      "absolute inset-0 z-[2] flex transition-opacity duration-300 ease-in-out",
                      isActive
                        ? "opacity-100 delay-100"
                        : "pointer-events-none opacity-0"
                    )}
                  >
                    <div className="relative z-[1] flex h-full w-full flex-col p-7 lg:w-[64%] lg:p-8 lg:pr-3">
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
                          Step {label}
                        </span>
                      </div>

                      <h3 className="mt-6 text-2xl font-bold leading-snug text-white">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-white/85 lg:text-[15px]">
                        {item.description}
                      </p>

                      <span className="mt-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white text-primary">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>

                    <div
                      className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[36%] lg:block"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(46,196,182,0.28),transparent_62%)]" />
                      <div className="absolute bottom-0 right-0 h-36 w-36 translate-x-10 translate-y-10 rounded-full bg-accent/20 blur-2xl" />
                      <div className="absolute right-6 top-1/2 flex h-24 w-24 -translate-y-1/2 items-center justify-center rounded-[1.5rem] border border-white/20 bg-white/10 backdrop-blur-sm">
                        <Icon className="h-10 w-10 text-white/85" />
                      </div>
                    </div>
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
                    "w-full rounded-[1.35rem] border p-5 text-left transition-[background-color,border-color,box-shadow,color] duration-500 ease-in-out",
                    isActive
                      ? "border-primary bg-gradient-to-br from-primary to-secondary text-white shadow-[0_16px_40px_rgba(15,76,129,0.25)]"
                      : "glass text-foreground"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-500",
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
                      <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                      <div
                        className={cn(
                          "grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out",
                          isActive
                            ? "mt-2 grid-rows-[1fr] opacity-100"
                            : "mt-0 grid-rows-[0fr] opacity-0"
                        )}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm leading-relaxed text-white/85">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-500",
                        isActive
                          ? "border-white/30 bg-white text-primary"
                          : "glass text-muted"
                      )}
                    >
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
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
