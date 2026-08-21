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
    <section className="overflow-hidden py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
      </Container>

      <FadeIn className="mt-14">
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-[#f3f7f6] to-transparent md:w-28"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-[#f3f7f6] to-transparent md:w-28"
            aria-hidden="true"
          />

          <div className="benefit-marquee flex w-max gap-4 py-2">
            {loopItems.map((item, index) => {
              return (
              <div
                key={`${item}-${index}`}
                className="surface-panel flex h-[76px] w-[280px] shrink-0 items-center gap-3 rounded-[1.25rem] px-5 sm:w-[320px]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mist text-primary">
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
