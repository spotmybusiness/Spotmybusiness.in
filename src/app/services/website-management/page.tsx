import type { Metadata } from "next";
import Link from "next/link";
import { getProviderReference } from "@/lib/business";

export const metadata: Metadata = {
  title: "Website Management & Maintenance Services | Spot My Business",
  description:
    "Keep your live business website current, accurate, and dependable with routine content updates, link and form checks, and business-info synchronization.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/website-management",
  },
  openGraph: {
    title: "Website Management & Maintenance Services | Spot My Business",
    description:
      "Keep your live business website current, accurate, and dependable with routine content updates, link and form checks, and business-info synchronization.",
    url: "https://www.spotmybusiness.in/services/website-management",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function WebsiteManagementPage() {
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
            name: "Website Management",
            item: "https://www.spotmybusiness.in/services/website-management",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Website Management",
        description:
          "Ongoing website maintenance covering copy updates, business information accuracy, broken link fixes, enquiry form verification, and technical health checks.",
        url: "https://www.spotmybusiness.in/services/website-management",
        provider: getProviderReference(),
      },
    ],
  };

  const capabilities = [
    {
      title: "Business hours, contact & service updates",
      detail:
        "Whenever you add a course, shift operating hours, update phone lines, or adjust service territories, we update the live website promptly so facts stay current.",
    },
    {
      title: "Routine broken link & navigation checks",
      detail:
        "We catch dead internal URLs, broken external citations, and outdated buttons before customers or search crawlers run into 404 pages.",
    },
    {
      title: "Enquiry form, tel & WhatsApp testing",
      detail:
        "We periodically test contact forms, click-to-call triggers, and WhatsApp links across mobile and desktop so leads never silently fail.",
    },
    {
      title: "Clean text, media & layout fixes",
      detail:
        "Small layout bugs, outdated festival banners, or unoptimized photos get corrected cleanly without waiting on a costly redesign.",
    },
    {
      title: "Sync with Google Business Profile changes",
      detail:
        "Whenever your website copy or URLs change, we keep your Google Business Profile and Schema.org metadata aligned to prevent mixed signals.",
    },
    {
      title: "Dependency, build & uptime verification",
      detail:
        "We monitor production build stability, SSL validity, and deployment health so your site stays dependable for everyday visitors.",
    },
  ];

  const process = [
    {
      title: "Audit the live site",
      detail:
        "We inspect existing pages, enquiry forms, broken links, and outdated business details.",
    },
    {
      title: "Agree maintenance priorities",
      detail:
        "We align on regular update workflows and technical checks tailored to how often your business changes.",
    },
    {
      title: "Apply & verify updates",
      detail:
        "Requested copy edits, service additions, and fixes go live cleanly and get tested on mobile right away.",
    },
    {
      title: "Keep facts synced with Search",
      detail:
        "New pages or updated service info stay consistent across sitemaps, schema, and your Google listing.",
    },
    {
      title: "Clear update reporting",
      detail:
        "You receive straightforward summaries of what changed and when a separate SEO or performance pass makes sense.",
    },
  ];

  const outcomes = [
    {
      title: "Customers see accurate facts every visit",
      detail:
        "No more callers dialing disconnected numbers or reading about services your team retired months ago.",
    },
    {
      title: "Enquiry paths stay reliable",
      detail:
        "Routine form and WhatsApp checks catch broken email notifications or script glitches before you lose leads.",
    },
    {
      title: "Zero internal webmaster headache",
      detail:
        "Business owners and staff do not have to wrestle with code deployments or CMS updates between customer calls.",
    },
    {
      title: "Cleaner handoff to SEO & growth updates",
      detail:
        "A well-maintained site gives Local SEO, Search Console checks, and new blog content a solid base to build on.",
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
            <li aria-current="page">Website Management</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Website Management
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Ongoing website management so your live site never goes stale
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            A website starts drifting the week after launch—hours shift, new services get added, phone numbers change, and forms quietly break. Spot My Business handles ongoing content updates, link and form testing, and routine technical care so your online home always matches reality.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/website-development"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Website Development
            </Link>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Practical upkeep after launch day
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              Most local businesses do not want a developer on payroll just to update batch schedules, swap seasonal photos, or fix a broken form notification. Yet leaving a site untouched for a year erodes trust with both customers and Google.
            </p>
            <p>
              Website management keeps your existing pages accurate and dependable—fixing broken links, keeping NAP details synced with your Google Business Profile, and checking that contact pathways work cleanly across phones and desktops.
            </p>
            <p>
              When your site needs a ground-up rebuild, deep speed work, or a full Local SEO rollout, we scope those separately as dedicated services rather than blurring them into routine upkeep.
            </p>
          </div>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">What ongoing management covers</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Steady care focused on keeping your live pages accurate, navigable, and aligned with daily operations.
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
          <h2 className="text-3xl font-heading font-bold">How our upkeep workflow runs</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Simple WhatsApp or email change requests, verified updates, and clear summaries—scoped to what your site actually needs.
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
            Why steady website upkeep matters
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Accurate pages and working forms protect every rupee and hour you put into attracting visitors.
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
            Website management pairs directly with Search Console monitoring, technical SEO improvements, and Core Web Vitals optimization.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/website-development"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website development
            </Link>
            <Link
              href="/services/website-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website SEO
            </Link>
            <Link
              href="/services/website-performance"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website performance
            </Link>
            <Link
              href="/services/google-search-console-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Search Console Management
            </Link>
          </div>
          <div className="mt-8 rounded-xl border border-border-color bg-secondary-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Field Guides
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Understand recurring Indian AMC and Year-1 TCO benchmarks—and see why stale website hours quietly hurt Google Maps calls:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/blog/website-development-price-comparison-india"
                className="rounded-full border border-bronze/50 bg-primary-bg px-5 py-2 text-xs md:text-sm font-semibold text-light-bronze hover:border-bronze"
              >
                Website Development &amp; AMC Cost Guide in India [2026] →
              </Link>
              <Link
                href="/blog/why-your-google-business-profile-isnt-getting-calls-in-kolkata"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2 text-xs md:text-sm text-gray-text hover:text-light-bronze"
              >
                Fixing Website &amp; GBP Contradictions →
              </Link>
              <Link
                href="/blog/google-business-profile-optimization-checklist"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2 text-xs md:text-sm text-gray-text hover:text-light-bronze"
              >
                9-Step Business Profile Hygiene Checklist →
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Keep your live website in dependable shape
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            Tell us what currently needs updating or fixing on your site. We quote cleanly around actual update needs—without rigid lock-in contracts or exaggerated uptime promises.
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
