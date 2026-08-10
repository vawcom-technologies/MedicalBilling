export type PageGuide = {
  id: string;
  label: string;
  href: string;
  summary: string;
};

export const pageGuides: PageGuide[] = [
  {
    id: "home",
    label: "Home",
    href: "/",
    summary:
      "We provide end-to-end medical billing services, provider credentialing, and virtual front desk support so healthcare practices can increase collections, reduce denials, and spend less time on paperwork.",
  },
  {
    id: "medical-billing",
    label: "Medical Billing",
    href: "/medical-billing",
    summary:
      "Our medical billing services cover coding, electronic claim submission, payment posting, denial management, insurance follow-up, patient billing, and AR recovery, designed to get you paid faster with fewer rejections.",
  },
  {
    id: "credentialing",
    label: "Credentialing",
    href: "/credentialing",
    summary:
      "Provider credentialing services streamline payer enrollment with Medicare, Medicaid, and commercial insurers, plus CAQH management, NPI updates, recredentialing, and ongoing compliance follow-up.",
  },
  {
    id: "virtual-front-desk",
    label: "Virtual Front Desk",
    href: "/virtual-front-desk",
    summary:
      "Virtual front desk support handles appointment scheduling, insurance eligibility verification, patient intake, call answering, reminders, and referral coordination without adding full-time overhead.",
  },
  {
    id: "calculator",
    label: "Calculator",
    href: "/tools/revenue-leakage-calculator",
    summary:
      "The Revenue Leakage Calculator estimates how much your practice may be losing to claim denials and aging AR, then unlocks a personalized breakdown you can use before a free billing analysis.",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    summary:
      "We are a medical billing company and RCM partner focused on transparent reporting, specialty-aware specialists, and technology-driven processes that help practices improve financial performance.",
  },
  {
    id: "contact",
    label: "Contact",
    href: "/contact",
    summary:
      "Share your practice details and the service you need: medical billing, credentialing, or virtual front desk. Most inquiries receive a response within one business day, and consultations are free.",
  },
];

export function getPageGuide(id: string) {
  return pageGuides.find((page) => page.id === id) ?? pageGuides[0];
}
