import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  Globe,
  Settings,
  TrendingUp,
  Search,
  Gauge,
  MapPin,
  Map,
  Building2,
  Star,
  Sparkles,
  BarChart3,
} from "lucide-react";

export type ServiceStatus = "active" | "proposed" | "unlisted";

export type ServiceClusterId =
  | "web-engineering"
  | "search-local"
  | "ai-search"
  | "governance-management";

export interface ServiceCluster {
  id: ServiceClusterId;
  name: string;
  description: string;
}

export const serviceClusters: ServiceCluster[] = [
  {
    id: "web-engineering",
    name: "Web Engineering & Technical Foundations",
    description:
      "Custom responsive websites, Core Web Vitals optimization, and ongoing maintenance for high reliability.",
  },
  {
    id: "search-local",
    name: "Search Visibility & Local Discovery",
    description:
      "Structured search signals connecting nearby customers across Google Search, Google Maps, and Local SEO.",
  },
  {
    id: "ai-search",
    name: "AI & Generative Search Visibility",
    description:
      "Structuring brand entities, machine-readable facts, and conversational answers for AI synthesis.",
  },
  {
    id: "governance-management",
    name: "Analytics, Governance & Ongoing Management",
    description:
      "Search Console monitoring, multi-channel presence governance, and ethical customer feedback workflows.",
  },
];

export interface ServiceItem {
  id: string;
  numericId: number;
  title: string;
  slug: string;
  href: string | null;
  cluster: ServiceClusterId;
  status: ServiceStatus;
  icon: LucideIcon;
  shortDesc: string;
  hubShortDesc?: string;
  longDesc: string;
  features: string[];
  hubFeatures?: string[];
}

