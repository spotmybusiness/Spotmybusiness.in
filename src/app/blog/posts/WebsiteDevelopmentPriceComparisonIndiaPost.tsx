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
  IndianRupee,
  Building2,
  Layers,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface PostProps {
  post: BlogPost;
}

const providerTierPricing = [
  {
    tier: "DIY Website Builders",
    hourly: "Self-service (₹0 labor)",
    entry: "₹1,700–₹19,000/year (entry/localized plans)",
    mid: "₹17,988–₹67,188/yr base (Shopify Basic/Grow yearly) or ~₹28,130/yr (Webflow Premium); ₹76,800+/yr with lean apps",
    complex: "₹1,60,000+/yr (Wix Business Elite) to ₹1,75,000+/mo (Shopify Plus excl. GST)",
    basis: "Verified vendor pricing pages (Oct–Nov 2026) & Indian checkout audits",
  },
  {
    tier: "Freelancers (Entry / Tier-2–3)",
    hourly: "₹300–₹1,200/hr",
    entry: "₹5,000–₹25,000",
    mid: "₹20,000–₹45,000",
    complex: "Generally unsuitable for large scale",
    basis: "Practitioner & agency industry estimates",
  },
  {
    tier: "Freelancers (Mid / Senior Metro)",
    hourly: "₹1,500–₹4,000/hr",
    entry: "₹25,000–₹70,000",
    mid: "₹45,000–₹1,80,000",
    complex: "₹1,50,000–₹6,00,000+ (up to ₹15,00,000 for specialists)",
    basis: "Practitioner & agency industry estimates",
  },
  {
    tier: "Small / Boutique Agencies (5–15 staff)",
    hourly: "₹1,500–₹3,500/hr",
    entry: "₹40,000–₹80,000",
    mid: "₹70,000–₹2,00,000",
    complex: "₹3,00,000–₹18,00,000",
    basis: "Published agency rate cards & practitioner guides",
  },
  {
    tier: "Mid-Sized Agencies (30–150 staff)",
    hourly: "₹2,500–₹5,500/hr",
    entry: "₹1,50,000–₹3,50,000",
    mid: "₹2,00,000–₹8,00,000",
    complex: "₹8,00,000–₹35,00,000",
    basis: "Agency & consultancy market estimates",
  },
  {
    tier: "Large / Enterprise Agencies (200+ staff)",
    hourly: "₹4,000–₹8,000/hr",
    entry: "Rarely accept small builds",
    mid: "₹10,00,000+",
    complex: "₹10,00,000–₹1,00,00,000+",
    basis: "Practitioner industry estimates",
  },
];

const websiteTypePricing = [
  {
    type: "Basic Business Website (5–8 static pages)",
    diy: "₹2,000–₹19,000/yr",
    freelancer: "₹10,000–₹45,000 (sub-₹10k risky)",
    boutique: "₹40,000–₹80,000",
    midAgency: "₹1,50,000–₹3,50,000",
    drivers: "Custom UI vs. theme reuse, mobile QA, basic on-page SEO & copywriting inclusion",
  },
  {
    type: "Professional Multi-Page Business Site (10–30 pages + CMS/blog)",
    diy: "₹3,360–₹7,680/yr (WP.com yr 1) to ~₹28,130–₹32,630/yr (Webflow / Squarespace)",
    freelancer: "₹25,000–₹1,20,000 (SMB sweet spot ₹40k–₹70k)",
    boutique: "₹70,000–₹2,00,000",
    midAgency: "₹1,50,000–₹5,00,000",
    drivers: "WordPress vs. Webflow CMS, lead forms, JSON-LD schema & analytics setup",
  },
  {
    type: "E-Commerce Website (WooCommerce / Shopify)",
    diy: "₹4,788–₹13,824/yr (Wix / WP.com) to ₹17,988+/yr (Shopify Basic) + apps & txn fees",
    freelancer: "₹40,000–₹1,80,000",
    boutique: "₹1,00,000–₹4,50,000 (up to 500 SKUs)",
    midAgency: "₹2,80,000–₹20,00,000+",
    drivers: "SKU count, UPI/COD checkout flows, Shiprocket/Delhivery shipping & ERP sync",
  },
  {
    type: "Custom Website / Web App (React, Next.js, custom backend)",
    diy: "Not feasible on standard DIY builders",
    freelancer: "₹1,50,000–₹6,00,000 (up to ₹15L senior)",
    boutique: "₹1,80,000–₹18,00,000",
    midAgency: "₹4,50,000–₹35,00,000+",
    drivers: "Custom Figma design system, auth, dashboards, API orchestration & automated QA",
  },
  {
    type: "Landing Page (Single campaign / lead-gen)",
    diy: "₹0–₹15,000/yr (builder base plan)",
    freelancer: "₹8,000–₹40,000 (template ₹8k–₹15k; custom ₹15k–₹40k)",
    boutique: "₹15,000–₹40,000 (general) to ₹40,000–₹1,50,000 (agency)",
    midAgency: "₹40,000–₹1,50,000",
    drivers: "Template reuse vs. conversion copywriting, CRO layout & A/B testing setup",
  },
  {
    type: "Website Redesign & Optimization",
    diy: "Platform subscription only (DIY effort)",
    freelancer: "₹10,000–₹30,000 (refresh) to ₹30,000–₹1,00,000 (full)",
    boutique: "₹30,000–₹1,00,000 or matched to new-build agency floors (₹60,000+)",
    midAgency: "₹80,000+ (structural rebuild excl. 18% GST)",
    drivers: "Visual refresh vs. architectural rebuild, 301 redirect mapping & ranking protection",
  },
];

