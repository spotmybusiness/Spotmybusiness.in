import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";

export default function FeaturedGuides() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section
      id="guides"
      className="relative overflow-hidden border-t border-border-color/40 bg-primary-bg py-24 md:py-32"
    >
      <div className="pointer-events-none absolute right-0 top-1/3 h-96 w-96 rounded-full bg-bronze/5 blur-[110px]" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-light-bronze">
              Field Audits &amp; Guides
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-heading md:text-5xl">
              Practical Local Search &amp; Web Engineering Notes
            </h2>
            <p className="text-sm leading-relaxed text-gray-text md:text-base">
              Step-by-step checklists and technical breakdowns written by our Kolkata team to help local businesses fix Google Business Profile gaps, Maps visibility, and AI search clarity.
            </p>
          </div>

          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border-color bg-secondary-bg px-6 py-3 text-xs font-heading font-bold uppercase tracking-[0.2em] text-light-bronze transition-colors hover:border-bronze/60 hover:text-heading"
          >
            <span>Read All Guides</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border-color bg-secondary-bg transition-all duration-300 hover:border-bronze/50"
            >
              <div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative block aspect-video w-full overflow-hidden bg-primary-bg"
                >
                  <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt}
                    width={640}
                    height={360}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 rounded-full border border-border-color bg-primary-bg/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-light-bronze backdrop-blur-md">
                    {post.category}
                  </span>
                </Link>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3 text-[11px] text-gray-text/80">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-light-bronze" aria-hidden="true" />
                      {post.publishDate}
                    </span>
                    <span aria-hidden="true">•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-light-bronze" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold leading-snug text-heading transition-colors group-hover:text-light-bronze">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="mt-3 line-clamp-3 text-xs leading-relaxed text-gray-text md:text-sm">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border-color/60 px-6 py-4">
                <span className="text-[11px] font-medium text-gray-text">
                  By {post.author.name}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-light-bronze hover:text-heading"
                >
                  <span>Read Guide</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
