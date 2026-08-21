import Link from "next/link";
import { Cross, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, serviceLinks, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/sections/newsletter-form";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 bg-ink text-white">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr_1fr_1.15fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-white">
                <Cross className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              A trusted medical billing company and revenue cycle management
              partner helping healthcare providers increase collections, reduce
              denials, and run more efficient practices.
            </p>
            <div className="mt-7 space-y-3 text-sm text-white/65">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 text-accent" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </span>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tools/revenue-leakage-calculator"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Revenue Leakage Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  Free Revenue Cycle Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/45">
              Newsletter
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              Get practical insights on medical billing services, denial
              prevention, and practice operations.
            </p>
            <div className="mt-5">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs md:text-sm">
            NAP: {siteConfig.name} · {siteConfig.address.city},{" "}
            {siteConfig.address.state} · {siteConfig.phone}
          </p>
        </div>
      </Container>
    </footer>
  );
}
