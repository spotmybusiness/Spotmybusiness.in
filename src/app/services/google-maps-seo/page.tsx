import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Google Maps SEO Services for Local Businesses | Spot My Business",
  description:
    "Improve Google Maps visibility with aligned business profile signals, accurate category relevance, and supporting website structure.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/google-maps-seo",
  },
  openGraph: {
    title: "Google Maps SEO Services for Local Businesses | Spot My Business",
    description:
      "Improve Google Maps visibility with aligned business profile signals, accurate category relevance, and supporting website structure.",
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
          "Local discovery optimization and alignment between Google Maps presence, Google Business Profile, and website signals.",
        url: "https://www.spotmybusiness.in/services/google-maps-seo",
        provider: {
          "@type": "LocalBusiness",
          name: "Spot My Business",
          url: "https://www.spotmybusiness.in",
        },
      },
    ],
  };

  const capabilities = [
    {
      title: "Business Profile and Maps information alignment",
      detail:
        "The details that appear in Google Maps come from the same Google Business Profile. We check that name, location, hours, and contact information match how the business should appear on the map.",
    },
    {
      title: "Category and service relevance",
      detail:
        "Categories and services are reviewed so Maps and local search can associate the listing with what the business actually offers, rather than a vague or mismatched description.",
    },
    {
      title: "Business information consistency",
      detail:
        "We look for mismatches between Maps, the Business Profile, and other online mentions of the business so customers are not sent conflicting hours, names, or contact details.",
    },
    {
      title: "Local search presence",
      detail:
        "We review how the business currently appears when people search locally, including what information is visible on Maps, without treating any one snapshot as a guaranteed position.",
    },
    {
      title: "Website-to-profile alignment",
      detail:
        "The website and the Maps listing should describe the same business. We check that services, location information, and contact paths support each other instead of telling two different stories.",
    },
    {
      title: "Locally relevant on-site signals",
      detail:
        "Where the website can reasonably support Maps and local search - clear service pages, accurate location details, and usable contact information - we identify those supporting pieces.",
    },
    {
      title: "Reviews and reputation considerations",
      detail:
        "Reviews that appear on Maps are part of how people judge a listing. We consider how that feedback is presented and how it fits a practical reputation approach, without creating reviews or ratings.",
    },
    {
      title: "Ongoing monitoring and refinement",
      detail:
        "Maps listings change as information is edited, hours shift, or Google updates how results are shown. When it is useful, we keep reviewing the listing and adjusting the supporting details.",
    },
  ];

  const process = [
    {
      title: "Assess current Maps and local presence",
      detail:
        "We look at how the business appears on Google Maps today, what information customers can see, and how that listing sits alongside Search and the website.",
    },
    {
      title: "Identify information and relevance gaps",
      detail:
        "Missing, outdated, or mismatched details are listed, along with places where categories or services do not match what the business actually does.",
    },
    {
      title: "Align Business Profile and website signals",
      detail:
        "Profile information, Maps presentation, and relevant website content are brought into the same picture so customers and local search are not working from conflicting facts.",
    },
    {
      title: "Improve and maintain supporting presence",
      detail:
        "We work through the agreed information updates and the on-site details that reasonably support local discovery - without inventing extra locations or coverage claims.",
    },
    {
      title: "Monitor and refine",
      detail:
        "The listing is reviewed again as the business changes. Refinement stays tied to accurate information, not to chasing a particular map position.",
    },
  ];

  const outcomes = [
    {
      title: "Essential details in one place",
      detail:
        "People using Maps can see hours, contact information, and a clearer sense of what the business does before they decide to get in touch.",
    },
    {
      title: "Easier local discovery",
      detail:
        "When the listing is complete and relevant, it is easier for people who are already searching nearby to recognize the business. That is not the same as a promised ranking.",
    },
    {
      title: "Clearer directions and location context",
      detail:
        "Accurate location information helps customers understand where the business is and how to get there, instead of relying on incomplete or conflicting addresses.",
    },
    {
      title: "Simpler customer actions",
      detail:
        "Calls, website visits, messages, and other actions available on the listing work better when the underlying details are present and correct.",
    },
    {
      title: "Consistency with the website",
      detail:
        "Maps and the website should describe the same business. Alignment reduces confusion when someone checks both before contacting you.",
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
            Google Maps SEO for a clearer local search presence
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business helps local businesses present accurate, relevant
            information on Google Maps and strengthen the local search signals
            around that listing - so customers can find the business, understand
            it, and decide how to get in touch. Profile field-by-field
            management is a related service, not the whole of this work.
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
              How Maps fits into local search
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              Google Maps is one of the places local customers compare
              businesses, check opening hours, look at photos, and get
              directions. For many searches, the map listing is the first
              detailed look someone gets at a business.
            </p>
            <p>
              Accurate, relevant information is the foundation. If the pin,
              hours, services, or contact details are wrong, people may
              dismiss the listing or arrive with the wrong expectation - even
              if they found you in the first place.
            </p>
            <p>
              Local search is often discussed in broad terms of relevance
              (does this business match the query), proximity (how it relates
              to where the searcher is), and prominence (how established and
              understandable the business appears online). Those are useful
              ways to think about the work. They are not a formula Spot My
              Business can operate on Google&apos;s behalf.
            </p>
            <p>
              Maps visibility is stronger when it sits inside a wider local
              search approach: a Google Business Profile that is in good
              order, a website that describes the same services and location
              clearly, and consistent business information elsewhere online.
              This page is about that Maps and local-discovery layer - not
              about managing every profile field in isolation.
            </p>
            <p>
              Nobody outside Google controls how Maps ranks listings. This
              work improves the information and supporting presence customers
              and local search can use. It does not guarantee a pin position,
              a Map Pack placement, or a particular volume of enquiries.
            </p>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-heading font-bold">What we can help with</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            The work combines Maps presentation, Business Profile alignment,
            and the website signals that reasonably support local discovery.
            We do not use unpublished ranking tools or privileged access to
            Google&apos;s systems.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color bg-secondary-bg p-5"
              >
                <p className="font-semibold text-heading">{item.title}</p>
                <p className="mt-2 text-gray-text">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Our approach</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            The process stays tied to what can actually be reviewed and
            improved: the listing, the information behind it, and the
            website details that should match.
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
                <p className="mt-2 text-gray-text">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Why Maps visibility matters
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            People already use Maps to decide where to go and whom to
            contact. A clearer listing helps that decision. It does not
            replace a useful website, and the benefits below are not
            guaranteed results.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color bg-secondary-bg p-5"
              >
                <p className="font-semibold text-heading">{item.title}</p>
                <p className="mt-2 text-gray-text">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Related services</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Maps work is easier to sustain when the Business Profile, local
            search foundations, website SEO, and reputation approach are
            treated as connected parts of the same presence.
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
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss how your business appears on Maps
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If customers already look for you on Google Maps - or you want that
            listing to be easier to understand - we can review the current
            presence and the supporting local search details. The
            conversation is about useful information, not a promised pin
            position.
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
