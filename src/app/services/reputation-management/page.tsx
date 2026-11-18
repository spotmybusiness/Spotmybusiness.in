import type { Metadata } from "next";
import Link from "next/link";
import { getProviderReference } from "@/lib/business";

export const metadata: Metadata = {
  title: "Reputation Management for Local Businesses | Spot My Business",
  description:
    "Monitor customer feedback, build ethical review workflows, and respond thoughtfully on Google Maps and public platforms—without fake reviews or gating.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services/reputation-management",
  },
  openGraph: {
    title: "Reputation Management for Local Businesses | Spot My Business",
    description:
      "Monitor customer feedback, build ethical review workflows, and respond thoughtfully on Google Maps and public platforms—without fake reviews or gating.",
    url: "https://www.spotmybusiness.in/services/reputation-management",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function ReputationManagementPage() {
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
            name: "Reputation Management",
            item: "https://www.spotmybusiness.in/services/reputation-management",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Reputation Management",
        description:
          "Ethical review monitoring, owner response frameworks, and customer trust management across Google Business Profile and public directories.",
        url: "https://www.spotmybusiness.in/services/reputation-management",
        provider: getProviderReference(),
      },
    ],
  };

  const capabilities = [
    {
      title: "Ongoing review monitoring",
      detail:
        "We track incoming customer reviews across Google and key directories so questions, praise, or service complaints never sit unanswered for weeks.",
    },
    {
      title: "Thoughtful owner response playbooks",
      detail:
        "We put a clear, human tone guide in place—so replies sound natural, mention relevant service context honestly, and stay calm under pressure.",
    },
    {
      title: "Frictionless ethical review requests",
      detail:
        "We help you build simple QR-code or post-service WhatsApp follow-up flows asking real customers for honest feedback, without review gating or incentives.",
    },
    {
      title: "Spotting operational feedback patterns",
      detail:
        "Recurring comments about wait times, phone availability, or clear pricing reveal fixes that improve real customer experience and future ratings.",
    },
    {
      title: "Consistency beside reviews",
      detail:
        "A 4.8-star rating still loses trust if your website or hours disagree with what reviewers describe. We keep public details synchronized around your reviews.",
    },
    {
      title: "Coordination with GBP & AI Search trust",
      detail:
        "Fresh review velocity and ≥3.5★ ratings increasingly filter which local businesses surface in Google Maps and AI answers like Gemini Local.",
    },
  ];

  const negativeFeedback = [
    {
      title: "Acknowledge the real experience",
      detail:
        "When a reviewer points out a genuine delay or mistake, a straightforward acknowledgement shows future readers that your team takes accountability.",
    },
    {
      title: "Keep replies brief & factual",
      detail:
        "Short, polite, specific replies read far better to prospective buyers than scripted corporate apologies.",
    },
    {
      title: "Never argue in public",
      detail:
        "Heated back-and-forth threads rarely satisfy the unhappy customer and actively discourage neutral visitors scanning your profile.",
    },
    {
      title: "Resolve specifics offline",
      detail:
        "Invite dissatisfied clients to call or message a direct manager number so billing or service details get fixed privately.",
    },
    {
      title: "Flag clear policy violations properly",
      detail:
        "When genuine spam, competitor harassment, or mistaken-business reviews appear, we document and escalate them through official Google review appeal channels.",
    },
    {
      title: "Turn patterns into website clarity",
      detail:
        "If multiple reviewers misunderstand a service boundary or pricing rule, clarifying that page copy stops future friction before it happens.",
    },
  ];

  const process = [
    {
      title: "Audit existing feedback",
      detail:
        "We read your current reviews, rating distribution, unanswered comments, and surrounding profile information.",
    },
    {
      title: "Set monitoring & alerts",
      detail:
        "We establish consistent checks so every new customer review gets noticed quickly.",
    },
    {
      title: "Build honest request & reply workflows",
      detail:
        "We create easy post-job feedback links and practical reply guidelines tailored to your tone.",
    },
    {
      title: "Synchronize public business details",
      detail:
        "Hours, services, and contact numbers are aligned so promises match customer expectations.",
    },
    {
      title: "Review themes & refine",
      detail:
        "We track review recency and recurring topics over time to inform website copy and operations.",
    },
  ];

  const outcomes = [
    {
      title: "Higher confidence before the first call",
      detail:
        "Recent authentic reviews paired with attentive owner replies reassure prospective clients before they dial your number.",
    },
    {
      title: "Stronger local & AI search prominence",
      detail:
        "Consistent, policy-safe feedback supports both Google Maps Local Pack prominence and generative AI recommendation filters.",
    },
    {
      title: "Actionable insight into service quality",
      detail:
        "Structured tracking turns scattered comments into clear operational signals.",
    },
    {
      title: "Zero policy-violation risk",
      detail:
        "Because we never buy, gate, or fabricate testimonials, your listing stays protected from Google review sweeps and penalties.",
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
            <li aria-current="page">Reputation Management</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Reputation Management
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Ethical reputation management that turns customer trust into enquiries
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Prospective customers read Google reviews and owner replies before deciding whom to call. Spot My Business helps you monitor feedback, ask happy clients for honest reviews consistently, and respond thoughtfully to criticism—without fake testimonials or review-gating tricks.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/google-business-profile-optimization"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Business Profile Optimization
            </Link>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Why authentic feedback outweighs shortcuts
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              Customers spot generic five-star spam right away. What actually convinces someone comparing two clinics, caterers, or movers is a steady stream of recent, specific reviews from real clients—paired with calm, attentive owner responses.
            </p>
            <p>
              Reviews also carry real algorithmic weight across Google Maps and generative AI recommendations, where recency, sentiment, and a rating above 3.5 stars determine whether a business gets surfaced at all.
            </p>
            <p>
              We do not manufacture reviews, gate unhappy feedback, or sell removal guarantees for legitimate criticism. Instead, we build repeatable habits that earn genuine public trust safely over time.
            </p>
          </div>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">What we help put in place</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Practical monitoring, ethical review collection workflows, and consistent reply guidelines built around your daily operations.
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
            Handling critical reviews constructively
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Even reliable businesses receive occasional criticism. A fair, measured public reply shows new buyers how your team handles real-world issues.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {negativeFeedback.map((item) => (
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
          <h2 className="text-3xl font-heading font-bold">Our 5-step approach</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Consistent monitoring, practical feedback links, and calm responses keep your public profile healthy without daily stress.
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
          <h2 className="text-3xl font-heading font-bold">Why steady reputation governance matters</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Trust compounds when authentic customer feedback sits beside accurate hours, real photos, and clear service pages.
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
            Reputation governance reinforces your Google Business Profile, Local SEO pages, and AI search visibility.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/internet-marketing"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Centralized Digital Presence &amp; SEO Management
            </Link>
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
              href="/services/ai-search-optimization"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              AI Search Optimization
            </Link>
            <Link
              href="/services/website-management"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website management
            </Link>
          </div>

          <div className="mt-8 rounded-xl border border-border-color bg-secondary-bg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Field Guides
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Explore how review velocity and ≥3.5★ thresholds shape Google Maps and AI search citations in 2026:
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/blog/google-business-profile-optimization-checklist"
                className="rounded-full border border-bronze/50 bg-primary-bg px-5 py-2 text-xs md:text-sm font-semibold text-light-bronze hover:border-bronze"
              >
                GBP Optimization Checklist: Review Governance &amp; Replies →
              </Link>
              <Link
                href="/blog/ai-search-optimization-geo-vs-aeo-vs-seo"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2 text-xs md:text-sm text-gray-text hover:text-light-bronze"
              >
                How Reviews Weight 38% in Gemini Local AI Search →
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Review how your business handles customer feedback
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If reviews are sitting unanswered or you need a steady way to invite honest client feedback, reach out to review your listing—transparently scoped with zero fabricated testimonials or guaranteed star scores.
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
