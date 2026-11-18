import type { MetadataRoute } from "next";

import { getAllLocationSlugs } from "@/lib/locations";
import { getAllBlogPosts } from "@/lib/blog";

const SITE_RELEASE_DATE = "2026-11-18";

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

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: route === "" ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: SITE_RELEASE_DATE,
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));

  const locationEntries: MetadataRoute.Sitemap = getAllLocationSlugs().map((slug) => ({
    url: `${baseUrl}/locations/${slug}`,
    lastModified: SITE_RELEASE_DATE,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.modifiedDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticEntries, ...locationEntries, ...blogEntries];
}
