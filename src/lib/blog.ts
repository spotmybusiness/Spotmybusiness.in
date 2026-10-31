export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  targetPillar: string;
  targetServiceUrl: string;
  publishDate: string;
  modifiedDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-google-business-profile-isnt-getting-calls-in-kolkata",
    title: "Why Your Google Business Profile Isn't Getting Calls in Kolkata [2026 Audit Checklist]",
    metaTitle: "Why Your Google Business Profile Isn't Getting Calls in Kolkata [2026 Audit Checklist] | Spot My Business",
    metaDescription:
      "Ranking on Google Maps in Kolkata takes more than verifying a pin. See our 7-step GBP & website alignment checklist with real local Search Console snapshots.",
    category: "Google Maps & Local SEO",
    targetPillar: "Google Business Profile Optimization & Google Maps SEO",
    targetServiceUrl: "/services/google-business-profile-optimization",
    publishDate: "2026-10-28",
    modifiedDate: "2026-10-31",
    readTime: "9 min read",
    author: {
      name: "Spot My Business Local Search Team",
      role: "Local Search & GEO Architecture",
    },
    excerpt:
      "Ranking on Google Maps in Kolkata takes far more than a verified pin. Discover why linked websites that contradict your profile destroy conversion rates, how 2026 on-page signals govern Local Pack inclusion, and the 7-step alignment checklist that turns Maps impressions into direct phone calls.",
    heroImage: "/images/blog/gbp-website-alignment-kolkata.webp",
    heroImageAlt:
      "Google Business Profile and website NAP alignment example for a local business in Santoshpur Kolkata",
    featured: true,
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts;
}

export function getAllBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
