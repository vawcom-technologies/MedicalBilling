"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type Lenis from "lenis";
import { ArrowLeft, Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

export type FeatureListItem =
  | string
  | {
      title: string;
      detail: string;
    };

type NormalizedFeature = {
  title: string;
  detail?: string;
};

type FeatureListProps = {
  title: string;
  description?: string;
  items: readonly FeatureListItem[] | FeatureListItem[];
  eyebrow?: string;
};

function normalizeItems(
  items: readonly FeatureListItem[] | FeatureListItem[]
): NormalizedFeature[] {
  return items.map((item) =>
    typeof item === "string" ? { title: item } : item
  );
}

function getLenis() {
  return (window as Window & { __lenis?: Lenis }).__lenis;
}

/** Center an element in the viewport via Lenis (site smooth scroll) or native scroll. */
function scrollElementToCenter(el: HTMLElement, immediate: boolean) {
  const lenis = getLenis();
  if (lenis) lenis.resize();

  const rect = el.getBoundingClientRect();
  const current = lenis ? lenis.scroll : window.scrollY;
  const target = Math.max(
    0,
    current + rect.top + rect.height / 2 - window.innerHeight / 2
  );

  if (lenis) {
    lenis.scrollTo(target, immediate ? { immediate: true } : { lerp: 0.1 });
    return;
  }

  window.scrollTo({
    top: target,
    behavior: immediate ? "auto" : "smooth",
  });
}

export function FeatureList({
  title,
  description,
  items,
  eyebrow = "What's Included",
}: FeatureListProps) {
  const normalized = normalizeItems(items);
  const expandable = normalized.some((item) => Boolean(item.detail));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const activeItem =
    activeIndex !== null ? normalized[activeIndex] : undefined;

  const openItem = (index: number) => {
    if (!expandable || !normalized[index]?.detail) return;
    setActiveIndex(index);
  };

  const closeDetail = () => setActiveIndex(null);

  useEffect(() => {
    if (activeIndex === null) return;

    let cancelled = false;

    // Wait for the grid → detail swap + height change, then center via Lenis.
    const timer = window.setTimeout(
      () => {
        requestAnimationFrame(() => {
          if (cancelled || !panelRef.current) return;
          scrollElementToCenter(panelRef.current, Boolean(reduceMotion));
        });
      },
      reduceMotion ? 16 : 150
    );

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [activeIndex, reduceMotion]);

  return (
    <section className="section-alt py-20 md:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            align="left"
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
          <FadeIn delay={0.1}>
            <div className="relative w-full">
              <AnimatePresence mode="popLayout" initial={false}>
                {activeItem?.detail ? (
                  <motion.div
                    key={`detail-${activeIndex}`}
                    ref={panelRef}
                    layout
                    initial={
                      reduceMotion
                        ? { opacity: 1 }
                        : { opacity: 0, scaleY: 0.92, y: -6 }
                    }
                    animate={{ opacity: 1, scaleY: 1, y: 0 }}
                    exit={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scaleY: 0.96, y: -4 }
                    }
                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                    style={{ originY: 0 }}
                    className="w-full"
                  >
                    <div className="surface-panel w-full rounded-[1.25rem] border-primary/15 p-5 md:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-white">
                            <Check className="h-3.5 w-3.5" aria-hidden="true" />
                          </span>
                          <h3 className="text-base font-semibold leading-snug text-foreground md:text-[17px]">
                            {activeItem.title}
                          </h3>
                        </div>
                        <button
                          type="button"
                          onClick={closeDetail}
                          className="surface-panel inline-flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold text-foreground transition hover:border-primary/30 hover:text-primary"
                        >
                          <ArrowLeft
                            className="h-3.5 w-3.5"
                            aria-hidden="true"
                          />
                          Back
                        </button>
                      </div>
                      <motion.p
                        initial={reduceMotion ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08, duration: 0.25 }}
                        className="mt-4 text-sm leading-relaxed text-foreground md:text-[15px]"
                      >
                        {activeItem.detail}
                      </motion.p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="feature-grid"
                    layout
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={
                      reduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, scale: 0.98 }
                    }
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="grid auto-rows-fr gap-3 sm:grid-cols-2"
                  >
                    {normalized.map((item, index) => {
                      const canExpand = expandable && Boolean(item.detail);

                      const content = (
                        <>
                          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary transition duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white">
                            <Check
                              className="h-3.5 w-3.5"
                              aria-hidden="true"
                            />
                          </span>
                          <h3 className="text-sm font-medium leading-snug text-foreground transition-colors duration-300 group-hover:text-primary md:text-[15px]">
                            {item.title}
                          </h3>
                        </>
                      );

                      return canExpand ? (
                        <motion.button
                          key={item.title}
                          type="button"
                          layout
                          onClick={() => openItem(index)}
                          whileHover={
                            reduceMotion
                              ? undefined
                              : { y: -4, scale: 1.015 }
                          }
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 24,
                          }}
                          className={cn(
                            "surface-panel group flex h-full min-h-[5.25rem] w-full items-center gap-3 rounded-[1.15rem] px-4 py-4 text-left transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_14px_32px_rgba(10,46,43,0.1)]"
                          )}
                        >
                          {content}
                        </motion.button>
                      ) : (
                        <div
                          key={item.title}
                          className="surface-panel group flex h-full min-h-[5.25rem] items-center gap-3 rounded-[1.15rem] px-4 py-4 transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_14px_32px_rgba(10,46,43,0.1)]"
                        >
                          {content}
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
