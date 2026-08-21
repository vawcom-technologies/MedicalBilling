import Link from "next/link";
import type { ReactNode } from "react";
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
import type { DigitalServiceContent } from "@/lib/content/digital-services";

export function buildDigitalServiceMetadata(content: DigitalServiceContent) {
  return buildMetadata({
    title: content.seo.title,
    description: content.seo.description,
    path: content.path,
    keywords: [...content.seo.keywords],
  });
}

export function DigitalServicePage({
  content,
  serviceName,
  afterFeatures,
}: {
  content: DigitalServiceContent;
  serviceName: string;
  afterFeatures?: ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: serviceName, href: content.path },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: serviceName,
          description: content.seo.description,
          path: content.path,
        })}
      />
      <JsonLd data={faqSchema([...content.faqs])} />

      <PageHero
        breadcrumb={content.breadcrumb}
        eyebrow={content.eyebrow}
        h1={content.hero.h1}
        subheadline={content.hero.subheadline}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        secondaryHref="/contact"
      >
        <HeroStatsOverlay
          stats={[
            { label: "Focus", value: "Growth", tone: "primary" },
            { label: "Audience", value: "Patients", tone: "accent" },
            { label: "Approach", value: "Clear", tone: "secondary" },
          ]}
        >
          <ServiceArt
            variant="digital-marketing"
            className="h-auto w-full drop-shadow-[0_24px_50px_rgba(15, 107, 99,0.12)]"
          />
        </HeroStatsOverlay>
      </PageHero>

      <section className="py-20 md:py-24">
        <Container>
          <FadeIn className="mx-auto max-w-3xl space-y-5 text-center">
            {content.intro.map((paragraph) => (
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

      {afterFeatures}

      <FeatureList title={content.includes.title} items={content.includes.items} />

      <section className="bg-background py-20 md:py-28">
        <Container>
          <SectionTitle
            title={content.whyMatters.title}
            description={content.whyMatters.description}
          />
          <FadeIn className="mx-auto mt-8 max-w-3xl text-center text-sm text-muted">
            Explore related services like{" "}
            <Link
              href="/website-development"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              website development
            </Link>
            ,{" "}
            <Link
              href="/social-media-marketing"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              social media marketing
            </Link>
            , and{" "}
            <Link
              href="/seo-services"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              SEO services
            </Link>
            , or{" "}
            <Link
              href="/contact"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              schedule a consultation
            </Link>
            .
          </FadeIn>
        </Container>
      </section>

      <BenefitGrid title={content.whyUs.title} items={content.whyUs.items} />

      <Timeline
        title="How We Work"
        description="A clear process from discovery through launch and ongoing improvement."
        steps={content.process}
      />

      <StatsSection stats={[...content.stats]} />

      <CtaBanner
        title={content.midCta.title}
        description={content.midCta.description}
        cta={content.midCta.cta}
      />

      <FaqSection
        title={`${content.breadcrumb} FAQs`}
        description={content.seo.description}
        faqs={content.faqs}
      />

      <CtaBanner
        title={content.finalCta.title}
        description={content.finalCta.description}
        cta={content.finalCta.cta}
      />
    </>
  );
}
