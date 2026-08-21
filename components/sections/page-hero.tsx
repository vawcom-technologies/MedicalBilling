import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import { siteConfig } from "@/lib/site-config";

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
    <section className="hero-gradient noise-overlay relative overflow-x-clip pb-20 pt-32 md:pb-28 md:pt-44">
      <Container className="relative z-[2]">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="inline-flex flex-wrap items-center gap-1.5 text-sm text-muted">
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
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <FadeIn>
              <p className="mb-6 font-display text-2xl font-semibold tracking-tight text-primary md:text-3xl">
                {siteConfig.name}
              </p>
            </FadeIn>
            {eyebrow ? (
              <FadeIn delay={0.04}>
                <p className="mb-5 inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary">
                  <span
                    className="h-px w-8 bg-secondary/50"
                    aria-hidden="true"
                  />
                  {eyebrow}
                </p>
              </FadeIn>
            ) : null}
            <FadeIn delay={0.08}>
              <h1 className="font-display max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
                {h1}
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                {subheadline}
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <Link href={primaryHref}>
                  {primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              {secondaryCta ? (
                <Button asChild size="lg" variant="outline">
                  <Link href={secondaryHref}>{secondaryCta}</Link>
                </Button>
              ) : null}
            </FadeIn>
          </div>
          {children ? (
            <FadeIn delay={0.16} className="relative z-[1] overflow-visible px-1 sm:px-3 lg:px-4">
              {children}
            </FadeIn>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
