import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

import About from "@/components/About";
import TeamShowcase from "@/components/TeamShowcase";
import { businessInfo } from "@/lib/business";

export const metadata: Metadata = {
  title: "About Spot My Business | Digital Presence for Local Businesses",
  description:
    "Spot My Business helps local businesses become easier to find and understand online across their website, Google Search, Google Maps, and customer-facing reputation.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/about",
  },
  openGraph: {
    title: "About Spot My Business | Digital Presence for Local Businesses",
    description:
      "Spot My Business helps local businesses become easier to find and understand online across their website, Google Search, Google Maps, and customer-facing reputation.",
    url: "https://www.spotmybusiness.in/about",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function AboutPage() {
  const approach = [
    {
      area: "Website",
      desc: "We plan, build, and maintain business websites that clearly represent what a business does, how it operates, and how customers can reach it. Structure, content, and technical quality all contribute to how well a site performs — in search and for visitors.",
    },
    {
      area: "Google Business Profile",
      desc: "A complete, accurate Google Business Profile helps customers find the right information quickly and supports visibility across Google Search and Maps. We review and optimise profile information, categories, and service details so the profile reflects the business as it actually operates.",
    },
    {
      area: "Google Search & Local SEO",
      desc: "Local search visibility depends on consistent, well-structured signals across your website and online presence. We develop a local SEO approach around your services, location, and market — making it easier for customers to find relevant information when they search.",
    },
    {
      area: "Google Maps",
      desc: "When customers search for services in a specific area, Google Maps is often where they look first. We refine the information and local signals that support a clearer, more complete presence in Maps for your relevant service areas.",
    },
    {
      area: "Reputation",
      desc: "Customer feedback and reviews shape how a business is perceived online. We help establish a thoughtful approach to reviews that supports trust and presents the business more clearly to prospective customers.",
    },
  ];

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
            About
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            Who We Are
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading leading-tight">
            About Spot My Business
          </h1>
          <p className="mt-6 text-gray-text text-base md:text-lg leading-relaxed max-w-2xl">
            Spot My Business is a digital presence service for local businesses.
            We help businesses become easier to find and understand online — across
            their website, Google Search, Google Maps, and through how customers
            perceive them.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* Founding Team Showcase */}
      <TeamShowcase />

      {/* Mission, Vision, Values — existing About component */}
      <About />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* Verified Google Business Profile Widget */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            Verified Presence
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-heading font-bold tracking-tight text-heading">
            Our Google Business Profile
          </h2>
          <p className="mt-5 text-gray-text text-sm leading-relaxed">
            Spot My Business is registered and verified on Google Search and Google Maps.
            Operating from our headquarters in Santoshpur, Kolkata, we serve local businesses across
            West Bengal and throughout India with dedicated local search optimization, search governance, and web engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 glass-card border border-border-color rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Profile Header & Verification Status */}
              <div className="flex items-start justify-between gap-4 border-b border-border-color/60 pb-5">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-secondary-bg border border-border-color flex items-center justify-center text-light-bronze shrink-0 shadow-sm">
                    <ShieldCheck className="w-6 h-6 text-light-bronze" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-light-bronze">
                      Verified Profile
                    </span>
                    <h3 className="font-heading font-bold text-lg text-heading">
                      {businessInfo.name}
                    </h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-semibold text-emerald-400 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Verified Information List */}
              <div className="space-y-4 text-xs">
                {/* Category */}
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-secondary-bg border border-border-color text-light-bronze shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-gray-text/60 text-[11px] block">Primary Category</span>
                    <span className="font-medium text-heading">{businessInfo.primaryCategory}</span>
                  </div>
                </div>

                {/* Physical Location */}
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-secondary-bg border border-border-color text-light-bronze shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-gray-text/60 text-[11px] block">Registered Address</span>
                    <p className="font-medium text-heading leading-relaxed">
                      {businessInfo.address.streetAddress}, {businessInfo.address.addressLocality}, {businessInfo.address.addressRegion} {businessInfo.address.postalCode}
                    </p>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-secondary-bg border border-border-color text-light-bronze shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-gray-text/60 text-[11px] block">Business Hours</span>
                    <p className="font-medium text-heading">
                      Mon – Sun: Open 24 Hours
                    </p>
                  </div>
                </div>

                {/* Direct Telephones */}
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-secondary-bg border border-border-color text-light-bronze shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </span>
                  <div>
                    <span className="text-gray-text/60 text-[11px] block">Direct Telephones</span>
                    <div className="flex flex-wrap items-center gap-x-2 font-medium text-heading">
                      <a href={`tel:${businessInfo.primaryPhone}`} className="hover:text-light-bronze transition-colors">
                        {businessInfo.primaryPhone}
                      </a>
                      <span className="text-gray-text/40">•</span>
                      <a href={`tel:${businessInfo.secondaryPhone}`} className="hover:text-light-bronze transition-colors">
                        {businessInfo.secondaryPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Action Links */}
            <div className="pt-5 border-t border-border-color/60 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.google.com/?cid=16138760074697356404"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs font-heading font-bold uppercase tracking-[0.15em] text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
              >
                <span>View on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" />
              </a>
              <a
                href={businessInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-full border border-border-color text-xs font-heading font-semibold uppercase tracking-[0.15em] text-gray-text hover:text-heading hover:border-light-bronze/60 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Map */}
          <div className="lg:col-span-7 rounded-2xl border border-border-color overflow-hidden bg-secondary-bg shadow-xl relative min-h-[380px] lg:min-h-[460px] flex flex-col">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.222150801929!2d88.3806334!3d22.4958468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027174483eab37%3A0xdff839b9e9c6b474!2sSpot%20My%20Business!5e0!3m2!1sen!2sin!4v1785688925625!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Spot My Business Google Maps Profile"
              className="w-full h-full min-h-[380px] lg:min-h-[460px] flex-1"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* How We Approach Digital Presence */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            Our Approach
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-heading font-bold tracking-tight text-heading">
            How We Approach Digital Presence
          </h2>
          <p className="mt-5 text-gray-text text-sm leading-relaxed">
            Digital presence is not a single thing — it is the sum of how a business
            appears and communicates across multiple channels. Our work covers five
            interconnected areas, each of which affects how easily customers can find
            and understand a business online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {approach.map((item) => (
            <div
              key={item.area}
              className="glass-card border border-border-color rounded-2xl p-8 space-y-3 hover:border-bronze/40 transition-colors duration-300"
            >
              <h3 className="text-base font-heading font-bold text-heading">
                {item.area}
              </h3>
              <p className="text-sm text-gray-text leading-relaxed">{item.desc}</p>
            </div>
          ))}

          {/* Connecting note — spans remaining column on md+ */}
          <div className="glass-card border border-border-color/50 rounded-2xl p-8 space-y-3 md:col-span-1 bg-bronze/5">
            <h3 className="text-base font-heading font-bold text-heading">
              Working Together
            </h3>
            <p className="text-sm text-gray-text leading-relaxed">
              These five areas are most effective when they are aligned. A strong
              website reinforces SEO. An accurate Google Business Profile supports Maps
              visibility. Reputation management strengthens every channel it touches.
              We approach each engagement with the full picture in mind — starting from
              where the business is today.
            </p>
            <Link
              href="/services"
              className="inline-block mt-2 text-[10px] tracking-[0.2em] font-heading font-bold text-light-bronze uppercase hover:text-champagne transition-colors duration-300"
            >
              See All Services →
            </Link>
          </div>
        </div>
      </section>

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
            { label: "Services", href: "/services" },
            { label: "Case Studies", href: "/case-studies" },
            { label: "Industries", href: "/industries" },
            { label: "Locations", href: "/locations" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-5 py-2.5 rounded-full border border-border-color text-xs tracking-[0.15em] uppercase font-semibold text-gray-text hover:border-bronze/50 hover:text-white transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="glass-panel border border-border-color rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
          {/* Decorative glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-bronze/5 blur-[120px] pointer-events-none" />
          <div className="relative z-10 space-y-5 max-w-xl mx-auto">
            <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-heading">
              Ready to Strengthen Your Digital Presence?
            </h2>
            <p className="text-gray-text text-sm leading-relaxed">
              Tell us where your business is today and what you would like to improve.
              We are happy to discuss your website, Google Business Profile, local
              search visibility, or reputation — whichever is the right starting point.
            </p>
            <Link
              href="/contact"
              className="inline-block mt-2 px-8 py-4 rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-[0.25em] uppercase font-bold font-heading text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
