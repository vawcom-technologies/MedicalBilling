"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Lenis from "lenis";

const STORAGE_KEY = "mb-scroll-positions";

function getLenis() {
  return (window as Window & { __lenis?: Lenis }).__lenis;
}

function getScrollY() {
  const lenis = getLenis();
  return lenis ? lenis.scroll : window.scrollY;
}

function setScroll(y: number, resize = false) {
  const lenis = getLenis();
  if (lenis) {
    if (resize) lenis.resize();
    lenis.scrollTo(y, { immediate: true });
    return;
  }
  window.scrollTo({ top: y, left: 0, behavior: "auto" });
}

function readStore(): Record<string, number> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as Record<string, number>;
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, number>) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {
    // ignore quota / private mode errors
  }
}

function savePosition(path: string, y: number) {
  const store = readStore();
  store[path] = y;
  writeStore(store);
}

function loadPosition(path: string) {
  return readStore()[path] ?? 0;
}

/**
 * Forward clicks start at the top.
 * Browser back/forward restores the prior scroll position.
 */
export function NavigationEffects() {
  const pathname = usePathname();
  const router = useRouter();
  const pathnameRef = useRef(pathname);
  const isPopNavigation = useRef(false);
  const ignoreScrollSave = useRef(false);

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    const onPopState = () => {
      isPopNavigation.current = true;
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Persist scroll position, but never write storage on every wheel tick
  useEffect(() => {
    let frame = 0;
    let timer = 0;

    const persist = () => {
      frame = 0;
      if (ignoreScrollSave.current) return;
      savePosition(pathnameRef.current, getScrollY());
    };

    const onScroll = () => {
      if (ignoreScrollSave.current) return;
      if (!frame) {
        frame = requestAnimationFrame(persist);
      }
      window.clearTimeout(timer);
      timer = window.setTimeout(persist, 180);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  // Intercept same-origin navigations so Next doesn't force scroll-to-top
  // before we can save/restore positions ourselves.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const anchor = (event.target as HTMLElement | null)?.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;

      const current = pathnameRef.current;
      const nextPath = url.pathname;
      const nextKey = `${url.pathname}${url.search}`;
      const currentKey = `${window.location.pathname}${window.location.search}`;

      // Same-page hash jumps are handled by Lenis / the browser
      if (nextKey === currentKey) return;

      // Persist this page's position before leaving
      savePosition(current, getScrollY());

      event.preventDefault();
      router.push(`${nextPath}${url.search}${url.hash}`, { scroll: false });
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  useLayoutEffect(() => {
    const shouldRestore = isPopNavigation.current;
    isPopNavigation.current = false;

    const targetY = shouldRestore ? loadPosition(pathname) : 0;

    ignoreScrollSave.current = true;
    // One clean jump avoids Lenis resize thrash that makes opens feel janky
    setScroll(targetY, shouldRestore);

    const timers = shouldRestore
      ? [80, 220].map((delay) =>
          window.setTimeout(() => setScroll(targetY, true), delay)
        )
      : [];

    const unlock = window.setTimeout(() => {
      ignoreScrollSave.current = false;
      if (shouldRestore) {
        savePosition(pathname, targetY);
      }
    }, shouldRestore ? 260 : 80);

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      window.clearTimeout(unlock);
    };
  }, [pathname]);

  return null;
}
