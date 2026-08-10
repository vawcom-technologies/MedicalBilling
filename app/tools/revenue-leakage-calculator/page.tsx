import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";
import { RevenueLeakageCalculator } from "@/components/tools/revenue-leakage-calculator";
import { CtaBanner } from "@/components/sections/cta-banner";
import { FaqSection } from "@/components/sections/faq-section";
import { HeroStatsRow } from "@/components/sections/hero-stats-overlay";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    question: "What is a revenue leakage calculator?",
    answer:
      "A revenue leakage calculator estimates how much a practice may be losing to claim denials and aging accounts receivable based on collections, specialty benchmarks, and revenue-cycle health indicators.",
  },
  {
    question: "Is this estimate the same as a formal billing audit?",
    answer:
      "No. This tool provides an educational, directional estimate. A free billing and collections analysis from our team can validate actual leakage using your claim and AR data.",
  },
  {
    question: "What if I don’t know my denial rate or AR days?",
    answer:
      "Select “Not sure.” We’ll apply specialty-aware benchmarks so you still receive a useful estimate and recommended next steps.",
  },
  {
    question: "How does this connect to medical billing services?",
    answer: `After reviewing your estimate, ${siteConfig.name} can help reduce denials, accelerate reimbursements, and recover aging AR through full-service medical billing and revenue cycle management.`,
  },
];

export const metadata = buildMetadata({
  title: `Revenue Leakage Calculator | Estimate Denied Claims & Aging AR | ${siteConfig.name}`,
  description:
    "Estimate how much your practice may be losing to claim denials and aging AR. Unlock a personalized revenue leakage breakdown and get a free billing analysis.",
  path: "/tools/revenue-leakage-calculator",
  keywords: [
    "revenue leakage calculator",
    "medical billing denials calculator",
    "accounts receivable recovery estimate",
    "outsource medical billing",
    "denial management services",
  ],
});

export default function RevenueLeakageCalculatorPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          {
            name: "Revenue Leakage Calculator",
            href: "/tools/revenue-leakage-calculator",
          },
        ])}
      />
      <JsonLd data={faqSchema(faqs)} />

      <section className="hero-gradient noise-overlay relative overflow-hidden pb-10 pt-32 md:pb-14 md:pt-40">
        <Container className="relative z-[2]">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm text-muted">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="font-medium text-foreground">Calculator</span>
            </p>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Free Practice Tool
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.2rem]">
              Revenue Leakage Calculator
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              Estimate how much your practice may be losing to claim denials and
              aging AR, then unlock a personalized breakdown and talk with our{" "}
              <Link
                href="/medical-billing"
                className="font-semibold text-secondary underline-offset-4 hover:underline"
              >
                medical billing services
              </Link>{" "}
              team about recovery opportunities.
            </p>
            <HeroStatsRow
              stats={[
                {
                  label: "Takes",
                  value: "< 60s",
                  tone: "primary",
                },
                {
                  label: "Avg. Leakage Found",
                  value: "3–8%",
                  tone: "accent",
                },
                {
                  label: "Recovery Potential",
                  value: "40–70%",
                  tone: "secondary",
                },
              ]}
            />
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20 pt-4 md:pb-28">
        <Container>
          <FadeIn>
            <RevenueLeakageCalculator />
          </FadeIn>
          <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-relaxed text-muted">
            This calculator provides educational estimates only and is not a
            substitute for a formal revenue cycle audit. Actual results vary by
            payer mix, specialty, documentation quality, and follow-up
            processes.
          </p>
        </Container>
      </section>

      <FaqSection
        title="Calculator FAQs"
        description="Quick answers about estimating denial leakage and aging AR risk."
        faqs={faqs}
      />

      <CtaBanner
        title="Ready to Recover Lost Revenue?"
        description="Share your calculator results with our team and get a free billing and collections analysis tailored to your practice."
        cta={siteConfig.cta.billingAnalysis}
      />
    </>
  );
}
