import type { Metadata } from "next";

import Contact from "@/components/Contact";
import { businessHours } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact Spot My Business | Phone, WhatsApp, Email & Enquiry Form",
  description:
    "Contact Spot My Business by phone, WhatsApp, email, or the enquiry form to discuss your website, Google Business Profile, local search, or reputation work.",
  alternates: {
    canonical: "https://spotmybusiness.in/contact/",
  },
  openGraph: {
    title: "Contact Spot My Business | Phone, WhatsApp, Email & Enquiry Form",
    description:
      "Contact Spot My Business by phone, WhatsApp, email, or the enquiry form to discuss your website, Google Business Profile, local search, or reputation work.",
    url: "https://spotmybusiness.in/contact/",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function ContactPage() {
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
            Contact
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            Get In Touch
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading leading-tight">
            Talk to Spot My Business
          </h1>
          <p className="mt-6 text-gray-text text-base md:text-lg leading-relaxed max-w-2xl">
            Whether you are looking to strengthen your website, improve your Google
            Business Profile, build local search visibility, or understand how our
            services could support your business — we are happy to discuss where you
            are today and what the next useful step might look like. We help align your website, Google Maps, and Business Profile for real search intent
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* Contact Details */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Phone */}
          <div className="glass-card border border-border-color rounded-2xl p-8 space-y-3 hover:border-bronze/40 transition-colors duration-300">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-text/50 font-bold">
              Phone
            </span>
            <div className="space-y-1.5">
              <a
                href="tel:+918597913452"
                className="block text-sm font-semibold text-heading hover:text-light-bronze transition-colors duration-200"
              >
                +91 8597913452
              </a>
              <a
                href="tel:+919007960333"
                className="block text-sm font-semibold text-heading hover:text-light-bronze transition-colors duration-200"
              >
                +91 9007960333
              </a>
            </div>
            <p className="text-xs text-gray-text/60 leading-relaxed">
              Available 24/7 – Everyday
            </p>
          </div>

          {/* WhatsApp */}
          <div className="glass-card border border-border-color rounded-2xl p-8 space-y-3 hover:border-bronze/40 transition-colors duration-300">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-text/50 font-bold">
              WhatsApp
            </span>
            <a
              href="https://wa.me/919007960333"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm font-semibold text-heading hover:text-light-bronze transition-colors duration-200"
            >
              +91 9007960333
            </a>
            <p className="text-xs text-gray-text/60 leading-relaxed">
              Send a message directly via WhatsApp.
            </p>
          </div>

          {/* Email */}
          <div className="glass-card border border-border-color rounded-2xl p-8 space-y-3 hover:border-bronze/40 transition-colors duration-300">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-text/50 font-bold">
              Email
            </span>
            <a
              href="mailto:smb.spot.my.business@gmail.com"
              className="block text-sm font-semibold text-heading hover:text-light-bronze transition-colors duration-200 break-all"
            >
              smb.spot.my.business@gmail.com
            </a>
            <p className="text-xs text-gray-text/60 leading-relaxed">
              Use the subject line &quot;Digital Presence Enquiry&quot; for the fastest routing.
            </p>
          </div>

          {/* Location */}
          <div className="glass-card border border-border-color rounded-2xl p-8 space-y-3 hover:border-bronze/40 transition-colors duration-300">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-text/50 font-bold">
              Location
            </span>
            <p className="text-sm font-semibold text-heading">
              Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075
            </p>
            <p className="text-xs text-gray-text/60 leading-relaxed">
              Spot My Business operates remotely and works with local businesses across
              Kolkata and beyond. We serve clients through phone, WhatsApp, and email.
            </p>
          </div>

          {/* Business Hours */}
          <div className="glass-card border border-border-color rounded-2xl p-8 space-y-3 hover:border-bronze/40 transition-colors duration-300">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-text/50 font-bold">
              Business Hours
            </span>
            <div className="space-y-1.5 text-xs">
              {businessHours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between items-center py-0.5 text-gray-text border-b border-border-color/20 last:border-b-0"
                >
                  <span className="font-medium text-heading">{h.day}</span>
                  <span className="text-light-bronze font-semibold">{h.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-gray-text/60 pt-1 leading-relaxed">
              Available 24 hours every day across all communication channels.
            </p>
          </div>

          {/* Social */}
          <div className="glass-card border border-border-color rounded-2xl p-8 space-y-3 hover:border-bronze/40 transition-colors duration-300">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-text/50 font-bold">
              Follow Us
            </span>
            <div className="space-y-2">
              <a
                href="https://www.linkedin.com/company/spot-my-business/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-semibold text-heading hover:text-light-bronze transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/spotmybusiness.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-semibold text-heading hover:text-light-bronze transition-colors duration-200"
              >
                Instagram
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* Enquiry Form — sidebar suppressed; contact details already shown above */}
      <Contact hideSidebar />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* Related links */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-text/50 font-bold mb-5">
          Explore More
        </p>
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Services", href: "/services/" },
            { label: "Case Studies", href: "/case-studies/" },
            { label: "About", href: "/about/" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-5 py-2.5 rounded-full border border-border-color text-xs tracking-[0.15em] uppercase font-semibold text-gray-text hover:border-bronze/50 hover:text-white transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
