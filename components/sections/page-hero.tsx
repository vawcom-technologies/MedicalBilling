import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

type PageHeroProps = {
  eyebrow?: string;
  h1: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta?: string;
  secondaryHref?: string;
  primaryHref?: string;
  breadcrumb?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  h1,
  subheadline,
  primaryCta,
  secondaryCta,
  secondaryHref = "/about",
  primaryHref = "/contact",
  breadcrumb,
  children,
}: PageHeroProps) {
  return (
    <section className="hero-gradient noise-overlay relative overflow-x-clip pb-16 pt-32 md:pb-24 md:pt-40">
      <Container className="relative z-[2]">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="inline-flex flex-wrap items-center gap-1.5 rounded-full glass px-3 py-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="font-medium text-foreground" aria-current="page">
                  {breadcrumb}
                </span>
              </li>
            </ol>
          </nav>
        ) : null}
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            {eyebrow ? (
              <FadeIn>
                <p className="mb-5 inline-flex items-center rounded-full border border-secondary/20 bg-secondary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary">
                  {eyebrow}
                </p>
              </FadeIn>
            ) : null}
            <FadeIn delay={0.05}>
              <h1 className="max-w-3xl text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.35rem] lg:leading-[1.1]">
                {h1}
              </h1>
            </FadeIn>
            <FadeIn delay={0.12}>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
                {subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.18} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <Link href={primaryHref}>
                  {primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              {secondaryCta ? (
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <Link href={secondaryHref}>{secondaryCta}</Link>
                </Button>
              ) : null}
            </FadeIn>
          </div>
          {children ? (
            <FadeIn delay={0.15} className="relative z-[1] overflow-visible px-2 sm:px-4 lg:px-6">
              {children}
            </FadeIn>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
