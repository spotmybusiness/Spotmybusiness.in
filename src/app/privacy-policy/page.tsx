import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Spot My Business",
  description:
    "Privacy Policy for Spot My Business. Understand how we collect, handle, and protect your information when you use our website and services.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/privacy-policy",
  },
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-primary-bg text-heading">
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-4"
      >
        <ol className="flex items-center gap-2 text-xs text-gray-text/60 font-medium tracking-wide">
          <li>
            <Link
              href="/"
              className="hover:text-light-bronze transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li aria-hidden="true" className="text-gray-text/30">
            /
          </li>
          <li aria-current="page" className="text-light-bronze">
            Privacy Policy
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            Legal &amp; Privacy
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading leading-tight">
            Privacy Policy
          </h1>
          <p className="text-gray-text text-sm md:text-base leading-relaxed">
            Last Updated: September 2026. Spot My Business (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (https://www.spotmybusiness.in) and communicate with us.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* Policy Content */}
      <section className="max-w-5xl mx-auto px-6 md:px-12 py-16 space-y-12 text-sm leading-relaxed text-gray-text">
        {/* Section 1 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            1. Information We Collect
          </h2>
          <p>
            When you interact with our website or contact us directly, we may collect information that you voluntarily provide:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-text/90">
            <li><strong>Contact &amp; Business Information:</strong> Your name, business name, phone number, email address, website URL, and details regarding your digital presence goals submitted through our enquiry form. The website form prepares a direct email communication rather than transmitting data to an intermediary database.</li>
            <li><strong>Direct Communications:</strong> Information exchanged when you reach out via phone, email, or WhatsApp.</li>
            <li><strong>Technical &amp; Usage Data:</strong> Basic browser information, device type, and theme preference stored locally in your browser (<code className="text-xs text-light-bronze">smb-theme</code>). We do not deploy tracking pixels or marketing analytics cookies.</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            2. How We Use Your Information
          </h2>
          <p>We use the information we collect strictly for legitimate business purposes:</p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-text/90">
            <li>To respond to your enquiries, provide consultation, and discuss potential digital presence projects.</li>
            <li>To deliver and manage agreed services (Google Business Profile optimization, Local SEO, website development, website maintenance, reputation guidance).</li>
            <li>To ensure website functionality, security, and responsive customer service.</li>
            <li>We do not sell, rent, or trade your personal or business information to third-party advertisers.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            3. Local Storage, Cookies &amp; Third-Party Services
          </h2>
          <p>
            Our website uses minimal local client storage to remember your visual preferences (light/dark theme). We may link to or embed trusted third-party services:
          </p>
          <ul className="list-disc list-inside space-y-1.5 pl-2 text-gray-text/90">
            <li><strong>Google Fonts (Google LLC):</strong> Our website loads typography from Google&apos;s font CDN (<code className="text-xs text-light-bronze">fonts.googleapis.com</code>). When pages are loaded, your IP address and browser information are transmitted to Google&apos;s servers in accordance with Google&apos;s Privacy Policy.</li>
            <li><strong>Google Maps &amp; Embeds:</strong> We display an interactive Google Maps location embed. Google may collect usage data in accordance with Google&apos;s Privacy Policy.</li>
            <li><strong>WhatsApp (Meta):</strong> If you click to chat via WhatsApp, your interaction is subject to WhatsApp&apos;s Privacy Policy and terms.</li>
            <li><strong>External Client Links:</strong> Our showcase contains links to external client websites. We are not responsible for the privacy practices of third-party domains.</li>
          </ul>
        </div>

        {/* Section 4 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            4. Data Retention &amp; Security
          </h2>
          <p>
            We retain enquiry records and project communication only for as long as necessary to fulfill the purposes outlined in this policy or to comply with statutory and legal obligations. We implement reasonable technical and organizational precautions to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>

        {/* Section 5 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            5. Your Rights &amp; Choices
          </h2>
          <p>
            You have the right to request access to the personal information we hold about you, request corrections to inaccurate data, or request the deletion of your enquiry history. To exercise any of these rights, please contact us at the email address listed below.
          </p>
        </div>

        {/* Section 6 */}
        <div className="space-y-3">
          <h2 className="text-xl font-heading font-bold text-heading">
            6. Contact &amp; Grievances
          </h2>
          <p>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please contact Spot My Business:
          </p>
          <div className="glass-card border border-border-color rounded-xl p-6 mt-4 space-y-2 text-xs">
            <p className="font-bold text-heading text-sm">Spot My Business</p>
            <p><strong>Address:</strong> Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075</p>
            <p><strong>Email:</strong> <a href="mailto:smb.spot.my.business@gmail.com" className="text-light-bronze hover:underline">smb.spot.my.business@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+919007960333" className="text-light-bronze hover:underline">+91 9007960333</a> / <a href="tel:+918597913452" className="text-light-bronze hover:underline">+91 8597913452</a></p>
          </div>
        </div>
      </section>

      {/* Bottom CTA / Return */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-border-color/40">
        <div className="flex flex-wrap gap-4 items-center justify-between">
          <span className="text-xs text-gray-text/60">Need to discuss terms or get started?</span>
          <div className="flex gap-3">
            <Link
              href="/terms"
              className="px-5 py-2.5 rounded-full border border-border-color text-xs tracking-wider uppercase font-semibold text-gray-text hover:border-bronze/50 hover:text-white transition-all duration-200"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-wider uppercase font-semibold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

