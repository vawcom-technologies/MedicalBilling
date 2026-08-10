"use client";

import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";

export type ComparisonCalloutItem = {
  tone: "negative" | "positive";
  text: string;
  highlight: string;
};

type ComparisonCalloutProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: readonly ComparisonCalloutItem[] | ComparisonCalloutItem[];
};

export function ComparisonCallout({
  eyebrow = "The Difference",
  title = "Stop Settling for Average Results",
  description,
  items,
}: ComparisonCalloutProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <FadeIn delay={0.08} className="mx-auto mt-10 max-w-3xl space-y-3">
          {items.map((item) => {
            const isNegative = item.tone === "negative";
            const [before, after] = item.text.split(item.highlight);

            return (
              <div
                key={item.highlight}
                className={
                  isNegative
                    ? "flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 md:gap-4 md:px-5 md:py-5"
                    : "flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 md:gap-4 md:px-5 md:py-5"
                }
              >
                <span
                  className={
                    isNegative
                      ? "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-500 text-white"
                      : "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white"
                  }
                >
                  {isNegative ? (
                    <X className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  ) : (
                    <Check
                      className="h-4 w-4"
                      strokeWidth={3}
                      aria-hidden="true"
                    />
                  )}
                </span>
                <p
                  className={
                    isNegative
                      ? "text-sm leading-relaxed text-red-950 md:text-[15px]"
                      : "text-sm leading-relaxed text-emerald-950 md:text-[15px]"
                  }
                >
                  {before}
                  <strong className="font-bold">{item.highlight}</strong>
                  {after}
                </p>
              </div>
            );
          })}
        </FadeIn>
      </Container>
    </section>
  );
}
