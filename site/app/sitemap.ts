import type { MetadataRoute } from "next";
import { LEISTUNGEN } from "@/lib/leistungen";

const BASE = "https://kraftspuren.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/leistungen", "/praxis-team", "/kontakt"].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: new Date(),
  }));
  const leistungen = LEISTUNGEN.map((l) => ({
    url: `${BASE}/leistungen/${l.slug}`,
    lastModified: new Date(),
  }));
  return [...staticPages, ...leistungen];
}
