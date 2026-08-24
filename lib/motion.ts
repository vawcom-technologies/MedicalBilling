/** Shared easing + timing for a consistent, smooth motion language */

export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const easeOutSoft: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = {
  duration: 0.72,
  ease: easeOutExpo,
};

export const staggerFast = {
  staggerChildren: 0.09,
  delayChildren: 0.08,
};

export const staggerReveal = {
  staggerChildren: 0.11,
  delayChildren: 0.12,
};
