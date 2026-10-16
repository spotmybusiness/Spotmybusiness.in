import type { Metadata } from "next";
import Link from "next/link";

import { businessInfo } from "@/lib/business";

export const metadata: Metadata = {
  title: "AI Search Optimization (GEO & AEO) Services | Spot My Business",
  description:
    "Optimize brand entities, structured schemas, conversational answers, and multi-source citations for discoverability across AI search engines and generative answers.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/ai-search-optimization",
  },
  openGraph: {
    title: "AI Search Optimization (GEO & AEO) Services | Spot My Business",
    description:
      "Optimize brand entities, structured schemas, conversational answers, and multi-source citations for discoverability across AI search engines and generative answers.",
    url: "https://www.spotmybusiness.in/services/ai-search-optimization",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function AiSearchOptimizationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.spotmybusiness.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://www.spotmybusiness.in/services",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "AI Search Optimization",
            item: "https://www.spotmybusiness.in/services/ai-search-optimization",
          },
        ],
      },
      {
        "@type": "Service",
        name: "AI Search Optimization (GEO & AEO)",
        description:
          "Structured data engineering, entity Knowledge Graph alignment, answer engine optimization (AEO), and generative engine optimization (GEO) for business visibility across AI search platforms.",
        url: "https://www.spotmybusiness.in/services/ai-search-optimization",
        provider: {
          "@type": ["LocalBusiness", "ProfessionalService"],
          name: businessInfo.name,
          url: businessInfo.url,
          telephone: businessInfo.telephones,
          email: businessInfo.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: businessInfo.address.streetAddress,
            addressLocality: businessInfo.address.addressLocality,
            addressRegion: businessInfo.address.addressRegion,
            postalCode: businessInfo.address.postalCode,
            addressCountry: businessInfo.address.addressCountry,
          },
        },
      },
    ],
  };

  const capabilities = [
    {
      title: "Entity Knowledge Graph & Schema Markup",
      detail:
        "We implement interconnected JSON-LD structured schemas—Organization, LocalBusiness, Service, and sameAs profiles—so machines can identify your business, ownership, and core offerings without ambiguity.",
    },
    {
      title: "Generative Engine Optimization (GEO)",
      detail:
        "We optimize brand citations, technical crawlability, and factual extractability so that generative search experiences—such as Google AI Overviews and Perplexity—have consistent, reliable data to synthesize.",
    },
    {
      title: "Answer Engine Optimization (AEO)",
      detail:
        "We structure priority pages around direct question-answering, concise definition snippets, and conversational intent so your content is positioned for featured snippets and conversational voice queries.",
    },
    {
      title: "Machine-Readable Data Architecture",
      detail:
        "We implement clean semantic HTML layouts, accessible content structures, and documentation layers (such as llms.txt) that enable AI crawlers to parse your business capabilities efficiently.",
    },
    {
      title: "Multi-Source Information Consistency",
      detail:
        "AI systems cross-reference data across multiple surfaces. We audit your business name, address, phone number, operating hours, and service categories across Google Maps, directories, and web pages.",
    },
    {
      title: "Content Density & Clarification",
      detail:
        "We eliminate vague filler copy and structure your pages with clear service definitions, distinct operational scopes, and genuine business credentials that support automated factual extraction.",
    },
  ];

  const process = [
    {
      title: "Entity & Citation Audit",
      detail:
        "We audit your existing digital footprint across traditional search results, directory profiles, and knowledge graphs to identify factual discrepancies or missing entity signals.",
    },
    {
      title: "Structured Data Engineering",
      detail:
        "We deploy robust, standards-compliant JSON-LD markup connecting your business identity, service areas, locations, and social presence into a unified machine-readable graph.",
    },
    {
      title: "Content & Answer Restructuring",
      detail:
        "We organize priority service pages with direct question-and-answer sections, unambiguous service boundaries, and clear definitions that answer customer search intent.",
    },
    {
      title: "Technical Accessibility & Documentation",
      detail:
        "We verify that page content is fully accessible in pre-rendered HTML, free from blocking scripts, and documented with transparent machine-readable index files.",
    },
    {
      title: "Search Console Monitoring & Analysis",
      detail:
        "We review crawl stats, indexation coverage, and search query trends in Google Search Console to monitor how search engines process your structured pages over time.",
    },
  ];

  const outcomes = [
    {
      title: "Factual Accuracy Across AI Syntheses",
      detail:
        "Providing clear, structured entity facts helps generative systems extract accurate information about your services and operating hours, reducing the risk of outdated or contradictory information.",
    },
    {
      title: "Conversational Query Readiness",
      detail:
        "Structuring pages around genuine questions and concise answers prepares your website for conversational search interfaces, voice assistants, and natural-language queries.",
    },
    {
      title: "Strengthened Search Foundations",
      detail:
        "The technical improvements required for AI search—semantic HTML, fast load times, and clean schema—directly benefit traditional organic SEO and local search visibility as well.",
    },
    {
      title: "Long-Term Digital Equity",
      detail:
        "Building clear entity authority and multi-source consistency creates a durable digital asset owned by your business, compounding credibility over time across all search platforms.",
    },
  ];

  return (
    <main className="bg-primary-bg text-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-text">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-light-bronze">
                Home
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li>
              <Link href="/services" className="hover:text-light-bronze">
                Services
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">AI Search Optimization</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            AI &amp; Generative Search Visibility
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            AI Search Optimization built on structured facts, entity clarity, and authoritative presence
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business helps businesses prepare their digital presence for the evolving search landscape.
            We align your website structure, Knowledge Graph entities, structured schemas, and public citations
            so that generative search engines and answer systems can discover, interpret, and accurately represent
            what your business offers.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/google-search-console-management"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading hover:border-bronze/50 transition-colors"
            >
              Search Console Management
            </Link>
          </div>
        </section>

        {/* Detailed Explanation / What this work involves */}
        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Understanding visibility across generative search engines and answer systems
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              The way people discover information online is expanding. Alongside traditional ranked search results,
              modern platforms utilize generative artificial intelligence to synthesize direct summaries, compare options,
              and answer multi-part questions. Systems like Google AI Overviews, Perplexity, ChatGPT, and Microsoft Copilot
              do not guess in a vacuum; they crawl, retrieve, and synthesize data from indexable web sources.
            </p>
            <p>
              This evolution encompasses three complementary practices:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-text/90">
              <li>
                <strong className="text-heading">Generative Engine Optimization (GEO):</strong> Organizing your brand facts,
                industry citations, and technical content so that generative synthesis algorithms can corroborate your business
                offerings across independent authoritative sources.
              </li>
              <li>
                <strong className="text-heading">Answer Engine Optimization (AEO):</strong> Structuring on-page content with concise,
                direct question-answering architecture, enabling answer extraction for featured snippets, voice search, and AI assistant responses.
              </li>
              <li>
                <strong className="text-heading">AI Optimization (AIO):</strong> Establishing clean, machine-readable data layers—such
                as semantic JSON-LD schema, clean HTML, and accessible markdown documentation—that make parsing friction-free for automated crawlers.
              </li>
            </ul>
            <p>
              AI search optimization does not replace traditional SEO, Local SEO, or Google Business Profile optimization;
              it builds directly upon them. Generative models depend on the very same fundamentals: an accessible website,
              accurate NAP (Name, Address, Phone) information, authoritative third-party mentions, and authentic customer feedback.
            </p>
            <p>
              <strong className="text-heading">Our honest perspective:</strong> Search algorithms and large language models
              evaluate dynamic, probabilistic signals. Spot My Business does not claim or guarantee inclusion in Google AI Overviews,
              nor do we promise automated recommendations in ChatGPT or Gemini. We deliver rigorous, standards-based technical
              and entity optimization that gives your business the strongest factual platform to be understood.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-12 border-t border-border-color">
          <h2 className="text-3xl font-heading font-bold">What we can help with</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Our work focuses on concrete, controllable technical and content foundations. We do not sell speculative
            tricks, unverified ranking software, or artificial citation schemes.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color bg-secondary-bg p-6"
              >
                <h3 className="font-heading font-bold text-lg text-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-text leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* How the Work Proceeds */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">How the work typically proceeds</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Rather than selling an open-ended campaign, we execute a structured sequence: audit existing entity clarity,
            implement schema and answer architecture, and monitor technical crawl health.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color bg-secondary-bg/50 p-5"
              >
                <span className="text-xs font-mono font-bold text-light-bronze uppercase tracking-wider">
                  Phase 0{index + 1}
                </span>
                <h3 className="mt-3 font-heading font-bold text-base text-heading">{item.title}</h3>
                <p className="mt-2 text-xs text-gray-text leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Why Structured AI Visibility Matters */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Why entity clarity and structured data matter
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            When search engines and AI assistants lack clear, verified facts about your business, they are forced to make
            probabilistic guesses or rely on fragmented third-party listings. The outcomes below reflect the practical benefits
            of structured digital clarity—not revenue forecasts or guaranteed positions.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color bg-secondary-bg p-6"
              >
                <h3 className="font-heading font-bold text-lg text-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-text leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Related Services */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Related services</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            AI search optimization integrates closely with our core website development, search analytics, and local search services.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/google-search-console-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors"
            >
              Search Console Management
            </Link>
            <Link
              href="/services/website-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors"
            >
              Website SEO
            </Link>
            <Link
              href="/services/local-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors"
            >
              Local SEO
            </Link>
            <Link
              href="/services/google-business-profile-optimization"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors"
            >
              Google Business Profile Optimization
            </Link>
          </div>
        </section>

        {/* Contact CTA Card */}
        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12 border border-border-color relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-bold text-heading">
              Discuss your business&apos;s AI search readiness
            </h2>
            <p className="mt-3 max-w-2xl text-gray-text leading-relaxed text-sm">
              Whether you want to audit your existing structured schema, clarify your business entities across Google Maps and
              search indexes, or structure your service pages for direct answer engines, we can evaluate your current presence
              and agree on a practical starting point.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-bronze to-light-bronze px-8 py-3.5 text-xs font-heading font-bold uppercase tracking-wider text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
            >
              Contact Spot My Business
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

