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
  status?: "published" | "draft";
  keywords?: string[];
  relatedSlugs?: string[];
  author: {
    name: string;
    role: string;
    qualification: string;
    linkedin: string;
  };
  excerpt: string;
  heroImage: string;
  heroImageAlt: string;
  secondaryImages: string[];
  featured: boolean;
  keyHighlights: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "fix-suspended-google-business-profile-india",
    title:
      "How to Fix a Suspended Google Business Profile in India: Video Verification & Reinstatement Checklist",
    metaTitle: "Fix a Suspended Google Business Profile in India [2026]",
    metaDescription:
      "Suspended Google Business Profile in India? Follow our 2026 reinstatement checklist covering GST/Udyam proof, the 60-minute appeal window & video verification.",
    category: "Google Business Profile",
    targetPillar: "Google Business Profile Optimization",
    targetServiceUrl: "/services/google-business-profile-optimization",
    publishDate: "2026-11-25",
    modifiedDate: "2026-11-25",
    readTime: "13 min read",
    status: "published",
    keywords: [
      "suspended google business profile india",
      "gbp video verification checklist",
      "google business profile reinstatement india",
      "gbp 60 minute appeal window",
      "gst certificate gbp appeal",
    ],
    relatedSlugs: [
      "google-business-profile-optimization-checklist",
      "google-maps-seo-service-area-businesses",
      "why-your-google-business-profile-isnt-getting-calls-in-kolkata",
    ],
    author: {
      name: "Swapnonil Nath",
      role: "Co-Founder & Local Visibility Lead",
      qualification: "IIT Kharagpur",
      linkedin: "https://www.linkedin.com/in/swapnonil-nath-gmb-expert/",
    },
    excerpt:
      "Suspended Google Business Profile stopping local phone inquiries? Follow our policy-aligned 2026 Indian reinstatement playbook covering common suspension triggers, exact GST/Trade License/utility proofs, Google's 60-minute appeal window, and a 3-pillar live video verification shot list.",
    heroImage: "/images/blog/gbp-suspension-reinstatement-roadmap-india-2026.webp",
    heroImageAlt:
      "5-Step Suspended Google Business Profile Reinstatement Roadmap for Indian Businesses in 2026",
    secondaryImages: ["/images/blog/gbp-video-verification-3-pillars-india.webp"],
    featured: true,
    keyHighlights: [
      "7 top GBP suspension triggers in India & pre-appeal guideline fixes",
      "Indian evidence matrix: GST, Trade License, Udyam & utility bill 1:1 NAP rules",
      "Storefront vs. Service-Area Business (SAB) 1-take live video verification script",
    ],
  },
  {
    slug: "website-development-price-comparison-india",
    title:
      "Website Development Price Comparison in India: Freelancer vs Agency vs DIY Website Builders (2026 Guide)",
    metaTitle: "Website Development Cost in India [2026 Price Comparison]",
    metaDescription:
      "Compare 2026 website development prices in India across DIY builders, freelancers, and agencies. Includes INR ranges, 18% GST, Shopify fees, and Kolkata rates.",
    category: "Website Engineering & Pricing",
    targetPillar: "Website Development & Management",
    targetServiceUrl: "/services/website-development",
    publishDate: "2026-11-22",
    modifiedDate: "2026-11-22",
    readTime: "14 min read",
    status: "published",
    keywords: [
      "website development cost in india",
      "freelancer vs agency website india",
      "diy website builder cost india",
      "website design cost in kolkata",
      "shopify pricing india",
      "website maintenance cost india",
    ],
    relatedSlugs: [
      "ai-search-optimization-geo-vs-aeo-vs-seo",
      "local-seo-strategy-kolkata-indian-businesses",
      "google-business-profile-optimization-checklist",
    ],
    author: {
      name: "Sagnik Bhaskar",
      role: "Co-Founder & Web Engineering Lead",
      qualification: "Kalyani Government Engineering College",
      linkedin: "https://www.linkedin.com/in/sagnik-bhaskar-2b42b93a6",
    },
    excerpt:
      "Why do two quotes for the same business website in India differ by 10x—from ₹12,000 to ₹1,20,000+? Compare verified 2026 INR pricing across DIY builders (Shopify, Webflow, Wix, WordPress.com), freelancers, and boutique agencies, plus 18% GST, hidden recurring fees, and Kolkata vs. metro rates.",
    heroImage: "/images/blog/website-development-cost-india-2026.webp",
    heroImageAlt:
      "2026 Website Development Price Comparison in India across DIY Builders, Freelancers, Boutique Agencies, and Mid-Sized Agencies",
    secondaryImages: ["/images/blog/shopify-gst-hidden-costs-india-2026.webp"],
    featured: true,
    keyHighlights: [
      "Verified 2026 INR tiers across 49 vendor rate cards, SaaS checkouts & agency audits",
      "Hidden cost math: 18% GST (SAC 998314), Shopify 4.36% fee stacking & Year-1 TCO",
      "Kolkata & West Bengal vs. Bengaluru, Mumbai & Delhi-NCR rate benchmarks",
    ],
  },
  {
    slug: "ai-search-optimization-geo-vs-aeo-vs-seo",
    title:
      "AI Search Optimization Explained: How GEO, AEO, and Traditional SEO Work Together in 2026",
    metaTitle: "GEO vs. AEO vs. SEO: AI Search Guide [2026 Data Study]",
    metaDescription:
      "What is the difference between GEO, AEO, and traditional SEO? See 2026 ranking weights for ChatGPT, Gemini, and Claude—and how to structure brand entities.",
    category: "AI Search (GEO & AEO)",
    targetPillar: "AI Search Optimization (GEO & AEO)",
    targetServiceUrl: "/services/ai-search-optimization",
    publishDate: "2026-11-14",
    modifiedDate: "2026-11-18",
    readTime: "13 min read",
    status: "published",
    keywords: [
      "generative engine optimization",
      "geo vs aeo vs seo",
      "ai search optimization",
      "chatgpt gemini local business ranking",
    ],
    relatedSlugs: [
      "website-development-price-comparison-india",
      "local-seo-strategy-kolkata-indian-businesses",
      "google-business-profile-optimization-checklist",
    ],
    author: {
      name: "Srijan Seal",
      role: "Co-Founder & Search Architecture Lead",
      qualification: "Jadavpur University",
      linkedin: "https://www.linkedin.com/in/srijan-seal-2055b43a5",
    },
    excerpt:
      "Decision-makers increasingly ask ChatGPT, Google Gemini, Perplexity, and Claude for vendor recommendations—yet generative engines do not guess in a vacuum. Explore 2026 empirical retrieval weights across 13,604 queries, Gemini's 3.5-star exclusion filter, and our 4-pillar GEO/AEO architecture.",
    heroImage: "/images/blog/geo-vs-aeo-vs-seo-architecture-2026.webp",
    heroImageAlt:
      "Diagram comparing Traditional SEO, Answer Engine Optimization AEO, and Generative Engine Optimization GEO",
    secondaryImages: ["/images/blog/generative-ai-local-ranking-weights-2026.webp"],
    featured: true,
    keyHighlights: [
      "First Page Sage Oct 2026 RAG study (ChatGPT 52.1%, Gemini 26.9%, Claude 10.6%)",
      "Gemini Local's 38% review weighting & strict 3.5-star minimum rating cutoff",
      "3-column GEO vs. AEO vs. SEO matrix & 4-pillar entity schema playbook",
    ],
  },
  {
    slug: "local-seo-strategy-kolkata-indian-businesses",
    title:
      'Local & Hyperlocal SEO Strategy in Kolkata and India: Connecting Your Website to "Near Me" Searches',
    metaTitle: "Local SEO Strategy for Indian Businesses [5-Step Guide]",
    metaDescription:
      "Build durable local search visibility without doorway spam. Follow our 5-step Local SEO framework for Kolkata and Indian markets in 2026.",
    category: "Google Maps & Local SEO",
    targetPillar: "Local SEO",
    targetServiceUrl: "/services/local-seo",
    publishDate: "2026-11-11",
    modifiedDate: "2026-11-18",
    readTime: "12 min read",
    status: "published",
    keywords: [
      "local seo kolkata",
      "hyperlocal seo india",
      "near me searches",
      "anti doorway location pages",
    ],
    relatedSlugs: [
      "google-maps-seo-service-area-businesses",
      "google-business-profile-optimization-checklist",
      "ai-search-optimization-geo-vs-aeo-vs-seo",
    ],
    author: {
      name: "Swapnonil Nath",
      role: "Co-Founder & Local Visibility Lead",
      qualification: "IIT Kharagpur",
      linkedin: "https://www.linkedin.com/in/swapnonil-nath-gmb-expert/",
    },
    excerpt:
      "City-wide keywords in India are saturated, while hyperlocal neighborhood and 'near me' searches carry immediate buyer intent. Learn our 5-step Local SEO system for connecting your website, service-area pages, and local citations across Kolkata and Indian markets—without thin doorway spam.",
    heroImage: "/images/blog/local-seo-5-step-strategy-india.webp",
    heroImageAlt:
      "5-Step Local SEO Strategy Diagram connecting Website, Google Business Profile, and Maps",
    secondaryImages: [
      "/images/blog/authentic-location-page-vs-doorway.webp",
      "/images/portfolio/bharat-relocators-preview.webp",
    ],
    featured: true,
    keyHighlights: [
      "Hyperlocal neighborhood intent vs. city-wide keywords across Kolkata & Indian metros",
      "Anti-doorway landing page architecture (Nayak Decorators Behala & Republic Packers)",
      "5-step website-centered Local SEO process + NAP & Indian citation verification",
    ],
  },
  {
    slug: "google-maps-seo-service-area-businesses",
    title:
      "Google Maps SEO for Storefront and Service-Area Businesses: Pin Accuracy, Boundaries, and Local Pack Signals",
    metaTitle: "Google Maps SEO: Storefront vs Service-Area [2026 Guide]",
    metaDescription:
      "Learn how Google Maps SEO works for storefronts vs. service-area businesses. Align map pins, service boundaries, and local pack signals.",
    category: "Google Maps & Local SEO",
    targetPillar: "Google Maps SEO",
    targetServiceUrl: "/services/google-maps-seo",
    publishDate: "2026-11-08",
    modifiedDate: "2026-11-18",
    readTime: "11 min read",
    status: "published",
    keywords: [
      "google maps seo",
      "service area business gbp",
      "storefront vs sab",
      "local pack ranking",
    ],
    relatedSlugs: [
      "local-seo-strategy-kolkata-indian-businesses",
      "google-business-profile-optimization-checklist",
      "why-your-google-business-profile-isnt-getting-calls-in-kolkata",
    ],
    author: {
      name: "Swapnonil Nath",
      role: "Co-Founder & Local Visibility Lead",
      qualification: "IIT Kharagpur",
      linkedin: "https://www.linkedin.com/in/swapnonil-nath-gmb-expert/",
    },
    excerpt:
      "Why do some local businesses rank at the top of the Google Maps 3-Pack while others disappear outside a 1 km radius? Discover the technical differences between Storefront map pins and Service-Area Business (SAB) boundaries, proximity centroid rules, and how to align your website location signals.",
    heroImage: "/images/blog/google-maps-seo-storefront-vs-sab.webp",
    heroImageAlt:
      "Google Maps SEO comparison between storefront pin and service-area boundary",
    secondaryImages: [
      "/images/blog/storefront-vs-sab-conversion-flow.webp",
      "/images/portfolio/science-squad-preview.webp",
    ],
    featured: true,
    keyHighlights: [
      "Storefront rooftop pin calibration vs. Service-Area Business (SAB) boundary rules",
      "6-parameter technical configuration matrix & Google 2-hour drive-radius compliance",
      "Documented conversion flows: Science Squad (Dankuni), Bharat Relocators & Nayak Decorators",
    ],
  },
  {
    slug: "google-business-profile-optimization-checklist",
    title:
      "Google Business Profile Optimization Checklist: 9 Practical Steps for Accurate Local Discovery",
    metaTitle: "Google Business Profile Optimization [2026 Checklist]",
    metaDescription:
      "Audit and optimize your Google Business Profile with our 9-step checklist. Align categories, services, NAP accuracy, and reviews in 2026.",
    category: "Google Business Profile",
    targetPillar: "Google Business Profile Optimization",
    targetServiceUrl: "/services/google-business-profile-optimization",
    publishDate: "2026-11-06",
    modifiedDate: "2026-11-18",
    readTime: "12 min read",
    status: "published",
    keywords: [
      "google business profile optimization",
      "gbp checklist 2026",
      "gbp primary secondary categories",
      "local pack nap accuracy",
    ],
    relatedSlugs: [
      "google-maps-seo-service-area-businesses",
      "why-your-google-business-profile-isnt-getting-calls-in-kolkata",
      "local-seo-strategy-kolkata-indian-businesses",
    ],
    author: {
      name: "Swapnonil Nath",
      role: "Co-Founder & Local Visibility Lead",
      qualification: "IIT Kharagpur",
      linkedin: "https://www.linkedin.com/in/swapnonil-nath-gmb-expert/",
    },
    excerpt:
      "A complete 9-step practitioner checklist for auditing and optimizing your Google Business Profile in 2026. Learn how primary and secondary category calibration, structured service menus, Diversity Update URL selection, and ≥3.5★ review velocity govern Google Maps and Gemini AI discovery.",
    heroImage: "/images/blog/gbp-optimization-9-step-checklist.webp",
    heroImageAlt:
      "Google Business Profile Optimization 9-Step Checklist Diagram by Spot My Business",
    secondaryImages: ["/images/blog/science-squad-gbp-comparison.webp"],
    featured: true,
    keyHighlights: [
      "Sterling Sky primary category field data & Google Diversity Update URL rules",
      "First Page Sage Oct 2026 Gemini Local AI weights (38% local reviews & ≥3.5★ gate)",
      "Includes 9-point completeness verification matrix & Science Squad Dankuni snapshot",
    ],
  },
  {
    slug: "why-your-google-business-profile-isnt-getting-calls-in-kolkata",
    title:
      "Why Your Google Business Profile Isn't Getting Calls in Kolkata [2026 Audit Checklist]",
    metaTitle: "Why Your GBP Gets No Calls in Kolkata [2026 Audit]",
    metaDescription:
      "Ranking on Google Maps in Kolkata takes more than verifying a pin. See our 7-step GBP & website alignment checklist with real local Search Console snapshots.",
    category: "Google Business Profile",
    targetPillar: "Google Business Profile Optimization & Google Maps SEO",
    targetServiceUrl: "/services/google-business-profile-optimization",
    publishDate: "2026-10-28",
    modifiedDate: "2026-11-18",
    readTime: "9 min read",
    status: "published",
    keywords: [
      "google business profile calls kolkata",
      "gbp website alignment",
      "kolkata local seo audit",
    ],
    relatedSlugs: [
      "google-business-profile-optimization-checklist",
      "google-maps-seo-service-area-businesses",
      "local-seo-strategy-kolkata-indian-businesses",
    ],
    author: {
      name: "Sagnik Bhaskar",
      role: "Co-Founder & Web Engineering Lead",
      qualification: "Kalyani Government Engineering College",
      linkedin: "https://www.linkedin.com/in/sagnik-bhaskar-2b42b93a6",
    },
    excerpt:
      "Ranking on Google Maps in Kolkata takes far more than a verified pin. Discover why linked websites that contradict your profile destroy conversion rates, how 2026 on-page signals govern Local Pack inclusion, and the 7-step alignment checklist that turns Maps impressions into direct phone calls.",
    heroImage: "/images/blog/gbp-website-alignment-kolkata.webp",
    heroImageAlt:
      "Google Business Profile and website NAP alignment example for a local business in Santoshpur Kolkata",
    secondaryImages: ["/images/blog/google-maps-call-growth-kolkata.webp"],
    featured: false,
    keyHighlights: [
      "Whitespark 2026 local ranking factor data breakdown (15% Pack / 33% Organic)",
      "Kolkata micro-markets: Santoshpur, Behala, Haltu & Salt Lake",
      "Includes 7-step self-audit scorecard and client snapshot proof",
    ],
  },
];

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.status !== "draft");
}

