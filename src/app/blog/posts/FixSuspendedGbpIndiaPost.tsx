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
  FileCheck2,
  Video,
  Ban,
} from "lucide-react";
import type { BlogPost } from "@/lib/blog";

interface PostProps {
  post: BlogPost;
}

const suspensionTriggersIndia = [
  {
    trigger: "Keyword-Stuffed Business Name",
    example: 'Listing "Sharma Dental Clinic | Best Root Canal & Implants Kolkata" instead of "Sharma Dental Clinic".',
    policyRule:
      "Google requires your profile title to reflect your exact real-world business name as displayed on permanent storefront signage and legal documents.",
    requiredFix:
      "Strip all city names, service taglines, promotional adjectives, and phone numbers from the title before opening an appeal.",
  },
  {
    trigger: "Visible Residential Address on a Service-Area Business (SAB)",
    example: "A home-based packers & movers, caterer, or home spa displaying a flat/apartment address publicly on Maps.",
    policyRule:
      "If customers do not visit your location during stated hours with permanent outdoor signage, you must clear/hide the street address and define realistic service areas.",
    requiredFix:
      "Toggle off public address display in GBP settings and configure service boundaries within roughly a 2-hour drive radius of your base.",
  },
  {
    trigger: "Virtual Offices, P.O. Boxes & Unstaffed Co-Working Desks",
    example: "Registering a shared virtual-office mail drop in Salt Lake or Connaught Place without dedicated staff or fixed signage.",
    policyRule:
      "Google prohibits listings at virtual offices or co-working spaces unless the business maintains a dedicated, staffed private suite with permanent signage.",
    requiredFix:
      "Move the profile to your genuine physical office/storefront or convert it to a properly configured Service-Area Business.",
  },
  {
    trigger: "Rapid Bulk Edits to Core NAP Fields",
    example: "Changing business name, primary category, phone number, website URL, and address simultaneously in one sitting.",
    policyRule:
      "Google's automated anti-spam systems treat sudden simultaneous edits to multiple core trust fields as potential hijacking or deceptive repurposing.",
    requiredFix:
      "Make only verified corrections required for guideline compliance, wait for confirmation, and space out non-urgent updates.",
  },
  {
    trigger: "Unverified 'Open 24 Hours' Claims",
    example: "Setting a coaching center, dental clinic, or local shop to Open 24/7 just to appear in late-night searches.",
    policyRule:
      "Stated operating hours must reflect real staffed hours when customers can visit or reliably reach your business.",
    requiredFix:
      "Set accurate daily opening/closing hours (and holiday hours) matching your website footer and physical noticeboard.",
  },
  {
    trigger: "Duplicate Profiles or Suspended Manager Account",
    example: "Creating a brand-new profile after an initial suspension, or sharing access with an email account previously flagged for spam.",
    policyRule:
      "Opening a duplicate profile for a suspended business violates Google's misrepresentation rules and can lock out both listings.",
    requiredFix:
      "Remove any unauthorized manager emails, audit account permissions, and appeal only the original suspended Profile ID.",
  },
  {
    trigger: "High-Scrutiny Categories Without Documentation",
    example: "Packers & movers, home wellness/spa, repair trades, locksmiths, and clinics face stricter automated verification checks in India.",
    policyRule:
      "High-spam verticals routinely trigger automated quality suspensions requiring documentary proof and live video verification.",
    requiredFix:
      "Maintain exact character-level alignment across GST, Trade License, utility bills, website NAP, and permanent signage.",
  },
];

const indianEvidenceDocuments = [
  {
    document: "GST Registration Certificate (REG-06)",
    authority: "Government of India (GST Portal)",
    strength: "Very High (Primary Proof)",
    checklist:
      "Legal/Trade Name and Principal Place of Business address must match your GBP title and address character-for-character (including floor, lane, and PIN code).",
  },
  {
    document: "Municipal Trade License / Shop & Establishment Act Certificate",
    authority: "KMC (Kolkata), BMC, MCD, BBMP, or State Labour Dept.",
    strength: "Very High (Primary Proof)",
    checklist:
      "Ensure the renewal validity period is current for 2026 and the registered trade name matches your physical outdoor signboard.",
  },
  {
    document: "Udyam Registration Certificate (MSME)",
    authority: "Ministry of MSME, Government of India",
    strength: "High (Supporting Proof)",
    checklist:
      "Particularly helpful for sole proprietorships and service-area businesses that fall below mandatory GST turnover thresholds.",
  },
  {
    document: "Commercial Utility Bill (Last 60–90 Days)",
    authority: "CESC, WBSEDCL, Tata Power, BSES, Airtel / Jio Fiber Landline",
    strength: "High (Address Corroboration)",
    checklist:
      "Bill header must clearly display your exact business name and street address—personal residential bills under a different relative's name are frequently rejected.",
  },
  {
    document: "Commercial Rent / Lease Agreement or Property Tax Receipt",
    authority: "Registered Deed / Municipal Corporation",
    strength: "Medium–High (Supporting)",
    checklist:
      "Include the front page, address schedule, and signature pages when utility bills remain in the landlord's name (pair with GST or Trade License).",
  },
  {
    document: "Unedited Exterior & Interior Signage Photographs",
    authority: "On-Site Mobile Camera (No Filters / Overlays)",
    strength: "High (Storefront Proof)",
    checklist:
      "Capture 2–3 clear daytime photos showing permanent fixed signage mounted on the building facade, adjacent shops, and your interior workspace.",
  },
];

