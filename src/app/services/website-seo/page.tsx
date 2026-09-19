import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website SEO Services for Local Businesses | Spot My Business",
  description:
    "On-page SEO, search-intent alignment, site structure, and technical fundamentals to help search engines understand your website.",
  alternates: {
    canonical: "https://spotmybusiness.in/services/website-seo/",
  },
  openGraph: {
    title: "Website SEO Services for Local Businesses | Spot My Business",
    description:
      "On-page SEO, search-intent alignment, site structure, and technical fundamentals to help search engines understand your website.",
    url: "https://spotmybusiness.in/services/website-seo/",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function WebsiteSeoPage() {
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
            item: "https://spotmybusiness.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://spotmybusiness.in/services/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Website SEO",
            item: "https://spotmybusiness.in/services/website-seo/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Website SEO",
        description:
          "On-page SEO, search intent optimization, internal linking, and technical crawlability improvements for websites.",
        url: "https://spotmybusiness.in/services/website-seo/",
        provider: {
          "@type": "LocalBusiness",
          name: "Spot My Business",
          url: "https://spotmybusiness.in",
        },
      },
    ],
  };

  const capabilities = [
    {
      title: "Search intent and page relevance",
      detail:
        "We look at what people are actually trying to find and whether each important page answers that need, instead of repeating the same generic copy across the site.",
    },
    {
      title: "On-page SEO",
      detail:
        "Headings, body copy, and the main topic of each page are refined so both visitors and search engines can tell what the page is for.",
    },
    {
      title: "Titles and meta descriptions",
      detail:
        "Page titles and descriptions are written to describe the page honestly in search results. They are not treated as a ranking switch.",
    },
    {
      title: "Site structure and internal linking",
      detail:
        "Important pages are given a clear place in the site, and related pages are linked so people and crawlers can move between them without dead ends.",
    },
    {
      title: "Content that is useful to read",
      detail:
        "SEO work includes making the page worth visiting: specific service information, plain language, and a next step - not keyword-stuffed paragraphs.",
    },
    {
      title: "Technical SEO fundamentals",
      detail:
        "Where it helps understanding and crawlability - indexable HTML, sensible URLs, one main heading per page, and pages that are not blocked from being found - we address those basics.",
    },
    {
      title: "Priority pages, not every URL at once",
      detail:
        "Work is aimed at the pages that should represent the business in search. Thin extra URLs created only to chase phrases are not the method.",
    },
  ];

  const process = [
    {
      title: "Understand the site and the business",
      detail:
        "We start with what you offer, which pages already exist, and how customers currently use the website.",
    },
    {
      title: "Map search intent to pages",
      detail:
        "We identify which searches the site should reasonably support and which page should own each topic.",
    },
    {
      title: "Find structure and content gaps",
      detail:
        "Missing headings, weak internal links, unclear titles, and pages that do not match their purpose are listed before changes are made.",
    },
    {
      title: "Improve on-page and supporting technical details",
      detail:
        "Copy, titles, links, and crawlability issues that sit in scope are updated so the site is easier to interpret.",
    },
    {
      title: "Review and refine",
      detail:
        "The site is checked after changes. Further SEO, local search, or performance work is discussed only if it is genuinely a different need.",
    },
  ];

  const outcomes = [
    {
      title: "Pages that match how people search",
      detail:
        "When a page is clearly about a real service or question, it is easier for the right visitor to recognize it. That is not a promised position in results.",
    },
    {
      title: "A site search engines can crawl and understand",
      detail:
        "Logical structure, crawlable links, and readable HTML give search engines a fairer picture of the business than a tangle of duplicate or empty pages.",
    },
    {
      title: "Content that still works for humans",
      detail:
        "Titles, headings, and copy should help a person decide whether to enquire. Search-friendly writing that nobody can use is not the goal.",
    },
    {
      title: "A clearer base for other search work",
      detail:
        "Local SEO, Maps, and Business Profile work are easier to support when the website itself describes the same services and contact paths clearly.",
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
              <a href="/" className="hover:text-light-bronze">
                Home
              </a>
            </li>
            <li aria-hidden="true">→</li>
            <li>
              <a href="/services/" className="hover:text-light-bronze">
                Services
              </a>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">Website SEO</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Website SEO
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Website SEO that makes your pages easier to understand and discover
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business improves how a website is structured, written,
            and technically presented so search engines and people can see
            what each page is for. The work is on the site itself - search
            intent, on-page relevance, internal links, and crawlable
            foundations - not a promise of rankings, traffic, or leads.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact/"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </a>
            <a
              href="/services/local-seo/"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Local SEO
            </a>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              What this work involves
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              Search engines need to find your pages, understand their
              topics, and decide whether they match a query. Website SEO is
              the craft of making that easier: relevant content, a coherent
              site structure, and technical details that do not get in the
              way.
            </p>
            <p>
              Search intent sits at the centre. A service page should answer
              the person looking for that service. A contact page should make
              contact possible. When every URL tries to rank for everything,
              none of them is easy to interpret.
            </p>
            <p>
              On-page work covers titles, headings, body copy, and how
              related pages point to each other. Technical fundamentals
              matter where they affect crawlability and clarity - indexable
              content, working internal links, and pages that are not hidden
              behind unnecessary barriers.
            </p>
            <p>
              The same changes should help a human reader. A page that is
              stuffed with phrases but hard to use is not a useful SEO
              outcome. Spot My Business does not control Google&apos;s
              ranking systems and does not claim special access to them.
            </p>
            <p>
              Local SEO, Google Maps SEO, and Google Business Profile
              optimization are related when customers search nearby. They are
              not substitutes for a website that search engines can crawl and
              understand. This page is about that website layer.
            </p>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-heading font-bold">What we can help with</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Capabilities stay on pages, structure, and technical basics you
            control. We do not sell unpublished ranking tools or guaranteed
            placements.
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
          <h2 className="text-3xl font-heading font-bold">How the work typically proceeds</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            There is no published campaign length or ranking timeline here.
            The sequence is diagnose, match intent to pages, then improve
            what is unclear.
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
            Why website search foundations matter
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            If the site cannot be understood, other marketing has less to
            land on. The points below describe that practical value. They
            are not traffic, lead, or revenue forecasts.
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
            SEO on an existing site sits beside development, ongoing
            management, technical performance, and local search when those
            are the actual next need.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/services/website-development/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website development
            </a>
            <a
              href="/services/website-management/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website management
            </a>
            <a
              href="/services/website-performance/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website performance
            </a>
            <a
              href="/services/local-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Local SEO
            </a>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss your website&apos;s search foundation
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If pages are hard for search engines or customers to interpret,
            we can review structure, intent, and on-page clarity and agree a
            practical starting point. There is no promised ranking and no
            unpublished algorithm access in that conversation.
          </p>
          <a
            href="/contact/"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
          >
            Contact Spot My Business
          </a>
        </section>
      </div>
    </main>
  );
}
