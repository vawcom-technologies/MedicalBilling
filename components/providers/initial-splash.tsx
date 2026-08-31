"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const MIN_MS = 1100;
const FADE_MS = 420;

/**
 * Initial load splash — MedSol logo + dual-arc spinner.
 * Owned entirely by React (no imperative DOM removal).
 */
export function InitialSplash() {
  const [phase, setPhase] = useState<"show" | "hide" | "gone">("show");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const started = performance.now();
    let failsafeTimer = 0;
    let hideTimer = 0;
    let goneTimer = 0;
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(failsafeTimer);

      const elapsed = performance.now() - started;
      const wait = Math.max(0, (reduced ? 200 : MIN_MS) - elapsed);

      hideTimer = window.setTimeout(() => {
        setPhase("hide");
        document.documentElement.classList.remove("splash-active");
        goneTimer = window.setTimeout(
          () => setPhase("gone"),
          reduced ? 0 : FADE_MS
        );
      }, wait);
    };

    document.documentElement.classList.add("splash-active");

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      failsafeTimer = window.setTimeout(finish, 4000);
    }

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(failsafeTimer);
      window.clearTimeout(hideTimer);
      window.clearTimeout(goneTimer);
      document.documentElement.classList.remove("splash-active");
    };
  }, []);

  if (phase === "gone") return null;

  return (
    <div
      id="site-splash"
      className={`site-splash${phase === "hide" ? " site-splash--hide" : ""}`}
      role="status"
      aria-live="polite"
      aria-label="Loading"
      aria-hidden={phase === "hide"}
    >
      <div className="site-splash-inner">
        <div className="site-splash-ring" aria-hidden="true" />
        <div className="site-splash-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt=""
            width={64}
            height={58}
            className="site-splash-logo"
            decoding="async"
          />
          <p className="site-splash-wordmark">{siteConfig.name}</p>
        </div>
      </div>
    </div>
  );
}
