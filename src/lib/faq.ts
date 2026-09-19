export interface FAQItem {
  id: string;
  question: string;
  answer: string[];
  relatedLink?: {
    text: string;
    href: string;
  };
}

export interface FAQCategory {
  id: string;
  name: string;
  description: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: "work-model",
    name: "How We Work & Remote Delivery",
    description: "Learn how Spot My Business collaborates with clients across India and internationally from our Kolkata headquarters.",
    items: [
      {
        id: "remote-collaboration-model",
        question: "How does Spot My Business work with clients in different cities?",
        answer: [
          "Spot My Business operates remotely from our registered office in Santoshpur, Kolkata (Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075). We do not require in-person meetings or maintain branch offices in other cities.",
          "We coordinate projects seamlessly via phone calls, google meet, WhatsApp communication, email updates, and digital reviews. This remote model allows us to support businesses across India - including major metropolitan centers and regional markets - with direct access to our core specialists without overhead costs. We are just one call or message away from our clients.",
        ],
        relatedLink: {
          text: "View all supported markets on our Locations hub",
          href: "/locations/",
        },
      },
      {
        id: "physical-office-inquiry",
        question: "Do you have local offices or branches in Delhi, Mumbai, Bengaluru, or other cities?",
        answer: [
          "No. Spot My Business operates from a single verified headquarters in Kolkata, West Bengal. We do not have physical branches, sales offices, or walk-in studios in other cities.",
          "Our verified Google Business Profile service areas reflect the geographic regions where we actively deliver digital services to clients. We are fully transparent about our remote operating model so clients know exactly who is managing their work.",
        ],
        relatedLink: {
          text: "Learn more about our company background",
          href: "/about/",
        },
      },
      {
        id: "communication-channels",
        question: "What channels do you use for ongoing communication and project updates?",
        answer: [
          "We communicate directly through the channels local business owners already use everyday: direct phone calls (+91 9007960333 / +91 8597913452), WhatsApp messaging, and email (smb.spot.my.business@gmail.com).",
          "During active website builds or SEO reviews, we share structured staging links and written summaries so you can review progress and provide feedback at your convenience.",
        ],
        relatedLink: {
          text: "Contact our team directly",
          href: "/contact/",
        },
      },
    ],
  },
  {
    id: "services-scope",
    name: "Services & Scope",
    description: "Understand what our digital presence, SEO, Google Business Profile, and website services cover.",
    items: [
      {
        id: "core-service-offerings",
        question: "What services does Spot My Business provide?",
        answer: [
          "We provide a cohesive suite of digital presence services designed specifically for local businesses. Our core areas include:",
          "1. Website Development: Custom, responsive business websites built for clarity, mobile speed, and direct contact pathways.",
          "2. Google Business Profile Optimization: Accurate profile information, categories, photos, and attributes for Search and Maps discovery.",
          "3. Local SEO & Google Maps SEO: Structuring website signals and local citations to connect with customers searching nearby.",
          "4. Website Management & Performance: Ongoing content updates, health checks, Core Web Vitals optimization, and technical maintenance.",
          "5. Reputation Management: Thoughtful customer feedback workflows to build authentic public trust.",
          "6. Internet Marketing: Comprehensive digital presence strategies combining all of the above.",
        ],
        relatedLink: {
          text: "Explore our full services overview",
          href: "/services/",
        },
      },
      {
        id: "gbp-vs-website-seo",
        question: "What is the difference between Google Business Profile optimization and Website SEO?",
        answer: [
          "Google Business Profile (GBP) optimization focuses on your business listing within Google Search and Google Maps - managing opening hours, business categories, addresses, service areas, photos, and customer reviews.",
          "Website SEO focuses on the code, content, structure, and mobile experience of your independent business website so that search engines can understand what you offer across organic search results.",
          "Both work together: a well-optimized website reinforces your Google Business Profile, and an accurate profile directs high-intent searchers to your website.",
        ],
        relatedLink: {
          text: "Explore Google Business Profile Optimization",
          href: "/services/google-business-profile-optimization/",
        },
      },
      {
        id: "website-growth-service",
        question: "What is 'Website Growth' and how does it fit into your services?",
        answer: [
          "Website Growth is a strategic consulting area where we review an existing website's content, customer journey, and conversion pathways to identify practical improvements as the business expands.",
          "Unlike standard development packages, Website Growth focuses on strategic refinement - such as adding new service capabilities, clarifying enquiry forms, or restructuring pages around emerging customer demands.",
        ],
        relatedLink: {
          text: "Discuss your website strategy with us",
          href: "/contact/",
        },
      },
      {
        id: "reputation-management-process",
        question: "How do you help with customer reviews and reputation management?",
        answer: [
          "We help businesses establish ethical, systematic processes to invite genuine feedback from real satisfied customers.",
          "We provide guidance on professional review response workflows, handling constructive feedback gracefully, and showcasing verified customer satisfaction across your website. We do not generate fake reviews or participate in review manipulation schemes.",
        ],
        relatedLink: {
          text: "Learn about our Reputation Management approach",
          href: "/services/reputation-management/",
        },
      },
    ],
  },
  {
    id: "process-pricing",
    name: "Process, Timelines & Pricing",
    description: "How projects are initiated, structured, and customized around your specific business requirements.",
    items: [
      {
        id: "project-initiation-process",
        question: "How do we get started with Spot My Business?",
        answer: [
          "Getting started is simple and starts with a conversation. You can call us, send a WhatsApp message, or submit an inquiry through our contact form describing your business, your current online presence, and your primary goals.",
          "We review your current website, Google Business Profile, and local search visibility, then discuss practical recommendations and agree on a clear scope of work before development begins.",
        ],
        relatedLink: {
          text: "Start a conversation on our Contact page",
          href: "/contact/",
        },
      },
      {
        id: "custom-pricing-approach",
        question: "Why does Spot My Business not publish a fixed price list on the website?",
        answer: [
          "Every local business has distinct requirements: a neighborhood service provider needing a 4-page responsive website requires a different scope than a multi-service enterprise needing extensive category architecture, technical SEO, and Google Business Profile management.",
          "Rather than selling rigid packages that include unused features or cut corners on essential foundations, we quote transparently based on the exact scope agreed for your project.",
        ],
        relatedLink: {
          text: "Request a custom scope review",
          href: "/contact/",
        },
      },
      {
        id: "project-delivery-timelines",
        question: "How long does a website development or profile optimization project take?",
        answer: [
          "Timelines depend on the agreed scope, content readiness, and the complexity of the service structure. A standard business website build typically progresses through understanding, planning, development, testing, and launch over several structured weeks. For example, a website with similar scope of this website - Spot My Business you're now looking at, would take us up to 2 weeks to complete.",
          "Google Business Profile optimization audits and initial technical implementations can often be executed more quickly once verified account access is established.", 
        ],
        relatedLink: {
          text: "Explore our Website Development process",
          href: "/services/website-development/",
        },
      },
    ],
  },
  {
    id: "guarantees-expectations",
    name: "Guarantees & Expectations",
    description: "Our honest perspective on search rankings, algorithm updates, and sustainable digital presence.",
    items: [
      {
        id: "ranking-guarantee-policy",
        question: "Do you guarantee #1 rankings on Google or Google Maps?",
        answer: [
          "No. We do not guarantee specific numerical rankings, traffic volumes, lead counts, or revenue outcomes. Search engine algorithms evaluate hundreds of dynamic factors - including user proximity, search history, competitor activity, and platform updates - that no agency can honestly promise to control.",
          "What we deliver is rigorous, best-practice execution: clear site architecture, fast responsive code, accurate business data, genuine local signals, and search-friendly technical foundations that give your business the strongest possible platform to compete.",
        ],
        relatedLink: {
          text: "Read our principles on Local SEO",
          href: "/services/local-seo/",
        },
      },
      {
        id: "google-affiliation-clarification",
        question: "Is Spot My Business affiliated with or endorsed by Google?",
        answer: [
          "No. Spot My Business is an independent digital agency providing website development, SEO, and profile optimization services. We are not employed by, affiliated with, or officially endorsed by Google LLC.",
          "We manage Google Business Profiles and implement SEO strictly adhering to Google's published third-party policies, webmaster guidelines, and local search best practices.",
        ],
        relatedLink: {
          text: "Review our company values and mission",
          href: "/about/",
        },
      },
      {
        id: "doorway-page-policy",
        question: "Do you create hundreds of location landing pages to rank across every town?",
        answer: [
          "No. We strictly avoid programmatic doorway pages, scraped city lists, or repetitive thin content. Creating hundreds of identical pages with only the city name swapped violates search quality guidelines and creates a poor experience for prospective customers.",
          "We focus on genuine, high-quality representation for the areas a business truly serves, structuring clear location signals that reflect real operational reach.",
        ],
        relatedLink: {
          text: "See how we structure location-aware digital presence",
          href: "/locations/",
        },
      },
    ],
  },
];

export function getAllFAQs(): FAQItem[] {
  return faqCategories.flatMap((category) => category.items);
}

export function getFAQById(id: string): FAQItem | undefined {
  return getAllFAQs().find((item) => item.id === id);
}

