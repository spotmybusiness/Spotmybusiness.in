import type { Metadata } from "next";
import Link from "next/link";
import { getProviderReference } from "@/lib/business";

export const metadata: Metadata = {
  title: "Website Performance & Core Web Vitals Optimization | Spot My Business",
  description:
    "Improve LCP, INP, and CLS on your live site by trimming heavy JavaScript bundles, compressing images to WebP/AVIF, and optimizing mobile loading.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/website-performance",
  },
  openGraph: {
    title: "Website Performance & Core Web Vitals Optimization | Spot My Business",
    description:
      "Improve LCP, INP, and CLS on your live site by trimming heavy JavaScript bundles, compressing images to WebP/AVIF, and optimizing mobile loading.",
    url: "https://www.spotmybusiness.in/services/website-performance",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function WebsitePerformancePage() {
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
            name: "Website Performance",
            item: "https://www.spotmybusiness.in/services/website-performance",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Website Performance",
        description:
          "Core Web Vitals (LCP, INP, CLS) optimization, WebP/AVIF media compression, client-side JavaScript reduction, and mobile responsiveness engineering.",
        url: "https://www.spotmybusiness.in/services/website-performance",
        provider: getProviderReference(),
      },
    ],
  };

  const capabilities = [
    {
      title: "Real-device & CrUX performance audit",
      detail:
        "We inspect Search Console Core Web Vitals field reports alongside mobile throttling tests to find what actually slows down first paint and taps.",
    },
    {
      title: "Image & media compression",
      detail:
        "Oversized PNG and JPEG files convert to properly sized WebP/AVIF assets with explicit aspect dimensions and smart lazy-loading below the fold.",
    },
    {
      title: "Trimming client-side JavaScript bloat",
      detail:
        "Animations and UI toggles that CSS and native HTML handle cleanly are stripped out of heavy runtime bundles so mobile CPUs stay responsive.",
    },
    {
      title: "Font, CSS & critical asset loading",
      detail:
        "We eliminate render-blocking stylesheets, set font-display swap properly, and prevent layout jumping (CLS) during hydration.",
    },
    {
      title: "Server rendering & caching efficiency",
      detail:
        "We optimize static pre-rendering, cache headers, and asset delivery so pages start painting quickly even on congested mobile networks.",
    },
    {
      title: "Core Web Vitals tuning (LCP, INP, CLS)",
      detail:
        "We target Largest Contentful Paint, Interaction to Next Paint, and Cumulative Layout Shift thresholds systematically across priority templates.",
    },
  ];

  const process = [
    {
      title: "Measure real bottlenecks",
      detail:
        "We profile live pages across mobile network throttling, Lighthouse diagnostics, and Search Console CrUX reports.",
    },
    {
      title: "Rank fixes by impact",
      detail:
        "Heavy hero images, blocking third-party tags, and oversized scripts move to the front of the queue.",
    },
    {
      title: "Scope cleanly on live code",
      detail:
        "We fix bottlenecks inside your existing stack whenever practical—only recommending a rebuild if the platform itself blocks speed.",
    },
    {
      title: "Optimize assets & code",
      detail:
        "Images compress, unused JS comes out, dimensions lock against layout shift, and critical resources preload cleanly.",
    },
    {
      title: "Verify field stability",
      detail:
        "We confirm measurable improvements in live page responsiveness and Search Console Core Web Vitals diagnostics.",
    },
  ];

  const outcomes = [
    {
      title: "Visitors stay instead of bouncing",
      detail:
        "When a page paints immediately on a smartphone, prospective buyers stay long enough to read your offer and tap Call or WhatsApp.",
    },
    {
      title: "Smoother interaction on modest devices",
      detail:
        "Lighter JavaScript prevents frozen scroll and sluggish tap delays on budget Android phones.",
    },
    {
      title: "Cleaner technical standing in Search Console",
      detail:
        "Resolving poor LCP, INP, and CLS URLs keeps page experience diagnostics green.",
    },
    {
      title: "Easier long-term maintenance",
      detail:
        "Lean, well-organized pages don't break every time you publish new case studies or blog articles.",
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
            <li aria-current="page">Website Performance</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Website Performance
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Website performance optimization for fast mobile loading and Core Web Vitals
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Most local search visitors open your site on a smartphone over a variable mobile connection. Spot My Business strips out script bloat, compresses heavy media, and stabilizes layout shifts so your pages load quickly and feel responsive on real devices.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/website-seo"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Website SEO
            </Link>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Why mobile speed quietly decides conversions
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              A website can look clean on a developer&apos;s desktop and still take six seconds to become clickable on a mid-range Android phone. Uncompressed PNG banners, third-party chat widgets, and heavy animation libraries stall the main thread before a visitor can tap your phone number.
            </p>
            <p>
              We treat Core Web Vitals—Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS)—as practical engineering targets that make pages comfortable for real customers to read and tap.
            </p>
            <p>
              Performance optimization focuses strictly on how your current pages load and respond; when full site redesigns or content SEO are needed alongside speed fixes, we coordinate those cleanly across our web and search services.
            </p>
          </div>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">What we optimize technically</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Direct reductions in page weight, render-blocking assets, and layout instability across mobile and desktop viewports.
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
          <h2 className="text-3xl font-heading font-bold">How our optimization workflow runs</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Profile bottlenecks first, cut the heaviest drags on paint and interactivity, and verify stability in real-user data.
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
            What faster delivery changes
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Pages that paint instantly keep local searchers engaged from the first second.
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
            Pair Core Web Vitals tuning with Website SEO, Search Console tracking, and custom Next.js web builds.
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
              href="/services/website-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website SEO
            </Link>
            <Link
              href="/services/google-search-console-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Search Console (Core Web Vitals)
            </Link>
          </div>

          <div className="mt-8 rounded-xl border border-border-color bg-secondary-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Field Guides
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Explore how page speed, mobile experience, and landing page conversion tie into Local SEO and AI visibility:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/blog/local-seo-strategy-kolkata-indian-businesses"
                className="rounded-full border border-bronze/50 bg-primary-bg px-5 py-2 text-xs md:text-sm font-semibold text-light-bronze hover:border-bronze"
              >
                Mobile Experience &amp; Local SEO Strategy Guide →
              </Link>
              <Link
                href="/blog/ai-search-optimization-geo-vs-aeo-vs-seo"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2 text-xs md:text-sm text-gray-text hover:text-light-bronze"
              >
                Technical Foundations for SEO, AEO &amp; GEO →
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Diagnose what slows down your live website
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            Send us your website URL and we will inspect image weight, script blocking, and mobile Core Web Vitals—giving you clear technical priorities without guaranteed Lighthouse score gimmicks.
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
