import { NextResponse } from "next/server";
import { calculatorLeadSchema } from "@/lib/validations/calculator";
import { siteConfig } from "@/lib/site-config";
import { formatCurrency } from "@/lib/calculators/revenue-leakage";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = calculatorLeadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Invalid submission",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const lead = {
      ...parsed.data,
      source: "revenue-leakage-calculator",
      receivedAt: new Date().toISOString(),
    };

    // MVP: log lead for ops / hosting logs. Hook CRM or Resend here later.
    console.info("[calculator-lead]", {
      name: lead.name,
      practiceName: lead.practiceName,
      email: lead.email,
      phone: lead.phone ?? null,
      monthlyLikely: formatCurrency(lead.estimate.monthlyLikely),
      annualLikely: formatCurrency(lead.estimate.annualLikely),
      riskLevel: lead.estimate.riskLevel,
      specialty: lead.inputs.specialty,
      notify: siteConfig.email,
    });

    if (process.env.CALCULATOR_WEBHOOK_URL) {
      await fetch(process.env.CALCULATOR_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      }).catch((error) => {
        console.error("[calculator-lead-webhook-failed]", error);
      });
    }

    return NextResponse.json({
      ok: true,
      message: "Lead captured successfully",
    });
  } catch (error) {
    console.error("[calculator-lead-error]", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process request" },
      { status: 500 }
    );
  }
}
