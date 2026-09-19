import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Local SEO Services for Local Businesses | Spot My Business",
  description:
    "Strengthen your local search presence across website content, on-page SEO, search intent, and consistent business information.",
  alternates: {
    canonical: "https://spotmybusiness.in/services/local-seo/",
  },
  openGraph: {
    title: "Local SEO Services for Local Businesses | Spot My Business",
    description:
      "Strengthen your local search presence across website content, on-page SEO, search intent, and consistent business information.",
    url: "https://spotmybusiness.in/services/local-seo/",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function LocalSeoPage() {
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
            name: "Local SEO",
            item: "https://spotmybusiness.in/services/local-seo/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Local SEO",
        description:
          "Comprehensive local search engine optimization across website content, on-page structure, and local business signals.",
        url: "https://spotmybusiness.in/services/local-seo/",
        provider: {
          "@type": "LocalBusiness",
          name: "Spot My Business",
          url: "https://spotmybusiness.in",
        },
      },
    ],
  };

  const capabilities = [
    {
      title: "Local search-intent research",
      detail:
        "We look at how people actually search for the services you offer in your market - the language they use, the questions they ask, and which pages on the site should answer them.",
    },
    {
      title: "On-page optimization",
      detail:
        "Titles, headings, body copy, and page structure are refined so each important page is easier for customers and search engines to understand.",
    },
    {
      title: "Service and location relevance",
      detail:
        "Service pages and location details are written around what the business actually does and where it genuinely operates - not around invented coverage or thin doorway pages.",
    },
    {
      title: "Website content structure",
      detail:
        "The site is organized so local customers can move from a service they need to clear proof of relevance and a way to get in touch.",
    },
    {
      title: "Internal linking",
      detail:
        "Related service, location, and supporting pages are linked in a way that helps people and search engines see how the business fits together.",
    },
    {
      title: "Business Profile and website alignment",
      detail:
        "The website and the Google Business Profile should describe the same business. We check that names, services, and contact information support each other. Day-to-day profile management is a related service.",
    },
    {
      title: "Local business information consistency",
      detail:
        "Name, address, phone, hours, and other facts are reviewed so the website, Maps, and other mentions of the business are not sending mixed signals.",
    },
    {
      title: "Relevant local citations where appropriate",
      detail:
        "Where a directory or listing genuinely represents the business, we look at whether the information is accurate and consistent. We do not treat mass citation building as a substitute for useful pages.",
    },
    {
      title: "Reviews and reputation considerations",
      detail:
        "Customer feedback that appears in local search is part of how people judge a business. We consider how it fits the wider presence, without creating reviews or ratings.",
    },
    {
      title: "Ongoing monitoring and refinement",
      detail:
        "Search behaviour, pages, and local information change. When it is useful, we keep reviewing the site and the supporting local presence and adjusting what is unclear.",
    },
  ];

  const process = [
    {
      title: "Understand the business and market",
      detail:
        "We start with what you offer, who you serve, and how customers currently find and contact you - so the work is built around the real business, not a generic local template.",
    },
    {
      title: "Research relevant local search intent",
      detail:
        "We identify the searches that matter for your services and the kinds of pages that would actually help someone choosing a business.",
    },
    {
      title: "Identify website and local-presence gaps",
      detail:
        "Missing service pages, unclear information, weak internal links, and mismatches between the site, Business Profile, and Maps are listed before changes are made.",
    },
    {
      title: "Optimize and build useful supporting content",
      detail:
        "Existing pages are improved and, where there is a genuine need, new content is planned so local search intent has a clear place to land on the site.",
    },
    {
      title: "Monitor and refine",
      detail:
        "The site and supporting local details are reviewed as the business and its market change. Refinement is about clearer information, not a promised ranking.",
    },
  ];

  const outcomes = [
    {
      title: "Easier discovery by relevant customers",
      detail:
        "When pages and local information match how people search, it is easier for the right customers to find the business. That is not a guarantee of a particular position in results.",
    },
    {
      title: "Clearer, more useful website information",
      detail:
        "Service pages, location details, and contact paths are written so a visitor can understand the offer without hunting through vague copy.",
    },
    {
      title: "Search intent matched to the right pages",
      detail:
        "Someone looking for a specific service should land on a page that answers that need, instead of a generic homepage that tries to cover everything.",
    },
    {
      title: "A more consistent presence across Google and the web",
      detail:
        "The website, Business Profile, Maps listing, and other mentions of the business should describe the same facts, so customers are not comparing conflicting details.",
    },
    {
      title: "Clearer paths to get in touch",
      detail:
        "When the right page is easy to find and contact options are obvious, calling, messaging, or sending an enquiry takes less effort.",
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
        <nav aria-label="Breadcrumb" className="text-sm text-gray-text">
          <ol className="flex flex-wrap gap-2">
            <li>
              <a href="/" className="hover:text-light-bronze">
                Home
              </a>
            </li>
            <li aria-hidden="true">→</li>
            <li>
              <a href="/services/" className="hover:text-light-bronze">
                Services
              </a>
            </li>
            <li aria-hidden="true">→</li>
            <li aria-current="page">Local SEO</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Local SEO
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Local SEO that connects your website with how customers search
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business helps local businesses make their website and
            wider online presence easier to discover for relevant searches in
            their market. That includes useful service pages, consistent
            business information, and alignment with Search, Maps, and the
            Google Business Profile - not profile editing or Maps listing work
            on their own.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact/"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </a>
            <a
              href="/services/google-maps-seo/"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Google Maps SEO
            </a>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              What this broader work involves
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              Local search is how people look for a nearby business when they
              already have a need. The job is to make the right business
              easier to recognize - through pages that answer that need, and
              through facts that match across the web.
            </p>
            <p>
              The website is the centre of that work. A Google Business
              Profile and a Maps listing matter, but they are parts of the
              same picture: Profile optimization is about the listing
              itself; Maps SEO is about how the business is presented and
              discovered on the map. Local SEO is the wider discipline that
              ties the site, those Google surfaces, and other local signals
              together.
            </p>
            <p>
              Useful location and service information is essential. Customers
              need to see what you offer, how it relates to their search, and
              how to contact you. Thin pages created only to chase a phrase
              do not help them, and they are not how we approach the work.
            </p>
            <p>
              Consistency and accuracy across the online presence reduce
              confusion. If the website, Maps, and other mentions disagree on
              hours, services, or contact details, people have less reason to
              trust any of them.
            </p>
            <p>
              Search engines are not something Spot My Business can operate
              from the inside. The work is to organize genuine information
              and useful pages so local search has something clear to
              understand - not to manipulate ranking systems or promise a
              position in results.
            </p>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-heading font-bold">What we can help with</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            The capabilities below stay on the website and the public local
            presence around it. We do not claim unpublished tools or
            privileged access to Google.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color bg-secondary-bg p-5"
              >
                <p className="font-semibold text-heading">{item.title}</p>
                <p className="mt-2 text-gray-text">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Our approach</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            The sequence is research, then gaps, then useful pages and
            consistent information. Growth figures and rankings are not part
            of the promise.
          </p>
          <ol className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {process.map((item, index) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color p-5"
              >
                <span className="text-sm font-semibold text-light-bronze">
                  0{index + 1}
                </span>
                <p className="mt-3 font-semibold text-heading">{item.title}</p>
                <p className="mt-2 text-gray-text">{item.detail}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Why this work matters</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Local customers already search with intent. A clearer website and
            a more consistent local presence make it easier for them to
            choose the right next step. The points below describe that
            practical value; they are not measured results.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <li
                key={item.title}
                className="rounded-xl border border-border-color bg-secondary-bg p-5"
              >
                <p className="font-semibold text-heading">{item.title}</p>
                <p className="mt-2 text-gray-text">{item.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border-color py-12">
          <h2 className="text-3xl font-heading font-bold">Related services</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Local search is easier to sustain when the Business Profile, Maps
            presence, website SEO, and reputation work are treated as
            connected parts of the same digital presence.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/services/internet-marketing/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Internet Marketing
            </a>
            <a
              href="/services/google-business-profile-optimization/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Google Business Profile Optimization
            </a>
            <a
              href="/services/google-maps-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Google Maps SEO
            </a>
            <a
              href="/services/website-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website SEO
            </a>
            <a
              href="/services/reputation-management/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Reputation management
            </a>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss your local search presence
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If you want the website and the rest of your local presence to
            match how customers already search, we can review the current
            pages, information, and gaps. The conversation is about a
            clearer foundation - not guaranteed rankings or lead numbers.
          </p>
          <a
            href="/contact/"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
          >
            Contact Spot My Business
          </a>
        </section>
      </div>
    </main>
  );
}
