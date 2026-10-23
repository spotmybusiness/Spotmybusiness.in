import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Portfolio & Case Studies | Spot My Business",
  description:
    "Explore Spot My Business's portfolio across Google Business Profile optimization, website design and development, and Google Search Console performance monitoring.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/case-studies",
  },
  openGraph: {
    title: "Client Portfolio & Case Studies | Spot My Business",
    description:
      "Explore Spot My Business's portfolio across Google Business Profile optimization, website design and development, and Google Search Console performance monitoring.",
    url: "https://www.spotmybusiness.in/case-studies",
    siteName: "Spot My Business",
    type: "website",
  },
};

interface PortfolioItem {
  id: string;
  name: string;
  initials: string;
  sector: string;
  desc: string;
  highlights: string[];
  destination?: string;
  status?: string;
  linkText?: string;
  linkAriaLabel?: string;
}

const gbpClients: PortfolioItem[] = [
  {
    id: "gbp-smb",
    name: "Spot My Business",
    initials: "SMB",
    sector: "Internet Marketing & Local Search",
    destination: "https://share.google/Hi8iARMEQHLFzyEhc",
    linkText: "Google Profile",
    linkAriaLabel: "View Spot My Business Google Business Profile",
    desc: "Comprehensive Google Business Profile management, accurate service cataloging, and verified local presence across targeted Indian business markets.",
    highlights: [
      "Verified Business Details",
      "Service Area Configuration",
      "Customer Inquiry Routing",
    ],
  },
  {
    id: "gbp-science-squad",
    name: "Science Squad",
    initials: "SS",
    sector: "Academic Coaching",
    destination: "https://share.google/bKTfTl85YtvYxwu62",
    linkText: "Google Profile",
    linkAriaLabel: "View Science Squad Google Business Profile",
    desc: "Google Business Profile optimization for an academic coaching institute, aligning class schedules, location discovery, and student inquiry paths.",
    highlights: [
      "Course Categories",
      "Batch Timings & Hours",
      "Local Student Discovery",
    ],
  },
  {
    id: "gbp-bharat-relocators",
    name: "Bharat Relocators",
    initials: "BR",
    sector: "Moving & Relocation",
    destination: "https://share.google/OKAn1jzj2MBxpJmx9",
    linkText: "Google Profile",
    linkAriaLabel: "View Bharat Relocators Google Business Profile",
    desc: "Profile management for professional relocation and vehicle transport services, maintaining verified operational coverage and transparent contact details.",
    highlights: [
      "Service Area Coverage",
      "Relocation & Vehicle Transport",
      "Verification & Operating Hours",
    ],
  },
  {
    id: "gbp-nayak-decorators",
    name: "Nayak Decorators and Caterer Behala",
    initials: "NDC",
    sector: "Catering & Event Decoration",
    destination: "https://share.google/wMfeUTgDLekrqEM5C",
    linkText: "Google Profile",
    linkAriaLabel:
      "View Nayak Decorators and Caterer Behala Google Business Profile",
    desc: "Local Business Profile management for catering and event decoration services across Behala and South Kolkata neighborhoods.",
    highlights: [
      "Local Neighborhood Discovery",
      "Event Service Menus",
      "Direct Contact Pathways",
    ],
  },
  {
    id: "gbp-the-linguist",
    name: "The Linguist",
    initials: "TL",
    sector: "Language Training",
    destination: "https://share.google/DCyLKGwVk9vNocm5H",
    linkText: "Google Profile",
    linkAriaLabel: "View The Linguist Google Business Profile",
    desc: "Google Business Profile setup and category optimization for language coaching and communication training programs.",
    highlights: [
      "Training Categories",
      "Contact & Location Setup",
      "Student Discovery Alignment",
    ],
  },
  {
    id: "gbp-royal-home-spa",
    name: "ROYAL HOME SPA & MASSAGE",
    initials: "RHS",
    sector: "Wellness & Spa Services",
    destination: "https://share.google/v5MEm5e4gtQanOJg0",
    linkText: "Google Profile",
    linkAriaLabel: "View ROYAL HOME SPA & MASSAGE Google Business Profile",
    desc: "Local profile optimization and accurate business information management for wellness and home spa service offerings.",
    highlights: [
      "Wellness Service Structuring",
      "Operating Schedule Accuracy",
      "Local Presence Alignment",
    ],
  },
];

