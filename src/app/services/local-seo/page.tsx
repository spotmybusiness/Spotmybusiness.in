import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProviderReference } from "@/lib/business";

export const metadata: Metadata = {
  title: "Local SEO Services for Local Businesses | Spot My Business",
  description:
    "Connect your website service pages, schema markup, and Google Business Profile with neighborhood and 'near me' searches across Kolkata and India.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/local-seo",
  },
  openGraph: {
    title: "Local SEO Services for Local Businesses | Spot My Business",
    description:
      "Connect your website service pages, schema markup, and Google Business Profile with neighborhood and 'near me' searches across Kolkata and India.",
    url: "https://www.spotmybusiness.in/services/local-seo",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function LocalSeoPage() {
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
            name: "Local SEO",
            item: "https://www.spotmybusiness.in/services/local-seo",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Local SEO",
        description:
          "Local search optimization covering dedicated service pages, neighborhood relevance, JSON-LD schema, NAP consistency, and Google Business Profile alignment.",
        url: "https://www.spotmybusiness.in/services/local-seo",
        provider: getProviderReference(),
      },
    ],
  };

  const capabilities = [
    {
      title: "Neighborhood & service-intent mapping",
      detail:
        "We research how buyers in your city actually phrase their searches—by locality, landmark, or urgent need—and map each core service to a dedicated crawlable URL.",
    },
    {
      title: "On-page titles, headings & local copy",
      detail:
        "We refine page titles, H1/H2 structure, and body copy so visitors and search crawlers immediately see what you offer and where you operate.",
    },
    {
      title: "Authentic location relevance without doorway spam",
      detail:
        "Pages cover the areas where your team genuinely serves customers, backed by real service context rather than cloned templates with swapped city names.",
    },
    {
      title: "Structured LocalBusiness & Service schema",
      detail:
        "We wire clean JSON-LD markup connecting your name, verified address, phone numbers, operating hours, and service areas across key pages.",
    },
    {
      title: "Internal linking & enquiry flow",
      detail:
        "We link related service hubs, proof snapshots, and contact CTAs so someone searching locally can go straight from reading to calling or messaging on WhatsApp.",
    },
    {
      title: "Website-to-GBP alignment",
      detail:
        "Your website and Google Business Profile should reinforce one another. We verify that categories, service menus, landing page URLs, and contact channels match cleanly.",
    },
    {
      title: "NAP consistency & Indian citation hygiene",
      detail:
        "We audit how your Name, Address, and Phone number appear across major Indian directories so conflicting old numbers stop eroding search trust.",
    },
    {
      title: "Search Console query refinement",
      detail:
        "Using first-party Google Search Console data, we track which neighborhood terms generate impressions and refine titles and headings where click-through rates lag.",
    },
  ];

  const process = [
    {
      title: "Audit the business & local competitors",
      detail:
        "We examine what you sell, which neighborhoods generate your best enquiries, and why competing listings currently hold top map or organic spots.",
    },
    {
      title: "Spot gaps between website & GBP",
      detail:
        "We list missing service pages, mismatched phone numbers or hours, weak internal links, and crawl coverage issues inside Search Console.",
    },
    {
      title: "Structure service & market pages",
      detail:
        "We upgrade existing copy and build clean, focused landing pages so high-intent local searches land on the exact right service explanation.",
    },
    {
      title: "Align schema & local citations",
      detail:
        "We deploy unified Schema.org markup, verify footer NAP symmetry, and clean up outdated directory entries.",
    },
    {
      title: "Monitor real queries & iterate",
      detail:
        "As new Search Console query data comes in, we adjust page headings, snippets, and internal links around real customer searches.",
    },
  ];

  const outcomes = [
    {
      title: "Clear visibility for high-intent local searches",
      detail:
        "When your website pages echo your Google Business Profile categories and local neighborhoods, both Google Maps and organic results gain stronger relevance signals.",
    },
    {
      title: "Visitors land on answers, not generic brochures",
      detail:
        "Someone searching for a specific service reaches a dedicated page explaining scope, coverage, and next steps instead of hunting through a generic homepage.",
    },
    {
      title: "Consistent business facts everywhere",
      detail:
        "Aligned hours, phone numbers, and street addresses across your site, Maps, and directories prevent lost calls and confused customers.",
    },
    {
      title: "Direct call & WhatsApp conversion paths",
      detail:
        "Clear above-the-fold contact triggers turn local discovery impressions into real phone conversations and WhatsApp enquiries.",
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
            <li aria-current="page">Local SEO</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Local SEO
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Local SEO that connects your website with neighborhood searches
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            A verified Google Business Profile rarely carries local rankings on its own. At Spot My Business, we align your website service pages, structured schema, and local business citations so Google Search, Google Maps, and nearby customers see one consistent, authoritative picture of your business.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/google-maps-seo"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Google Maps SEO
            </Link>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Why your website powers local pack visibility
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              When someone searches for a service nearby, Google cross-checks your Google Business Profile against the website URL attached to it. If your profile lists specialized services that barely appear on your site—or your footer lists an old phone number—local visibility suffers.
            </p>
            <p>
              Local SEO ties your web engineering, on-page service structure, Google Business Profile, and Maps pin together. While profile optimization keeps your listing fields accurate and Maps SEO sharpens geographic relevance, Local SEO builds the website foundation underneath both.
            </p>
            <p>
              We do not spin up dozens of copy-pasted city pages to chase keywords. Instead, we build useful, fast-loading pages grounded in where your team actually serves customers and how local buyers compare options before picking up the phone.
            </p>
          </div>
        </section>

        <section className="border-t border-border-color py-12">
          <figure className="max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
              <Image
                src="/images/blog/local-seo-5-step-strategy-india.webp"
                alt="5-step Local SEO architecture diagram linking website landing pages, NAP citations, Google Business Profile, and Google Search Console"
                width={1200}
                height={675}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-gray-text">
              How our 5-step Local SEO architecture connects website service pages, NAP citations, and Google Search Console feedback loops.
            </figcaption>
          </figure>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">What we deliver</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Practical technical and content work focused on the website, structured markup, and public business signals that govern local discovery.
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
          <h2 className="text-3xl font-heading font-bold">Our 5-step workflow</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            We start by auditing how your market searches today, close website-to-profile gaps, and refine pages against live Search Console data.
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
          <h2 className="text-3xl font-heading font-bold">Practical impact for your business</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Clearer pages and consistent local facts make it straightforward for nearby buyers to verify your business and get in touch.
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
            Local search performs best when your website foundations, Google Business Profile, Maps alignment, and customer reviews reinforce one another.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/internet-marketing"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Centralized Digital Presence &amp; SEO Management
            </Link>
            <Link
              href="/services/google-business-profile-optimization"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Google Business Profile Optimization
            </Link>
            <Link
              href="/services/google-maps-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Google Maps SEO
            </Link>
            <Link
              href="/services/website-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website SEO
            </Link>
            <Link
              href="/services/reputation-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Reputation management
            </Link>
          </div>
          <div className="mt-6 rounded-2xl border border-border-color bg-secondary-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Field Guides
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Explore our step-by-step local search architecture and Google Maps verification guides:
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              <Link
                href="/blog/local-seo-strategy-kolkata-indian-businesses"
                className="inline-block text-sm font-semibold text-heading hover:text-light-bronze underline underline-offset-4"
              >
                Local &amp; Hyperlocal SEO Strategy for Indian Businesses [5-Step Guide] →
              </Link>
              <Link
                href="/blog/google-maps-seo-service-area-businesses"
                className="inline-block text-sm font-semibold text-gray-text hover:text-light-bronze underline underline-offset-4"
              >
                Google Maps SEO: Storefront vs. Service-Area [2026 Guide] →
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Review your local search footprint
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            Tell us which neighborhoods and services matter most for your business. We will audit your current website pages, citations, and Google listing and agree on practical fixes—transparently scoped without guaranteed ranking promises.
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
