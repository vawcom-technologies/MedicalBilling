"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate as soon as mounted (after a paint of the hidden state) */
  immediate?: boolean;
  y?: number;
};

/** Ensure the browser paints the hidden state before revealing */
function revealAfterPaint(setVisible: (v: boolean) => void) {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setVisible(true);
    });
  });
}

/**
 * CSS fade/slide reveal.
 * Always paints opacity:0 for at least one frame before fading in,
 * so the transition is visible even when the element is already on screen.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  immediate = false,
  y = 24,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hydrated, setHydrated] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setHydrated(true);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    if (immediate) {
      revealAfterPaint(setVisible);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const failsafe = window.setTimeout(() => setVisible(true), 4000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        window.clearTimeout(failsafe);
        // Critical: wait for paint of .reveal-base before .reveal-in
        revealAfterPaint(setVisible);
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [immediate]);

  const style = {
    "--reveal-delay": `${delay}s`,
    "--reveal-y": `${y}px`,
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={cn(
        hydrated && "reveal-base",
        hydrated && visible && "reveal-in",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
}

export function Stagger({
  children,
  className,
  immediate = false,
}: {
  children: ReactNode;
  className?: string;
  immediate?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hydrated, setHydrated] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setHydrated(true);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(true);
      return;
    }

    if (immediate) {
      revealAfterPaint(setVisible);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const failsafe = window.setTimeout(() => setVisible(true), 4000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        window.clearTimeout(failsafe);
        revealAfterPaint(setVisible);
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={cn(
        hydrated && "reveal-stagger",
        hydrated && visible && "reveal-stagger-in",
        className
      )}
    >
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("reveal-stagger-item", className)}>{children}</div>;
}
