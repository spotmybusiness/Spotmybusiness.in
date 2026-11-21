"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Clock,
  Calendar,
  CheckCircle2,
  Search,
  X,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface BlogDirectoryClientProps {
  posts: BlogPost[];
  categories: string[];
}

export default function BlogDirectoryClient({
  posts,
  categories,
}: BlogDirectoryClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const isFiltering = selectedCategory !== "All" || normalizedQuery.length > 0;

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;

      if (!matchesCategory) return false;
      if (!normalizedQuery) return true;

      const haystack = [
        post.title,
        post.excerpt,
        post.category,
        post.targetPillar,
        ...(post.keywords || []),
        ...post.keyHighlights,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [posts, selectedCategory, normalizedQuery]);

  const featuredPost = !isFiltering ? filteredPosts[0] : undefined;
  const gridPosts = !isFiltering ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="space-y-12">
      {/* Category Filters + Semantic Search Bar */}
      <div className="flex flex-col gap-5 rounded-2xl border border-border-color bg-secondary-bg p-5 md:flex-row md:items-center md:justify-between md:p-6">
        <div
          role="group"
          aria-label="Filter articles by category"
          className="flex flex-wrap items-center gap-2"
        >
          {["All", ...categories].map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  active
                    ? "bg-bronze text-white shadow-sm"
                    : "border border-border-color bg-primary-bg text-gray-text hover:border-bronze/60 hover:text-heading"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        <search className="relative w-full md:w-72 shrink-0">
          <label htmlFor="blog-search-input" className="sr-only">
            Search articles by topic or keyword
          </label>
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-text/70"
            aria-hidden="true"
          />
          <input
            id="blog-search-input"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search guides, GST, Maps, GEO..."
            className="w-full rounded-full border border-border-color bg-primary-bg py-2.5 pl-10 pr-9 text-xs text-heading placeholder:text-gray-text/60 focus:border-bronze focus:outline-none focus:ring-2 focus:ring-bronze/30"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search query"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1 text-gray-text hover:text-heading cursor-pointer"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          )}
        </search>
      </div>

      {/* Live Result Status */}
      <div
        role="status"
        aria-live="polite"
        className="flex items-center justify-between text-xs text-gray-text"
      >
        <span>
          Showing <strong className="text-heading">{filteredPosts.length}</strong>{" "}
          {filteredPosts.length === 1 ? "guide" : "guides"}
          {selectedCategory !== "All" ? ` in ${selectedCategory}` : ""}
          {normalizedQuery ? ` matching “${searchQuery.trim()}”` : ""}
        </span>
        {isFiltering && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="font-semibold text-light-bronze underline underline-offset-4 hover:text-champagne cursor-pointer"
          >
            Reset filters
          </button>
        )}
      </div>

      {/* Featured Spotlight Hero Card (Shown on unfiltered view) */}
      {featuredPost && (
        <section aria-labelledby="featured-guide-heading">
          <div className="mb-5 flex items-center justify-between">
            <h2
              id="featured-guide-heading"
              className="text-xl font-heading font-bold md:text-2xl text-heading"
            >
              Featured Cornerstone Guide
            </h2>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-color bg-secondary-bg px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-light-bronze">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: "var(--blog-growth, #7B8E77)" }}
                aria-hidden="true"
              />
              Latest 2026 Edition
            </span>
          </div>

          <article className="group overflow-hidden rounded-2xl border border-border-color bg-secondary-bg transition-all duration-300 hover:border-bronze/60 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="relative aspect-video w-full overflow-hidden bg-primary-bg lg:col-span-6 lg:aspect-auto">
                <Image
                  src={featuredPost.heroImage}
                  alt={featuredPost.heroImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                  fetchPriority="high"
                />
                <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary-bg/90 backdrop-blur-md px-3.5 py-1 border border-border-color/80 text-[11px] font-semibold uppercase tracking-wider text-light-bronze">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-6 md:p-8 lg:col-span-6">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-text mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
                      <time dateTime={featuredPost.publishDate}>
                        {featuredPost.publishDate}
                      </time>
                    </span>
                    <span aria-hidden="true">•</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
                      {featuredPost.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading text-2xl font-bold leading-snug text-heading group-hover:text-light-bronze transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-text">
                    {featuredPost.excerpt}
                  </p>

                  <ul className="mt-6 space-y-2 border-t border-border-color/60 pt-4 text-xs text-gray-text">
                    {featuredPost.keyHighlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: "var(--blog-growth, #7B8E77)" }}
                          aria-hidden="true"
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border-color/60 pt-4">
                  <div>
                    <p className="text-xs font-semibold text-heading">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-[11px] text-gray-text">
                      {featuredPost.author.role}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze to-light-bronze px-5 py-2.5 text-xs font-semibold text-white transition-transform hover:scale-105"
                  >
                    Read Complete Guide
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}

      {/* Editorial Grid */}
      {gridPosts.length > 0 ? (
        <section aria-labelledby="all-guides-heading" className="space-y-6">
          <div className="flex items-center justify-between border-t border-border-color pt-8">
            <h2
              id="all-guides-heading"
              className="text-xl font-heading font-bold md:text-2xl text-heading"
            >
              {isFiltering ? "Matching Guides" : "All Field Audits & Playbooks"}
            </h2>
            <span className="text-xs uppercase tracking-[0.18em] text-light-bronze font-semibold">
              {gridPosts.length} {gridPosts.length === 1 ? "Article" : "Articles"}
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {gridPosts.map((post) => (
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
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-primary-bg/90 backdrop-blur-md px-3 py-1 border border-border-color/80 text-[10px] font-semibold uppercase tracking-wider text-light-bronze">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-gray-text mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
                        <time dateTime={post.publishDate}>{post.publishDate}</time>
                      </span>
                      <span aria-hidden="true">•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold leading-snug text-heading group-hover:text-light-bronze transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-gray-text line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="flex items-center justify-between border-t border-border-color/60 pt-4">
                    <span className="text-[11px] font-medium text-gray-text truncate pr-3">
                      {post.author.name}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="shrink-0 inline-flex items-center gap-1.5 text-xs font-semibold text-light-bronze hover:text-champagne transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <div className="rounded-2xl border border-border-color bg-secondary-bg p-10 text-center">
          <p className="font-heading text-lg font-bold text-heading">
            No guides match your filter
          </p>
          <p className="mt-2 text-sm text-gray-text">
            Try clearing your search term or selecting a different category above.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-5 rounded-full bg-bronze px-5 py-2.5 text-xs font-semibold text-white hover:bg-light-bronze transition-colors cursor-pointer"
          >
            Show All Published Guides
          </button>
        </div>
      )}
    </div>
  );
}
