import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProviderReference } from "@/lib/business";

export const metadata: Metadata = {
  title: "Google Maps SEO Services for Local Businesses | Spot My Business",
  description:
    "Sharpen Google Maps visibility with rooftop pin accuracy, compliant service-area boundaries, category relevance, and supporting website location signals.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/google-maps-seo",
  },
  openGraph: {
    title: "Google Maps SEO Services for Local Businesses | Spot My Business",
    description:
      "Sharpen Google Maps visibility with rooftop pin accuracy, compliant service-area boundaries, category relevance, and supporting website location signals.",
    url: "https://www.spotmybusiness.in/services/google-maps-seo",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function GoogleMapsSeoPage() {
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
            name: "Google Maps SEO",
            item: "https://www.spotmybusiness.in/services/google-maps-seo",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Google Maps SEO",
        description:
          "Google Maps visibility alignment covering storefront pin calibration, service-area boundary rules, category signals, and website-to-Maps consistency.",
        url: "https://www.spotmybusiness.in/services/google-maps-seo",
        provider: getProviderReference(),
      },
    ],
  };

  const capabilities = [
    {
      title: "Rooftop pin & service-area calibration",
      detail:
        "Storefronts need exact building/gate pins, while dispatched service-area businesses (SABs) must configure realistic 2-hour drive boundaries without address violations.",
    },
    {
      title: "Primary category & service signal alignment",
      detail:
        "We verify your primary and secondary categories match what nearby customers actually type when opening Google Maps.",
    },
    {
      title: "NAP & citation consistency",
      detail:
        "We check for conflicting street addresses, pin codes, or old phone numbers across Indian directories and your website footer.",
    },
    {
      title: "Neighborhood discovery assessment",
      detail:
        "We review how your listing appears across surrounding pin codes and corridors to uncover proximity drop-offs and missing relevance cues.",
    },
    {
      title: "Website-to-Maps topical symmetry",
      detail:
        "Google crawls your linked website URL to corroborate your Map listing. We ensure your website pages clearly confirm the services and neighborhoods shown on Maps.",
    },
    {
      title: "Local schema & embedded map context",
      detail:
        "Where appropriate, we reinforce your site with GeoCoordinates, LocalBusiness schema, and clear landmark directions.",
    },
    {
      title: "Review & sentiment alignment",
      detail:
        "Ratings and recent customer reviews directly shape click decisions in the Maps pack. We help integrate steady response workflows using authentic reviews only.",
    },
    {
      title: "Ongoing monitoring against edits",
      detail:
        "Maps pins, hours, and categories can shift from crowdsourced edits or guideline updates. Regular checks protect your accuracy.",
    },
  ];

  const process = [
    {
      title: "Audit current Maps visibility",
      detail:
        "We inspect pin placement, service-area configuration, visible categories, and how your listing stacks up in neighboring localities.",
    },
    {
      title: "Spot signal & pin discrepancies",
      detail:
        "We flag misplaced pins, guideline-risky keyword stuffing, conflicting directory phone numbers, and website disconnects.",
    },
    {
      title: "Align Maps & website signals",
      detail:
        "We synchronize your Business Profile, service-area boundaries, landing page URL, and structured schema around one clear entity.",
    },
    {
      title: "Strengthen supporting local pages",
      detail:
        "We refine the on-page service details and location context on your website that corroborate Maps relevance.",
    },
    {
      title: "Track actions & refine",
      detail:
        "We monitor calls, direction taps, and Search Console clicks over time and adjust details as your services expand.",
    },
  ];

  const outcomes = [
    {
      title: "Accurate navigation & arrival",
      detail:
        "Customers following Maps directions arrive at the right entrance or gate rather than getting lost in neighboring lanes.",
    },
    {
      title: "Clearer visibility across your real service area",
      detail:
        "Aligned categories, citations, and supporting website pages help your listing stay relevant beyond the immediate block.",
    },
    {
      title: "Higher tap-to-call & direction confidence",
      detail:
        "Complete hours, real photos, and trustworthy ratings make mobile searchers far more likely to call or request directions.",
    },
    {
      title: "Reduced suspension & edit risk",
      detail:
        "Following Google's storefront vs. service-area rules protects your listing from sudden verification triggers or suspensions.",
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
            <li aria-current="page">Google Maps SEO</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Google Maps SEO
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Google Maps SEO built on accurate pins, boundaries, and local signals
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            For nearby services, Google Maps is where customers compare ratings, inspect photos, and tap to call or navigate. Spot My Business calibrates your storefront pin or service-area boundaries and aligns your linked website so local discovery translates into real enquiries.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/google-business-profile-optimization"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Business Profile Optimization
            </Link>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Relevance, proximity, and prominence on the map
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              Google Maps visibility depends on three core signals: relevance (how closely your categories and website match the query), distance (where your pin sits relative to the searcher), and prominence (your reviews, citations, and overall web authority).
            </p>
            <p>
              Many businesses lose map visibility outside a tiny radius because their storefront pin is off by a block, their service-area settings span an unrealistic multi-state territory, or their linked website never backs up the categories listed on Maps.
            </p>
            <p>
              While Google Business Profile optimization handles field-by-field hygiene inside the profile, Google Maps SEO connects that listing with your website structure, geo-signals, and public citations so local pack results stay consistent.
            </p>
          </div>
        </section>

        <section className="border-t border-border-color py-12">
          <figure className="max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
              <Image
                src="/images/blog/google-maps-seo-storefront-vs-sab.webp"
                alt="Comparison diagram of Storefront rooftop map pin placement versus Service-Area Business (SAB) radius setup in Google Maps"
                width={1200}
                height={675}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs text-gray-text">
              Storefront rooftop pin precision vs. Service-Area Business (SAB) boundary configuration for compliant Google Maps visibility.
            </figcaption>
          </figure>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">What we help strengthen</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Focused, guideline-safe refinements connecting your Google Maps listing, local citations, and website pages.
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
          <h2 className="text-3xl font-heading font-bold">How our Maps SEO process runs</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Every step focuses on verifiable location facts, compliant boundaries, and matching website proof.
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
            What stronger Maps alignment delivers
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Cleaner map details remove navigation friction and give nearby customers immediate confidence to call or visit.
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
            Google Maps signals gain durability when backed by a complete Business Profile, local website pages, and active review management.
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
              href="/services/local-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Local SEO
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

          <div className="mt-8 rounded-xl border border-border-color bg-secondary-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Field Guides
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Read our technical guides on configuring map pins, service boundaries, and Business Profile signals:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/blog/google-maps-seo-service-area-businesses"
                className="rounded-full border border-bronze/50 bg-primary-bg px-5 py-2 text-xs md:text-sm font-semibold text-light-bronze hover:border-bronze"
              >
                Google Maps SEO: Storefront vs. Service-Area Businesses →
              </Link>
              <Link
                href="/blog/google-business-profile-optimization-checklist"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2 text-xs md:text-sm text-gray-text hover:text-light-bronze"
              >
                Google Business Profile Optimization Checklist (9 Steps) →
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Review how your business shows up on Maps
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            Send us your current Google Maps listing and service areas. We will check your pin placement, category alignment, and website connection—without claiming unpublished ranking access or guaranteeing #1 positions.
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
