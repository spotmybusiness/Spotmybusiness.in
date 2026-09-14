import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Spot My Business",
  description:
    "Terms of Service for Spot My Business. Review our service scope, transparent search disclaimers, client responsibilities, and governing policies.",
  alternates: {
    canonical: "https://spotmybusiness.in/terms/",
  },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-primary-bg text-heading">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-4"
      >
        <ol className="flex items-center gap-2 text-xs text-gray-text/60 font-medium tracking-wide">
          <li>
            <a
              href="/"
              className="hover:text-light-bronze transition-colors duration-200"
            >
              Home
            </a>
          </li>
          <li aria-hidden="true" className="text-gray-text/30">
            /
          </li>
          <li aria-current="page" className="text-light-bronze">
            Terms of Service
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            Legal &amp; Governance
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading leading-tight">
            Terms of Service
          </h1>
          <p className="text-gray-text text-sm md:text-base leading-relaxed">
            Last Updated: September 2026. These Terms of Service (&quot;Terms&quot;) govern the use of the Spot My Business website (https://spotmybusiness.in) and the professional digital presence services provided by Spot My Business (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;).
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* Terms Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-12 text-sm leading-relaxed text-gray-text">
        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            1. Services Provided
          </h2>
          <p>
            Spot My Business provides digital presence consulting and execution services for local businesses, including but not limited to:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-text/90">
            <li>Google Business Profile review, optimization, and ongoing maintenance.</li>
            <li>Google Maps SEO and local search visibility alignment.</li>
            <li>Local SEO strategy, on-page structure, and search intent optimization.</li>
            <li>Custom website development, ongoing website management, SEO, and performance optimization.</li>
            <li>Reputation management, review workflow guidance, and feedback response strategy.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            2. Transparent Search Engine &amp; Ranking Disclaimer
          </h2>
          <p>
            Spot My Business adheres to ethical, industry-standard digital presence practices. Please understand the following operational realities:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-text/90">
            <li><strong>No Guaranteed Positions:</strong> We do not guarantee specific ranking positions on Google Search, Google Maps, or the 3-Pack, nor do we guarantee specific conversion or inquiry volumes. Search engine algorithms and local map placements are controlled entirely by third-party providers (such as Google LLC).</li>
            <li><strong>Independent Service:</strong> Spot My Business is an independent consultancy and does not possess special, privileged, or proprietary algorithmic access to Google or any third-party search engine.</li>
            <li><strong>Fluctuations:</strong> Search results fluctuate based on geographic location, searcher intent, device types, competitor activity, and search engine algorithm updates.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            3. Client Responsibilities
          </h2>
          <p>To ensure effective service delivery, clients agree to:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-text/90">
            <li>Provide accurate, truthful, and lawful business information (including business name, operating address, license details, opening hours, and service areas).</li>
            <li>Ensure that all content, logos, images, and text provided to us do not infringe on any third-party copyrights, trademarks, or proprietary rights.</li>
            <li>Provide necessary administrative or manager access to Google Business Profiles, website hosting, or domain registrars where required for agreed project execution.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            4. Commercial Terms, Payments &amp; Engagement Scope
          </h2>
          <p>
            Spot My Business delivers services on a structured project or ongoing engagement basis:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-text/90">
            <li><strong>Agreed Scope:</strong> Services are provided according to the specifically agreed scope and deliverables outlined for each individual client engagement.</li>
            <li><strong>Fees &amp; Payments:</strong> Applicable fees, invoicing schedules, and payment arrangements are discussed and agreed with the client before work commences.</li>
            <li><strong>Cancellation &amp; Refunds:</strong> Any cancellation procedures, milestone adjustments, or refund provisions are determined by the terms of the applicable engagement agreement.</li>
            <li><strong>Commercial Inquiries:</strong> Prospective and existing clients may contact Spot My Business directly to discuss engagement-specific commercial terms or request a project proposal.</li>
          </ul>
        </div>

        {/* Section 5 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            5. Intellectual Property &amp; Deliverables
          </h2>
          <p>
            Upon full settlement of agreed project fees, the client owns all custom website deliverables, content, and branding developed specifically for their project. Spot My Business retains the right to reference non-confidential project outcomes and portfolio snapshots in case studies, client showcases, and marketing materials.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            6. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by applicable law, Spot My Business shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from third-party hosting outages, algorithm changes by search engines, account suspensions by third-party platforms, or loss of business data.
          </p>
        </div>

        {/* Section 7 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            7. Governing Law &amp; Jurisdiction
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the competent courts located in Kolkata, West Bengal, India.
          </p>
        </div>

        {/* Section 8 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            8. Contact Information
          </h2>
          <p>
            For questions regarding these Terms of Service or project engagements, please reach out to:
          </p>
          <div className="glass-card border border-border-color rounded-xl p-6 mt-4 space-y-2 text-xs">
            <p className="font-bold text-heading text-sm">Spot My Business</p>
            <p><strong>Address:</strong> Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075</p>
            <p><strong>Email:</strong> <a href="mailto:smb.spot.my.business@gmail.com" className="text-light-bronze hover:underline">smb.spot.my.business@gmail.com</a></p>
            <p><strong>Direct Hotline:</strong> <a href="tel:+919007960333" className="text-light-bronze hover:underline">+91 9007960333</a> / <a href="tel:+918597913452" className="text-light-bronze hover:underline">+91 8597913452</a></p>
          </div>
        </div>
      </section>

      {/* Bottom CTA / Return */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-border-color/40">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <span className="text-xs text-gray-text/60">Review how we protect your information:</span>
          <div className="flex gap-3">
            <a
              href="/privacy-policy/"
              className="px-5 py-2.5 rounded-full border border-border-color text-xs tracking-wider uppercase font-semibold text-gray-text hover:border-bronze/50 hover:text-white transition-all duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="/contact/"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-wider uppercase font-semibold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

