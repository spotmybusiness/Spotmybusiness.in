import type { Metadata } from "next";
import Link from "next/link";
import { getProviderReference } from "@/lib/business";

export const metadata: Metadata = {
  title: "Website SEO Services for Local Businesses | Spot My Business",
  description:
    "Strengthen on-page SEO, semantic HTML hierarchy, Schema.org structured data, internal linking, and crawlability so search engines index your key pages cleanly.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/website-seo",
  },
  openGraph: {
    title: "Website SEO Services for Local Businesses | Spot My Business",
    description:
      "Strengthen on-page SEO, semantic HTML hierarchy, Schema.org structured data, internal linking, and crawlability so search engines index your key pages cleanly.",
    url: "https://www.spotmybusiness.in/services/website-seo",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function WebsiteSeoPage() {
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
            name: "Website SEO",
            item: "https://www.spotmybusiness.in/services/website-seo",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Website SEO",
        description:
          "On-page and technical SEO covering search intent mapping, semantic HTML, JSON-LD schema markup, internal linking, and crawl coverage resolution.",
        url: "https://www.spotmybusiness.in/services/website-seo",
        provider: getProviderReference(),
      },
    ],
  };

  const capabilities = [
    {
      title: "Search intent & keyword-to-URL mapping",
      detail:
        "We stop competing pages from cannibalizing one another by assigning each primary service or topic to one clear canonical URL.",
    },
    {
      title: "Semantic HTML & heading hierarchy",
      detail:
        "Clean H1–H3 structure, pre-rendered server HTML, and descriptive anchor text make every page effortless for Googlebot and screen readers to parse.",
    },
    {
      title: "Titles & meta descriptions that earn clicks",
      detail:
        "We write clear, specific page titles and descriptions matching what searchers look for—avoiding truncated boilerplate or keyword stuffing.",
    },
    {
      title: "Internal linking architecture",
      detail:
        "We connect homepage hubs, service pillars, portfolio proof, and field guides so crawl equity flows naturally to priority commercial pages.",
    },
    {
      title: "JSON-LD Schema.org implementation",
      detail:
        "Unified Organization, Service, BreadcrumbList, and Article structured data graphs help search engines disambiguate your business entity cleanly.",
    },
    {
      title: "Crawlability, canonicals & sitemap hygiene",
      detail:
        "We resolve duplicate URLs, missing canonical tags, soft 404s, robots exclusions, and stale sitemap timestamps flagged in Search Console.",
    },
    {
      title: "Useful, readable page copy",
      detail:
        "We sharpen thin or robotic copy into clear explanations answering real customer questions—built for humans first and extractable for search.",
    },
  ];

  const process = [
    {
      title: "Crawl & Search Console audit",
      detail:
        "We inspect indexed vs. excluded URLs, duplicate titles, canonicals, and existing organic query impressions.",
    },
    {
      title: "Map intent to priority pages",
      detail:
        "We define which service or guide URL owns each search topic so pages reinforce rather than compete against each other.",
    },
    {
      title: "Pinpoint technical & content gaps",
      detail:
        "Orphaned URLs, thin sections, broken links, and missing schema nodes are prioritized before editing begins.",
    },
    {
      title: "Implement on-page & schema fixes",
      detail:
        "We update headings, internal links, metadata, sitemaps, and structured JSON-LD directly in clean source code.",
    },
    {
      title: "Verify indexation & iterate",
      detail:
        "We monitor post-deployment crawling and CTR changes in Search Console and refine pages over time.",
    },
  ];

  const outcomes = [
    {
      title: "Faster, cleaner page indexation",
      detail:
        "Removing duplicate URLs, broken canonicals, and orphaned pages helps search crawlers focus budget on your revenue pages.",
    },
    {
      title: "Clear topical ownership",
      detail:
        "Dedicated, well-structured service pages rank more reliably than a single crowded homepage trying to target twenty terms.",
    },
    {
      title: "Stronger search click-through rates",
      detail:
        "Honest, well-crafted titles and rich breadcrumbs stand out cleanly on mobile and desktop results pages.",
    },
    {
      title: "Shared foundation for Local & AI search",
      detail:
        "Clean HTML, strong internal linking, and valid schema power Local SEO, Google Maps alignment, and generative search visibility alike.",
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
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-12 md:px-12 md:pt-32 md:pb-16">
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
            <li aria-current="page">Website SEO</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Website SEO
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Technical &amp; on-page Website SEO built for crawl clarity and rankings
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Even great services stay invisible when search engines encounter duplicate pages, broken canonicals, or vague headings. Spot My Business cleans up your site architecture, semantic HTML, internal links, and Schema.org markup so Google understands and surfaces your pages cleanly.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/local-seo"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Local SEO
            </Link>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              What technical &amp; on-page SEO fixes
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              Search engines evaluate both technical hygiene and topical clarity. If ten URLs repeat near-identical templates, sitemaps lack updated timestamps, or core service pages sit three clicks deep without internal links, Google often leaves pages stuck in &ldquo;Crawled – currently not indexed.&rdquo;
            </p>
            <p>
              Website SEO fixes the architecture itself: mapping one clear search intent per page, cleaning up heading hierarchy and copy readability, wiring structured JSON-LD entities, and connecting pages logically so crawlers and people navigate effortlessly.
            </p>
            <p>
              While Local SEO and Google Business Profile work capture neighborhood map intent, Website SEO makes sure the underlying domain earns organic trust across every service and educational page you publish.
            </p>
          </div>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">What we optimize on your site</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Direct code-level and content improvements across your HTML, metadata, internal links, and structured data.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color bg-secondary-bg p-5"
              >
                <p className="font-semibold text-heading">{item.title}</p>
                <p className="mt-2 text-sm text-gray-text leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">How our Website SEO work proceeds</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Diagnostic crawl first, intent mapping second, direct code implementation third, followed by Search Console verification.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color p-5"
              >
                <span className="text-sm font-semibold text-light-bronze">
                  0{index + 1}
                </span>
                <p className="mt-3 font-semibold text-heading">{item.title}</p>
                <p className="mt-2 text-xs text-gray-text leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Why clean website foundations matter
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Strong technical and on-page fundamentals make every piece of content, link, and local listing perform harder.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color bg-secondary-bg p-5"
              >
                <p className="font-semibold text-heading">{item.title}</p>
                <p className="mt-2 text-sm text-gray-text leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Related services</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Combine Website SEO with Core Web Vitals tuning, Search Console management, and AI search entity architecture for full-stack organic coverage.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/website-development"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website development
            </Link>
            <Link
              href="/services/website-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website management
            </Link>
            <Link
              href="/services/website-performance"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website performance
            </Link>
            <Link
              href="/services/local-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Local SEO
            </Link>
            <Link
              href="/services/google-search-console-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Search Console Management
            </Link>
            <Link
              href="/services/ai-search-optimization"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              AI Search Optimization
            </Link>
          </div>

          <div className="mt-8 rounded-xl border border-border-color bg-secondary-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Field Guides
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Explore how traditional Website SEO connects directly with AEO Featured Snippets, GEO AI answers, and Local Pack rankings:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/blog/ai-search-optimization-geo-vs-aeo-vs-seo"
                className="rounded-full border border-bronze/50 bg-primary-bg px-5 py-2 text-xs md:text-sm font-semibold text-light-bronze hover:border-bronze"
              >
                GEO vs. AEO vs. SEO Architecture Guide →
              </Link>
              <Link
                href="/blog/local-seo-strategy-kolkata-indian-businesses"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2 text-xs md:text-sm text-gray-text hover:text-light-bronze"
              >
                Structuring Clean Landing Pages Without Doorway Spam →
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Audit your website&apos;s technical SEO foundations
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If important pages aren&apos;t getting indexed or organic impressions feel stuck, we can run a clean technical audit and prioritize what to fix first—without ranking guarantees or black-hat shortcuts.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
          >
            Contact Spot My Business
          </Link>
        </section>
      </div>
    </main>
  );
}
