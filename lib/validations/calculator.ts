import { z } from "zod";

export const calculatorInputsSchema = z.object({
  monthlyCollections: z
    .number()
    .min(5000, "Enter at least $5,000")
    .max(50000000, "Please enter a realistic monthly amount"),
  specialty: z.enum([
    "primary-care",
    "specialty-clinic",
    "urgent-care",
    "behavioral-health",
    "multi-location",
    "other",
  ]),
  practiceSize: z.enum([
    "solo",
    "small-group",
    "multi-provider",
    "multi-location",
  ]),
  denialRate: z.enum(["not-sure", "low", "moderate", "high", "critical"]),
  arDays: z.enum(["not-sure", "healthy", "elevated", "high", "critical"]),
  arOver90: z.enum(["not-sure", "low", "moderate", "high"]),
});

export const calculatorLeadSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  practiceName: z.string().min(2, "Please enter your practice name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  inputs: calculatorInputsSchema,
  estimate: z.object({
    monthlyLikely: z.number(),
    annualLikely: z.number(),
    riskLevel: z.string(),
  }),
});

export type CalculatorLeadPayload = z.infer<typeof calculatorLeadSchema>;
