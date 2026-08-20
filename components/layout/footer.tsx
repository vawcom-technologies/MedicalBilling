import Link from "next/link";
import { Cross, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, serviceLinks, siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";
import { NewsletterForm } from "@/components/sections/newsletter-form";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-surface border-t">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1.1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent text-white">
                <Cross className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold text-primary">
                {siteConfig.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              A trusted medical billing company and revenue cycle management
              partner helping healthcare providers increase collections, reduce
              denials, and run more efficient practices.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Phone className="h-4 w-4 text-secondary" aria-hidden="true" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Mail className="h-4 w-4 text-secondary" aria-hidden="true" />
                {siteConfig.email}
              </a>
              <p className="flex items-start gap-2">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
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
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/tools/revenue-leakage-calculator"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  Revenue Leakage Calculator
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted transition-colors hover:text-primary"
                >
                  Free Revenue Cycle Assessment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
              Newsletter
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Get practical insights on medical billing services, denial
              prevention, and practice operations.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
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
