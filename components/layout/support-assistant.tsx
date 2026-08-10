"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Headphones,
  Loader2,
  MessageSquareText,
  Send,
  X,
} from "lucide-react";
import { pageGuides, type PageGuide } from "@/lib/content/page-summaries";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type View = "menu" | "page" | "live";

export function SupportAssistant() {
  const [unlocked, setUnlocked] = useState(false);
  const [open, setOpen] = useState(false);
  const [view, setView] = useState<View>("menu");
  const [activePage, setActivePage] = useState<PageGuide | null>(null);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
    if (view === "live") return "Live Chat";
    if (view === "page" && activePage) return activePage.label;
    return "How can we help?";
  }, [view, activePage]);

  const resetToMenu = () => {
    setView("menu");
    setActivePage(null);
    setQuestion("");
    setAnswer("");
    setError(null);
  };

  const openPage = (page: PageGuide) => {
    setActivePage(page);
    setView("page");
    setQuestion("");
    setAnswer("");
    setError(null);
  };

  const askQuestion = async (event: FormEvent) => {
    event.preventDefault();
    if (!activePage || question.trim().length < 3 || loading) return;

    setLoading(true);
    setError(null);
    setAnswer("");

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pageId: activePage.id,
          question: question.trim(),
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

      setAnswer(data.answer || "");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (!unlocked) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-8">
      {open ? (
        <div className="glass-panel flex w-[min(100vw-2.5rem,360px)] flex-col overflow-hidden rounded-[1.5rem]">
          <div className="flex items-center justify-between bg-gradient-to-r from-primary to-secondary px-4 py-3 text-white">
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
                <p className="text-[11px] text-white/80">Support Assistant</p>
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

          <div className="max-h-[420px] overflow-y-auto p-4">
            {view === "menu" && (
              <div className="space-y-4">
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
                      Live Chat
                    </span>
                    <span className="block text-xs text-white/85">
                      Talk with a live representative
                    </span>
                  </span>
                </button>

                <div>
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                    Browse by page
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {pageGuides.map((page) => (
                      <button
                        key={page.id}
                        type="button"
                        onClick={() => openPage(page)}
                        className="glass-soft rounded-2xl px-3 py-3 text-left text-sm font-medium text-foreground transition hover:border-secondary/40"
                      >
                        {page.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {view === "live" && (
              <div className="space-y-4">
                <div className="glass-soft rounded-2xl p-4">
                  <p className="text-sm font-semibold text-foreground">
                    Connect with a live representative
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Get help with medical billing, credentialing, or virtual
                    front desk support. Our team typically responds within one
                    business day.
                  </p>
                </div>
                <Button asChild className="w-full">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    Start Live Conversation
                  </Link>
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={resetToMenu}
                >
                  Back to topics
                </Button>
              </div>
            )}

            {view === "page" && activePage && (
              <div className="space-y-4">
                <div className="glass-soft rounded-2xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                    Page summary
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground">
                    {activePage.summary}
                  </p>
                  <Link
                    href={activePage.href}
                    onClick={() => setOpen(false)}
                    className="mt-3 inline-flex text-sm font-semibold text-secondary underline-offset-4 hover:underline"
                  >
                    Open {activePage.label} page
                  </Link>
                </div>

                <form onSubmit={askQuestion} className="space-y-3">
                  <label
                    htmlFor="assistant-question"
                    className="text-xs font-semibold uppercase tracking-[0.14em] text-muted"
                  >
                    Ask a question about this page
                  </label>
                  <div className="flex gap-2">
                    <Input
                      id="assistant-question"
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Type your question..."
                      className="h-11"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      disabled={loading || question.trim().length < 3}
                      aria-label="Send question"
                    >
                      {loading ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </form>

                {error ? (
                  <p className="text-sm text-red-600" role="alert">
                    {error}
                  </p>
                ) : null}

                {answer ? (
                  <div className="rounded-2xl border border-secondary/20 bg-secondary/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-secondary">
                      Answer
                    </p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                      {answer}
                    </p>
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={cn(
          "inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_14px_34px_rgba(15,76,129,0.35)] transition hover:-translate-y-0.5 hover:brightness-105",
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
