"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const credentialingProjectItems = [
  {
    image:
      "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=1400&q=80",
    label: "Initial Provider Enrollment",
    alt: "Organized enrollment files prepared for a new provider packet",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80",
    label: "Medicare & Medicaid",
    alt: "Enrollment agreement handshake for government payer participation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1400&q=80",
    label: "CAQH Profile Management",
    alt: "Organized paperwork and digital forms for CAQH attestation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=80",
    label: "Commercial Payer Panels",
    alt: "Team coordinating commercial insurance payer enrollment",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1400&q=80",
    label: "Recredentialing & Renewals",
    alt: "Calendar and planner used to track recredentialing deadlines",
  },
];

export function CredentialingGallery() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="How We Enroll Providers"
          title="Credentialing Work That Keeps Enrollment Moving"
          description="From initial packets and CAQH maintenance to Medicare, Medicaid, and commercial payer follow-up, every step is managed so providers get enrolled accurately and start billing sooner."
        />
        <div className="mt-8 md:mt-10">
          <AccordionGallery
            items={credentialingProjectItems}
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
          Ready to get providers enrolled faster?{" "}
          <Link
            href="/contact"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            Start your credentialing application
          </Link>{" "}
          or keep revenue moving with{" "}
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
