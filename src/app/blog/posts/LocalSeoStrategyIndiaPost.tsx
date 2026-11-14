import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Compass,
  BookOpen,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface PostProps {
  post: BlogPost;
}

export default function LocalSeoStrategyIndiaPost({ post }: PostProps) {
  const fiveStepProcess = [
    {
      step: "01",
      title: "Understand the Business & Market",
      detail:
        "Audit how customers actually search and buy in your specific neighborhood or dispatch corridor before touching a single meta tag.",
    },
    {
      step: "02",
      title: "Build Anti-Doorway Relevance",
      detail:
        "Create distinct, genuinely helpful service and corridor pages grounded in real operational coverage—never cloned city templates.",
    },
    {
      step: "03",
      title: "Connect Internal Links & CTAs",
      detail:
        "Link service hubs, location context, and schema markup directly to frictionless Phone, WhatsApp, and quote inquiry pathways.",
    },
    {
      step: "04",
      title: "Synchronize NAP & Citations",
      detail:
        "Maintain character-for-character NAP consistency across your website, Google Business Profile, and trusted Indian directories.",
    },
    {
      step: "05",
      title: "Monitor & Refine via GSC",
      detail:
        "Track real first-party query impressions and neighborhood click behavior in Google Search Console to refine pages continuously.",
    },
  ];

  return (
    <article className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-text">
        <ol className="flex flex-wrap gap-2">
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
          <li aria-current="page" className="text-heading line-clamp-1 max-w-md">
            Local &amp; Hyperlocal SEO Strategy in Kolkata and India
          </li>
        </ol>
      </nav>

      {/* Article Header & Credibility / Revision Log */}
      <header className="max-w-4xl py-10 md:py-14">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-bronze/20 border border-bronze/40 px-3.5 py-1 font-semibold uppercase tracking-wider text-light-bronze">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-gray-text">
            <Calendar className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
            Published: {post.publishDate}
          </span>
          <span aria-hidden="true" className="text-border-color">
            •
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            Last Updated: {post.modifiedDate}
          </span>
          <span aria-hidden="true" className="text-border-color">
            •
          </span>
          <span className="flex items-center gap-1.5 text-gray-text">
            <Clock className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-heading font-bold leading-tight md:text-5xl lg:text-6xl text-heading">
          {post.title}
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-text md:text-xl">
          In Indian metropolitan markets, generic city-wide terms are crowded with aggregator directories, while hyperlocal neighborhood and &ldquo;near me&rdquo; searches carry immediate customer intent. Here is our 5-step website-centered Local SEO framework for connecting your service pages, Google Maps presence, and local citations—without resorting to thin doorway pages.
        </p>

        {/* Credibility Byline & Expandable Technical Revision Log */}
        <div className="mt-6 space-y-4 border-t border-border-color pt-6 text-xs text-gray-text">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-secondary-bg border border-border-color flex items-center justify-center font-heading font-bold text-light-bronze">
                SMB
              </div>
              <div>
                <p className="font-semibold text-heading">
                  Reviewed by: {post.author.name}
                </p>
                <p className="text-gray-text/80">
                  Headquarters: Middle Rd, Sen Para, Santoshpur, Kolkata 700075 • Field Audit Practice
                </p>
              </div>
            </div>

            <Link
              href="/services/local-seo"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-color bg-secondary-bg px-3.5 py-1.5 text-xs font-semibold text-light-bronze hover:border-bronze transition-colors"
            >
              <span>Core Service Pillar: Local SEO</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>

          <details className="group rounded-xl border border-border-color bg-secondary-bg/70 px-4 py-3 transition-colors open:border-bronze/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading text-xs font-bold text-heading">
              <span className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
                <span>Technical Revision &amp; Methodology Change Log (2026 Edition)</span>
              </span>
              <span
                aria-hidden="true"
                className="shrink-0 text-light-bronze transition-transform duration-300 group-open:rotate-180"
              >
                ▼
              </span>
            </summary>
            <ul className="mt-3 space-y-1.5 border-t border-border-color/60 pt-3 text-xs leading-relaxed text-gray-text">
              <li>
                <strong className="text-heading">2026-11-11 (v1.0 Release):</strong> Published 5-step Local &amp; Hyperlocal SEO strategy for Kolkata and Indian markets, integrating{" "}
                <span className="text-heading">Google&rsquo;s anti-doorway spam policy</span>,{" "}
                <span className="text-heading">Whitespark&rsquo;s 33% Local Organic / 15% Local Pack website weight</span>, and{" "}
                <span className="text-heading">First Page Sage&rsquo;s 29% Authoritative Lists weight</span> in Gemini Local AI search.
              </li>
              <li>
                <strong className="text-heading">Case URL Verification:</strong> Documented real anti-doorway URL architectures for{" "}
                <span className="text-heading">Nayak Decorators and Caterer Behala</span> (<code>nayakcaterer.com/kolkata/caterers-in-behala</code> — 4.8★, #1 Near Me Searches) and{" "}
                <span className="text-heading">Republic Packers and Movers</span> (<code>republicpackers.com/kolkata-packers-movers-west-bengal</code> — 4.7★, Top 10 Movers Kolkata).
              </li>
              <li>
                <strong className="text-heading">Geographic Scope:</strong> Aligned with Spot My Business&rsquo;s{" "}
                <Link href="/locations" className="text-light-bronze hover:underline">
                  20 verified Indian service-area markets
                </Link>{" "}
                managed remotely from Santoshpur, Kolkata.
              </li>
            </ul>
          </details>
        </div>
      </header>

      {/* ========================================================
          ABOVE-THE-FOLD QUICK ANSWER BOX + ☐ OVERVIEW JUMP LINKS
          ======================================================== */}
      <aside
        aria-label="Quick Answer and 5-Step Strategy Overview"
        className="mb-10 max-w-4xl rounded-2xl border border-bronze/50 bg-secondary-bg/90 p-6 md:p-8 backdrop-blur-md shadow-xl"
      >
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
          <Compass className="w-4 h-4 text-light-bronze" aria-hidden="true" />
          <span>Quick Answer • Website-Centered Local SEO</span>
        </div>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-heading font-medium">
          <strong>Local SEO</strong> is the website-centered discipline that connects your service pages, neighborhood relevance, structured schema markup, and consistent business credentials (NAP) with your Google Business Profile and Google Maps listing—helping nearby customers discover your business for high-intent &ldquo;near me&rdquo; and locality searches without relying on thin, repetitive doorway pages.
        </p>

        <div className="mt-6 border-t border-border-color/80 pt-5">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            5-Step Local &amp; Hyperlocal SEO Roadmap (Jump to Section):
          </p>
          <ol className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs md:text-sm text-gray-text">
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 00.</span>
              <a href="#local-vs-hyperlocal-seo" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Local SEO vs. Hyperlocal SEO in Indian Cities
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 01.</span>
              <a href="#step-1-business-model-intent" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Step 1: Research Real Local Search Intent
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 02.</span>
              <a href="#step-2-anti-doorway-pages" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Step 2: Build Relevance Without Doorway Spam
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 03.</span>
              <a href="#step-3-internal-linking-pathways" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Step 3: Structure Internal Links &amp; Contact Paths
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 04.</span>
              <a href="#step-4-nap-citations-india" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Step 4: Audit NAP &amp; Relevant Indian Citations
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 05.</span>
              <a href="#step-5-monitor-refine" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Step 5: Monitor &amp; Refine + Technical Matrix
              </a>
            </li>
          </ol>
        </div>
      </aside>

      {/* Hero Diagram */}
      <figure className="my-10 max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
          <Image
            src={post.heroImage}
            alt={post.heroImageAlt}
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <figcaption className="mt-3 text-center text-xs text-gray-text">
          Figure 1: The 5-step website-centered Local SEO system uniting service pages, Google Business Profile, Google Maps, and Indian citation ecosystems.
        </figcaption>
      </figure>

      {/* Content Body Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Main Article Content */}
        <div className="lg:col-span-8 space-y-10 text-gray-text leading-relaxed">
          {/* Foundational H2 */}
          <section id="local-vs-hyperlocal-seo" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
              Local SEO vs. Hyperlocal SEO: Why Neighborhood Intent Wins in India
            </h2>
            <p className="text-heading font-medium">
              While city-wide Local SEO targets broad metropolitan terms like <em>&ldquo;packers and movers in Kolkata&rdquo;</em> or <em>&ldquo;digital marketing agency in Mumbai,&rdquo;</em> hyperlocal SEO captures immediate, street- and neighborhood-level searches—such as <em>&ldquo;caterers in Behala,&rdquo;</em> <em>&ldquo;science coaching in Dankuni,&rdquo;</em> or <em>&ldquo;dentist near Rajiv Chowk&rdquo;</em>—where buyers are ready to call or visit within hours.
            </p>
            <p>
              In high-density Indian cities, commuting four kilometers across traffic can take 45 minutes. Because of that logistical reality, Indian consumers rarely search solely by city name when they have an urgent local need. They qualify their search with a specific neighborhood, metro station, PIN code, or <em>&ldquo;near me&rdquo;</em> modifier:
            </p>
            <ul className="space-y-2.5 pl-4 text-sm md:text-base">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-light-bronze shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Kolkata &amp; Bengal Micro-Markets:</strong> A parent in Hooghly searches for <em>&ldquo;Class 11 JEE coaching in Dankuni&rdquo;</em>; a family planning a reception searches <em>&ldquo;wedding caterer in Behala&rdquo;</em>; an apartment owner near EM Bypass or Haltu searches <em>&ldquo;household shifting near Santoshpur.&rdquo;</em>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-light-bronze shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Pan-India Commercial Corridors:</strong> Across our{" "}
                  <Link
                    href="/locations"
                    className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne font-medium"
                  >
                    supported Indian markets on our Locations hub
                  </Link>
                  , the exact same micro-market behavior governs buyer searches in <strong>Bandra Kurla Complex (BKC)</strong> or Andheri in Mumbai, <strong>Connaught Place / Rajiv Chowk</strong> or Gurugram Cyber City in NCR, and <strong>Whitefield</strong> or Indiranagar in Bengaluru.
                </span>
              </li>
            </ul>

            <p>
              As we explain on our{" "}
              <Link
                href="/services/local-seo"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne font-medium"
              >
                Local SEO services page
              </Link>
              , your website is the center of this ecosystem. Profile optimization fixes your listing fields, and Maps SEO aligns your pin or boundary—but Local SEO is the broader architectural discipline that ties your website pages, Google surfaces, and web-wide citations into one coherent picture.
            </p>

            {/* Styled 5-Step Process Cards Mirroring /services/local-seo */}
            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze mb-4">
                The 5-Step Spot My Business Local SEO Sequence
              </p>
              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {fiveStepProcess.map((item) => (
                  <li
                    key={item.step}
                    className="rounded-xl border border-border-color bg-secondary-bg p-4 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-xs font-bold text-light-bronze">
                        {item.step}
                      </span>
                      <h3 className="mt-2 text-sm font-heading font-bold text-heading">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-gray-text">
                        {item.detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Calm Mid-Post Diagnostic Callout */}
          <aside
            aria-label="Request a Local SEO Strategy Review"
            className="rounded-2xl border border-bronze/40 bg-secondary-bg p-6 md:p-7"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Review • Spot My Business (Santoshpur, Kolkata)
            </p>
            <h3 className="mt-2 text-lg md:text-xl font-heading font-bold text-heading">
              Want to connect your website to high-intent neighborhood searches?
            </h3>
            <p className="mt-2 text-xs md:text-sm text-gray-text">
              Operating remotely from our verified base in Santoshpur, Kolkata, we help local businesses in Kolkata and across India structure{" "}
              <Link
                href="/services/local-seo"
                className="text-light-bronze underline hover:text-champagne font-medium"
              >
                Local SEO strategies
              </Link>{" "}
              around real operational coverage—without doorway spam or inflated ranking promises.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-5 py-2.5 text-xs font-semibold text-heading transition-all hover:shadow-lg hover:shadow-bronze/20"
              >
                Discuss Your Local SEO
              </Link>
              <a
                href="https://wa.me/919007960333"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border-color bg-primary-bg px-5 py-2.5 text-xs font-semibold text-gray-text hover:text-heading transition-colors"
              >
                WhatsApp +91 9007960333
              </a>
            </div>
          </aside>

          {/* Step 1 */}
          <section id="step-1-business-model-intent" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                01
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 1: Understand the Business Model and Research Real Local Search Intent
              </h2>
            </div>

            <p>
              Effective Local SEO never starts with a generic keyword spreadsheet. It starts by mapping how customers actually choose a provider in your industry and geography:
            </p>
            <ul className="space-y-2.5 pl-4 text-sm md:text-base">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-light-bronze shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Service-First + Locality Modifiers:</strong> Most high-converting local searches combine a specific deliverable with a locality or transit hub—for example, <em>&ldquo;IBA approved packers and movers in Kolkata&rdquo;</em>, <em>&ldquo;Bengali wedding caterer in Behala&rdquo;</em>, or <em>&ldquo;spoken English classes near Dankuni.&rdquo;</em>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-light-bronze shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Implicit &ldquo;Near Me&rdquo; Queries:</strong> Even when a mobile user types a short phrase like <em>&ldquo;car transport service&rdquo;</em> without naming a city, Google localizes the SERP using the user&rsquo;s GPS coordinates. To qualify for those implicit local results, your website must clearly state which services you provide and which geographic corridors you genuinely cover.
                </span>
              </li>
            </ul>
          </section>

          {/* Step 2 */}
          <section id="step-2-anti-doorway-pages" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                02
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 2: Build Service and Location Relevance Without Doorway Spam
              </h2>
            </div>

            <p className="text-heading font-medium">
              Businesses should avoid creating hundreds of doorway city pages—near-identical templates where only the town or neighborhood name is swapped—because Google&rsquo;s spam systems demote or de-index mass-duplicated location pages that lack unique operational proof, eroding trust across the entire domain.
            </p>
            <p>
              As we state transparently in{" "}
              <Link
                href="/faq#guarantees-expectations"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne font-medium"
              >
                our anti-doorway page policy in the FAQ
              </Link>
              , a page should only exist on your website if it provides distinct, practical value to a customer in that area. Compare how our team structures genuine hyperlocal and regional pages across recorded client engagements:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  Hyperlocal Neighborhood Page
                </span>
                <h3 className="text-base font-heading font-bold text-heading">
                  Nayak Decorators and Caterer Behala
                </h3>
                <p className="font-mono text-[11px] text-light-bronze break-all">
                  nayakcaterer.com/kolkata/caterers-in-behala
                </p>
                <p className="text-xs leading-relaxed text-gray-text">
                  Built specifically around South Kolkata and Behala wedding catering, event decoration menus, guest capacity logistics, and verified neighborhood reviews (<code>4.8★ across 50+ reviews</code>)—achieving <strong>#1 visibility for &ldquo;Near Me&rdquo; catering searches</strong>.
                </p>
              </div>

              <div className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2.5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-light-bronze">
                  Regional Corridor Hub Page
                </span>
                <h3 className="text-base font-heading font-bold text-heading">
                  Republic Packers and Movers
                </h3>
                <p className="font-mono text-[11px] text-light-bronze break-all">
                  republicpackers.com/kolkata-packers-movers-west-bengal
                </p>
                <p className="text-xs leading-relaxed text-gray-text">
                  Structured around real household shifting and commercial transit corridors across Kolkata and West Bengal, backed by <code>4.7★ (600+ reviews)</code> and clear quotation pathways—securing a <strong>Top 10 Movers in Kolkata</strong> position.
                </p>
              </div>
            </div>

            {/* Visual 1 Case Comparison */}
            <figure className="my-8">
              <div className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
                <Image
                  src="/images/blog/authentic-location-page-vs-doorway.webp"
                  alt="Authentic hyperlocal landing page vs thin doorway page comparison showing Nayak Decorators Behala and Republic Packers Kolkata"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-gray-text">
                Figure 2: Architectural contrast between penalized programmatic doorway pages and Spot My Business&rsquo;s verified hyperlocal landing pages.
              </figcaption>
            </figure>
          </section>

          {/* Step 3 */}
          <section id="step-3-internal-linking-pathways" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                03
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 3: Structure Internal Linking and On-Page Contact Pathways
              </h2>
            </div>

            <p>
              Orphaned location or service pages rarely rank well. When we build{" "}
              <Link
                href="/services/website-seo"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne font-medium"
              >
                Website SEO foundations
              </Link>
              , every local page sits inside a logical hub-and-spoke internal linking structure:
            </p>
            <ol className="list-decimal list-inside space-y-2.5 text-sm md:text-base">
              <li>
                <strong className="text-heading">Bidirectional Hub-and-Spoke Links:</strong> Your primary Services hub links down to each individual service page (e.g., Household Shifting, Vehicle Transport, Event Catering), and those service pages cross-link to the specific geographic markets where your team operates.
              </li>
              <li>
                <strong className="text-heading">Validated Schema Markup:</strong> Each page includes clean JSON-LD structured data aligned with{" "}
                <a
                  href="https://developers.google.com/search/docs/appearance/structured-data/local-business"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne inline-flex items-center gap-1 font-medium"
                >
                  Google Search Central LocalBusiness Schema Guidelines
                  <ExternalLink className="w-3.5 h-3.5 inline" aria-hidden="true" />
                </a>
                —declaring your verified headquarters address as the <code>provider</code> and listing your genuine markets under <code>areaServed</code>.
              </li>
              <li>
                <strong className="text-heading">Immediate Mobile Enquiry Pathways:</strong> Over 75% of hyperlocal searches in India happen on mobile devices. Every local landing page must make it effortless to tap a direct phone number, launch a WhatsApp chat, or submit a short quotation form without scrolling through walls of filler copy.
              </li>
            </ol>
          </section>

          {/* Step 4 */}
          <section id="step-4-nap-citations-india" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                04
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 4: Audit NAP Consistency and Relevant Local Citations in India
              </h2>
            </div>

            <p>
              A <strong>local citation</strong> is any public mention of your Business Name, Address, and Phone number (NAP) on business directories, industry associations, or social platforms. According to{" "}
              <a
                href="https://support.google.com/business/answer/7091?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne inline-flex items-center gap-1 font-medium"
              >
                Google Business Profile Local Ranking Factors
                <ExternalLink className="w-3.5 h-3.5 inline" aria-hidden="true" />
              </a>
              , prominence is supported when Google finds consistent information about your business across the web—and in generative AI search, authoritative lists and directories account for <strong>29% of Google Gemini&rsquo;s local recommendation weight</strong>.
            </p>
            <p>
              However, citation quality matters far more than raw quantity:
            </p>
            <ul className="space-y-2.5 pl-4 text-sm md:text-base">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Focus on Legitimate Indian &amp; Vertical Platforms:</strong> Ensure your NAP and website URL are 100% accurate on your{" "}
                  <Link
                    href="/services/google-business-profile-optimization"
                    className="text-light-bronze underline hover:text-champagne"
                  >
                    Google Business Profile
                  </Link>
                  , official social profiles (LinkedIn, Instagram, Facebook), and reputable Indian platforms that real customers actually use in your sector (such as Sulekha for home/relocation/coaching services, Practo for clinics, or IndiaMART for B2B suppliers).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Avoid Automated 500-Directory Blasts:</strong> Paying for automated submissions to hundreds of unindexed, low-quality link farms creates duplicate records with mangled PIN codes that take months to clean up and add zero ranking value.
                </span>
              </li>
            </ul>
          </section>

          {/* Step 5 */}
          <section id="step-5-monitor-refine" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                05
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 5: Monitor Search Behavior and Refine Continuously
              </h2>
            </div>

            <p>
              Local search behavior shifts as new residential complexes open, metro corridors expand, and seasonal demand peaks (such as academic admissions in spring or wedding catering in winter).
            </p>
            <p>
              By reviewing first-party query telemetry inside Google Search Console alongside your{" "}
              <Link
                href="/blog/google-maps-seo-service-area-businesses"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne font-medium"
              >
                Google Maps SEO performance
              </Link>
              , you can see the exact neighborhood phrases generating impressions. When you spot rising impressions for a genuine service corridor where customers are looking for clearer details, you can expand that page with specific FAQs, operational timelines, and verified project snapshots.
            </p>
          </section>

          {/* Technical Comparison Matrix Table */}
          <section id="comparison-matrix" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
              City-Wide SEO vs. Hyperlocal SEO vs. Doorway Spam: Technical Matrix
            </h2>
            <p>
              Use this 6-dimension matrix to evaluate how your website&rsquo;s current location strategy compares against sustainable 2026 standards:
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="local-seo-matrix-caption"
              className="overflow-x-auto my-6 rounded-2xl border border-border-color focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left text-xs md:text-sm border-collapse bg-secondary-bg">
                <caption id="local-seo-matrix-caption" className="sr-only">
                  Technical comparison matrix contrasting City-Wide Local SEO, Hyperlocal Neighborhood SEO, and Programmatic Doorway Spam across 6 dimensions.
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg text-heading font-heading font-bold">
                    <th scope="col" className="p-4">Strategy Dimension</th>
                    <th scope="col" className="p-4 text-light-bronze">City-Wide Local SEO</th>
                    <th scope="col" className="p-4 text-emerald-400">Hyperlocal Neighborhood SEO</th>
                    <th scope="col" className="p-4 text-red-400/90">Doorway Spam (What to Avoid)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color/60 text-gray-text">
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      1. Target Search Queries
                    </th>
                    <td className="p-4">
                      Broad metro terms (e.g., <em>&ldquo;packers and movers Kolkata&rdquo;</em>)
                    </td>
                    <td className="p-4">
                      High-intent locality &amp; <em>&ldquo;near me&rdquo;</em> queries (e.g., <em>&ldquo;caterers in Behala&rdquo;</em>)
                    </td>
                    <td className="p-4">
                      Hundreds of scraped town names where the business has zero history
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      2. On-Page Content Depth
                    </th>
                    <td className="p-4">
                      Comprehensive metropolitan service hub, fleet/team overview &amp; credentials
                    </td>
                    <td className="p-4">
                      Specific neighborhood landmarks, local project proof &amp; corridor logistics
                    </td>
                    <td className="p-4">
                      90% duplicate boilerplate text with only <code>[City Name]</code> replaced
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      3. Address &amp; Office Claims
                    </th>
                    <td className="p-4">
                      Verified headquarters address displayed clearly in footer &amp; Contact page
                    </td>
                    <td className="p-4">
                      Transparent disclosure of HQ base + genuine dispatch/classroom coverage
                    </td>
                    <td className="p-4">
                      Fabricated local branch addresses or virtual P.O. boxes
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      4. Schema.org Structure
                    </th>
                    <td className="p-4">
                      <code>LocalBusiness</code> + <code>Service</code> graph anchored to verified HQ
                    </td>
                    <td className="p-4">
                      <code>Service</code> with explicit <code>areaServed</code> tied to verified HQ provider
                    </td>
                    <td className="p-4">
                      Invalid or deceptive <code>LocalBusiness</code> nodes claiming fake local pins
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      5. Customer Conversion Rate
                    </th>
                    <td className="p-4">
                      Moderate-to-high (researching &amp; comparing city-wide providers)
                    </td>
                    <td className="p-4">
                      <strong>Highest</strong> (urgent nearby buyer ready to call, WhatsApp, or visit)
                    </td>
                    <td className="p-4">
                      Near-zero (visitors immediately bounce when they spot generic copy)
                    </td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      6. Long-Term Algorithmic Safety
                    </th>
                    <td className="p-4">
                      Durable foundational authority across organic &amp; AI search
                    </td>
                    <td className="p-4">
                      Compounds with every local customer review &amp; neighborhood project
                    </td>
                    <td className="p-4">
                      High risk of de-indexing under Google Doorway &amp; Helpful Content systems
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Conversational FAQ Section (Native <details>/<summary>, Zero FAQPage JSON-LD per AGENTS.md) */}
          <section id="faq" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
              Frequently Asked Questions About Local &amp; Hyperlocal SEO
            </h2>
            <p className="text-sm text-gray-text">
              Straightforward answers to common questions about building neighborhood and regional visibility in India:
            </p>

            <div className="space-y-4 mt-6">
              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>How does Local SEO connect a website with Google Maps and &ldquo;near me&rdquo; searches?</span>
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
                    When someone performs a &ldquo;near me&rdquo; search, Google cross-checks your Google Business Profile against the linked website to verify topical and geographic legitimacy. Local SEO connects the two by ensuring every service and service corridor listed on your Maps profile is substantiated by a dedicated, crawlable page on your website with matching NAP credentials, internal links, and <code>LocalBusiness</code> / <code>Service</code> JSON-LD schema.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>What is the difference between hyperlocal SEO and city-wide local SEO?</span>
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
                    City-wide Local SEO focuses on broad municipal terms (such as <em>&ldquo;caterers in Kolkata&rdquo;</em> or <em>&ldquo;SEO agency in Bengaluru&rdquo;</em>), while hyperlocal SEO targets specific micro-markets, neighborhoods, PIN codes, and transit corridors (such as <em>&ldquo;wedding caterer in Behala,&rdquo;</em> <em>&ldquo;JEE coaching in Dankuni,&rdquo;</em> or <em>&ldquo;movers near Haltu&rdquo;</em>). Because neighborhood searches face less national aggregator competition and reflect immediate logistical need, they typically convert into phone calls at a much higher rate.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Why should businesses avoid creating hundreds of doorway city pages?</span>
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
                    Doorway pages—mass-generated URLs that repeat the same template across dozens of towns with only the location name changed—violate Google&rsquo;s spam policies. Google&rsquo;s crawler easily detects near-duplicate location templates, marks them as <em>&ldquo;Crawled – currently not indexed,&rdquo;</em> and downgrades overall site quality. Publishing fewer, deeply researched pages focused on areas you genuinely serve is far safer and more effective.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Can a business outside Kolkata work remotely with Spot My Business for Local SEO?</span>
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
                    Yes. Spot My Business operates from our verified headquarters at Middle Rd, Sen Para, Santoshpur, Kolkata 700075 and collaborates remotely with businesses across 20 Indian markets (including Delhi NCR, Mumbai, Pune, Bengaluru, Hyderabad, Chennai, and Bhubaneswar). All website engineering, schema configuration, Search Console diagnostics, and Google Business Profile alignment are executed transparently via phone, WhatsApp, and shared staging reviews.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Bottom Conversion Block */}
          <section className="rounded-2xl bg-secondary-bg p-8 md:p-10 border border-border-color mt-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Anti-Doorway Local Search Architecture</span>
            </div>
            <h3 className="mt-2 text-2xl font-heading font-bold text-heading">
              Ready to Build Durable Local Visibility in Your Market?
            </h3>
            <p className="mt-3 text-sm text-gray-text leading-relaxed">
              Tell us what services you offer and which neighborhoods or cities you genuinely serve. Our team in Santoshpur, Kolkata will review your website pages, Google Business Profile, and local search gaps—without doorway templates or artificial ranking guarantees.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading transition-all hover:shadow-lg hover:shadow-bronze/20"
              >
                Request a Local SEO Review
              </Link>
              <a
                href="tel:+919007960333"
                className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text transition-colors hover:text-heading"
              >
                Call +91 9007960333
              </a>
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
              <h4 className="mt-2 text-base font-heading font-bold text-heading">
                5-Step Local SEO Guide
              </h4>

              <ol className="mt-4 space-y-2.5 text-xs text-gray-text">
                <li>
                  <a href="#local-vs-hyperlocal-seo" className="hover:text-light-bronze transition-colors block">
                    • Local vs. Hyperlocal SEO in India
                  </a>
                </li>
                <li>
                  <a href="#step-1-business-model-intent" className="hover:text-light-bronze transition-colors block">
                    1. Research Real Local Search Intent
                  </a>
                </li>
                <li>
                  <a href="#step-2-anti-doorway-pages" className="hover:text-light-bronze transition-colors block">
                    2. Build Relevance Without Doorway Spam
                  </a>
                </li>
                <li>
                  <a href="#step-3-internal-linking-pathways" className="hover:text-light-bronze transition-colors block">
                    3. Internal Links &amp; Contact Pathways
                  </a>
                </li>
                <li>
                  <a href="#step-4-nap-citations-india" className="hover:text-light-bronze transition-colors block">
                    4. Audit NAP &amp; Indian Citations
                  </a>
                </li>
                <li>
                  <a href="#step-5-monitor-refine" className="hover:text-light-bronze transition-colors block">
                    5. Monitor &amp; Refine via Search Console
                  </a>
                </li>
                <li>
                  <a href="#comparison-matrix" className="hover:text-light-bronze transition-colors block font-semibold text-heading">
                    • City-Wide vs. Hyperlocal vs. Doorway Matrix
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-light-bronze transition-colors block font-semibold text-heading">
                    • Frequently Asked Questions
                  </a>
                </li>
              </ol>

              <div className="mt-6 border-t border-border-color pt-4">
                <Link
                  href="/contact"
                  className="w-full inline-block text-center rounded-xl bg-primary-bg border border-border-color py-2.5 text-xs font-semibold text-light-bronze hover:border-bronze transition-colors"
                >
                  Have SMB Review Your Site →
                </Link>
              </div>
            </nav>

            {/* Related Service Pillars */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                Related Service Pillars
              </p>
              <h4 className="mt-2 text-base font-heading font-bold text-heading">
                Connected Local Capabilities
              </h4>

              <div className="mt-4 space-y-3 text-xs">
                <Link
                  href="/services/local-seo"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Local SEO Services</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Service-area pages, search-intent mapping, and NAP consistency.
                  </p>
                </Link>

                <Link
                  href="/services/website-seo"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Website SEO Foundations</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Semantic HTML hierarchy, internal linking, and JSON-LD schema.
                  </p>
                </Link>

                <Link
                  href="/services/google-business-profile-optimization"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Google Business Profile Optimization</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Category calibration, service catalogs, and profile maintenance.
                  </p>
                </Link>

                <Link
                  href="/locations"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Supported Markets &amp; Locations</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Explore our 20 verified service-area markets across India.
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
                <h4 className="mt-2 text-base font-heading font-bold text-heading">
                  Anti-Doorway Client Proof
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-text">
                  See how Nayak Decorators Behala, Republic Packers and Movers, and Bharat Relocators structure local landing pages.
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
                  href="/blog/ai-search-optimization-geo-vs-aeo-vs-seo"
                  className="block text-xs font-semibold text-heading hover:text-light-bronze transition-colors"
                >
                  GEO vs. AEO vs. SEO: AI Search Guide [2026 Data Study] →
                </Link>
                <Link
                  href="/blog/google-maps-seo-service-area-businesses"
                  className="block text-xs font-semibold text-gray-text hover:text-light-bronze transition-colors"
                >
                  Google Maps SEO: Storefront vs. Service-Area [2026 Guide] →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
