export const siteConfig = {
  name: "MedSol",
  legalName: "MedSol",
  tagline: "Medical Billing • Credentialing • Virtual Front Desk",
  description:
    "Full-service medical billing, credentialing, and virtual front desk support for healthcare providers. Increase collections, reduce denials, and get paid faster.",
  url: "https://www.example.com",
  phone: "[Phone]",
  email: "info@medsolcare.com",
  address: {
    street: "[Street Address]",
    city: "[City]",
    state: "[State]",
    zip: "[ZIP]",
    country: "US",
  },
  hours: {
    weekdays: "Monday – Friday: 8:00 AM – 6:00 PM",
    saturday: "Saturday: Closed",
    sunday: "Sunday: Closed",
  },
  social: {
    linkedin: "https://www.linkedin.com/",
    facebook: "https://www.facebook.com/",
    twitter: "https://x.com/",
  },
  stats: {
    providersServed: "250+",
    collectionIncrease: "28%",
    denialReduction: "40%",
    avgArDays: "28",
    yearsExperience: "10+",
    claimsProcessed: "1M+",
  },
  mission:
    "To empower healthcare providers with accurate, transparent, and technology-driven revenue cycle solutions that maximize collections and free clinicians to focus on exceptional patient care.",
  vision:
    "To become the most trusted revenue cycle partner for independent practices and growing healthcare organizations nationwide.",
  values: [
    {
      title: "Accuracy First",
      description:
        "Every claim, application, and patient interaction is handled with precision and accountability.",
    },
    {
      title: "Transparent Partnership",
      description:
        "Clear reporting, open communication, and measurable results with no black-box billing.",
    },
    {
      title: "Patient-Centered Ops",
      description:
        "We protect the patient experience while strengthening the financial health of your practice.",
    },
    {
      title: "Continuous Improvement",
      description:
        "We stay current on payer rules and compliance so your practice stays ahead.",
    },
  ],
  cta: {
    primary: "Schedule Consultation",
    freeAssessment: "Schedule a Free Revenue Cycle Assessment",
    billingAnalysis: "Get a Free Billing & Collections Analysis",
    credentialing: "Start Your Credentialing Application Today",
    mips: "Get a Free MIPS Consultation", // Used when /mips page is re-enabled
    frontDesk: "Talk to Us About Front Desk Support",
    consultation: "Schedule a Free Consultation",
    discovery: "Book a Discovery Call",
    experts: "Talk to Our Experts",
    websiteDevelopment: "Get a Free Website Consultation",
    socialMedia: "Talk About Social Media Marketing",
    seoServices: "Get a Free SEO Consultation",
  },
} as const;

export type SiteConfig = typeof siteConfig;

export const navLinks = [
  { href: "/", label: "Home", short: "Home" },
  { href: "/medical-billing", label: "Medical Billing", short: "Billing" },
  { href: "/credentialing", label: "Credentialing", short: "Credentialing" },
  // Re-enable later: { href: "/mips", label: "MIPS", short: "MIPS" },
  {
    href: "/virtual-front-desk",
    label: "Virtual Front Desk",
    short: "Front Desk",
  },
  {
    href: "/tools/revenue-leakage-calculator",
    label: "Calculator",
    short: "Calculator",
  },
  { href: "/about", label: "About", short: "About" },
  { href: "/contact", label: "Contact", short: "Contact" },
] as const;

/** Dropdown under the Services nav item */
export const servicesMenuLinks = [
  {
    href: "/website-development",
    label: "Website Development",
    short: "Websites",
  },
  {
    href: "/social-media-marketing",
    label: "Social Media Marketing",
    short: "Social",
  },
  {
    href: "/seo-services",
    label: "SEO Services",
    short: "SEO",
  },
] as const;

export const serviceLinks = [
  {
    href: "/medical-billing",
    title: "Medical Billing Services",
    short: "Medical Billing",
  },
  {
    href: "/credentialing",
    title: "Credentialing Services",
    short: "Credentialing",
  },
  // Re-enable later:
  // {
  //   href: "/mips",
  //   title: "MIPS Services",
  //   short: "MIPS",
  // },
  {
    href: "/virtual-front-desk",
    title: "Virtual Front Desk Services",
    short: "Virtual Front Desk",
  },
  {
    href: "/website-development",
    title: "Website Development",
    short: "Website Development",
  },
  {
    href: "/social-media-marketing",
    title: "Social Media Marketing",
    short: "Social Media Marketing",
  },
  {
    href: "/seo-services",
    title: "SEO Services",
    short: "SEO Services",
  },
] as const;
