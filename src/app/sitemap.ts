import type { MetadataRoute } from "next";

import { getAllLocationSlugs } from "@/lib/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spotmybusiness.in";

  const staticRoutes = [
    "",
    "/services/",
    "/services/internet-marketing/",
    "/services/google-business-profile-optimization/",
    "/services/google-maps-seo/",
    "/services/local-seo/",
    "/services/reputation-management/",
    "/services/website-development/",
    "/services/website-management/",
    "/services/website-seo/",
    "/services/website-performance/",
    "/industries/",
    "/locations/",
    "/case-studies/",
    "/about/",
    "/contact/",
    "/faq/",
    "/privacy-policy/",
    "/terms/",
  ];

  const locationRoutes = getAllLocationSlugs().map((slug) => `/locations/${slug}/`);

  const allRoutes = [...staticRoutes, ...locationRoutes];

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: (route === "" ? "weekly" : "monthly") as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: route === "" ? 1.0 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}
