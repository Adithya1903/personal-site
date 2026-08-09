import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE_URL}/`,
      lastModified: new Date(),
      priority: 1,
    },
  ];
}
