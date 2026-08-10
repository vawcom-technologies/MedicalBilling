import Link from "next/link";
import { ArrowRight, Calculator } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

type CalculatorPromoProps = {
  title?: string;
  description?: string;
};

export function CalculatorPromo({
  title = "How Much Revenue Is Your Practice Leaving on the Table?",
  description = "Use our free Revenue Leakage Calculator to estimate losses from claim denials and aging AR, then unlock a personalized breakdown.",
}: CalculatorPromoProps) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-white px-6 py-10 shadow-[0_16px_40px_rgba(15,76,129,0.06)] md:px-10 md:py-12">
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-12 left-8 h-40 w-40 rounded-full bg-secondary/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-[1] grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
              <span className="flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-primary text-white shadow-[0_12px_28px_rgba(15,76,129,0.25)]">
                <Calculator className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
                  Free Tool
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                  {description}
                </p>
              </div>
              <Button asChild size="lg" className="w-full lg:w-auto">
                <Link href="/tools/revenue-leakage-calculator">
                  Try the Calculator
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
