import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development Services for Local Businesses | Spot My Business",
  description:
    "Custom, responsive website development built for clarity, mobile usability, clear contact pathways, and sound technical foundations.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/website-development",
  },
  openGraph: {
    title: "Website Development Services for Local Businesses | Spot My Business",
    description:
      "Custom, responsive website development built for clarity, mobile usability, clear contact pathways, and sound technical foundations.",
    url: "https://www.spotmybusiness.in/services/website-development",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function WebsiteDevelopmentPage() {
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
            name: "Website Development",
            item: "https://www.spotmybusiness.in/services/website-development",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Website Development",
        description:
          "Planning, design, and development of responsive, clear, and conversion-focused business websites.",
        url: "https://www.spotmybusiness.in/services/website-development",
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
      title: "Website planning and structure",
      detail:
        "We start with the pages the business actually needs - services, about, contact, and supporting content - so the site has a clear map before it is built.",
    },
    {
      title: "Responsive website development",
      detail:
        "The site is built to be usable on phones, tablets, and desktops, with layouts that remain readable rather than merely scaled down.",
    },
    {
      title: "Service and page architecture",
      detail:
        "Each important service gets a place customers can find. Navigation and page hierarchy follow how people decide, not a generic template of leftover sections.",
    },
    {
      title: "Conversion-focused page structure",
      detail:
        "Headings, supporting copy, and contact prompts are arranged so a visitor can understand the offer and take a next step without hunting.",
    },
    {
      title: "Contact and enquiry pathways",
      detail:
        "Phone, WhatsApp, forms, and other contact options the business already uses can be placed where they are easy to act on - without inventing extra channels.",
    },
    {
      title: "Accurate business information",
      detail:
        "Name, hours, location details, and services are built into the site so the website matches the rest of the public presence.",
    },
    {
      title: "Search-friendly technical foundations",
      detail:
        "Pages use clear headings, crawlable links, and a sensible structure so search engines can understand the site. That is a foundation, not a ranking promise.",
    },
    {
      title: "Performance-conscious implementation",
      detail:
        "We aim for a site that loads and responds efficiently by keeping the build practical. We do not guarantee a particular speed score.",
    },
    {
      title: "Launch support",
      detail:
        "Before the site goes live, we review content, contact paths, and basic behaviour across devices, then hand over a site the business can continue from.",
    },
  ];

  const businessFit = [
    {
      title: "Actual services",
      detail:
        "The site should describe what you offer today, in language a customer would use, instead of filling pages with unrelated categories.",
    },
    {
      title: "The people you want to reach",
      detail:
        "Structure and copy are shaped around how those customers look for help - what they need to know first, and what would make them comfortable getting in touch.",
    },
    {
      title: "How the business wants to be seen",
      detail:
        "Tone, layout, and emphasis should match a clear, professional presence. We do not dress a local business up as something it is not.",
    },
    {
      title: "Trust and credibility",
      detail:
        "Straightforward information, consistent facts, and readable pages do more for trust than decorative claims or invented credentials.",
    },
    {
      title: "Clear calls to action",
      detail:
        "Each key page should make the next step obvious: call, message, or send an enquiry - without pressure tactics or false urgency.",
    },
  ];

  const process = [
    {
      title: "Understand the business",
      detail:
        "We learn what you offer, who you serve, and what the website needs to do - inform, support contact, and represent the business clearly.",
    },
    {
      title: "Plan structure and content",
      detail:
        "Pages, navigation, and the role of each section are agreed before development, so the build is based on a working map rather than leftover placeholders.",
    },
    {
      title: "Design and develop",
      detail:
        "The site is built around that plan: readable layouts, responsive behaviour, and the contact paths the business actually uses.",
    },
    {
      title: "Review and test",
      detail:
        "Content, links, forms, and key journeys are checked on representative devices so problems can be fixed before launch.",
    },
    {
      title: "Launch and hand over",
      detail:
        "The site goes live once the agreed work is in place. Ongoing updates and SEO programmes are separate, related services - not assumed in the build.",
    },
  ];

  const qualities = [
    {
      title: "Easy navigation",
      detail:
        "A visitor should find services, about, and contact without guessing. Menus and in-page links stay visible and crawlable.",
    },
    {
      title: "Readable content",
      detail:
        "Headings and body copy should be easy to scan. The site explains the business instead of hiding it behind slogans.",
    },
    {
      title: "Mobile usability",
      detail:
        "Many people will first see the site on a phone. Buttons, text, and contact actions need to work there as well as on a desktop.",
    },
    {
      title: "Clear contact paths",
      detail:
        "Calling, messaging, or sending an enquiry should be obvious on the pages where people decide to act.",
    },
    {
      title: "Consistent business information",
      detail:
        "Hours, services, and contact details on the website should match what appears on Maps and the Google Business Profile.",
    },
    {
      title: "Accessible structure",
      detail:
        "Semantic headings, meaningful links, and a logical page order help more people use the site, including those using assistive tools.",
    },
    {
      title: "Search-friendly foundation",
      detail:
        "A clear URL structure, one main heading per page, and useful copy give search engines something honest to work with later.",
    },
    {
      title: "Efficient implementation",
      detail:
        "The site should not carry unnecessary weight. A practical build is easier to maintain and usually more pleasant to use.",
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
            <li aria-current="page">Website Development</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Website Development
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Website development for businesses that need a clear online home
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business plans and builds professional websites around
            what you offer, who you serve, and how you want customers to get
            in touch. The aim is a site people can understand and use - not a
            promised ranking, traffic figure, or revenue result.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/website-management"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Website Management
            </Link>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              What building a business website involves
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              A well-built website is the place customers go to confirm what
              you do, whether you are a fit, and how to contact you. It
              should hold that role without depending on a sales script or a
              search ranking.
            </p>
            <p>
              Clear structure comes first: pages that match real services,
              navigation that makes sense, and a path from interest to
              enquiry. User experience is the practical side of that - can
              someone read the page, find the next step, and complete it on
              the device they already have.
            </p>
            <p>
              Responsive, mobile-friendly presentation is part of the build,
              not an add-on. Service information needs to be specific enough
              to be useful. Customer journeys should be straightforward:
              understand the offer, see how to get in touch, then do so.
            </p>
            <p>
              Search engines benefit from the same clarity people do:
              headings, links, and content that describe the business
              honestly. That technical foundation supports later SEO work. It
              does not mean every new site will rank or convert at a
              particular level.
            </p>
            <p>
              The implementation also needs to be maintainable. A site that
              cannot be updated cleanly becomes outdated. Ongoing management,
              SEO programmes, and performance reviews are related services;
              this page is about creating the site itself.
            </p>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-heading font-bold">What we can help with</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            The work covers planning, building, and launching a business
            website. We do not list platforms, plugins, or integrations that
            are not part of an agreed project.
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
          <h2 className="text-3xl font-heading font-bold">
            Built around the business, not a generic template
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Development should reflect the real company. We do not sell
            unnamed enterprise platforms or one-size visual packages that
            ignore how you actually work.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {businessFit.map((item) => (
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
            The sequence is understand, plan, build, check, then launch.
            Delivery dates depend on the agreed scope and content; we do not
            publish a standard turnaround here.
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
            What a good business website should provide
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            These are qualities we design toward. They describe a useful
            site, not a guaranteed traffic, conversion, or Core Web Vitals
            outcome.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {qualities.map((item) => (
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
            After launch, many businesses need the site kept current, the
            search foundation developed further, the technical experience
            reviewed, or the pages connected more tightly to local search.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/website-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website management
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
              href="/services/local-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Local SEO
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
            Talk through a website for your business
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If you need a site that explains what you do and makes it easier
            for customers to enquire, tell us how the business works today
            and what the website should support. We can discuss a practical
            starting point - without a published price list or a promised
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
