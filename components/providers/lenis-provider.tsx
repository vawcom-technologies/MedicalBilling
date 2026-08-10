"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.12,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.15,
      syncTouch: false,
      anchors: {
        offset: -88,
        lerp: 0.12,
      },
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
    });

    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    // Keep virtual scroll in sync after late layout shifts (images, fonts)
    const onResize = () => lenis.resize();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      const win = window as Window & { __lenis?: Lenis };
      if (win.__lenis === lenis) delete win.__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