const webDesignClients: PortfolioItem[] = [
  {
    id: "web-smb",
    name: "Spot My Business",
    initials: "SMB",
    sector: "Digital Presence Platform",
    destination: "https://spotmybusiness.in/",
    linkText: "Live Website",
    linkAriaLabel: "Visit Spot My Business live website",
    desc: "A high-performance digital presence platform built with modern static architecture, multi-market coverage, and dual-theme accessibility.",
    highlights: [
      "Next.js Static Architecture",
      "Multi-Market City Profiles",
      "Dual-Theme Accessibility",
    ],
  },
  {
    id: "web-bharat-relocators",
    name: "Bharat Relocators",
    initials: "BR",
    sector: "Moving & Logistics",
    destination: "https://bharatrelocators.com/",
    linkText: "Live Website",
    linkAriaLabel: "Visit Bharat Relocators website",
    desc: "A relocation website featuring a dedicated shipment-tracking experience.",
    highlights: [
      "Dedicated Shipment Tracking",
      "Quote Request Experience",
      "Moving Services Catalog",
    ],
  },
  {
    id: "web-science-squad",
    name: "Science Squad",
    initials: "SS",
    sector: "Education & Science Coaching",
    destination: "https://sciencesquadkolkata.in/",
    linkText: "Live Website",
    linkAriaLabel: "Visit Science Squad website",
    desc: "An interactive, student-friendly website for a science coaching brand.",
    highlights: [
      "Student-Friendly UI",
      "Interactive Course Exploration",
      "Direct Admissions Inquiry",
    ],
  },
  {
    id: "web-the-linguist",
    name: "The Linguist",
    initials: "TL",
    sector: "Language Training",
    status: "In Development",
    destination: "https://www.thelinguist.co.in/",
    linkText: "Preview Site",
    linkAriaLabel: "Visit The Linguist preview website",
    desc: "A modern language training and educational website currently under active development.",
    highlights: [
      "Under Active Development",
      "Modular Course Layout",
      "Modern Learning Experience",
    ],
  },
];

const gscClients: PortfolioItem[] = [
  {
    id: "gsc-smb",
    name: "Spot My Business",
    initials: "SMB",
    sector: "Search Performance Monitoring",
    destination: "https://spotmybusiness.in/",
    linkText: "Website",
    linkAriaLabel: "Visit Spot My Business website",
    desc: "Ongoing search performance tracking, indexation audits, crawl health monitoring, and technical search visibility analysis.",
    highlights: [
      "Crawl & Indexation Audits",
      "Query Visibility Analysis",
      "Core Web Vitals Monitoring",
    ],
  },
  {
    id: "gsc-bharat-relocators",
    name: "Bharat Relocators",
    initials: "BR",
    sector: "Search Visibility Analysis",
    destination: "https://bharatrelocators.com/",
    linkText: "Website",
    linkAriaLabel: "Visit Bharat Relocators website",
    desc: "Organic search visibility analysis, sitemap submission review, index coverage tracking, and query performance evaluation.",
    highlights: [
      "Index Coverage Verification",
      "Search Query Trend Tracking",
      "Technical Health Review",
    ],
  },
];