export function getAllBlogPostSlugs(): string[] {
  return getAllBlogPosts().map((post) => post.slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function getAllBlogCategories(): string[] {
  const categories = new Set<string>();
  for (const post of getAllBlogPosts()) {
    categories.add(post.category);
  }
  return Array.from(categories);
}

export function getRelatedBlogPosts(currentSlug: string, limit = 3): BlogPost[] {
  const published = getAllBlogPosts();
  const current = published.find((p) => p.slug === currentSlug);
  const candidates = published.filter((p) => p.slug !== currentSlug);

  if (!current) {
    return candidates.slice(0, limit);
  }

  const ordered: BlogPost[] = [];
  const seen = new Set<string>();

  if (current.relatedSlugs) {
    for (const slug of current.relatedSlugs) {
      const match = candidates.find((p) => p.slug === slug);
      if (match && !seen.has(match.slug)) {
        ordered.push(match);
        seen.add(match.slug);
      }
    }
  }

  for (const post of candidates) {
    if (ordered.length >= limit) break;
    if (!seen.has(post.slug) && post.category === current.category) {
      ordered.push(post);
      seen.add(post.slug);
    }
  }

  for (const post of candidates) {
    if (ordered.length >= limit) break;
    if (!seen.has(post.slug)) {
      ordered.push(post);
      seen.add(post.slug);
    }
  }

  return ordered.slice(0, limit);
}
