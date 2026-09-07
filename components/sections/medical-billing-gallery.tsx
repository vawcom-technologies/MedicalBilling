"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const medicalBillingProjectItems = [
  {
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80",
    label: "Claim Scrubbing & Submission",
    alt: "Specialist preparing electronic claims on a laptop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=1400&q=80",
    label: "Payment Posting",
    alt: "Laptop and financial records used for payment posting and reconciliation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=1400&q=80",
    label: "Denial Rate Trends",
    alt: "Line graph showing denial rate performance over time",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=80",
    label: "Aging AR Dashboard",
    alt: "Analytics dashboard tracking aging accounts receivable",
  },
  {
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    label: "Payer Follow-Up",
    alt: "Insurance follow-up notes and claim files on a desk",
  },
];

export function MedicalBillingGallery() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="How We Run the Revenue Cycle"
          title="Billing Work That Turns Claims Into Collected Cash"
          description="From clean claim submission and payment posting to denial appeals, aging AR recovery, and payer follow-up, every step is managed so practices get paid faster with fewer write-offs."
        />
        <div className="mt-8 md:mt-10">
          <AccordionGallery
            items={medicalBillingProjectItems}
            defaultIndex={2}
            expandRatio={0.5}
            trigger="auto"
            height={440}
            gap={12}
            radius={24}
            accentColor="#2ec4b6"
            overlayColor="#0a365c"
            textColor="#ffffff"
            grayscale
            showLabels
            parallax={0.25}
            tilt={5}
          />
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Want a clearer picture of leakage first?{" "}
          <Link
            href="/tools/revenue-leakage-calculator"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            Use the revenue leakage calculator
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            get a free billing analysis
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