function PortfolioCard({ item }: { item: PortfolioItem }) {
  const content = (
    <div className="relative z-10 flex h-full flex-col justify-between">
      <div>
        {/* Top Bar: Initials Monogram + Status/External Link Indicator */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border-color bg-secondary-bg font-heading text-sm font-bold text-light-bronze shadow-sm transition-colors group-hover:border-bronze/50 group-hover:text-champagne">
            {item.initials}
          </div>

          <div className="flex flex-wrap items-center justify-end gap-2">
            {item.status && (
              <span className="inline-flex items-center rounded-full border border-champagne/40 bg-champagne/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-champagne">
                {item.status}
              </span>
            )}

            {item.destination && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border-color bg-secondary-bg px-3 py-1.5 text-xs text-gray-text transition-colors group-hover:border-bronze/50 group-hover:text-heading">
                <span className="text-[11px] font-medium">
                  {item.linkText || "View"}
                </span>
                <ArrowUpRight
                  size={13}
                  className="text-light-bronze transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            )}
          </div>
        </div>

        {/* Category & Title */}
        <div className="mt-5">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-light-bronze">
            {item.sector}
          </span>
          <h3 className="mt-1 text-xl font-heading font-bold text-heading transition-colors group-hover:text-white">
            {item.name}
          </h3>
        </div>

        {/* Description */}
        <p className="mt-3 text-xs md:text-sm leading-relaxed text-gray-text">
          {item.desc}
        </p>
      </div>

      {/* Focus & Deliverables */}
      {item.highlights && item.highlights.length > 0 && (
        <div className="mt-6 border-t border-border-color/60 pt-4">
          <span className="block text-[10px] font-semibold uppercase tracking-wider text-light-bronze/90">
            Key Focus &amp; Deliverables
          </span>
          <ul className="mt-2.5 space-y-1.5">
            {item.highlights.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-gray-text"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const cardClasses =
    "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border-color bg-secondary-bg/70 p-6 md:p-8 transition-all duration-300 hover:border-bronze/50 hover:shadow-lg hover:shadow-bronze/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-bronze";

  return item.destination ? (
    <a
      href={item.destination}
      target="_blank"
      rel="noopener noreferrer"
      className={cardClasses}
      aria-label={`${item.linkAriaLabel || `Visit ${item.name}`} (opens in new tab)`}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-bronze/5 blur-3xl transition-all duration-300 group-hover:bg-bronze/15" />
      {content}
    </a>
  ) : (
    <div className={cardClasses}>
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-bronze/5 blur-3xl transition-all duration-300 group-hover:bg-bronze/15" />
      {content}
    </div>
  );
}

export default function CaseStudiesPage() {
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
        name: "Case Studies",
        item: "https://www.spotmybusiness.in/case-studies",
      },
    ],
  };

  return (
    <main className="bg-primary-bg text-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-text">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-gray-text/70">
            <li>
              <Link
                href="/"
                className="hover:text-light-bronze transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-gray-text/40">
              →
            </li>
            <li aria-current="page" className="text-light-bronze font-medium">
              Case Studies
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-3xl py-12 md:py-16">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            OUR PORTFOLIO
          </span>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl text-heading">
            Our Work. Your Next Growth Story.
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-text">
            Explore how Spot My Business brings together local search
            optimization, website experiences, and search visibility to help
            businesses strengthen their digital presence.
          </p>
        </section>

        {/* Section One: Google Business Profile */}
        <section className="border-t border-border-color py-14 md:py-18">
          <div className="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-light-bronze">
                Local Presence
              </span>
              <h2 className="mt-2 text-2xl font-heading font-bold text-heading md:text-3xl">
                Google Business Profile Optimization
              </h2>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-text">
                Discover the businesses whose Google Business Profiles we
                manage or optimize to help strengthen their local search
                presence and business information.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-2.5 text-xs font-heading font-bold uppercase tracking-[0.2em] text-heading transition-all duration-300 hover:shadow-lg hover:shadow-bronze/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-bronze"
              >
                Build Now
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gbpClients.map((client) => (
              <PortfolioCard key={client.id} item={client} />
            ))}
          </div>
        </section>

        {/* Section Two: Website Design */}
        <section className="border-t border-border-color py-14 md:py-18">
          <div className="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-light-bronze">
                Web Engineering
              </span>
              <h2 className="mt-2 text-2xl font-heading font-bold text-heading md:text-3xl">
                Website Design &amp; Development
              </h2>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-text">
                Explore websites built to give businesses a distinctive online
                presence, with an emphasis on usability, relevant functionality,
                and a better experience for visitors.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-2.5 text-xs font-heading font-bold uppercase tracking-[0.2em] text-heading transition-all duration-300 hover:shadow-lg hover:shadow-bronze/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-bronze"
              >
                Audit Now
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {webDesignClients.map((client) => (
              <PortfolioCard key={client.id} item={client} />
            ))}
          </div>
        </section>

        {/* Section Three: Google Search Console */}
        <section className="border-t border-border-color py-14 md:py-18">
          <div className="mb-8 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-light-bronze">
                Search Performance &amp; Monitoring
              </span>
              <h2 className="mt-2 text-2xl font-heading font-bold text-heading md:text-3xl">
                Google Search Console Optimization
              </h2>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-text">
                Explore our search performance and website monitoring projects,
                with an emphasis on understanding search visibility, identifying
                opportunities, and improving the technical foundations of
                organic search.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-2.5 text-xs font-heading font-bold uppercase tracking-[0.2em] text-heading transition-all duration-300 hover:shadow-lg hover:shadow-bronze/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-bronze"
              >
                Optimize Now
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gscClients.map((client) => (
              <PortfolioCard key={client.id} item={client} />
            ))}
          </div>
        </section>

        {/* Closing Consultation CTA */}
        <section className="border-t border-border-color pt-14 md:pt-18">
          <div className="relative overflow-hidden rounded-2xl border border-border-color bg-secondary-bg/80 p-8 md:p-12">
            <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-bronze/10 blur-[90px]" />
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-light-bronze">
                Start Your Engagement
              </span>
              <h2 className="mt-3 text-2xl font-heading font-bold text-heading md:text-4xl">
                Ready to Discuss Your Business Goals?
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed text-gray-text">
                Tell us about your business, current digital footprint, and
                local market goals. We will review your Google Business Profile,
                website usability, or organic search foundations with honest
                recommendations and without unrealistic guarantees.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze to-light-bronze px-8 py-3.5 text-xs font-heading font-bold uppercase tracking-[0.2em] text-heading transition-all duration-300 hover:shadow-lg hover:shadow-bronze/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-light-bronze"
                >
                  Contact Spot My Business
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
