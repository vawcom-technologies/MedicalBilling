import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/medical-billing", priority: 0.9, changeFrequency: "monthly" },
    { path: "/credentialing", priority: 0.85, changeFrequency: "monthly" },
    { path: "/virtual-front-desk", priority: 0.85, changeFrequency: "monthly" },
    { path: "/website-development", priority: 0.75, changeFrequency: "monthly" },
    { path: "/social-media-marketing", priority: 0.75, changeFrequency: "monthly" },
    { path: "/seo-services", priority: 0.75, changeFrequency: "monthly" },
    { path: "/tools/revenue-leakage-calculator", priority: 0.7, changeFrequency: "monthly" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  return routes.map((route) => ({
    url: absoluteUrl(route.path || "/"),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
