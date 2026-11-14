import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ArrowRight,
  Clock,
  Calendar,
  MapPin,
  Sparkles,
  BookOpen,
  ShieldCheck,
  AlertTriangle,
  Database,
  Layers,
  Cpu,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface PostProps {
  post: BlogPost;
}

const aiEngineWeightMatrix = [
  {
    engine: "ChatGPT (OpenAI)",
    marketShare: "52.1% AI Search Share",
    retrievalArchitecture:
      "Real-time Bing / Web RAG search scanning the Top 5–10 ranked organic web results on commercial and local queries.",
    primaryWeights:
      "Authority & List Mentions (41%) • Website Content & Schema (32%) • Reviews & Reputation (27%)",
    criticalTakeaway:
      "If your website does not rank on Page 1 of traditional search or appear in authoritative industry roundups, ChatGPT's live retrieval rarely sees your brand.",
  },
  {
    engine: "Google Gemini (General / B2B)",
    marketShare: "26.9% AI Search Share",
    retrievalArchitecture:
      "Google Search Index + Knowledge Graph grounding + AI Overviews passage synthesis.",
    primaryWeights:
      "Website Content & Entity Schema (38%) • Authority & Citations (36%) • Reviews & Sentiment (26%)",
    criticalTakeaway:
      "Clean semantic HTML, interconnected JSON-LD (@graph), and self-contained 40–55 word answer blocks drive AI Overview citations.",
  },
  {
    engine: "Google Gemini (Local Search)",
    marketShare: "Included in 26.9% Share",
    retrievalArchitecture:
      "Google Business Profile (GBP) + Google Maps index + verified third-party local directories + linked website.",
    primaryWeights:
      "Local Business Reviews (38%) • Directories & Citations (29%) • Website Authority (22%) • Social Signals (11%)",
    criticalTakeaway:
      "Enforces a strict 3.5-star minimum rating gate—local businesses below 3.5★ on Google Maps are filtered out of Gemini local recommendations.",
  },
  {
    engine: "Claude AI (Anthropic)",
    marketShare: "10.6% AI Search Share",
    retrievalArchitecture:
      "Triggers live Brave Search RAG retrieval on 67%–81% of commercial vendor and comparison prompts.",
    primaryWeights:
      "79%–87% citation overlap with top organic search pages, structured comparison tables, and transparent factual documentation.",
    criticalTakeaway:
      "Favors non-promotional technical documentation, structured HTML tables, and verifiable service scope definitions over marketing fluff.",
  },
];

const geoVsAeoVsSeoMatrix = [
  {
    dimension: "Primary Objective",
    seo: "Rank dedicated URLs in Google Search blue links and the Google Maps Local 3-Pack.",
    aeo: "Extract concise, direct answers into Featured Snippets, People Also Ask (PAA), and voice responses.",
    geo: "Corroborate brand entities, credentials, and reviews across the web so LLMs synthesize and cite your business.",
  },
  {
    dimension: "Target Platforms",
    seo: "Google Search, Google Maps, Bing Search, Brave Search.",
    aeo: "Google Featured Snippets, PAA boxes, Siri, Google Assistant, Alexa.",
    geo: "Google AI Overviews, ChatGPT Search, Perplexity, Google Gemini, Claude AI, Microsoft Copilot.",
  },
  {
    dimension: "Core Technical Mechanism",
    seo: "Crawler indexation, URL hierarchy, internal linking, Core Web Vitals (LCP, INP, CLS), and backlinks.",
    aeo: "Question-phrased H2/H3 headers followed immediately by 40–55 word self-contained definition passages.",
    geo: "Retrieval-Augmented Generation (RAG) grounding across top organic pages, Knowledge Graph entities, GBP reviews, and citations.",
  },
  {
    dimension: "On-Page Content Format",
    seo: "Comprehensive service and location landing pages with clear H1–H3 semantic hierarchy.",
    aeo: "Above-the-fold Quick Answer boxes, numbered step lists, and native HTML FAQ disclosures.",
    geo: "High factual density, comparison matrices (<table>), explicit operational scope, and machine-readable /llms.txt indexes.",
  },
  {
    dimension: "Schema.org Vocabulary",
    seo: "BreadcrumbList, WebPage, LocalBusiness, Service (with areaServed).",
    aeo: "Speakable patterns, structured Q&A formatting, and clear heading-to-paragraph DOM adjacency.",
    geo: "Interconnected @graph linking Organization, LocalBusiness, ProfessionalService, BlogPosting, and sameAs authority URLs.",
  },
  {
    dimension: "Off-Page Trust Signals",
    seo: "Editorial backlinks, local citations, and Google Business Profile completeness.",
    aeo: "Domain topical authority and high organic click-through rate (CTR) on question queries.",
    geo: "Multi-source NAP symmetry (29% Gemini Local weight) and verified Google review velocity maintaining ≥3.5★ (38% weight).",
  },
  {
    dimension: "Primary Measurement KPIs",
    seo: "GSC Impressions, organic clicks, keyword positions, and GBP call/direction taps.",
    aeo: "Featured Snippet ownership, PAA visibility, and zero-click brand impression growth.",
    geo: "AI referral sessions in GA4 (chatgpt.com, perplexity.ai, gemini.google.com, claude.ai) and brand inclusion in test prompts.",
  },
];

