import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Business Profile Optimization | Spot My Business",
  description:
    "Review, optimize, and maintain your Google Business Profile for accurate local discovery across Google Search and Google Maps.",
  alternates: {
    canonical:
      "https://spotmybusiness.in/services/google-business-profile-optimization/",
  },
  openGraph: {
    title: "Google Business Profile Optimization | Spot My Business",
    description:
      "Review, optimize, and maintain your Google Business Profile for accurate local discovery across Google Search and Google Maps.",
    url: "https://spotmybusiness.in/services/google-business-profile-optimization/",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function GoogleBusinessProfileOptimizationPage() {
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
            name: "Google Business Profile Optimization",
            item: "https://spotmybusiness.in/services/google-business-profile-optimization/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Google Business Profile Optimization",
        description:
          "Review, cleanup, optimization, and ongoing maintenance of Google Business Profiles for local businesses.",
        url: "https://spotmybusiness.in/services/google-business-profile-optimization/",
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
      title: "Business information accuracy",
      detail:
        "Name, address, phone numbers, hours, and website details are reviewed so customers are not left with conflicting or outdated facts.",
    },
    {
      title: "Categories that match the business",
      detail:
        "Primary and, where they fit, secondary categories are checked so the profile describes what the business actually does—not a generic or misleading label.",
    },
    {
      title: "Services and customer-facing details",
      detail:
        "Service lists and related details are organized so visitors can see what you offer before they call, message, or visit.",
    },
    {
      title: "Business description",
      detail:
        "The description is written to explain the business clearly, using language a customer would recognize rather than stuffed keywords.",
    },
    {
      title: "Profile completeness",
      detail:
        "Missing fields, incomplete sections, and unused profile features are identified so the listing is easier to understand at a glance.",
    },
    {
      title: "Photos and media organization",
      detail:
        "Existing photos and other media are reviewed so the profile shows the business, its work, and its location in a useful way.",
    },
    {
      title: "Google Maps presence",
      detail:
        "The same Business Profile information that appears in Search also supports how the business is represented on Google Maps.",
    },
    {
      title: "Reviews and reputation considerations",
      detail:
        "We look at how reviews appear on the profile and how they fit a practical approach to customer feedback—without fabricating ratings or reviews.",
    },
    {
      title: "Ongoing profile maintenance",
      detail:
        "When it is useful, we keep information current as hours, services, photos, or contact details change.",
    },
  ];

  const process = [
    {
      title: "Assessment",
      detail:
        "We review the current Google Business Profile, how it appears in Search and Maps, and which details are missing, unclear, or inconsistent.",
    },
    {
      title: "Cleanup and optimization",
      detail:
        "We correct inaccurate information, complete useful fields, and tidy the presentation so customers can scan the profile with less friction.",
    },
    {
      title: "Information and service alignment",
      detail:
        "Categories, services, and description are aligned with how the business actually operates and with the rest of its digital presence.",
    },
    {
      title: "Monitoring and maintenance",
      detail:
        "We watch for changes that affect the listing—edits, outdated hours, or incomplete sections—and keep the profile in usable shape.",
    },
    {
      title: "Ongoing refinement",
      detail:
        "As the business adds services, updates photos, or changes how customers get in touch, the profile can be refined without starting from scratch.",
    },
  ];

  const outcomes = [
    {
      title: "Clearer information",
      detail:
        "Potential customers can see who you are, what you offer, and how to reach you without guessing from incomplete or conflicting details.",
    },
    {
      title: "Stronger local discoverability",
      detail:
        "A complete, relevant profile gives Google Search and Google Maps better information to work with. That supports local discovery; it does not promise a specific ranking.",
    },
    {
      title: "A more trustworthy presentation",
      detail:
        "Accurate hours, real photos, and a description that matches the business help people decide whether to get in touch.",
    },
    {
      title: "Easier next steps",
      detail:
        "When contact details, directions, the website, and messaging options are present and correct, customers can call, visit, or enquire with less effort.",
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
            <li aria-current="page">Google Business Profile Optimization</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Google Business Profile
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Google Business Profile Optimization for local businesses
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business helps you present accurate hours, services,
            photos, and contact details on the Google Business Profile that
            appears in Google Search and Google Maps—so local customers can
            understand the business and take the next step.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact/"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </a>
            <a
              href="/services/google-maps-seo/"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Google Maps SEO
            </a>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              What this work actually involves
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              When local customers search on Google, they often see a Business
              Profile before they ever open a website. That listing is how many
              people check whether a business is relevant, currently operating,
              and worth contacting.
            </p>
            <p>
              Accurate information matters because people act on what they
              see. A wrong phone number, missing services, or an incomplete
              description makes it harder to call, get directions, or decide
              if you offer what they need.
            </p>
            <p>
              Completeness, clarity, relevance, and consistency all play a
              part. The profile should describe the same business that appears
              on your website and in Google Maps—not a mixed set of names,
              categories, or contact details.
            </p>
            <p>
              Optimization is the work of reviewing, organizing, and
              maintaining those details. It does not give anyone control over
              Google&apos;s ranking systems, and it does not guarantee a
              particular position in Search or Maps.
            </p>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-heading font-bold">What we can help with</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            The focus is the information and presentation customers use on
            the profile itself. Spot My Business does not have privileged
            access to Google&apos;s systems; the work stays on the Business
            Profile and the details you control.
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
            The sequence is practical: understand the current listing, fix
            what is unclear, align it with the business, then keep it current.
            Each step is about useful information—not a promised outcome.
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
          <h2 className="text-3xl font-heading font-bold">Why this matters</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            A well-kept Google Business Profile will not replace a good
            website or a thoughtful local search approach. It does give
            people a clearer first look at the business in the places they
            already search.
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
            Business Profile work sits alongside other parts of a local
            digital presence. These related pages cover nearby work we also
            offer.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/services/internet-marketing/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Internet Marketing
            </a>
            <a
              href="/services/google-maps-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Google Maps SEO
            </a>
            <a
              href="/services/local-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Local SEO
            </a>
            <a
              href="/services/reputation-management/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Reputation management
            </a>
            <a
              href="/services/website-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website SEO
            </a>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss your Business Profile
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If you want the listing customers see on Google Search and Google
            Maps to be clearer and more complete, tell us how the profile
            currently looks and what you would like to improve. We can talk
            through the work without promising rankings or lead numbers.
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
