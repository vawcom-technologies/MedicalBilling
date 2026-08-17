import { siteConfig } from "@/lib/site-config";

export type DigitalServiceContent = {
  path: string;
  breadcrumb: string;
  eyebrow: string;
  seo: {
    title: string;
    description: string;
    keywords: readonly string[];
  };
  hero: {
    h1: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
  };
  intro: readonly string[];
  includes: {
    title: string;
    items: readonly { title: string; detail: string }[];
  };
  whyMatters: {
    title: string;
    description: string;
  };
  whyUs: {
    title: string;
    items: readonly string[];
  };
  process: readonly {
    step: string;
    title: string;
    description: string;
  }[];
  stats: readonly {
    value: number;
    suffix: string;
    label: string;
  }[];
  faqs: readonly { question: string; answer: string }[];
  midCta: { title: string; description: string; cta: string };
  finalCta: { title: string; description: string; cta: string };
};

export const websiteDevelopmentContent: DigitalServiceContent = {
  path: "/website-development",
  breadcrumb: "Website Development",
  eyebrow: "Website Development Services",
  seo: {
    title: `Website Development for Medical Practices | ${siteConfig.name}`,
    description:
      "Get a fast, mobile-friendly practice website with clear service pages, strong contact paths, and conversion-focused design built for healthcare providers.",
    keywords: [
      "medical practice website development",
      "healthcare website design",
      "doctor website development",
      "clinic website design",
    ],
  },
  hero: {
    h1: "Website Development That Helps Patients Find and Choose Your Practice",
    subheadline:
      "Your website is often the first impression patients get of your practice. We build modern, mobile-ready sites that explain your services clearly and make it easy to get in touch.",
    primaryCta: siteConfig.cta.websiteDevelopment,
    secondaryCta: "Talk About Your Website",
  },
  intro: [
    "We design and develop healthcare practice websites that look professional, load quickly, and guide visitors toward booking or contacting your team.",
    "From single-location clinics to multi-provider groups, every site is built around clarity, trust, and conversion, not clutter.",
  ],
  includes: {
    title: "What’s Included",
    items: [
      {
        title: "Custom practice website design",
        detail:
          "Clean layouts tailored to your specialty, brand, and patient audience so your practice looks polished and trustworthy online.",
      },
      {
        title: "Mobile-first development",
        detail:
          "Sites are built to perform on phones and tablets first, because most patients research providers on mobile devices.",
      },
      {
        title: "Service and specialty pages",
        detail:
          "Clear pages for your core services help patients understand what you offer and improve your local search footprint.",
      },
      {
        title: "Contact and conversion paths",
        detail:
          "Prominent phone, form, and appointment CTAs make it easy for visitors to take the next step without hunting for contact details.",
      },
      {
        title: "Speed and technical foundations",
        detail:
          "We prioritize fast load times, secure setup, and structured pages so your site is ready for SEO and ongoing marketing.",
      },
      {
        title: "Launch support and handoff",
        detail:
          "From content placement to go-live checks, we help you launch confidently and keep your online presence easy to maintain.",
      },
    ],
  },
  whyMatters: {
    title: "Why Your Practice Website Matters",
    description:
      "Patients compare providers online before they call. An outdated, slow, or unclear website can send them to a competitor. A strong website builds trust quickly and turns search traffic into real inquiries.",
  },
  whyUs: {
    title: "Why Work With Us?",
    items: [
      "Healthcare-aware design and messaging",
      "Mobile-first builds focused on conversions",
      "Clear service pages patients can understand",
      "Fast, modern technical foundations",
      "Easy paths to call, message, or inquire",
      "Ready for SEO and social growth",
    ],
  },
  process: [
    {
      step: "01",
      title: "Discover",
      description:
        "Review your goals, services, branding, and current site to define the right structure and priorities.",
    },
    {
      step: "02",
      title: "Design",
      description:
        "Create a clean, conversion-focused layout that reflects your practice and guides visitors clearly.",
    },
    {
      step: "03",
      title: "Build",
      description:
        "Develop a fast, mobile-ready website with service pages, contact paths, and launch-ready content.",
    },
    {
      step: "04",
      title: "Launch",
      description:
        "Publish, test, and hand off a polished site your team can use and grow with confidence.",
    },
  ],
  stats: [
    { value: 100, suffix: "%", label: "Mobile-Ready Builds" },
    { value: 1, suffix: "", label: "Dedicated Project Path" },
    { value: 24, suffix: "/7", label: "Online Presence" },
    { value: 3, suffix: "x", label: "Clearer Patient Paths*" },
  ],
  faqs: [
    {
      question: "Do you build websites for medical practices?",
      answer:
        "Yes. We develop modern, mobile-friendly websites for clinics, physicians, and multi-provider practices.",
    },
    {
      question: "Can you redesign our existing website?",
      answer:
        "Absolutely. Many practices start with a redesign to improve speed, clarity, mobile experience, and inquiry conversion.",
    },
    {
      question: "Will the site work well on phones?",
      answer:
        "Yes. Every website is built mobile-first so patients can browse services and contact you easily from any device.",
    },
    {
      question: "Can the website support SEO later?",
      answer:
        "Yes. We structure pages, headings, and service content so your site is ready for SEO and local search growth.",
    },
  ],
  midCta: {
    title: "Ready for a Stronger Practice Website?",
    description:
      "Get a clear plan for a modern site that helps patients understand your services and reach your team.",
    cta: siteConfig.cta.websiteDevelopment,
  },
  finalCta: {
    title: "Build a Website Patients Can Trust",
    description: `Partner with ${siteConfig.name} for website development built around clarity, speed, and patient conversion.`,
    cta: siteConfig.cta.websiteDevelopment,
  },
};

