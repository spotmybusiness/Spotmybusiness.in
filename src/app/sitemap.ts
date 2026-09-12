import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spotmybusiness.in";
  const lastModified = new Date();

  const routes = [
    "",
    "/services/",
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
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}

