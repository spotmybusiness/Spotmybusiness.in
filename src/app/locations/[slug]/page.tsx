import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getProviderReference } from "@/lib/business";
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
        provider: getProviderReference(),
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
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-12 md:px-12 md:pt-32 md:pb-16">
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
            {location.heroHeading}
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

        {/* Delivery & Operating Model */}
        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              {location.collaborationSection.headline}
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            {location.collaborationSection.paragraphs.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
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

        {/* Documented Local Work (Verified Regional Markets) */}
        {location.localProofSnapshots && location.localProofSnapshots.length > 0 && (
          <section className="border-t border-border-color py-12">
            <h2 className="text-3xl font-heading font-bold">
              Documented local work in {location.name}
            </h2>
            <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
              Verified local businesses we have supported across {location.name} with custom web builds, Google Business Profile alignment, and regional SEO.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {location.localProofSnapshots.map((snapshot) => (
                <div
                  key={snapshot.clientName}
                  className="flex flex-col justify-between rounded-2xl border border-border-color bg-secondary-bg p-6"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-light-bronze">
                      {snapshot.sector} • {snapshot.locality}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-heading">
                      {snapshot.clientName}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-text">
                      {snapshot.summary}
                    </p>
                  </div>
                  <Link
                    href={snapshot.link}
                    className="mt-4 inline-block text-xs font-semibold text-light-bronze hover:text-heading"
                  >
                    View portfolio details →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Local Search Challenges */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            {location.challengesHeading}
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            {location.challengesIntro}
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
            Core website, search visibility, and profile optimization services suited to local competition in {location.name}.
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

          <div className="mt-8 rounded-2xl border border-border-color bg-secondary-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Field Guides
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Explore our step-by-step guides on building authentic local visibility without doorway spam:
            </p>
            <div className="mt-3 flex flex-wrap gap-4">
              <Link
                href="/blog/local-seo-strategy-kolkata-indian-businesses"
                className="inline-block text-sm font-semibold text-heading hover:text-light-bronze underline underline-offset-4"
              >
                Local &amp; Hyperlocal SEO Strategy for Indian Businesses →
              </Link>
              <Link
                href="/blog/google-maps-seo-service-area-businesses"
                className="inline-block text-sm font-semibold text-gray-text hover:text-light-bronze underline underline-offset-4"
              >
                Google Maps SEO: Storefront vs. Service-Area →
              </Link>
            </div>
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

