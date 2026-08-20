import { siteConfig } from "@/lib/site-config";
import { pageGuides } from "@/lib/content/page-summaries";

export type SupportFaq = {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  topic: SupportTopicId;
};

export type SupportTopicId =
  | "billing"
  | "credentialing"
  // | "mips" // Re-enable later with /mips page
  | "front-desk"
  | "website-development"
  | "social-media"
  | "seo"
  | "pricing"
  | "getting-started"
  | "results";

export type SupportTopic = {
  id: SupportTopicId;
  label: string;
  description: string;
  href: string;
};

export const supportTopics: SupportTopic[] = [
  {
    id: "billing",
    label: "Medical Billing",
    description: "Claims, denials, AR, and collections",
    href: "/medical-billing",
  },
  {
    id: "credentialing",
    label: "Credentialing",
    description: "Payer enrollment and timelines",
    href: "/credentialing",
  },
  // Re-enable later with /mips page:
  // {
  //   id: "mips",
  //   label: "MIPS",
  //   description: "Quality Payment Program reporting",
  //   href: "/mips",
  // },
  {
    id: "front-desk",
    label: "Front Desk",
    description: "Scheduling, intake, and eligibility",
    href: "/virtual-front-desk",
  },
  {
    id: "website-development",
    label: "Websites",
    description: "Practice website development",
    href: "/website-development",
  },
  {
    id: "social-media",
    label: "Social Media",
    description: "Content and brand presence",
    href: "/social-media-marketing",
  },
  {
    id: "seo",
    label: "SEO",
    description: "Search visibility growth",
    href: "/seo-services",
  },
  {
    id: "pricing",
    label: "Pricing",
    description: "Cost and how fees work",
    href: "/contact",
  },
  {
    id: "getting-started",
    label: "Getting Started",
    description: "Onboarding and next steps",
    href: "/contact",
  },
  {
    id: "results",
    label: "Results",
    description: "Clean claims and collection lift",
    href: "/",
  },
];