const videoVerificationComparison = [
  {
    pillar: "1. Proof of Physical Location (0:00 – 0:25)",
    storefront:
      "Start outside on the public street. Film the street/lane signboard, neighboring shops or recognizable local landmarks, and your building/plot number before walking toward your entrance.",
    sab:
      "Begin outside near your operational base showing the street name or locality marker that confirms you physically operate inside your declared service area (without exposing private home details publicly on your listing).",
  },
  {
    pillar: "2. Proof the Business Exists (0:25 – 0:55)",
    storefront:
      "Pan smoothly across your permanently mounted exterior signboard (never paper printouts or temporary flex hung on tape), walk inside, and show your reception desk, consultation room, classrooms, or retail inventory.",
    sab:
      "Film physical operational proof of your trade: branded commercial/moving vehicles, company uniforms, packing crates, catering equipment, or specialized diagnostic/repair tools stored at your base.",
  },
  {
    pillar: "3. Proof of Management & Ownership (0:55 – 1:30)",
    storefront:
      "Unlock the main entrance or shutter with keys, walk behind the reception counter or into a staff-only room, operate your billing/POS terminal or computer, and hold up your framed Trade License or GST header briefly.",
    sab:
      "Unlock your commercial vehicle or storage unit with your keys, show printed company invoice books/marketing flyers, and briefly show the business name & address header on your GST, Udyam, or utility bill.",
  },
  {
    pillar: "Technical & Privacy Rules",
    storefront:
      "Record live inside Google Maps/Search in one continuous 30s–2min take (never upload pre-recorded gallery files). Avoid filming customer/staff faces, bank account numbers, or personal Aadhaar/PAN cards.",
    sab:
      "Keep GPS/Location Services turned ON during recording. Speak calmly only if helpful, avoid rapid camera shaking, and keep total length well under 2 minutes so the upload does not time out on mobile data.",
  },
];

