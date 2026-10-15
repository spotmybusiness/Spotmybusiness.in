import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Industries & Local Business Models We Support | Spot My Business",
  description:
    "How Spot My Business adapts website development, Google Business Profile optimization, and local SEO to different local business models and industry needs.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/industries",
  },
  openGraph: {
    title: "Industries & Local Business Models We Support | Spot My Business",
    description:
      "How Spot My Business adapts website development, Google Business Profile optimization, and local SEO to different local business models and industry needs.",
    url: "https://www.spotmybusiness.in/industries",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function IndustriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
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
        name: "Industries",
        item: "https://www.spotmybusiness.in/industries",
      },
    ],
  };

  const businessModels = [
    {
      title: "Service-Area Businesses",
      detail:
        "Businesses that deliver services at the customer's location—such as movers, decorators, or technicians. We emphasize clear service coverage, transparent contact paths, and structured service pages without creating thin doorway pages.",
    },
    {
      title: "Storefront & Location-Based Businesses",
      detail:
        "Businesses where customers visit a physical facility—such as coaching centers, institutes, or workshops. We focus on exact address accuracy, directions on Google Maps, verified operating hours, and localized on-page signals.",
    },
    {
      title: "Professional & Consultation Services",
      detail:
        "Businesses where trust and clear explanations drive enquiries. We structure pages around specific capabilities, honest credentials, and straightforward enquiry pathways so prospective clients can decide with confidence.",
    },
  ];

  const industryExamples = [
    {
      title: "Education & Academic Coaching",
      overview:
        "Coaching centers and educational institutes need clear information about subjects, levels, schedules, location accessibility, and enquiry methods for students and parents.",
      approach: [
        "Structured course and subject descriptions that answer search intent",
        "Clear location, batch timings, and direct enquiry options",
        "Accurate Google Business Profile details for local discoverability",
      ],
    },
    {
      title: "Moving, Relocation & Logistics",
      overview:
        "Relocation and logistics providers require trust, straightforward communication, and clear descriptions of household, commercial, or local moving services.",
      approach: [
        "Distinct pages for specific moving services rather than generic copy",
        "Clear contact and quotation inquiry paths for quick customer actions",
        "Consistent business details and review monitoring across local profiles",
      ],
    },
    {
      title: "Catering & Event Services",
      overview:
        "Caterers and event decorators need visual clarity, clear service menus, event capacity details, and accessible booking channels.",
      approach: [
        "Organized service lists and realistic presentation of event capabilities",
        "Website-to-Maps alignment so clients can verify location and credentials",
        "Easy paths to call, message on WhatsApp, or submit an event enquiry",
      ],
    },
  ];

  const adaptationAreas = [
    {
      title: "Website Development & Structure",
      detail:
        "We build layouts that mirror how your customers make decisions—whether they need an immediate phone number, a detailed service breakdown, or a direct quote form.",
      link: "/services/website-development",
      linkText: "Website Development",
    },
    {
      title: "Google Business Profile & Maps",
      detail:
        "We select accurate primary and secondary categories, configure service lists, and align hours to match your real-world operations.",
      link: "/services/google-business-profile-optimization",
      linkText: "Business Profile Optimization",
    },
    {
      title: "Local SEO & Search Intent",
      detail:
        "We research how people search for your services in your area and create informative pages that answer those needs honestly without keyword stuffing.",
      link: "/services/local-seo",
      linkText: "Local SEO Services",
    },
    {
      title: "Reputation & Review Workflows",
      detail:
        "We establish thoughtful, professional review monitoring and response approaches suited to your customer communication style.",
      link: "/services/reputation-management",
      linkText: "Reputation Management",
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
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-text">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-light-bronze">
                Home
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">Industries</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Industries &amp; Business Models
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Digital presence built around how your local business actually operates
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business works with local businesses across multiple sectors.
            While search fundamentals and web standards share core principles,
            every business model has distinct customer habits, enquiry pathways,
            and search intent. We adapt website development, Business Profile
            optimization, and Local SEO to your specific operational reality.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Services
            </Link>
          </div>
        </section>

        {/* Operational Models Section */}
        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Adapting to different operational models
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              Different businesses interact with their markets in different
              ways. A coaching institute needs students to find classroom
              details and contact the center; a moving company needs customers to
              request a quote for a specific route; a local tradesperson needs
              homeowners to reach them quickly by phone or message.
            </p>
            <p>
              We do not treat industry support as a claim of exclusive niche
              specialization or proprietary industry secrets. Instead, we apply
              proven digital presence principles—clarity, accurate business
              information, intent-focused content, and responsive websites—tailored
              to how your clients search and choose.
            </p>
          </div>
        </section>

        {/* Business Model Cards */}
        <section className="py-8">
          <ul className="grid gap-6 md:grid-cols-3">
            {businessModels.map((model) => (
              <li
                key={model.title}
                className="rounded-2xl border border-border-color bg-secondary-bg p-6"
              >
                <h3 className="text-lg font-bold text-heading">{model.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-text">
                  {model.detail}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Industry Examples Section */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Supported industry examples
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Below are examples of local business categories we actively support,
            illustrating how digital presence work is structured around real
            market needs.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {industryExamples.map((item) => (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-border-color bg-secondary-bg p-6"
              >
                <div>
                  <h3 className="text-xl font-bold text-heading">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-text">
                    {item.overview}
                  </p>
                </div>
                <div className="mt-6 border-t border-border-color/60 pt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-light-bronze">
                    Key Focus Areas
                  </p>
                  <ul className="mt-3 space-y-2 text-xs text-gray-text">
                    {item.approach.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="text-light-bronze" aria-hidden="true">
                          •
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Adapt The Work Section */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            How we tailor core services to your business
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Rather than applying a rigid template, we adjust our approved service
            offerings to match how your specific sector operates.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {adaptationAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl border border-border-color p-6"
              >
                <h3 className="font-semibold text-heading">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-text">
                  {area.detail}
                </p>
                <Link
                  href={area.link}
                  className="mt-4 inline-block text-xs font-semibold text-light-bronze hover:text-heading"
                >
                  Explore {area.linkText} →
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services Links */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Related services</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Explore our dedicated service offerings to see the specific technical
            and strategic work we deliver.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/google-business-profile-optimization"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Google Business Profile Optimization
            </Link>
            <Link
              href="/services/google-maps-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Google Maps SEO
            </Link>
            <Link
              href="/services/local-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Local SEO
            </Link>
            <Link
              href="/services/website-development"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website Development
            </Link>
            <Link
              href="/services/website-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website Management
            </Link>
            <Link
              href="/services/website-seo"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website SEO
            </Link>
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss your business and your market
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            Whether you operate a service-area business, a local storefront, or a
            consultative practice, we can review how your business currently appears
            across Google Search, Maps, and the web.
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

