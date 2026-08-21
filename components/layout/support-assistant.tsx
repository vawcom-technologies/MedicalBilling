"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Headphones,
  Loader2,
  MessageSquareText,
  Send,
  X,
} from "lucide-react";
import {
  getFaqsForTopic,
  popularQuestions,
  supportTopics,
  type SupportTopic,
  type SupportTopicId,
} from "@/lib/content/support-chat";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type View = "menu" | "topic" | "live";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function SupportAssistant() {
  const [unlocked, setUnlocked] = useState(false);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("menu");
  const [activeTopic, setActiveTopic] = useState<SupportTopic | null>(null);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollChatToBottom = () => {
    const container = scrollRef.current;
    if (!container) return;
    requestAnimationFrame(() => {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    });
  };

  useEffect(() => {
    if (!open || messages.length === 0) return;
    scrollChatToBottom();
  }, [messages, loading, open]);

  useEffect(() => {
    if (unlocked) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (window.scrollY > 80) {
          setUnlocked(true);
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [unlocked]);

  const heading = useMemo(() => {
    if (view === "live") return "Talk to our team";
    if (view === "topic" && activeTopic) return activeTopic.label;
    return "How can we help?";
  }, [view, activeTopic]);

  const topicQuestions = activeTopic
    ? getFaqsForTopic(activeTopic.id as SupportTopicId).map((faq) => faq.question)
    : [];

  const resetToMenu = () => {
    setView("menu");
    setActiveTopic(null);
    setQuestion("");
    setError(null);
  };

  const openTopic = (topic: SupportTopic) => {
    setActiveTopic(topic);
    setView("topic");
    setQuestion("");
    setError(null);
  };

  const askQuestion = async (rawQuestion: string) => {
    const nextQuestion = rawQuestion.trim();
    if (nextQuestion.length < 3 || loading) return;

    setLoading(true);
    setError(null);
    setQuestion("");
    setMessages((prev) => [...prev, { role: "user", content: nextQuestion }]);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question: nextQuestion,
          topicId: activeTopic?.id,
        }),
      });
      const data = (await response.json()) as {
        ok: boolean;
        answer?: string;
        error?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to get an answer.");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer || "Please contact our team for help.",
        },
      ]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    await askQuestion(question);
  };

  if (!unlocked) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {open ? (
        <div
          data-lenis-prevent
          className="glass-panel flex w-[min(100vw-2.5rem,380px)] flex-col overflow-hidden rounded-[1.5rem]"
        >
          <div className="flex shrink-0 items-center justify-between bg-gradient-to-r from-primary to-secondary px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              {view !== "menu" ? (
                <button
                  type="button"
                  onClick={resetToMenu}
                  className="rounded-lg p-1 hover:bg-white/15"
                  aria-label="Back to topics"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
              ) : null}
              <div>
                <p className="text-sm font-semibold">{heading}</p>
                <p className="text-[11px] text-white/80">
                  Practice support chat
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-lg p-1 hover:bg-white/15"
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex max-h-[min(70vh,460px)] flex-col">
            <div
              ref={scrollRef}
              data-lenis-prevent
              className="min-h-0 flex-1 space-y-4 overflow-y-auto overscroll-contain p-4"
            >
              {view === "menu" && (
                <div className="space-y-4">
                  <div className="glass-soft rounded-2xl p-3.5">
                    <p className="text-sm leading-relaxed text-foreground">
                      Ask about billing, credentialing, denials, pricing, or
                      how to get started. These are the questions practices ask most.
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Popular questions
                    </p>
                    <div className="flex flex-col gap-2">
                      {popularQuestions.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => askQuestion(item)}
                          className="rounded-2xl border border-primary/10 bg-white/70 px-3 py-2.5 text-left text-sm font-medium text-foreground transition hover:border-secondary/40 hover:bg-white"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                      Browse by topic
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {supportTopics.map((topic) => (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => openTopic(topic)}
                          className="glass-soft rounded-2xl px-3 py-3 text-left transition hover:border-secondary/40"
                        >
                          <span className="block text-sm font-semibold text-foreground">
                            {topic.label}
                          </span>
                          <span className="mt-0.5 block text-[11px] leading-snug text-muted">
                            {topic.description}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setView("live")}
                    className="flex w-full items-center gap-3 rounded-2xl bg-accent px-4 py-3 text-left text-white shadow-[0_10px_24px_rgba(46,196,182,0.28)] transition hover:brightness-105"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                      <Headphones className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold">
                        Talk to a specialist
                      </span>
                      <span className="block text-xs text-white/85">
                        Free consultation · usually 1 business day
                      </span>
                    </span>
                  </button>
                </div>
              )}

              {view === "live" && (
                <div className="space-y-4">
                  <div className="glass-soft rounded-2xl p-4">
                    <p className="text-sm font-semibold text-foreground">
                      Connect with a billing specialist
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Tell us about your specialty, claim volume, or
                      credentialing needs. We’ll follow up with next steps for
                      a free revenue cycle assessment.
                    </p>
                  </div>
                  <Button asChild className="w-full rounded-full">
                    <Link href="/contact" onClick={() => setOpen(false)}>
                      Schedule free consultation
                    </Link>
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full rounded-full"
                    onClick={resetToMenu}
                  >
                    Back to questions
                  </Button>
                </div>
              )}

              {view === "topic" && activeTopic && (
                <div className="space-y-4">
                  <div className="glass-soft rounded-2xl p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                      {activeTopic.label}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-foreground">
                      {activeTopic.description}. Tap a common question below or
                      type your own.
                    </p>
                    <Link
                      href={activeTopic.href}
                      onClick={() => setOpen(false)}
                      className="mt-3 inline-flex text-sm font-semibold text-secondary underline-offset-4 hover:underline"
                    >
                      View {activeTopic.label} details
                    </Link>
                  </div>

                  <div className="flex flex-col gap-2">
                    {topicQuestions.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => askQuestion(item)}
                        className="rounded-2xl border border-primary/10 bg-white/70 px-3 py-2.5 text-left text-sm font-medium text-foreground transition hover:border-secondary/40 hover:bg-white"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.length > 0 ? (
                <div className="space-y-3 border-t border-primary/10 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Conversation
                  </p>
                  {messages.map((message, index) => (
                    <div
                      key={`${message.role}-${index}`}
                      className={cn(
                        "rounded-2xl px-3.5 py-3 text-sm leading-relaxed",
                        message.role === "user"
                          ? "ml-6 bg-primary text-white"
                          : "mr-4 border border-secondary/20 bg-secondary/5 text-foreground"
                      )}
                    >
                      {message.content}
                    </div>
                  ))}
                  {loading ? (
                    <div className="mr-4 flex items-center gap-2 rounded-2xl border border-secondary/20 bg-secondary/5 px-3.5 py-3 text-sm text-muted">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Finding an answer…
                    </div>
                  ) : null}
                </div>
              ) : null}

              {error ? (
                <p className="text-sm text-red-600" role="alert">
                  {error}
                </p>
              ) : null}

              <div ref={messagesEndRef} aria-hidden="true" />
            </div>

            {view !== "live" ? (
              <form
                onSubmit={onSubmit}
                className="border-t border-primary/10 bg-white/50 p-3"
              >
                <label htmlFor="assistant-question" className="sr-only">
                  Ask a question
                </label>
                <div className="flex gap-2">
                  <Input
                    id="assistant-question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask about denials, credentialing, pricing…"
                    className="h-11"
                    disabled={loading}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={loading || question.trim().length < 3}
                    aria-label="Send question"
                    className="rounded-2xl"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </form>
            ) : null}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_14px_34px_rgba(15, 107, 99,0.35)] transition hover:-translate-y-0.5 hover:brightness-105",
          open && "bg-secondary"
        )}
        aria-label={open ? "Close support assistant" : "Open support assistant"}
        aria-expanded={open}
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageSquareText className="h-6 w-6" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
