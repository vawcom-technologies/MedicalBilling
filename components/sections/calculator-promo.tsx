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
    <section className="py-20 md:py-24">
      <Container>
        <FadeIn>
          <div className="surface-panel relative overflow-hidden rounded-[1.5rem] px-7 py-10 md:px-12 md:py-14">
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(ellipse_at_right,rgba(43,184,169,0.12),transparent_70%)]"
              aria-hidden="true"
            />
            <div className="relative z-[1] grid items-center gap-8 lg:grid-cols-[auto_1fr_auto]">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                <Calculator className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
                  Free Tool
                </p>
                <h2 className="font-display mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
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
