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
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import {
  ClipboardCheck,
  MapPinned,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export const metadata = buildMetadata({
  title: homeContent.seo.title,
  description: homeContent.seo.description,
  path: "/",
  keywords: [...homeContent.seo.keywords],
});

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

      <section className="section-surface border-b py-7 md:py-8">
        <Container>
          <FadeIn>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {[
                {
                  label: "HIPAA-aware workflows",
                  icon: ShieldCheck,
                },
                {
                  label: "Transparent reporting",
                  icon: ClipboardCheck,
                },
                {
                  label: "Specialty-aware specialists",
                  icon: Stethoscope,
                },
                {
                  label: "US-focused RCM support",
                  icon: MapPinned,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group relative inline-flex cursor-default items-center gap-2.5 rounded-full border border-transparent bg-white/50 px-4 py-2.5 text-sm font-medium text-muted shadow-[0_4px_16px_rgba(15,76,129,0.04)] backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-accent/30 hover:bg-white hover:text-primary hover:shadow-[0_12px_28px_rgba(46,196,182,0.18)]"
                >
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-[0_6px_16px_rgba(46,196,182,0.35)]">
                    <item.icon
                      className="relative z-[1] h-4 w-4 transition-transform duration-300 group-hover:rotate-[-8deg]"
                      aria-hidden="true"
                    />
                    <span
                      className="pointer-events-none absolute inset-0 rounded-full bg-accent/30 opacity-0 group-hover:animate-ping group-hover:opacity-50"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="transition-colors duration-300">{item.label}</span>
                </div>
              ))}
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

      <WhoWeServe
        title={homeContent.whoWeServe.title}
        description={homeContent.whoWeServe.description}
      />

      <BenefitGrid
        eyebrow="Why Choose Us"
        title={homeContent.whyChoose.title}
        description="Healthcare providers choose a revenue cycle management company that increases collections while reducing administrative burden."
        items={homeContent.whyChoose.items}
      />

      <StatsSection stats={[...homeContent.stats]} variant="brand" />

      <CalculatorPromo />

      <ComparisonCallout
        title={homeContent.comparison.title}
        description={homeContent.comparison.description}
        items={homeContent.comparison.items}
      />

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
