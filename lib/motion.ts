/** Shared easing + timing for a consistent, smooth motion language */

export const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const easeOutSoft: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const fadeUp = {
  duration: 0.8,
  ease: easeOutExpo,
};

export const staggerFast = {
  staggerChildren: 0.08,
  delayChildren: 0.04,
};
