import Link from "next/link";
import { credentialingContent } from "@/lib/content/credentialing";
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
  title: credentialingContent.seo.title,
  description: credentialingContent.seo.description,
  path: "/credentialing",
  keywords: [...credentialingContent.seo.keywords],
});

export default function CredentialingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Credentialing Services", href: "/credentialing" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Provider Credentialing Services",
          description: credentialingContent.seo.description,
          path: "/credentialing",
        })}
      />
      <JsonLd data={faqSchema([...credentialingContent.faqs])} />

      <PageHero
        breadcrumb="Credentialing"
        eyebrow="Provider Credentialing Services"
        h1={credentialingContent.hero.h1}
        subheadline={credentialingContent.hero.subheadline}
        primaryCta={credentialingContent.hero.primaryCta}
        secondaryCta={credentialingContent.hero.secondaryCta}
        secondaryHref="/contact"
      >
        <HeroStatsOverlay
          stats={[
            { label: "Faster Enrollments", value: "60%", tone: "primary" },
            { label: "Application Accuracy", value: "95%", tone: "accent" },
            { label: "Payer Panels", value: "100+", tone: "secondary" },
          ]}
        >
          <ServiceArt
            variant="credentialing"
            className="h-auto w-full drop-shadow-[0_24px_50px_rgba(15,76,129,0.12)]"
          />
        </HeroStatsOverlay>
      </PageHero>

      <section className="py-16 md:py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {credentialingContent.intro}
            </p>
          </FadeIn>
        </Container>
      </section>

      <FeatureList
        title={credentialingContent.includes.title}
        description="From CAQH profile management to Medicare Medicaid enrollment and commercial payer enrollment services, managed with precision."
        items={credentialingContent.includes.items}
      />

      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionTitle
            title={credentialingContent.whyMatters.title}
            description={credentialingContent.whyMatters.description}
          />
          <FadeIn className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
            Once enrolled, keep revenue moving with{" "}
            <Link
              href="/medical-billing"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              medical billing services
            </Link>{" "}
            and{" "}
            <Link
              href="/contact"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              schedule a consultation
            </Link>{" "}
            to begin enrollment.
          </FadeIn>
        </Container>
      </section>

      <BenefitGrid
        eyebrow="Why Work With Us"
        title={credentialingContent.whyUs.title}
        description="Work with a medical credentialing company that treats payer enrollment as a revenue-critical workflow."
        items={credentialingContent.whyUs.items}
      />

      <Timeline
        title="Credentialing Timeline"
        description="A structured enrollment process with continuous follow-up until approval is secured."
        steps={credentialingContent.process}
      />

      <StatsSection
        stats={[...credentialingContent.stats]}
        description="*Timelines vary by payer. Faster results typically reflect cleaner packets and persistent follow-up."
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            title={credentialingContent.growing.title}
            description={credentialingContent.growing.description}
          />
        </Container>
      </section>

      <CtaBanner
        title={credentialingContent.midCta.title}
        description={credentialingContent.midCta.description}
        cta={credentialingContent.midCta.cta}
      />

      <FaqSection
        title="Credentialing FAQs"
        description="Answers about provider credentialing services, CAQH profile management, and payer enrollment timelines."
        faqs={credentialingContent.faqs}
      />

      <CtaBanner
        title={credentialingContent.finalCta.title}
        description={credentialingContent.finalCta.description}
        cta={credentialingContent.finalCta.cta}
      />
    </>
  );
}
