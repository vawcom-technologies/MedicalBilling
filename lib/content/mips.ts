import { siteConfig } from "@/lib/site-config";

export const mipsContent = {
  seo: {
    title: `MIPS Services | Medicare Quality Payment Program Support | ${siteConfig.name}`,
    description:
      "Expert MIPS reporting and Quality Payment Program support for healthcare practices. Measure selection, data submission, score optimization, and penalty avoidance.",
    keywords: [
      "MIPS services",
      "MIPS reporting",
      "Merit-based Incentive Payment System",
      "Quality Payment Program",
      "Medicare MIPS consulting",
    ],
  },
  hero: {
    h1: "MIPS Services That Protect Your Medicare Reimbursement",
    subheadline:
      "The Merit-based Incentive Payment System (MIPS) affects how Medicare pays your practice. Incomplete reporting, wrong measure choices, or missed deadlines can mean payment penalties — while strong performance can unlock positive adjustments.",
    primaryCta: siteConfig.cta.mips,
    secondaryCta: "Talk to a MIPS Specialist",
  },
  intro: [
    `Our MIPS Services help clinicians and practices navigate the Quality Payment Program with clear measure strategy, accurate data capture, and reliable submission support — so you stay compliant, avoid avoidable penalties, and improve your Composite Performance Score.`,
  ],
  includes: {
    title: "Our MIPS Solutions Include",
    items: [
      {
        title: "MIPS eligibility and category review",
        detail:
          "We confirm your eligibility, reporting year requirements, and which MIPS categories apply so your plan matches current CMS rules instead of last year’s assumptions.",
      },
      {
        title: "Quality measure selection",
        detail:
          "We help you choose quality measures that fit your specialty, patient mix, and documentation workflow — prioritizing measures you can report accurately and score competitively.",
      },
      {
        title: "Promoting Interoperability support",
        detail:
          "Our team guides EHR-based Promoting Interoperability requirements, including measure completion, exclusion documentation, and evidence needed for a clean attestation.",
      },
      {
        title: "Improvement Activities guidance",
        detail:
          "We map Improvement Activities to work your practice already does (or can implement), document completion properly, and avoid activities that create busywork without score value.",
      },
      {
        title: "Cost category awareness",
        detail:
          "While Cost is calculated from Medicare claims, we help you understand how utilization patterns and attribution can influence scores so operational decisions stay informed.",
      },
      {
        title: "Performance tracking and gap analysis",
        detail:
          "Throughout the year we monitor measure performance, flag documentation gaps early, and recommend course corrections before submission season.",
      },
      {
        title: "Data submission and attestation",
        detail:
          "We support EHR, registry, and CMS submission pathways, validate files and attestations, and help you meet reporting deadlines without last-minute scrambling.",
      },
      {
        title: "Score optimization strategy",
        detail:
          "We focus on the highest-impact levers for your Composite Performance Score so effort goes toward measures and activities that protect reimbursement.",
      },
      {
        title: "Audit-ready documentation",
        detail:
          "Evidence, attestations, and measure logic are organized so your practice can respond confidently if CMS or a vendor requests supporting documentation.",
      },
    ],
  },
  whyMatters: {
    title: "Why MIPS Reporting Matters",
    description:
      "MIPS payment adjustments can raise or lower your Medicare Part B reimbursement for years after the performance period. Practices that treat MIPS as a year-end scramble often miss easy points, while a structured approach protects revenue and reduces compliance risk.",
  },
  whyUs: {
    title: "Why Work With Us?",
    items: [
      "Clear measure strategy tailored to your specialty",
      "Year-round tracking instead of last-minute filing",
      "EHR and registry submission support",
      "Penalty-avoidance and score-improvement focus",
      "Audit-ready documentation habits",
      "Coordination with billing and credentialing teams",
    ],
  },
  growing: {
    title: "Built for Busy Practices",
    description:
      "Whether you are a solo clinician or a multi-provider group, our MIPS specialists translate CMS requirements into a practical plan your team can follow — without pulling clinicians away from patient care for weeks of research and spreadsheet work.",
  },
  process: [
    {
      step: "01",
      title: "Eligibility & Baseline",
      description:
        "Confirm MIPS participation status, review prior-year performance, and identify category requirements for the current reporting period.",
    },
    {
      step: "02",
      title: "Measure Strategy",
      description:
        "Select quality measures, Improvement Activities, and Promoting Interoperability paths that fit your specialty and systems.",
    },
    {
      step: "03",
      title: "Track & Improve",
      description:
        "Monitor performance during the year, close documentation gaps, and adjust tactics before submission deadlines.",
    },
    {
      step: "04",
      title: "Submit & Review",
      description:
        "Complete data submission or attestation, validate results, and debrief so next year’s plan starts stronger.",
    },
  ],
  stats: [
    { value: 4, suffix: "", label: "MIPS Categories Supported" },
    { value: 100, suffix: "%", label: "Deadline Tracking Focus" },
    { value: 1, suffix: "", label: "Dedicated Reporting Plan" },
    { value: 24, suffix: "/7", label: "Requirement Monitoring*" },
  ],
  faqs: [
    {
      question: "What are MIPS services?",
      answer:
        "MIPS services help clinicians participate in Medicare’s Merit-based Incentive Payment System by selecting measures, tracking performance, preparing documentation, and submitting data so payment adjustments are based on accurate reporting.",
    },
    {
      question: "Who needs to report MIPS?",
      answer:
        "Many clinicians who bill Medicare Part B above certain volume thresholds must participate, unless they qualify for an exclusion or report through an Advanced APM. We review eligibility each performance year.",
    },
    {
      question: "What are the MIPS performance categories?",
      answer:
        "MIPS typically includes Quality, Promoting Interoperability, Improvement Activities, and Cost. Category weights and requirements can change by year and by special status.",
    },
    {
      question: "Can you help if we use a specific EHR?",
      answer:
        "Yes. We work with practices across common EHRs and registry workflows, focusing on measure feasibility, data accuracy, and the correct submission path for your setup.",
    },
    {
      question: "When should we start preparing for MIPS?",
      answer:
        "Ideally at the start of the performance year. Early measure selection and documentation habits make submission smoother and usually produce stronger scores than a year-end rush.",
    },
    {
      question: "Do you guarantee a positive payment adjustment?",
      answer:
        "No ethical partner can guarantee a specific CMS payment adjustment, because scores depend on performance, peer benchmarks, and annual CMS rules. We focus on maximizing your reporting quality and avoiding preventable penalties.",
    },
    {
      question: "How does MIPS connect to medical billing?",
      answer:
        "Quality and cost outcomes often depend on clean documentation and coding. Coordinating MIPS with medical billing helps ensure claims and clinical data support both reimbursement and reporting.",
    },
    {
      question: "What do you need from our practice to get started?",
      answer:
        "Typically specialty details, clinician NPIs, EHR or registry information, prior MIPS feedback reports if available, and a short discovery call to confirm goals and deadlines.",
    },
  ],
  midCta: {
    title: "Protect Your Medicare Payment Adjustment",
    description:
      "Get a clear MIPS plan for measure selection, year-round tracking, and on-time submission — without the administrative overload.",
    cta: siteConfig.cta.mips,
  },
  finalCta: {
    title: "Stay Compliant. Stay Competitive.",
    description:
      "Let our MIPS specialists handle the Quality Payment Program complexity so your clinicians can stay focused on care.",
    cta: siteConfig.cta.mips,
  },
} as const;