export const allServicesData: ServiceItem[] = [
  // =========================================================================
  // CLUSTER 1: Web Engineering & Technical Foundations
  // =========================================================================
  {
    id: "website-development",
    numericId: 1,
    title: "Website Development",
    slug: "website-development",
    href: "/services/website-development",
    cluster: "web-engineering",
    status: "active",
    icon: Globe,
    shortDesc:
      "Build a professional website that clearly represents your business and makes it easier for customers to take the next step.",
    hubShortDesc:
      "Modern, responsive business websites built for clarity, fast loading, mobile usability, and seamless search discovery.",
    longDesc:
      "We create high-quality business websites with a clear structure, useful content, and a customer-focused experience that supports your wider digital presence.",
    features: [
      "Business Website Planning",
      "Customer-Focused Page Structure",
      "Mobile-Responsive Design",
      "Clear Contact Paths",
    ],
    hubFeatures: [
      "Custom Architecture & Design",
      "Mobile-First Responsive Layouts",
      "Clear Conversion Pathways",
      "Technical On-Page Foundations",
    ],
  },
  {
    id: "website-performance",
    numericId: 5,
    title: "Website Performance",
    slug: "website-performance",
    href: "/services/website-performance",
    cluster: "web-engineering",
    status: "active",
    icon: Gauge,
    shortDesc:
      "Improve the technical experience of your website so visitors can use it with greater confidence.",
    hubShortDesc:
      "Speed diagnostics, Core Web Vitals optimization, asset compression, and mobile rendering enhancements for seamless browsing.",
    longDesc:
      "We review key website performance considerations and recommend improvements that support a smoother, more reliable experience across devices.",
    features: [
      "Performance Review",
      "Mobile Experience Review",
      "Core Website Improvements",
      "Technical Recommendations",
    ],
    hubFeatures: [
      "Core Web Vitals Optimization",
      "Asset & Media Compression",
      "Mobile Usability & Responsiveness",
      "Caching & Code Efficiency",
    ],
  },
  {
    id: "website-management",
    numericId: 2,
    title: "Website Management",
    slug: "website-management",
    href: "/services/website-management",
    cluster: "web-engineering",
    status: "active",
    icon: Settings,
    shortDesc:
      "Keep your website current, dependable, and aligned with the way your business operates.",
    hubShortDesc:
      "Ongoing website updates, technical health monitoring, content accuracy checks, and dependable operational maintenance.",
    longDesc:
      "We provide ongoing website management so your online information, content, and essential website elements can stay accurate and well maintained.",
    features: [
      "Content Updates",
      "Business Information Maintenance",
      "Website Health Checks",
      "Ongoing Support",
    ],
    hubFeatures: [
      "Routine Content & Page Updates",
      "Uptime & Technical Health Monitoring",
      "Security & Backup Verification",
      "Business Information Accuracy",
    ],
  },

  // =========================================================================
  // CLUSTER 2: Search Visibility & Local Discovery
  // =========================================================================
  {
    id: "website-seo",
    numericId: 4,
    title: "Website SEO",
    slug: "website-seo",
    href: "/services/website-seo",
    cluster: "search-local",
    status: "active",
    icon: Search,
    shortDesc:
      "Make your website easier for search engines and prospective customers to understand.",
    hubShortDesc:
      "Comprehensive on-page and technical SEO, structured data markup, semantic hierarchy, and search crawlability optimization.",
    longDesc:
      "We improve the on-page foundations that support organic search visibility, including site structure, relevant content, and technical SEO essentials.",
    features: [
      "On-Page SEO",
      "Site Structure Review",
      "Content Optimization",
      "Technical SEO Foundations",
    ],
    hubFeatures: [
      "Semantic HTML & Schema Markup",
      "Keyword & Content Intent Mapping",
      "Crawlability & Indexing Foundations",
      "Internal Linking Optimization",
    ],
  },
  {
    id: "local-seo",
    numericId: 6,
    title: "Local SEO",
    slug: "local-seo",
    href: "/services/local-seo",
    cluster: "search-local",
    status: "active",
    icon: MapPin,
    shortDesc:
      "Strengthen your visibility for the local searches that matter to your business.",
    hubShortDesc:
      "Targeted local organic search visibility, localized landing pages, geographic relevance signals, and citation alignment.",
    longDesc:
      "We develop a local SEO approach around your services, locations, and market so customers can find accurate, relevant information when they search online.",
    features: [
      "Local Search Strategy",
      "Location-Focused Content",
      "Local Presence Review",
      "Search Visibility Foundations",
    ],
    hubFeatures: [
      "Local Search Intent Optimization",
      "Market & Service Area Pages",
      "NAP Citation Consistency",
      "Geo-Targeted Content Foundations",
    ],
  },
  {
    id: "google-business-profile-optimization",
    numericId: 8,
    title: "Google Business Profile Optimization",
    slug: "google-business-profile-optimization",
    href: "/services/google-business-profile-optimization",
    cluster: "search-local",
    status: "active",
    icon: Building2,
    shortDesc:
      "Make your Google Business Profile accurate, complete, and useful for prospective customers.",
    hubShortDesc:
      "Profile completeness, primary category refinement, product/service listings, and regular operational information updates.",
    longDesc:
      "We optimize the information and presentation of your Google Business Profile so customers can quickly understand your business, services, and ways to get in touch.",
    features: [
      "Profile Information Optimization",
      "Service and Category Review",
      "Customer-Facing Updates",
      "Profile Completeness Review",
    ],
    hubFeatures: [
      "Category & Attribute Calibration",
      "Services & Products Showcase",
      "Operational Hours & Contact Accuracy",
      "Visual Asset & Post Management",
    ],
  },
  {
    id: "google-maps-seo",
    numericId: 7,
    title: "Google Maps SEO",
    slug: "google-maps-seo",
    href: "/services/google-maps-seo",
    cluster: "search-local",
    status: "active",
    icon: Map,
    shortDesc:
      "Help customers discover your business more clearly when they search in Google Maps.",
    hubShortDesc:
      "Geographic relevance, map pin accuracy, service-area definition, and local pack visibility signals across Google Maps.",
    longDesc:
      "We refine the local signals and information that support a more complete, consistent presence in Google Maps for your relevant service areas.",
    features: [
      "Maps Presence Review",
      "Location Information Optimization",
      "Service Area Alignment",
      "Local Discovery Strategy",
    ],
    hubFeatures: [
      "Map Pin & Geographic Accuracy",
      "Service Area Boundary Alignment",
      "Local Pack Prominence Signals",
      "Local Citation & Directory Sync",
    ],
  },

  // =========================================================================
  // CLUSTER 3: AI & Generative Search Visibility
  // =========================================================================
  {
    id: "ai-search-optimization",
    numericId: 10,
    title: "AI Search Optimization",
    slug: "ai-search-optimization",
    href: "/services/ai-search-optimization",
    cluster: "ai-search",
    status: "active",
    icon: Sparkles,
    shortDesc:
      "Structure your digital presence for generative search engines, conversational AI answers, and entity citations.",
    hubShortDesc:
      "Structure your brand entities, machine-readable facts (llms.txt), and conversational FAQ layers for generative AI engines (GEO) and direct answer engines (AEO).",
    longDesc:
      "We structure brand entities, Knowledge Graph schema, conversational FAQ layers, and multi-source citations for discoverability across Google AI Overviews, Perplexity, and conversational AI answers.",
    features: [
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Entity Knowledge Graph Schema",
      "Machine-Readable Brand Facts",
    ],
    hubFeatures: [
      "Generative Engine Optimization (GEO)",
      "Answer Engine Optimization (AEO)",
      "Knowledge Graph & Entity Schema",
      "Machine-Readable Data (llms.txt)",
    ],
  },

  // =========================================================================
  // CLUSTER 4: Analytics, Governance & Ongoing Management
  // =========================================================================
  {
    id: "google-search-console-management",
    numericId: 11,
    title: "Google Search Console Management",
    slug: "google-search-console-management",
    href: "/services/google-search-console-management",
    cluster: "governance-management",
    status: "active",
    icon: BarChart3,
    shortDesc:
      "Verify domain ownership, resolve crawl and indexation errors, and monitor real search queries, impressions, and click-through rates.",
    hubShortDesc:
      "Configure, monitor, and analyze Google Search Console to protect technical search health, diagnose indexation gaps, track keyword performance, and monitor Core Web Vitals.",
    longDesc:
      "We configure, monitor, and analyze Google Search Console to protect technical search health, diagnose indexation gaps, track keyword performance, and monitor Core Web Vitals.",
    features: [
      "Domain Verification & Sitemaps",
      "Index Coverage & Crawl Diagnostics",
      "Search Performance & Query Analysis",
      "Core Web Vitals & Security Monitoring",
    ],
    hubFeatures: [
      "Domain Verification & Sitemap Health",
      "Index Coverage & Crawl Diagnostics",
      "Search Queries & CTR Analysis",
      "Core Web Vitals Diagnostic Reporting",
    ],
  },
  {
    id: "internet-marketing",
    numericId: 0,
    title: "Centralized Digital Presence & SEO Management",
    slug: "internet-marketing",
    href: "/services/internet-marketing",
    cluster: "governance-management",
    status: "active",
    icon: Megaphone,
    shortDesc:
      "Coordinate your website, local search signals, and digital channels under a unified SEO management strategy.",
    hubShortDesc:
      "Unify your website, Local SEO, Google Business Profile, and search channels under a centralized digital presence and ongoing management strategy.",
    longDesc:
      "We provide centralized digital presence and SEO management for businesses, aligning on-page SEO, local search signals, Google Business Profile maintenance, and cross-channel visibility into a coherent strategy.",
    features: [
      "Multi-Channel Search Strategy",
      "Centralized SEO Coordination",
      "Local & Organic Alignment",
      "Digital Presence Governance",
    ],
    hubFeatures: [
      "Unified Multi-Channel Strategy",
      "Cross-Platform SEO Governance",
      "Local & Organic Signal Alignment",
      "Digital Presence Auditing",
    ],
  },
  {
    id: "reputation-management",
    numericId: 9,
    title: "Reputation Management",
    slug: "reputation-management",
    href: "/services/reputation-management",
    cluster: "governance-management",
    status: "active",
    icon: Star,
    shortDesc:
      "Support a trustworthy online presence by making customer feedback an active part of your digital strategy.",
    hubShortDesc:
      "Customer review generation strategies, feedback response guidance, and sentiment monitoring to establish lasting trust.",
    longDesc:
      "We help you establish a thoughtful approach to reviews and customer feedback that supports trust and presents your business more clearly online.",
    features: [
      "Review Strategy",
      "Customer Feedback Guidance",
      "Reputation Presence Review",
      "Trust-Building Recommendations",
    ],
    hubFeatures: [
      "Ethical Review Acquisition Workflows",
      "Customer Feedback Response Protocols",
      "Trust & Credibility Scaffolding",
      "Multi-Platform Reputation Auditing",
    ],
  },

  // =========================================================================
  // Unlisted / Retired Services (Preserved in model, excluded from discovery)
  // =========================================================================
  {
    id: "website-growth",
    numericId: 3,
    title: "Website Growth",
    slug: "website-growth",
    href: null,
    cluster: "web-engineering",
    status: "unlisted",
    icon: TrendingUp,
    shortDesc:
      "Develop a practical website strategy that supports your business as its needs and market evolve.",
    longDesc:
      "We help identify meaningful improvements to your website’s content, structure, and customer journey so it can better support your broader digital goals.",
    features: [
      "Website Strategy",
      "Content Improvement Planning",
      "Customer Journey Review",
      "Growth Roadmap",
    ],
  },
];

