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
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />
        <FadeIn delay={0.08} className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-4 md:grid-cols-2">
            {items.map((item) => {
              const isNegative = item.tone === "negative";
              const [before, after] = item.text.split(item.highlight);

              return (
                <div
                  key={item.highlight}
                  className={cn(
                    "flex h-full items-center gap-4 rounded-[1.25rem] border px-5 py-5",
                    isNegative
                      ? "border-red-200/80 bg-red-50/70"
                      : "border-primary/15 bg-mist/80"
                  )}
                >
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white",
                      isNegative ? "bg-red-500" : "bg-primary"
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
                      isNegative ? "text-red-950" : "text-foreground"
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
