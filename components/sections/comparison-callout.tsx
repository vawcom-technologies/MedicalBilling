"use client";

import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

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
    <section className="py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <FadeIn delay={0.08} className="mx-auto mt-10 max-w-4xl">
          <div className="grid gap-3 md:grid-cols-2 md:gap-4">
            {items.map((item) => {
              const isNegative = item.tone === "negative";
              const [before, after] = item.text.split(item.highlight);

              return (
                <div
                  key={item.highlight}
                  className={cn(
                    "glass flex h-full items-center gap-3 rounded-2xl px-4 py-4 md:gap-4 md:px-5 md:py-5",
                    isNegative
                      ? "border-red-200/70 bg-red-50/55"
                      : "border-emerald-200/70 bg-emerald-50/55"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white",
                      isNegative ? "bg-red-500" : "bg-emerald-600"
                    )}
                  >
                    {isNegative ? (
                      <X
                        className="h-4 w-4"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    ) : (
                      <Check
                        className="h-4 w-4"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  <p
                    className={cn(
                      "text-sm leading-relaxed md:text-[15px]",
                      isNegative ? "text-red-950" : "text-emerald-950"
                    )}
                  >
                    {before}
                    <strong className="font-bold">{item.highlight}</strong>
                    {after}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