/** Common questions site visitors actually ask */
export const supportFaqs: SupportFaq[] = [
  {
    id: "what-is-included-billing",
    topic: "billing",
    question: "What’s included in your medical billing services?",
    keywords: [
      "included",
      "what do you do",
      "billing services",
      "full service",
      "rcm",
      "claims",
    ],
    answer:
      "Our medical billing services cover electronic claim submission, payment posting, denial management, insurance follow-up, patient billing, and AR recovery. The goal is cleaner claims, fewer rejections, and faster reimbursement so your team can focus on patients.",
  },
  {
    id: "reduce-denials",
    topic: "billing",
    question: "Can you help reduce claim denials?",
    keywords: [
      "denial",
      "denied",
      "rejection",
      "clean claim",
      "resubmit",
      "appeals",
    ],
    answer: `Yes. We focus on clean claim submission and dedicated denial follow-up. ${siteConfig.name} targets a high clean-claim rate and reviews, corrects, and resubmits denied claims so revenue does not sit idle in AR.`,
  },
  {
    id: "specialties",
    topic: "billing",
    question: "What specialties do you support?",
    keywords: [
      "specialty",
      "specialties",
      "physician",
      "clinic",
      "urgent care",
      "behavioral",
      "who do you serve",
    ],
    answer:
      "We support independent physicians, specialty clinics, urgent care centers, behavioral health providers, and multi-provider or multi-location practices. Billing and front-desk workflows are tailored to your specialty and EHR.",
  },
  {
    id: "ehr",
    topic: "billing",
    question: "Do you work with my EHR / practice management system?",
    keywords: [
      "ehr",
      "emr",
      "practice management",
      "software",
      "system",
      "integration",
      "epic",
      "athena",
      "ecw",
    ],
    answer:
      "Yes. During onboarding we configure workflows around your existing EHR and practice management system. Share your platform on the Contact page and we’ll confirm the best setup for your practice.",
  },
  {
    id: "credentialing-timeline",
    topic: "credentialing",
    question: "How long does provider credentialing take?",
    keywords: [
      "how long",
      "timeline",
      "credentialing take",
      "enrollment time",
      "when can i bill",
      "payer enrollment",
    ],
    answer:
      "Credentialing timelines vary by payer and completeness of documentation, but delays usually come from missing paperwork or slow follow-up. Our team manages CAQH, NPI updates, Medicare/Medicaid and commercial enrollments, and ongoing recredentialing so applications keep moving.",
  },
  {
    id: "credentialing-included",
    topic: "credentialing",
    question: "What does credentialing include?",
    keywords: [
      "credentialing include",
      "caqh",
      "npi",
      "medicare",
      "medicaid",
      "recredentialing",
      "enrollment",
    ],
    answer:
      "Provider credentialing includes payer enrollment with Medicare, Medicaid, and commercial insurers, CAQH profile management, NPI updates, recredentialing, and compliance follow-up so new and existing providers stay billable.",
  },
  // Re-enable later with /mips page:
  // {
  //   id: "mips-what",
  //   topic: "mips",
  //   question: "What do your MIPS services include?",
  //   keywords: [
  //     "mips",
  //     "quality payment",
  //     "qpp",
  //     "merit-based",
  //     "promoting interoperability",
  //     "improvement activities",
  //     "quality measures",
  //   ],
  //   answer:
  //     "Our MIPS services cover eligibility review, quality measure selection, Promoting Interoperability and Improvement Activities guidance, year-round performance tracking, and data submission support so practices can protect Medicare payment adjustments.",
  // },
  // {
  //   id: "mips-when",
  //   topic: "mips",
  //   question: "When should we start preparing for MIPS?",
  //   keywords: [
  //     "mips deadline",
  //     "when to start mips",
  //     "mips reporting",
  //     "performance year",
  //     "submission",
  //   ],
  //   answer:
  //     "Ideally at the start of the performance year. Early measure selection and documentation habits usually produce stronger scores than a year-end rush. We can also help mid-year with gap analysis and submission planning.",
  // },
  {
    id: "front-desk-help",
    topic: "front-desk",
    question: "What does the virtual front desk handle?",
    keywords: [
      "front desk",
      "scheduling",
      "appointment",
      "intake",
      "eligibility",
      "phone",
      "calls",
      "reminder",
      "virtual assistant",
    ],
    answer:
      "Virtual front desk support covers appointment scheduling, insurance eligibility verification, patient intake, call answering, reminders, and referral coordination. It expands front-desk capacity without adding full-time overhead.",
  },
  {
    id: "website-development-included",
    topic: "website-development",
    question: "Do you build websites for medical practices?",
    keywords: [
      "website",
      "web development",
      "website development",
      "redesign",
      "site",
    ],
    answer:
      "Yes. We build modern, mobile-friendly practice websites with clear service pages and easy contact paths so patients can find what they need and reach your team.",
  },
  {
    id: "social-media-included",
    topic: "social-media",
    question: "Can you manage social media for our clinic?",
    keywords: [
      "social media",
      "social",
      "instagram",
      "facebook",
      "posts",
      "content",
    ],
    answer:
      "Yes. Our social media marketing support helps practices stay active with healthcare-appropriate content that builds trust and keeps your brand visible.",
  },
  {
    id: "seo-included",
    topic: "seo",
    question: "What does SEO for healthcare practices include?",
    keywords: [
      "seo",
      "search",
      "google",
      "ranking",
      "local seo",
      "search engine",
    ],
    answer:
      "SEO services typically include website optimization, local search improvements, service-page targeting, content guidance, and visibility tracking so patients can find you more easily.",
  },
  {
    id: "pricing",
    topic: "pricing",
    question: "How much do your services cost?",
    keywords: [
      "price",
      "pricing",
      "cost",
      "fee",
      "how much",
      "rates",
      "percentage",
      "contract",
    ],
    answer: `Pricing depends on specialty, claim volume, and which services you need (billing, credentialing, front desk, website development, social media, SEO, or a combination). Most practices start with a free consultation so we can recommend a clear plan. Contact ${siteConfig.name} for a tailored quote.`,
  },
  {
    id: "get-started",
    topic: "getting-started",
    question: "How do we get started?",
    keywords: [
      "get started",
      "onboarding",
      "start",
      "next steps",
      "assessment",
      "consultation",
      "sign up",
    ],
    answer: `Most practices begin with a free revenue cycle assessment. After that, we handle onboarding and EHR access setup. Billing and front-desk support can typically ramp within weeks depending on specialty complexity. Use the Contact page to schedule your consultation.`,
  },
  {
    id: "results",
    topic: "results",
    question: "What results should we expect?",
    keywords: [
      "results",
      "collection",
      "clean claim",
      "ar days",
      "performance",
      "increase",
      "roi",
      "stats",
    ],
    answer: `Practices typically look for higher collections, fewer denials, and shorter AR cycles. Our published targets include about a ${siteConfig.stats.collectionIncrease} average collection lift, ${siteConfig.stats.denialReduction} denial reduction, and roughly ${siteConfig.stats.avgArDays} average AR days, with a strong clean-claim focus.`,
  },
  {
    id: "outsource",
    topic: "billing",
    question: "Should I outsource medical billing?",
    keywords: [
      "outsource",
      "in-house",
      "in house",
      "vs",
      "worth it",
      "why outsource",
    ],
    answer:
      "Outsourcing is a strong fit when you want higher collections, fewer denials, and less admin burden. A specialized RCM partner brings dedicated follow-up, denial prevention, and reporting that many in-house teams struggle to sustain.",
  },
  {
    id: "calculator",
    topic: "results",
    question: "What does the Revenue Leakage Calculator show?",
    keywords: [
      "calculator",
      "leakage",
      "losing",
      "estimate",
      "ar aging",
      "tool",
    ],
    answer:
      "The Revenue Leakage Calculator estimates monthly and annual losses tied to claim denials and aging AR. After a quick intake, you unlock a personalized breakdown you can use before a free billing analysis.",
  },
  {
    id: "billing-and-credentialing",
    topic: "getting-started",
    question: "Do you offer billing and credentialing together?",
    keywords: [
      "together",
      "both",
      "bundle",
      "billing and credentialing",
      "combined",
    ],
    answer: `Yes. ${siteConfig.name} offers medical billing and credentialing as coordinated services so providers can enroll with payers and submit clean claims without gaps between enrollment and reimbursement.`,
  },
  {
    id: "response-time",
    topic: "getting-started",
    question: "How quickly will someone get back to me?",
    keywords: [
      "response",
      "how fast",
      "reply",
      "business day",
      "contact",
      "hear back",
    ],
    answer: `Most inquiries receive a response within one business day. For the fastest path, schedule a free consultation on the Contact page or call ${siteConfig.phone}.`,
  },
];

