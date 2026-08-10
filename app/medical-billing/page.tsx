import Link from "next/link";
import { medicalBillingContent } from "@/lib/content/medical-billing";
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
import { CalculatorPromo } from "@/components/sections/calculator-promo";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { SectionTitle } from "@/components/section-title";

export const metadata = buildMetadata({
  title: medicalBillingContent.seo.title,
  description: medicalBillingContent.seo.description,
  path: "/medical-billing",
  keywords: [...medicalBillingContent.seo.keywords],
});

export default function MedicalBillingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Medical Billing Services", href: "/medical-billing" },
        ])}
      />
      <JsonLd
        data={serviceSchema({
          name: "Medical Billing Services",
          description: medicalBillingContent.seo.description,
          path: "/medical-billing",
        })}
      />
      <JsonLd data={faqSchema([...medicalBillingContent.faqs])} />

      <PageHero
        breadcrumb="Medical Billing"
        eyebrow="Medical Billing Services"
        h1={medicalBillingContent.hero.h1}
        subheadline={medicalBillingContent.hero.subheadline}
        primaryCta={medicalBillingContent.hero.primaryCta}
        secondaryCta={medicalBillingContent.hero.secondaryCta}
        secondaryHref="/contact"
      >
        <HeroStatsOverlay
          stats={[
            { label: "First-Pass Acceptance", value: "98%", tone: "primary" },
            { label: "Faster Reimbursements", value: "+35%", tone: "accent" },
            { label: "Fewer Denials", value: "-45%", tone: "secondary" },
          ]}
        >
          <ServiceArt
            variant="billing"
            className="h-auto w-full drop-shadow-[0_24px_50px_rgba(15,76,129,0.12)]"
          />
        </HeroStatsOverlay>
      </PageHero>

      <section className="py-16 md:py-20">
        <Container>
          <FadeIn className="mx-auto max-w-3xl space-y-5 text-center">
            {medicalBillingContent.intro.map((paragraph) => (
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
        title={medicalBillingContent.includes.title}
        items={medicalBillingContent.includes.items}
      />

      <section className="bg-background py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <SectionTitle
              align="left"
              eyebrow="Billing Expertise"
              title={medicalBillingContent.whyTeam.title}
              description={medicalBillingContent.whyTeam.description}
            />
            <FadeIn delay={0.1}>
              <div className="glass rounded-[1.75rem] p-8">
                <h3 className="text-lg font-semibold text-foreground">
                  Related services that strengthen collections
                </h3>
                <ul className="mt-5 space-y-3 text-sm text-muted">
                  <li>
                    Pair billing with{" "}
                    <Link
                      href="/credentialing"
                      className="font-semibold text-secondary underline-offset-4 hover:underline"
                    >
                      provider credentialing services
                    </Link>{" "}
                    so enrollment gaps never stall reimbursement.
                  </li>
                  <li>
                    Add a{" "}
                    <Link
                      href="/virtual-front-desk"
                      className="font-semibold text-secondary underline-offset-4 hover:underline"
                    >
                      virtual front desk for medical practice
                    </Link>{" "}
                    support to improve eligibility accuracy before claims leave
                    the office.
                  </li>
                  <li>
                    Talk with our team on the{" "}
                    <Link
                      href="/contact"
                      className="font-semibold text-secondary underline-offset-4 hover:underline"
                    >
                      contact page
                    </Link>{" "}
                    for a free billing analysis.
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <BenefitGrid
        title={medicalBillingContent.benefits.title}
        items={medicalBillingContent.benefits.items}
      />

      <Timeline
        title="Our Medical Billing Process"
        description="From eligibility to AR recovery, a proactive workflow designed to protect every legitimate dollar."
        steps={medicalBillingContent.process}
      />

      <StatsSection stats={[...medicalBillingContent.stats]} />

      <CalculatorPromo
        title="Estimate Denial & AR Leakage Before You Switch Vendors"
        description="Run our free Revenue Leakage Calculator to quantify potential losses, then request a free billing and collections analysis."
      />

      <section className="py-20 md:py-24">
        <Container>
          <SectionTitle
            title={medicalBillingContent.specialties.title}
            description={medicalBillingContent.specialties.description}
          />
        </Container>
      </section>

      <CtaBanner
        title={medicalBillingContent.midCta.title}
        description={medicalBillingContent.midCta.description}
        cta={medicalBillingContent.midCta.cta}
      />

      <FaqSection
        title="Medical Billing FAQs"
        description="Common questions about medical billing services, medical coding services, denial management, and AR recovery."
        faqs={medicalBillingContent.faqs}
      />

      <CtaBanner
        title={medicalBillingContent.finalCta.title}
        description={medicalBillingContent.finalCta.description}
        cta={medicalBillingContent.finalCta.cta}
      />
    </>
  );
}
