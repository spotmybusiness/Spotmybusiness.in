import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProviderReference } from "@/lib/business";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization | Spot My Business",
  description:
    "Audit, calibrate, and maintain your Google Business Profile—primary categories, service catalogs, attributes, photos, and UTM tracking for Search and Maps.",
  alternates: {
    canonical:
      "https://www.spotmybusiness.in/services/google-business-profile-optimization",
  },
  openGraph: {
    title: "Google Business Profile Optimization | Spot My Business",
    description:
      "Audit, calibrate, and maintain your Google Business Profile—primary categories, service catalogs, attributes, photos, and UTM tracking for Search and Maps.",
    url: "https://www.spotmybusiness.in/services/google-business-profile-optimization",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function GoogleBusinessProfileOptimizationPage() {
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
            name: "Google Business Profile Optimization",
            item: "https://www.spotmybusiness.in/services/google-business-profile-optimization",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Google Business Profile Optimization",
        description:
          "Category calibration, service menu structuring, NAP verification, UTM website linking, and ongoing Google Business Profile maintenance.",
        url: "https://www.spotmybusiness.in/services/google-business-profile-optimization",
        provider: getProviderReference(),
      },
    ],
  };

  const capabilities = [
    {
      title: "NAP & holiday hours accuracy",
      detail:
        "We verify your official business name, street address, phone numbers, and special festival hours so customers never call a dead line or drive to a closed door.",
    },
    {
      title: "Primary & secondary category calibration",
      detail:
        "Your primary category is one of the strongest local pack signals. We match categories tightly to what drives revenue rather than leaving a generic label selected.",
    },
    {
      title: "Pre-defined & custom service catalogs",
      detail:
        "We organize clear service menus and descriptions inside your GBP dashboard, aligning every entry directly with matching pages on your website.",
    },
    {
      title: "Policy-compliant business description",
      detail:
        "We craft a natural, readable 750-character overview explaining your real work and service area without spammy keyword stuffing or promotional links.",
    },
    {
      title: "Attributes, opening date & profile completeness",
      detail:
        "We complete relevant operational attributes, accessibility details, and appointment links so customers see full facts at a glance.",
    },
    {
      title: "Authentic photo & visual curation",
      detail:
        "We organize real storefront, team, equipment, and project photos—avoiding stock imagery that lowers user trust or triggers automated rejections.",
    },
    {
      title: "Landing page URL & UTM telemetry",
      detail:
        "We connect your profile to the best-converting page on your site with clean UTM tags so Google Search Console and Analytics track actual GBP clicks.",
    },
    {
      title: "Review workflow & owner reply alignment",
      detail:
        "We review how feedback appears on your listing and establish calm, timely owner response habits using genuine customer reviews only.",
    },
    {
      title: "Protection against unwanted suggested edits",
      detail:
        "Competitors and automated bots routinely suggest hours or category changes on Maps. Ongoing monitoring catches and reverts inaccurate edits quickly.",
    },
  ];

  const process = [
    {
      title: "Profile & Search Audit",
      detail:
        "We inspect how your profile currently renders on Search and Maps, checking categories, pin placement, duplicate listings, and missing fields.",
    },
    {
      title: "Cleanup & Field Calibration",
      detail:
        "We fix inaccurate NAP entries, refine primary and secondary categories, and structure your service catalog and description.",
    },
    {
      title: "Website & Schema Sync",
      detail:
        "We align your linked website landing page, footer NAP, and Schema.org markup so Google sees identical entity facts everywhere.",
    },
    {
      title: "Visual & Review Hygiene",
      detail:
        "We help organize real on-site photos and put a steady, policy-compliant review response workflow in place.",
    },
    {
      title: "Ongoing Edit Monitoring",
      detail:
        "We watch for holiday hour shifts, service updates, and third-party suggested edits so your listing never drifts out of date.",
    },
  ];

  const outcomes = [
    {
      title: "Fewer confused calls & wasted trips",
      detail:
        "Accurate opening hours, exact pin coordinates, and clear service menus help the right customers reach you ready to book.",
    },
    {
      title: "Stronger relevance in local searches",
      detail:
        "Specific categories and complete service lists give Google Search, Google Maps, and AI local answers cleaner signals to match your business.",
    },
    {
      title: "Higher trust on first impression",
      detail:
        "Real photos, active owner replies, and consistent facts look visibly more dependable than neglected or half-empty profiles.",
    },
    {
      title: "Clearer click & call tracking",
      detail:
        "Proper UTM tagging separates Google Business Profile clicks from standard organic visits so you can see how the listing contributes.",
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
            <li aria-current="page">Google Business Profile Optimization</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Google Business Profile
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Google Business Profile Optimization for local businesses
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Most local customers see your Google Business Profile before they ever click through to your website. Spot My Business audits, calibrates, and maintains your categories, services, hours, photos, and website links so your listing earns trust in Google Search and Maps.
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
              More than just verifying a pin
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              Claiming a Google Business Profile is only the starting line. Leaving default categories, empty service tabs, outdated festival hours, or a broken homepage link leaves easy local calls on the table.
            </p>
            <p>
              Searchers judge your reliability in seconds from your primary category, recent photos, operating status, and how you respond to customer reviews. At the same time, Google cross-checks every detail on your profile against your linked website and public citations.
            </p>
            <p>
              Our work stays strictly within Google Business Profile guidelines—building authentic completeness and website symmetry without fake locations, keyword-stuffed names, or bought reviews that risk listing suspension.
            </p>
          </div>
        </section>

        <section className="border-t border-border-color py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            <figure>
              <div className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
                <Image
                  src="/images/blog/gbp-optimization-9-step-checklist.webp"
                  alt="9-step Google Business Profile optimization workflow covering NAP accuracy, primary category selection, service menus, photos, and review monitoring"
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-gray-text">
                Our 9-step Google Business Profile verification framework aligning profile completeness with website signals.
              </figcaption>
            </figure>

            <figure>
              <div className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
                <Image
                  src="/images/blog/science-squad-gbp-comparison.webp"
                  alt="Before and after Google Business Profile completeness comparison illustrated with Science Squad Dankuni field workflow"
                  width={1200}
                  height={675}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-gray-text">
                Comparison showing how category specificity, course menus, and structured landing links strengthen local discovery.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">What we optimize on your profile</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Every adjustment focuses on the profile fields, visual assets, and linked website pages you directly own and control.
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
          <h2 className="text-3xl font-heading font-bold">How the cleanup &amp; optimization works</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            A clear sequence from diagnostic audit to website alignment and ongoing protection against unwanted edits.
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
          <h2 className="text-3xl font-heading font-bold">Why profile hygiene pays off</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            A well-kept Google Business Profile pairs seamlessly with a fast website so searchers can verify details and contact you without hesitation.
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
            Business Profile optimization works alongside your website SEO, Google Maps signals, and customer review workflows.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/internet-marketing"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Centralized Digital Presence &amp; SEO Management
            </Link>
            <Link
              href="/services/google-maps-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Google Maps SEO
            </Link>
            <Link
              href="/services/local-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Local SEO
            </Link>
            <Link
              href="/services/reputation-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Reputation management
            </Link>
            <Link
              href="/services/website-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website SEO
            </Link>
          </div>

          <div className="mt-8 rounded-xl border border-border-color bg-secondary-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Field Guides
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Explore our step-by-step audit guides for evaluating and maintaining your listing:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/blog/fix-suspended-google-business-profile-india"
                className="rounded-full border border-bronze/50 bg-primary-bg px-5 py-2 text-xs md:text-sm font-semibold text-light-bronze hover:border-bronze"
              >
                Fix a Suspended Google Business Profile in India [2026] →
              </Link>
              <Link
                href="/blog/google-business-profile-optimization-checklist"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2 text-xs md:text-sm text-gray-text hover:text-light-bronze"
              >
                Google Business Profile Optimization Checklist (9 Steps) →
              </Link>
              <Link
                href="/blog/why-your-google-business-profile-isnt-getting-calls-in-kolkata"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2 text-xs md:text-sm text-gray-text hover:text-light-bronze"
              >
                Why Your GBP Isn&apos;t Getting Calls in Kolkata →
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Get a candid review of your Business Profile
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            Share your Google Maps link or business name and we will check for category mismatches, missing services, and website disconnects—clearly scoped with zero exaggerated promises.
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
