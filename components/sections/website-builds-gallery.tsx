"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const websiteProjectItems = [
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    label: "New Practice Sites",
    alt: "Laptop open to analytics and website planning tools",
  },
  {
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    label: "Full Site Redesigns",
    alt: "Developer reviewing code on a monitor during a website rebuild",
  },
  {
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80",
    label: "Service Landing Pages",
    alt: "Designer reviewing website layouts on a desk",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    label: "Mobile First Builds",
    alt: "Person browsing a website on a smartphone",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    label: "Conversion Focused Layouts",
    alt: "Dashboard and charts on a computer monitor",
  },
];

export function WebsiteBuildsGallery() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="What We Build"
          title="Website Projects That Help Practices Grow Online"
          description="From brand new practice websites to redesigns, landing pages, and mobile ready builds, every project is shaped to help patients understand your care and reach your team."
        />
        <div className="mt-10 md:mt-12">
          <AccordionGallery
            items={websiteProjectItems}
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
          Want a site that converts visitors into inquiries?{" "}
          <Link
            href="/contact"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            Book a website consultation
          </Link>{" "}
          or pair your launch with{" "}
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
