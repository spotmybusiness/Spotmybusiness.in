import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface RelatedArticlesSectionProps {
  posts: BlogPost[];
}

export default function RelatedArticlesSection({
  posts,
}: RelatedArticlesSectionProps) {
  if (!posts.length) return null;

  return (
    <section
      aria-labelledby="related-articles-heading"
      className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16"
    >
      <div className="border-t border-border-color pt-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
              Continue Reading
            </p>
            <h2
              id="related-articles-heading"
              className="mt-2 text-2xl font-heading font-bold text-heading md:text-3xl"
            >
              Related Spot My Business Field Guides
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-xs font-semibold text-light-bronze hover:text-champagne underline underline-offset-4 transition-colors"
          >
            View All Published Guides →
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border-color bg-secondary-bg transition-all duration-300 hover:border-bronze/60"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden bg-primary-bg">
                  <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2 text-[11px] text-gray-text">
                    <span className="font-semibold uppercase tracking-wider text-light-bronze">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 shrink-0">
                      <Clock className="w-3 h-3 text-light-bronze" aria-hidden="true" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-2.5 font-heading text-base font-bold leading-snug text-heading group-hover:text-light-bronze transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-gray-text line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5">
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-light-bronze hover:text-champagne transition-colors"
                >
                  <span>Read Guide</span>
                  <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