export const socialMediaMarketingContent: DigitalServiceContent = {
  path: "/social-media-marketing",
  breadcrumb: "Social Media Marketing",
  eyebrow: "Social Media Marketing Services",
  seo: {
    title: `Social Media Marketing for Healthcare Practices | ${siteConfig.name}`,
    description:
      "Stay visible and build patient trust with healthcare-appropriate social media marketing, content planning, and consistent brand presence.",
    keywords: [
      "healthcare social media marketing",
      "medical practice social media",
      "clinic social media management",
      "doctor social media marketing",
    ],
  },
  hero: {
    h1: "Social Media Marketing That Builds Trust and Keeps Your Practice Visible",
    subheadline:
      "Consistent, professional social content helps patients recognize your practice, learn about your services, and feel confident reaching out.",
    primaryCta: siteConfig.cta.socialMedia,
    secondaryCta: "Talk About Social Media",
  },
  intro: [
    "We help healthcare practices stay active on social media without adding extra work for your staff.",
    "From educational posts to service highlights and community updates, we keep your brand present with messaging that feels professional and patient-friendly.",
  ],
  includes: {
    title: "What’s Included",
    items: [
      {
        title: "Content planning and calendars",
        detail:
          "A steady posting plan keeps your practice visible with a mix of educational, promotional, and trust-building content.",
      },
      {
        title: "Healthcare-appropriate messaging",
        detail:
          "We shape posts that fit your specialty and tone, keeping communication clear, professional, and patient-focused.",
      },
      {
        title: "Platform management support",
        detail:
          "Stay active on the channels that matter most to your audience with consistent publishing and brand presence.",
      },
      {
        title: "Visual and brand consistency",
        detail:
          "Posts follow a cohesive look and voice so your practice feels recognizable and polished across platforms.",
      },
      {
        title: "Engagement and community support",
        detail:
          "We help keep conversations moving so your practice stays responsive and approachable online.",
      },
      {
        title: "Performance tracking",
        detail:
          "Simple reporting shows what content resonates so your social presence can improve over time.",
      },
    ],
  },
  whyMatters: {
    title: "Why Social Media Matters for Practices",
    description:
      "Patients look for more than a phone number. They look for proof that a practice is active, caring, and professional. Social media keeps your brand present between visits and helps new patients feel familiar before they book.",
  },
  whyUs: {
    title: "Why Work With Us?",
    items: [
      "Healthcare-aware content and tone",
      "Consistent posting without staff overload",
      "Clear service and education messaging",
      "Brand-consistent visuals and voice",
      "Support for engagement and visibility",
      "Reporting that shows what works",
    ],
  },
  process: [
    {
      step: "01",
      title: "Discover",
      description:
        "Review your brand, audience, and goals to define the right platforms and content themes.",
    },
    {
      step: "02",
      title: "Plan",
      description:
        "Build a content calendar with educational, service, and trust-building posts tailored to your practice.",
    },
    {
      step: "03",
      title: "Publish",
      description:
        "Create and share consistent content that keeps your practice visible and approachable.",
    },
    {
      step: "04",
      title: "Improve",
      description:
        "Track engagement and refine topics, formats, and posting cadence based on results.",
    },
  ],
  stats: [
    { value: 4, suffix: "x", label: "Monthly Content Cadence*" },
    { value: 1, suffix: "", label: "Brand Voice System" },
    { value: 24, suffix: "/7", label: "Always-On Presence" },
    { value: 100, suffix: "%", label: "Practice-Aligned Posts" },
  ],
  faqs: [
    {
      question: "Can you manage social media for our clinic?",
      answer:
        "Yes. We help practices stay active with healthcare-appropriate content, planning, and consistent brand presence.",
    },
    {
      question: "Do we need to create the posts ourselves?",
      answer:
        "No. We handle planning and content creation so your staff is not stuck managing social media day to day.",
    },
    {
      question: "Which platforms do you support?",
      answer:
        "We focus on the platforms that best fit your audience and goals, typically including major social channels used by local patients.",
    },
    {
      question: "How do we measure social media results?",
      answer:
        "We track engagement, reach, and content performance, then share clear reporting so you know what is working.",
    },
  ],
  midCta: {
    title: "Ready to Stay Visible on Social?",
    description:
      "Get a practical social media plan that builds trust and keeps your practice present online.",
    cta: siteConfig.cta.socialMedia,
  },
  finalCta: {
    title: "Turn Social Presence Into Patient Trust",
    description: `Partner with ${siteConfig.name} for social media marketing that stays consistent, professional, and patient-focused.`,
    cta: siteConfig.cta.socialMedia,
  },
};

