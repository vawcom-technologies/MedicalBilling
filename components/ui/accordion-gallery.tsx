"use client";

import {
  useRef,
  useEffect,
  useState,
  useCallback,
  type CSSProperties,
  type KeyboardEvent,
} from "react";
import { gsap } from "gsap";
import "./accordion-gallery.css";

export type AccordionGalleryItem = {
  image: string;
  label?: string;
  alt?: string;
};

type AccordionGalleryProps = {
  items?: AccordionGalleryItem[];
  defaultIndex?: number;
  accentColor?: string;
  overlayColor?: string;
  textColor?: string;
  height?: number;
  gap?: number;
  radius?: number;
  expandRatio?: number;
  orientation?: "horizontal" | "vertical";
  duration?: number;
  ease?: string;
  parallax?: number;
  tilt?: number;
  stagger?: number;
  trigger?: "hover" | "click" | "auto";
  showLabels?: boolean;
  grayscale?: boolean;
  className?: string;
};

const DEFAULT_ITEMS: AccordionGalleryItem[] = [
  {
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
    label: "Independent Physicians",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    label: "Specialty Clinics",
  },
  {
    image:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1400&q=80",
    label: "Urgent Care",
  },
  {
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
    label: "Behavioral Health",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80",
    label: "Multi-Provider Groups",
  },
];

