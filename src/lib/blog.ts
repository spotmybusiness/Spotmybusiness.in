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
  keyHighlights: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "google-business-profile-optimization-checklist",
    title:
      "Google Business Profile Optimization Checklist: 9 Practical Steps for Accurate Local Discovery",
    metaTitle: "Google Business Profile Optimization [2026 Checklist]",
    metaDescription:
      "Audit and optimize your Google Business Profile with our 9-step checklist. Align categories, services, NAP accuracy, and reviews in 2026.",
    category: "Google Maps & Local SEO",
    targetPillar: "Google Business Profile Optimization",
    targetServiceUrl: "/services/google-business-profile-optimization",
    publishDate: "2026-11-06",
    modifiedDate: "2026-11-06",
    readTime: "12 min read",
    author: {
      name: "Spot My Business Local Search & Technical SEO Team",
      role: "Local Search & GEO Architecture (Santoshpur, Kolkata)",
    },
    excerpt:
      "A complete 9-step practitioner checklist for auditing and optimizing your Google Business Profile in 2026. Learn how primary and secondary category calibration, structured service menus, Diversity Update URL selection, and ≥3.5★ review velocity govern Google Maps and Gemini AI discovery.",
    heroImage: "/images/blog/gbp-optimization-9-step-checklist.webp",
    heroImageAlt:
      "Google Business Profile Optimization 9-Step Checklist Diagram by Spot My Business",
    featured: true,
    keyHighlights: [
      "Sterling Sky primary category field data & Google Diversity Update URL rules",
      "First Page Sage Oct 2026 Gemini Local AI weights (38% local reviews & ≥3.5★ gate)",
      "Includes 9-point completeness verification matrix & Science Squad Dankuni snapshot",
    ],
  },
  {
    slug: "why-your-google-business-profile-isnt-getting-calls-in-kolkata",
    title: "Why Your Google Business Profile Isn't Getting Calls in Kolkata [2026 Audit Checklist]",
    metaTitle: "Why Your GBP Gets No Calls in Kolkata [2026 Audit]",
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
    featured: false,
    keyHighlights: [
      "Whitespark 2026 local ranking factor data breakdown (15% Pack / 33% Organic)",
      "Kolkata micro-markets: Santoshpur, Behala, Haltu & Salt Lake",
      "Includes 7-step self-audit scorecard and client snapshot proof",
    ],
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
