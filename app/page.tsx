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
          <div className="surface-panel absolute -left-2 bottom-8 hidden rounded-2xl px-5 py-3.5 md:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              Clean Claim Rate
            </p>
            <p className="font-display text-2xl font-semibold text-primary">98%</p>
          </div>
          <div className="surface-panel absolute -right-2 top-10 hidden rounded-2xl px-5 py-3.5 md:block">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
              Collection Lift
            </p>
            <p className="font-display text-2xl font-semibold text-accent">+28%</p>
          </div>
        </div>
      </PageHero>

      <section className="border-y border-primary/8 bg-white/40 py-8 md:py-9">
        <Container>
          <FadeIn>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                  className="flex items-center gap-3 rounded-2xl border border-primary/8 bg-white/70 px-4 py-3.5"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-mist text-primary">
                    <item.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-relaxed text-muted md:text-lg md:leading-relaxed">
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
