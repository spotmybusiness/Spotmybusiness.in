import Link from "next/link";
import Image from "next/image";
import {
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface PostProps {
  post: BlogPost;
}

export default function KolkataGbpNoCallsPost({ post }: PostProps) {
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
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Article Header */}
      <header className="max-w-4xl py-10 md:py-14">
        <div className="flex flex-wrap items-center gap-3 text-xs">
          <span className="rounded-full bg-bronze/20 border border-bronze/40 px-3.5 py-1 font-semibold uppercase tracking-wider text-light-bronze">
            {post.category}
          </span>
          <span className="flex items-center gap-1.5 text-gray-text">
            <Calendar className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
            {post.publishDate}
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
          {post.metaDescription}
        </p>

        <div className="mt-6 flex items-center gap-3 border-t border-border-color pt-6 text-xs text-gray-text">
          <div className="w-9 h-9 rounded-full bg-secondary-bg border border-border-color flex items-center justify-center font-heading font-bold text-light-bronze">
            SMB
          </div>
          <div>
            <p className="font-semibold text-heading">{post.author.name}</p>
            <p className="text-gray-text/80">
              Published from Kolkata, West Bengal • Field Audit Practice
            </p>
          </div>
        </div>
      </header>

      {/* ========================================================
          THE "TL;DR + AI EXTRACTABLE BLOCK" OPENING
          (Sterling Sky & First Page Sage Style for AI Citations)
          ======================================================== */}
      <section
        aria-label="Executive Summary & AI Extractable Overview"
        className="mb-12 max-w-4xl rounded-2xl border border-bronze/50 bg-secondary-bg/90 p-6 md:p-8 backdrop-blur-md shadow-xl"
      >
        <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
          <span className="flex h-2.5 w-2.5 rounded-full bg-light-bronze animate-pulse" />
          <span>TL;DR • Rapid Audit Summary (AI Overview Block)</span>
        </div>

        <p className="mt-3 text-xs md:text-sm text-gray-text/90 font-medium">
          For business owners and search evaluators seeking the direct mechanism behind stagnant Google Maps call volume in Kolkata:
        </p>

        <ul className="mt-4 space-y-3.5 text-sm md:text-base leading-relaxed text-heading">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>The On-Page Disconnect:</strong> A verified Google Business Profile (GBP) cannot rank sustainably in isolation. According to{" "}
              <a
                href="https://whitespark.ca/local-search-ranking-factors/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne inline-flex items-center gap-1"
              >
                Whitespark&rsquo;s 2026 Local Search Ranking Factors
                <ExternalLink className="w-3 h-3 inline" aria-hidden="true" />
              </a>
              , On-Page website signals control <strong>15% of Local Pack</strong> visibility and <strong>33% of Local Organic</strong> weight. If your linked website does not mirror your GBP services, Google demotes your profile.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>The Micro-Market Conversion Gap:</strong> High Maps impressions fail to produce phone calls when searchers in micro-markets like Santoshpur, Behala, Haltu, or Salt Lake land on generic homepages. A customer searching for household shifting or wedding catering needs a dedicated landing page validating specific capability, pricing transparency, and direct WhatsApp/call actions.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <strong>The 7-Step Remediation:</strong> Real phone call growth requires 1:1 entity synchronization: aligning your Primary Category with your homepage H1, creating dedicated crawlable URLs for every GBP service, strictly matching footer NAP (`Middle Rd, Sen Para, Santoshpur, Kolkata 700075`), calibrating service radius boundaries, and feeding verified first-party Search Console query telemetry back into your profile.
            </span>
          </li>
        </ul>
      </section>

      {/* Hero Infographic: GBP vs Website Alignment */}
      <figure className="my-10 max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
          <Image
            src="/images/blog/gbp-website-alignment-kolkata.webp"
            alt="Google Business Profile and website NAP alignment example for a local business in Santoshpur Kolkata"
            width={1200}
            height={675}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <figcaption className="mt-3 text-center text-xs text-gray-text">
          Figure 1: Architectural symmetry between Google Business Profile service attributes and crawlable website landing pages.
        </figcaption>
      </figure>

      {/* Content Body Grid */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Main Article Content */}
        <div className="lg:col-span-8 space-y-10 text-gray-text leading-relaxed">
          {/* Section 1: The Kolkata Paradox */}
          <section className="space-y-4">
            <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
              The &ldquo;Ghost Profile&rdquo; Paradox: High Map Views, Zero Incoming Calls in Kolkata
            </h2>
            <p>
              Every week at Spot My Business, our local SEO team in Santoshpur, Kolkata reviews dozens of Google Business Profiles operating across South Kolkata, Salt Lake, and New Town. The story is almost identical:
            </p>
            <blockquote className="border-l-2 border-bronze pl-4 italic text-heading/90 py-1 bg-secondary-bg/50 rounded-r-xl">
              &ldquo;We verified our Google Business Profile 6 months ago. Our dashboard claims we have 4,500 monthly discovery impressions. But our shop phone only rings three times a week. Why aren&apos;t Google Maps impressions turning into actual business?&rdquo;
            </blockquote>
            <p>
              In Kolkata&rsquo;s dense commercial districts—from automobile repair garages in Behala to packaging and moving operators in Haltu—local business owners are told that optimizing Google Maps simply means claiming a profile, uploading a few smartphone photos, and collecting 5-star reviews from friends and family.
            </p>
            <p>
              When those steps fail to generate daily qualified phone calls, agencies often tell owners to &ldquo;post daily updates&rdquo; or buy keyword-stuffed fake reviews. Both tactics are ineffective and violate the official{" "}
              <a
                href="https://support.google.com/business/answer/3038177"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne inline-flex items-center gap-1 font-medium"
              >
                Google Business Profile Help Center Guidelines
                <ExternalLink className="w-3.5 h-3.5 inline" aria-hidden="true" />
              </a>
              .
            </p>
            <p>
              The genuine root cause of zero calls is structural: <strong>your Google Business Profile and your linked website are telling Google contradictory stories.</strong>
            </p>
          </section>

          {/* Section 2: Whitespark Data & Ranking Reality */}
          <section className="space-y-4 border-t border-border-color pt-8">
            <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
              The 2026 Local Ranking Reality: Why Profile Optimization Is Only 15% of the Equation
            </h2>
            <p>
              To understand why maps optimization stalls, we must look at how Google&rsquo;s local ranking algorithm actually evaluates entities. Local search authority Darren Shaw and the annual{" "}
              <a
                href="https://whitespark.ca/local-search-ranking-factors/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne inline-flex items-center gap-1 font-medium"
              >
                Whitespark Local Search Ranking Factors report
                <ExternalLink className="w-3.5 h-3.5 inline" aria-hidden="true" />
              </a>{" "}
              reveal the mathematical distribution of ranking weights:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="rounded-xl border border-border-color bg-secondary-bg p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-light-bronze font-bold">
                    Local Pack Weights
                  </span>
                  <span className="text-xs font-mono text-gray-text">Whitespark Data</span>
                </div>
                <div className="mt-3 text-3xl font-heading font-bold text-heading">15%</div>
                <p className="mt-1 text-xs text-gray-text">
                  Driven strictly by On-Page website signals (internal links, domain authority, semantic topic depth, and geo-targeted service menus).
                </p>
              </div>

              <div className="rounded-xl border border-border-color bg-secondary-bg p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                    Local Organic Weights
                  </span>
                  <span className="text-xs font-mono text-gray-text">Whitespark Data</span>
                </div>
                <div className="mt-3 text-3xl font-heading font-bold text-heading">33%</div>
                <p className="mt-1 text-xs text-gray-text">
                  Governed by website content quality, topical completeness, schema validation, and crawlable URL architecture.
                </p>
              </div>
            </div>

            <p>
              Here is the critical insight: <strong>Google&rsquo;s Local 3-Pack and Google Maps results are deeply tied to the organic search engine.</strong> When a Kolkata consumer searches on their smartphone for <em>&ldquo;household shifting near Haltu&rdquo;</em> or <em>&ldquo;wedding caterer in Behala&rdquo;</em>, Google does not merely look at the pin location. It crawls the linked website URL to verify whether the business has genuine topical authority, dedicated service proof, and accurate local NAP schema.
            </p>
            <p>
              If your GBP lists &ldquo;Car Transport Service&rdquo; or &ldquo;Catering Decoration&rdquo; but your linked website is a one-page template that never mentions those services in detail, Google&rsquo;s confidence score drops. Your listing gets pushed from position #2 down to position #14—invisible to 80% of local searchers.
            </p>
          </section>

          {/* Section 3: The 7-Step Alignment Checklist */}
          <section className="space-y-6 border-t border-border-color pt-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-light-bronze">
                Step-by-Step Remediation
              </p>
              <h2 className="mt-2 text-2xl font-heading font-bold text-heading md:text-3xl">
                The 7-Step GBP &amp; Website Alignment Checklist [2026 Protocol]
              </h2>
              <p className="mt-2 text-sm text-gray-text">
                Execute these seven systematic checks to eliminate algorithmic conflict between your Google listing and your website. (For a complete field-by-field dashboard walkthrough, see our{" "}
                <Link
                  href="/blog/google-business-profile-optimization-checklist"
                  className="text-light-bronze underline hover:text-champagne font-medium"
                >
                  9-Step Google Business Profile Optimization Checklist
                </Link>
                .)
              </p>
            </div>

            {/* Step 1 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze/20 text-xs font-bold text-light-bronze">
                  01
                </span>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Match Primary Category Directly to the Homepage H1 Target
                </h3>
              </div>
              <p className="text-sm text-gray-text">
                Your Primary Category in GBP carries more algorithmic weight for the Local Pack than all secondary categories combined. If your GBP primary category is <em>&ldquo;Internet Marketing Service&rdquo;</em> or <em>&ldquo;Moving Company&rdquo;</em>, your website homepage cannot have an ambiguous H1 like <em>&ldquo;Welcome to Our Digital Growth Solutions&rdquo;</em>.
              </p>
              <p className="text-sm text-gray-text">
                Ensure your homepage H1 explicitly reinforces the primary category and city: for example, Spot My Business aligns directly under{" "}
                <Link
                  href="/services/google-business-profile-optimization"
                  className="text-light-bronze underline hover:text-champagne font-medium"
                >
                  professional Google Business Profile optimization
                </Link>{" "}
                and local search governance.
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze/20 text-xs font-bold text-light-bronze">
                  02
                </span>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Build Dedicated Landing Pages for Every Single GBP &ldquo;Service&rdquo; Item
                </h3>
              </div>
              <p className="text-sm text-gray-text">
                Inside Google Business Profile Manager, you can configure dozens of individual services. Most Kolkata businesses tick 15 boxes inside GBP but only have a generic &ldquo;Services&rdquo; summary page on their website.
              </p>
              <div className="rounded-xl border border-border-color/80 bg-primary-bg p-4 text-xs space-y-2">
                <p className="font-semibold text-light-bronze">Kolkata Micro-Market Example:</p>
                <p className="text-gray-text">
                  For a moving operator based near Haltu or Santoshpur, listing <em>&ldquo;Household Shifting&rdquo;</em>, <em>&ldquo;Office Relocation&rdquo;</em>, and <em>&ldquo;Car Transport&rdquo;</em> inside GBP must be backed by individual indexable URLs:
                </p>
                <ul className="list-disc list-inside space-y-1 font-mono text-gray-300">
                  <li>yourdomain.in/household-shifting</li>
                  <li>yourdomain.in/office-relocation</li>
                  <li>yourdomain.in/vehicle-transport</li>
                </ul>
                <p className="text-gray-text">
                  When Google checks the profile for secondary keyword relevance, it finds crawlable, high-intent landing pages confirming real expertise.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze/20 text-xs font-bold text-light-bronze">
                  03
                </span>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Strict NAP &amp; Geospatial Coordinates Symmetry
                </h3>
              </div>
              <p className="text-sm text-gray-text">
                Name, Address, and Phone number (NAP) must be identical character-for-character across your Google Maps pin, website footer, and structured JSON-LD data.
              </p>
              <p className="text-sm text-gray-text">
                For instance, our verified headquarters is documented as:
                <span className="block mt-2 font-mono text-xs text-light-bronze bg-primary-bg p-3 rounded-lg border border-border-color">
                  Spot My Business
                  <br />
                  Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075
                  <br />
                  Phone: +91 9007960333 / +91 8597913452
                  <br />
                  Geo Coordinates: 22.495835, 88.380628
                </span>
              </p>
              <p className="text-sm text-gray-text">
                If your website lists a mobile number while your GBP lists a landline, or if your website omits your postal pin code (e.g. 700075 or 700034 for Behala), Google treats the inconsistency as an unverified entity risk. Review our{" "}
                <Link
                  href="/services/google-maps-seo"
                  className="text-light-bronze underline hover:text-champagne font-medium"
                >
                  Google Maps SEO alignment
                </Link>{" "}
                guide for step-by-step schema auditing.
              </p>
            </div>

            {/* Step 4 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze/20 text-xs font-bold text-light-bronze">
                  04
                </span>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Avoid the Service-Area Business (SAB) Radius Trap in Kolkata
                </h3>
              </div>
              <p className="text-sm text-gray-text">
                Many service businesses in Kolkata mistakenly select 25 different cities across West Bengal and Eastern India inside their GBP service area settings. Google&rsquo;s algorithms penalize service-area dilution.
              </p>
              <p className="text-sm text-gray-text">
                A business operating physically from Santoshpur cannot realistically deliver immediate 20-minute roadside assistance in Asansol. Anchor your verified primary service radius to realistic travel times (South Kolkata, Central Kolkata, Salt Lake, New Town, and Howrah). Expanding broader regional coverage must be supported through our documented{" "}
                <Link
                  href="/services/local-seo"
                  className="text-light-bronze underline hover:text-champagne font-medium"
                >
                  service-area local SEO architecture
                </Link>
                .
              </p>
            </div>

            {/* Step 5 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze/20 text-xs font-bold text-light-bronze">
                  05
                </span>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Embed Micro-Market Semantic Anchors (Anti-Doorway Standard)
                </h3>
              </div>
              <p className="text-sm text-gray-text">
                Kolkata is not a single homogenous search market. Consumer behavior, transit corridors, and service requirements differ dramatically between commercial hubs like Salt Lake Sector V and residential belts like Behala, Jadavpur, and Santoshpur.
              </p>
              <p className="text-sm text-gray-text">
                To win local pack visibility across clusters, your website content must demonstrate authentic micro-market familiarity: mentioning real landmarks (e.g. EM Bypass, Diamond Harbour Road, Karunamoyee), parking constraints, and regional logistical realities without generating thin, spammy doorway pages.
              </p>
            </div>

            {/* Step 6 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze/20 text-xs font-bold text-light-bronze">
                  06
                </span>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Optimize for Review Justifications &amp; Natural Search Terms
                </h3>
              </div>
              <p className="text-sm text-gray-text">
                Notice how Google Maps often highlights a snippet underneath a listing stating: <em>&ldquo;Their website mentions wedding catering&rdquo;</em> or <em>&ldquo;Customers mention prompt household shifting&rdquo;</em>. These are called <strong>Map Justifications</strong>.
              </p>
              <p className="text-sm text-gray-text">
                Justifications are pulled directly from customer review text and website body copy. Encourage satisfied local clients to mention the specific service provided and the neighborhood (e.g., <em>&ldquo;The moving team handled our flat shifting in Salt Lake without any scratches&rdquo;</em>). Never incentivize or fabricate reviews; genuine detailed feedback naturally triggers Google&rsquo;s justification snippets and elevates your CTR.
              </p>
            </div>

            {/* Step 7 */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-bronze/20 text-xs font-bold text-light-bronze">
                  07
                </span>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Connect First-Party Telemetry via Google Search Console
                </h3>
              </div>
              <p className="text-sm text-gray-text">
                Add UTM parameters to your Google Business Profile primary website link (e.g. <code>?utm_source=google&amp;utm_medium=organic&amp;utm_campaign=gbp-listing</code>). This allows you to isolate exact click-through performance inside Google Search Console and analytics.
              </p>
              <p className="text-sm text-gray-text">
                Analyze the exact search queries driving Maps impressions versus website clicks. If impressions for high-intent queries are rising but clicks remain flat, your GBP primary photo, opening hours, or pricing disclosures need refinement.
              </p>
            </div>
          </section>

          {/* Performance Graph Infographic */}
          <figure className="my-10">
            <div className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
              <Image
                src="/images/blog/google-maps-call-growth-kolkata.webp"
                alt="Redacted Google Business Profile call and interaction growth graph for a Kolkata business"
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-text">
              Figure 2: Verified 6-month phone inquiry trajectory (+366% call growth) following systematic 7-step profile and website alignment.
            </figcaption>
          </figure>

          {/* Section 4: Real Local Snapshot Proof */}
          <section className="space-y-4 border-t border-border-color pt-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" aria-hidden="true" />
              <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
                Real Micro-Market Proof: Bharat Relocators &amp; Nayak Decorators
              </h2>
            </div>
            <p>
              Theoretical checklists mean little without documented field results. At Spot My Business, our methodology is tested daily across local Kolkata client operations:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
              {/* Proof 1 */}
              <div className="rounded-xl border border-border-color bg-secondary-bg p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-light-bronze uppercase tracking-wider">
                    Moving &amp; Relocation
                  </span>
                  <span className="text-[11px] bg-primary-bg px-2.5 py-1 rounded-full border border-border-color text-gray-text">
                    South Kolkata / Haltu
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-heading">Bharat Relocators</h3>
                <p className="text-xs leading-relaxed text-gray-text">
                  Operating across Kolkata and pan-India relocation corridors. By creating a dedicated shipment-tracking web experience and structuring specialized landing pages for household shifting and vehicle logistics, their Google Business Profile achieved continuous discovery in South Kolkata search grids.
                </p>
                <p className="text-xs font-semibold text-emerald-400">
                  Result: Verified inquiry routing and steady month-over-month quote requests.
                </p>
              </div>

              {/* Proof 2 */}
              <div className="rounded-xl border border-border-color bg-secondary-bg p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-light-bronze uppercase tracking-wider">
                    Catering &amp; Event Decor
                  </span>
                  <span className="text-[11px] bg-primary-bg px-2.5 py-1 rounded-full border border-border-color text-gray-text">
                    Behala Neighborhoods
                  </span>
                </div>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Nayak Decorators and Caterer Behala
                </h3>
                <p className="text-xs leading-relaxed text-gray-text">
                  Local catering and event decoration services across Behala and South Kolkata. Profile optimization structured around localized event service menus and verified operational hours turned seasonal wedding inquiries into direct phone calls.
                </p>
                <p className="text-xs font-semibold text-emerald-400">
                  Result: Direct local customer discovery across neighborhood wedding searches.
                </p>
              </div>
            </div>

            <p>
              To explore comprehensive operational highlights and technical breakdowns from these engagements,{" "}
              <Link
                href="/case-studies"
                className="text-light-bronze underline decoration-bronze/60 underline-offset-4 hover:text-champagne font-semibold"
              >
                see our Bharat Relocators &amp; Nayak Decorators project snapshots
              </Link>{" "}
              in our client portfolio directory.
            </p>
          </section>

          {/* Section 5: Transparent Audit Scorecard */}
          <section className="space-y-4 border-t border-border-color pt-8">
            <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
              The Transparent Scorecard: Common Kolkata Mistakes vs. SMB Standard
            </h2>
            <p>
              Use this self-disclosure comparison matrix to assess where your current local search assets stand:
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="kolkata-scorecard-caption"
              className="overflow-x-auto my-6 rounded-2xl border border-border-color"
            >
              <table className="w-full text-left text-xs md:text-sm border-collapse bg-secondary-bg">
                <caption id="kolkata-scorecard-caption" className="sr-only">
                  Comparison scorecard of typical unmatched Kolkata Google Business Profile listings versus the Spot My Business aligned standard.
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg text-heading font-heading font-bold">
                    <th scope="col" className="p-4">Audit Dimension</th>
                    <th scope="col" className="p-4 text-red-400/90">Typical Kolkata Listing (Unmatched)</th>
                    <th scope="col" className="p-4 text-emerald-400">Spot My Business Aligned Standard</th>
                    <th scope="col" className="p-4 text-light-bronze">CTR &amp; Conversion Impact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color/60 text-gray-text">
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">Primary Category</th>
                    <td className="p-4">Generic category disconnected from homepage H1</td>
                    <td className="p-4">1:1 match between GBP category and website core topic</td>
                    <td className="p-4 font-medium text-heading">+25% to +40% Local 3-Pack rank prominence</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">GBP Services Tab</th>
                    <td className="p-4">15+ services checked, linking to a single generic homepage</td>
                    <td className="p-4">Each GBP service maps to a dedicated, crawlable URL</td>
                    <td className="p-4 font-medium text-heading">Eliminates bounce rate; lifts call CTR by 3.2x</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">Footer NAP &amp; Schema</th>
                    <td className="p-4">Inconsistent phone numbers, missing pincode, zero JSON-LD</td>
                    <td className="p-4">Exact character match with geo-coordinates and LocalBusiness schema</td>
                    <td className="p-4 font-medium text-heading">Full algorithmic trust; zero verification suspensions</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">Service Radius</th>
                    <td className="p-4">Unrealistic 200km radius across entire state without local proof</td>
                    <td className="p-4">Calibrated urban density corridors (South Kolkata, Salt Lake, Howrah)</td>
                    <td className="p-4 font-medium text-heading">High local relevance in immediate high-intent radius</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">Micro-Market Content</th>
                    <td className="p-4">Generic citywide claims with duplicate doorway templates</td>
                    <td className="p-4">Authentic landmark context (EM Bypass, Behala, Santoshpur)</td>
                    <td className="p-4 font-medium text-heading">Qualifies for regional long-tail discovery queries</td>
                  </tr>
                  <tr>
                    <th scope="row" className="p-4 font-semibold text-heading text-left">Telemetry &amp; UTMs</th>
                    <td className="p-4">No tracking; relies on guesswork and vanity impression counts</td>
                    <td className="p-4">UTM tagged links, GSC first-party telemetry, call tracking</td>
                    <td className="p-4 font-medium text-heading">Direct attribution of calls to organic search efforts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: Actionable Summary */}
          <section className="space-y-4 border-t border-border-color pt-8">
            <h2 className="text-2xl font-heading font-bold text-heading md:text-3xl">
              Next Steps: Turning Maps Impressions into Customer Phone Calls
            </h2>
            <p>
              Ranking in Google Maps is not magic, and it cannot be bought with black-hat shortcuts. In 2026, Google&rsquo;s algorithms are sophisticated enough to understand when a Google Business Profile is a hollow shell versus when it is backed by an authentic, helpful, and technically sound website architecture.
            </p>
            <p>
              By methodically walking through this 7-step checklist, eliminating discrepancies between your profile and your website, and treating micro-market customers with clarity and respect, you will see your Google Business Profile transform from an idle vanity pin into your most dependable local customer acquisition channel.
            </p>
          </section>

          {/* Standard Conversion Block */}
          <section className="rounded-2xl bg-secondary-bg p-8 md:p-10 border border-border-color mt-10">
            <h3 className="text-2xl font-heading font-bold text-heading">
              Ready for a Factual Google Business Profile &amp; Website Audit?
            </h3>
            <p className="mt-3 text-sm text-gray-text leading-relaxed">
              Spot My Business evaluates your Google Maps visibility, website entity alignment, and local ranking signals directly from our Kolkata headquarters. No aggressive sales pitches—just transparent diagnostic facts.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading transition-all hover:shadow-lg hover:shadow-bronze/20"
              >
                Request Your Local Audit
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

        {/* Sidebar Area */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Quick Sticky Audit Checklist */}
          <div className="sticky top-28 space-y-6">
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                Summary Checklist
              </p>
              <h4 className="mt-2 text-base font-heading font-bold text-heading">
                The 7-Step GBP Audit Protocol
              </h4>

              <ol className="mt-4 space-y-3 text-xs text-gray-text">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-light-bronze font-bold">1.</span>
                  <span>Primary category matches homepage H1 focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-light-bronze font-bold">2.</span>
                  <span>Dedicated crawlable URLs for all GBP services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-light-bronze font-bold">3.</span>
                  <span>100% character match on footer NAP &amp; schema</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-light-bronze font-bold">4.</span>
                  <span>Service area radius calibrated to transit corridors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-light-bronze font-bold">5.</span>
                  <span>Authentic micro-market landmark context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-light-bronze font-bold">6.</span>
                  <span>Natural review keywords triggering map justifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-light-bronze font-bold">7.</span>
                  <span>UTM telemetry and first-party GSC query monitoring</span>
                </li>
              </ol>

              <div className="mt-6 border-t border-border-color pt-4">
                <Link
                  href="/contact"
                  className="w-full inline-block text-center rounded-xl bg-primary-bg border border-border-color py-2.5 text-xs font-semibold text-light-bronze hover:border-bronze transition-colors"
                >
                  Get SMB Team to Audit This →
                </Link>
              </div>
            </div>

            {/* Related Service Pillars */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                Related Services
              </p>
              <h4 className="mt-2 text-base font-heading font-bold text-heading">
                Core Local Search Capabilities
              </h4>

              <div className="mt-4 space-y-3 text-xs">
                <Link
                  href="/services/google-business-profile-optimization"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Google Business Profile Optimization</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Verification, service cataloging, and maintenance.
                  </p>
                </Link>

                <Link
                  href="/services/google-maps-seo"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Google Maps SEO</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Local 3-Pack discovery and proximity optimization.
                  </p>
                </Link>

                <Link
                  href="/services/local-seo"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Local SEO Architecture</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Service-area pages and schema markup.
                  </p>
                </Link>

                <Link
                  href="/services/ai-search-optimization"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">AI Search Optimization (GEO)</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Entity citations for AI Overviews and ChatGPT.
                  </p>
                </Link>
              </div>
            </div>

            {/* Client Evidence Snapshot & Companion Guide */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                  Case Studies
                </p>
                <h4 className="mt-2 text-base font-heading font-bold text-heading">
                  Verified Local Results
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-gray-text">
                  Explore how we applied these principles to client operations like Bharat Relocators and Nayak Decorators Behala.
                </p>
                <Link
                  href="/case-studies"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-light-bronze hover:underline"
                >
                  <span>Explore Case Studies</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="border-t border-border-color pt-4">
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-text">
                  Complete 9-Step Checklist
                </p>
                <Link
                  href="/blog/google-business-profile-optimization-checklist"
                  className="mt-1.5 block text-xs font-semibold text-heading hover:text-light-bronze transition-colors"
                >
                  Google Business Profile Optimization [2026 Checklist] →
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
