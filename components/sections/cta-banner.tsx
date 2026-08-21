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
          <div className="section-ink noise-overlay relative overflow-hidden rounded-[1.5rem] px-7 py-12 md:px-14 md:py-16">
            <div
              className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-[2] grid items-center gap-8 lg:grid-cols-[1.35fr_auto] lg:gap-12">
              <div>
                <h2 className="font-display max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
                  {description}
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="bg-white text-primary shadow-none hover:bg-white/95 hover:text-primary-dark"
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