// Preserves 10-item curated homepage card sequence, replacing Website Growth with AI Search Optimization
export const homepageServices: ServiceItem[] = [
  allServicesData.find((s) => s.id === "internet-marketing")!,
  allServicesData.find((s) => s.id === "website-development")!,
  allServicesData.find((s) => s.id === "website-management")!,
  allServicesData.find((s) => s.id === "ai-search-optimization")!, // Replaces orphan Website Growth
  allServicesData.find((s) => s.id === "website-seo")!,
  allServicesData.find((s) => s.id === "website-performance")!,
  allServicesData.find((s) => s.id === "local-seo")!,
  allServicesData.find((s) => s.id === "google-maps-seo")!,
  allServicesData.find((s) => s.id === "google-business-profile-optimization")!,
  allServicesData.find((s) => s.id === "reputation-management")!,
];

// Flat navigation interface for consumers
export interface NavigationServiceItem {
  id: string;
  title: string;
  href: string;
  cluster: ServiceClusterId;
}

// Preserves all 11 active services for navigation
export const navigationServices: NavigationServiceItem[] = allServicesData
  .filter((svc) => svc.status === "active" && svc.href !== null)
  .map((svc) => ({
    id: svc.id,
    title: svc.title,
    href: svc.href!,
    cluster: svc.cluster,
  }));

