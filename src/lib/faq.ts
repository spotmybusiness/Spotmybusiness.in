export interface FAQItem {
  id: string;
  question: string;
  answer: string[];
  relatedLink?: {
    text: string;
    href: string;
  };
}

export interface FAQCategory {
  id: string;
  name: string;
  description: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  // =========================================================================
  // CATEGORY 1: How We Work & Remote Delivery
  // =========================================================================
  {
    id: "work-model",
    name: "How We Work & Remote Delivery",
    description:
      "Learn how Spot My Business collaborates with clients across India and internationally from our Kolkata headquarters.",
    items: [
      {
        id: "remote-collaboration-model",
        question: "How does Spot My Business work with clients in different cities?",
        answer: [
          "Spot My Business operates remotely from our registered office in Santoshpur, Kolkata (Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075). We do not require in-person meetings or maintain branch offices in other cities.",
          "We coordinate projects seamlessly via phone calls, Google Meet, WhatsApp communication, email updates, and digital staging reviews. This remote model allows us to support businesses across India — including major metropolitan centers and regional markets — with direct access to our core specialists without bloated overhead costs.",
        ],
        relatedLink: {
          text: "View all supported markets on our Locations hub",
          href: "/locations",
        },
      },
      {
        id: "physical-office-inquiry",
        question: "Do you have local offices or branches in Delhi, Mumbai, Bengaluru, or other cities?",
        answer: [
          "No. Spot My Business operates from a single verified headquarters in Kolkata, West Bengal. We do not have physical branches, sales offices, or walk-in studios in other cities.",
          "Our verified Google Business Profile service areas reflect the geographic regions where we actively deliver digital services to clients. We are fully transparent about our remote operating model so clients know exactly who is managing their work.",
        ],
        relatedLink: {
          text: "Learn more about our company background",
          href: "/about",
        },
      },
      {
        id: "communication-channels",
        question: "What channels do you use for ongoing communication and project updates?",
        answer: [
          "We communicate directly through the channels local business owners already use everyday: direct phone calls (+91 9007960333 / +91 8597913452), WhatsApp messaging, and email (smb.spot.my.business@gmail.com).",
          "During active website builds or SEO reviews, we share structured staging links and written summaries so you can review progress and provide feedback at your convenience.",
        ],
        relatedLink: {
          text: "Contact our team directly",
          href: "/contact",
        },
      },
    ],
  },

