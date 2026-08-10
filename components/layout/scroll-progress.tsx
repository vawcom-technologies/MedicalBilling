"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.35,
    restDelta: 0.0005,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-primary via-secondary to-accent will-change-transform"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
}
