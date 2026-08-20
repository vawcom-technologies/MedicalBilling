import { siteConfig } from "@/lib/site-config";

export const contactContent = {
  seo: {
    title: `Contact ${siteConfig.name} | Medical Billing & Credentialing Support`,
    description: `Get in touch with ${siteConfig.name} to discuss medical billing, credentialing, virtual front desk support, or a free consultation for your practice.`,
    keywords: [
      "contact medical billing company",
      "medical billing consultation",
      "provider credentialing support",
      "virtual front desk inquiry",
    ],
  },
  hero: {
    h1: "Let's Simplify Your Revenue Cycle",
    subheadline:
      "Tell us about your practice and we'll show you how much time and revenue you could recover. Fill out the form below or reach us directly. Most inquiries get a response within one business day.",
    primaryCta: siteConfig.cta.consultation,
  },
  details: {
    phone: siteConfig.phone,
    email: siteConfig.email,
    address: `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`,
    hours: [
      siteConfig.hours.weekdays,
      siteConfig.hours.saturday,
      siteConfig.hours.sunday,
    ],
  },
  services: [
    "Medical Billing Services",
    "Credentialing Services",
    // "MIPS Services", // Re-enable later with /mips page
    "Virtual Front Desk Services",
    "Website Development",
    "Social Media Marketing",
    "SEO Services",
    "Full Revenue Cycle Assessment",
    "Other / Not Sure",
  ],
  faqs: [
    {
      question: "How quickly will someone respond?",
      answer:
        "Most inquiries receive a response within one business day. For urgent credentialing or billing transitions, call us directly.",
    },
    {
      question: "What happens after I submit the form?",
      answer:
        "A specialist reviews your practice details, confirms the services you need, and schedules a free consultation or assessment call.",
    },
    {
      question: "Can I request a billing analysis before switching vendors?",
      answer:
        "Yes. Many practices start with a free billing and collections analysis to quantify denial leakage and AR opportunity before onboarding.",
    },
  ],
  finalCta: {
    title: "Prefer to Talk Now?",
    description: `Call ${siteConfig.phone} or email ${siteConfig.email}. We're ready to help with medical billing, credentialing, and virtual front desk support.`,
    cta: siteConfig.cta.consultation,
  },
} as const;
