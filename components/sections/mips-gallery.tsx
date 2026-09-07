"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const mipsProjectItems = [
  {
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1400&q=80",
    label: "Quality Measure Selection",
    alt: "Laptop dashboard used to compare MIPS quality measure options",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    label: "Performance Tracking",
    alt: "Dashboards and charts used to monitor MIPS scores throughout the year",
  },
  {
    image:
      "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&w=1400&q=80",
    label: "Promoting Interoperability",
    alt: "EHR workstation used for Promoting Interoperability attestation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    label: "CMS Data Submission",
    alt: "Specialist preparing Quality Payment Program files and attestations",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=1400&q=80",
    label: "Score Optimization",
    alt: "Financial planning used to protect Medicare reimbursement scores",
  },
];

export function MipsGallery() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="How We Support MIPS"
          title="Reporting Work That Protects Medicare Payment"
          description="From measure selection and year-round score tracking to Promoting Interoperability, CMS submission, and audit-ready documentation, we keep Quality Payment Program work organized so penalties stay off the table."
        />
        <div className="mt-8 md:mt-10">
          <AccordionGallery
            items={mipsProjectItems}
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
          Ready to plan this performance year?{" "}
          <Link
            href="/contact"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            Get a free MIPS consultation
          </Link>{" "}
          or pair reporting with{" "}
          <Link
            href="/medical-billing"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            medical billing services
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
