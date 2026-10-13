import type { MetadataRoute } from "next";

const siteUrl = "https://www.cascade-dynamics.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/news", "/careers", "/contact"].map((path) => ({
    url: `${siteUrl}${path}`,
  }));
}