function canHover() {
  if (typeof window === "undefined" || !window.matchMedia) return true;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function AccordionGallery({
  items = DEFAULT_ITEMS,
  defaultIndex = 2,
  accentColor = "#2ec4b6",
  overlayColor = "#0a365c",
  textColor = "#ffffff",
  height = 460,
  gap = 10,
  radius = 24,
  expandRatio = 0.52,
  orientation = "horizontal",
  duration = 0.6,
  ease = "power3.out",
  parallax = 0.5,
  tilt = 8,
  stagger = 0.06,
  trigger = "auto",
  showLabels = true,
  grayscale = true,
  className = "",
}: AccordionGalleryProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<Array<HTMLDivElement | null>>([]);
  const mediaRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const barRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const textRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const firstRunRef = useRef(true);
  const hoverCapableRef = useRef(true);

  const vertical = orientation === "vertical";
  const count = items.length;
  const [active, setActive] = useState(
    Math.min(Math.max(defaultIndex, 0), Math.max(count - 1, 0))
  );
  const [isTouchUI, setIsTouchUI] = useState(false);

  const prefersReduced =
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const effectiveTrigger =
    trigger === "auto"
      ? isTouchUI
        ? "click"
        : "hover"
      : trigger;

  useEffect(() => {
    const sync = () => {
      const hover = canHover();
      hoverCapableRef.current = hover;
      setIsTouchUI(!hover || window.innerWidth <= 900);
    };
    sync();
    window.addEventListener("resize", sync, { passive: true });
    return () => window.removeEventListener("resize", sync);
  }, []);

  const applyLayout = useCallback(
    (animate: boolean) => {
      const panels = panelRefs.current;
      if (!panels.length) return;

      const touchLayout = !hoverCapableRef.current || window.innerWidth <= 900;
      const r = Math.min(Math.max(expandRatio, 0.2), 0.9);
      const grow = count > 1 ? (r * (count - 1)) / (1 - r) : 1;

      tlRef.current?.kill();
      const dur = animate && !prefersReduced ? duration : 0;
      const tl = gsap.timeline();

      panels.forEach((panel, i) => {
        if (!panel) return;
        const isActive = i === active;
        const media = mediaRefs.current[i];
        const bar = barRefs.current[i];
        const text = textRefs.current[i];

        if (touchLayout) {
          // Mobile/tablet: height-driven expand, no 3D tilt
          gsap.set(panel, { flexGrow: 1, rotateX: 0, rotateY: 0, clearProps: "transform" });
        } else {
          const rot = isActive ? 0 : i < active ? tilt : -tilt;
          const rotProp = vertical ? { rotateX: -rot } : { rotateY: rot };
          tl.to(
            panel,
            { flexGrow: isActive ? grow : 1, ...rotProp, duration: dur, ease },
            0
          );
        }

        if (media) {
          const gray = grayscale ? (isActive ? 0 : 1) : 0;
          const dim = isActive ? 0 : 0.35;
          if (touchLayout) {
            gsap.set(media, {
              x: 0,
              y: 0,
              scale: isActive ? 1.04 : 1,
              "--ag-gray": gray,
              "--ag-dim": dim,
            });
          } else {
            const drift = Math.max(-1.5, Math.min(1.5, active - i));
            const shift = drift * parallax * 12;
            tl.to(
              media,
              {
                x: isActive ? 0 : shift,
                y: 0,
                scale: isActive ? 1.06 : 1.02,
                "--ag-gray": gray,
                "--ag-dim": dim,
                duration: dur,
                ease,
              },
              0
            );
          }
        }

        if (showLabels && bar && text) {
          if (touchLayout) {
            gsap.set([bar, text], { opacity: 1, x: 0 });
          } else if (isActive) {
            tl.to(
              [bar, text],
              {
                opacity: 1,
                x: 0,
                duration: dur,
                ease,
                stagger: prefersReduced ? 0 : stagger,
              },
              0
            );
          } else {
            tl.to(
              [bar, text],
              { opacity: 0, x: -14, duration: dur * 0.6, ease },
              0
            );
          }
        }
      });

      tlRef.current = tl;
    },
    [
      active,
      count,
      expandRatio,
      duration,
      ease,
      vertical,
      tilt,
      parallax,
      grayscale,
      showLabels,
      stagger,
      prefersReduced,
    ]
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const measure = () => {
      applyLayout(!firstRunRef.current);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [applyLayout]);

  useEffect(() => {
    applyLayout(!firstRunRef.current);
    firstRunRef.current = false;
  }, [applyLayout, isTouchUI]);

  useEffect(
    () => () => {
      tlRef.current?.kill();
    },
    []
  );

  const handleEnter = (i: number) => {
    if (effectiveTrigger === "hover") setActive(i);
  };

  const handleClick = (i: number) => {
    // Mobile/tablet: tap only expands the panel (design interaction)
    if (isTouchUI || effectiveTrigger === "click") {
      setActive(i);
    }
  };

  const handleFocus = (i: number) => {
    if (!isTouchUI) setActive(i);
  };

  const handleKeyDown = (i: number, e: KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i + 1) % count);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i - 1 + count) % count);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActive(i);
    }
  };

  return (
    <div>
      <div
        ref={rootRef}
        className={`accordion-gallery${vertical ? " accordion-gallery--vertical" : ""}${className ? ` ${className}` : ""}`}
        style={
          {
            "--ag-accent": accentColor,
            "--ag-overlay": overlayColor,
            "--ag-text": textColor,
            "--ag-gap": `${gap}px`,
            "--ag-radius": `${radius}px`,
            height: vertical ? `${Math.round(height * 1.6)}px` : `${height}px`,
          } as CSSProperties
        }
        role="list"
        aria-label="Gallery"
      >
        {items.map((item, i) => {
          const isActive = i === active;
          return (
            <div
              key={`${item.label ?? "panel"}-${i}`}
              ref={(el: HTMLDivElement | null) => {
                panelRefs.current[i] = el;
              }}
              className={`ag-panel${isActive ? " ag-panel--active" : ""}`}
              style={{ borderRadius: `${radius}px` }}
              onClick={() => handleClick(i)}
              onMouseEnter={() => handleEnter(i)}
              onFocus={() => handleFocus(i)}
              onKeyDown={(e: KeyboardEvent) => handleKeyDown(i, e)}
              role="listitem"
              tabIndex={0}
              aria-current={isActive ? "true" : undefined}
              aria-label={
                item.label
                  ? `${item.label}${isActive ? "" : ". Expand"}`
                  : undefined
              }
            >
              <span className="ag-panel__frame">
                <span
                  className="ag-panel__media"
                  ref={(el: HTMLSpanElement | null) => {
                    mediaRefs.current[i] = el;
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.alt || item.label || ""}
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className="ag-panel__overlay" aria-hidden="true" />
              </span>
              {showLabels ? (
                <span className="ag-panel__label" aria-hidden="true">
                  <span
                    className="ag-panel__bar"
                    ref={(el: HTMLSpanElement | null) => {
                      barRefs.current[i] = el;
                    }}
                  />
                  <span
                    className="ag-panel__text"
                    ref={(el: HTMLSpanElement | null) => {
                      textRefs.current[i] = el;
                    }}
                  >
                    {item.label}
                  </span>
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
      {isTouchUI ? (
        <p className="ag-panel__hint">Tap a panel to expand</p>
      ) : null}
    </div>
  );
}

export default AccordionGallery;
