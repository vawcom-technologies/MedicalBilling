import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { absoluteUrl } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingCta } from "@/components/layout/floating-cta";
import { SupportAssistant } from "@/components/layout/support-assistant";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { NavigationEffects } from "@/components/providers/navigation-effects";
import { PageTransition } from "@/components/providers/page-transition";
import { JsonLd } from "@/components/json-ld";
import {
  healthcareBusinessSchema,
  organizationSchema,
} from "@/lib/schema";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl("/")),
  title: {
    default: `Medical Billing & Revenue Cycle Management Services | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "medical billing services",
    "revenue cycle management company",
    "medical billing and credentialing",
    "outsource medical billing",
    "provider credentialing services",
    "virtual front desk for medical practice",
  ],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl("/"),
    siteName: siteConfig.name,
    title: `Medical Billing & Revenue Cycle Management Services | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/og-image.png"),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} medical billing services`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Medical Billing & Revenue Cycle Management Services | ${siteConfig.name}`,
    description: siteConfig.description,
    images: [absoluteUrl("/og-image.png")],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.variable} antialiased`}>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={healthcareBusinessSchema()} />
        <a
          href="#main-content"
          className="glass-strong sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary"
        >
          Skip to main content
        </a>
        <LenisProvider>
          <NavigationEffects />
          <ScrollProgress />
          <Navbar />
          <main id="main-content">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <SupportAssistant />
          <FloatingCta />
        </LenisProvider>
      </body>
    </html>
  );
}
