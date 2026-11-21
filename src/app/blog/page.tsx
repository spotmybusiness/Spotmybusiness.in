import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogCategories, getAllBlogPosts } from "@/lib/blog";
import BlogDirectoryClient from "@/components/blog/BlogDirectoryClient";

export const metadata: Metadata = {
  title: "Local SEO, Web Engineering & GEO Insights | Spot My Business",
  description:
    "Practical local SEO guides, Google Business Profile audits, Indian website pricing benchmarks, and GEO frameworks for businesses in Kolkata and across India.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/blog",
  },
  openGraph: {
    title: "Local SEO, Web Engineering & GEO Insights | Spot My Business",
    description:
      "Practical local SEO guides, Google Business Profile audits, Indian website pricing benchmarks, and GEO frameworks for businesses in Kolkata and across India.",
    url: "https://www.spotmybusiness.in/blog",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function BlogHubPage() {
  const posts = getAllBlogPosts();
  const categories = getAllBlogCategories();

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
    <main className="blog-editorial bg-primary-bg text-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-12 md:px-12 md:pt-32 md:pb-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-text">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-light-bronze transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page" className="text-heading font-medium">
              Blog
            </li>
          </ol>
        </nav>

        {/* Hero Section */}
        <header className="max-w-3xl py-10 md:py-14">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Field Audits, Pricing Benchmarks &amp; Local GEO Insights
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Actionable SEO, Web Engineering &amp; Local Growth Guides
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-gray-text">
            Transparent engineering benchmarks, verified Kolkata micro-market proof, and practical
            checklists built to help Indian businesses make smarter decisions across websites,
            Google Maps, and AI search.
          </p>
        </header>

        {/* Interactive Featured Spotlight + Category Filters + Search + Editorial Grid */}
        <section className="border-t border-border-color py-10">
          <BlogDirectoryClient posts={posts} categories={categories} />
        </section>

        {/* Thematic Pillars Grid */}
        <section className="border-t border-border-color py-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Content Disciplines
            </p>
            <h2 className="mt-2 text-2xl font-heading font-bold md:text-3xl">
              Foundational Digital Growth Pillars
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-text">
              Spot My Business publishes data-backed playbooks across the four core disciplines that
              drive qualified inquiries for local and pan-India businesses.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <span className="text-xs font-mono text-light-bronze">01 / PILLAR</span>
              <h3 className="mt-3 text-lg font-heading font-bold text-heading">
                Web Engineering &amp; Pricing
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-text">
                Custom website architecture, transparent TCO budgeting, Core Web Vitals, and ongoing website management.
              </p>
              <Link
                href="/services/website-development"
                className="mt-4 inline-block text-xs font-semibold text-light-bronze hover:underline"
              >
                Explore Web Development →
              </Link>
            </div>

            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <span className="text-xs font-mono text-light-bronze">02 / PILLAR</span>
              <h3 className="mt-3 text-lg font-heading font-bold text-heading">
                Google Business Profile
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-text">
                Category mapping, service menus, NAP verification, policy compliance, and Local 3-Pack discovery.
              </p>
              <Link
                href="/services/google-business-profile-optimization"
                className="mt-4 inline-block text-xs font-semibold text-light-bronze hover:underline"
              >
                Explore GBP Service →
              </Link>
            </div>

            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <span className="text-xs font-mono text-light-bronze">03 / PILLAR</span>
              <h3 className="mt-3 text-lg font-heading font-bold text-heading">
                Local SEO &amp; Google Maps
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-gray-text">
                Anti-doorway service-area pages, schema markup, micro-market content, and hyperlocal visibility.
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
                Entity Knowledge Graphs, machine-readable /llms.txt indexing, and review signals for Gemini, ChatGPT, and Claude.
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
              Want a candid audit of your website, Google Maps &amp; search visibility?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-gray-text">
              Spot My Business provides transparent, factual evaluations of your website
              architecture, Google Business Profile, and local search signals—without vanity claims
              or artificial ranking promises.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact?source=blog&article=blog-hub"
                className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-bronze/20"
              >
                Request a Free Local Audit
              </Link>
              <Link
                href="/case-studies"
                className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text transition-colors hover:text-heading"
              >
                View Client Portfolio
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
