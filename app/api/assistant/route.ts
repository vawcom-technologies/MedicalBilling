import { NextResponse } from "next/server";
import { z } from "zod";
import {
  buildKnowledgeContext,
  findFaqByQuestion,
  getFaqsForTopic,
  getSupportTopic,
  type SupportTopicId,
} from "@/lib/content/support-chat";
import { getPageGuide } from "@/lib/content/page-summaries";
import { siteConfig } from "@/lib/site-config";

const bodySchema = z.object({
  question: z.string().min(3).max(500),
  pageId: z.string().optional(),
  topicId: z.string().optional(),
});

function fallbackAnswer(question: string, topicId?: string) {
  const matched = findFaqByQuestion(question);
  if (matched) {
    return `${matched.answer}

Want a tailored recommendation for your practice? Schedule a free consultation with ${siteConfig.name}.`;
  }

  if (topicId) {
    const topic = getSupportTopic(topicId);
    const faqs = getFaqsForTopic(topicId as SupportTopicId);
    if (topic && faqs[0]) {
      return `${faqs[0].answer}

You can also ask about ${faqs
        .slice(0, 3)
        .map((faq) => faq.question.toLowerCase())
        .join(", ")}. Or contact us for a free assessment.`;
    }
  }

  return `Thanks for your question. ${siteConfig.name} helps practices with medical billing, provider credentialing, and virtual front desk support.

Common topics we can help with: claim denials, credentialing timelines, pricing, EHR fit, and how to get started.

For a personalized answer, schedule a free consultation on our Contact page.`;
}

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

    const { question, pageId, topicId } = parsed.data;
    const apiKey = process.env.OPENAI_API_KEY;
    const matchedFaq = findFaqByQuestion(question);
    const page = pageId ? getPageGuide(pageId) : null;
    const topic = topicId ? getSupportTopic(topicId) : null;

    // Instant FAQ match. Most visitor questions never need the model
    if (matchedFaq && !apiKey) {
      return NextResponse.json({
        ok: true,
        source: "faq",
        answer: matchedFaq.answer,
        faqId: matchedFaq.id,
      });
    }

    if (!apiKey) {
      return NextResponse.json({
        ok: true,
        source: "fallback",
        answer: fallbackAnswer(question, topicId),
      });
    }

    const knowledge = buildKnowledgeContext();
    const focus = [
      topic ? `Selected topic: ${topic.label}` : null,
      page ? `Selected page: ${page.label}. ${page.summary}` : null,
      matchedFaq
        ? `Closest FAQ: ${matchedFaq.question} → ${matchedFaq.answer}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4o-mini",
        temperature: 0.3,
        messages: [
          {
            role: "system",
            content: `You are the on-site support assistant for ${siteConfig.name}.
Speak like a helpful practice consultant for visitors evaluating medical billing, credentialing, or virtual front desk services.

Rules:
- Answer only with information grounded in the knowledge base below.
- Prefer short, clear answers (2-4 sentences, or short bullets).
- Use the terms visitors use: denials, clean claims, AR, credentialing, payer enrollment, eligibility, scheduling, pricing, onboarding.
- If pricing is asked, explain that it depends on specialty/volume and invite a free assessment. Do not invent rates.
- If you lack specifics, say so and point them to Contact for a free consultation.
- Do not invent compliance certifications, client names, or guarantees not in the knowledge base.

Knowledge base:
${knowledge}`,
          },
          {
            role: "user",
            content: `${focus}

Visitor question: ${question}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("[assistant-openai-error]", errText);
      return NextResponse.json({
        ok: true,
        source: "fallback",
        answer: fallbackAnswer(question, topicId),
      });
    }

    const data = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
    const answer =
      data.choices?.[0]?.message?.content?.trim() ||
      fallbackAnswer(question, topicId);

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