// Categorized cluster structure for navigation menus
export interface NavigationCluster {
  cluster: ServiceCluster;
  services: ServiceItem[];
}

export function getNavigationClusters(): NavigationCluster[] {
  return serviceClusters.map((cluster) => ({
    cluster,
    services: allServicesData.filter(
      (svc) => svc.cluster === cluster.id && svc.status === "active"
    ),
  }));
}

// Hub categorized cluster structure
export interface ServicesHubCluster {
  cluster: ServiceCluster;
  services: ServiceItem[];
}

export function getServicesHubClusters(): ServicesHubCluster[] {
  return serviceClusters.map((cluster) => ({
    cluster,
    services: allServicesData.filter(
      (svc) => svc.cluster === cluster.id && svc.status === "active"
    ),
  }));
}

// Preserves flat hub items for backward compatibility
export interface ServicesHubItem {
  id: string;
  title: string;
  href: string;
  cluster: ServiceClusterId;
  shortDesc: string;
  features: string[];
}

export const servicesHubServices: ServicesHubItem[] = allServicesData
  .filter((svc) => svc.status === "active" && svc.href !== null)
  .map((svc) => ({
    id: svc.id,
    title: svc.title,
    href: svc.href!,
    cluster: svc.cluster,
    shortDesc: svc.hubShortDesc || svc.shortDesc,
    features: svc.hubFeatures || svc.features,
  }));

// Helper functions for consumption across app
export function getAllServices(): ServiceItem[] {
  return allServicesData;
}

export function getActiveServices(): ServiceItem[] {
  return allServicesData.filter((svc) => svc.status === "active");
}

export function getNavigationServices(): NavigationServiceItem[] {
  return navigationServices;
}

export function getHomepageServices(): ServiceItem[] {
  return homepageServices;
}

export function getServicesHubList(): ServicesHubItem[] {
  return servicesHubServices;
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return allServicesData.find((svc) => svc.slug === slug);
}

export function getServicesByCluster(clusterId: ServiceClusterId): ServiceItem[] {
  return allServicesData.filter((svc) => svc.cluster === clusterId && svc.status === "active");
}
