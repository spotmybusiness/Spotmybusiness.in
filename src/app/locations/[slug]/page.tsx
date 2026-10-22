import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { businessInfo } from "@/lib/business";
import {
  getLocationBySlug,
  getAllLocationSlugs,
} from "@/lib/locations";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found | Spot My Business",
    };
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `https://www.spotmybusiness.in/locations/${location.slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://www.spotmybusiness.in/locations/${location.slug}`,
      siteName: "Spot My Business",
      type: "website",
    },
  };
}

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  const relatedLocationsList = location.relatedLocations
    .map((relSlug) => getLocationBySlug(relSlug))
    .filter((loc): loc is NonNullable<typeof loc> => loc !== undefined);

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
            name: "Locations",
            item: "https://www.spotmybusiness.in/locations",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: location.name,
            item: `https://www.spotmybusiness.in/locations/${location.slug}`,
          },
        ],
      },
      {
        "@type": "Service",
        name: `Local Digital Presence & SEO for ${location.name}`,
        description: location.metaDescription,
        url: `https://www.spotmybusiness.in/locations/${location.slug}`,
        areaServed: {
          "@type": location.locationType === "state" ? "State" : "City",
          name: location.name,
        },
        provider: {
          "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
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
          sameAs: businessInfo.sameAs,
        },
      },
    ],
  };

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
            <li>
              <Link href="/locations" className="hover:text-light-bronze">
                Locations
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">{location.name}</li>
          </ol>
        </nav>

        {/* Location Hero */}
        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            {location.heroSubtitle}
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Digital presence and local search strategy for businesses in {location.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            {location.heroDescription}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/locations"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              View All Locations
            </Link>
          </div>
        </section>

        {/* Remote Delivery & Operating Model */}
        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Remote collaboration with a verified base
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              Spot My Business operates from a single registered headquarters in
              Santoshpur, Kolkata ({businessInfo.address.streetAddress}, {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}).
              We work remotely with business owners and enterprises in {location.name} to develop custom websites, optimize Google Business Profiles, and strengthen local search visibility.
            </p>
            <p>
              We do not maintain branch offices, field networks, or physical walk-in studios in {location.name}.
              Instead, we coordinate directly through direct phone calls ({businessInfo.telephones.join(" / ")}), WhatsApp messaging, email, and digital staging reviews—giving you focused attention from our core specialists without branch overhead.
            </p>
          </div>
        </section>

        {/* Market Overview & Dynamics */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            {location.marketOverview.headline}
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-gray-text leading-relaxed">
            {location.marketOverview.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {location.marketDynamics.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border-color bg-secondary-bg p-6"
              >
                <h3 className="text-lg font-bold text-heading">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Local Search Challenges */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Local search challenges in {location.name}
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Understanding the real-world visibility and competition obstacles businesses face when reaching local searchers in {location.name}.
          </p>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {location.localSearchChallenges.map((challenge) => (
              <li
                key={challenge.title}
                className="rounded-2xl border border-border-color bg-secondary-bg p-6"
              >
                <h3 className="text-lg font-bold text-heading">{challenge.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {challenge.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Relevant Services */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Services for businesses in {location.name}
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Recommended digital presence, SEO, and website engineering services contextually relevant for businesses operating in {location.name}.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {location.recommendedServices.map((service) => (
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
                  href={service.href}
                  className="mt-4 inline-block text-xs font-semibold text-light-bronze hover:text-heading"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Related Locations / Markets */}
        {relatedLocationsList.length > 0 && (
          <section className="border-t border-border-color py-12">
            <h2 className="text-3xl font-heading font-bold">
              Related markets and locations
            </h2>
            <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
              Explore our location-aware approach across nearby regional markets and commercial hubs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {relatedLocationsList.map((relLoc) => (
                <Link
                  key={relLoc.slug}
                  href={`/locations/${relLoc.slug}`}
                  className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
                >
                  {relLoc.name}
                </Link>
              ))}
              <Link
                href="/locations"
                className="rounded-full border border-border-color px-5 py-2 text-sm text-light-bronze hover:text-heading"
              >
                All Locations →
              </Link>
            </div>
          </section>
        )}

        {/* Final CTA Block */}
        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss your presence in {location.name}
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If you want to strengthen how your business is discovered by customers in {location.name}, contact Spot My Business to review your current presence across Google Search, Maps, and your website.
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

