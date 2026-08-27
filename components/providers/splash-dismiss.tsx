"use client";

import { useEffect } from "react";

const MIN_MS = 1100;
const FADE_MS = 420;

/**
 * Fades out the server-rendered #site-splash once the app is ready.
 */
export function SplashDismiss() {
  useEffect(() => {
    const splash = document.getElementById("site-splash");
    if (!splash) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const started = performance.now();

    const finish = () => {
      const elapsed = performance.now() - started;
      const wait = Math.max(0, (reduced ? 200 : MIN_MS) - elapsed);

      window.setTimeout(() => {
        splash.classList.add("site-splash--hide");
        window.setTimeout(() => {
          splash.remove();
          document.documentElement.classList.remove("splash-active");
        }, reduced ? 0 : FADE_MS);
      }, wait);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
      // Failsafe if load is slow/hung
      window.setTimeout(finish, 4000);
    }
  }, []);

  return null;
}
