"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const frontDeskProjectItems = [
  {
    image:
      "https://images.unsplash.com/photo-1626863905121-3b0c0ed7b94c?auto=format&fit=crop&w=1400&q=80",
    label: "Live Call Answering",
    alt: "Virtual receptionist wearing a headset and smiling while taking patient calls",
  },
  {
    image:
      "https://images.unsplash.com/photo-1580795479225-c50ab8c3348d?auto=format&fit=crop&w=1400&q=80",
    label: "Headset-Ready Support",
    alt: "Support specialist with headset typing at a front desk computer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603714228681-b399854b8f80?auto=format&fit=crop&w=1400&q=80",
    label: "Professional Reception Team",
    alt: "Customer support agent wearing a professional headset in an office",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80",
    label: "Appointment Scheduling",
    alt: "Healthcare staff coordinating appointments on a computer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1400&q=80",
    label: "Patient Check-In & Intake",
    alt: "Medical front desk helping a patient with registration and intake",
  },
];

export function VirtualFrontDeskGallery() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="How Virtual Support Looks"
          title="Front Desk Moments That Shape Every Patient Call"
          description="From headset-ready receptionists answering phones to scheduling, intake, and eligibility checks, our virtual front desk team keeps patients connected and your clinic running smoothly."
        />
        <div className="mt-8 md:mt-10">
          <AccordionGallery
            items={frontDeskProjectItems}
            defaultIndex={1}
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
            parallax={0.28}
            tilt={6}
          />
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Want coverage that feels like your own front desk?{" "}
          <Link
            href="/contact"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            Talk about front desk support
          </Link>{" "}
          or pair it with{" "}
          <Link
            href="/medical-billing"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            medical billing services
          </Link>{" "}
          for cleaner claim starts.
        </p>
      </Container>
    </section>
  );
}
