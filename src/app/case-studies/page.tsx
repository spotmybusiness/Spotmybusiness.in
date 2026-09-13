import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Work & Case Studies | Spot My Business",
  description:
    "Explore selected client projects showcasing how Spot My Business supports local businesses with Google Business Profile optimization, local SEO, and website development.",
  alternates: {
    canonical: "https://spotmybusiness.in/case-studies/",
  },
  openGraph: {
    title: "Client Work & Case Studies | Spot My Business",
    description:
      "Explore selected client projects showcasing how Spot My Business supports local businesses with Google Business Profile optimization, local SEO, and website development.",
    url: "https://spotmybusiness.in/case-studies/",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function CaseStudiesPage() {
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
        name: "Case Studies",
        item: "https://spotmybusiness.in/case-studies/",
      },
    ],
  };

  const projects = [
    {
      id: "1",
      name: "Science Squad Dankuni",
      website: "https://science-squad-dankuni.localo.site/",
      businessType: "Academic Coaching",
      market: "Dankuni",
      reviews: "5.0 Star Rating (30+)",
      visibility: "#1 Google Maps Position",
      initials: "SS",
      desc: "Science Squad Dankuni provides expert coaching for students seeking academic excellence in Dankuni.",
      sector: "Education & Coaching",
      location: "Dankuni",
    },
    {
      id: "2",
      name: "Bharat Relocators",
      website: "https://bharatrelocators.com/",
      businessType: "Moving & Relocation",
      market: "Haltu, Kolkata",
      reviews: "4.9 Star Rating (300+)",
      visibility: "#1 Bike and Car Transportation Services in India",
      initials: "BR",
      desc: "Bharat Relocators is a professional moving and relocation service provider in Kolkata.",
      sector: "Moving & Relocation",
      location: "Haltu, Kolkata",
    },
    {
      id: "3",
      name: "Nayak Decorators and Caterer",
      website: "https://nayakcaterer.com/kolkata/caterers-in-behala",
      businessType: "Catering & Event Decoration",
      market: "Behala, South Kolkata",
      reviews: "4.8 Star Rating (50+)",
      visibility: "#1 Near Me Searches",
      initials: "NDC",
      desc: "Nayak Decorators and Caterer provides catering and event decoration services across Behala and South Kolkata.",
      sector: "Catering & Event Decoration",
      location: "Behala, Kolkata",
    },
    {
      id: "4",
      name: "Republic Packers and Movers",
      website: "https://republicpackers.com/kolkata-packers-movers-west-bengal",
      businessType: "Packers & Movers",
      market: "Kolkata, West Bengal",
      reviews: "4.7 Star Rating (600+)",
      visibility: "Top 10 Movers in Kolkata",
      initials: "RPM",
      desc: "Republic Packers and Movers provides local and domestic moving and relocation assistance in Kolkata.",
      sector: "Packers & Movers",
      location: "Kolkata, West Bengal",
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
              <a href="/" className="hover:text-light-bronze">
                Home
              </a>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">Case Studies</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Client Projects &amp; Experience
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Real-world digital presence projects for local businesses
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business works with local businesses to organize their Google
            Business Profiles, align Google Maps discovery, and build clear,
            high-performing websites. Below are selected client engagements
            illustrating how local digital presence work is structured and
            delivered.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact/"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </a>
            <a
              href="/services/"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore All Services
            </a>
          </div>
        </section>

        {/* Projects Grid Section */}
        <section className="border-t border-border-color py-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-heading font-bold">
                Selected Client Work
              </h2>
              <p className="mt-2 text-sm text-gray-text max-w-2xl">
                Review representative projects from our client portfolio.
                Metrics shown represent recorded project snapshot data.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col justify-between rounded-2xl border border-border-color bg-secondary-bg p-6 md:p-8"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border-color bg-primary-bg font-heading text-lg font-bold text-light-bronze shadow-sm">
                        {project.initials}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-light-bronze">
                          {project.sector} • {project.location}
                        </span>
                        <h3 className="text-xl font-heading font-bold text-heading">
                          {project.name}
                        </h3>
                      </div>
                    </div>

                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-border-color bg-primary-bg px-3 py-1.5 text-xs text-gray-text hover:border-bronze/50 hover:text-heading transition-colors"
                      aria-label={`Visit ${project.name} live website (opens in new tab)`}
                    >
                      <span>Website</span>
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-gray-text">
                    {project.desc}
                  </p>
                </div>

                {/* Project Snapshot Metrics */}
                <div className="mt-6 border-t border-border-color/60 pt-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-wider text-light-bronze font-semibold">
                      Project Snapshot Data
                    </span>
                    <span className="text-[9px] text-gray-text/50">
                      Reported Metrics
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-border-color/40 bg-primary-bg/50 p-2.5">
                      <span className="block text-[9px] uppercase tracking-wider text-gray-text/60">
                        Business Type
                      </span>
                      <p className="mt-0.5 text-xs font-semibold text-light-bronze md:text-sm">
                        {project.businessType}
                      </p>
                    </div>

                    <div className="rounded-lg border border-border-color/40 bg-primary-bg/50 p-2.5">
                      <span className="block text-[9px] uppercase tracking-wider text-gray-text/60">
                        Market
                      </span>
                      <p className="mt-0.5 text-xs font-semibold text-champagne md:text-sm">
                        {project.market}
                      </p>
                    </div>

                    <div className="rounded-lg border border-border-color/40 bg-primary-bg/50 p-2.5">
                      <span className="block text-[9px] uppercase tracking-wider text-gray-text/60">
                        Reputation
                      </span>
                      <p className="mt-0.5 text-xs font-semibold text-heading md:text-sm">
                        {project.reviews}
                      </p>
                    </div>

                    <div className="rounded-lg border border-border-color/40 bg-primary-bg/50 p-2.5">
                      <span className="block text-[9px] uppercase tracking-wider text-gray-text/60">
                        Search Position
                      </span>
                      <p className="mt-0.5 text-xs font-semibold text-bronze md:text-sm">
                        {project.visibility}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Methodology & Context Section */}
        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Understanding project outcomes and data
            </h2>
          </div>
          <div className="space-y-4 text-gray-text leading-relaxed">
            <p>
              Digital presence performance varies by business model, local
              market competition, customer habits, and search demand. Metrics
              displayed above represent specific project snapshot records rather
              than uniform benchmarks or promises of future performance.
            </p>
            <p>
              Spot My Business focuses on practical, verifiable improvements:
              ensuring business details are complete and consistent across Google
              Maps and Search, structuring websites for real customer intent,
              and establishing maintainable digital foundations.
            </p>
          </div>
        </section>

        {/* Related Services Section */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">
            Services delivered in these engagements
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Explore the core service capabilities we apply across our client
            projects.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/services/google-business-profile-optimization/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Google Business Profile Optimization
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
              href="/services/website-development/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website Development
            </a>
            <a
              href="/services/website-management/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website Management
            </a>
            <a
              href="/services/website-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website SEO
            </a>
            <a
              href="/services/reputation-management/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Reputation Management
            </a>
          </div>
        </section>

        {/* Final CTA Block */}
        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss your project with Spot My Business
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            Tell us about your business, current digital presence, and local
            market goals. We can review what your business needs without
            unrealistic guarantees.
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

