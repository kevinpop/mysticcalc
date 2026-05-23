import type { MetadataRoute } from "next";
import angelNumbers from "@/data/angel-numbers.json";
import dreamSymbols from "@/data/dream-symbols.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mysticcalc.com";

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), priority: 1.0 },
    { url: `${base}/angel-numbers`, lastModified: new Date(), priority: 0.9 },
    { url: `${base}/dreams`, lastModified: new Date(), priority: 0.9 },
    {
      url: `${base}/tools/angel-number-calculator`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${base}/tools/dream-dictionary`,
      lastModified: new Date(),
      priority: 0.8,
    },
    { url: `${base}/about`, lastModified: new Date(), priority: 0.3 },
    { url: `${base}/contact`, lastModified: new Date(), priority: 0.3 },
    {
      url: `${base}/privacy-policy`,
      lastModified: new Date(),
      priority: 0.2,
    },
    {
      url: `${base}/terms-of-service`,
      lastModified: new Date(),
      priority: 0.2,
    },
  ];

  const angelPages: MetadataRoute.Sitemap = Object.values(angelNumbers).map(
    (a) => ({
      url: `${base}/angel-numbers/${a.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })
  );

  const dreamPages: MetadataRoute.Sitemap = Object.values(dreamSymbols).map(
    (d) => ({
      url: `${base}/dreams/${d.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })
  );

  return [...staticPages, ...angelPages, ...dreamPages];
}
