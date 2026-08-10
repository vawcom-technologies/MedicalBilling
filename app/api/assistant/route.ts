import { NextResponse } from "next/server";
import { z } from "zod";
import { getPageGuide } from "@/lib/content/page-summaries";
import { siteConfig } from "@/lib/site-config";

const bodySchema = z.object({
  pageId: z.string().min(1),
  question: z.string().min(3).max(500),
});

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = bodySchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid question." },
        { status: 400 }
      );
    }

    const { pageId, question } = parsed.data;
    const page = getPageGuide(pageId);
    const apiKey = process.env.OPENAI_API_KEY;

    // Ready for OpenAI. Returns a helpful fallback until the key is added
    if (!apiKey) {
      return NextResponse.json({
        ok: true,
        source: "fallback",
        answer: `Thanks for your question about ${page.label}: “${question}”

${page.summary}

For a personalized answer, schedule a free consultation with ${siteConfig.name} on our Contact page, or add your OpenAI API key to enable instant AI replies here.`,
      });
    }

    const prompt = `You are a helpful assistant for ${siteConfig.name}, a medical billing, credentialing, and virtual front desk company.
Answer clearly in 2-4 short paragraphs. Stay on-topic for the selected page.
Page: ${page.label}
Page summary: ${page.summary}
User question: ${question}`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.4,
        messages: [
          {
            role: "system",
            content:
              "You help healthcare practices understand medical billing, credentialing, and virtual front desk services. Be concise, professional, and accurate.",
          },
          { role: "user", content: prompt },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("[assistant-openai-error]", errText);
      return NextResponse.json(
        {
          ok: false,
          error: "AI assistant is temporarily unavailable. Please try again.",
        },
        { status: 502 }
      );
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const answer =
      data.choices?.[0]?.message?.content?.trim() ||
      "I could not generate an answer right now. Please contact our team.";

    return NextResponse.json({
      ok: true,
      source: "openai",
      answer,
    });
  } catch (error) {
    console.error("[assistant-error]", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process your question." },
      { status: 500 }
    );
  }
}
