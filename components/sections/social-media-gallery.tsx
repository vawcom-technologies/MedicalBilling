"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const socialMediaItems = [
  {
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1400&q=80",
    label: "Content Calendars",
    alt: "Social media app icons on a phone screen",
  },
  {
    image:
      "https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1400&q=80",
    label: "Brand Story Posts",
    alt: "Marketing team reviewing creative campaign ideas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    label: "Patient Education Content",
    alt: "Team collaborating on content and messaging",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
    label: "Community Engagement",
    alt: "Person managing social conversations on a smartphone",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    label: "Growth Reporting",
    alt: "Team discussing performance results in a meeting",
  },
];

export function SocialMediaGallery() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="How We Show Up"
          title="Social Content Built to Keep Practices Visible"
          description="From planned posting calendars to education content, community replies, and clear reporting, we help your practice stay active online without adding work for your staff."
        />
        <div className="mt-10 md:mt-12">
          <AccordionGallery
            items={socialMediaItems}
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
          Ready to stay consistent on social?{" "}
          <Link
            href="/contact"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            Talk about social media marketing
          </Link>{" "}
          or strengthen discovery with{" "}
          <Link
            href="/seo-services"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            SEO services
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
