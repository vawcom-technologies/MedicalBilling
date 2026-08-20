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
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    label: "Service Page Optimization",
    alt: "Person reviewing documents and charts for page improvements",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    label: "Keyword Targeting",
    alt: "Analytics charts used for search performance tracking",
  },
  {
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80",
    label: "Technical SEO Fixes",
    alt: "Hands typing on a laptop during website optimization",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1400&q=80",
    label: "Ranking Reports",
    alt: "Dashboard screens showing performance metrics",
  },
];

export function SeoGallery() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="How We Improve Visibility"
          title="SEO Work That Helps Patients Find Your Practice"
          description="From local search and service page targeting to technical fixes and clear reporting, we strengthen the search foundations that help the right patients discover your care."
        />
        <div className="mt-10 md:mt-12">
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
            href="/website-development"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            website development
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
