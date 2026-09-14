import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spotmybusiness.in";

  const routes = [
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
    "/privacy-policy/",
    "/terms/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: (route === "" ? "weekly" : "monthly") as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: route === "" ? 1.0 : route.startsWith("/services/") ? 0.8 : 0.7,
  }));
}