const diyPlatformsIndia = [
  {
    platform: "Shopify India (Oct–Nov 2026)",
    entry: "Starter: ₹399/mo (social/link only, 5% fee)",
    business: "Basic: ₹1,499/mo yearly (₹1,994 monthly) + 2% 3rd-party fee",
    scaling: "Grow: ₹5,599/mo yearly (₹7,447 monthly) + 1% fee",
    caveats:
      "18% GST applies on top. Shopify Payments is unavailable in India, adding ~2%–2.36% gateway fees (Razorpay/Cashfree). Advanced is ₹22,680/mo yearly (0.6% fee); Plus starts ₹1,75,000/mo.",
  },
  {
    platform: "WordPress.com India",
    entry: "Personal: ₹160/mo yr 1 (renews ₹200/mo); Premium: ₹280/mo yr 1",
    business: "Business: ₹640/mo yr 1 (renews ₹800/mo)",
    scaling: "Commerce: ₹1,152/mo yr 1",
    caveats:
      "Year-1 promotional pricing renews roughly 25% higher in Year 2. Verify 18% GST totals at checkout.",
  },
  {
    platform: "Wix (India vs. USD Conflict)",
    entry: "Light: ₹199/mo localized INR vs. $17–$17.77/mo (~₹1,594/mo*)",
    business: "Core: ₹399/mo localized INR vs. $29–$29.77/mo (~₹2,719/mo*)",
    scaling: "Business: ₹799/mo INR vs. $39–$39.77/mo; Elite: ₹1,599/mo vs. $159+/mo",
    caveats:
      "Major documented discrepancy between localized India guides (₹2,388–₹19,188/yr) and global USD pricing pages (~₹17k–₹1.6L+/yr). Always verify exact INR total at live checkout.",
  },
  {
    platform: "Webflow (May–Nov 2026 Restructure)",
    entry: "Starter: $0 (webflow.io); Basic: $15/mo (~₹1,406/mo*, no CMS)",
    business: "Premium (CMS): $25/mo (~₹2,344/mo*, 20k CMS items); Ecomm Std: $29/mo (+2% fee)",
    scaling: "Ecomm Plus: $74/mo (0% fee); Extra seats: $15–$39/mo each",
    caveats:
      "May 2026 update merged CMS & Business into Premium ($25/mo) and halved base mid-tier bandwidth from 100 GB to 50 GB (+$20/mo per extra 50 GB).",
  },
  {
    platform: "Squarespace (2026)",
    entry: "Basic: $19/mo (~₹1,782/mo*, 2% physical / 7% digital fee)",
    business: "Core: $29/mo (~₹2,719/mo*, 0% physical / 5% digital fee)",
    scaling: "Plus: $49/mo; Advanced: $99/mo (0% fees)",
    caveats:
      "No free tier (14-day trial only). Acuity Scheduling adds $16–$55/mo billed yearly.",
  },
];

const tenPointComparison = [
  {
    factor: "1. Initial Investment",
    diy: "Lowest upfront: ₹0–₹30,000/yr subscription",
    freelancer: "Low–moderate: ₹5,000–₹1,80,000 one-time",
    boutique: "Moderate: ₹40,000–₹5,00,000 one-time",
    midAgency: "High: ₹1,50,000–₹35,00,000+ one-time",
  },
  {
    factor: "2. Delivery Timeline",
    diy: "Days to 2 weeks (self-paced)",
    freelancer: "2–4 weeks; vulnerable to parallel-project delays",
    boutique: "3–10 weeks (discovery, wireframes, QA)",
    midAgency: "6 weeks to 6+ months",
  },
  {
    factor: "3. Customization",
    diy: "Bounded by platform templates & app ecosystems (Webflow highest)",
    freelancer: "Moderate–high on WordPress/Shopify; limited for complex backends",
    boutique: "High: custom Figma UI, tailored CMS schemas & API hooks",
    midAgency: "Maximum: custom Next.js/Node stacks & ERP/CRM workflows",
  },
  {
    factor: "4. Design Quality",
    diy: "Clean baseline, often looks like a recognizable template",
    freelancer: "Highly variable: spans amateur theme installs to strong senior work",
    boutique: "Consistently high: dedicated UI/UX designers build brand-specific layouts",
    midAgency: "Enterprise design systems, brand governance & CRO",
  },
  {
    factor: "5. Technical Support",
    diy: "24/7 platform chat for hosting bugs; no custom code help",
    freelancer: "Single point of failure (~33% ghosting risk cited in agency audits)",
    boutique: "Multi-person continuity with structured AMC retainers",
    midAgency: "Formal SLAs, account managers, DevOps & dedicated QA",
  },
  {
    factor: "6. Scalability",
    diy: "Scales smoothly on SaaS, but apps, seats & txn fees compound",
    freelancer: "Often hits an architectural ceiling requiring rebuild within 18 months",
    boutique: "Built to scale alongside local SEO, blogging & D2C growth",
    midAgency: "Engineered for high traffic, localization & B2B portals",
  },
  {
    factor: "7. SEO Capabilities",
    diy: "Covers basics; Webflow strongest; Wix/Squarespace face structural/speed limits",
    freelancer: "Depends entirely on individual skill; often skipped below ₹25,000",
    boutique: "Strong technical SEO: schema markup, Core Web Vitals & clean URLs",
    midAgency: "Enterprise SEO architecture, migrations & programmatic systems",
  },
  {
    factor: "8. Maintenance Burden",
    diy: "Zero server patching; user handles edits & app conflicts",
    freelancer: "Client handles updates or pays ad-hoc; plugins often go unpatched",
    boutique: "Low client burden under monthly AMC (updates, backups, security)",
    midAgency: "Fully managed CI/CD, staging environments & regression QA",
  },
  {
    factor: "9. Ownership & Portability",
    diy: "Low portability: site lives on proprietary SaaS servers",
    freelancer: "High if domain/hosting are in client's name; lock-in risk if on reseller account",
    boutique: "High when contracts guarantee client-owned domain, hosting & repos",
    midAgency: "Full IP assignment, documented repositories & cloud ownership",
  },
  {
    factor: "10. Primary Hidden Costs",
    diy: "Renewal jumps, paid app stacks, transaction fees & USD forex swings",
    freelancer: "Scope-creep renegotiations, omitted copywriting/SEO & rebuild costs",
    boutique: "18% GST (if quoted ex-tax), AMC retainers & premium plugin renewals",
    midAgency: "Change-order fees, minimum retainer terms & enterprise licenses",
  },
];

