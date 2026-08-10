import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contactContent } from "@/lib/content/contact";
import { siteConfig } from "@/lib/site-config";
import { buildMetadata } from "@/lib/seo";
import {
  breadcrumbSchema,
  contactPageSchema,
  faqSchema,
} from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { ContactForm } from "@/components/sections/contact-form";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { HeroStatsRow } from "@/components/sections/hero-stats-overlay";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/motion/fade-in";

export const metadata = buildMetadata({
  title: contactContent.seo.title,
  description: contactContent.seo.description,
  path: "/contact",
  keywords: [...contactContent.seo.keywords],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Contact", href: "/contact" },
        ])}
      />
      <JsonLd data={contactPageSchema()} />
      <JsonLd data={faqSchema([...contactContent.faqs])} />

      <section className="hero-gradient noise-overlay relative overflow-hidden pb-10 pt-32 md:pb-16 md:pt-40">
        <Container className="relative z-[2]">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm text-muted">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2">/</span>
              <span className="font-medium text-foreground">Contact</span>
            </p>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Contact
            </p>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-[3.2rem]">
              {contactContent.hero.h1}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {contactContent.hero.subheadline}
            </p>
            <HeroStatsRow
              stats={[
                {
                  label: "Response Time",
                  value: "1 Day",
                  tone: "primary",
                },
                {
                  label: "Free Consultations",
                  value: "100%",
                  tone: "accent",
                },
                {
                  label: "Support Coverage",
                  value: "Mon–Fri",
                  tone: "secondary",
                },
              ]}
            />
          </FadeIn>
        </Container>
      </section>

      <section className="pb-20 pt-6 md:pb-28">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <FadeIn>
              <div className="space-y-5">
                <div className="glass rounded-[1.5rem] p-6">
                  <h2 className="text-xl font-bold text-foreground">
                    Contact Details
                  </h2>
                  <ul className="mt-5 space-y-4 text-sm text-muted">
                    <li className="flex items-start gap-3">
                      <Phone
                        className="mt-0.5 h-5 w-5 text-secondary"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold text-foreground">Phone</p>
                        <a
                          href={`tel:${siteConfig.phone}`}
                          className="transition hover:text-primary"
                        >
                          {contactContent.details.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail
                        className="mt-0.5 h-5 w-5 text-secondary"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold text-foreground">Email</p>
                        <a
                          href={`mailto:${siteConfig.email}`}
                          className="transition hover:text-primary"
                        >
                          {contactContent.details.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin
                        className="mt-0.5 h-5 w-5 text-secondary"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold text-foreground">Office</p>
                        <p>{contactContent.details.address}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock
                        className="mt-0.5 h-5 w-5 text-secondary"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-semibold text-foreground">
                          Office Hours
                        </p>
                        {contactContent.details.hours.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="glass overflow-hidden rounded-[1.5rem]">
                  <div
                    className="flex h-64 items-center justify-center bg-[linear-gradient(135deg,#e8f3fb_0%,#f4fbf9_100%)]"
                    role="img"
                    aria-label="Google Maps placeholder for medical billing company office location"
                  >
                    <div className="text-center">
                      <MapPin
                        className="mx-auto h-8 w-8 text-primary"
                        aria-hidden="true"
                      />
                      <p className="mt-3 text-sm font-semibold text-foreground">
                        Map Placeholder
                      </p>
                      <p className="mt-1 px-6 text-xs text-muted">
                        Replace with your Google Maps embed once the office
                        address is finalized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ContactForm />
            </FadeIn>
          </div>
        </Container>
      </section>

      <FaqSection
        title="Contact FAQs"
        description="What to expect when you reach out about medical billing, credentialing, or virtual front desk support."
        faqs={contactContent.faqs}
      />

      <CtaBanner
        title={contactContent.finalCta.title}
        description={contactContent.finalCta.description}
        cta={contactContent.finalCta.cta}
      />
    </>
  );
}