  // =========================================================================
  // CATEGORY 2: Services, Search & AI Visibility
  // =========================================================================
  {
    id: "services-scope",
    name: "Services, Search & AI Visibility",
    description:
      "Understand what our web engineering, search visibility, AI search optimization, and management disciplines cover.",
    items: [
      {
        id: "core-service-offerings",
        question: "What services does Spot My Business provide across its core disciplines?",
        answer: [
          "We provide 11 specialized digital presence services structured into four core disciplines:",
          "1. Web Engineering & Technical Foundations: Custom Website Development, Website Performance (Core Web Vitals), and ongoing Website Management.",
          "2. Search Visibility & Local Discovery: On-page Website SEO, Local SEO, Google Business Profile Optimization, and Google Maps SEO.",
          "3. AI & Generative Search Visibility: AI Search Optimization (combining Generative Engine Optimization [GEO] and Answer Engine Optimization [AEO]).",
          "4. Analytics, Governance & Ongoing Management: Google Search Console Management, Centralized Digital Presence & SEO Management (delivered via our /services/internet-marketing hub), and ethical Reputation Management.",
          "Each service is designed to work alongside the others to build a durable, coherent digital presence.",
        ],
        relatedLink: {
          text: "Explore our full services catalog",
          href: "/services",
        },
      },
      {
        id: "seo-vs-local-vs-maps-vs-gbp",
        question:
          "What is the difference between Website SEO, Local SEO, Google Maps SEO, and Google Business Profile optimization?",
        answer: [
          "While closely connected, these four services target different layers of search discovery:",
          "• Website SEO focuses on your website's code, semantic HTML hierarchy, content clarity, and crawlability across nationwide or broad organic searches.",
          "• Local SEO structures location-specific landing pages, service-area relevance, and NAP (Name, Address, Phone) citation consistency to capture customers searching for services in specific towns or neighborhoods.",
          "• Google Business Profile (GBP) Optimization configures and maintains your official business listing in Google's merchant directory — managing categories, operational hours, photos, attributes, and verified reviews.",
          "• Google Maps SEO refines the geographic proximity signals, map pin accuracy, and local pack prominence that determine when your business surfaces in Google Maps navigation and mobile map packs.",
          "Together, they ensure search engines and nearby customers see consistent, verified facts across both web pages and map interfaces.",
        ],
        relatedLink: {
          text: "Explore our Local SEO approach",
          href: "/services/local-seo",
        },
      },
      {
        id: "ai-search-optimization-explained",
        question:
          "What is AI Search Optimization, and how do GEO and AEO relate to conventional SEO?",
        answer: [
          "Conventional SEO focuses on search engine crawlers indexing web pages to match keyword queries in traditional search result listings.",
          "Generative Engine Optimization (GEO) focuses on structuring verified brand facts, entity relationships, and authoritative multi-source citations so that generative AI platforms (such as Google AI Overviews, Perplexity, and conversational engines) accurately synthesize and attribute your business capabilities.",
          "Answer Engine Optimization (AEO) structures direct, conversational Q&A formats, semantic schemas, and clear informational definitions suited for direct answer extraction, featured snippets, and voice search.",
          "AI Search Optimization does not replace traditional SEO; it builds directly upon semantic HTML, structured data markup, and clear content architecture, ensuring your business is understandable to both search crawlers and large language models.",
        ],
        relatedLink: {
          text: "Learn about AI Search Optimization (GEO & AEO)",
          href: "/services/ai-search-optimization",
        },
      },
      {
        id: "google-search-console-vs-third-party-tools",
        question:
          "What does Google Search Console measure, and how does it differ from third-party SEO tools?",
        answer: [
          "Google Search Console (GSC) is Google's official, first-party telemetry platform. It reflects exactly what Google's crawlers observe: verified index coverage, crawl errors (404s, redirect loops, canonical mismatches), XML sitemap submission status, real-user Core Web Vitals (CrUX data), security notifications, and exact organic search queries with verified impressions, clicks, and average positions.",
          "Third-party SEO tools (such as SEMrush, Ahrefs, or Moz) rely on external web scraping, clickstream sample estimates, and simulated ranking checks. While helpful for competitor research, their metrics are estimates and cannot access Google's internal indexation record.",
          "We use Google Search Console as the authoritative source of truth for technical search health, indexation diagnostics, and organic query tracking.",
        ],
        relatedLink: {
          text: "Learn about Google Search Console Management",
          href: "/services/google-search-console-management",
        },
      },
      {
        id: "web-engineering-reinforces-seo",
        question:
          "How do website development, performance, management, and SEO reinforce one another?",
        answer: [
          "A successful digital presence relies on technical disciplines supporting one another:",
          "• Website Development establishes clean semantic markup, accessible navigation, and clear contact pathways so visitors and search engines can navigate with ease.",
          "• Website Performance and Core Web Vitals optimization ensure pages load rapidly and respond smoothly on mobile devices, preventing visitors from abandoning slow pages.",
          "• Website SEO organizes content into structured topics with relevant schema markup, allowing search engines to index your pages accurately.",
          "• Ongoing Website Management keeps business information, software dependencies, and content accurate over time.",
          "When these disciplines are aligned, search crawlers can index your site efficiently, and prospective customers encounter a dependable, professional experience.",
        ],
        relatedLink: {
          text: "Explore our Website Development service",
          href: "/services/website-development",
        },
      },
      {
        id: "reputation-management-local-discovery",
        question:
          "How does reputation management relate to local discovery and customer trust?",
        answer: [
          "Customer reviews serve as a recognized element of local prominence and a primary decision factor for prospective customers. While Google explicitly factors review count and review score into local search prominence, qualitative elements—such as customer sentiment, feedback recency, and constructive owner responses—primarily influence consumer trust, engagement rates, and conversion decisions.",
          "Beyond search algorithms, prospective customers evaluate customer feedback before calling, sending a WhatsApp message, or booking an appointment. A consistent history of authentic, verified reviews combined with professional, empathetic owner responses builds lasting credibility.",
          "We help businesses establish ethical, systematic feedback collection workflows and response protocols without review gating, fake testimonials, or search guideline violations.",
        ],
        relatedLink: {
          text: "Learn about our Reputation Management approach",
          href: "/services/reputation-management",
        },
      },
      {
        id: "centralized-digital-presence-management",
        question:
          "What is Centralized Digital Presence & SEO Management, and why is ongoing coordination necessary?",
        answer: [
          "Local businesses often suffer from fragmented digital efforts: a web developer updates code without SEO structure, a profile is updated with conflicting hours, or directory citations become contradictory.",
          "Centralized Digital Presence & SEO Management (delivered through our /services/internet-marketing route) coordinates your website technical upkeep, organic SEO, Google Business Profile maintenance, and Google Search Console monitoring under a unified strategy.",
          "This ongoing coordination prevents contradictory business signals, catches crawl or indexing anomalies early, and ensures every digital touchpoint presents consistent, accurate information to customers.",
        ],
        relatedLink: {
          text: "Explore Centralized Digital Presence & SEO Management",
          href: "/services/internet-marketing",
        },
      },
    ],
  },

