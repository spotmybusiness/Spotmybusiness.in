import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProviderReference } from "@/lib/business";

export const metadata: Metadata = {
  title: "Website Development Services for Local Businesses | Spot My Business",
  description:
    "Custom, fast Next.js and React website development built for mobile usability, clear WhatsApp and phone enquiry paths, and clean technical SEO foundations.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/website-development",
  },
  openGraph: {
    title: "Website Development Services for Local Businesses | Spot My Business",
    description:
      "Custom, fast Next.js and React website development built for mobile usability, clear WhatsApp and phone enquiry paths, and clean technical SEO foundations.",
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
          "Custom responsive web engineering with semantic HTML, fast static rendering, structured schema markup, and direct phone and WhatsApp enquiry pathways.",
        url: "https://www.spotmybusiness.in/services/website-development",
        provider: getProviderReference(),
      },
    ],
  };

  const capabilities = [
    {
      title: "Information architecture & page planning",
      detail:
        "Before writing code, we map out the exact pages your business needs—core services, real proof, local coverage, and contact—so visitors never get lost in clutter.",
    },
    {
      title: "Custom Next.js & responsive engineering",
      detail:
        "We build fast, mobile-first interfaces using clean semantic HTML and modern static pre-rendering rather than bloated drag-and-drop page builders.",
    },
    {
      title: "Dedicated service & capability pages",
      detail:
        "Each core service receives a focused, readable page tailored to how buyers evaluate providers—giving search crawlers and customers clear context.",
    },
    {
      title: "Direct phone, WhatsApp & quote funnels",
      detail:
        "One-tap calling, WhatsApp chat buttons, and clean quote forms sit naturally where buyers make decisions rather than hidden behind pop-ups.",
    },
    {
      title: "NAP & Business Profile synchronization",
      detail:
        "Your business name, Santoshpur/local street address, hours, and phone details are engineered consistently across footers and JSON-LD schema.",
    },
    {
      title: "Technical SEO & Schema.org built in",
      detail:
        "Clean heading hierarchy, canonical tags, XML sitemaps, and Organization/Service JSON-LD ship with launch—never bolted on as an afterthought.",
    },
    {
      title: "Lightweight media & asset optimization",
      detail:
        "Images convert to crisp WebP/AVIF formats with explicit width/height dimensions to minimize layout shift (CLS) and keep mobile loading snappy.",
    },
    {
      title: "Staging review & clean handover",
      detail:
        "We test links, forms, and mobile viewports on staging links with your team before launch, handing over clean, maintainable code.",
    },
  ];

  const businessFit = [
    {
      title: "Grounded in what you actually sell",
      detail:
        "Copy reflects your real services, pricing structure, and customer workflow in plain language instead of generic template filler.",
    },
    {
      title: "Built around buyer questions",
      detail:
        "Pages surface timings, service boundaries, credentials, and enquiry options early so busy visitors do not have to hunt.",
    },
    {
      title: "Accessible on everyday Indian smartphones",
      detail:
        "Tested for readable contrast, responsive touch targets, and reliable speed on mobile 4G connections—not just large office monitors.",
    },
    {
      title: "Consistent with Google Maps",
      detail:
        "Every site we build reinforces your Google Business Profile categories and verified physical location.",
    },
  ];

  const process = [
    {
      title: "Discover & scope",
      detail:
        "We learn your core services, customer questions, and existing digital footprint to define the exact page map.",
    },
    {
      title: "Structure content & wireframes",
      detail:
        "We organize headings, service sections, real client proof, and direct enquiry triggers before styling.",
    },
    {
      title: "Engineer & integrate SEO",
      detail:
        "We code responsive pages with semantic HTML, optimized images, canonical metadata, and structured JSON-LD.",
    },
    {
      title: "Device & crawl testing",
      detail:
        "We verify form submissions, WhatsApp/tel links, mobile breakpoints, and clean production builds.",
    },
    {
      title: "Launch & Search Console check",
      detail:
        "We deploy your site, submit XML sitemaps, and verify crawl coverage in Google Search Console.",
    },
  ];

  const qualities = [
    {
      title: "Intuitive navigation",
      detail:
        "Visitors reach services, portfolio proof, and contact options in one or two taps with crawlable server-rendered links.",
    },
    {
      title: "Scannable copy & clear hierarchy",
      detail:
        "Short sections, direct subheadings, and plain language let people grasp your offer within ten seconds.",
    },
    {
      title: "Mobile-first ergonomics",
      detail:
        "Comfortable tap targets, responsive typography, and thumb-friendly contact buttons across phone viewports.",
    },
    {
      title: "Zero template bloat",
      detail:
        "Without unused plugin scripts weighing down rendering, pages stay fast and straightforward to update over time.",
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
            <li aria-current="page">Website Development</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Website Development
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Custom websites engineered for clarity, speed, and local enquiries
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            A slow, generic site wastes hard-earned clicks from Google Search and Google Maps. Spot My Business designs and engineers custom, mobile-first business websites structured around how your customers check credentials, compare services, and reach you by phone or WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/case-studies"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              View Website Portfolio
            </Link>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Why custom web engineering beats generic templates
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              When someone taps the website button on your Google Business Profile, they expect clear answers within seconds: what services you handle, which areas you cover, proof of past work, and how to book or call right away.
            </p>
            <p>
              Off-the-shelf templates and heavy site builders frequently bundle bloated scripts, placeholder sections, and messy HTML headings that stall on mobile connections and confuse search crawlers.
            </p>
            <p>
              We engineer sites cleanly from the ground up with Next.js static rendering, semantic headings, Schema.org entities, and compressed WebP media—giving you an asset you actually own and can expand smoothly as your business grows.
            </p>
          </div>
        </section>

        {/* Visual Portfolio Deliverable Showcase */}
        <section className="border-t border-border-color py-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
                Delivered Web Builds
              </p>
              <h2 className="mt-2 text-2xl font-heading font-bold">
                Recent production websites built by Spot My Business
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="text-xs font-semibold text-light-bronze hover:text-heading underline underline-offset-4"
            >
              Explore full web portfolio →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <figure className="rounded-2xl border border-border-color bg-secondary-bg p-4">
              <div className="overflow-hidden rounded-xl border border-border-color bg-primary-bg">
                <Image
                  src="/images/portfolio/bharat-relocators-preview.webp"
                  alt="Bharat Relocators moving and shipment-tracking website front page designed by Spot My Business"
                  width={640}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-gray-text">
                <strong className="text-heading">Bharat Relocators</strong> — Moving &amp; logistics website featuring dedicated shipment tracking and direct quote routes.
              </figcaption>
            </figure>

            <figure className="rounded-2xl border border-border-color bg-secondary-bg p-4">
              <div className="overflow-hidden rounded-xl border border-border-color bg-primary-bg">
                <Image
                  src="/images/portfolio/science-squad-preview.webp"
                  alt="Science Squad academic coaching website front page designed by Spot My Business"
                  width={640}
                  height={400}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
              </div>
              <figcaption className="mt-3 text-xs text-gray-text">
                <strong className="text-heading">Science Squad</strong> — Student-focused coaching interface built for fast course exploration and admissions contact.
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">What goes into every build</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Custom planning, responsive frontend engineering, and technical SEO foundations tailored to agreed project scope.
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
          <h2 className="text-3xl font-heading font-bold">
            Built around your business, not a generic theme
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Every layout decision starts from how your real buyers check trust and make contact.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {businessFit.map((item) => (
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
          <h2 className="text-3xl font-heading font-bold">How our build process runs</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            From initial page map to mobile device testing and Search Console submission—timelines depend on agreed scope and content readiness.
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
            Core qualities of a dependable business site
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Every design choice balances fast loading, readability on mobile screens, and clear conversion next steps.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {qualities.map((item) => (
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
            After launch, ongoing management, technical SEO, Core Web Vitals tuning, and Search Console diagnostics keep your website performing at its best.
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
          <div className="mt-8 rounded-xl border border-border-color bg-secondary-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Field Guides
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Compare 2026 Indian website development pricing benchmarks and see how dedicated website structure reinforces Google Business Profile calls:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/blog/website-development-price-comparison-india"
                className="rounded-full border border-bronze/50 bg-primary-bg px-5 py-2 text-xs md:text-sm font-semibold text-light-bronze hover:border-bronze"
              >
                Website Development Price Comparison in India [2026 Guide] →
              </Link>
              <Link
                href="/blog/why-your-google-business-profile-isnt-getting-calls-in-kolkata"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2 text-xs md:text-sm text-gray-text hover:text-light-bronze"
              >
                Why Your Website Structure Governs GBP Calls →
              </Link>
              <Link
                href="/blog/local-seo-strategy-kolkata-indian-businesses"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2 text-xs md:text-sm text-gray-text hover:text-light-bronze"
              >
                Anti-Doorway Website Architecture for Local Businesses →
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Plan a custom website around your business
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            Tell us what your current site is missing and what enquiries matter most. We quote transparently based on agreed scope—without published cookie-cutter packages or guaranteed ranking claims.
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
