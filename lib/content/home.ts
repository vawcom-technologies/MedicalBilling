import { siteConfig } from "@/lib/site-config";

export const homeContent = {
  seo: {
    title: `Medical Billing & Revenue Cycle Management Services | ${siteConfig.name}`,
    description:
      "Full-service medical billing, credentialing, and virtual front desk support for healthcare providers. Increase collections, reduce denials, and get paid faster.",
    keywords: [
      "medical billing services",
      "revenue cycle management company",
      "medical billing and credentialing",
      "outsource medical billing",
      "healthcare virtual assistant",
    ],
  },
  hero: {
    h1: "Medical Billing Services That Maximize Revenue and Reduce Administrative Burden",
    subheadline:
      "End-to-end revenue cycle management, credentialing, and front-desk support built so healthcare providers get paid faster and spend less time on paperwork.",
    primaryCta: siteConfig.cta.freeAssessment,
    secondaryCta: "Explore Our Services",
  },
  intro: `Healthcare providers should focus on delivering exceptional patient care, not chasing unpaid claims, correcting billing errors, or spending hours on insurance follow-ups. ${siteConfig.name} simplifies your entire revenue cycle, from patient registration and eligibility verification through claim submission, payment posting, denial management, and accounts receivable recovery, so every legitimate dollar gets collected, on time and in full.`,
  services: [
    {
      title: "Medical Billing Services",
      href: "/medical-billing",
      description:
        "Accurate coding, fast claim submission, and proactive denial management that keeps your cash flow predictable and your AR days low.",
      icon: "FileText",
    },
    {
      title: "Credentialing Services",
      href: "/credentialing",
      description:
        "We get providers enrolled with Medicare, Medicaid, and commercial payers faster, with fewer rejected applications and less back-and-forth.",
      icon: "BadgeCheck",
    },
    {
      title: "Virtual Front Desk Services",
      href: "/virtual-front-desk",
      description:
        "Trained healthcare support staff handle scheduling, intake, and insurance verification, so your patients get a seamless experience and your office runs on time.",
      icon: "Headset",
    },
  ],
  comparison: {
    title: "Stop Settling for Average Results",
    description:
      "Credentialing delays and denied claims are common with traditional agencies. Our team is built to keep enrollments moving and claims clean.",
    items: [
      {
        tone: "negative" as const,
        text: "Traditional agencies have a 50% failure rate with provider credentialing and patient billing.",
        highlight: "50% failure rate",
      },
      {
        tone: "positive" as const,
        text: `${siteConfig.name} achieves a 98% clean claim acceptance rate and provides dedicated support to review, correct, and resubmit denied claims efficiently.`,
        highlight: "98% clean claim acceptance rate",
      },
    ],
  },
  whyChoose: {
    title: "Why Healthcare Providers Choose Us",
    items: [
      "Increased collections and profitability",
      "Faster reimbursements and shorter AR cycles",
      "Reduced claim denial rates",
      "Lower operational and staffing costs",
      "Improved compliance and coding accuracy",
      "Full transparency through detailed performance reporting",
      "More time back for patient care",
    ],
  },
  whoWeServe: {
    title: "Who We Serve",
    description:
      "Independent physicians, specialty clinics, urgent care centers, behavioral health providers, and multi-provider practices. We tailor our billing, credentialing, and front-desk solutions to fit your workflow and growth goals.",
    industries: [
      "Independent Physicians",
      "Specialty Clinics",
      "Urgent Care Centers",
      "Behavioral Health",
      "Multi-Location Practices",
      "Multi-Provider Groups",
    ],
  },
  howWeWork: [
    {
      step: "01",
      title: "Discover",
      description:
        "We assess your current revenue cycle, denial patterns, and front-desk workflow to uncover leakage and opportunity.",
    },
    {
      step: "02",
      title: "Implement",
      description:
        "Our specialists configure coding, claim submission, credentialing, and virtual support around your specialty and EHR.",
    },
    {
      step: "03",
      title: "Optimize",
      description:
        "Continuous monitoring, denial prevention, and transparent reporting keep collections rising and AR days falling.",
    },
  ],
  stats: [
    { value: 98, suffix: "%", label: "Clean Claim Rate" },
    { value: 28, suffix: "%", label: "Avg. Collection Increase" },
    { value: 40, suffix: "%", label: "Denial Rate Reduction" },
    { value: 28, suffix: "", label: "Average AR Days" },
  ],
  testimonials: [
    {
      quote:
        "Outsourcing medical billing services to this team transformed our cash flow. Denials dropped and collections became predictable within the first quarter.",
      name: "Dr. Amanda Reyes",
      role: "Family Medicine Practice",
    },
    {
      quote:
        "Their credentialing specialists enrolled our new providers faster than we ever managed in-house. Clear updates the entire way.",
      name: "Marcus Chen",
      role: "Practice Administrator, Multi-Location Clinic",
    },
    {
      quote:
        "The virtual front desk team feels like an extension of our staff. Patients get answered calls, accurate scheduling, and smoother intake.",
      name: "Priya Nair",
      role: "Operations Director, Behavioral Health Group",
    },
  ],
  faqs: [
    {
      question: "What are medical billing services?",
      answer:
        "Medical billing services cover the full revenue cycle, including coding, claim submission, payment posting, denial management, insurance follow-up, and AR recovery, so healthcare providers get reimbursed accurately and on time.",
    },
    {
      question: "Should I outsource medical billing?",
      answer:
        "Outsourcing medical billing is ideal when your practice wants higher collections, fewer denials, and less administrative burden. A specialized revenue cycle management company brings expertise, technology, and dedicated follow-up that most in-house teams struggle to maintain.",
    },
    {
      question: "What is revenue cycle management?",
      answer:
        "Revenue cycle management (RCM) is the end-to-end process of capturing, managing, and collecting patient service revenue, from eligibility verification through final payment posting and reporting.",
    },
    {
      question: "Do you offer medical billing and credentialing together?",
      answer: `Yes. ${siteConfig.name} provides medical billing and credentialing as coordinated services so providers can enroll with payers and submit clean claims without gaps between enrollment and reimbursement.`,
    },
    {
      question: "How does a healthcare virtual assistant help my practice?",
      answer:
        "A healthcare virtual assistant supports scheduling, intake, insurance verification, and patient communication, improving front-desk capacity without increasing full-time staffing costs.",
    },
    {
      question: "How quickly can we get started?",
      answer:
        "Most practices begin with a free revenue cycle assessment. After onboarding and EHR access setup, billing and front-desk support can ramp within weeks depending on specialty complexity.",
    },
  ],
  finalCta: {
    title: "Ready to Maximize Collections and Simplify Operations?",
    description:
      "Schedule a free revenue cycle assessment and see how medical billing services, credentialing, and virtual front desk support can transform your practice finances.",
    cta: siteConfig.cta.freeAssessment,
  },
} as const;
