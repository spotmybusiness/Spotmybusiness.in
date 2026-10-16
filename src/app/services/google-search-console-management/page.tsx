import type { Metadata } from "next";
import Link from "next/link";

import { businessInfo } from "@/lib/business";

export const metadata: Metadata = {
  title: "Google Search Console Management Services | Spot My Business",
  description:
    "Verify domain properties, diagnose crawl and indexing errors, submit XML sitemaps, and analyze real Google search queries, impressions, and CTR.",
  alternates: {
    canonical:
      "https://www.spotmybusiness.in/services/google-search-console-management",
  },
  openGraph: {
    title: "Google Search Console Management Services | Spot My Business",
    description:
      "Verify domain properties, diagnose crawl and indexing errors, submit XML sitemaps, and analyze real Google search queries, impressions, and CTR.",
    url: "https://www.spotmybusiness.in/services/google-search-console-management",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function GoogleSearchConsoleManagementPage() {
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
            name: "Google Search Console Management",
            item: "https://www.spotmybusiness.in/services/google-search-console-management",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Google Search Console Management",
        description:
          "Domain property verification, XML sitemap monitoring, index coverage diagnostics, search performance query analysis, and technical search health reporting via Google Search Console.",
        url: "https://www.spotmybusiness.in/services/google-search-console-management",
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
      title: "Property Setup & DNS Verification",
      detail:
        "We set up and verify domain-level properties in Google Search Console using DNS records, ensuring all protocol variants (http, https, www, non-www) and subdomains are consolidated under unified search reporting.",
    },
    {
      title: "XML Sitemap Submission & Monitoring",
      detail:
        "We verify your XML sitemap structure, submit clean index files to Google, and monitor processing status to ensure search crawlers discover new and updated pages efficiently.",
    },
    {
      title: "Index Coverage & URL Inspection Diagnostics",
      detail:
        "We inspect crawl and indexation reports to identify excluded pages, soft 404s, canonical mismatches, 'Crawled - currently not indexed' statuses, and redirect chains that prevent content from appearing in search.",
    },
    {
      title: "Search Performance & Query Analysis",
      detail:
        "We analyze verified first-party search data—actual customer queries, total impressions, organic clicks, click-through rates (CTR), and average positions—to identify high-potential keyword opportunities.",
    },
    {
      title: "Core Web Vitals & Experience Oversight",
      detail:
        "We monitor real user experience metrics (LCP, INP, CLS) captured by Google's Chrome User Experience Report (CrUX) and reported inside Search Console, flagging pages that need technical optimization.",
    },
    {
      title: "Security Issues & Manual Action Checks",
      detail:
        "We monitor Search Console for critical security notifications, such as malware detection, hacked content notices, or manual action penalties that require immediate remediation.",
    },
  ];

  const process = [
    {
      title: "Access & Property Verification",
      detail:
        "We audit your existing Google Search Console access or configure a new DNS-verified domain property, ensuring full historical data access and consolidated ownership.",
    },
    {
      title: "Sitemap & Crawl Health Audit",
      detail:
        "We audit the live sitemap, submit updated index files, and review historical crawl statistics to identify any immediate bottlenecks or server response anomalies.",
    },
    {
      title: "Indexation & Coverage Diagnosis",
      detail:
        "We analyze all excluded, redirected, and unindexed URLs, diagnosing why specific pages are not indexed and distinguishing intentional exclusions from technical crawl errors.",
    },
    {
      title: "Query & Click-Through Analysis",
      detail:
        "We evaluate which organic queries generate impressions and clicks, identifying pages with strong impressions but low click-through rates that would benefit from meta or content refinement.",
    },
    {
      title: "Prioritized Recommendations",
      detail:
        "We translate raw Search Console data into clear, actionable recommendations for your website development, SEO, or content teams to resolve technical blockers.",
    },
  ];

  const outcomes = [
    {
      title: "Verified First-Party Google Data",
      detail:
        "Search Console provides direct, unfiltered data from Google rather than third-party estimations or sample-based ranking tools, giving you an accurate picture of search performance.",
    },
    {
      title: "Early Detection of Indexing Drop-offs",
      detail:
        "Monitoring coverage reports ensures technical anomalies, accidental noindex tags, or server crawl errors are identified before they lead to prolonged visibility loss.",
    },
    {
      title: "Actionable Search Intent Insights",
      detail:
        "Seeing the exact phrases people use when your website appears in search allows you to align page headings, content depth, and services with genuine user demand.",
    },
    {
      title: "Objective Validation of Website Changes",
      detail:
        "Search Console provides direct verification of whether newly published pages are discovered, crawled, and indexed by Google's search infrastructure.",
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
            <li aria-current="page">Google Search Console Management</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Search Analytics &amp; Technical Governance
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Google Search Console management that grounds your search presence in verified data
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business configures, monitors, and analyzes Google Search Console to keep your website&apos;s
            technical health, index coverage, and organic performance transparent and actionable. We connect your
            business directly to Google&apos;s webmaster tools, diagnosing crawl errors and identifying real search queries
            without relying on speculative third-party estimates.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/ai-search-optimization"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading hover:border-bronze/50 transition-colors"
            >
              Explore AI Search Optimization
            </Link>
          </div>
        </section>

        {/* Detailed Explanation / What this work involves */}
        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Direct search health monitoring through Google&apos;s official webmaster tools
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              Google Search Console (GSC) is the primary communication channel between webmasters and Google&apos;s search
              engine. Unlike external SEO tools that scrape search results or estimate traffic volumes, Search Console
              reports what Google&apos;s crawlers actually see, which URLs are indexed, and the exact queries that generated
              impressions and clicks for your business.
            </p>
            <p>
              Professional Search Console management provides essential clarity across several technical dimensions:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-text/90">
              <li>
                <strong className="text-heading">Indexation &amp; Discovery:</strong> Confirming which pages are indexed,
                which are excluded, and the specific reasons Google provides for non-indexation.
              </li>
              <li>
                <strong className="text-heading">Organic Query Diagnostics:</strong> Revealing the real-world search phrases
                people enter before clicking your links, as well as high-impression opportunities where rankings can be improved.
              </li>
              <li>
                <strong className="text-heading">Technical Health &amp; Sitemaps:</strong> Ensuring XML sitemaps are cleanly
                processed, mobile usability standards are met, and security issues are flagged immediately.
              </li>
            </ul>
            <p>
              <strong className="text-heading">Monitoring versus Engineering:</strong> It is important to distinguish
              between diagnosis and implementation. Search Console identifies technical bottlenecks (such as 404 errors,
              canonical issues, or slow Core Web Vitals); resolving those issues requires website engineering or on-page SEO changes.
              Our management service provides the diagnostic insight, prioritizing what needs to be fixed.
            </p>
            <p>
              <strong className="text-heading">Google&apos;s Editorial Autonomy:</strong> Configuring Search Console and submitting
              sitemaps does not force Google to index or rank every page. Google decides whether a page is indexed based on overall quality,
              originality, and relevance. Our role is to ensure all technical barriers to crawling and indexation are removed.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-12 border-t border-border-color">
          <h2 className="text-3xl font-heading font-bold">What we can help with</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            We focus on technical verification, data integrity, and clear diagnostic reporting. We do not invent proprietary
            metrics or make speculative claims about algorithm updates.
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
            Our approach begins with establishing verified domain ownership, followed by a systematic indexation audit and ongoing
            performance review.
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

        {/* Why Search Console Management Matters */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Why verified search data matters
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Managing a website without Search Console is like navigating without instruments. The benefits below reflect the practical
            clarity of direct search data—not guaranteed rankings or artificial traffic targets.
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
            Google Search Console insights directly inform our technical SEO, website performance, and content management workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/ai-search-optimization"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors"
            >
              AI Search Optimization
            </Link>
            <Link
              href="/services/website-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors"
            >
              Website SEO
            </Link>
            <Link
              href="/services/website-performance"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors"
            >
              Website Performance
            </Link>
            <Link
              href="/services/website-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors"
            >
              Website Management
            </Link>
          </div>
        </section>

        {/* Contact CTA Card */}
        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12 border border-border-color relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-heading font-bold text-heading">
              Review your website&apos;s search health in Google Search Console
            </h2>
            <p className="mt-3 max-w-2xl text-gray-text leading-relaxed text-sm">
              If you need domain property setup, want to diagnose why specific pages are excluded from Google&apos;s index,
              or want to understand the actual queries driving impressions to your site, we can review your Search Console
              data and outline clear technical priorities.
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