  // =========================================================================
  // CATEGORY 3: Process, Timelines & Investment
  // =========================================================================
  {
    id: "process-pricing",
    name: "Process, Timelines & Investment",
    description:
      "How projects are initiated, scoped, and engineered around your specific business requirements.",
    items: [
      {
        id: "project-initiation-process",
        question: "How do we get started with Spot My Business?",
        answer: [
          "Getting started begins with a straightforward conversation. You can call us, send a WhatsApp message, or submit an inquiry through our contact form describing your business, your current online presence, and your primary objectives.",
          "We review your current website, Google Business Profile, and local search visibility, then discuss practical recommendations and agree on a clear scope of work before any development begins.",
        ],
        relatedLink: {
          text: "Start a conversation on our Contact page",
          href: "/contact",
        },
      },
      {
        id: "custom-pricing-approach",
        question: "Why does Spot My Business not publish a fixed price list on the website?",
        answer: [
          "Every business has distinct requirements: a single-location neighborhood clinic needing a concise responsive website requires a different scope than an enterprise with multiple service categories, complex Schema.org architecture, and multi-market search console diagnostics.",
          "Rather than selling rigid packages that include unused features or cut corners on essential technical foundations, we quote transparently based on the exact scope agreed for your project.",
        ],
        relatedLink: {
          text: "Request a custom scope review",
          href: "/contact",
        },
      },
      {
        id: "custom-engineering-vs-template-websites",
        question:
          "How does a custom-engineered website differ in scope and cost from a generic template or site builder?",
        answer: [
          "Generic templates and drag-and-drop site builders often appear economical upfront, but they frequently bundle heavy, unoptimized code, generic placeholder copy, poor mobile responsiveness, and zero custom structured schema markup or Search Console integration.",
          "Custom web engineering starts with your business model: clean semantic HTML, mobile-first responsive layouts, tailored conversion pathways, and optimized Core Web Vitals built specifically for speed and accessibility.",
          "Crucially, custom development integrates on-page SEO foundations, Schema.org structured data, XML sitemaps, and first-party domain verification from day one. The investment reflects durable digital infrastructure designed to compete in search rather than a disposable visual template.",
        ],
        relatedLink: {
          text: "Explore our Website Development standards",
          href: "/services/website-development",
        },
      },
      {
        id: "project-delivery-timelines",
        question: "How long does a website development or profile optimization project take?",
        answer: [
          "Timelines depend on the agreed scope, content readiness, and the complexity of the service structure. A standard business website build typically progresses through discovery, planning, development, testing, and launch over several structured weeks.",
          "Google Business Profile optimization audits, Search Console verification, and initial technical implementations can often be executed more quickly once verified account access is established.",
        ],
        relatedLink: {
          text: "Explore our Website Development process",
          href: "/services/website-development",
        },
      },
    ],
  },

