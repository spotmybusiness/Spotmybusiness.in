import type { MetadataRoute } from "next";

import { getAllLocationSlugs } from "@/lib/locations";
import { getAllBlogPostSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.spotmybusiness.in";

  const staticRoutes = [
    "",
    "/services",
    "/services/internet-marketing",
    "/services/google-business-profile-optimization",
    "/services/google-maps-seo",
    "/services/local-seo",
    "/services/reputation-management",
    "/services/website-development",
    "/services/website-management",
    "/services/website-seo",
    "/services/website-performance",
    "/services/ai-search-optimization",
    "/services/google-search-console-management",
    "/industries",
    "/locations",
    "/case-studies",
    "/blog",
    "/about",
    "/contact",
    "/faq",
  ];

  const locationRoutes = getAllLocationSlugs().map((slug) => `/locations/${slug}`);
  const blogRoutes = getAllBlogPostSlugs().map((slug) => `/blog/${slug}`);

  const allRoutes = [...staticRoutes, ...locationRoutes, ...blogRoutes];

  return allRoutes.map((route) => ({
    url: route === "" ? `${baseUrl}/` : `${baseUrl}${route}`,
    changeFrequency: (route === "" ? "weekly" : "monthly") as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : route.startsWith("/blog") ? 0.8 : 0.7,
  }));
}
