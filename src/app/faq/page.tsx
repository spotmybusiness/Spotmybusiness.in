import type { Metadata } from "next";

import { faqCategories } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Spot My Business",
  description:
    "Straightforward answers to common questions about Spot My Business services, our remote collaboration model, website development, Local SEO, and profile optimization.",
  alternates: {
    canonical: "https://spotmybusiness.in/faq/",
  },
  openGraph: {
    title: "Frequently Asked Questions | Spot My Business",
    description:
      "Straightforward answers to common questions about Spot My Business services, our remote collaboration model, website development, Local SEO, and profile optimization.",
    url: "https://spotmybusiness.in/faq/",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
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
        name: "FAQ",
        item: "https://spotmybusiness.in/faq/",
      },
    ],
  };

  const relatedResources = [
    { label: "Services Hub", href: "/services/" },
    { label: "Location Markets", href: "/locations/" },
    { label: "Industries & Business Models", href: "/industries/" },
    { label: "Selected Case Studies", href: "/case-studies/" },
    { label: "About Our Company", href: "/about/" },
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-text">
          <ol className="flex flex-wrap gap-2">
            <li>
              <a href="/" className="hover:text-light-bronze">
                Home
              </a>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">FAQ</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Transparent Answers &amp; Guidance
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Straightforward answers to common questions about how Spot My Business
            operates, our remote collaboration model, our service capabilities, and
            what to expect when working together on your digital presence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact/"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Ask a Question
            </a>
            <a
              href="/services/"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Services
            </a>
          </div>
        </section>

        {/* Category Jump Navigation */}
        <section className="border-t border-border-color py-8">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-text font-bold mb-4">
            Jump to category
          </p>
          <div className="flex flex-wrap gap-3">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:border-bronze/50 hover:text-heading transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </section>

        {/* FAQ Category Sections */}
        {faqCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="border-t border-border-color py-12 scroll-mt-24"
          >
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
                Category
              </span>
              <h2 className="mt-2 text-3xl font-heading font-bold text-heading">
                {category.name}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-text">
                {category.description}
              </p>
            </div>

            <div className="space-y-4 max-w-4xl">
              {category.items.map((item) => (
                <details
                  key={item.id}
                  className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-heading">
                    <span>{item.question}</span>
                    <span
                      aria-hidden="true"
                      className="shrink-0 text-light-bronze transition-transform duration-300 group-open:rotate-180"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-text border-t border-border-color/50 pt-4">
                    {item.answer.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                    {item.relatedLink && (
                      <p className="pt-2">
                        <a
                          href={item.relatedLink.href}
                          className="inline-flex items-center text-xs font-semibold text-light-bronze hover:text-champagne transition-colors"
                        >
                          {item.relatedLink.text} →
                        </a>
                      </p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </section>
        ))}

        {/* Related Resource Links */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Related resources</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Continue exploring how our services, business models, and geographic reach
            help local businesses establish credible online visibility.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {relatedResources.map((resource) => (
              <a
                key={resource.href}
                href={resource.href}
                className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze transition-colors"
              >
                {resource.label}
              </a>
            ))}
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Have a question about your business?
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If you have a question that isn&apos;t covered here, or if you want to
            discuss your specific website, Google Business Profile, or local SEO
            needs, reach out directly to Spot My Business.
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

