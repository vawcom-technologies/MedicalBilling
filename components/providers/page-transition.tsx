"use client";

import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
import { easeOutSoft } from "@/lib/motion";

type NavMeta = {
  path: string;
  direction: 1 | -1;
  stack: string[];
};

function getLenis() {
  return (window as Window & { __lenis?: Lenis }).__lenis;
}

const variants: Variants = {
  enter: {
    opacity: 0,
    y: 10,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.18, ease: easeOutSoft },
  },
};

/**
 * Lightweight fade/slide — avoids dual-page x-transforms that stutter.
 * Forward/back still tracked for future use; motion stays direction-agnostic
 * so paint cost stays low on route changes.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const metaRef = useRef<NavMeta>({
    path: pathname,
    direction: 1,
    stack: [pathname],
  });

  if (metaRef.current.path !== pathname) {
    const stack = metaRef.current.stack;
    const existingIndex = stack.lastIndexOf(pathname);

    if (existingIndex !== -1) {
      metaRef.current = {
        path: pathname,
        direction: -1,
        stack: stack.slice(0, existingIndex + 1),
      };
    } else {
      metaRef.current = {
        path: pathname,
        direction: 1,
        stack: [...stack, pathname],
      };
    }
  }

  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    // Layout height changes after swap — resync virtual scroll
    const id = window.setTimeout(() => {
      lenis.resize();
    }, 40);

    return () => window.clearTimeout(id);
  }, [pathname]);

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-x-clip">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.28, ease: easeOutSoft }}
          className="relative w-full bg-background"
          style={{
            backfaceVisibility: "hidden",
            transform: "translateZ(0)",
          }}
          onAnimationStart={(definition) => {
            if (definition === "exit" || definition === "enter") {
              document.documentElement.classList.add("is-page-transitioning");
            }
            if (definition === "exit") {
              getLenis()?.stop();
            }
          }}
          onAnimationComplete={(definition) => {
            if (definition !== "center") return;
            document.documentElement.classList.remove("is-page-transitioning");
            const lenis = getLenis();
            if (!lenis) return;
            lenis.start();
            lenis.resize();
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