  // =========================================================================
  // CATEGORY 4: Guarantees & Search Ethics
  // =========================================================================
  {
    id: "guarantees-expectations",
    name: "Guarantees & Search Ethics",
    description:
      "Our transparent perspective on search rankings, AI answer synthesis, and sustainable digital presence.",
    items: [
      {
        id: "ranking-guarantee-policy",
        question: "Do you guarantee #1 rankings on Google or Google Maps?",
        answer: [
          "No. We do not guarantee specific numerical rankings, traffic volumes, lead counts, or revenue outcomes. Search engine algorithms evaluate hundreds of dynamic factors — including user proximity, search history, competitor activity, and platform updates — that no agency can honestly promise to control.",
          "What we deliver is rigorous, best-practice execution: clear site architecture, fast responsive code, accurate business data, genuine local signals, and search-friendly technical foundations that give your business the strongest possible platform to compete.",
        ],
        relatedLink: {
          text: "Read our principles on Local SEO",
          href: "/services/local-seo",
        },
      },
      {
        id: "ai-visibility-guarantees-policy",
        question:
          "Can you guarantee that my business will be cited or recommended in ChatGPT, Google AI Overviews, or Perplexity?",
        answer: [
          "No. Spot My Business does not and cannot guarantee that your business will appear in AI Overviews, ChatGPT responses, Perplexity citations, or any generative search summary.",
          "Large language models and AI answer engines operate probabilistically using retrieval-augmented generation (RAG). They synthesize information from multiple web sources dynamically based on user prompts, context, and model weights that no external agency controls.",
          "What we provide is technical and architectural rigor: structuring machine-readable entity schemas, ensuring NAP (name, address, phone) factual consistency across authoritative sources, crafting clear conversational Q&A content, and providing machine-readable documentation layers (such as llms.txt). This makes your business as clear and citeable as possible for AI systems, without false promises.",
        ],
        relatedLink: {
          text: "Review our AI Search Optimization scope",
          href: "/services/ai-search-optimization",
        },
      },
      {
        id: "google-affiliation-clarification",
        question: "Is Spot My Business affiliated with or endorsed by Google?",
        answer: [
          "No. Spot My Business is an independent digital agency providing website development, SEO, and profile optimization services. We are not employed by, affiliated with, or officially endorsed by Google LLC.",
          "We manage Google Business Profiles and implement SEO strictly adhering to Google's published third-party policies, webmaster guidelines, and local search best practices.",
        ],
        relatedLink: {
          text: "Review our company values and mission",
          href: "/about",
        },
      },
      {
        id: "doorway-page-policy",
        question: "Do you create hundreds of location landing pages to rank across every town?",
        answer: [
          "No. We strictly avoid programmatic doorway pages, scraped city lists, or repetitive thin content. Creating hundreds of identical pages with only the city name swapped violates search quality guidelines and creates a poor experience for prospective customers.",
          "We focus on genuine, high-quality representation for the areas a business truly serves, structuring clear location signals that reflect real operational reach.",
        ],
        relatedLink: {
          text: "See how we structure location-aware digital presence",
          href: "/locations",
        },
      },
    ],
  },
];

export function getAllFAQs(): FAQItem[] {
  return faqCategories.flatMap((category) => category.items);
}

export function getFAQById(id: string): FAQItem | undefined {
  return getAllFAQs().find((item) => item.id === id);
}
