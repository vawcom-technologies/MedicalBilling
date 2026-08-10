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

function setScroll(y: number) {
  const lenis = getLenis();
  if (lenis) {
    lenis.resize();
    lenis.scrollTo(y, { immediate: true });
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

  // Keep the current route's scroll position fresh while the user scrolls
  useEffect(() => {
    const onScroll = () => {
      if (ignoreScrollSave.current) return;
      savePosition(pathnameRef.current, getScrollY());
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
    setScroll(targetY);

    const retries = shouldRestore
      ? [0, 40, 100, 200, 350, 500]
      : [0, 40, 100];

    const timers = retries.map((delay) =>
      window.setTimeout(() => setScroll(targetY), delay)
    );

    const unlock = window.setTimeout(() => {
      ignoreScrollSave.current = false;
      // After restoring, keep the saved value accurate
      if (shouldRestore) {
        savePosition(pathname, targetY);
      }
    }, shouldRestore ? 550 : 120);

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
      window.clearTimeout(unlock);
    };
  }, [pathname]);

  return null;
}
