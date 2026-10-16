import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServicesHubClusters } from "@/lib/services";

export const metadata: Metadata = {
  title: "Website, SEO, Local & AI Search Services | Spot My Business",
  description:
    "Explore Spot My Business services organized across four core disciplines: Web Engineering, Search Visibility & Local Discovery, AI Search Optimization, and Analytics & Governance.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/services",
  },
  openGraph: {
    title: "Website, SEO, Local & AI Search Services | Spot My Business",
    description:
      "Explore Spot My Business services organized across four core disciplines: Web Engineering, Search Visibility & Local Discovery, AI Search Optimization, and Analytics & Governance.",
    url: "https://www.spotmybusiness.in/services",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function ServicesPage() {
  const hubClusters = getServicesHubClusters();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.spotmybusiness.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://www.spotmybusiness.in/services",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-primary-bg text-heading">
      {/* Schema.org Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-4"
      >
        <ol className="flex items-center gap-2 text-xs text-gray-text/60 font-medium tracking-wide">
          <li>
            <Link
              href="/"
              className="hover:text-light-bronze transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-text/30">
            /
          </li>
          <li aria-current="page" className="text-light-bronze">
            Services
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            Services Directory
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading leading-tight">
            Connected Digital Presence Services
          </h1>
          <p className="mt-6 text-gray-text text-base md:text-lg leading-relaxed max-w-2xl">
            Spot My Business delivers 11 specialized services structured across four core disciplines. Rather than fragmented tactics, each service reinforces the others — aligning technical web performance, organic search, local map discovery, and generative AI visibility into a coherent digital presence.
          </p>
          <p className="mt-4 text-gray-text text-sm leading-relaxed max-w-2xl">
            Operating from Kolkata, West Bengal, we partner remotely with businesses across India and international markets. Explore our{" "}
            <Link
              href="/industries"
              className="text-light-bronze hover:text-champagne underline underline-offset-2 transition-colors duration-200"
            >
              industry playbooks
            </Link>{" "}
            and{" "}
            <Link
              href="/locations"
              className="text-light-bronze hover:text-champagne underline underline-offset-2 transition-colors duration-200"
            >
              market profiles
            </Link>{" "}
            to see how these capabilities adapt to distinct competitive landscapes.
          </p>
        </div>
      </section>

      {/* Four Disciplines Jump Navigation */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-8">
        <div className="flex flex-wrap gap-2.5">
          {hubClusters.map(({ cluster }, idx) => (
            <a
              key={cluster.id}
              href={`#${cluster.id}`}
              className="px-4 py-2 rounded-full border border-border-color bg-secondary-bg/60 text-[11px] uppercase tracking-[0.15em] font-heading font-semibold text-gray-text hover:border-bronze/60 hover:text-white transition-all duration-200"
            >
              0{idx + 1}. {cluster.name}
            </a>
          ))}
        </div>
      </section>

      {/* Services Grouped by Four Clusters */}
      <div className="space-y-16 md:space-y-24 py-8">
        {hubClusters.map(({ cluster, services }, clusterIndex) => (
          <section
            key={cluster.id}
            id={cluster.id}
            className="max-w-7xl mx-auto px-6 md:px-12 scroll-mt-28"
          >
            {/* Cluster Header */}
            <div className="border-t border-border-color/60 pt-12 mb-10">
              <div className="max-w-3xl">
                <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
                  Discipline 0{clusterIndex + 1}
                </span>
                <h2 className="mt-3 text-2xl md:text-3xl font-heading font-bold text-heading">
                  {cluster.name}
                </h2>
                <p className="mt-3 text-sm md:text-base text-gray-text leading-relaxed">
                  {cluster.description}
                </p>
              </div>
            </div>

            {/* Cluster 3 (AI Search) Feature Card vs Standard Grids */}
            {cluster.id === "ai-search" && services.length === 1 ? (
              <div className="glass-card border border-bronze/40 rounded-2xl p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-bronze/10 blur-[80px] pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-secondary-bg border border-border-color rounded-xl text-light-bronze">
                        {(() => {
                          const IconComp = services[0].icon;
                          return <IconComp className="w-7 h-7" />;
                        })()}
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-light-bronze">
                          Generative Search & AI Answers
                        </span>
                        <h3 className="text-2xl md:text-3xl font-heading font-bold text-heading">
                          {services[0].title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-text leading-relaxed">
                      {services[0].hubShortDesc || services[0].shortDesc}
                    </p>
                    <p className="text-xs text-gray-text/80 leading-relaxed">
                      {services[0].longDesc}
                    </p>
                    <div className="pt-2">
                      <Link
                        href={services[0].href!}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-xs uppercase tracking-[0.2em] font-heading font-bold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
                        aria-label={`View ${services[0].title} service page`}
                      >
                        <span>Explore AI Search Architecture</span>
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5 bg-secondary-bg/80 border border-border-color/60 rounded-xl p-6 space-y-4">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-heading font-bold">
                      Key Capabilities & Deliverables
                    </h4>
                    <ul className="space-y-3">
                      {(services[0].hubFeatures || services[0].features).map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-xs text-gray-text">
                          <span className="w-1.5 h-1.5 rounded-full bg-bronze shrink-0 mt-1.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 ${
                  services.length === 4
                    ? "md:grid-cols-2 lg:grid-cols-4"
                    : "md:grid-cols-2 lg:grid-cols-3"
                } gap-6`}
              >
                {services.map((service) => {
                  const IconComp = service.icon;
                  return (
                    <div
                      key={service.id}
                      className="glass-card border border-border-color rounded-2xl p-7 flex flex-col justify-between gap-6 group hover:border-bronze/40 transition-colors duration-300"
                    >
                      <div>
                        <div className="flex justify-between items-start">
                          <div className="p-2.5 bg-secondary-bg border border-border-color rounded-xl text-light-bronze group-hover:text-champagne transition-colors">
                            <IconComp className="w-6 h-6" />
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-gray-text/40 group-hover:text-light-bronze transition-colors" />
                        </div>

                        <h3 className="text-lg font-heading font-bold text-heading mt-5 group-hover:text-white transition-colors">
                          {service.title}
                        </h3>

                        <p className="mt-2.5 text-xs text-gray-text leading-relaxed">
                          {service.hubShortDesc || service.shortDesc}
                        </p>

                        <ul className="mt-4 space-y-2">
                          {(service.hubFeatures || service.features).map((feature) => (
                            <li
                              key={feature}
                              className="flex items-center gap-2 text-[11px] text-gray-text/80"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-bronze shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-border-color/50">
                        <Link
                          href={service.href!}
                          className="inline-block text-[10px] tracking-[0.2em] font-heading font-bold text-light-bronze uppercase hover:text-champagne transition-colors duration-300"
                          aria-label={`View ${service.title} service page`}
                        >
                          View Service →
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        ))}
      </div>

      {/* How services connect */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 border-t border-border-color/60">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            How It Works Together
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-heading font-bold tracking-tight text-heading">
            Services That Reinforce Each Other
          </h2>
          <p className="mt-5 text-gray-text text-sm leading-relaxed">
            A resilient digital presence is never built from an isolated service. Fast, accessible web engineering directly supports Core Web Vitals and crawl efficiency. Semantic SEO architecture prepares your content for Google Search indexation and AI answer extraction. Local SEO and verified Google Business Profile signals power discovery on Google Maps. Ongoing Search Console management and review governance ensure performance is verified through first-party data rather than guesswork.
          </p>
          <p className="mt-4 text-gray-text text-sm leading-relaxed">
            To see how this integrated discipline applies across real projects, review our{" "}
            <Link
              href="/case-studies"
              className="text-light-bronze hover:text-champagne underline underline-offset-2 transition-colors duration-200"
            >
              client showcase and documented project snapshots
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Related links */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-8 border-t border-border-color/40">
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Industries", href: "/industries" },
            { label: "Locations", href: "/locations" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "FAQ", href: "/faq" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-2.5 rounded-full border border-border-color text-xs tracking-[0.15em] uppercase font-semibold text-gray-text hover:border-bronze/50 hover:text-white transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="glass-panel border border-border-color rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-bronze/5 blur-[120px] pointer-events-none" />
          <div className="relative z-10 space-y-5 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-heading">
              Ready to Strengthen Your Digital Presence?
            </h2>
            <p className="text-gray-text text-sm leading-relaxed">
              Tell us where your business stands today and what objectives you need to achieve. We will assess your technical foundations, organic search visibility, Google Business Profile presence, or AI search readiness — and determine the right starting discipline for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-2 px-8 py-4 rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-[0.25em] uppercase font-bold font-heading text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
