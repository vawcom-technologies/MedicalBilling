import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { HeroBackground } from "@/components/sections/hero-background";

/** Shared photo-hero frame — matches Virtual Front Desk / service pages. */
export const photoHeroSectionClassName =
  "relative overflow-x-clip pb-10 pt-24 md:pb-14 md:pt-28";

/** Locked band height (Virtual Front Desk reference) so every page matches. */
export const photoHeroBandClassName =
  "relative isolate flex min-h-[32rem] items-center overflow-hidden md:h-[38rem] md:min-h-[38rem]";

export const photoHeroContentClassName =
  "relative z-[2] w-full py-12 md:py-14 lg:py-16";

type PhotoHeroShellProps = {
  src: string;
  alt: string;
  intensity?: "soft" | "strong";
  breadcrumb?: string;
  children: ReactNode;
  /** Centered single-column heroes (contact, calculator) */
  align?: "start" | "center";
};

/**
 * Full-bleed photo hero with a locked height so all pages stay uniform.
 * Top/bottom section spacing matches PageHero; image spans edge to edge.
 */
export function PhotoHeroShell({
  src,
  alt,
  intensity = "soft",
  breadcrumb,
  children,
  align = "start",
}: PhotoHeroShellProps) {
  return (
    <section className={photoHeroSectionClassName}>
      {breadcrumb ? (
        <Container className="relative z-[2] mb-4">
          <nav aria-label="Breadcrumb">
            <ol className="inline-flex flex-wrap items-center gap-1.5 text-sm text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                <span
                  className="font-medium text-foreground"
                  aria-current="page"
                >
                  {breadcrumb}
                </span>
              </li>
            </ol>
          </nav>
        </Container>
      ) : null}

      <div className={photoHeroBandClassName}>
        <HeroBackground src={src} alt={alt} intensity={intensity} />
        <Container
          className={`${photoHeroContentClassName}${
            align === "center" ? " text-center" : ""
          }`}
        >
          {children}
        </Container>
      </div>
    </section>
  );
}
