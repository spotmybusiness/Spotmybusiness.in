import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock, Calendar, CheckCircle2 } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Local SEO, Google Business Profile & GEO Insights | Spot My Business",
  description:
    "Practical local SEO guides, Google Business Profile audits, and GEO architecture frameworks for local businesses in Kolkata and across India.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/blog",
  },
  openGraph: {
    title: "Local SEO, Google Business Profile & GEO Insights | Spot My Business",
    description:
      "Practical local SEO guides, Google Business Profile audits, and GEO architecture frameworks for local businesses in Kolkata and across India.",
    url: "https://www.spotmybusiness.in/blog",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function BlogHubPage() {
  const posts = getAllBlogPosts();

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
            name: "Blog",
            item: "https://www.spotmybusiness.in/blog",
          },
        ],
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
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-light-bronze transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">Blog</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="max-w-3xl py-12 md:py-16">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Field Audits &amp; Local GEO Insights
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Actionable Local SEO &amp; Google Business Profile Guides
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Transparent frameworks, verified Kolkata micro-market proof, and technical alignment
            checklists designed to help local businesses turn Google Maps impressions into qualified phone inquiries.
          </p>
        </header>

        {/* Featured Post Card */}
        <section className="border-t border-border-color py-12">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-heading font-bold md:text-3xl">
              Published Cornerstone Audits &amp; Field Guides
            </h2>
            <span className="text-xs uppercase tracking-[0.18em] text-light-bronze font-semibold">
              Updated 2026 Edition
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-12">
            {posts.map((post, index) => (
              <article
                key={post.slug}
                className="group lg:col-span-12 overflow-hidden rounded-2xl border border-border-color bg-secondary-bg transition-all duration-300 hover:border-bronze/50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Image container */}
                  <div className="relative aspect-video w-full overflow-hidden bg-primary-bg lg:col-span-6 lg:aspect-auto">
                    <Image
                      src={post.heroImage}
                      alt={post.heroImageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="rounded-full bg-primary-bg/90 backdrop-blur-md px-3.5 py-1 border border-border-color/80">
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-light-bronze">
                          {post.category}
                        </span>
                      </div>
                      {post.featured && (
                        <div className="rounded-full bg-emerald-500/20 backdrop-blur-md px-3 py-1 border border-emerald-500/40">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                            Featured Checklist
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content details */}
                  <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-6">
                    <div>
                      <div className="flex items-center gap-4 text-xs text-gray-text/80 mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
                          {post.publishDate}
                        </span>
                        <span aria-hidden="true">•</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-heading text-2xl font-bold leading-snug text-heading group-hover:text-light-bronze transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-gray-text">
                        {post.excerpt}
                      </p>

                      <ul className="mt-6 space-y-2 border-t border-border-color/60 pt-4 text-xs text-gray-text">
                        {post.keyHighlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-2">
                            <CheckCircle2
                              className="w-4 h-4 text-emerald-400 shrink-0"
                              aria-hidden="true"
                            />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-border-color/60 pt-4">
                      <div>
                        <p className="text-xs font-semibold text-heading">{post.author.name}</p>
                        <p className="text-[11px] text-gray-text">{post.author.role}</p>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze to-light-bronze px-5 py-2.5 text-xs font-semibold text-heading transition-transform hover:scale-105"
                      >
                        Read Complete Guide
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Thematic Pillars Grid */}
        <section className="border-t border-border-color py-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Content Disciplines
            </p>
            <h2 className="mt-2 text-2xl font-heading font-bold md:text-3xl">
              Foundational Local Growth Pillars
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-text">
              Spot My Business crafts data-backed insights across the 4 key disciplines that drive qualified traffic and customer calls for local operations.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <span className="text-xs font-mono text-light-bronze">01 / PILLAR</span>
              <h3 className="mt-3 text-lg font-heading font-bold text-heading">
                Google Business Profile
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-text">
                Category mapping, service menu architecture, NAP verification, and local pack discovery across Kolkata and metro areas.
              </p>
              <Link
                href="/services/google-business-profile-optimization"
                className="mt-4 inline-block text-xs font-semibold text-light-bronze hover:underline"
              >
                Explore GBP Service →
              </Link>
            </div>

            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <span className="text-xs font-mono text-light-bronze">02 / PILLAR</span>
              <h3 className="mt-3 text-lg font-heading font-bold text-heading">
                Google Maps SEO
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-text">
                Geo-grid visibility, local link signals, citation consistency, and distance proximity calibration.
              </p>
              <Link
                href="/services/google-maps-seo"
                className="mt-4 inline-block text-xs font-semibold text-light-bronze hover:underline"
              >
                Explore Maps Service →
              </Link>
            </div>

            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <span className="text-xs font-mono text-light-bronze">03 / PILLAR</span>
              <h3 className="mt-3 text-lg font-heading font-bold text-heading">
                Local SEO Architecture
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-text">
                Service-area landing pages, schema markup, micro-market content, and anti-doorway website structuring.
              </p>
              <Link
                href="/services/local-seo"
                className="mt-4 inline-block text-xs font-semibold text-light-bronze hover:underline"
              >
                Explore Local SEO →
              </Link>
            </div>

            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <span className="text-xs font-mono text-light-bronze">04 / PILLAR</span>
              <h3 className="mt-3 text-lg font-heading font-bold text-heading">
                AI Search Optimization (GEO)
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-text">
                Generative engine optimization for Google AI Overviews, Perplexity, and ChatGPT entity citation networks.
              </p>
              <Link
                href="/services/ai-search-optimization"
                className="mt-4 inline-block text-xs font-semibold text-light-bronze hover:underline"
              >
                Explore GEO Service →
              </Link>
            </div>
          </div>
        </section>

        {/* Standard CTA Block */}
        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12 border border-border-color">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Get In Touch
            </p>
            <h2 className="mt-3 text-3xl font-heading font-bold">
              Want a candid audit of your Google Maps &amp; website visibility?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-text">
              Spot My Business provides transparent, factual evaluations of your Google Business Profile,
              website service pages, and local ranking signals—without vanity claims or artificial guarantees.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading transition-all hover:shadow-lg hover:shadow-bronze/20"
              >
                Request a Free Local Audit
              </Link>
              <Link
                href="/case-studies"
                className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text transition-colors hover:text-heading"
              >
                View Client Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
