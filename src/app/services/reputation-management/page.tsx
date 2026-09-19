import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reputation Management for Local Businesses | Spot My Business",
  description:
    "Monitor customer feedback, establish professional review response workflows, and maintain a trustworthy public business presence.",
  alternates: {
    canonical: "https://spotmybusiness.in/services/reputation-management/",
  },
  openGraph: {
    title: "Reputation Management for Local Businesses | Spot My Business",
    description:
      "Monitor customer feedback, establish professional review response workflows, and maintain a trustworthy public business presence.",
    url: "https://spotmybusiness.in/services/reputation-management/",
    siteName: "Spot My Business",
    type: "website",
  },
};

export default function ReputationManagementPage() {
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
            name: "Reputation Management",
            item: "https://spotmybusiness.in/services/reputation-management/",
          },
        ],
      },
      {
        "@type": "Service",
        name: "Reputation Management",
        description:
          "Review monitoring, response guidance, and customer feedback workflow management for local businesses.",
        url: "https://spotmybusiness.in/services/reputation-management/",
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
      title: "Review monitoring",
      detail:
        "We help you keep track of public customer feedback on the surfaces that matter for the business, so comments are not left unnoticed for long periods.",
    },
    {
      title: "Response guidance and workflows",
      detail:
        "We set a practical way to reply: who responds, in what tone, and how quickly - so replies stay professional even when the feedback is mixed.",
    },
    {
      title: "A consistent professional presence",
      detail:
        "Reviews sit next to hours, photos, and contact details. We look at whether that whole public picture feels coherent, not only at individual comments.",
    },
    {
      title: "Recurring feedback themes",
      detail:
        "Patterns in what customers praise or raise as problems are more useful than any single comment. We help you notice those themes so they can inform how the business presents itself.",
    },
    {
      title: "How business information is presented",
      detail:
        "Unclear hours, missing services, or mixed contact details can undermine trust even when feedback is thoughtful. We review those public facts alongside the review presence.",
    },
    {
      title: "Connection to the Business Profile and local presence",
      detail:
        "Much of what people read about a local business appears on Google Search, Maps, and the Google Business Profile. Reputation work is coordinated with that presence; day-to-day profile and Maps optimization remain related services.",
    },
    {
      title: "Ongoing reputation maintenance",
      detail:
        "Feedback continues after a one-off tidy-up. When it is useful, we keep monitoring, refining replies, and checking that the public picture stays consistent.",
    },
  ];

  const negativeFeedback = [
    {
      title: "Acknowledge legitimate concerns",
      detail:
        "If a customer describes a real issue, a calm acknowledgement is more useful than a dismissal. The public reply can show that the comment was read.",
    },
    {
      title: "Respond professionally",
      detail:
        "Short, factual, and courteous replies help other readers. They also leave room to continue the conversation privately.",
    },
    {
      title: "Avoid arguments in public",
      detail:
        "Defensive or heated language rarely helps the original customer and often makes the listing harder for new visitors to trust.",
    },
    {
      title: "Look for recurring issues",
      detail:
        "One comment may be an outlier. Several similar comments may point to something the business can address in operations or in how it explains its offer.",
    },
    {
      title: "Use feedback constructively",
      detail:
        "Public reviews are one source of insight. They can inform website copy, service descriptions, or internal process - without treating every comment as a verdict.",
    },
    {
      title: "Take some conversations offline",
      detail:
        "Where a specific complaint needs details, invite the customer to continue by phone or message. That is often more appropriate than a long public exchange.",
    },
  ];

  const process = [
    {
      title: "Monitor",
      detail:
        "We establish where feedback appears and how the business will notice new comments without relying on chance.",
    },
    {
      title: "Assess feedback",
      detail:
        "Existing reviews and comments are read for tone, themes, and whether public information around them is complete and consistent.",
    },
    {
      title: "Establish a response approach",
      detail:
        "We agree a simple way to reply to praise, mixed feedback, and concerns - so responses are consistent rather than improvised each time.",
    },
    {
      title: "Maintain consistency",
      detail:
        "Replies, business details, and the wider local presence are kept aligned so customers are not comparing conflicting pictures of the same business.",
    },
    {
      title: "Review and refine",
      detail:
        "The approach is revisited as the business and its feedback change. Refinement is about a calmer, clearer public presence - not a target rating.",
    },
  ];

  const outcomes = [
    {
      title: "Easier for prospective customers to evaluate the business",
      detail:
        "People already read reviews and public details before they call. A monitored, professionally handled presence gives them more context - not a promised conversion rate.",
    },
    {
      title: "A more credible first impression",
      detail:
        "Thoughtful replies and accurate information sit together. That combination is more convincing than a listing that looks neglected or inconsistent.",
    },
    {
      title: "Insight into the customer experience",
      detail:
        "Recurring themes in feedback can highlight what is working and what is confusing, which is useful beyond the review platform itself.",
    },
    {
      title: "Consistency across Google and other public information",
      detail:
        "Reputation is easier to trust when the same business facts appear on the website, the Business Profile, Maps, and other public mentions.",
    },
    {
      title: "A constructive way to handle feedback",
      detail:
        "Having an agreed response approach reduces the pressure to react in the moment and makes it easier to treat comments as information, not as a public argument.",
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
            <li aria-current="page">Reputation Management</li>
          </ol>
        </nav>

        <section className="max-w-3xl py-16 md:py-24">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze">
            Reputation Management
          </p>
          <h1 className="mt-4 text-4xl font-heading font-bold leading-tight md:text-6xl">
            Reputation management for a credible public presence
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-text">
            Spot My Business helps local businesses monitor customer
            feedback, respond with care, and keep public business information
            consistent - so people evaluating you online see a presence that is
            easier to trust. The work is not a campaign to manufacture
            reviews or a promised star rating.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact/"
              className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading"
            >
              Talk to Us
            </a>
            <a
              href="/services/google-business-profile-optimization/"
              className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading"
            >
              Explore Business Profile Optimization
            </a>
          </div>
        </section>

        <section className="grid gap-8 border-t border-border-color py-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-heading font-bold">
              What this work actually involves
            </h2>
          </div>
          <div className="space-y-4 text-gray-text">
            <p>
              Before many people call or visit, they read reviews and scan
              public details: hours, photos, services, and how the business
              replies. That mix shapes trust as much as any single comment.
            </p>
            <p>
              Monitoring matters because feedback arrives over time. A listing
              that is never checked can leave questions unanswered, or leave
              an old concern as the last thing a new customer sees.
            </p>
            <p>
              Professional, consistent replies show that the business is
              paying attention. They do not need to be long. They do need to
              stay factual and calm, including when the comment is critical.
            </p>
            <p>
              Reputation sits inside a wider digital presence. The Google
              Business Profile, Maps, the website, and other public
              information all contribute to the same first impression. This
              page is about how feedback is handled and how that public
              picture stays coherent - not about ranking in local search or
              editing every profile field.
            </p>
            <p>
              Authentic customer feedback is the only kind worth building
              around. Generating, buying, or fabricating reviews, hiding
              legitimate comments, or promising that negative feedback can be
              removed is not part of this service. Those practices mislead
              customers and undermine the presence they are meant to support.
            </p>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-heading font-bold">What we can help with</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            The work stays on monitoring, response, and presentation. We do
            not run review-generation schemes, guarantee a rating, suppress
            feedback, or claim a method that removes legitimate negative
            reviews.
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
          <h2 className="text-3xl font-heading font-bold">
            Handling negative feedback
          </h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            Critical comments are part of a public presence. The aim is to
            respond in a way that is fair to the customer and readable for
            everyone else. This is practical guidance, not legal advice, and
            it does not promise that a review can be taken down.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {negativeFeedback.map((item) => (
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
            The sequence is steady rather than promotional: notice feedback,
            understand it, agree how to reply, and keep the public details
            consistent.
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
          <h2 className="text-3xl font-heading font-bold">Why reputation matters</h2>
          <p className="mt-4 max-w-3xl text-gray-text leading-relaxed">
            People use public feedback to decide whether a business feels
            reliable. Handling that feedback well supports trust. It does not
            guarantee a rating, a review count, or a particular business
            result.
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
            Reputation work is easier to sustain when the Business Profile,
            Maps presence, local search foundations, and ongoing website
            information stay aligned with the same facts customers see in
            reviews.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
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
              href="/services/local-seo/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Local SEO
            </a>
            <a
              href="/services/website-management/"
              className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze"
            >
              Website management
            </a>
          </div>
        </section>

        <section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
          <h2 className="text-3xl font-heading font-bold">
            Discuss how you handle public feedback
          </h2>
          <p className="mt-3 max-w-2xl text-gray-text">
            If you want a calmer, more consistent way to monitor reviews and
            respond to customers, we can look at the current public presence
            and agree a practical approach. There is no promised rating and
            no offer to generate or remove reviews.
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
