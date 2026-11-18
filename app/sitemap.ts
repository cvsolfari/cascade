import type { MetadataRoute } from "next";

const siteUrl = "https://www.cascade-dynamics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/news",
    "/careers",
    "/contact",
    "/high-charge-state-ions",
    "/high-charge-state-ions/applications",
    "/high-charge-state-ions/production-challenges",
    "/high-charge-state-ions/ion-source-technologies",
  ].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