/** Short chips shown on the main chat home */
export const popularQuestions = [
  "What’s included in your medical billing services?",
  "How long does provider credentialing take?",
  "How much do your services cost?",
  "Can you help reduce claim denials?",
  "How do we get started?",
  "What does the virtual front desk handle?",
] as const;

export function getSupportTopic(id: string) {
  return supportTopics.find((topic) => topic.id === id);
}

export function getFaqsForTopic(topicId: SupportTopicId) {
  return supportFaqs.filter((faq) => faq.topic === topicId);
}

export function findFaqByQuestion(question: string) {
  const normalized = question.trim().toLowerCase();
  const exact = supportFaqs.find(
    (faq) => faq.question.toLowerCase() === normalized
  );
  if (exact) return exact;

  let best: SupportFaq | null = null;
  let bestScore = 0;

  for (const faq of supportFaqs) {
    let score = 0;
    for (const keyword of faq.keywords) {
      if (normalized.includes(keyword.toLowerCase())) score += 1;
    }
    // Light boost when question words overlap with FAQ title
    for (const word of faq.question.toLowerCase().split(/\W+/)) {
      if (word.length > 4 && normalized.includes(word)) score += 0.25;
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }

  return bestScore >= 1 ? best : null;
}

export function buildKnowledgeContext() {
  const faqBlock = supportFaqs
    .map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`)
    .join("\n\n");
  const pageBlock = pageGuides
    .map((page) => `${page.label} (${page.href}): ${page.summary}`)
    .join("\n");

  return `Company: ${siteConfig.name}
Services: medical billing, provider credentialing, virtual front desk, website development, social media marketing, SEO
Phone: ${siteConfig.phone}
Email: ${siteConfig.email}
CTA: free consultation / free revenue cycle assessment

Page context:
${pageBlock}

Common visitor FAQs:
${faqBlock}`;
}
