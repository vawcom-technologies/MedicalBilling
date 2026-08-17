"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const audienceItems = [
  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=80",
    label: "Independent Physicians",
    alt: "Physician reviewing patient care",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=80",
    label: "Specialty Clinics",
    alt: "Specialty clinic hallway",
  },
  {
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1400&q=80",
    label: "Urgent Care Centers",
    alt: "Urgent care medical setting",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=80",
    label: "Behavioral Health",
    alt: "Healthcare professional with tablet",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1400&q=80",
    label: "Multi-Provider Groups",
    alt: "Modern medical facility exterior",
  },
];

type WhoWeServeProps = {
  title: string;
  description: string;
};

export function WhoWeServe({ title, description }: WhoWeServeProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="Who We Serve"
          title={title}
          description={description}
        />
        <FadeIn delay={0.08} className="mt-10 md:mt-12">
          <AccordionGallery
            items={audienceItems}
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
            parallax={0.25}
            tilt={5}
          />
        </FadeIn>
        <FadeIn className="mt-8 text-center text-sm text-muted">
          Explore our{" "}
          <Link
            href="/medical-billing"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            medical billing services
          </Link>
          ,{" "}
          <Link
            href="/credentialing"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            provider credentialing services
          </Link>
          , and{" "}
          <Link
            href="/virtual-front-desk"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            virtual front desk for medical practice
          </Link>{" "}
          support.
        </FadeIn>
      </Container>
    </section>
  );
}
