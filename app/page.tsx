import Link from "next/link";
import {
  Building2,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Users,
  Workflow,
} from "lucide-react";
import { homeContent } from "@/lib/content/home";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { HealthcareHeroIllustration } from "@/components/illustrations/healthcare-hero";
import { ServiceCards } from "@/components/sections/service-cards";
import { BenefitGrid } from "@/components/sections/benefit-grid";
import { StatsSection } from "@/components/sections/stats-section";
import { Timeline } from "@/components/sections/timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CalculatorPromo } from "@/components/sections/calculator-promo";
import { ComparisonCallout } from "@/components/sections/comparison-callout";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";

export const metadata = buildMetadata({
  title: homeContent.seo.title,
  description: homeContent.seo.description,
  path: "/",
  keywords: [...homeContent.seo.keywords],
});

const industries = [
  { label: "Independent Physicians", icon: Stethoscope },
  { label: "Specialty Clinics", icon: HeartPulse },
  { label: "Urgent Care Centers", icon: Building2 },
  { label: "Behavioral Health", icon: Users },
  { label: "Multi-Location Practices", icon: Workflow },
  { label: "Multi-Provider Groups", icon: ShieldCheck },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", href: "/" }])}
      />
      <JsonLd data={faqSchema([...homeContent.faqs])} />

      <PageHero
        eyebrow="Medical Billing Services"
        h1={homeContent.hero.h1}
        subheadline={homeContent.hero.subheadline}
        primaryCta={homeContent.hero.primaryCta}
        secondaryCta={homeContent.hero.secondaryCta}
        secondaryHref="/medical-billing"
      >
        <div className="relative">
          <HealthcareHeroIllustration />
          <div className="glass-strong absolute -left-2 bottom-8 hidden rounded-2xl px-4 py-3 md:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Clean Claim Rate
            </p>
            <p className="text-2xl font-bold text-primary">98%</p>
          </div>
          <div className="glass-strong absolute -right-2 top-10 hidden rounded-2xl px-4 py-3 md:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Collection Lift
            </p>
            <p className="text-2xl font-bold text-accent">+28%</p>
          </div>
        </div>
      </PageHero>

      <section className="section-surface border-b py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-muted">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                HIPAA-aware workflows
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                Transparent reporting
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                Specialty-aware specialists
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
                US-focused RCM support
              </span>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {homeContent.intro}
            </p>
          </FadeIn>
        </Container>
      </section>

      <div id="services">
        <ServiceCards
          title="Our Core Services"
          description="End-to-end medical billing services, credentialing, and virtual front desk support designed for modern healthcare practices."
          services={homeContent.services}
        />
      </div>

      <ComparisonCallout
        title={homeContent.comparison.title}
        description={homeContent.comparison.description}
        items={homeContent.comparison.items}
      />

      <BenefitGrid
        eyebrow="Why Choose Us"
        title={homeContent.whyChoose.title}
        description="Healthcare providers choose a revenue cycle management company that increases collections while reducing administrative burden."
        items={homeContent.whyChoose.items}
      />

      <StatsSection stats={[...homeContent.stats]} variant="brand" />

      <CalculatorPromo />

      <section className="py-20 md:py-28">
        <Container>
          <SectionTitle
            eyebrow="Who We Serve"
            title={homeContent.whoWeServe.title}
            description={homeContent.whoWeServe.description}
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <StaggerItem key={item.label}>
                <div className="glass flex items-center gap-4 rounded-[1.5rem] p-5 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,76,129,0.1)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.label}
                  </h3>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <FadeIn className="mt-8 text-center text-sm text-muted">
            Explore our{" "}
            <Link
              href="/medical-billing"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              medical billing services
            </Link>
            ,{" "}
            <Link
              href="/credentialing"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              provider credentialing services
            </Link>
            , and{" "}
            <Link
              href="/virtual-front-desk"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              virtual front desk for medical practice
            </Link>{" "}
            support.
          </FadeIn>
        </Container>
      </section>

      <Timeline
        eyebrow="How We Work"
        title="How We Work"
        description="A clear path from discovery to optimized collections, built for busy healthcare operators."
        steps={homeContent.howWeWork}
      />

      <Testimonials items={homeContent.testimonials} />

      <CtaBanner
        title="Get a Free Revenue Cycle Assessment"
        description="See how outsourcing medical billing and streamlining credentialing can increase collections and free your team for patient care."
        cta={homeContent.hero.primaryCta}
      />

      <FaqSection faqs={homeContent.faqs} />

      <CtaBanner
        title={homeContent.finalCta.title}
        description={homeContent.finalCta.description}
        cta={homeContent.finalCta.cta}
      />
    </>
  );
}
