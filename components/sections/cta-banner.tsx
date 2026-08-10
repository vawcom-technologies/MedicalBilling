import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

type CtaBannerProps = {
  title: string;
  description: string;
  cta: string;
  href?: string;
};

export function CtaBanner({
  title,
  description,
  cta,
  href = "/contact",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <Container>
        <FadeIn>
          <div className="noise-overlay relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary via-[#135a96] to-secondary px-6 py-12 text-white shadow-[0_24px_60px_rgba(15,76,129,0.28)] md:px-12 md:py-16">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-white/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-[2] grid items-center gap-8 lg:grid-cols-[1.4fr_auto]">
              <div>
                <h2 className="max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
                  {description}
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary hover:bg-white/95"
              >
                <Link href={href}>
                  {cta}
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
