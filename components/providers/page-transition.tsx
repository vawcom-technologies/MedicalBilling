"use client";

import { useRef } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { usePathname } from "next/navigation";
import { easeOutSoft } from "@/lib/motion";

type NavMeta = {
  path: string;
  direction: 1 | -1;
  stack: string[];
};

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction * 48,
    zIndex: 2,
  }),
  center: {
    x: 0,
    zIndex: 2,
  },
  exit: (direction: number) => ({
    x: direction * -28,
    zIndex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    pointerEvents: "none",
  }),
};

/**
 * Forward nav: new page slides in from the right.
 * Back nav (history / prior page): new page slides in from the left.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const metaRef = useRef<NavMeta>({
    path: pathname,
    direction: 1,
    stack: [pathname],
  });

  // Resolve direction in the same render as the pathname change so enter/exit match.
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

  const direction = metaRef.current.direction;

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <div className="relative overflow-x-clip">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.48, ease: easeOutSoft }}
          className="relative w-full bg-background will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
