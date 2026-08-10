"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, Cross } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function easeInOut(t: number) {
  return t * t * (3 - 2 * t);
}

export function Navbar() {
  const pathname = usePathname();
  const [pill, setPill] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const titleRef = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const ctaFullRef = useRef<HTMLSpanElement>(null);
  const ctaShortRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    let frame = 0;

    const apply = (progress: number) => {
      const header = headerRef.current;
      const shell = shellRef.current;
      const row = rowRef.current;
      const logo = logoRef.current;
      const icon = iconRef.current;
      const title = titleRef.current;
      const cta = ctaRef.current;
      if (!header || !shell || !row) return;

      const padX = progress * 20;
      const padY = progress * 14;
      const radius = progress * 999;
      // Keep enough width so nav labels stay on one centered line
      const maxWidth = 100 - progress * 16;
      const barHeight = 80 - progress * 20;
      const logoSize = 40 - progress * 4;
      const iconSize = 20 - progress * 4;
      const titleSize = 18 - progress * 2.5;
      const ctaHeight = 44 - progress * 6;
      const ctaPadX = 22 - progress * 4;

      header.style.paddingLeft = `${padX}px`;
      header.style.paddingRight = `${padX}px`;
      header.style.paddingTop = `${padY}px`;

      shell.style.maxWidth = `${maxWidth}%`;
      shell.style.borderRadius = `${radius}px`;
      shell.style.paddingLeft = `${4 + progress * 10}px`;
      shell.style.paddingRight = `${4 + progress * 10}px`;
      shell.style.boxShadow =
        progress > 0.02
          ? `0 ${12 + progress * 8}px ${30 + progress * 14}px rgba(15,76,129,${0.06 + progress * 0.08})`
          : "none";
      shell.style.borderColor =
        progress > 0.02
          ? `rgba(255,255,255,${0.55 + progress * 0.2})`
          : "transparent";
      shell.style.background =
        progress > 0.02
          ? `rgba(255,255,255,${0.55 + progress * 0.22})`
          : "transparent";
      const blur = progress > 0.02 ? `blur(${10 + progress * 4}px)` : "none";
      shell.style.backdropFilter = blur;
      shell.style.setProperty("-webkit-backdrop-filter", blur);

      row.style.height = `${barHeight}px`;

      if (logo) {
        logo.style.width = `${logoSize}px`;
        logo.style.height = `${logoSize}px`;
      }
      if (icon) {
        icon.style.width = `${iconSize}px`;
        icon.style.height = `${iconSize}px`;
      }
      if (title) {
        title.style.fontSize = `${titleSize}px`;
      }
      if (cta) {
        cta.style.height = `${ctaHeight}px`;
        cta.style.paddingLeft = `${ctaPadX}px`;
        cta.style.paddingRight = `${ctaPadX}px`;
      }
      if (ctaFullRef.current && ctaShortRef.current) {
        const showShort = progress > 0.55;
        ctaFullRef.current.style.opacity = showShort ? "0" : "1";
        ctaShortRef.current.style.opacity = showShort ? "1" : "0";
      }
    };

    const update = () => {
      frame = 0;
      const next = easeInOut(clamp(window.scrollY / 100));
      if (Math.abs(progressRef.current - next) < 0.001) return;
      progressRef.current = next;
      apply(next);

      const nextPill = next > 0.55;
      const nextElevated = next > 0.05;
      setPill((prev) => (prev === nextPill ? prev : nextPill));
      setElevated((prev) => (prev === nextElevated ? prev : nextElevated));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell || progressRef.current > 0.05) return;

    if (open) {
      shell.style.background = "rgba(255,255,255,0.82)";
      shell.style.backdropFilter = "blur(12px)";
      shell.style.setProperty("-webkit-backdrop-filter", "blur(12px)");
      shell.style.borderColor = "rgba(255,255,255,0.7)";
      shell.style.boxShadow = "0 12px 36px rgba(15,76,129,0.08)";
    } else {
      shell.style.background = "transparent";
      shell.style.backdropFilter = "none";
      shell.style.setProperty("-webkit-backdrop-filter", "none");
      shell.style.borderColor = "transparent";
      shell.style.boxShadow = "none";
    }
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="pointer-events-none fixed inset-x-0 top-0 z-50"
      style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0 }}
    >
      <div
        ref={shellRef}
        className={cn(
          "pointer-events-auto mx-auto w-full border will-change-[max-width,border-radius,transform,opacity]",
          elevated || open ? "border-white/70" : "border-transparent"
        )}
        style={{
          maxWidth: "100%",
          borderRadius: 0,
          background: "transparent",
        }}
      >
        <Container
          ref={rowRef}
          className={cn(
            "grid grid-cols-[1fr_auto_1fr] items-center gap-3",
            pill && "max-w-none !px-3"
          )}
          style={{ height: 80 }}
        >
          <Link
            href="/"
            className="group flex min-w-0 items-center justify-self-start gap-2.5"
            aria-label={`${siteConfig.name} home`}
          >
            <span
              ref={logoRef}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-[0_8px_20px_rgba(15,76,129,0.25)] transition-transform duration-300 group-hover:scale-105"
            >
              <Cross ref={iconRef} className="h-5 w-5" aria-hidden="true" />
            </span>
            <span
              ref={titleRef}
              className={cn(
                "font-bold tracking-tight text-primary",
                pill ? "max-w-[7.5rem] truncate xl:max-w-none" : "truncate"
              )}
            >
              {siteConfig.name}
            </span>
          </Link>

          <nav
            className="hidden items-center justify-center gap-0.5 justify-self-center lg:flex"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={false}
                  className={cn(
                    "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full px-3 text-sm font-medium leading-none transition-[background-color,color,box-shadow,padding,font-size] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    pill && "h-8 px-2.5 text-[13px]",
                    active
                      ? pill
                        ? "bg-primary text-white shadow-[0_6px_16px_rgba(15,76,129,0.22)]"
                        : "bg-primary/5 text-primary"
                      : "text-muted hover:bg-white/70 hover:text-primary"
                  )}
                >
                  {pill ? link.short : link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center justify-self-end lg:flex">
            <Button asChild className="rounded-full">
              <Link
                ref={ctaRef}
                href="/contact"
                className="relative inline-flex items-center justify-center"
              >
                <span
                  ref={ctaFullRef}
                  className="whitespace-nowrap transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                >
                  {siteConfig.cta.primary}
                </span>
                <span
                  ref={ctaShortRef}
                  className="pointer-events-none absolute inset-0 flex items-center justify-center whitespace-nowrap opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  aria-hidden="true"
                >
                  Book a Call
                </span>
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "col-start-3 inline-flex h-11 w-11 items-center justify-center justify-self-end text-primary transition-[border-radius,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
              pill ? "rounded-full bg-primary/5" : "glass rounded-2xl"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>

        <div
          className={cn(
            "grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden",
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <Container
              className={cn(
                "flex flex-col gap-1 border-t border-border/70 py-4",
                pill && "border-white/50"
              )}
            >
              {navLinks.map((link) => {
                const active =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    scroll={false}
                    className={cn(
                      "rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                      active
                        ? "bg-primary/8 text-primary"
                        : "text-foreground hover:bg-background"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Button asChild className="mt-2 w-full rounded-full">
                <Link href="/contact">{siteConfig.cta.primary}</Link>
              </Button>
            </Container>
          </div>
        </div>
      </div>
    </header>
  );
}
