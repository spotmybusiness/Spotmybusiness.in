import type { ComponentType } from "react";
import type { BlogPost } from "@/lib/blog";
import FixSuspendedGbpIndiaPost from "@/app/blog/posts/FixSuspendedGbpIndiaPost";
import WebsiteDevelopmentPriceComparisonIndiaPost from "@/app/blog/posts/WebsiteDevelopmentPriceComparisonIndiaPost";
import AiSearchOptimizationGeoVsAeoVsSeoPost from "@/app/blog/posts/AiSearchOptimizationGeoVsAeoVsSeoPost";
import LocalSeoStrategyIndiaPost from "@/app/blog/posts/LocalSeoStrategyIndiaPost";
import GoogleMapsSeoStorefrontVsSabPost from "@/app/blog/posts/GoogleMapsSeoStorefrontVsSabPost";
import GbpOptimizationChecklistPost from "@/app/blog/posts/GbpOptimizationChecklistPost";
import KolkataGbpNoCallsPost from "@/app/blog/posts/KolkataGbpNoCallsPost";

export const blogPostRegistry: Record<string, ComponentType<{ post: BlogPost }>> = {
  "fix-suspended-google-business-profile-india": FixSuspendedGbpIndiaPost,
  "website-development-price-comparison-india":
    WebsiteDevelopmentPriceComparisonIndiaPost,
  "ai-search-optimization-geo-vs-aeo-vs-seo":
    AiSearchOptimizationGeoVsAeoVsSeoPost,
  "local-seo-strategy-kolkata-indian-businesses": LocalSeoStrategyIndiaPost,
  "google-maps-seo-service-area-businesses": GoogleMapsSeoStorefrontVsSabPost,
  "google-business-profile-optimization-checklist":
    GbpOptimizationChecklistPost,
  "why-your-google-business-profile-isnt-getting-calls-in-kolkata":
    KolkataGbpNoCallsPost,
};
