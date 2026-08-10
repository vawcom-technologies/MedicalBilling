"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setVisible(window.scrollY > 420);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const scrollTop = () => {
    const lenis = (window as Window & { __lenis?: { scrollTo: (v: number, o?: object) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(0, { lerp: 0.12 });
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={cn(
        "fixed bottom-[5.75rem] right-5 z-40 flex flex-col items-end gap-3 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:bottom-[6.5rem] md:right-8",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <button
        type="button"
        onClick={scrollTop}
        aria-label="Back to top"
        className="glass-strong inline-flex h-11 w-11 items-center justify-center rounded-2xl text-primary transition hover:-translate-y-0.5"
      >
        <ArrowUp className="h-4 w-4" />
      </button>
      <Link
        href="/contact"
        className="inline-flex items-center gap-2 rounded-2xl bg-accent px-4 py-3 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(46,196,182,0.35)] transition hover:-translate-y-0.5"
        aria-label="Contact us"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        Contact
      </Link>
    </div>
  );
}
