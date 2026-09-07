"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const seoProjectItems = [
  {
    image:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=1400&q=80",
    label: "Local Search Visibility",
    alt: "Laptop showing local SEO for doctors and medical practice search visibility",
  },
  {
    image:
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?auto=format&fit=crop&w=1400&q=80",
    label: "Service Page Optimization",
    alt: "Marketer reviewing service page content on a laptop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1400&q=80",
    label: "Keyword Targeting",
    alt: "Search and keyword research work on a computer",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1400&q=80",
    label: "Technical SEO Fixes",
    alt: "Code and technical website fixes for search performance",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80",
    label: "Ranking Reports",
    alt: "Specialist reviewing search ranking and visibility reports",
  },
];

export function SeoGallery() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="How We Improve Visibility"
          title="SEO Work That Helps Patients Find Your Practice"
          description="From local search and service page targeting to technical fixes and clear reporting, we strengthen the search foundations that help the right patients discover your care."
        />
        <div className="mt-8 md:mt-10">
          <AccordionGallery
            items={seoProjectItems}
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
          Ready to improve search visibility?{" "}
          <Link
            href="/contact"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            Get an SEO consultation
          </Link>{" "}
          or start with a stronger foundation through{" "}
          <Link
            href="/webpage-development"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            webpage development
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