export default function FixSuspendedGbpIndiaPost({ post }: PostProps) {
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
            Fix a Suspended Google Business Profile in India
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
            Last Updated: <time dateTime={post.modifiedDate}>November 25, 2026</time>
          </span>
        </div>

        <h1 className="mt-4 text-3xl font-heading font-bold leading-tight text-heading sm:text-4xl md:text-5xl">
          How to Fix a Suspended Google Business Profile in India: Video Verification &amp; Reinstatement Checklist
        </h1>

        <p className="mt-5 text-base md:text-lg leading-relaxed text-gray-text">
          Waking up to a red <em>&ldquo;Your Business Profile has been suspended&rdquo;</em> banner stops local phone inquiries overnight. Worse, rushing straight into Google&rsquo;s Appeals Tool without fixing the underlying guideline trigger—or missing the 60-minute evidence upload window—frequently turns a recoverable automated suspension into a denied appeal. Here is the exact, policy-aligned reinstatement and live video verification checklist our Kolkata local search team uses for Indian storefronts and service-area businesses.
        </p>

        {/* Credibility Byline & Policy Verification Log */}
        <div className="mt-6 flex flex-col gap-4 border-y border-border-color py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs text-gray-text">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary-bg border border-border-color font-heading font-bold text-light-bronze">
                SN
              </div>
              <div>
                <p className="font-semibold text-heading">
                  Authored by: {post.author.name}
                </p>
                <p className="text-[11px] text-gray-text">
                  {post.author.role} • {post.author.qualification} • Santoshpur, Kolkata 700075
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-text">
              <MapPin className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
              <span>Verified Against Google GBP Policies (2026)</span>
            </div>
          </div>

          <details className="group rounded-xl border border-border-color bg-secondary-bg/60 px-4 py-2.5 text-xs text-gray-text">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-heading">
              <span className="inline-flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 text-light-bronze" aria-hidden="true" />
                Policy Verification &amp; Revision Log (November 2026)
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
                <strong className="text-heading">Nov 25, 2026:</strong> Verified appeal workflow, 60-minute evidence session constraints, Additional Review escalation path, and 3-pillar live video verification requirements against official Google Business Profile Help Center guidelines.
              </li>
              <li>
                <strong className="text-heading">Transparency Standard:</strong> Spot My Business is an independent internet marketing agency—not affiliated with Google. Reinstatement decisions rest solely with Google&rsquo;s review team based on guideline compliance and verifiable documentation.
              </li>
            </ol>
          </details>
        </div>
      </header>

      {/* Main Content + Sticky Sidebar */}
      <div className="mt-10 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-10">
          {/* Above-the-Fold Quick Answer Box */}
          <aside
            aria-label="Quick Answer Summary"
            className="rounded-2xl border-2 border-bronze/50 bg-secondary-bg p-6 md:p-8 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>Quick Answer: How to Reinstate a Suspended GBP in India</span>
            </div>
            <p className="mt-3 text-sm md:text-base leading-relaxed text-heading font-medium">
              To reinstate a suspended Google Business Profile in India: <strong>1) Do not create a duplicate listing</strong>; <strong>2) Fix all guideline violations</strong> (title keywords, hidden SAB address, accurate hours); <strong>3) Prepare clean PDFs</strong> of matching GST, Trade License, or utility bills before opening Google&rsquo;s Appeals Tool (which enforces a <strong>60-minute evidence upload window</strong>); and <strong>4) Complete a 1-take live video verification</strong> if requested.
            </p>
            <div className="mt-5 border-t border-border-color pt-4">
              <p className="text-xs font-bold uppercase tracking-wider text-light-bronze mb-3">
                Jump Directly to Any Reinstatement Stage:
              </p>
              <ul className="grid gap-2 sm:grid-cols-2 text-xs text-gray-text">
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#suspended-vs-disabled" className="hover:text-light-bronze underline underline-offset-2">
                    1. Suspended vs. Disabled Status Explained
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#common-suspension-triggers-india" className="hover:text-light-bronze underline underline-offset-2">
                    2. 7 Common Suspension Triggers in India
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#indian-evidence-checklist" className="hover:text-light-bronze underline underline-offset-2">
                    3. Indian Documentation &amp; Evidence Matrix
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#60-minute-reinstatement-appeal" className="hover:text-light-bronze underline underline-offset-2">
                    4. Beating the 60-Minute Appeals Window
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#video-verification-checklist" className="hover:text-light-bronze underline underline-offset-2">
                    5. Video Verification Shot List (Storefront vs. SAB)
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-light-bronze font-bold">☐</span>
                  <a href="#denied-appeal-mistakes" className="hover:text-light-bronze underline underline-offset-2">
                    6. Denied Appeals, Mistakes &amp; Prevention + FAQ
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Hero Infographic */}
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
              Figure 1: The 5-step Google Business Profile reinstatement system for Indian storefronts and service-area businesses—from pre-appeal guideline cleanup to post-recovery hygiene.
            </figcaption>
          </figure>

          {/* Section 1: Suspended vs. Disabled */}
          <section id="suspended-vs-disabled" className="space-y-4 pt-2">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              1. Suspended vs. Disabled Business Profile: Check Your Exact Notice First
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Before editing a single field, log into the Google account that owns your Business Profile and read the exact policy reason displayed inside your{" "}
              <a
                href="https://support.google.com/business/answer/4569145"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline underline-offset-2 hover:text-champagne"
              >
                Google Business Profile Appeals Tool
              </a>
              . Google classifies restricted profiles into two broad operational states:
            </p>

            <div className="grid gap-4 sm:grid-cols-2 pt-2">
              <div className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  Suspended Profile (Removed From Search &amp; Maps)
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-gray-text">
                  Your business listing disappears completely from Google Search and Google Maps—usually flagged under <strong>&ldquo;Deceptive content,&rdquo; &ldquo;Quality guidelines violation,&rdquo;</strong> or <strong>&ldquo;Business does not exist.&rdquo;</strong> Existing reviews remain attached to the underlying Profile ID and normally return once Google approves reinstatement.
                </p>
              </div>

              <div className="rounded-xl border border-border-color bg-secondary-bg p-5 space-y-2">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-light-bronze">
                  Disabled or Verification-Required Profile
                </p>
                <p className="text-xs md:text-sm leading-relaxed text-gray-text">
                  Commonly triggered after modifying a high-sensitivity field (address, primary category, or business name) or switching ownership. Google strips public management access or prompts fresh <strong>live video verification</strong> to confirm the business still operates legitimately at that location.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: Common Suspension Triggers in India */}
          <section id="common-suspension-triggers-india" className="space-y-5 border-t border-border-color pt-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              2. The 7 Most Common GBP Suspension Triggers in India (Fix These Before Appealing)
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Clicking &ldquo;Submit Appeal&rdquo; while your profile still violates{" "}
              <a
                href="https://support.google.com/business/answer/3038177"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline underline-offset-2 hover:text-champagne"
              >
                Google&rsquo;s guidelines for representing your business
              </a>{" "}
              wastes your primary appeal attempt. Audit every row below against your live profile settings—especially if you operate a relocation company, clinic, academic coaching center, or home service business in India:
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="suspension-triggers-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="suspension-triggers-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 1: Top 7 Google Business Profile Suspension Triggers in India &amp; Pre-Appeal Fixes
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">Suspension Trigger</th>
                    <th scope="col" className="p-4 font-bold">Common Indian Example</th>
                    <th scope="col" className="p-4 font-bold">Official Google Policy</th>
                    <th scope="col" className="p-4 font-bold text-light-bronze">Pre-Appeal Fix</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {suspensionTriggersIndia.map((row, idx) => (
                    <tr
                      key={row.trigger}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.trigger}
                      </th>
                      <td className="p-4 align-top text-xs">{row.example}</td>
                      <td className="p-4 align-top text-xs">{row.policyRule}</td>
                      <td className="p-4 align-top text-xs font-medium text-heading">
                        {row.requiredFix}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs md:text-sm leading-relaxed text-gray-text">
              Unsure whether your business should show a physical storefront pin or hide its address as a Service-Area Business? Review our detailed breakdown of{" "}
              <Link
                href="/blog/google-maps-seo-service-area-businesses"
                className="text-light-bronze underline underline-offset-2 hover:text-champagne"
              >
                Storefront vs. Service-Area Business (SAB) pin and boundary rules
              </Link>{" "}
              before modifying your address settings.
            </p>
          </section>

          {/* Section 3: Indian Documentation & Evidence Preparation */}
          <section id="indian-evidence-checklist" className="space-y-5 border-t border-border-color pt-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              <FileCheck2 className="w-4 h-4" aria-hidden="true" />
              <span>Evidence Preparation (Before Opening the Appeals Tool)</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              3. Indian Business Documentation Checklist: Exact Proofs Google Accepts
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Google&rsquo;s reinstatement reviewers verify two things from your uploaded documents: <strong>1) Your legal business entity genuinely exists</strong>, and <strong>2) The exact business name and street address match your Google Business Profile character-for-character</strong>. Do not wait until the appeal form is open to search for these files—collect at least <strong>three corroborating documents</strong> into a single desktop folder first:
            </p>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="india-evidence-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="india-evidence-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 2: Accepted Indian Reinstatement Evidence Documents &amp; 1:1 NAP Verification Rules
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">Document Type</th>
                    <th scope="col" className="p-4 font-bold">Issuing Authority (India)</th>
                    <th scope="col" className="p-4 font-bold">Verification Strength</th>
                    <th scope="col" className="p-4 font-bold">Formatting &amp; NAP Check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {indianEvidenceDocuments.map((row, idx) => (
                    <tr
                      key={row.document}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.document}
                      </th>
                      <td className="p-4 align-top text-xs">{row.authority}</td>
                      <td className="p-4 align-top font-mono text-xs text-light-bronze">
                        {row.strength}
                      </td>
                      <td className="p-4 align-top text-xs">{row.checklist}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-border-color bg-secondary-bg/80 p-5 space-y-2">
              <p className="text-xs font-bold uppercase tracking-wider text-heading">
                File Naming &amp; Size Rules for Clean Submission
              </p>
              <ul className="space-y-1.5 text-xs text-gray-text list-disc pl-5">
                <li>
                  Save each proof as a high-contrast, unedited PDF or JPG with descriptive filenames (e.g., <code className="text-light-bronze">01_GST_Certificate.pdf</code>, <code className="text-light-bronze">02_KMC_Trade_License.pdf</code>, <code className="text-light-bronze">03_CESC_Electricity_Bill.pdf</code>, <code className="text-light-bronze">04_Storefront_Signage.jpg</code>).
                </li>
                <li>
                  If attaching multiple files via a single ZIP archive, keep total size comfortably under <strong>19 MB</strong> so the upload never stalls.
                </li>
                <li>
                  <strong>Never Photoshop, crop out watermarks, or edit dates</strong> on official PDFs. Altered metadata triggers permanent suspension for deceptive content.
                </li>
              </ul>
            </div>
          </section>

          {/* Section 4: The 60-Minute Appeals Window */}
          <section id="60-minute-reinstatement-appeal" className="space-y-5 border-t border-border-color pt-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              4. Step-by-Step Reinstatement Process: Beating Google&rsquo;s 60-Minute Upload Window
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Once you launch the official Google Business Profile Appeals Tool and initiate your evidence upload session, Google imposes a strict <strong>60-minute timer</strong> to attach your documentation and finish submission. If the session times out or you close the browser tab mid-way, your appeal can lock without files attached—leading to an automatic &ldquo;missing evidence&rdquo; denial. Execute these four steps in one uninterrupted sitting:
            </p>

            <ol className="space-y-3 text-sm text-gray-text">
              <li className="rounded-xl border border-border-color bg-secondary-bg p-5">
                <strong className="text-heading">Step 1 — Copy Your Business Profile ID &amp; Audit Website Alignment:</strong> Open your GBP dashboard → three-dot menu → <em>Business Profile settings</em> → <em>Advanced settings</em> and note your 18–20 digit <strong>Business Profile ID</strong>. Confirm your website&rsquo;s footer NAP and{" "}
                <Link
                  href="/blog/google-business-profile-optimization-checklist"
                  className="text-light-bronze underline underline-offset-2 hover:text-champagne"
                >
                  GBP core fields
                </Link>{" "}
                match your government certificates 1:1.
              </li>
              <li className="rounded-xl border border-border-color bg-secondary-bg p-5">
                <strong className="text-heading">Step 2 — Open the Appeals Tool From the Primary Owner Account:</strong> Sign into the primary owner Google account (avoid using newly added manager emails), select the suspended profile, confirm the listed violation, and click <strong>Submit Appeal</strong>.
              </li>
              <li className="rounded-xl border border-border-color bg-secondary-bg p-5">
                <strong className="text-heading">Step 3 — Paste a Calm, Factual Summary (No Emotional Rants):</strong> Reviewers process high volumes of tickets. State your Profile ID, operational model (Storefront vs. SAB), exact guideline corrections completed, and the exact list of attached Indian documents.
              </li>
              <li className="rounded-xl border border-border-color bg-secondary-bg p-5">
                <strong className="text-heading">Step 4 — Upload Your Prepared Evidence Folder &amp; Save the Case ID:</strong> Attach your GST, Trade License/Udyam, utility bill, and storefront photos immediately, submit before the 60-minute clock expires, and save the confirmation email Case ID (e.g., <code className="text-light-bronze">[0-1234000034567]</code>).
              </li>
            </ol>

            {/* Copyable Appeal Template */}
            <figure className="mt-4">
              <figcaption
                id="appeal-template-caption"
                className="text-xs font-mono text-light-bronze mb-2"
              >
                Example: Concise, Policy-Aligned Reinstatement Appeal Explanation (India)
              </figcaption>
              <pre
                role="region"
                aria-labelledby="appeal-template-caption"
                tabIndex={0}
                className="overflow-x-auto rounded-xl border border-border-color bg-primary-bg p-4 text-xs font-mono text-gray-text leading-relaxed focus:outline-none focus:ring-2 focus:ring-bronze"
              >
                <code>{`Business Name: [Exact Legal / Signage Name]
Business Profile ID: [Your 18-20 Digit Profile ID]
Operational Model: [Physical Storefront / Service-Area Business]

Summary of Guideline Corrections Completed:
1. Updated the Business Profile name to match our permanent exterior signage and GST/Trade License exactly (removed all extra location/service keywords).
2. Verified our [physical street address / hidden residential address with realistic service areas] and accurate staffed operating hours.
3. Confirmed 1:1 Name, Address, and Phone alignment with our official website ([https://yourwebsite.in]).

Attached Official Documentation:
- 01_GST_Registration_Certificate.pdf (showing legal trade name & registered address)
- 02_Municipal_Trade_License.pdf (valid 2026 renewal)
- 03_Commercial_Electricity_Utility_Bill.pdf (dated within last 60 days)
- 04_Permanent_Exterior_Signage_Photo.jpg (unedited on-site photo)`}</code>
              </pre>
            </figure>
          </section>

          {/* Mid-Post Consultation CTA */}
          <aside
            aria-label="GBP Reinstatement Readiness Review"
            className="rounded-2xl border border-bronze/40 bg-gradient-to-br from-secondary-bg to-primary-bg p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                  Pre-Appeal Compliance Audit
                </p>
                <h3 className="text-xl font-heading font-bold text-heading">
                  Suspended Listing and Worried About Blowing Your Appeal Window?
                </h3>
                <p className="text-xs md:text-sm text-gray-text leading-relaxed">
                  Our Kolkata local visibility team audits your suspended profile for hidden guideline conflicts, aligns your website NAP and Indian proofs, and prepares your video verification shot list before you submit—with honest expectations and zero fabricated guarantees.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href={ctaHref}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-xs md:text-sm font-semibold text-white hover:shadow-lg hover:shadow-bronze/20 transition-all"
                >
                  <span>Request a GBP Policy Audit</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </aside>

          {/* Section 5: Video Verification Requirements */}
          <section id="video-verification-checklist" className="space-y-5 border-t border-border-color pt-10">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
              <Video className="w-4 h-4" aria-hidden="true" />
              <span>Official 3-Pillar Mobile Recording Protocol</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              5. Google Business Profile Video Verification Checklist (Storefront vs. SAB)
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              Whether triggered during initial reinstatement or right after Google unlocks your profile,{" "}
              <a
                href="https://support.google.com/business/answer/14271705"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline underline-offset-2 hover:text-champagne"
              >
                Google&rsquo;s official business video verification
              </a>{" "}
              requires <strong>one continuous, unedited recording captured live inside Google Maps or Google Search</strong> on a mobile device with GPS enabled. Pre-recorded gallery videos, pause/resume cuts, or shaky 10-second clips are routinely rejected.
            </p>

            {/* Visual 1: Video Verification Diagram */}
            <figure className="overflow-hidden rounded-2xl border border-border-color bg-secondary-bg">
              <Image
                src="/images/blog/gbp-video-verification-3-pillars-india.webp"
                alt="Google Business Profile 3-pillar video verification shot list comparing physical storefront and service-area business requirements in India"
                width={1200}
                height={675}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 1024px) 100vw, 800px"
                className="w-full h-auto object-cover"
              />
              <figcaption className="border-t border-border-color px-5 py-3 text-xs text-gray-text">
                Figure 2: Timing and shot-list guide for a 60–90 second continuous live verification video for Indian physical storefronts vs. Service-Area Businesses.
              </figcaption>
            </figure>

            <div
              tabIndex={0}
              role="region"
              aria-labelledby="video-verification-caption"
              className="mt-6 overflow-x-auto rounded-2xl border border-border-color bg-secondary-bg focus:outline-none focus:ring-2 focus:ring-bronze"
            >
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <caption
                  id="video-verification-caption"
                  className="border-b border-border-color bg-primary-bg/60 px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wider text-light-bronze"
                >
                  Table 3: Official 3-Pillar Video Verification Requirements — Storefront vs. Service-Area Business
                </caption>
                <thead>
                  <tr className="border-b border-border-color bg-primary-bg/40 text-heading font-heading">
                    <th scope="col" className="p-4 font-bold">Required Proof Pillar</th>
                    <th scope="col" className="p-4 font-bold">Physical Storefront (Clinic / Shop / Coaching)</th>
                    <th scope="col" className="p-4 font-bold text-light-bronze">Service-Area Business (Movers / Caterers / Home Trades)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color text-gray-text">
                  {videoVerificationComparison.map((row, idx) => (
                    <tr
                      key={row.pillar}
                      className={idx % 2 === 1 ? "bg-primary-bg/25" : "bg-secondary-bg"}
                    >
                      <th scope="row" className="p-4 font-semibold text-heading align-top">
                        {row.pillar}
                      </th>
                      <td className="p-4 align-top text-xs">{row.storefront}</td>
                      <td className="p-4 align-top text-xs font-medium text-heading">
                        {row.sab}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs md:text-sm leading-relaxed text-gray-text">
              <strong>Practical Field Tip for Indian Mobile Networks:</strong> Rehearse your walking path twice before tapping <em>Start recording</em> so your clip stays between <strong>60 and 90 seconds</strong>. Videos longer than 3–5 minutes frequently fail to upload over cellular data in dense indoor buildings—stand near strong 4G/5G or Wi-Fi once you press stop so the upload completes cleanly.
            </p>
          </section>

          {/* Section 6: Denied Appeals, Common Mistakes & Prevention */}
          <section id="denied-appeal-mistakes" className="space-y-6 border-t border-border-color pt-10">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-heading">
              6. What If Your Appeal Is Denied? Mistakes to Avoid &amp; Future Suspension Prevention
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-text">
              If your initial appeal comes back <em>&ldquo;Not Approved,&rdquo;</em> do <strong>not</strong> panic and do <strong>not</strong> open a duplicate listing. Google provides a dedicated{" "}
              <a
                href="https://support.google.com/business/contact/local_appeals"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-bronze underline underline-offset-2 hover:text-champagne"
              >
                Request Additional Review of a Denied Appeal
              </a>{" "}
              form where you can submit stronger documentary evidence (for example, adding a current Municipal Trade License or commercial utility bill that was missing in round one). If even the second review stalls despite full compliance, escalate politely via the official Google Business Profile Help Community with your Case ID and Profile ID so a volunteer Product Expert can review for guideline blind spots.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-amber-500/40 bg-secondary-bg p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                  <Ban className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>5 Mistakes That Cause Permanent Lockout</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-text">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Creating a new duplicate profile while an appeal is pending.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Submitting temporary printed paper taped to a wall as &ldquo;storefront signage.&rdquo;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Altering or photoshopping addresses onto utility bills or certificates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Filing multiple duplicate support tickets from different email addresses.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>Paying brokers who promise &ldquo;guaranteed 24-hour Google insider reinstatement.&rdquo;</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-light-bronze">
                  <ShieldCheck
                    className="w-4 h-4 shrink-0"
                    style={{ color: "var(--blog-growth, #7B8E77)" }}
                    aria-hidden="true"
                  />
                  <span>Preventing Future Suspensions (Post-Recovery)</span>
                </div>
                <ul className="space-y-2 text-xs text-gray-text">
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: "var(--blog-growth, #7B8E77)" }}
                      aria-hidden="true"
                    />
                    <span>Never edit title, address, primary category, and phone number in the same week.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: "var(--blog-growth, #7B8E77)" }}
                      aria-hidden="true"
                    />
                    <span>Review &ldquo;Google updates / suggested edits&rdquo; weekly and reject inaccurate third-party changes.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: "var(--blog-growth, #7B8E77)" }}
                      aria-hidden="true"
                    />
                    <span>Keep your website footer NAP, LocalBusiness schema, and GBP synchronized 1:1.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: "var(--blog-growth, #7B8E77)" }}
                      aria-hidden="true"
                    />
                    <span>Keep one clean, dedicated business Gmail account as Primary Owner with 2FA enabled.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: "var(--blog-growth, #7B8E77)" }}
                      aria-hidden="true"
                    />
                    <span>Archive renewed annual Trade Licenses and utility bills in a ready verification folder.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 7: Native HTML FAQs */}
          <section
            id="faq"
            aria-labelledby="faq-heading"
            className="space-y-4 border-t border-border-color pt-10"
          >
            <h2 id="faq-heading" className="text-2xl md:text-3xl font-heading font-bold text-heading">
              Frequently Asked Questions About Suspended Google Business Profiles in India
            </h2>
            <p className="text-sm text-gray-text">
              Direct answers based on official Google Business Profile policy documentation and field audits:
            </p>

            <div className="space-y-4 mt-6">
              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>How long does Google Business Profile reinstatement take in India?</span>
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
                    Google does not publish a fixed turnaround guarantee. Straightforward appeals with clean, matching GST and Trade License PDFs are often reviewed within 3 to 10 business days, while high-scrutiny categories or secondary &ldquo;Additional Review&rdquo; escalations can take 2 to 4 weeks. Avoid submitting duplicate appeals while your ticket shows &ldquo;In progress,&rdquo; as duplicate submissions reset queue priority.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Will I lose my existing Google reviews if my profile is suspended?</span>
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
                    Normally, no—your historical customer reviews remain tied to your original Business Profile ID and reappear once Google reinstates the listing (sometimes taking 24 to 72 hours after reactivation to re-sync). However, if you delete the suspended profile or create a brand-new listing from scratch, you permanently disconnect from your old review history.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Can a home-based business in India pass GBP reinstatement without a storefront signboard?</span>
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
                    Yes—provided you configure the profile accurately as a <strong>Service-Area Business (SAB)</strong> by hiding your residential street address from public display and setting realistic service areas. Your supporting Indian documents (Udyam Registration, GST, or Trade License) must still match the hidden registered address on file, and your video verification should showcase your tools, branded equipment/vehicles, and business invoices rather than a public shopfront.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>What if I don&rsquo;t have GST registration for my small business in India?</span>
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
                    GST is not mandatory if your turnover falls below the statutory threshold. You can submit an active <strong>Municipal Trade License</strong> (such as a KMC Certificate of Enlistment in Kolkata), a <strong>State Shop &amp; Establishment Act certificate</strong>, an <strong>Udyam MSME Registration certificate</strong>, and a commercial electricity or fiber broadband bill bearing your exact business name and address.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Why did Google reject my live verification video?</span>
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
                    The top four causes of video verification failure in India are: 1) Starting indoors without showing the outside street/landmark first; 2) Showing a temporary printed paper or banner instead of permanent mounted signage; 3) Failing to prove management access (unlocking doors, accessing back-office/POS, or showing business documents); and 4) Recording a clip that is too dark, blurry, edited, or fails mid-upload due to weak signal.
                  </p>
                </div>
              </details>

              <details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base md:text-lg font-bold text-heading">
                  <span>Can any agency guarantee Google Business Profile reinstatement?</span>
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
                    No. Only Google&rsquo;s trust and safety team can approve or deny an appeal. What an honest local SEO partner does is diagnose hidden policy violations, synchronize your website NAP and schema, verify that your Indian government documentation matches 1:1, and guide your live video recording so your appeal stands the strongest legitimate chance of approval.
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
              <span>Policy-First Local Search Governance</span>
            </div>
            <h2 className="mt-2 text-2xl font-heading font-bold text-heading">
              Need Help Auditing Your Suspended Profile Before Submitting an Appeal?
            </h2>
            <p className="mt-3 text-sm text-gray-text leading-relaxed">
              Operating from Santoshpur, Kolkata and serving businesses remotely across 20 Indian markets, Spot My Business helps storefronts, clinics, coaching centers, and service-area trades align their Google Business Profiles, websites, and documentation cleanly with Google guidelines.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href={ctaHref}
                className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-bronze/20"
              >
                Request a GBP Policy Review
              </Link>
              <Link
                href="/services/google-business-profile-optimization"
                className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text transition-colors hover:text-heading"
              >
                Explore GBP Optimization Service →
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
                GBP Reinstatement Checklist
              </h3>

              <ol className="mt-4 space-y-2.5 text-xs text-gray-text">
                <li>
                  <a href="#suspended-vs-disabled" className="hover:text-light-bronze transition-colors block">
                    1. Suspended vs. Disabled Status
                  </a>
                </li>
                <li>
                  <a href="#common-suspension-triggers-india" className="hover:text-light-bronze transition-colors block">
                    2. 7 Suspension Triggers in India
                  </a>
                </li>
                <li>
                  <a href="#indian-evidence-checklist" className="hover:text-light-bronze transition-colors block">
                    3. Indian Evidence Matrix (GST/Trade)
                  </a>
                </li>
                <li>
                  <a href="#60-minute-reinstatement-appeal" className="hover:text-light-bronze transition-colors block">
                    4. Beating the 60-Min Appeal Window
                  </a>
                </li>
                <li>
                  <a href="#video-verification-checklist" className="hover:text-light-bronze transition-colors block">
                    5. Video Verification Shot List
                  </a>
                </li>
                <li>
                  <a href="#denied-appeal-mistakes" className="hover:text-light-bronze transition-colors block">
                    6. Denied Appeals &amp; Prevention
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
                  Request a Pre-Appeal Audit →
                </Link>
              </div>
            </nav>

            {/* Related Service Pillars */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                Related Service Pillars
              </p>
              <h3 className="mt-2 text-base font-heading font-bold text-heading">
                Local Visibility at SMB
              </h3>

              <div className="mt-4 space-y-3 text-xs">
                <Link
                  href="/services/google-business-profile-optimization"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Google Business Profile Optimization</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Policy-compliant categories, NAP symmetry, and weekly profile governance.
                  </p>
                </Link>

                <Link
                  href="/services/google-maps-seo"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Google Maps SEO</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Storefront pin calibration and realistic service-area boundary setup.
                  </p>
                </Link>

                <Link
                  href="/services/local-seo"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Local SEO Architecture</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    Website NAP alignment, schema markup, and anti-doorway location pages.
                  </p>
                </Link>

                <Link
                  href="/faq"
                  className="block rounded-lg p-2.5 hover:bg-primary-bg transition-colors border border-transparent hover:border-border-color"
                >
                  <p className="font-semibold text-heading">Policies &amp; Expectations FAQ</p>
                  <p className="text-[11px] text-gray-text mt-0.5">
                    How we work remotely across India without unrealistic Google claims.
                  </p>
                </Link>
              </div>
            </div>

            {/* Verified Client Proof */}
            <div className="rounded-2xl border border-border-color bg-secondary-bg p-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-light-bronze">
                Verified Portfolio
              </p>
              <h3 className="text-base font-heading font-bold text-heading">
                Active Managed Profiles
              </h3>
              <p className="text-xs leading-relaxed text-gray-text">
                Inspect live GBP and local presence profiles we manage for Science Squad (Dankuni), Bharat Relocators (Haltu), and Nayak Decorators (Behala).
              </p>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-light-bronze hover:underline"
              >
                <span>View Client Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
