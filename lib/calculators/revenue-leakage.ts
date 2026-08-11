export type Specialty =
  | "primary-care"
  | "specialty-clinic"
  | "urgent-care"
  | "behavioral-health"
  | "multi-location"
  | "other";

export type PracticeSize = "solo" | "small-group" | "multi-provider" | "multi-location";

export type DenialRateOption = "not-sure" | "low" | "moderate" | "high" | "critical";
export type ArDaysOption = "not-sure" | "healthy" | "elevated" | "high" | "critical";
export type ArOver90Option = "not-sure" | "low" | "moderate" | "high";

export type CalculatorInputs = {
  monthlyCollections: number;
  specialty: Specialty;
  practiceSize: PracticeSize;
  denialRate: DenialRateOption;
  arDays: ArDaysOption;
  arOver90: ArOver90Option;
};

export type LeakageEstimate = {
  monthlyLow: number;
  monthlyLikely: number;
  monthlyHigh: number;
  annualLikely: number;
  denialLeakage: number;
  agingLeakage: number;
  recoveryPotentialLow: number;
  recoveryPotentialHigh: number;
  denialRateUsed: number;
  arOver90Used: number;
  insights: string[];
  riskLevel: "Low" | "Moderate" | "High" | "Critical";
};

const specialtyDefaults: Record<
  Specialty,
  { denialRate: number; arOver90: number; label: string }
> = {
  "primary-care": { denialRate: 0.07, arOver90: 0.15, label: "Primary Care" },
  "specialty-clinic": {
    denialRate: 0.09,
    arOver90: 0.18,
    label: "Specialty Clinic",
  },
  "urgent-care": { denialRate: 0.1, arOver90: 0.2, label: "Urgent Care" },
  "behavioral-health": {
    denialRate: 0.12,
    arOver90: 0.22,
    label: "Behavioral Health",
  },
  "multi-location": {
    denialRate: 0.1,
    arOver90: 0.2,
    label: "Multi-Location Practice",
  },
  other: { denialRate: 0.09, arOver90: 0.18, label: "Other" },
};

const denialRateMap: Record<DenialRateOption, number | null> = {
  "not-sure": null,
  low: 0.04,
  moderate: 0.08,
  high: 0.12,
  critical: 0.18,
};

const arOver90Map: Record<ArOver90Option, number | null> = {
  "not-sure": null,
  low: 0.1,
  moderate: 0.2,
  high: 0.35,
};

const arDaysRisk: Record<ArDaysOption, number> = {
  "not-sure": 1,
  healthy: 0.85,
  elevated: 1.05,
  high: 1.2,
  critical: 1.35,
};

export const specialtyOptions: { value: Specialty; label: string }[] = [
  { value: "primary-care", label: "Primary Care / Family Medicine" },
  { value: "specialty-clinic", label: "Specialty Clinic" },
  { value: "urgent-care", label: "Urgent Care" },
  { value: "behavioral-health", label: "Behavioral Health" },
  { value: "multi-location", label: "Multi-Location Practice" },
  { value: "other", label: "Other / Mixed" },
];

export const practiceSizeOptions: { value: PracticeSize; label: string }[] = [
  { value: "solo", label: "Solo provider" },
  { value: "small-group", label: "Small group (2–5 providers)" },
  { value: "multi-provider", label: "Multi-provider (6–15)" },
  { value: "multi-location", label: "Multi-location organization" },
];

export const denialRateOptions: { value: DenialRateOption; label: string }[] = [
  { value: "not-sure", label: "Not sure" },
  { value: "low", label: "Under 5%" },
  { value: "moderate", label: "5% – 10%" },
  { value: "high", label: "10% – 15%" },
  { value: "critical", label: "Over 15%" },
];

export const arDaysOptions: { value: ArDaysOption; label: string }[] = [
  { value: "not-sure", label: "Not sure" },
  { value: "healthy", label: "Under 30 days" },
  { value: "elevated", label: "30 – 45 days" },
  { value: "high", label: "45 – 60 days" },
  { value: "critical", label: "Over 60 days" },
];

export const arOver90Options: { value: ArOver90Option; label: string }[] = [
  { value: "not-sure", label: "Not sure" },
  { value: "low", label: "Under 15%" },
  { value: "moderate", label: "15% – 25%" },
  { value: "high", label: "Over 25%" },
];

export function calculateRevenueLeakage(
  inputs: CalculatorInputs
): LeakageEstimate {
  const specialty = specialtyDefaults[inputs.specialty];
  const denialRateUsed =
    denialRateMap[inputs.denialRate] ?? specialty.denialRate;
  const arOver90Used = arOver90Map[inputs.arOver90] ?? specialty.arOver90;
  const arMultiplier = arDaysRisk[inputs.arDays];

  // Unrecovered denials (assume ~45% of denied dollars remain at risk)
  const unrecoveredDenialFactor = 0.45;
  const denialLeakage =
    inputs.monthlyCollections * denialRateUsed * unrecoveredDenialFactor;

  // Aging AR write-off risk
  const agingWriteoffFactor = 0.18;
  const agingLeakage =
    inputs.monthlyCollections *
    arOver90Used *
    agingWriteoffFactor *
    arMultiplier;

  const monthlyLikely = Math.round(denialLeakage + agingLeakage);
  const monthlyLow = Math.round(monthlyLikely * 0.72);
  const monthlyHigh = Math.round(monthlyLikely * 1.35);
  const annualLikely = monthlyLikely * 12;

  const recoveryPotentialLow = Math.round(monthlyLikely * 0.4);
  const recoveryPotentialHigh = Math.round(monthlyLikely * 0.7);

  const insights: string[] = [];

  if (denialRateUsed >= 0.1) {
    insights.push(
      "Denial rates above 10% often signal eligibility, authorization, or payer follow-up gaps."
    );
  } else {
    insights.push(
      "Even moderate denial leakage compounds quickly when appeals and resubmissions lag."
    );
  }

  if (arOver90Used >= 0.2 || inputs.arDays === "high" || inputs.arDays === "critical") {
    insights.push(
      "Elevated AR days and 90+ balances typically trap cash that proactive follow-up can recover."
    );
  } else {
    insights.push(
      "Keeping AR under control protects cash flow. Consistent insurance follow-up is the difference."
    );
  }

  insights.push(
    `${specialty.label} practices often benefit from specialty-aware medical billing services and denial prevention edits.`
  );

  let riskLevel: LeakageEstimate["riskLevel"] = "Low";
  const leakageRatio = monthlyLikely / Math.max(inputs.monthlyCollections, 1);
  if (leakageRatio >= 0.08) riskLevel = "Critical";
  else if (leakageRatio >= 0.05) riskLevel = "High";
  else if (leakageRatio >= 0.03) riskLevel = "Moderate";

  return {
    monthlyLow,
    monthlyLikely,
    monthlyHigh,
    annualLikely,
    denialLeakage: Math.round(denialLeakage),
    agingLeakage: Math.round(agingLeakage),
    recoveryPotentialLow,
    recoveryPotentialHigh,
    denialRateUsed,
    arOver90Used,
    insights,
    riskLevel,
  };
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}