export default function AiSearchOptimizationGeoVsAeoVsSeoPost({ post }: PostProps) {
  return (
    <article className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-text pt-20 pb-6">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-light-bronze transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">→</li>
          <li>
            <Link href="/blog" className="hover:text-light-bronze transition-colors">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">→</li>
          <li aria-current="page" className="text-heading font-medium line-clamp-1">
            AI Search Optimization: GEO vs. AEO vs. SEO
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl">
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-light-bronze">
          <span>{post.category}</span>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            {post.readTime}
          </span>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
            Last Updated: <time dateTime={post.modifiedDate}>November 14, 2026</time>
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-heading font-bold leading-tight text-heading sm:text-4xl md:text-5xl">
          AI Search Optimization Explained: How GEO, AEO, and Traditional SEO Work Together in 2026
        </h1>

        <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-text">
          Business owners and decision-makers increasingly ask ChatGPT, Google Gemini, Perplexity, and Claude who to hire—yet most companies treat &ldquo;AI search&rdquo; either as magic or as a replacement for traditional SEO. Here is what 2026 retrieval data across 13,604 queries reveals about how generative engines actually select brands, and how our Kolkata engineering team unifies SEO, AEO, and GEO into one factual architecture.
        </p>

        {/* Credibility Byline & Revision Log */}
        <div className="mt-6 flex flex-col gap-4 border-y border-border-color py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-text">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-bg border border-border-color font-heading font-bold text-light-bronze">
                SMB
              </div>
              <div>
                <p className="font-semibold text-heading">
                  Reviewed by: {post.author.name}
                </p>
                <p className="text-[11px] text-gray-text">
                  Headquarters: Middle Rd, Sen Para, Santoshpur, Kolkata 700075
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-text">
              <MapPin className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
              <span>Serving Kolkata &amp; 20 Pan-India Markets</span>
            </div>
          </div>

          {/* Expandable Technical Revision Log */}
          <details className="group rounded-xl border border-border-color bg-secondary-bg/60 px-4 py-2.5 text-xs text-gray-text">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-heading">
              <span className="inline-flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
                Technical Revision &amp; Methodology Change Log (2026 Edition)
              </span>
              <span
                aria-hidden="true"
                className="text-light-bronze transition-transform duration-200 group-open:rotate-180"
              >
                ▼
              </span>
            </summary>
            <ol className="mt-3 space-y-1.5 border-t border-border-color/60 pt-3 text-[11px] leading-relaxed">
              <li>
                <strong className="text-heading">Nov 14, 2026:</strong> Published initial 2026 AI Search Optimization guide synthesizing First Page Sage&rsquo;s October 2026 study (13,604 commercial &amp; local queries across ChatGPT, Gemini, and Claude) and Siege Media&rsquo;s GEO passage formatting standards.
              </li>
              <li>
                <strong className="text-heading">Verification Standard:</strong> Added empirical local review exclusion documentation (Google Gemini&rsquo;s 38% local review weighting and strict &ge;3.5★ cutoff) alongside recorded client reputation benchmarks from our Kolkata and pan-India portfolio.
              </li>
            </ol>
          </details>
        </div>
      </header>

      {/* Main Layout Grid: Content + Sticky TOC Sidebar */}
      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-10">
          {/* Above-the-Fold Quick Answer Box */}
          <aside
            aria-label="Quick Answer Summary"
            className="rounded-2xl border-2 border-bronze/50 bg-secondary-bg p-6 md:p-8 shadow-lg"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Quick Answer: SEO vs. AEO vs. GEO in 46 Words</span>
            </div>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-heading font-medium">
              <strong>Traditional SEO</strong> gets your web pages crawled and ranked in search indexes; <strong>Answer Engine Optimization (AEO)</strong> structures direct Q&amp;A passages for Featured Snippets and voice assistants; and <strong>Generative Engine Optimization (GEO)</strong> corroborates your entity schema, citations, and &ge;3.5★ reviews so AI engines recommend your brand.
            </p>
            <div className="mt-5 border-t border-border-color pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-light-bronze mb-3">
                Core Sections in This 2026 AI Search Guide:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-gray-text">
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#how-ai-engines-select-brands" className="hover:text-light-bronze underline underline-offset-2">
                    1. How ChatGPT, Gemini &amp; Claude Pick Brands (Data)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#gemini-3-5-star-filter" className="hover:text-light-bronze underline underline-offset-2">
                    2. Gemini&rsquo;s 38% Review Weight &amp; 3.5★ Exclusion Gate
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#geo-vs-aeo-vs-seo-comparison" className="hover:text-light-bronze underline underline-offset-2">
                    3. GEO vs. AEO vs. SEO (3-Column Technical Matrix)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#four-pillars-ai-search-readiness" className="hover:text-light-bronze underline underline-offset-2">
                    4. The 4 Technical Pillars of AI Search Readiness
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#why-no-agency-can-guarantee-ai-citations" className="hover:text-light-bronze underline underline-offset-2">
                    5. Why Honest Agencies Never Guarantee AI Citations
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#faq" className="hover:text-light-bronze underline underline-offset-2">
                    6. Frequently Asked Questions (RAG &amp; Schema)
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Hero Visual */}
          <figure className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
            <Image
              src={post.heroImage}
              alt={post.heroImageAlt}
              width={1200}
              height={675}
              priority
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 800px"
              className="w-full h-auto object-cover"
            />
            <figcaption className="border-t border-border-color px-5 py-3 text-xs text-gray-text">
              Figure 1: Traditional SEO provides the indexed web foundation, AEO formats direct question-answer passages, and GEO corroborates your entity facts across Google Maps, directories, and JSON-LD graphs.
            </figcaption>
          </figure>

          {/* Section 1: How Generative AI Engines Select Brand Recommendations */}
          <section id="how-ai-engines-select-brands" className="space-y-5 pt-2">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              How Do Generative AI Engines Select Brand Recommendations?
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              When a prospective customer types <em>&ldquo;Which relocation company in Kolkata handles door-to-door car transport?&rdquo;</em> or <em>&ldquo;Who offers reliable local SEO services in India?&rdquo;</em> into ChatGPT, Google Gemini, Perplexity, or Claude, the language model does not rely solely on static pre-training memory. Instead, modern answer engines execute <strong>Retrieval-Augmented Generation (RAG)</strong>: they convert the user&rsquo;s prompt into search queries, fetch live web pages and directory profiles, cross-verify entity facts, and synthesize a cited response.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              According to{" "}
              <a
                href="https://firstpagesage.com/seo-blog/generative-engine-optimization-geo-explanation/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline underline-offset-2 hover:text-champagne"
              >
                First Page Sage&rsquo;s October 2026 Generative Engine Optimization study
              </a>{" "}
              analyzing <strong>13,604 commercial and local queries</strong>, each major AI platform weights retrieval signals differently based on its underlying search index:
            </p>

            <ul className="space-y-3 text-sm leading-relaxed text-gray-text pl-1">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">ChatGPT (52.1% AI search market share):</strong> Grounded via live Bing and web search retrieval, ChatGPT scans the <strong>top 5 to 10 organic search results</strong> alongside authoritative third-party listicles and directory comparisons (`41%` weight on authority &amp; list mentions, `32%` on website content &amp; schema, and `27%` on reviews).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Google Gemini &amp; AI Overviews (26.9% share):</strong> Grounded directly in Google&rsquo;s primary search index, Knowledge Graph, and Google Business Profile (GBP) ecosystem. For <strong>local searches</strong>, Gemini assigns <strong>38% of its recommendation weight to Local Business Reviews</strong>, <strong>29% to Directories &amp; Citations</strong>, <strong>22% to Website Authority &amp; Content</strong>, and <strong>11% to Social Signals</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Claude AI (10.6% share):</strong> Triggers live Brave Search RAG retrieval on <strong>67% to 81% of commercial prompts</strong>, showing a <strong>79% to 87% citation overlap</strong> with pages that already rank in the top organic search positions and publish structured HTML comparison tables.
                </span>
              </li>
            </ul>

            {/* HTML Element 1: Generative AI Engine Weighting Matrix */}
            <div
              tabIndex={0}
              role="region"
              aria-labelledby="ai-engine-weights-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="ai-engine-weights-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 1: 2026 Generative AI Engine Retrieval &amp; Signal Weighting Matrix (Source: First Page Sage 13,604-Query Benchmark)
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">
                      AI Answer Engine
                    </th>
                    <th scope="col" className="p-4 font-bold">
                      2026 Share
                    </th>
                    <th scope="col" className="p-4 font-bold">
                      RAG Retrieval Source
                    </th>
                    <th scope="col" className="p-4 font-bold">
                      Empirical Signal Weights
                    </th>
                    <th scope="col" className="p-4 font-bold">
                      Practical Engineering Implication
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {aiEngineWeightMatrix.map((row, idx) => (
                    <tr
                      key={row.engine}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.engine}
                      </th>
                      <td className="p-4 align-top font-mono text-xs text-light-bronze">
                        {row.marketShare}
                      </td>
                      <td className="p-4 align-top">{row.retrievalArchitecture}</td>
                      <td className="p-4 align-top font-medium text-heading">
                        {row.primaryWeights}
                      </td>
                      <td className="p-4 align-top text-emerald-400/95">
                        {row.criticalTakeaway}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* HTML Element 2: Gemini <3.5-Star Exclusion Callout Box */}
            <div
              id="gemini-3-5-star-filter"
              className="mt-8 rounded-2xl border-2 border-amber-500/40 bg-secondary-bg p-6 md:p-8"
            >
              <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-400">
                <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Critical Local AI Filter: Google Gemini&rsquo;s 3.5-Star Minimum Rating Cutoff</span>
              </div>
              <h3 className="mt-3 text-lg md:text-xl font-heading font-bold text-heading">
                Why Local Businesses Below 3.5★ Are Excluded From Gemini AI Recommendations
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-text">
                One of the most consequential findings in 2026 local search telemetry is that <strong>Google Gemini enforces a strict 3.5-star minimum rating gate</strong> on local commercial queries. Because Local Business Reviews carry <strong>38% of Gemini Local&rsquo;s algorithmic weight</strong>, a business with a `3.3★` or `3.4★` Google Business Profile rating is systematically filtered out of conversational AI recommendations—even if its website has clean code.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-text">
                This is why our{" "}
                <Link
                  href="/services/ai-search-optimization"
                  className="text-light-bronze underline underline-offset-2 hover:text-champagne"
                >
                  AI Search Optimization (GEO &amp; AEO)
                </Link>{" "}
                work at Spot My Business is directly integrated with{" "}
                <Link
                  href="/services/reputation-management"
                  className="text-light-bronze underline underline-offset-2 hover:text-champagne"
                >
                  ethical Reputation Management
                </Link>
                . Across our recorded client snapshots—including <strong>Science Squad</strong> in Dankuni (`5.0★, 30+ reviews`), <strong>Bharat Relocators</strong> in Haltu (`4.9★, 300+ reviews`), <strong>Nayak Decorators and Caterer</strong> in Behala (`4.8★, 50+ reviews`), and <strong>Republic Packers and Movers</strong> (`4.7★, 600+ reviews`)—maintaining authentic review velocity well above `3.5★` protects visibility across both the Google Maps 3-Pack and Gemini AI Overviews.
              </p>
            </div>

            {/* Visual 1: Generative AI Local Ranking Weights Diagram */}
            <figure className="mt-6 overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
              <Image
                src="/images/blog/generative-ai-local-ranking-weights-2026.webp"
                alt="2026 Generative AI Engine Ranking Weights comparing ChatGPT, Google Gemini Local, and Claude AI with the 3.5-star exclusion filter"
                width={1200}
                height={675}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 800px"
                className="w-full h-auto object-cover"
              />
              <figcaption className="border-t border-border-color px-5 py-3 text-xs text-gray-text">
                Figure 2: Signal weight breakdown across ChatGPT (52.1% share), Google Gemini Local (26.9% share, 38% review weight), and Claude AI (10.6% share), alongside recorded Spot My Business client reputation benchmarks.
              </figcaption>
            </figure>
          </section>

          {/* Section 2: GEO vs. AEO vs. Conventional SEO Comparison */}
          <section id="geo-vs-aeo-vs-seo-comparison" className="space-y-5 border-t border-border-color pt-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              GEO vs. AEO vs. Conventional SEO: Complete Technical Comparison
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              A common misconception pitched by opportunistic marketing vendors is that &ldquo;traditional SEO is dead&rdquo; and must be replaced by a separate AI subscription. In reality, <strong>GEO and AEO cannot function without traditional SEO</strong>. If Googlebot, Bingbot, or Brave cannot crawl and index your HTML pages—or if your pages lack dedicated service URLs—RAG systems have nothing to retrieve when generating an answer.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              As we outline on our{" "}
              <Link
                href="/services/ai-search-optimization"
                className="text-light-bronze underline underline-offset-2 hover:text-champagne"
              >
                AI Search Optimization service page
              </Link>
              , these three disciplines form a stacked engineering layer rather than competing silos:
            </p>

            {/* 3-Column Comparison Matrix */}
            <div
              tabIndex={0}
              role="region"
              aria-labelledby="geo-aeo-seo-matrix-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="geo-aeo-seo-matrix-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 2: Technical Comparison — Conventional SEO vs. Answer Engine Optimization (AEO) vs. Generative Engine Optimization (GEO)
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">
                      Architecture Dimension
                    </th>
                    <th scope="col" className="p-4 font-bold">
                      Conventional SEO (Layer 1)
                    </th>
                    <th scope="col" className="p-4 font-bold">
                      Answer Engine Optimization — AEO (Layer 2)
                    </th>
                    <th scope="col" className="p-4 font-bold text-light-bronze">
                      Generative Engine Optimization — GEO (Layer 3)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {geoVsAeoVsSeoMatrix.map((row, idx) => (
                    <tr
                      key={row.dimension}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.dimension}
                      </th>
                      <td className="p-4 align-top">{row.seo}</td>
                      <td className="p-4 align-top">{row.aeo}</td>
                      <td className="p-4 align-top text-heading font-medium">
                        {row.geo}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Mid-Post Conversion Block */}
          <aside
            aria-label="AI Search Audit Consultation"
            className="rounded-2xl border border-bronze/40 bg-gradient-to-br from-secondary-bg to-primary-bg p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                  Entity &amp; Schema Diagnostic
                </p>
                <h3 className="text-xl font-heading font-bold text-heading">
                  Want to Know How AI Engines Currently Interpret Your Business?
                </h3>
                <p className="text-xs md:text-sm text-gray-text leading-relaxed">
                  Our Kolkata engineering team audits your JSON-LD entity graph, Google Business Profile consistency, and on-page answer structure so search crawlers and generative models read accurate facts.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-xs md:text-sm font-semibold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all"
                >
                  <span>Request an Entity Audit</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Section 3: The 4 Technical Pillars of AI Search Readiness */}
          <section id="four-pillars-ai-search-readiness" className="space-y-8 border-t border-border-color pt-10">
            <div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
                The 4 Technical Pillars of AI Search Readiness at Spot My Business
              </h2>
              <p className="mt-3 text-sm md:text-base leading-relaxed text-gray-text">
                Instead of chasing speculative &ldquo;prompt-injection hacks&rdquo; that violate search guidelines,{" "}
                <a
                  href="https://www.siegemedia.com/strategy/generative-engine-optimization"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-bronze underline underline-offset-2 hover:text-champagne"
                >
                  Siege Media&rsquo;s core GEO research
                </a>{" "}
                and{" "}
                <a
                  href="https://developers.google.com/search/docs/appearance/structured-data"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-bronze underline underline-offset-2 hover:text-champagne"
                >
                  Google Search Central&rsquo;s structured data documentation
                </a>{" "}
                confirm that generative engines reward clarity, schema disambiguation, and multi-source agreement. Here are the four concrete engineering pillars we implement for clients across Kolkata and India:
              </p>
            </div>

            {/* Pillar 1 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                  01
                </span>
                <h3 className="text-lg md:text-xl font-heading font-bold text-heading">
                  Pillar 1: Knowledge Graph &amp; Interconnected Entity Schema (`@graph`)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-text">
                When two businesses share a similar name in different cities, an LLM relies on structured data to disambiguate them. As part of our{" "}
                <Link
                  href="/services/website-seo"
                  className="text-light-bronze underline underline-offset-2 hover:text-champagne"
                >
                  Website SEO and schema engineering
                </Link>
                , we deploy an interconnected JSON-LD `@graph` in pre-rendered HTML that explicitly links your `LocalBusiness` / `ProfessionalService` identity, exact postal address, geo-coordinates, `areaServed` definitions, and `sameAs` social/directory URLs:
              </p>
              <figure className="mt-3">
                <figcaption
                  id="entity-schema-code-caption"
                  className="text-xs font-mono text-light-bronze mb-2"
                >
                  Example: Entity Disambiguation JSON-LD Pattern Used by Spot My Business
                </figcaption>
                <pre
                  role="region"
                  aria-labelledby="entity-schema-code-caption"
                  tabIndex={0}
                  className="overflow-x-auto rounded-xl border border-border-color bg-primary-bg p-4 text-xs font-mono text-gray-text leading-relaxed focus:outline-none focus:ring-2 focus:ring-bronze"
                >
                  <code>{`{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://www.spotmybusiness.in/#organization",
      "name": "Spot My Business",
      "url": "https://www.spotmybusiness.in",
      "telephone": ["+91 9007960333", "+91 8597913452"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Middle Rd, Sen Para, Santoshpur",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "postalCode": "700075",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/spot-my-business/",
        "https://www.instagram.com/spotmybusiness.in/",
        "https://x.com/spotmybusinesss"
      ]
    }
  ]
}`}</code>
                </pre>
              </figure>
            </div>

            {/* Pillar 2 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 md:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                  02
                </span>
                <h3 className="text-lg md:text-xl font-heading font-bold text-heading">
                  Pillar 2: Question-Based Subheadings &amp; Conversational Answer Blocks (AEO)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-text">
                RAG retrieval pipelines split web pages into discrete semantic chunks (typically 150 to 300 tokens) and score how directly a chunk answers the user&rsquo;s prompt. If your service page buries its core explanation underneath 400 words of vague agency slogans, the passage scorer skips it.
              </p>
              <p className="text-sm leading-relaxed text-gray-text">
                We structure priority service pages and guides with <strong>natural-language question H2/H3 headings</strong> followed immediately by a <strong>40-to-55-word self-contained definition paragraph</strong>, supplemented by semantic HTML <code className="text-light-bronze">&lt;table&gt;</code> comparisons and native <code className="text-light-bronze">&lt;details&gt;</code> FAQ layers that answer real buyer objections (scope, timelines, service boundaries, and remote workflow).
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 md:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                  03
                </span>
                <h3 className="text-lg md:text-xl font-heading font-bold text-heading">
                  Pillar 3: Multi-Source NAP Consistency &amp; Review Governance (&ge;3.5★)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-text">
                Because Google Gemini Local weights <strong>Directories &amp; Citations at 29%</strong> and <strong>Local Business Reviews at 38%</strong>, an AI model will hesitate to recommend a business whose website lists one phone number or service area while its Google Business Profile or Indian directory listing (such as Sulekha or Justdial) lists another.
              </p>
              <p className="text-sm leading-relaxed text-gray-text">
                We synchronize your Name, Address, Phone number, operating hours, and service categories across your website,{" "}
                <Link
                  href="/blog/google-business-profile-optimization-checklist"
                  className="text-light-bronze underline underline-offset-2 hover:text-champagne"
                >
                  Google Business Profile
                </Link>
                , and verified citations—while establishing a steady, policy-compliant customer review workflow that keeps your rating well above Gemini&rsquo;s `3.5★` cutoff.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 md:p-8 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                  04
                </span>
                <h3 className="text-lg md:text-xl font-heading font-bold text-heading">
                  Pillar 4: Pre-Rendered HTML Accessibility &amp; Machine-Readable `/llms.txt`
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-text">
                Many AI crawlers (such as `GPTBot`, `ClaudeBot`, and `PerplexityBot`) do not execute heavy client-side JavaScript bundles when fetching pages at inference time. If your core service descriptions only render after a 2 MB client-side script hydrates, automated agents see an empty shell.
              </p>
              <p className="text-sm leading-relaxed text-gray-text">
                Every content page on `spotmybusiness.in`—and on the custom Next.js platforms we build for clients—is pre-rendered as static HTML (`0 KB` unnecessary page-level JS) and paired with a curated root{" "}
                <a
                  href="/llms.txt"
                  className="text-light-bronze underline underline-offset-2 hover:text-champagne"
                >
                  /llms.txt
                </a>{" "}
                markdown directory so AI agents can inspect our canonical service hierarchy, verified Kolkata headquarters, and cornerstone guides in a single request.
              </p>
            </div>
          </section>

          {/* Section 4: Why Honest Agencies Never Guarantee AI Citations */}
          <section
            id="why-no-agency-can-guarantee-ai-citations"
            className="space-y-4 border-t border-border-color pt-10"
          >
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              Why Honest Agencies Never Guarantee AI Citations (Understanding RAG Probabilities)
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Just as no ethical SEO consultant can guarantee a <code className="text-light-bronze">#1</code> Google ranking, <strong>no agency can guarantee that ChatGPT, Gemini, or Perplexity will cite your business on every prompt</strong>. Large Language Models use probabilistic token sampling (<code className="text-light-bronze">temperature &gt; 0</code>), personalize responses based on user conversation history and device coordinates, and update their retrieval weights continuously.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              As documented in our{" "}
              <Link
                href="/faq#guarantees-expectations"
                className="text-light-bronze underline underline-offset-2 hover:text-champagne"
              >
                Transparency &amp; Guarantees FAQ
              </Link>
              , what Spot My Business <em>does</em> guarantee is deterministic engineering quality:
            </p>
            <div className="grid gap-4 sm:grid-cols-3 pt-2">
              <div className="rounded-xl border border-border-color bg-secondary-bg p-5">
                <Database className="w-5 h-5 text-light-bronze" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-heading font-bold text-heading">
                  100% Schema Validity
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-text">
                  Standards-compliant JSON-LD (`LocalBusiness`, `Service`, `BreadcrumbList`, `BlogPosting`) verified with zero syntax errors.
                </p>
              </div>
              <div className="rounded-xl border border-border-color bg-secondary-bg p-5">
                <Layers className="w-5 h-5 text-light-bronze" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-heading font-bold text-heading">
                  Cross-Surface Symmetry
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-text">
                  1:1 alignment of NAP, categories, and service boundaries across your website, GBP, and local citations.
                </p>
              </div>
              <div className="rounded-xl border border-border-color bg-secondary-bg p-5">
                <Cpu className="w-5 h-5 text-light-bronze" aria-hidden="true" />
                <h3 className="mt-3 text-sm font-heading font-bold text-heading">
                  Pre-Rendered Crawlability
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-text">
                  Clean semantic HTML (<code className="text-light-bronze">H1</code>–<code className="text-light-bronze">H3</code>, <code className="text-light-bronze">&lt;table&gt;</code>, <code className="text-light-bronze">&lt;details&gt;</code>), XML sitemaps, and <code className="text-light-bronze">/llms.txt</code> accessible to every search and AI bot.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5: Frequently Asked Questions (Native HTML <details>) */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="space-y-4 border-t border-border-color pt-10"
          >
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-heading font-bold text-heading">
              Frequently Asked Questions About GEO, AEO &amp; AI Search
            </h2>
            <p className="text-sm text-gray-text">
              Direct answers to the questions business owners ask our Kolkata team when evaluating AI Search Optimization:
            </p>

            <div className="space-y-4 mt-6">
              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>What is the difference between SEO, AEO, and GEO?</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-light-bronze transition-transform duration-300 group-open:rotate-180"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-text border-t border-border-color/50 pt-4">
                  <p>
                    <strong>Traditional SEO</strong> focuses on technical crawlability, page speed, and keyword relevance so your URLs rank in organic search results and Google Maps. <strong>Answer Engine Optimization (AEO)</strong> formats on-page content with question-based headings and concise 40–55 word answer blocks to win Featured Snippets and voice search answers. <strong>Generative Engine Optimization (GEO)</strong> aligns your website&rsquo;s JSON-LD entity schema, third-party directory citations, and Google Business Profile reviews so LLM-powered platforms (ChatGPT, Google Gemini, Perplexity, and Claude) can verify and recommend your brand in synthesized responses.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>How do ChatGPT, Google Gemini, and Claude decide which local businesses to recommend?</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-light-bronze transition-transform duration-300 group-open:rotate-180"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-text border-t border-border-color/50 pt-4">
                  <p>
                    They use Retrieval-Augmented Generation (RAG) to cross-check live search indexes and business directories. In First Page Sage&rsquo;s October 2026 study of 13,604 queries, ChatGPT scans the top 5–10 organic search results and authoritative industry lists; Claude triggers live Brave Search retrieval on 67%–81% of commercial prompts; and Google Gemini Local weights Local Business Reviews at 38%, Directories &amp; Citations at 29%, Website Authority at 22%, and Social Signals at 11%—while filtering out local businesses with under a 3.5-star Google rating.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Can an SEO agency guarantee placement in ChatGPT, Gemini, or Perplexity?</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-light-bronze transition-transform duration-300 group-open:rotate-180"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-text border-t border-border-color/50 pt-4">
                  <p>
                    No. Generative AI models are probabilistic systems whose outputs vary by user location, prompt phrasing, conversation history, and live retrieval updates. Any agency promising &ldquo;guaranteed #1 ChatGPT placement&rdquo; is misrepresenting how RAG architecture works. An honest engineering partner builds the verifiable technical inputs—clean pre-rendered HTML, interconnected JSON-LD schema, consistent NAP citations, and authentic review governance—that maximize your probability of being retrieved and cited accurately.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Does AI Search Optimization replace Google Business Profile or Local SEO?</span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-light-bronze transition-transform duration-300 group-open:rotate-180"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-text border-t border-border-color/50 pt-4">
                  <p>
                    No—it depends directly on them. When a user asks an AI assistant for a local service provider in Kolkata, Delhi, Mumbai, or Bengaluru, the model verifies the business against Google Maps, local directories, and top-ranking local landing pages. Without a verified Google Business Profile and well-structured Local SEO pages, generative engines lack the ground-truth entity data required to recommend your business confidently.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Bottom Conversion Block */}
          <section className="rounded-2xl bg-secondary-bg p-8 md:p-10 border border-border-color mt-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Standards-Based Entity &amp; Search Engineering</span>
            </div>
            <h2 className="mt-2 text-2xl font-heading font-bold text-heading">
              Discuss Your Website&rsquo;s AI Search &amp; Entity Readiness
            </h2>
            <p className="mt-3 text-sm text-gray-text leading-relaxed">
              Operating from our headquarters in Santoshpur, Kolkata, Spot My Business helps businesses across Kolkata and 20 Indian markets unify their website architecture, JSON-LD entity schema, Google Business Profile, and review workflows. No speculative tricks or artificial ranking guarantees—just transparent engineering built to last.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading transition-all hover:shadow-lg hover:shadow-bronze/20"
              >
                Talk to Our Engineering Team
              </Link>
              <Link
                href="/services/ai-search-optimization"
                className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text transition-colors hover:text-heading"
              >
                Explore AI Search Optimization →
              </Link>
            </div>
          </section>
        </div>

        {/* Sticky Sidebar Area */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-28 space-y-6">
            {/* Jump-Link Table of Contents */}
            <nav
              aria-label="Article Section Navigation"
              className="rounded-2xl border border-border-color bg-secondary-bg p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                On This Page
              </p>
              <h3 className="mt-2 text-base font-heading font-bold text-heading">
                GEO vs. AEO vs. SEO Jump Links
              </h3>

              <ol className="mt-4 space-y-2.5 text-xs text-gray-text">
                <li>
                  <a
                    href="#how-ai-engines-select-brands"
                    className="hover:text-light-bronze transition-colors block"
                  >
                    1. How AI Engines Select Brands (13,604 Queries)
                  </a>
                </li>
                <li>
                  <a
                    href="#gemini-3-5-star-filter"
                    className="hover:text-light-bronze transition-colors block"
                  >
                    2. Gemini&rsquo;s 38% Review Weight &amp; 3.5★ Gate
                  </a>
                </li>
                <li>
                  <a
                    href="#geo-vs-aeo-vs-seo-comparison"
                    className="hover:text-light-bronze transition-colors block"
                  >
                    3. GEO vs. AEO vs. SEO Comparison Table
                  </a>
                </li>
                <li>
                  <a
                    href="#four-pillars-ai-search-readiness"
                    className="hover:text-light-bronze transition-colors block"
                  >
                    4. 4 Technical Pillars of AI Readiness
                  </a>
                </li>
                <li>
                  <a
                    href="#why-no-agency-can-guarantee-ai-citations"
                    className="hover:text-light-bronze transition-colors block"
                  >
                    5. Why RAG Citations Cannot Be Guaranteed
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-light-bronze transition-colors block font-semibold text-heading"
                  >
                    • Frequently Asked Questions
                  </a>
                </li>
              </ol>

              <div className="mt-6 border-t border-border-color pt-4">
                <Link
                  href="/contact"
                  className="w-full inline-block text-center rounded-xl bg-primary-bg border border-border-color py-2.5 text-xs font-semibold text-light-bronze hover:border-bronze transition-colors"
                >
                  Request an AI &amp; Entity Audit →
                </Link>
              </div>
            </nav>

            {/* Related Service Pillars */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                Related Service Pillars
              </p>
              <h3 className="mt-2 text-base font-heading font-bold text-heading">
                Spot My Business Capabilities
              </h3>

              <div className="mt-4 space-y-3 text-xs">
                <Link
                  href="/services/ai-search-optimization"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">AI Search Optimization (GEO &amp; AEO)</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Entity Knowledge Graph alignment, JSON-LD schema, and conversational answer structure.
                  </p>
                </Link>

                <Link
                  href="/services/website-seo"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Website SEO Architecture</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Semantic HTML hierarchy, search intent mapping, and internal linking.
                  </p>
                </Link>

                <Link
                  href="/services/reputation-management"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Reputation Management</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Ethical review workflows maintaining ≥3.5★ trust for Maps and Gemini AI.
                  </p>
                </Link>

                <Link
                  href="/faq#guarantees-expectations"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Transparency &amp; RAG Policy FAQ</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Why we never guarantee probabilistic AI citations or artificial rankings.
                  </p>
                </Link>
              </div>
            </div>

            {/* Client Evidence & Companion Guides */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                  Verified Snapshots
                </p>
                <h3 className="mt-2 text-base font-heading font-bold text-heading">
                  Entity &amp; Reputation Proof
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-text">
                  See how Science Squad (5.0★), Bharat Relocators (4.9★), Nayak Decorators (4.8★), and Republic Packers (4.7★) align web, Maps, and review signals.
                </p>
                <Link
                  href="/case-studies"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-light-bronze hover:underline"
                >
                  <span>Explore Client Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="border-t border-border-color pt-4 space-y-2">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-text">
                  Companion Field Guides
                </p>
                <Link
                  href="/blog/local-seo-strategy-kolkata-indian-businesses"
                  className="block text-xs font-semibold text-heading hover:text-light-bronze transition-colors"
                >
                  Local &amp; Hyperlocal SEO Strategy for Indian Businesses [5-Step Guide] →
                </Link>
                <Link
                  href="/blog/google-maps-seo-service-area-businesses"
                  className="block text-xs font-semibold text-gray-text hover:text-light-bronze transition-colors"
                >
                  Google Maps SEO: Storefront vs. Service-Area [2026 Guide] →
                </Link>
                <Link
                  href="/blog/google-business-profile-optimization-checklist"
                  className="block text-xs font-semibold text-gray-text hover:text-light-bronze transition-colors"
                >
                  Google Business Profile Optimization [9-Step Checklist] →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
