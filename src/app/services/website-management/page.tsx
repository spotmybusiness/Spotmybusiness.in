import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Management & Maintenance Services | Spot My Business",
  description:
    "Ongoing website management and maintenance. We handle content updates, business info changes, routine checks, and link fixes.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/website-management",
  },
  openGraph: {
    title: "Website Management & Maintenance Services | Spot My Business",
    description:
      "Ongoing website management and maintenance. We handle content updates, business info changes, routine checks, and link fixes.",
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
          "Ongoing website maintenance, content updates, link checks, and technical support for live websites.",
        url: "https://www.spotmybusiness.in/services/website-management",
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
      title: "Content and business information updates",
      detail:
        "Hours, services, contact details, and page copy are updated when the business changes, so the site does not describe an older version of how you work.",
    },
    {
      title: "Routine page and link checks",
      detail:
        "We look for broken links, outdated buttons, missing pages, and navigation that no longer matches the live site.",
    },
    {
      title: "Forms and enquiry paths",
      detail:
        "Contact forms and other enquiry routes are checked so customers can still reach you, and obvious failures can be fixed as part of agreed work.",
    },
    {
      title: "Issue fixes and small improvements",
      detail:
        "When something on an existing page is wrong, unclear, or awkward to use, we correct it. That is upkeep of the current site - not a redesign or a new build.",
    },
    {
      title: "General site health reviews",
      detail:
        "Periodically we review whether key pages still load, whether contact details match, and whether anything obvious has drifted since the last update.",
    },
    {
      title: "Support after launch",
      detail:
        "Once a site is live, someone still needs to change text, add a service, or retire a page. We provide that practical support if you do not want to manage it yourself.",
    },
    {
      title: "Coordinated, agreed changes",
      detail:
        "Updates are based on what you ask for and what we notice together. We do not treat management as an open-ended rebuild or an SEO campaign.",
    },
  ];

  const process = [
    {
      title: "Review the live site and priorities",
      detail:
        "We look at the current pages, contact paths, and the updates that matter most to the business right now.",
    },
    {
      title: "Agree what will be maintained",
      detail:
        "Content changes, fixes, and checks are scoped so the work stays on the existing site rather than becoming a new project by default.",
    },
    {
      title: "Make the agreed updates",
      detail:
        "Copy, details, links, and straightforward fixes are applied, then checked so the change is actually live and usable.",
    },
    {
      title: "Keep information current over time",
      detail:
        "As hours, services, or offers change, the website is updated so it stays aligned with how the business operates.",
    },
    {
      title: "Report back and adjust",
      detail:
        "You know what was changed. If a different kind of work is needed - new pages, search work, or a performance review - that is discussed as a related service.",
    },
  ];

  const outcomes = [
    {
      title: "The site stays aligned with the business",
      detail:
        "Customers are less likely to call an old number, read a retired service, or trust hours that are no longer true.",
    },
    {
      title: "Problems are easier to catch",
      detail:
        "Broken links, failed forms, and stale pages tend to linger when nobody is looking. Regular attention reduces how long those issues sit unnoticed.",
    },
    {
      title: "You do not have to be the webmaster",
      detail:
        "If running the site is not a role you want internally, management cover means updates can still happen without waiting for a full rebuild.",
    },
    {
      title: "A clearer hand-off to other website work",
      detail:
        "When a change is really a new page, a search project, or a technical performance review, it is easier to see that from a site that is already being looked after.",
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
            <li aria-current="page">Website Management</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Website Management
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Website management to keep your live site current and usable
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business helps businesses look after a website after it
            launches: updating content, keeping business information
            accurate, fixing routine issues, and checking that pages, links,
            and forms still work. This is ongoing support - not a new website,
            an SEO programme, or a performance overhaul.
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
              What looking after a website involves
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              A website starts to drift as soon as the business changes.
              Services are added or dropped, hours shift, phone numbers
              change, and pages that were accurate at launch stop matching
              reality.
            </p>
            <p>
              Management is the work of keeping that live site in usable
              shape: content updates, business information that matches how
              you operate, and attention to links, forms, and pages that
              customers actually use.
            </p>
            <p>
              It also includes fixing issues that appear in ordinary use - a
              form that stops sending, a button that points to an old URL, a
              page that still mentions a service you no longer offer. Those
              are maintenance tasks. They are not a rebuild, a ranking
              project, or a speed programme.
            </p>
            <p>
              Many businesses do not want a staff member to own the CMS or
              remember every copy change. Practical support exists so updates
              still happen. We do not promise uninterrupted uptime, a
              particular hosting arrangement, or that every possible fault
              will be found immediately.
            </p>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-heading font-bold">What we can help with</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            The list below stays on the existing website. New site builds,
            search campaigns, and in-depth performance work are separate
            services when they are needed.
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
          <h2 className="text-3xl font-heading font-bold">How ongoing work typically runs</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            There is no published response-time or monthly-hour package on
            this page. The sequence is simply: understand the live site,
            agree the updates, make them, and keep the facts current.
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
            Why ongoing management matters
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Launch is not the end of the website&apos;s job. The points below
            describe practical reasons to keep looking after it. They are not
            guaranteed traffic, conversion, or ranking outcomes.
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
            If the site needs to be created, improved for search, or reviewed
            for technical experience, those are neighbouring pieces of work
            rather than substitutes for day-to-day management.
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
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss support for your live website
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If the site is live and you need help keeping pages, details, and
            contact paths in order, tell us what currently needs updating.
            We can talk through practical management without a published
            retainer, a guaranteed uptime figure, or a promised business
            result.
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