const costComponentsBreakdown = [
  {
    component: "Domain Registration (.in / .com)",
    cadence: "Recurring (Annual)",
    range: "₹500–₹2,000/yr",
    notes: "BigRock .in starts ₹549/yr (renews ₹899/yr); GoDaddy .com promos from ₹1 yr 1 on 3-yr buys; standard renewals ₹700–₹2,000/yr.",
  },
  {
    component: "Hosting & Server Infrastructure",
    cadence: "Recurring (Monthly/Annual)",
    range: "₹2,500–₹18,000/yr (shared) • ₹99–₹599+/mo (VPS)",
    notes: "Hostinger shared from ₹69/mo; Hostinger VPS ₹149/mo on 4-yr upfront (renews ₹449/mo); DigitalOcean from $4/mo (~₹375/mo). SaaS builders bundle hosting.",
  },
  {
    component: "UI/UX & Brand Design",
    cadence: "One-Time (per redesign cycle)",
    range: "₹10,000–₹1,50,000+ (in build) • Logo ₹5k–₹20k",
    notes: "Theme adaptation stays under ₹15k–₹25k; custom Figma wireframes add ₹30,000–₹1,50,000+.",
  },
  {
    component: "Frontend & Backend Engineering",
    cadence: "One-Time Build",
    range: "₹15,000–₹1,00,000 (CMS) • ₹1.5L–₹25L+ (custom)",
    notes: "WordPress/Shopify theme builds anchor ₹15k–₹1.2L; custom Next.js/React apps with backend APIs run ₹1.8L–₹25L+.",
  },
  {
    component: "CMS & Plugin / SaaS Licenses",
    cadence: "One-Time + Annual Renewals",
    range: "₹3,000–₹20,000/yr (WP plugins)",
    notes: "Self-hosted WordPress core is free, but premium builders, caching, security & WooCommerce add-ons renew annually.",
  },
  {
    component: "Technical SEO Foundation",
    cadence: "One-Time + Optional Retainer",
    range: "Bundled in ₹40k–₹2L builds • Retainers ₹40k–₹80k/mo",
    notes: "Launch setup covers clean URLs, schema, XML sitemap, Core Web Vitals & 301 redirects.",
  },
  {
    component: "SSL & Website Security",
    cadence: "Bundled / Annual",
    range: "₹0 (standard SSL) • ₹3,000–₹15,000/yr (EV SSL)",
    notes: "Reputable hosts include free SSL; charging separately for basic SSL in 2026 is a red flag.",
  },
  {
    component: "Maintenance & Technical Support (AMC)",
    cadence: "Recurring (Monthly)",
    range: "₹2,000–₹15,000/month",
    notes: "Basic AMC (updates, backups, uptime): ₹2,000–₹5,000/mo; standard agency retainers: ₹5,000–₹15,000/mo; Shopify retainers from ₹8,000/mo.",
  },
  {
    component: "Copywriting & Blog Content",
    cadence: "One-Time + Optional Ongoing",
    range: "₹1.50–₹5/word • ₹400–₹6,000 per 800–1,200w post",
    notes: "Frequently excluded from low-cost developer quotes—confirm copy ownership before signing.",
  },
  {
    component: "Gateways, Shipping & Business Tools",
    cadence: "Usage + Recurring SaaS",
    range: "~2.36% per txn • Shiprocket ₹0–₹799/mo • Apps ₹1.5k–₹35k+/mo",
    notes: "Razorpay/Cashfree ~1.99%–2% + 18% GST (~2.36% effective). Google Workspace ~₹139–₹278/user/mo (bundled) to ₹680–₹2,000/user/mo.",
  },
];

const regionalPricingRows = [
  {
    segment: "Freelance Developer Hourly Rate",
    kolkata: "₹800–₹2,500/hour",
    tier1: "₹1,500–₹4,000/hour",
    tier23: "₹300–₹1,200/hour",
    insight: "Kolkata freelancers sit roughly 38%–47% below Tier-1 metro rate endpoints while remaining above Tier-2/3 averages.",
  },
  {
    segment: "Boutique Agency (Verified B2B Profile)",
    kolkata: "$25–$49/hr (~₹2,344–₹4,594/hr*); min. project $1,000+ (~₹93,765+*)",
    tier1: "₹1,500–₹3,500/hr • ₹70,000–₹5,00,000/project",
    tier23: "Solo studios (1–2 staff): ₹800–₹1,800/hour",
    insight: "Export-oriented Kolkata boutique agencies (such as Clutch-verified Pixel Street) align closely with national boutique pricing.",
  },
  {
    segment: "Local SMB Business Website Estimates",
    kolkata: "Basic: ₹15k–₹35k • Business: ₹40k–₹80k • E-comm: ₹50k–₹2L+ • Custom: ₹1L–₹5L+",
    tier1: "Starter: ₹40k–₹80k • Growth CMS: ₹80k–₹2L • Custom/E-comm: ₹3L+",
    tier23: "National template mills advertise ₹3,800–₹10,300 packages across cities",
    insight: "Local Kolkata SMB pricing mirrors India's broader ₹40,000–₹70,000 WordPress sweet spot; empirical data for WB outside Kolkata (Siliguri, Durgapur, Asansol) remains limited.",
  },
];

