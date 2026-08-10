import Link from "next/link";
import { virtualFrontDeskContent } from "@/lib/content/virtual-front-desk";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  faqSchema,
  serviceSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceArt } from "@/components/illustrations/service-art";
import { HeroStatsOverlay } from "@/components/sections/hero-stats-overlay";
import { FeatureList } from "@/components/sections/feature-list";
import { BenefitGrid } from "@/components/sections/benefit-grid";
import { Timeline } from "@/components/sections/timeline";
import { StatsSection } from "@/components/sections/stats-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionTitle } from "@/components/section-title";

export const metadata = buildMetadata({
  title: virtualFrontDeskContent.seo.title,
  description: virtualFrontDeskContent.seo.description,
  path: "/virtual-front-desk",
  keywords: [...virtualFrontDeskContent.seo.keywords],
});

export default function VirtualFrontDeskPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          {
            name: "Virtual Front Desk Services",
            href: "/virtual-front-desk",
          },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Virtual Front Desk Services",
          description: virtualFrontDeskContent.seo.description,
          path: "/virtual-front-desk",
        })}
      />
      <JsonLd data={faqSchema([...virtualFrontDeskContent.faqs])} />

      <PageHero
        breadcrumb="Virtual Front Desk"
        eyebrow="Virtual Front Desk for Medical Practice"
        h1={virtualFrontDeskContent.hero.h1}
        subheadline={virtualFrontDeskContent.hero.subheadline}
        primaryCta={virtualFrontDeskContent.hero.primaryCta}
        secondaryCta={virtualFrontDeskContent.hero.secondaryCta}
        secondaryHref="/contact"
      >
        <HeroStatsOverlay
          stats={[
            { label: "Calls Answered", value: "90%+", tone: "primary" },
            { label: "Fewer No-Shows", value: "-30%", tone: "accent" },
            { label: "Staffing Savings", value: "50%", tone: "secondary" },
          ]}
        >
          <ServiceArt
            variant="front-desk"
            className="h-auto w-full drop-shadow-[0_24px_50px_rgba(15,76,129,0.12)]"
          />
        </HeroStatsOverlay>
      </PageHero>

      <section className="py-16 md:py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl space-y-5 text-center">
            {virtualFrontDeskContent.intro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-base leading-relaxed text-muted md:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </FadeIn>
        </Container>
      </section>

      <FeatureList
        title={virtualFrontDeskContent.includes.title}
        items={virtualFrontDeskContent.includes.items}
      />

      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionTitle
            title={virtualFrontDeskContent.efficiency.title}
            description={virtualFrontDeskContent.efficiency.description}
          />
          <FadeIn className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
            Cleaner intake and eligibility checks pair naturally with{" "}
            <Link
              href="/medical-billing"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              medical billing services
            </Link>{" "}
            to reduce preventable denials before claims are submitted.
          </FadeIn>
        </Container>
      </section>

      <BenefitGrid
        title={virtualFrontDeskContent.benefits.title}
        items={virtualFrontDeskContent.benefits.items}
      />

      <Timeline
        title="How Virtual Front Desk Onboarding Works"
        description="Customized coverage that matches your workflow, office hours, and communication preferences."
        steps={virtualFrontDeskContent.process}
      />

      <StatsSection
        stats={[...virtualFrontDeskContent.stats]}
        description="*Results vary by specialty, call volume, and scheduling policies."
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            title={virtualFrontDeskContent.flexible.title}
            description={virtualFrontDeskContent.flexible.description}
          />
        </Container>
      </section>

      <CtaBanner
        title={virtualFrontDeskContent.midCta.title}
        description={virtualFrontDeskContent.midCta.description}
        cta={virtualFrontDeskContent.midCta.cta}
      />

      <FaqSection
        title="Virtual Front Desk FAQs"
        description="Common questions about virtual front desk for medical practice support, medical answering service coverage, and eligibility verification."
        faqs={virtualFrontDeskContent.faqs}
      />

      <CtaBanner
        title={virtualFrontDeskContent.finalCta.title}
        description={virtualFrontDeskContent.finalCta.description}
        cta={virtualFrontDeskContent.finalCta.cta}
      />
    </>
  );
}
