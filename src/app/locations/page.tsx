import type { Metadata } from "next";
import Link from "next/link";

import { getLocationBySlug } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Location-Aware Local Presence & Market Reach | Spot My Business",
  description:
    "Learn how Spot My Business helps local businesses build geographic visibility across Google Search, Google Maps, and their website from our base in Kolkata.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/locations",
  },
  openGraph: {
    title: "Location-Aware Local Presence & Market Reach | Spot My Business",
    description:
      "Learn how Spot My Business helps local businesses build geographic visibility across Google Search, Google Maps, and their website from our base in Kolkata.",
    url: "https://www.spotmybusiness.in/locations",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function LocationsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
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
        name: "Locations",
        item: "https://www.spotmybusiness.in/locations",
      },
    ],
  };

  const localPrinciples = [
    {
      title: "Genuinely Relevant Service Areas",
      detail:
        "We help you define and present the geographic areas where you actually operate or deliver services. We avoid creating hundreds of thin, repetitive doorway pages for towns where a business has no physical presence or real customer history.",
    },
    {
      title: "Google Business Profile & Maps Alignment",
      detail:
        "Whether you operate a fixed physical storefront or a dispatched service-area business, your Google Business Profile must accurately reflect your location type, address visibility, and service reach.",
    },
    {
      title: "Location-Aware Website Content",
      detail:
        "Your website pages should explain what you do and where you do it with natural clarity. Headings, service descriptions, and contact paths should answer local search intent without keyword stuffing.",
    },
    {
      title: "Consistent Business Signals",
      detail:
        "Name, address, phone numbers, operating hours, and website links should remain consistent across your website, Google Maps, and other public mentions.",
    },
  ];

  const localExamples = [
    {
      area: "Santoshpur & Greater Kolkata",
      role: "Spot My Business Operating Base",
      detail:
        "Our verified business address is located in Santoshpur, Kolkata, West Bengal. From here, we work remotely with local businesses to organize and strengthen their digital presence.",
    },
    {
      area: "Behala & South Kolkata",
      role: "Local Service & Catering Context",
      detail:
        "Illustrates how local event services and decorators connect with neighborhood clients through clear service descriptions, photos, and localized Maps alignment.",
    },
    {
      area: "Haltu & Eastern Kolkata",
      role: "Relocation & Logistics Context",
      detail:
        "Illustrates how moving and logistics providers present clear route coverage, quotation options, and verified contact channels across metropolitan hubs.",
    },
    {
      area: "Dankuni & Suburban Centers",
      role: "Coaching & Educational Institute Context",
      detail:
        "Illustrates how localized coaching centers establish discoverability for students and parents searching for specific academic subjects in their immediate area.",
    },
  ];

  const marketRegions = [
    {
      name: "Eastern Region & Bengal",
      description: "Local search and digital visibility across our home state and regional commercial corridors.",
      slugs: ["kolkata", "bidhannagar", "howrah", "west-bengal", "bhubaneswar"],
    },
    {
      name: "National Capital Region & North",
      description: "Navigating high-density search competition across the capital, NCR sectors, and northern hubs.",
      slugs: ["delhi", "noida", "gurugram", "jaipur", "lucknow"],
    },
    {
      name: "Western & Central India",
      description: "Supporting commercial enterprises, industrial belts, logistics centers, and tourism markets.",
      slugs: ["mumbai", "pune", "nagpur", "ahmedabad", "goa"],
    },
    {
      name: "Southern India",
      description: "Optimizing visibility for technology hubs, healthcare capitals, and coastal trade centers.",
      slugs: ["bengaluru", "hyderabad", "chennai", "kochi", "visakhapatnam"],
    },
  ];

  const relevantServices = [
    {
      title: "Centralized Digital Presence & SEO Management",
      detail:
        "End-to-end digital presence management coordinating custom web development, organic SEO, verified Maps listings, and search telemetry.",
      link: "/services/internet-marketing",
    },
    {
      title: "Local SEO",
      detail:
        "Connect local search intent to informative website pages and structured content.",
      link: "/services/local-seo",
    },
    {
      title: "Google Maps SEO",
      detail:
        "Strengthen local discovery and alignment between your Maps listing and website.",
      link: "/services/google-maps-seo",
    },
    {
      title: "Google Business Profile Optimization",
      detail:
        "Review, organize, and maintain your Business Profile details for Search and Maps.",
      link: "/services/google-business-profile-optimization",
    },
    {
      title: "AI Search Optimization",
      detail:
        "Brand entity structuring, GEO, and conversational answer readiness across Google AI Overviews, Perplexity, and ChatGPT.",
      link: "/services/ai-search-optimization",
    },
    {
      title: "Google Search Console Management",
      detail:
        "First-party indexation telemetry, crawl error diagnostics, and search performance monitoring directly from Google's reporting engine.",
      link: "/services/google-search-console-management",
    },
    {
      title: "Website Development",
      detail:
        "Build a clean, responsive website with clear contact and enquiry pathways.",
      link: "/services/website-development",
    },
    {
      title: "Website Performance",
      detail:
        "Optimize recommended Core Web Vitals thresholds (LCP, INP, CLS) and fast mobile responsiveness for demanding visitors.",
      link: "/services/website-performance",
    },
    {
      title: "Reputation Management",
      detail:
        "Monitor public feedback and establish professional review response workflows.",
      link: "/services/reputation-management",
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-text">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-light-bronze">
                Home
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">Locations</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Location &amp; Market Relevance
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Location-aware digital presence for businesses serving local markets
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business is based in Santoshpur, Kolkata, and operates remotely
            to help local businesses establish clear, reliable visibility in the
            areas they genuinely serve. We help align your website, Google Maps,
            and Business Profile to real search intent - without spammy doorway
            pages or artificial boundaries.
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

        {/* Operating Model Section */}
        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Remote collaboration with a verified base
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              Spot My Business operates from a single registered base in
              Santoshpur, Kolkata (Middle Rd, Sen Para, Santoshpur, Kolkata, West
              Bengal 700075). We deliver website development, SEO, and Business
              Profile optimization remotely, collaborating with business owners
              through calls, digital reviews, and direct communication.
            </p>
            <p>
              We do not maintain branch offices, field networks, or walk-in
              studios across other cities. Instead, our focus is on helping each
              client represent their own real-world location, premises, or
              service radius accurately to their local customers.
            </p>
          </div>
        </section>

        {/* Principles Section */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            How we approach local search and geography
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Local search is about making accurate business facts easy for
            customers to find and verify. We structure local presence around
            practical principles rather than shortcuts.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {localPrinciples.map((principle) => (
              <li
                key={principle.title}
                className="rounded-2xl border border-border-color bg-secondary-bg p-6"
              >
                <h3 className="text-lg font-bold text-heading">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {principle.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Regional Context & Experience Section */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Local context across Kolkata and surrounding areas
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Our past work includes businesses serving distinct local
            communities across the Kolkata metropolitan region. These examples
            illustrate how search intent and customer habits differ by location
            and service model - not separate branch territories.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {localExamples.map((item) => (
              <div
                key={item.area}
                className="rounded-2xl border border-border-color bg-secondary-bg p-6"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-light-bronze">
                  {item.role}
                </span>
                <h3 className="mt-2 text-xl font-bold text-heading">
                  {item.area}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas & Markets We Support */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Service areas and markets we support
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Spot My Business delivers remote digital presence, SEO, and website
            solutions to businesses across our verified Google Business Profile service
            areas. Explore contextual considerations and local search dynamics for
            each location.
          </p>

          <div className="mt-10 space-y-10">
            {marketRegions.map((region) => {
              const regionLocations = region.slugs
                .map((slug) => getLocationBySlug(slug))
                .filter((loc): loc is NonNullable<typeof loc> => loc !== undefined);

              return (
                <div key={region.name} className="space-y-4">
                  <div className="border-b border-border-color/40 pb-2">
                    <h3 className="text-xl font-heading font-bold text-heading">
                      {region.name}
                    </h3>
                    <p className="text-xs text-gray-text mt-1">
                      {region.description}
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {regionLocations.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={`/locations/${loc.slug}`}
                        className="group flex flex-col justify-between rounded-xl border border-border-color bg-secondary-bg p-5 transition-all duration-200 hover:border-bronze/50 hover:shadow-md"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-heading font-bold text-heading group-hover:text-light-bronze transition-colors">
                              {loc.name}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-light-bronze font-semibold">
                              {loc.state}
                            </span>
                          </div>
                          <p className="mt-2 text-xs leading-relaxed text-gray-text line-clamp-2">
                            {loc.heroSubtitle}
                          </p>
                        </div>
                        <span className="mt-4 inline-block text-xs font-semibold text-light-bronze group-hover:text-heading transition-colors">
                          View market details →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Relevant Services Section */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Services that support your local presence
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Explore the core services we use to build, manage, and optimize
            local digital visibility.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relevantServices.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-xl border border-border-color bg-secondary-bg p-5"
              >
                <div>
                  <h3 className="font-semibold text-heading">{service.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-text">
                    {service.detail}
                  </p>
                </div>
                <Link
                  href={service.link}
                  className="mt-4 inline-block text-xs font-semibold text-light-bronze hover:text-heading"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss your local market and reach
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If you want to strengthen how your business is discovered by
            customers in your area, contact Spot My Business to review your
            current presence across Google Search, Maps, and your website.
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
