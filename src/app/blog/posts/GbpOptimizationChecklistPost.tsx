import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  ListChecks,
  BookOpen,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface PostProps {
  post: BlogPost;
}

export default function GbpOptimizationChecklistPost({ post }: PostProps) {
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
            Google Business Profile Optimization Checklist
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
          Most local business owners treat their Google Business Profile like a static directory card—claim the pin, type a phone number, upload three photos, and wait. Here is the exact 9-step verification checklist our Kolkata local search team uses to align categories, service catalogs, landing pages, and review signals for sustainable Google Maps and AI search discovery.
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
              href="/services/google-business-profile-optimization"
              className="inline-flex items-center gap-1.5 rounded-full border border-border-color bg-secondary-bg px-3.5 py-1.5 text-xs font-semibold text-light-bronze hover:border-bronze transition-colors"
            >
              <span>Core Service Pillar: GBP Optimization</span>
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
                <strong className="text-heading">2026-11-06 (v1.0 Release):</strong> Published complete 9-step Google Business Profile verification checklist integrating{" "}
                <span className="text-heading">First Page Sage&rsquo;s October 2026 Gemini Local AI weights</span> (38% Local Business Reviews, 29% Authoritative Lists, 19% Online Reviews, 14% GBP Website Authority, and the strict ≥3.5★ inclusion filter).
              </li>
              <li>
                <strong className="text-heading">Empirical Verification:</strong> Added{" "}
                <span className="text-heading">Sterling Sky&rsquo;s primary category specificity benchmark</span> (#1 to #31 ranking drop under generic categorization) and Google Diversity Update URL deduplication guidance.
              </li>
              <li>
                <strong className="text-heading">Field Proof Integration:</strong> Documented recorded client snapshots from{" "}
                <span className="text-heading">Science Squad (Dankuni)</span>,{" "}
                <span className="text-heading">Bharat Relocators (Haltu, Kolkata)</span>,{" "}
                <span className="text-heading">Nayak Decorators and Caterer (Behala)</span>, and{" "}
                <span className="text-heading">Republic Packers and Movers</span>.
              </li>
            </ul>
          </details>
        </div>
      </header>

      {/* ========================================================
          ABOVE-THE-FOLD QUICK ANSWER BOX + ☐ OVERVIEW CHECKLIST
          ======================================================== */}
      <aside
        aria-label="Quick Answer and 9-Step Overview Checklist"
        className="mb-10 max-w-4xl rounded-2xl border border-bronze/50 bg-secondary-bg/90 p-6 md:p-8 backdrop-blur-md shadow-xl"
      >
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
          <ListChecks className="w-4 h-4 text-light-bronze" aria-hidden="true" />
          <span>Quick Answer • 2026 GBP Verification Summary</span>
        </div>

        <p className="mt-3 text-sm md:text-base leading-relaxed text-heading font-medium">
          <strong>Google Business Profile (GBP) optimization</strong> is the structured alignment of your verified business name, street address, phone number (NAP), primary and secondary categories, service menus, landing page URL, authentic on-site photos, and customer review workflows so Google Maps and generative AI search engines can accurately match your business to high-intent local searches.
        </p>

        <div className="mt-6 border-t border-border-color/80 pt-5">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            At-a-Glance 9-Step GBP Audit Checklist (Jump to Section):
          </p>
          <ol className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-xs md:text-sm text-gray-text">
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 01.</span>
              <a href="#step-1-nap-accuracy-hours" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Audit Core NAP Accuracy &amp; Holiday Hours
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 02.</span>
              <a href="#step-2-primary-secondary-categories" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Calibrate Primary &amp; Secondary Categories
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 03.</span>
              <a href="#step-3-services-menus" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Structure Pre-Defined &amp; Custom Services
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 04.</span>
              <a href="#step-4-business-description" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Write a Compliant ≤750-Char Description
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 05.</span>
              <a href="#step-5-attributes-opening-date" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Set Opening Date &amp; Operational Attributes
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 06.</span>
              <a href="#step-6-landing-page-utm" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Align GBP Landing Page &amp; UTM Telemetry
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 07.</span>
              <a href="#step-7-photos-videos" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Upload 10–15 Authentic On-Site Photos
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span className="font-mono text-light-bronze font-bold">☐ 08.</span>
              <a href="#step-8-review-governance" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Maintain ≥3.5★ Review Velocity &amp; Replies
              </a>
            </li>
            <li className="flex items-start gap-2 sm:col-span-2">
              <span className="font-mono text-light-bronze font-bold">☐ 09.</span>
              <a href="#step-9-ongoing-maintenance" className="hover:text-light-bronze underline decoration-border-color underline-offset-4">
                Monitor Against Unwanted &ldquo;Suggested Edits&rdquo; + Full 9-Point Verification Matrix
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
          Figure 1: The 9-step Google Business Profile verification architecture used by Spot My Business across Kolkata and Indian service markets.
        </figcaption>
      </figure>

      {/* Content Body Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Main Article Content */}
        <div className="lg:col-span-8 space-y-10 text-gray-text leading-relaxed">
          {/* Foundational H2 */}
          <section id="what-gbp-optimization-involves" className="scroll-mt-28 space-y-4">
            <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
              What Does Google Business Profile Optimization Actually Involve?
            </h2>
            <p className="text-heading font-medium">
              Google Business Profile optimization involves configuring every structured field inside your Google listing—categories, NAP credentials, service items, landing page URLs, media, and review responses—to satisfy Google&rsquo;s three core local ranking pillars: <strong>Relevance, Distance, and Prominence</strong>, while clearing generative AI trust thresholds.
            </p>
            <p>
              When someone in South Kolkata searches <em>&ldquo;packers and movers near Haltu&rdquo;</em> or a parent in Hooghly searches <em>&ldquo;JEE coaching center in Dankuni&rdquo;</em>, Google does not rank businesses randomly. According to{" "}
              <a
                href="https://support.google.com/business/answer/7091?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne inline-flex items-center gap-1 font-medium"
              >
                Google&rsquo;s official documentation on improving your local ranking
                <ExternalLink className="w-3.5 h-3.5 inline" aria-hidden="true" />
              </a>
              , the local algorithm weighs three primary dimensions:
            </p>
            <ul className="space-y-2.5 pl-4 text-sm md:text-base">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-light-bronze shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Relevance:</strong> How closely your primary category, secondary categories, and structured services match the searcher&rsquo;s exact intent.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-light-bronze shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Distance:</strong> How close your verified street pin or calibrated service corridor is to the user&rsquo;s real-time GPS coordinate or named locality.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-light-bronze shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Prominence:</strong> How well-known and trusted your business is online, measured through authentic review volume, star rating, website authority, and consistent local citations.
                </span>
              </li>
            </ul>

            <p>
              In 2026, optimizing for Google Maps alone is only half the task. Customers increasingly ask Google AI Overviews, Gemini, and ChatGPT for local recommendations. Research published by First Page Sage on local generative AI ranking weights shows how Gemini evaluates local businesses directly from your Google Business Profile ecosystem:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              <div className="rounded-xl border border-border-color bg-secondary-bg p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-light-bronze">
                  Local Reviews
                </span>
                <p className="mt-2 text-2xl font-heading font-bold text-heading">38%</p>
                <p className="mt-1 text-[11px] text-gray-text">
                  GBP star rating, review velocity &amp; detailed text
                </p>
              </div>
              <div className="rounded-xl border border-border-color bg-secondary-bg p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-light-bronze">
                  Trusted Lists
                </span>
                <p className="mt-2 text-2xl font-heading font-bold text-heading">29%</p>
                <p className="mt-1 text-[11px] text-gray-text">
                  Consistent directory &amp; entity mentions
                </p>
              </div>
              <div className="rounded-xl border border-border-color bg-secondary-bg p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-light-bronze">
                  Online Reviews
                </span>
                <p className="mt-2 text-2xl font-heading font-bold text-heading">19%</p>
                <p className="mt-1 text-[11px] text-gray-text">
                  Third-party sentiment &amp; reputation proof
                </p>
              </div>
              <div className="rounded-xl border border-border-color bg-secondary-bg p-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  GBP Website
                </span>
                <p className="mt-2 text-2xl font-heading font-bold text-heading">14%</p>
                <p className="mt-1 text-[11px] text-gray-text">
                  Domain authority &amp; 1:1 service page match
                </p>
              </div>
            </div>

            <p>
              Crucially, Gemini enforces a strict quality filter: <strong>businesses with a Google Business Profile rating below 3.5 stars are systematically excluded from AI-generated local recommendations</strong>. Walking through the 9 steps below ensures your profile is structured for both the traditional Google Maps 3-Pack and modern AI search engines.
            </p>
          </section>

          {/* Calm Mid-Post Diagnostic Callout */}
          <aside
            aria-label="Request a Google Business Profile Diagnostic"
            className="rounded-2xl border border-bronze/40 bg-secondary-bg p-6 md:p-7"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              Practitioner Diagnostic • Spot My Business (Kolkata HQ)
            </p>
            <h3 className="mt-2 text-lg md:text-xl font-heading font-bold text-heading">
              Want our team to verify your profile against these 9 checkpoints?
            </h3>
            <p className="mt-2 text-xs md:text-sm text-gray-text">
              Whether you run a storefront clinic, a coaching institute, or a service-area operation anywhere in India, our team in Santoshpur, Kolkata performs candid, manual{" "}
              <Link
                href="/services/google-business-profile-optimization"
                className="text-light-bronze underline hover:text-champagne font-medium"
              >
                Google Business Profile optimization
              </Link>{" "}
              audits without automated fluff or ranking guarantees.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-5 py-2.5 text-xs font-semibold text-heading transition-all hover:shadow-lg hover:shadow-bronze/20"
              >
                Request a Candid GBP Audit
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
          <section id="step-1-nap-accuracy-hours" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                01
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 1: Audit Core NAP Accuracy and Operating Hours
              </h2>
            </div>

            <p>
              Your Name, Address, and Phone number (NAP) form the primary entity key in Google&rsquo;s Knowledge Graph. Yet when we audit struggling listings in Kolkata, Bengaluru, or Delhi NCR, the most common self-inflicted wound is <strong>business name keyword stuffing</strong>—appending phrases like <em>&ldquo;Best Pipe Repair in South Kolkata – 24/7 Low Price&rdquo;</em> to the official profile title.
            </p>
            <p>
              According to the official{" "}
              <a
                href="https://support.google.com/business/answer/3038177?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne inline-flex items-center gap-1 font-medium"
              >
                Guidelines for representing your business on Google
                <ExternalLink className="w-3.5 h-3.5 inline" aria-hidden="true" />
              </a>
              , your business name must reflect your real-world title as consistently used on your storefront signage, website header, and legal stationery. Adding unnecessary location or service descriptors is one of the fastest ways to trigger a competitor redressal report or an automated profile suspension.
            </p>

            <div className="rounded-xl border border-border-color bg-secondary-bg p-5 text-xs md:text-sm space-y-2">
              <p className="font-bold text-light-bronze uppercase tracking-wider text-xs">
                Verified NAP Synchronization Example (Spot My Business HQ):
              </p>
              <p className="text-gray-text">
                Every character on our Google Business Profile matches our website footer and{" "}
                <code>LocalBusiness</code> JSON-LD schema:
              </p>
              <pre
                tabIndex={0}
                className="mt-2 overflow-x-auto rounded-lg border border-border-color bg-primary-bg p-3.5 font-mono text-xs text-gray-300"
              >
                <code>{`Business Name : Spot My Business
Street Address: Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075
Primary Phone : +91 9007960333 | Secondary: +91 8597913452
Geo Pin       : 22.49583535142233, 88.3806285747356`}</code>
              </pre>
            </div>

            <p>
              Alongside your address and PIN code, audit your <strong>Regular and Special Operating Hours</strong>. If your office or shop adjusts timings during Durga Puja, Diwali, or public holidays and you leave your profile unmarked, Google displays an orange <em>&ldquo;Hours might differ&rdquo;</em> warning that erodes caller trust right when search intent is highest.
            </p>
          </section>

          {/* Step 2 */}
          <section id="step-2-primary-secondary-categories" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                02
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 2: Calibrate Primary and Secondary Business Categories
              </h2>
            </div>

            <p className="text-heading font-medium">
              Your primary Google Business Profile category is the single strongest relevance signal in the Google Maps algorithm, dictating which search queries your business is eligible to rank for, while secondary categories expand discovery across related specialist services without diluting your core classification.
            </p>
            <p>
              How much impact does a single category selection actually carry? In controlled field testing documented in{" "}
              <a
                href="https://www.sterlingsky.ca/ultimate-checklist-boost-gbp-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne inline-flex items-center gap-1 font-medium"
              >
                Sterling Sky&rsquo;s empirical Google Business Profile checklist
                <ExternalLink className="w-3.5 h-3.5 inline" aria-hidden="true" />
              </a>
              , switching a specialist service company&rsquo;s primary category to a broader, generic contractor label caused its Local Pack ranking for its highest-intent keyword to drop from <strong>#1 down to #31</strong>—completely vanishing from the first three pages of local results.
            </p>
            <p>
              Follow two strict rules when auditing your categories:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm md:text-base">
              <li>
                <strong className="text-heading">Make your Primary Category your exact revenue core:</strong> Never pick an umbrella label when a specific category exists. A coaching institute should select <em>&ldquo;Coaching Center&rdquo;</em> or <em>&ldquo;Educational Institution&rdquo;</em> rather than a vague consultant tag; an agency focused on digital growth should align under <em>&ldquo;Internet Marketing Service&rdquo;</em>.
              </li>
              <li>
                <strong className="text-heading">Add 2 to 4 focused Secondary Categories—not 9 unrelated ones:</strong> Google&rsquo;s official policy explicitly instructs businesses to <em>&ldquo;select the fewest categories it takes to describe your overall core business.&rdquo;</em> Add only the secondary categories that correspond to real departments or dedicated service pages on your website.
              </li>
            </ol>
          </section>

          {/* Step 3 */}
          <section id="step-3-services-menus" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                03
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 3: Structure Pre-Defined and Custom Services &amp; Menus
              </h2>
            </div>

            <p>
              Once your primary and secondary categories are saved, Google unlocks a <strong>Services</strong> (or Menus/Courses) catalog inside your dashboard. Leaving this section empty—or checking two default boxes and calling it a day—forfeits a major source of long-tail Maps discovery and mobile{" "}
              <em>&ldquo;Provides: [Service]&rdquo;</em> justification snippets.
            </p>
            <p>
              Here is how we structure service catalogs across real client profiles in our{" "}
              <Link
                href="/case-studies"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne font-medium"
              >
                verified client case studies
              </Link>
              :
            </p>

            <ul className="space-y-3 text-sm md:text-base">
              <li className="rounded-xl border border-border-color bg-secondary-bg p-4">
                <strong className="text-heading">Science Squad (Dankuni, West Bengal — 5.0★, 30+ Reviews):</strong> Rather than listing only a generic &ldquo;Tuition&rdquo; label, the profile is organized around exact academic batches—Class 7–12 Board Preparation, JEE Main &amp; Advanced Coaching, NEET Medical Entrance, and Spoken English—paired with clear batch schedules on their website. Recorded snapshot outcome:{" "}
                <span className="text-emerald-400 font-semibold">#1 Google Maps Position in Dankuni</span>.
              </li>
              <li className="rounded-xl border border-border-color bg-secondary-bg p-4">
                <strong className="text-heading">Bharat Relocators (Haltu, South Kolkata — 4.9★, 300+ Reviews):</strong> Structured distinct service items for Household Shifting, Corporate Office Relocation, Car Carrier Transport, and IBA-Approved Transit Packing, each mirrored by a crawlable page on their website.
              </li>
              <li className="rounded-xl border border-border-color bg-secondary-bg p-4">
                <strong className="text-heading">Nayak Decorators and Caterer (Behala, Kolkata — 4.8★, 50+ Reviews):</strong> Populated neighborhood-relevant event decoration, pandal lighting, and wedding catering menus so South Kolkata families comparing vendors see complete capability immediately on Google Maps.
              </li>
            </ul>

            {/* Visual 1 Comparison Graphic */}
            <figure className="my-8">
              <div className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
                <Image
                  src="/images/blog/science-squad-gbp-comparison.webp"
                  alt="Science Squad Dankuni optimized Google Business Profile showing class schedules and local search visibility"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-3 text-center text-xs text-gray-text">
                Figure 2: Side-by-side comparison of an incomplete coaching listing versus Science Squad&rsquo;s fully structured Google Business Profile in Dankuni, West Bengal.
              </figcaption>
            </figure>
          </section>

          {/* Step 4 */}
          <section id="step-4-business-description" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                04
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 4: Write a Clear, Customer-Facing Business Description
              </h2>
            </div>

            <p>
              Google gives you <strong>750 characters</strong> in the &ldquo;From the business&rdquo; description field, with roughly the first 250 characters visible before a user taps <em>&ldquo;More&rdquo;</em>. While the description field does not directly boost keyword rankings the way your primary category does, it heavily influences whether a human searcher—or an AI assistant summarizing your entity—trusts your business enough to call.
            </p>
            <p>
              Keep your description compliant with Google&rsquo;s content policies:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm md:text-base">
              <li>
                <strong className="text-heading">Zero URLs or HTML links:</strong> Do not paste website links or email addresses into the description text.
              </li>
              <li>
                <strong className="text-heading">Zero phone numbers:</strong> Repeating your mobile number inside the description can trigger automated moderation blocks.
              </li>
              <li>
                <strong className="text-heading">Zero promotional gimmicks or ALL-CAPS:</strong> Avoid phrases like <em>&ldquo;50% OFF TODAY ONLY&rdquo;</em> or <em>&ldquo;BEST #1 CHEAPEST AGENCY&rdquo;</em>.
              </li>
            </ul>

            <div className="rounded-xl border border-border-color bg-secondary-bg p-5 text-xs md:text-sm space-y-2">
              <p className="font-bold text-light-bronze uppercase tracking-wider text-xs">
                Copyable 3-Part Description Structure (≤750 Characters):
              </p>
              <p className="text-gray-text italic">
                &ldquo;[Business Name] is a [Primary Category] based in [Locality, City], specializing in [Core Service 1], [Core Service 2], and [Core Service 3]. Operating from our facility near [Local Landmark], we help [Target Customers] across [2–3 Realistic Service Areas] with transparent timelines and documented quality standards. Contact our team or visit our website to review our service catalog and schedule a consultation.&rdquo;
              </p>
            </div>
          </section>

          {/* Step 5 */}
          <section id="step-5-attributes-opening-date" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                05
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 5: Select Helpful Attributes and Set Your Accurate Opening Date
              </h2>
            </div>

            <p>
              Two overlooked fields inside the Google Business Profile editor directly improve click-through rates in competitive Indian metros:
            </p>
            <ol className="list-decimal list-inside space-y-2.5 text-sm md:text-base">
              <li>
                <strong className="text-heading">Opening Date (&ldquo;Years in Business&rdquo; Badge):</strong> Entering the exact month and year your business began operations unlocks Google&rsquo;s <em>&ldquo;X+ years in business&rdquo;</em> label directly inside Local Pack snippets. When a family is choosing between an unverified mover and an established operator, that longevity badge is an immediate trust anchor.
              </li>
              <li>
                <strong className="text-heading">Operational &amp; Accessibility Attributes:</strong> Configure every accurate attribute available for your category—such as <em>&ldquo;Onsite services&rdquo;</em>, <em>&ldquo;Online appointments&rdquo;</em>, <em>&ldquo;Accepts UPI / NFC mobile payments&rdquo;</em>, or <em>&ldquo;Wheelchair-accessible entrance&rdquo;</em>. Voice assistants and conversational AI searches frequently filter candidates using these exact boolean attributes.
              </li>
            </ol>
          </section>

          {/* Step 6 */}
          <section id="step-6-landing-page-utm" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                06
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 6: Align Your GBP Landing Page and UTM Tracking
              </h2>
            </div>

            <p className="text-heading font-medium">
              Linking your Google Business Profile to an internal website page that already ranks in the top organic results can trigger Google&rsquo;s Diversity Update filter, which deduplicates the SERP by removing your organic listing so the exact same URL does not appear twice on Page 1.
            </p>
            <p>
              This is a subtle technical trap we test carefully during{" "}
              <Link
                href="/services/local-seo"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne font-medium"
              >
                local SEO architecture
              </Link>{" "}
              deployments:
            </p>
            <ul className="space-y-2.5 pl-4 text-sm md:text-base">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">Single-location businesses:</strong> Point your GBP website link to your canonical <strong>Homepage</strong>, and ensure the homepage H1, title tag, and footer schema clearly reinforce your primary category and city. (For a deeper look at how website structure affects phone inquiries, read our companion field audit:{" "}
                  <Link
                    href="/blog/why-your-google-business-profile-isnt-getting-calls-in-kolkata"
                    className="text-light-bronze underline hover:text-champagne"
                  >
                    Why Your Google Business Profile Isn&rsquo;t Getting Calls in Kolkata
                  </Link>
                  .)
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="text-heading">First-Party UTM Attribution:</strong> Append a clean UTM query string to your website URL inside GBP so Google Analytics 4 and Google Search Console can separate Google Maps clicks from standard organic search clicks:
                </span>
              </li>
            </ul>

            <pre
              tabIndex={0}
              className="overflow-x-auto rounded-xl border border-border-color bg-secondary-bg p-4 font-mono text-xs text-light-bronze"
            >
              <code>https://www.yourdomain.in/?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=gbp</code>
            </pre>
          </section>

          {/* Step 7 */}
          <section id="step-7-photos-videos" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                07
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 7: Organize Authentic Photos, Videos, and Visual Proof
              </h2>
            </div>

            <p>
              Google processes every uploaded photo through computer-vision models to verify real-world legitimacy and match visual entities (such as classroom whiteboards, moving trucks, dental chairs, or catering setups) to user searches. Uploading generic stock photos or Canva flyers overloaded with text hurts both algorithmic confidence and human conversion.
            </p>
            <p>
              Aim for an initial baseline of <strong>10 to 15 authentic, high-resolution photos</strong> (minimum 720×720px, clear lighting, zero heavy filters), followed by 2–3 new operational photos each month:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm md:text-base">
              <li>
                <strong className="text-heading">For Storefronts (e.g., Science Squad in Dankuni):</strong> Upload at least 3 exterior photos showing permanent signage from different street angles, plus interior classroom and faculty photos so students and parents immediately recognize the building.
              </li>
              <li>
                <strong className="text-heading">For Service-Area &amp; Logistics Operations (e.g., Bharat Relocators &amp; Republic Packers and Movers — 4.7★, 600+ Reviews):</strong> Show branded transport vehicles, crating materials, and uniformed packing teams on real assignments across residential societies.
              </li>
            </ul>
          </section>

          {/* Step 8 */}
          <section id="step-8-review-governance" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                08
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 8: Build an Ethical Review &amp; Response Workflow (Passing Gemini&rsquo;s 3.5★ Filter)
              </h2>
            </div>

            <p>
              Reviews are no longer just social proof for human readers; they represent <strong>38% of Gemini&rsquo;s local AI recommendation weight</strong> and supply the natural phrases Google uses for <em>&ldquo;Customers mention...&rdquo;</em> Map Justifications.
            </p>
            <p>
              As part of our{" "}
              <Link
                href="/services/reputation-management"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne font-medium"
              >
                reputation management and review governance
              </Link>{" "}
              practice, we enforce three strict operational habits:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-sm md:text-base">
              <li>
                <strong className="text-heading">Prioritize steady velocity over artificial spikes:</strong> Collecting 4 to 6 genuine client reviews every month after completed jobs is far safer and stronger than soliciting 50 reviews in a single weekend (which triggers Google&rsquo;s automated spam filters).
              </li>
              <li>
                <strong className="text-heading">Ask customers to mention the specific service completed:</strong> When handing over your direct GBP review QR code or short link, simply ask: <em>&ldquo;If you found our work helpful, feel free to mention which service we handled for you.&rdquo;</em> Natural customer mentions of <em>&ldquo;household shifting in Salt Lake&rdquo;</em> or <em>&ldquo;Class 12 physics coaching&rdquo;</em> directly feed Google Maps snippet justifications.
              </li>
              <li>
                <strong className="text-heading">Respond to 100% of reviews within 48 hours:</strong> Thoughtful owner responses confirm active management to both prospective callers and Google&rsquo;s prominence evaluators, while helping keep your aggregate rating well above the <strong>3.5★ Gemini AI inclusion threshold</strong>.
              </li>
            </ol>
          </section>

          {/* Step 9 */}
          <section id="step-9-ongoing-maintenance" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-mono text-xs font-bold text-light-bronze">
                09
              </span>
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Step 9: Monitor Against Unwanted Edits and Maintain Profile Completeness
              </h2>
            </div>

            <p>
              Google Business Profile optimization is not a one-time setup. Anyone on the internet—including competitors, automated map scrapers, or confused local guides—can click <em>&ldquo;Suggest an edit&rdquo;</em> on your public Maps listing to change your primary category, move your map pin down the street, alter your phone number, or mark your business <em>&ldquo;Temporarily Closed.&rdquo;</em>
            </p>
            <p>
              If you do not log into your Google Business Profile Manager weekly to review and reject unauthorized edits, Google may automatically accept those third-party changes within days. Pair your weekly edit check with our{" "}
              <Link
                href="/services/google-maps-seo"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne font-medium"
              >
                Google Maps SEO monitoring
              </Link>{" "}
              so pin accuracy, seasonal hours, and newly launched services stay 100% synchronized year-round.
            </p>
          </section>

          {/* 9-Point Completeness & Verification Matrix Table */}
          <section id="audit-matrix" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
              The 9-Point GBP Completeness &amp; Verification Matrix
            </h2>
            <p>
              Use this side-by-side audit table to benchmark your current Google Business Profile against our verification standard:
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="gbp-audit-matrix-caption"
              className="overflow-x-auto my-6 rounded-2xl border border-border-color focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left text-xs md:text-sm border-collapse bg-secondary-bg">
                <caption id="gbp-audit-matrix-caption" className="sr-only">
                  9-Point Google Business Profile Completeness and Verification Matrix comparing common local business mistakes, Spot My Business verification standards, and customer action impact.
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg text-heading font-heading font-bold">
                    <th scope="col" className="p-4">GBP Field</th>
                    <th scope="col" className="p-4 text-red-400/90">Common Local Business Mistake</th>
                    <th scope="col" className="p-4 text-emerald-400">Spot My Business Verification Standard</th>
                    <th scope="col" className="p-4 text-light-bronze">Customer Action Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color/60 text-gray-text">
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      1. Business Name &amp; NAP
                    </th>
                    <td className="p-4">Stuffing city/keywords into title; mismatched website phone or missing PIN code</td>
                    <td className="p-4">Exact legal signage name + 1:1 character match with website footer &amp; JSON-LD</td>
                    <td className="p-4 font-medium text-heading">Prevents profile suspension &amp; builds Knowledge Graph trust</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      2. Primary &amp; Secondary Categories
                    </th>
                    <td className="p-4">Broad umbrella category or 8+ loosely related secondary categories</td>
                    <td className="p-4">1 hyper-specific Primary Category + 2 to 4 core Secondary Categories</td>
                    <td className="p-4 font-medium text-heading">Protects core Local Pack eligibility (avoids #1 → #31 rank drop)</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      3. Services &amp; Menus Tab
                    </th>
                    <td className="p-4">Left blank or checked without matching website landing pages</td>
                    <td className="p-4">Complete pre-defined &amp; custom service catalog mapped 1:1 to site URLs</td>
                    <td className="p-4 font-medium text-heading">Triggers &ldquo;Provides:&rdquo; Map Justifications &amp; long-tail discovery</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      4. Business Description
                    </th>
                    <td className="p-4">Contains URLs, phone numbers, ALL-CAPS, or generic AI filler</td>
                    <td className="p-4">≤750-char human summary of services, locality landmarks &amp; credentials</td>
                    <td className="p-4 font-medium text-heading">Clear entity summary for searchers &amp; AI answer engines</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      5. Opening Date &amp; Attributes
                    </th>
                    <td className="p-4">Opening date omitted; payment and consultation attributes unconfigured</td>
                    <td className="p-4">Verified opening month/year + accurate operational &amp; UPI/onsite attributes</td>
                    <td className="p-4 font-medium text-heading">Unlocks &ldquo;Years in business&rdquo; badge &amp; voice search filters</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      6. Website Link &amp; UTMs
                    </th>
                    <td className="p-4">Raw untagged URL or internal page that cannibalizes organic rankings</td>
                    <td className="p-4">Diversity-Update-safe landing page with <code>utm_campaign=gbp</code> tracking</td>
                    <td className="p-4 font-medium text-heading">Preserves both Pack + Organic slots &amp; tracks exact GSC clicks</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      7. Photos &amp; Visual Proof
                    </th>
                    <td className="p-4">Stock imagery, text-heavy flyers, or outdated exterior street view</td>
                    <td className="p-4">10–15 authentic storefront, classroom, or fleet photos + monthly additions</td>
                    <td className="p-4 font-medium text-heading">Validates physical reality &amp; lifts direction/call conversion</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      8. Review Governance
                    </th>
                    <td className="p-4">Sporadic bursts, unanswered feedback, or rating slipping below 3.5★</td>
                    <td className="p-4">Steady monthly review velocity, ≥3.5★ rating &amp; 100% owner replies</td>
                    <td className="p-4 font-medium text-heading">Satisfies 38% Gemini Local AI weight &amp; review justifications</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">
                      9. Edit &amp; Pin Monitoring
                    </th>
                    <td className="p-4">&ldquo;Set and forget&rdquo; approach vulnerable to competitor suggested edits</td>
                    <td className="p-4">Weekly dashboard check for unauthorized category, pin, or hour edits</td>
                    <td className="p-4 font-medium text-heading">Eliminates silent ranking drops &amp; misrouted customer calls</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Conversational FAQ Section (Native <details>/<summary>, Zero FAQPage JSON-LD per AGENTS.md) */}
          <section id="faq" className="scroll-mt-28 space-y-4 border-t border-border-color pt-8">
            <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
              Frequently Asked Questions About Google Business Profile Optimization
            </h2>
            <p className="text-sm text-gray-text">
              Direct answers to the most common technical questions local business owners ask our team during profile audits:
            </p>

            <div className="space-y-4 mt-6">
              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>What does Google Business Profile optimization actually involve?</span>
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
                    Google Business Profile optimization is the complete verification and alignment of nine core profile areas: exact legal business name and NAP address accuracy, primary and secondary category calibration, pre-defined and custom service catalogs, a policy-compliant 750-character description, opening date and operational attributes, Diversity-Update-safe website URL linking with UTM parameters, authentic on-site photography, ethical review velocity (maintaining at least a 3.5★ rating for AI search inclusion), and weekly monitoring against unauthorized suggested edits.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>How do primary and secondary GBP categories affect local rankings?</span>
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
                    Your primary category carries the highest algorithmic weight for Google Maps relevance—switching from a specific primary category to a generic contractor label has been shown in empirical local SEO testing to drop rankings from #1 to #31. Secondary categories tell Google which additional specialist services you provide without overriding your primary classification. Best practice is selecting one exact primary category and two to four focused secondary categories backed by dedicated pages on your website.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Does linking GBP to an existing ranking page hurt organic visibility?</span>
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
                    It can if you link your Google Business Profile to an internal service page that already ranks in the top organic results. Under Google&rsquo;s Diversity Update, Google avoids showing the exact same URL in both the Local 3-Pack and the traditional organic results directly below it. For most single-location businesses, linking GBP to your well-optimized homepage (tagged with UTM parameters) while allowing internal service pages to rank organically preserves maximum SERP real estate.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>How often should a local business update its Google Business Profile in India?</span>
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
                    You do not need to change your core NAP or categories once they are accurately aligned, unless your business physically relocates or launches a new department. However, you should perform a 5-minute governance check every week to reject unauthorized &ldquo;Suggested Edits,&rdquo; respond to new customer reviews within 48 hours, update special festival or holiday hours ahead of time, and upload 2 to 3 authentic workplace or project photos each month.
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Bottom Conversion Block */}
          <section className="rounded-2xl bg-secondary-bg p-8 md:p-10 border border-border-color mt-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Transparent Local Search Governance</span>
            </div>
            <h3 className="mt-2 text-2xl font-heading font-bold text-heading">
              Need a Hands-On Audit of Your Google Business Profile?
            </h3>
            <p className="mt-3 text-sm text-gray-text leading-relaxed">
              Operating from our headquarters in Santoshpur, Kolkata, Spot My Business helps storefronts, clinics, educational institutes, and service-area businesses across Kolkata and 20 Indian markets structure their Google Business Profiles and websites for sustainable local discovery. No lock-in contracts or artificial ranking promises.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading transition-all hover:shadow-lg hover:shadow-bronze/20"
              >
                Schedule a Free Profile Audit
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
                9-Step GBP Checklist Jump Links
              </h4>

              <ol className="mt-4 space-y-2.5 text-xs text-gray-text">
                <li>
                  <a href="#what-gbp-optimization-involves" className="hover:text-light-bronze transition-colors block">
                    • What GBP Optimization Involves (2026 Weights)
                  </a>
                </li>
                <li>
                  <a href="#step-1-nap-accuracy-hours" className="hover:text-light-bronze transition-colors block">
                    1. Core NAP Accuracy &amp; Operating Hours
                  </a>
                </li>
                <li>
                  <a href="#step-2-primary-secondary-categories" className="hover:text-light-bronze transition-colors block">
                    2. Primary &amp; Secondary Categories
                  </a>
                </li>
                <li>
                  <a href="#step-3-services-menus" className="hover:text-light-bronze transition-colors block">
                    3. Pre-Defined &amp; Custom Services
                  </a>
                </li>
                <li>
                  <a href="#step-4-business-description" className="hover:text-light-bronze transition-colors block">
                    4. Customer-Facing Description (≤750 Chars)
                  </a>
                </li>
                <li>
                  <a href="#step-5-attributes-opening-date" className="hover:text-light-bronze transition-colors block">
                    5. Attributes &amp; Opening Date Badge
                  </a>
                </li>
                <li>
                  <a href="#step-6-landing-page-utm" className="hover:text-light-bronze transition-colors block">
                    6. Landing Page &amp; UTM Tracking
                  </a>
                </li>
                <li>
                  <a href="#step-7-photos-videos" className="hover:text-light-bronze transition-colors block">
                    7. Authentic Photos &amp; Visual Proof
                  </a>
                </li>
                <li>
                  <a href="#step-8-review-governance" className="hover:text-light-bronze transition-colors block">
                    8. Review Workflow &amp; ≥3.5★ AI Filter
                  </a>
                </li>
                <li>
                  <a href="#step-9-ongoing-maintenance" className="hover:text-light-bronze transition-colors block">
                    9. Monitoring Against Unwanted Edits
                  </a>
                </li>
                <li>
                  <a href="#audit-matrix" className="hover:text-light-bronze transition-colors block font-semibold text-heading">
                    • 9-Point Verification Matrix Table
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
                  Have SMB Audit Your Listing →
                </Link>
              </div>
            </nav>

            {/* Related Service Pillars */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                Related Service Pillars
              </p>
              <h4 className="mt-2 text-base font-heading font-bold text-heading">
                Spot My Business Capabilities
              </h4>

              <div className="mt-4 space-y-3 text-xs">
                <Link
                  href="/services/google-business-profile-optimization"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Google Business Profile Optimization</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Category calibration, service catalogs, and profile governance.
                  </p>
                </Link>

                <Link
                  href="/services/google-maps-seo"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Google Maps SEO</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Local 3-Pack discovery, citation consistency, and proximity signals.
                  </p>
                </Link>

                <Link
                  href="/services/local-seo"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Local SEO Architecture</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Dedicated service landing pages and LocalBusiness schema.
                  </p>
                </Link>

                <Link
                  href="/services/reputation-management"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Reputation Management</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Ethical review generation and owner response workflows.
                  </p>
                </Link>
              </div>
            </div>

            {/* Client Evidence & Companion Guide */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                  Verified Snapshots
                </p>
                <h4 className="mt-2 text-base font-heading font-bold text-heading">
                  See Our Field Results
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-text">
                  Review recorded project outcomes for Science Squad (Dankuni), Bharat Relocators (Haltu), and Nayak Decorators (Behala).
                </p>
                <Link
                  href="/case-studies"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-light-bronze hover:underline"
                >
                  <span>Explore Client Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="border-t border-border-color pt-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-text">
                  Companion Field Audit
                </p>
                <Link
                  href="/blog/why-your-google-business-profile-isnt-getting-calls-in-kolkata"
                  className="mt-1.5 block text-xs font-semibold text-heading hover:text-light-bronze transition-colors"
                >
                  Why Your Google Business Profile Isn&rsquo;t Getting Calls in Kolkata →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
