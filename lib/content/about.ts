import { siteConfig } from "@/lib/site-config";

export const aboutContent = {
  seo: {
    title: `About ${siteConfig.name} | Medical Billing & RCM Experts`,
    description: `Learn about ${siteConfig.name}, a trusted revenue cycle management partner helping healthcare providers get paid faster and run more efficient practices.`,
    keywords: [
      "medical billing company",
      "RCM partner",
      "healthcare BPO",
      "revenue cycle management company",
    ],
  },
  hero: {
    h1: "Your Trusted Partner in Revenue Cycle Management",
    subheadline: `${siteConfig.name} partners with healthcare providers to simplify billing, credentialing, and front-office operations so practices can focus on patient care instead of paperwork.`,
    primaryCta: siteConfig.cta.consultation,
    secondaryCta: "Meet Our Approach",
  },
  story: `Our team combines industry expertise with modern billing technology to reduce denials, accelerate reimbursements, and improve the financial health of every practice we work with. As a medical billing company and RCM partner, we bring healthcare BPO discipline to independent physicians, clinics, and growing multi-location organizations.`,
  mission: {
    title: "Our Mission",
    description: siteConfig.mission,
  },
  vision: {
    title: "Our Vision",
    description: siteConfig.vision,
  },
  values: {
    title: "Our Values",
    items: siteConfig.values,
  },
  whyPartner: {
    title: "Why Partner With Us",
    items: [
      "Dedicated, US-focused revenue cycle experts",
      "Transparent reporting and open communication",
      "Technology-driven processes that reduce errors",
      "Scalable support for solo practices through multi-location groups",
    ],
  },
  timeline: [
    {
      year: "Founding",
      title: "Built for Practice Operators",
      description:
        "We started as a medical billing company focused on one outcome: helping clinicians get paid accurately without drowning in admin.",
    },
    {
      year: "Expansion",
      title: "Credentialing + Front Desk",
      description:
        "Providers asked for more than claims, so we added payer enrollment and virtual front desk support as a true RCM partner stack.",
    },
    {
      year: "Today",
      title: "Technology-Driven RCM",
      description:
        "Modern workflows, transparent analytics, and specialty-aware specialists help practices scale with confidence.",
    },
  ],
  stats: [
    {
      value: siteConfig.stats.providersServed,
      label: "Providers Served",
    },
    {
      value: siteConfig.stats.collectionIncrease,
      label: "Average Collection Increase",
    },
    {
      value: siteConfig.stats.denialReduction,
      label: "Denial Rate Reduction",
    },
    {
      value: siteConfig.stats.yearsExperience,
      label: "Years of Experience",
    },
  ],
  team: [
    {
      name: "Revenue Cycle Leadership",
      role: "Billing & AR Strategy",
      description:
        "Experienced RCM leaders who design denial prevention, payer follow-up, and reporting frameworks for each specialty.",
    },
    {
      name: "Credentialing Specialists",
      role: "Payer Enrollment",
      description:
        "Enrollment experts who manage CAQH, Medicare/Medicaid, and commercial panels with meticulous documentation.",
    },
    {
      name: "Virtual Front Desk Team",
      role: "Patient Experience Ops",
      description:
        "Trained healthcare support professionals who protect first impressions while keeping schedules and intake accurate.",
    },
  ],
  certifications: {
    title: "Healthcare Certifications & Standards",
    description:
      "Our billing and coding workflows are guided by industry best practices. Update this section with client-specific credentials such as AAPC/CPC-certified coders, HIPAA training programs, and payer enrollment certifications.",
    items: [
      "AAPC / CPC-aligned coding standards",
      "HIPAA-aware operational protocols",
      "Payer policy compliance monitoring",
      "Secure healthcare data handling practices",
    ],
  },
  faqs: [
    {
      question: "What makes you different from other medical billing companies?",
      answer: `${siteConfig.name} combines medical billing, credentialing, and virtual front desk support so practices get a coordinated RCM partner instead of fragmented vendors.`,
    },
    {
      question: "Do you work with small practices?",
      answer:
        "Yes. We support solo physicians through multi-location groups with scalable healthcare BPO workflows tailored to each practice size.",
    },
    {
      question: "How transparent is your reporting?",
      answer:
        "Transparency is core to our partnership model. Practices receive clear performance reporting on collections, denials, AR, and operational KPIs.",
    },
    {
      question: "Can you integrate with our existing systems?",
      answer:
        "We align to your EHR and practice management workflows wherever access and compliance requirements allow, minimizing disruption during transition.",
    },
  ],
  finalCta: {
    title: "Meet the Team Behind Better Collections",
    description:
      "Schedule a consultation and learn how a dedicated medical billing company can strengthen your revenue cycle and free your staff for patient care.",
    cta: "Meet the Team / Schedule a Consultation",
  },
} as const;
