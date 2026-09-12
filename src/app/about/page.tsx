import type { Metadata } from "next";

import About from "@/components/About";

export const metadata: Metadata = {
  title: "About Spot My Business | Digital Presence for Local Businesses",
  description:
    "Spot My Business helps local businesses become easier to find and understand online across their website, Google Search, Google Maps, and customer-facing reputation.",
  alternates: {
    canonical: "https://spotmybusiness.in/about/",
  },
  openGraph: {
    title: "About Spot My Business | Digital Presence for Local Businesses",
    description:
      "Spot My Business helps local businesses become easier to find and understand online across their website, Google Search, Google Maps, and customer-facing reputation.",
    url: "https://spotmybusiness.in/about/",
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

      {/* Mission, Vision, Values — existing About component */}
      <About />

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
            <a
              href="/services/"
              className="inline-block mt-2 text-[10px] tracking-[0.2em] font-heading font-bold text-light-bronze uppercase hover:text-champagne transition-colors duration-300"
            >
              See All Services →
            </a>
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
            { label: "Services", href: "/services/" },
            { label: "Case Studies", href: "/case-studies/" },
            { label: "Industries", href: "/industries/" },
            { label: "Locations", href: "/locations/" },
            { label: "Contact", href: "/contact/" },
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
            <a
              href="/contact/"
              className="inline-block mt-2 px-8 py-4 rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-[0.25em] uppercase font-bold font-heading text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

