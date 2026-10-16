import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Performance Optimization Services | Spot My Business",
  description:
    "Practical website performance improvements: reducing page weight, optimizing media, trimming client JS, and improving mobile responsiveness.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/website-performance",
  },
  openGraph: {
    title: "Website Performance Optimization Services | Spot My Business",
    description:
      "Practical website performance improvements: reducing page weight, optimizing media, trimming client JS, and improving mobile responsiveness.",
    url: "https://www.spotmybusiness.in/services/website-performance",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function WebsitePerformancePage() {
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
            name: "Website Performance",
            item: "https://www.spotmybusiness.in/services/website-performance",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Website Performance",
        description:
          "Technical optimization of page weight, asset loading, images, scripts, and mobile responsiveness for live websites.",
        url: "https://www.spotmybusiness.in/services/website-performance",
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
      title: "Performance review of the live site",
      detail:
        "We look at how pages load and respond on representative devices, including where weight, blocking work, or awkward layout makes the experience feel slow.",
    },
    {
      title: "Page weight and implementation issues",
      detail:
        "Oversized files, duplicated assets, and heavy page construction are identified so the site is not carrying more than it needs to do its job.",
    },
    {
      title: "Image and media optimization",
      detail:
        "Photographs and other media are reviewed for size, format, and how they are requested, so they support the page instead of delaying it.",
    },
    {
      title: "Reducing unnecessary client-side JavaScript",
      detail:
        "Scripts that run in the browser are checked. Interaction that HTML and CSS can handle does not need a large client bundle sitting in the way of the first view.",
    },
    {
      title: "Efficient structure and asset loading",
      detail:
        "We look at what the browser has to download first, what can wait, and whether the page structure forces extra work before someone can read or tap.",
    },
    {
      title: "Mobile performance",
      detail:
        "Many visits happen on a phone and a slower connection. Layout, tap targets, and load behaviour are reviewed with that in mind - not only a fast desktop.",
    },
    {
      title: "Core Web Vitals as a practical lens",
      detail:
        "Loading, interactivity, and visual stability are useful ways to talk about experience. They are not a score we guarantee, and they are not a ranking promise.",
    },
    {
      title: "Ongoing monitoring and improvement",
      detail:
        "Sites pick up weight as content and features are added. When it is useful, we keep reviewing the experience and making agreed technical improvements.",
    },
  ];

  const process = [
    {
      title: "Review the current experience",
      detail:
        "We use the live site as it is: key pages, mobile and desktop, and the journeys customers actually take.",
    },
    {
      title: "Identify meaningful technical priorities",
      detail:
        "Issues are ranked by how much they affect real use - heavy media, excess JavaScript, blocking assets - not by chasing a vanity metric.",
    },
    {
      title: "Agree the scope of changes",
      detail:
        "Performance work stays on the existing implementation. A redesign or a new site, if needed, is a separate development conversation.",
    },
    {
      title: "Apply the agreed improvements",
      detail:
        "Images, scripts, structure, and loading behaviour in scope are adjusted, then checked so the change is actually present for visitors.",
    },
    {
      title: "Revisit as the site evolves",
      detail:
        "After content or features change, the experience can be reviewed again. There is no published score target or turnaround on this page.",
    },
  ];

  const outcomes = [
    {
      title: "A more usable visit",
      detail:
        "Pages that appear and respond with less friction are easier to read, tap, and complete. That is a better experience, not a guaranteed conversion rate.",
    },
    {
      title: "More accessible, less wasteful delivery",
      detail:
        "Lighter pages and clearer structure help more people, including those on modest devices or slower networks. Accessibility and performance often overlap here.",
    },
    {
      title: "A site that stays maintainable",
      detail:
        "Unnecessary JavaScript and oversized media make every future change harder. Trimming what is not needed keeps the live site easier to look after.",
    },
    {
      title: "A clearer split from SEO and rebuilds",
      detail:
        "Search-friendly content and a new website architecture are related needs. Performance work is about how the current pages are delivered, not about rewriting the offer.",
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
            <li aria-current="page">Website Performance</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Website Performance
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Website performance that makes pages load and respond more efficiently
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business reviews how a website is built and delivered so
            it can load with less waste, feel more responsive, and stay
            usable on mobile. The work is technical and practical - not a
            promised PageSpeed score, ranking, or conversion increase.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/website-seo"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Website SEO
            </Link>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              What this technical work involves
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              Performance is how quickly a page becomes usable and how
              smoothly it responds after that. Visitors feel it as waiting,
              stuttering, or layout that jumps. It is a user-experience and
              accessibility concern as much as a technical one.
            </p>
            <p>
              Typical causes are unnecessary page weight, images that are
              larger than the screen needs, scripts that run in the browser
              before anything useful appears, and a page structure that
              forces extra downloads before the main content is ready.
            </p>
            <p>
              Mobile matters because phones often have less power and a
              weaker connection than the computer the site was designed on.
              A page that feels acceptable on a fast desktop can still be
              awkward in the hand.
            </p>
            <p>
              Core Web Vitals - loading, interactivity, and visual
              stability - are a widely used way to describe those qualities.
              They are a useful checklist, not a score Spot My Business can
              guarantee, and not a lever that controls Google&apos;s ranking
              systems.
            </p>
            <p>
              This is not website development (creating the site) and not
              website SEO (making pages understandable for search). Those
              services may sit alongside performance work when the need is
              genuinely different.
            </p>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-heading font-bold">What we can help with</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            The capabilities below stay on how the current site is delivered.
            We do not invent proprietary speed tools, unpublished benchmarks,
            or a guaranteed lab or field score.
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
            There is no published before-and-after timing on this page. The
            sequence is observe the live experience, choose the work that
            will actually help, then apply it with care.
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
            Why efficient delivery matters
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            People leave pages that are hard to use. Lighter, more responsive
            delivery supports that visit. It does not guarantee traffic,
            rankings, or revenue.
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
            If the site needs to be built, kept current, or made clearer for
            search engines, those are neighbouring pieces of work rather than
            substitutes for performance improvements.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/website-development"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website development
            </Link>
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
              href="/services/google-search-console-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Search Console (Core Web Vitals)
            </Link>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss how your website currently loads and responds
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If pages feel heavy, slow on mobile, or awkward to use, we can
            review the live experience and agree practical technical
            improvements. There is no promised score, ranking, or business
            result attached to that conversation.
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
