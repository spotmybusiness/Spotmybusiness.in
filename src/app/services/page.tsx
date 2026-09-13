import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website, Local SEO, Maps & Reputation Services | Spot My Business",
  description:
    "Explore Spot My Business services for websites, Local SEO, Google Maps, Google Business Profile optimization, and reputation management—practical digital presence work for local businesses.",
  alternates: {
    canonical: "https://spotmybusiness.in/services/",
  },
  openGraph: {
    title: "Website, Local SEO, Maps & Reputation Services | Spot My Business",
    description:
      "Explore Spot My Business services for websites, Local SEO, Google Maps, Google Business Profile optimization, and reputation management—practical digital presence work for local businesses.",
    url: "https://spotmybusiness.in/services/",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function ServicesPage() {
  const services = [
    {
      title: "Website Development",
      href: "/services/website-development/",
      shortDesc:
        "Build a professional website that clearly represents your business and makes it easier for customers to take the next step.",
      features: [
        "Business Website Planning",
        "Customer-Focused Page Structure",
        "Mobile-Responsive Design",
        "Clear Contact Paths",
      ],
    },
    {
      title: "Website Management",
      href: "/services/website-management/",
      shortDesc:
        "Keep your website current, dependable, and aligned with the way your business operates.",
      features: [
        "Content Updates",
        "Business Information Maintenance",
        "Website Health Checks",
        "Ongoing Support",
      ],
    },
    {
      title: "Website Growth",
      href: null,
      shortDesc:
        "Develop a practical website strategy that supports your business as its needs and market evolve.",
      features: [
        "Website Strategy",
        "Content Improvement Planning",
        "Customer Journey Review",
        "Growth Roadmap",
      ],
    },
    {
      title: "Website SEO",
      href: "/services/website-seo/",
      shortDesc:
        "Make your website easier for search engines and prospective customers to understand.",
      features: [
        "On-Page SEO",
        "Site Structure Review",
        "Content Optimization",
        "Technical SEO Foundations",
      ],
    },
    {
      title: "Website Performance",
      href: "/services/website-performance/",
      shortDesc:
        "Improve the technical experience of your website so visitors can use it with greater confidence.",
      features: [
        "Performance Review",
        "Mobile Experience Review",
        "Core Website Improvements",
        "Technical Recommendations",
      ],
    },
    {
      title: "Local SEO",
      href: "/services/local-seo/",
      shortDesc:
        "Strengthen your visibility for the local searches that matter to your business.",
      features: [
        "Local Search Strategy",
        "Location-Focused Content",
        "Local Presence Review",
        "Search Visibility Foundations",
      ],
    },
    {
      title: "Google Maps SEO",
      href: "/services/google-maps-seo/",
      shortDesc:
        "Help customers discover your business more clearly when they search in Google Maps.",
      features: [
        "Maps Presence Review",
        "Location Information Optimization",
        "Service Area Alignment",
        "Local Discovery Strategy",
      ],
    },
    {
      title: "Google Business Profile Optimization",
      href: "/services/google-business-profile-optimization/",
      shortDesc:
        "Make your Google Business Profile accurate, complete, and useful for prospective customers.",
      features: [
        "Profile Information Optimization",
        "Service and Category Review",
        "Customer-Facing Updates",
        "Profile Completeness Review",
      ],
    },
    {
      title: "Reputation Management",
      href: "/services/reputation-management/",
      shortDesc:
        "Support a trustworthy online presence by making customer feedback an active part of your digital strategy.",
      features: [
        "Review Strategy",
        "Customer Feedback Guidance",
        "Reputation Presence Review",
        "Trust-Building Recommendations",
      ],
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
            Services
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            What We Do
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading leading-tight">
            Digital Presence Services for Local Businesses
          </h1>
          <p className="mt-6 text-gray-text text-base md:text-lg leading-relaxed max-w-2xl">
            Spot My Business offers a connected set of services spanning your website,
            Google Search, Google Maps, and online reputation. Each service is designed
            to work alongside the others, building a digital presence that helps
            customers find and understand your business.
          </p>
          <p className="mt-4 text-gray-text text-sm leading-relaxed max-w-2xl">
            We work with local businesses across a range of industries and locations.
            See our{" "}
            <a
              href="/industries/"
              className="text-light-bronze hover:text-champagne underline underline-offset-2 transition-colors duration-200"
            >
              industries overview
            </a>{" "}
            and{" "}
            <a
              href="/locations/"
              className="text-light-bronze hover:text-champagne underline underline-offset-2 transition-colors duration-200"
            >
              locations hub
            </a>{" "}
            to understand how our work adapts to different markets and operating models.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass-card border border-border-color rounded-2xl p-8 flex flex-col justify-between gap-6 group hover:border-bronze/40 transition-colors duration-300"
            >
              <div>
                <h2 className="text-xl font-heading font-bold text-heading group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-gray-text leading-relaxed">
                  {service.shortDesc}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-xs text-gray-text/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-bronze shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-border-color/50">
                {service.href !== null ? (
                  <a
                    href={service.href}
                    className="inline-block text-[10px] tracking-[0.2em] font-heading font-bold text-light-bronze uppercase hover:text-champagne transition-colors duration-300"
                    aria-label={`View ${service.title} service page`}
                  >
                    View Service →
                  </a>
                ) : (
                  /* Website Growth — no dedicated route; CTA directs to /contact/ */
                  <a
                    href="/contact/"
                    className="inline-block text-[10px] tracking-[0.2em] font-heading font-bold text-light-bronze uppercase hover:text-champagne transition-colors duration-300"
                    aria-label="Discuss Website Growth with Spot My Business"
                  >
                    Discuss with Us →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* How services connect */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            How It Works Together
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-heading font-bold tracking-tight text-heading">
            Services That Support Each Other
          </h2>
          <p className="mt-5 text-gray-text text-sm leading-relaxed">
            A strong digital presence is rarely built from a single service. A
            well-structured website supports SEO. A complete Google Business Profile
            reinforces Maps visibility. Reputation management makes every other channel
            more effective. Our services are designed to work as a connected whole, and
            we approach each engagement with that in mind — starting from where your
            business is today.
          </p>
          <p className="mt-4 text-gray-text text-sm leading-relaxed">
            To see how this work applies in practice, browse our{" "}
            <a
              href="/case-studies/"
              className="text-light-bronze hover:text-champagne underline underline-offset-2 transition-colors duration-200"
            >
              client showcase and project snapshots
            </a>
            .
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="border-t border-border-color/40" />
      </div>

      {/* Related links */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Industries", href: "/industries/" },
            { label: "Locations", href: "/locations/" },
            { label: "Case Studies", href: "/case-studies/" },
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

      {/* Contact CTA */}
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
              We can discuss your website, Google Business Profile, Local SEO, Google
              Maps visibility, or reputation — whichever area is the right starting
              point for you.
            </p>
            <a
              href="/contact/"
              className="inline-block mt-2 px-8 py-4 rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-[0.25em] uppercase font-bold font-heading text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