export const seoServicesContent: DigitalServiceContent = {
  path: "/seo-services",
  breadcrumb: "SEO Services",
  eyebrow: "SEO Services",
  seo: {
    title: `SEO Services for Medical Practices | ${siteConfig.name}`,
    description:
      "Improve local and specialty search visibility with SEO services built for healthcare practices that want more patient discovery online.",
    keywords: [
      "SEO for medical practices",
      "healthcare SEO services",
      "local SEO for doctors",
      "clinic search engine optimization",
    ],
  },
  hero: {
    h1: "SEO Services That Help Patients Find Your Practice Online",
    subheadline:
      "When patients search for care in your specialty or area, SEO helps your practice show up. We improve visibility with practical, healthcare-focused search optimization.",
    primaryCta: siteConfig.cta.seoServices,
    secondaryCta: "Talk About SEO",
  },
  intro: [
    "Our SEO services help practices strengthen website structure, local visibility, and content so the right patients can discover you through search.",
    "We focus on practical improvements that support long-term growth, not short-term tricks.",
  ],
  includes: {
    title: "What’s Included",
    items: [
      {
        title: "Website SEO foundations",
        detail:
          "We optimize titles, headings, service pages, and technical structure so search engines can understand and rank your practice clearly.",
      },
      {
        title: "Local search visibility",
        detail:
          "Improve how your practice appears for location-based searches so nearby patients are more likely to find you first.",
      },
      {
        title: "Specialty and service keyword targeting",
        detail:
          "We align your pages around the services and conditions patients actually search for in your specialty.",
      },
      {
        title: "Content recommendations",
        detail:
          "Clear guidance on service pages and educational content helps you cover important search topics without guesswork.",
      },
      {
        title: "On-page improvements",
        detail:
          "From internal links to page clarity, we refine the site experience so visitors and search engines both get better signals.",
      },
      {
        title: "Tracking and reporting",
        detail:
          "Transparent reporting shows visibility progress and opportunities so you can see how SEO supports growth over time.",
      },
    ],
  },
  whyMatters: {
    title: "Why SEO Matters for Practices",
    description:
      "Most patients start with a search. If your practice is hard to find, competitors capture that attention. SEO helps you show up for the services you already provide and convert more of that demand into inquiries.",
  },
  whyUs: {
    title: "Why Work With Us?",
    items: [
      "Healthcare and local-search focused",
      "Practical website and content improvements",
      "Clear specialty and service targeting",
      "No black-box reporting",
      "Built to support long-term visibility",
      "Pairs well with web and social growth",
    ],
  },
  process: [
    {
      step: "01",
      title: "Audit",
      description:
        "Review your website, local presence, and search opportunities to identify the highest-impact fixes.",
    },
    {
      step: "02",
      title: "Optimize",
      description:
        "Improve page structure, service targeting, and on-page SEO foundations across key practice pages.",
    },
    {
      step: "03",
      title: "Expand",
      description:
        "Strengthen content and local visibility so patients searching for your services can find you more easily.",
    },
    {
      step: "04",
      title: "Measure",
      description:
        "Track rankings, visibility, and opportunities, then refine the plan based on real performance.",
    },
  ],
  stats: [
    { value: 1, suffix: "", label: "Search Growth Plan" },
    { value: 24, suffix: "/7", label: "Discoverability" },
    { value: 100, suffix: "%", label: "Practice-Focused SEO" },
    { value: 3, suffix: "", label: "Core Visibility Levers" },
  ],
  faqs: [
    {
      question: "What does SEO for healthcare practices include?",
      answer:
        "SEO typically includes website optimization, local search improvements, service-page targeting, content guidance, and ongoing visibility tracking.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a longer-term channel. Many practices see meaningful progress as foundations improve and content compounds, but timelines vary by competition and current site strength.",
    },
    {
      question: "Do we need a new website before SEO?",
      answer:
        "Not always. We can improve an existing site, but a slow or poorly structured website may need updates first for SEO to perform well.",
    },
    {
      question: "Can SEO work with social media and website development?",
      answer:
        "Yes. Website development, social media, and SEO reinforce each other. A strong site, active presence, and search visibility work best together.",
    },
  ],
  midCta: {
    title: "Ready to Improve Search Visibility?",
    description:
      "Get a clear SEO plan focused on helping patients find your practice for the services you already offer.",
    cta: siteConfig.cta.seoServices,
  },
  finalCta: {
    title: "Show Up Where Patients Are Searching",
    description: `Partner with ${siteConfig.name} for SEO services that strengthen local and specialty visibility over time.`,
    cta: siteConfig.cta.seoServices,
  },
};