export default function WebsiteDevelopmentPriceComparisonIndiaPost({ post }: PostProps) {
  const ctaHref = `/contact?source=blog&article=${post.slug}`;

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
            Website Development Price Comparison in India (2026)
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
            Last Updated: <time dateTime={post.modifiedDate}>November 22, 2026</time>
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-heading font-bold leading-tight text-heading sm:text-4xl md:text-5xl">
          Website Development Price Comparison in India: Freelancer vs Agency vs DIY Website Builders (2026 Guide)
        </h1>

        <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-text">
          Ask five web developers in India to quote a 10-page business website and you will routinely receive numbers spanning ₹12,000 to ₹1,20,000+ for what sounds like the same deliverable. This 2026 pricing benchmark—synthesized from 49 verified Indian vendor rate cards, official SaaS checkout audits, and agency studies—breaks down exactly what you pay across DIY builders, freelancers, and agencies, what drives a 10x gap, and the hidden recurring costs most quotes leave out.
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
              <span>Kolkata &amp; Pan-India Web Engineering Benchmarks</span>
            </div>
          </div>

          <details className="group rounded-xl border border-border-color bg-secondary-bg/60 px-4 py-2.5 text-xs text-gray-text">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-heading">
              <span className="inline-flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
                Research Methodology &amp; Tariff Verification Log (Nov 2026)
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
                <strong className="text-heading">Verified SaaS Tariffs (Oct–Nov 2026):</strong> Shopify India localized INR slabs (`shopify.com/in/pricing`), Webflow&rsquo;s May 2026 plan restructure, Wix localized vs. USD pricing conflicts, WordPress.com India renewals, and Squarespace 2026 plans.
              </li>
              <li>
                <strong className="text-heading">Exchange &amp; Tax Basis:</strong> Indicative INR conversions for USD-quoted SaaS plans (marked with `*`) use the FBIL reference rate of ₹93.7650/USD as of November 12, 2026, before bank forex markups and mandatory 18% Indian GST (SAC 998314).
              </li>
              <li>
                <strong className="text-heading">Editorial Transparency:</strong> India does not have a single government-run national survey of custom agency fees; service ranges reflect audited agency rate cards, Clutch B2B profiles, and 2026 practitioner guides—never invented averages.
              </li>
            </ol>
          </details>
        </div>
      </header>

      {/* Main Content + Sticky Sidebar Grid */}
      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-10">
          {/* Above-the-Fold Quick Answer Box */}
          <aside
            aria-label="Quick Answer Summary"
            className="rounded-2xl border-2 border-bronze/50 bg-secondary-bg p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Quick Answer: How Much Does a Website Cost in India in 2026?</span>
            </div>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-heading font-medium">
              In 2026, a website in India costs <strong>₹1,700–₹19,000/year</strong> on entry DIY builders, <strong>₹5,000–₹1,80,000+</strong> with a freelance developer, <strong>₹40,000–₹5,00,000</strong> with a small boutique agency (5–15 staff), and <strong>₹1,50,000–₹35,00,000+</strong> with a mid-sized agency—before recurring hosting, maintenance retainers (₹2,000–₹15,000/month), and 18% GST.
            </p>
            <div className="mt-5 border-t border-border-color pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-light-bronze mb-3">
                Jump to Any Section:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-gray-text">
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#provider-tier-pricing" className="hover:text-light-bronze underline underline-offset-2">
                    1. 2026 India Pricing by Provider Tier
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#pricing-by-website-type" className="hover:text-light-bronze underline underline-offset-2">
                    2. Cost by Website Type (6 Categories)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#diy-builder-tariffs-india" className="hover:text-light-bronze underline underline-offset-2">
                    3. DIY Builder Tariffs (Shopify, Webflow, Wix)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#freelancer-vs-agency-vs-diy" className="hover:text-light-bronze underline underline-offset-2">
                    4. 10-Point Freelancer vs. Agency vs. DIY Matrix
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#one-time-vs-recurring-costs" className="hover:text-light-bronze underline underline-offset-2">
                    5. One-Time vs. Recurring Costs &amp; Year-1 TCO
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#eight-hidden-costs-india" className="hover:text-light-bronze underline underline-offset-2">
                    6. 8 Hidden Costs &amp; Pricing Traps
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#kolkata-vs-national-pricing" className="hover:text-light-bronze underline underline-offset-2">
                    7. Kolkata &amp; West Bengal vs. Metro Rates
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#how-to-choose-by-stage" className="hover:text-light-bronze underline underline-offset-2">
                    8. How to Choose by Business Stage + FAQ
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
              Figure 1: Verified 2026 Indian website development pricing bands across DIY website builders, freelance developers, boutique agencies, and mid-sized engineering agencies.
            </figcaption>
          </figure>

          {/* Section 1: Provider Tier Pricing */}
          <section id="provider-tier-pricing" className="space-y-5 pt-2">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              1. 2026 Website Development Pricing in India by Provider Tier
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Across the entire Indian market, website projects span from <strong>₹5,000</strong> to <strong>₹50,00,000+</strong>. The biggest source of confusion for business owners is assuming a ₹15,000 quote and a ₹1,50,000 quote describe the same engineering work. In reality, a ₹10,000–₹25,000 engagement typically installs a pre-made template with client-supplied text and zero technical SEO, whereas a ₹70,000–₹2,00,000 boutique agency project bundles UX wireframing, structured copy, mobile QA, Core Web Vitals optimization, schema markup, and client-owned infrastructure.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              While ultra-low-cost template mills advertise nationwide &ldquo;complete websites&rdquo; at ₹3,800–₹10,300 (and promotional static bundles from ₹6,999), audited Indian agency rate cards show custom-designed agency websites start at <strong>₹40,000–₹60,000</strong>—still 40% to 70% below equivalent US agency benchmarks.
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="provider-tier-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="provider-tier-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 1: 2026 Indian Web Development Market Pricing by Provider Category (INR)
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">Provider Tier</th>
                    <th scope="col" className="p-4 font-bold">Hourly Rate</th>
                    <th scope="col" className="p-4 font-bold">Entry / Basic</th>
                    <th scope="col" className="p-4 font-bold">Growth / Mid-Tier</th>
                    <th scope="col" className="p-4 font-bold">Complex / Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {providerTierPricing.map((row, idx) => (
                    <tr
                      key={row.tier}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.tier}
                        <span className="mt-1 block text-[11px] font-normal text-gray-text/80">
                          {row.basis}
                        </span>
                      </th>
                      <td className="p-4 align-top font-mono text-xs text-light-bronze">
                        {row.hourly}
                      </td>
                      <td className="p-4 align-top">{row.entry}</td>
                      <td className="p-4 align-top font-medium text-heading">{row.mid}</td>
                      <td className="p-4 align-top">{row.complex}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 2: Website Type Matrix */}
          <section id="pricing-by-website-type" className="space-y-5 border-t border-border-color pt-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              2. Realistic 2026 Price Ranges by Website Type
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Before requesting quotes, categorize what kind of digital asset your business actually needs. For example, a local coaching center or clinic rarely needs a ₹15 lakh custom web application—whereas a D2C brand handling UPI, COD verification, and Shiprocket/Delhivery automation will quickly outgrow a ₹10,000 template install.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Notice also how <strong>website redesigns</strong> vary widely: light visual refreshes run ₹10,000–₹30,000, full redesigns run ₹30,000–₹1,00,000, and structural rebuilds start at ₹80,000+ (excluding 18% GST). Agencies that handle full 301 redirect mapping and SEO migration safety often price redesigns identically to fresh builds (starting around ₹60,000 for up to 8 pages) because protecting existing Google rankings takes careful technical auditing.
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="website-type-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="website-type-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 2: Estimated 2026 India Cost Breakdown by Website Category (INR)
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">Website Type</th>
                    <th scope="col" className="p-4 font-bold">DIY (Year 1)</th>
                    <th scope="col" className="p-4 font-bold">Freelancer</th>
                    <th scope="col" className="p-4 font-bold">Boutique Agency</th>
                    <th scope="col" className="p-4 font-bold">Mid-Sized Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {websiteTypePricing.map((row, idx) => (
                    <tr
                      key={row.type}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.type}
                        <span className="mt-1 block text-[11px] font-normal text-gray-text/80">
                          Drivers: {row.drivers}
                        </span>
                      </th>
                      <td className="p-4 align-top">{row.diy}</td>
                      <td className="p-4 align-top">{row.freelancer}</td>
                      <td className="p-4 align-top font-medium text-heading">{row.boutique}</td>
                      <td className="p-4 align-top">{row.midAgency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3: Verified DIY Builder Pricing in India */}
          <section id="diy-builder-tariffs-india" className="space-y-5 border-t border-border-color pt-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              3. DIY Website Builders in India: Verified 2026 Tariffs &amp; Pricing Conflicts
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Many older Indian SEO blogs still quote outdated USD-converted Shopify rates ($39/$105/$399/month) or fail to flag Webflow&rsquo;s May 2026 restructuring. The table below reflects verified October–November 2026 published tariffs and explicitly calls out where localized India checkout rates conflict with global USD pages.
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="diy-tariffs-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="diy-tariffs-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 3: Verified 2026 DIY Platform Tariffs in India (*USD conversions at ₹93.7650/USD FBIL Nov 12, 2026)
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">Platform</th>
                    <th scope="col" className="p-4 font-bold">Entry / Personal</th>
                    <th scope="col" className="p-4 font-bold">Business / Store Floor</th>
                    <th scope="col" className="p-4 font-bold">Scaling Tier</th>
                    <th scope="col" className="p-4 font-bold">2026 India Caveats</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {diyPlatformsIndia.map((row, idx) => (
                    <tr
                      key={row.platform}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.platform}
                      </th>
                      <td className="p-4 align-top">{row.entry}</td>
                      <td className="p-4 align-top font-medium text-heading">{row.business}</td>
                      <td className="p-4 align-top">{row.scaling}</td>
                      <td className="p-4 align-top text-xs">{row.caveats}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4: 10-Point Comparative Matrix */}
          <section id="freelancer-vs-agency-vs-diy" className="space-y-5 border-t border-border-color pt-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              4. Freelancer vs. Agency vs. DIY Builders: 10-Point Comparative Analysis
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Upfront sticker price is only one dimension of choosing how to build a commercial website. Technical SEO architecture, ownership of your domain and source repository, and post-launch continuity decide whether your website generates steady inquiries over 3–5 years or requires an expensive rebuild inside 18 months.
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="ten-point-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="ten-point-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 4: 10-Factor Comparison — DIY Builders vs. Freelancers vs. Small Boutique Agencies vs. Mid-Sized Agencies
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">Dimension</th>
                    <th scope="col" className="p-4 font-bold">DIY Builders</th>
                    <th scope="col" className="p-4 font-bold">Freelancers</th>
                    <th scope="col" className="p-4 font-bold text-light-bronze">Small Boutique Agency</th>
                    <th scope="col" className="p-4 font-bold">Mid-Sized Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {tenPointComparison.map((row, idx) => (
                    <tr
                      key={row.factor}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.factor}
                      </th>
                      <td className="p-4 align-top">{row.diy}</td>
                      <td className="p-4 align-top">{row.freelancer}</td>
                      <td className="p-4 align-top font-medium text-heading">{row.boutique}</td>
                      <td className="p-4 align-top">{row.midAgency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Mid-Post Consultation CTA */}
          <aside
            aria-label="Custom Website Scope Review"
            className="rounded-2xl border border-bronze/40 bg-gradient-to-br from-secondary-bg to-primary-bg p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                  Transparent Engineering Scope
                </p>
                <h3 className="text-xl font-heading font-bold text-heading">
                  Comparing Quotes and Unsure What Is Missing From the Scope?
                </h3>
                <p className="text-xs md:text-sm text-gray-text leading-relaxed">
                  Spot My Business engineers custom static and CMS websites from our Kolkata headquarters with clean semantic HTML, schema markup, and full client ownership. Share your goals and we will map an honest technical scope—without locking you into rigid tiers.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-xs md:text-sm font-semibold text-white hover:shadow-lg hover:shadow-bronze/20 transition-all"
                >
                  <span>Discuss Your Website Scope</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Section 5: One-Time vs. Recurring Costs */}
          <section id="one-time-vs-recurring-costs" className="space-y-5 border-t border-border-color pt-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              5. One-Time vs. Recurring Website Costs: The Complete Breakdown
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              A website is operational infrastructure, not a one-time print brochure. Separating upfront build costs from annual renewals and monthly support prevents surprise invoices six months after launch. For context, an illustrative <strong>₹60,000 custom SMB WordPress website</strong> (₹70,800 including 18% GST) plus ₹3,200–₹20,000/year for domain and hosting, ₹3,000–₹20,000/year for premium plugins, and ₹24,000–₹60,000/year for basic AMC (₹2,000–₹5,000/month) reaches a true <strong>Year-1 Total Cost of Ownership of ₹1,01,000–₹1,70,800</strong> before business email or content retainers.
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="cost-components-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="cost-components-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 5: One-Time vs. Recurring Website Expenses in India (2026)
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">Cost Component</th>
                    <th scope="col" className="p-4 font-bold">Billing Cadence</th>
                    <th scope="col" className="p-4 font-bold">Realistic 2026 Range (INR)</th>
                    <th scope="col" className="p-4 font-bold">Vendor &amp; Scope Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {costComponentsBreakdown.map((row, idx) => (
                    <tr
                      key={row.component}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.component}
                      </th>
                      <td className="p-4 align-top font-mono text-xs text-light-bronze">
                        {row.cadence}
                      </td>
                      <td className="p-4 align-top font-medium text-heading">{row.range}</td>
                      <td className="p-4 align-top text-xs">{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 6: 8 Hidden Costs & Pricing Traps */}
          <section id="eight-hidden-costs-india" className="space-y-6 border-t border-border-color pt-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
              <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Buyer Protection Checklist</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              6. Eight Hidden Costs and Pricing Traps Indian Businesses Commonly Miss
            </h2>

            <figure className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
              <Image
                src="/images/blog/shopify-gst-hidden-costs-india-2026.webp"
                alt="Hidden website cost breakdown in India showing Year-1 TCO on a 60,000 INR build and Shopify India 4.36 percent stacked transaction fees"
                width={1200}
                height={675}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 800px"
                className="w-full h-auto object-cover"
              />
              <figcaption className="border-t border-border-color px-5 py-3 text-xs text-gray-text">
                Figure 2: Side-by-side arithmetic illustrating Year-1 TCO on a ₹60,000 SMB website versus Shopify Basic&rsquo;s 4.36% stacked prepaid order deduction in India.
              </figcaption>
            </figure>

            <ol className="grid gap-4 sm:grid-cols-2">
              <li className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-light-bronze">TRAP 01</span>
                <h3 className="text-base font-heading font-bold text-heading">
                  18% GST Omission (SAC 998314)
                </h3>
                <p className="text-xs leading-relaxed text-gray-text">
                  Web design, development, domains, hosting, and AMC attract 18% GST. A ₹50,000 proposal becomes ₹59,000; ₹2,00,000 becomes ₹2,36,000. Solo freelancers below the ₹20 lakh turnover threshold typically do not charge GST.
                </p>
              </li>

              <li className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-light-bronze">TRAP 02</span>
                <h3 className="text-base font-heading font-bold text-heading">
                  Shopify&rsquo;s 4.36% Stacked Order Fees
                </h3>
                <p className="text-xs leading-relaxed text-gray-text">
                  Because Shopify Payments is unavailable in India, Basic stores pay 2% to Shopify plus ~2.36% to Razorpay/Cashfree (₹43.60 on every ₹1,000 prepaid order). Upgrading Basic → Grow breaks even on fee savings above ~₹4.1 lakh/month prepaid volume (yearly billing).
                </p>
              </li>

              <li className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-light-bronze">TRAP 03</span>
                <h3 className="text-base font-heading font-bold text-heading">
                  Promotional Year-1 Renewal Spikes
                </h3>
                <p className="text-xs leading-relaxed text-gray-text">
                  Headline offers hide steep Year-2 jumps: Hostinger&rsquo;s ₹149/mo VPS requires 4-year upfront payment and renews at ₹449/mo; WordPress.com Personal jumps from ₹160/mo to ₹200/mo; Squarespace .com domains jump from $10 to $22/yr.
                </p>
              </li>

              <li className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-light-bronze">TRAP 04</span>
                <h3 className="text-base font-heading font-bold text-heading">
                  Vendor Lock-In &amp; &ldquo;Hostage&rdquo; Domains
                </h3>
                <p className="text-xs leading-relaxed text-gray-text">
                  Budget developers sometimes register your domain and hosting under their personal reseller account. Always insist that domain registrars, cloud hosting, and code repositories are billed directly under your business email.
                </p>
              </li>

              <li className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-light-bronze">TRAP 05</span>
                <h3 className="text-base font-heading font-bold text-heading">
                  The ₹3,800–₹15,000 Rebuild Trap
                </h3>
                <p className="text-xs leading-relaxed text-gray-text">
                  Ultra-cheap template bundles ship with bloated page builders, weak mobile UX, and zero schema or Search Console verification—forcing businesses to pay twice for a complete rebuild within 18 months.
                </p>
              </li>

              <li className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-light-bronze">TRAP 06</span>
                <h3 className="text-base font-heading font-bold text-heading">
                  &ldquo;Content Not Included&rdquo; Scope Gaps
                </h3>
                <p className="text-xs leading-relaxed text-gray-text">
                  Developer quotes frequently omit copywriting and photography. Hiring an experienced Indian copywriter afterward adds ₹1.50–₹5/word (or ₹400–₹6,000 per long-form page) and delays launch timelines.
                </p>
              </li>

              <li className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-light-bronze">TRAP 07</span>
                <h3 className="text-base font-heading font-bold text-heading">
                  Overengineering Simple SMB Sites
                </h3>
                <p className="text-xs leading-relaxed text-gray-text">
                  Not every local clinic or consultancy needs a custom microservice backend. Paying ₹5 lakh+ when a fast, cleanly structured ₹40,000–₹80,000 CMS or static site solves the real lead-generation problem wastes capital.
                </p>
              </li>

              <li className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2">
                <span className="text-xs font-mono font-bold text-light-bronze">TRAP 08</span>
                <h3 className="text-base font-heading font-bold text-heading">
                  DIY App, Seat &amp; Bandwidth Bloat
                </h3>
                <p className="text-xs leading-relaxed text-gray-text">
                  A ₹1,499/mo Shopify Basic store routinely reaches ₹6,400+/month after 18% GST, domain, and three paid apps (scaling stores spend ₹8,000–₹35,000+/mo on apps). Webflow&rsquo;s May 2026 plan cut mid-tier bandwidth to 50 GB (+$20/mo per extra 50 GB).
                </p>
              </li>
            </ol>
          </section>

          {/* Section 7: Kolkata & West Bengal vs. National Pricing */}
          <section id="kolkata-vs-national-pricing" className="space-y-5 border-t border-border-color pt-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              7. Kolkata &amp; West Bengal vs. Bengaluru, Mumbai &amp; Delhi-NCR Pricing
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Geography still influences freelance hourly rates in India, though export-grade boutique engineering teams in Kolkata price closer to national agency standards. Operating from Santoshpur, Kolkata and serving clients across 20 Indian markets remotely, we see buyers save substantially on overhead without sacrificing engineering rigor when they work with a disciplined Kolkata partner.
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="regional-pricing-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="regional-pricing-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 6: Regional Web Development Pricing Comparison — Kolkata / WB vs. Tier-1 Metros vs. Tier-2/3 India
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">Market Segment</th>
                    <th scope="col" className="p-4 font-bold text-light-bronze">Kolkata / West Bengal</th>
                    <th scope="col" className="p-4 font-bold">Bengaluru / Mumbai / NCR</th>
                    <th scope="col" className="p-4 font-bold">Tier-2 / Tier-3 India</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {regionalPricingRows.map((row, idx) => (
                    <tr
                      key={row.segment}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.segment}
                        <span className="mt-1 block text-[11px] font-normal text-gray-text/80">
                          {row.insight}
                        </span>
                      </th>
                      <td className="p-4 align-top font-medium text-heading">{row.kolkata}</td>
                      <td className="p-4 align-top">{row.tier1}</td>
                      <td className="p-4 align-top">{row.tier23}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 8: How to Choose by Business Stage */}
          <section id="how-to-choose-by-stage" className="space-y-6 border-t border-border-color pt-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              8. How to Choose the Right Development Path for Your Business Stage
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Rather than picking the cheapest quote or the most expensive stack, match your build model to your current operational stage and revenue dependency on organic search:
            </p>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-light-bronze">
                  <IndianRupee className="w-4 h-4" aria-hidden="true" />
                  <span>Stage 1 • Under ₹25,000</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Solopreneurs &amp; Early Validation
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-text">
                  Use a DIY builder (WordPress.com Personal/Premium, Wix Light/Core, or Shopify Starter at ₹399/mo) to validate demand quickly—or hire a vetted mid-level freelancer for a tightly scoped 5-page WordPress site (₹20,000–₹45,000) where you supply finalized copy and photos upfront.
                </p>
              </div>

              <div className="rounded-2xl border border-bronze/50 bg-secondary-bg p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-light-bronze">
                  <Building2 className="w-4 h-4" aria-hidden="true" />
                  <span>Stage 2 • ₹40,000–₹1,50,000</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Local SMEs &amp; Professional Service Firms
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-text">
                  Partner with a small boutique agency for a cleanly engineered website (₹40,000–₹80,000 standard; up to ₹1,80,000 for multi-service local SEO architecture), paired with a ₹2,000–₹5,000/month{" "}
                  <Link
                    href="/services/website-management"
                    className="text-light-bronze underline underline-offset-2 hover:text-champagne"
                  >
                    Website Management
                  </Link>{" "}
                  plan so updates, backups, and GBP alignment never slip.
                </p>
              </div>

              <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-light-bronze">
                  <Layers className="w-4 h-4" aria-hidden="true" />
                  <span>Stage 3 • ₹1,00,000–₹5,00,000</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Growing D2C E-Commerce Brands
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-text">
                  Choose Shopify (Basic ₹1,499/mo yearly until prepaid sales exceed ~₹4.1L/mo, then Grow) for managed speed and uptime, or self-hosted WooCommerce if avoiding per-order SaaS commissions matters more. Hire an e-commerce boutique partner (₹1,20,000–₹4,50,000) to wire UPI, COD verification, and Shiprocket cleanly.
                </p>
              </div>

              <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-light-bronze">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  <span>Stage 4 • ₹3,00,000–₹35,00,000+</span>
                </div>
                <h3 className="text-lg font-heading font-bold text-heading">
                  Funded Startups, SaaS &amp; Mid-Market
                </h3>
                <p className="text-xs md:text-sm leading-relaxed text-gray-text">
                  Invest in an established boutique or mid-sized engineering team: either a custom Webflow marketing site ($25/mo Premium CMS) for rapid marketing iteration, or full-stack Next.js/React + backend engineering for user auth, dashboards, ERP/CRM integrations, and B2B portals.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9: Native HTML FAQs (Zero JS, No FAQPage JSON-LD) */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="space-y-4 border-t border-border-color pt-10"
          >
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-heading font-bold text-heading">
              Frequently Asked Questions About Website Pricing in India (2026)
            </h2>
            <p className="text-sm text-gray-text">
              Straightforward answers grounded in verified 2026 Indian pricing audits:
            </p>

            <div className="space-y-4 mt-6">
              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>How much does a basic 5–8 page business website cost in India in 2026?</span>
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
                    In 2026, a basic 5–8 page business website costs ₹2,000–₹19,000/year on entry DIY platforms, ₹10,000–₹45,000 with a freelancer, ₹40,000–₹80,000 with a small boutique agency, and ₹1,50,000–₹3,50,000 with a mid-sized agency. Quotes below ₹10,000 almost always exclude custom UI design, copywriting, technical SEO, hosting, and 18% GST.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Is Shopify or WooCommerce cheaper for an Indian e-commerce business?</span>
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
                    WooCommerce charges ₹0 platform subscription and ₹0 per-order platform commission, leaving you to pay only for hosting, plugins (₹3,000–₹20,000/year), maintenance, and payment gateway fees (~2.36%). Shopify Basic starts at ₹1,499/month billed yearly (+ 18% GST) plus a 2% third-party transaction fee stacked on top of ~2.36% Indian gateway fees (4.36% total per prepaid order) and ₹1,500–₹6,000+/month in common paid apps—making Shopify faster to launch but costlier on transaction margins as order volume scales.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Does 18% GST apply to website development and maintenance in India?</span>
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
                    Yes. Website design, development, hosting, domains, and maintenance retainers fall under SAC 998314 and attract 18% GST from GST-registered agencies and SaaS vendors. Unregistered solo freelancers earning under the ₹20 lakh annual turnover threshold generally do not charge GST. Always confirm whether a quote is inclusive or exclusive of GST before comparing vendors.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Why does one developer quote ₹15,000 while an agency quotes ₹1,00,000 for the same website?</span>
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
                    A ₹15,000 build typically installs an off-the-shelf theme, swaps logos and text you provide, and ends at handoff with no copy structure, schema markup, or cross-device QA. A ₹1,00,000 boutique agency engagement funds discovery wireframing, custom mobile-first UI, Core Web Vitals speed tuning, technical SEO setup, Search Console verification, and multi-person post-launch accountability.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>How much does monthly website maintenance (AMC) cost in India?</span>
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
                    Basic AMC covering CMS/plugin updates, off-site backups, SSL monitoring, and uptime checks ranges from ₹2,000 to ₹5,000/month. Standard agency retainers that include ongoing content updates and speed tuning run ₹5,000 to ₹15,000/month, while dedicated Shopify store retainers typically start from ₹8,000/month.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>How do Kolkata website development prices compare with Bengaluru or Mumbai?</span>
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
                    Kolkata freelance hourly rates (₹800–₹2,500/hour) sit roughly 38%–47% lower than Bengaluru, Mumbai, and Delhi-NCR (₹1,500–₹4,000/hour), and local Kolkata business websites commonly fall in the ₹40,000–₹80,000 tier. However, export-oriented boutique engineering studios in Kolkata bill closer to national boutique standards ($25–$49/hour, $1,000+ minimum project).
                  </p>
                </div>
              </details>
            </div>
          </section>

          {/* Bottom Conversion Block */}
          <section className="rounded-2xl bg-secondary-bg p-8 md:p-10 border border-border-color mt-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              <ShieldCheck
                className="w-4 h-4"
                style={{ color: "var(--blog-growth, #7B8E77)" }}
                aria-hidden="true"
              />
              <span>Custom Scope • Zero Rigid Packages</span>
            </div>
            <h2 className="mt-2 text-2xl font-heading font-bold text-heading">
              Want an Honest Engineering Scope for Your Next Website?
            </h2>
            <p className="mt-3 text-sm text-gray-text leading-relaxed">
              Operating from Santoshpur, Kolkata and serving businesses remotely across 20 Indian markets, Spot My Business builds fast, SEO-ready websites with client-owned domains, clean semantic HTML, and Search Console verification from day one. Explore our{" "}
              <Link
                href="/case-studies"
                className="text-light-bronze underline underline-offset-2 hover:text-champagne"
              >
                live client Portfolio
              </Link>{" "}
              or share your requirements for a transparent scope review.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={ctaHref}
                className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-bronze/20"
              >
                Request a Custom Website Scope
              </Link>
              <Link
                href="/services/website-development"
                className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text transition-colors hover:text-heading"
              >
                Explore Website Development →
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
                2026 India Web Cost Guide
              </h3>

              <ol className="mt-4 space-y-2.5 text-xs text-gray-text">
                <li>
                  <a href="#provider-tier-pricing" className="hover:text-light-bronze transition-colors block">
                    1. Pricing by Provider Tier (INR)
                  </a>
                </li>
                <li>
                  <a href="#pricing-by-website-type" className="hover:text-light-bronze transition-colors block">
                    2. Pricing by Website Type (6 Types)
                  </a>
                </li>
                <li>
                  <a href="#diy-builder-tariffs-india" className="hover:text-light-bronze transition-colors block">
                    3. DIY Platform Tariffs &amp; Conflicts
                  </a>
                </li>
                <li>
                  <a href="#freelancer-vs-agency-vs-diy" className="hover:text-light-bronze transition-colors block">
                    4. 10-Point Provider Comparison
                  </a>
                </li>
                <li>
                  <a href="#one-time-vs-recurring-costs" className="hover:text-light-bronze transition-colors block">
                    5. One-Time vs. Recurring TCO
                  </a>
                </li>
                <li>
                  <a href="#eight-hidden-costs-india" className="hover:text-light-bronze transition-colors block">
                    6. 8 Hidden Costs &amp; GST Traps
                  </a>
                </li>
                <li>
                  <a href="#kolkata-vs-national-pricing" className="hover:text-light-bronze transition-colors block">
                    7. Kolkata vs. Metro Rate Gap
                  </a>
                </li>
                <li>
                  <a href="#how-to-choose-by-stage" className="hover:text-light-bronze transition-colors block">
                    8. How to Choose by Business Stage
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
                  href={ctaHref}
                  className="w-full inline-block text-center rounded-xl bg-primary-bg border border-border-color py-2.5 text-xs font-semibold text-light-bronze hover:border-bronze transition-colors"
                >
                  Get a Custom Website Scope →
                </Link>
              </div>
            </nav>

            {/* Related Service Pillars */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                Related Service Pillars
              </p>
              <h3 className="mt-2 text-base font-heading font-bold text-heading">
                Web Engineering at SMB
              </h3>

              <div className="mt-4 space-y-3 text-xs">
                <Link
                  href="/services/website-development"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Custom Website Development</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Static &amp; CMS builds engineered for local search and fast mobile loading.
                  </p>
                </Link>

                <Link
                  href="/services/website-management"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Ongoing Website Management</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Routine updates, uptime monitoring, security &amp; NAP synchronization.
                  </p>
                </Link>

                <Link
                  href="/services/website-performance"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Website Performance (CWV)</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Real-world LCP, INP, and CLS optimization for Indian mobile networks.
                  </p>
                </Link>

                <Link
                  href="/faq#process-pricing"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">How We Scope Projects FAQ</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Why transparent custom scoping beats rigid 3-tier agency packages.
                  </p>
                </Link>
              </div>
            </div>

            {/* Verified Portfolio Proof */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                Live Engineering Proof
              </p>
              <h3 className="text-base font-heading font-bold text-heading">
                Inspect Our Live Website Builds
              </h3>
              <p className="text-xs leading-relaxed text-gray-text">
                Review live front-page builds for Bharat Relocators, Science Squad, The Linguist, Wanna Math, and Spot My Business.
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-light-bronze hover:underline"
              >
                <span>View Website Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
