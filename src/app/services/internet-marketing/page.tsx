import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internet Marketing Services in Kolkata | Spot My Business",
  description:
    "Spot My Business provides internet marketing services in Kolkata for local businesses—combining Local SEO, Google Business Profile, Maps, and website solutions.",
  alternates: {
    canonical: "https://spotmybusiness.in/services/internet-marketing/",
  },
  openGraph: {
    title: "Internet Marketing Services in Kolkata | Spot My Business",
    description:
      "Spot My Business provides internet marketing services in Kolkata for local businesses—combining Local SEO, Google Business Profile, Maps, and website solutions.",
    url: "https://spotmybusiness.in/services/internet-marketing/",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function InternetMarketingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://spotmybusiness.in/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Services",
            item: "https://spotmybusiness.in/services/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Internet Marketing",
            item: "https://spotmybusiness.in/services/internet-marketing/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Internet Marketing Service",
        description:
          "Comprehensive internet marketing services in Kolkata encompassing Local SEO, Google Business Profile optimization, Google Maps visibility, and performance website development.",
        url: "https://spotmybusiness.in/services/internet-marketing/",
        provider: {
          "@type": ["LocalBusiness", "ProfessionalService"],
          name: "Spot My Business",
          url: "https://spotmybusiness.in",
          telephone: ["+91 9007960333", "+91 8597913452"],
          email: "smb.spot.my.business@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Middle Rd, Sen Para, Santoshpur",
            addressLocality: "Kolkata",
            addressRegion: "West Bengal",
            postalCode: "700075",
            addressCountry: "IN",
          },
        },
      },
    ],
  };

  const capabilities = [
    {
      title: "Local SEO & Geographic Search Alignment",
      detail:
        "We optimize your website's content, technical structure, and on-page signals around how local customers in Kolkata search for your specific services.",
    },
    {
      title: "Google Business Profile Optimization",
      detail:
        "Complete, verified, and category-aligned setup of your Business Profile to ensure your business stands out with accurate information, photos, and services.",
    },
    {
      title: "Google Maps Discovery & Presence",
      detail:
        "Refining the location signals and service-area definitions that help nearby customers discover and route to your business when browsing Google Maps.",
    },
    {
      title: "Conversion-Focused Website Development",
      detail:
        "Building fast, mobile-responsive websites with clear service explanations, proof points, and friction-free contact pathways via phone and WhatsApp.",
    },
    {
      title: "Reputation & Review Strategy",
      detail:
        "Helping you develop ethical, structured customer feedback workflows to build public trust and enhance conversion rates across digital touchpoints.",
    },
    {
      title: "Website Health & Performance",
      detail:
        "Ensuring your website loads swiftly, functions flawlessly across modern smartphones, and maintains clean search crawler accessibility.",
    },
  ];

  const process = [
    {
      title: "Business & Market Discovery",
      detail:
        "We analyze your service offerings, target clientele, current search presence, and local competitors in Kolkata to uncover immediate visibility gaps.",
    },
    {
      title: "Digital Presence Blueprint",
      detail:
        "We design an integrated plan uniting your website structure, Google Business Profile categories, and location targeting for cohesive messaging.",
    },
    {
      title: "Implementation & Technical Optimization",
      detail:
        "We build or refine your web pages, implement structured schema markup, optimize metadata, and verify location facts across search touchpoints.",
    },
    {
      title: "Local Signal Alignment",
      detail:
        "We synchronize your name, address, phone number, operating hours, and service categories across Google Maps and authoritative local listings.",
    },
    {
      title: "Review, Monitoring & Refinement",
      detail:
        "We continuously review search crawl health, user engagement, and customer enquiry flows to adapt your presence as your business expands.",
    },
  ];

  const benefits = [
    {
      title: "Targeted Local Discovery",
      detail:
        "Reach customers at the exact moment they are looking for your services in Kolkata, Santoshpur, and surrounding regional markets.",
    },
    {
      title: "Unified Business Identity",
      detail:
        "Eliminate customer confusion with synchronized business details across your website, Google Maps, and search listings.",
    },
    {
      title: "Frictionless Enquiries",
      detail:
        "Direct prospective clients to fast, convenient contact channels including one-tap phone calls and direct WhatsApp messaging.",
    },
    {
      title: "Long-Term Digital Equity",
      detail:
        "Build a solid digital asset owned by your business that compounds authority and trust over time rather than relying solely on transient ads.",
    },
  ];

  const faqs = [
    {
      question: "What makes internet marketing essential for local businesses in Kolkata?",
      answer:
        "Local customers in Kolkata increasingly turn to Google Search and Google Maps before making purchasing decisions, choosing service providers, or visiting physical locations. An effective internet marketing strategy ensures your business is accurately represented and easy to contact when high-intent local searches occur.",
    },
    {
      question: "How do Google Business Profile and website development work together?",
      answer:
        "Your Google Business Profile acts as your frontline storefront in local search and Maps results, while your website provides comprehensive service details, credibility, and in-depth answers. Together, they create a cohesive digital ecosystem that Google and local customers trust.",
    },
    {
      question: "Do you guarantee specific #1 keyword rankings?",
      answer:
        "No ethical digital agency can guarantee specific algorithmic rankings because search engines continuously refine their ranking systems. Spot My Business focuses on best-practice technical SEO, genuine information architecture, and real business relevance that sustainably earns visibility.",
    },
    {
      question: "How can we get started with Spot My Business?",
      answer:
        "You can reach out via our contact form, call us directly at +91 9007960333 or +91 8597913452, or start a WhatsApp chat. We will discuss your current digital presence and outline a tailored roadmap.",
    },
  ];

  return (
    <main className="bg-primary-bg text-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-text">
          <ol className="flex flex-wrap gap-2">
            <li>
              <Link href="/" className="hover:text-light-bronze">
                Home
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li>
              <Link href="/services/" className="hover:text-light-bronze">
                Services
              </Link>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">Internet Marketing</li>
          </ol>
        </nav>

        {/* Hero Section */}
        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Internet Marketing Service
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Internet Marketing Services in Kolkata for Local Businesses
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business provides end-to-end internet marketing services designed
            specifically for local businesses. Based in Kolkata, we integrate Local SEO,
            Google Business Profile optimization, Google Maps visibility, conversion-driven
            websites, and reputation management into a unified strategy that drives customer
            trust and genuine enquiries.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
            >
              Talk to Us
            </Link>
            <Link
              href="/services/local-seo/"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading transition-colors duration-300"
            >
              Explore Local SEO
            </Link>
          </div>
        </section>

        {/* Overview Section */}
        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              Connecting Your Business with High-Intent Local Searches
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              Modern internet marketing is no longer about disconnected tactics or generic
              traffic generation. For local businesses, success relies on capturing customers
              who are actively looking for solutions in their immediate geographic area.
            </p>
            <p>
              At Spot My Business, our approach connects every element of your digital footprint:
              your website serves as the authoritative source of truth, your Google Business Profile
              drives local search discovery, and your customer reviews build verifiable trust.
            </p>
            <p>
              Whether you operate a local clinic, consultancy, retail storefront, coaching institute,
              or specialized trade across Kolkata and West Bengal, we ensure your business is presented
              with clarity, accuracy, and professionalism across the web.
            </p>
          </div>
        </section>

        {/* Capabilities Grid */}
        <section className="py-12 border-t border-border-color">
          <h2 className="text-3xl font-heading font-bold">What Our Internet Marketing Covers</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            We provide cohesive, practical digital marketing services that work together to strengthen
            your total market presence without unnecessary complexity.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color bg-secondary-bg p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-semibold text-heading text-lg">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray-text leading-relaxed">{item.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Process Section */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Our 5-Step Marketing Process</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            A structured, transparent workflow focused on building durable search equity and real customer engagement.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color p-5 bg-secondary-bg/50"
              >
                <span className="text-sm font-semibold text-light-bronze">
                  0{index + 1}
                </span>
                <p className="mt-3 font-semibold text-heading">{item.title}</p>
                <p className="mt-2 text-xs text-gray-text leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Key Benefits */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Why Local Businesses Choose Spot My Business</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Practical marketing solutions built around verifiable business facts, clear communication, and customer convenience.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-xl border border-border-color bg-secondary-bg p-6"
              >
                <h3 className="font-semibold text-heading text-lg">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-text leading-relaxed">{benefit.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4 max-w-4xl">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-xl border border-border-color bg-secondary-bg p-6"
              >
                <h3 className="text-base font-bold text-heading">{faq.question}</h3>
                <p className="mt-2 text-sm text-gray-text leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Services */}
        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Explore Related Services</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Discover the individual building blocks that power our comprehensive internet marketing solutions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/services/local-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze transition-colors duration-200"
            >
              Local SEO
            </Link>
            <Link
              href="/services/google-business-profile-optimization/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze transition-colors duration-200"
            >
              Google Business Profile
            </Link>
            <Link
              href="/services/google-maps-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze transition-colors duration-200"
            >
              Google Maps SEO
            </Link>
            <Link
              href="/services/website-development/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze transition-colors duration-200"
            >
              Website Development
            </Link>
            <Link
              href="/services/website-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze transition-colors duration-200"
            >
              Website SEO
            </Link>
            <Link
              href="/services/reputation-management/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze transition-colors duration-200"
            >
              Reputation Management
            </Link>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12 border border-border-color">
          <h2 className="text-3xl font-heading font-bold">
            Strengthen Your Internet Marketing Strategy in Kolkata
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            Ready to enhance your local search visibility, attract nearby clients, and build a reliable digital presence? Contact our Kolkata-based team to discuss your goals.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contact/"
              className="inline-block rounded-full bg-gradient-to-r from-bronze to-light-bronze px-8 py-3.5 text-sm font-semibold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
            >
              Contact Spot My Business
            </Link>
            <a
              href="tel:+919007960333"
              className="inline-block rounded-full border border-border-color px-6 py-3.5 text-sm font-semibold text-gray-text hover:text-heading transition-colors duration-200"
            >
              Call +91 9007960333
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
