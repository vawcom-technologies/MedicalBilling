"use client";

import {
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";

type BenefitGridProps = {
  title: string;
  description?: string;
  items: readonly string[] | string[];
  eyebrow?: string;
  icon?: LucideIcon;
};

export function BenefitGrid({
  title,
  description,
  items,
  eyebrow = "Benefits",
  icon: Icon = CheckCircle2,
}: BenefitGridProps) {
  // Duplicate for a seamless infinite loop
  const loopItems = [...items, ...items];

  return (
    <section className="overflow-hidden py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </Container>

      <FadeIn className="mt-12">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-[#eef5fa] to-transparent md:w-28"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-[#eef5fa] to-transparent md:w-28"
            aria-hidden="true"
          />

          <div className="benefit-marquee flex w-max gap-4 py-2">
            {loopItems.map((item, index) => {
              const iconTone =
                index % 3 === 0
                  ? "bg-accent/10 text-accent"
                  : index % 3 === 1
                    ? "bg-secondary/10 text-secondary"
                    : "bg-spark/15 text-spark";
              return (
              <div
                key={`${item}-${index}`}
                className="glass flex h-[72px] w-[280px] shrink-0 items-center gap-3 rounded-[1.5rem] px-5 sm:w-[320px]"
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${iconTone}`}>
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-foreground sm:text-base">
                  {item}
                </h3>
              </div>
              );
            })}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
