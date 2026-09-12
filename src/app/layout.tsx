import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spotmybusiness.in"),

  alternates: {
    canonical: "https://spotmybusiness.in/",
  },

  title: "Local SEO, Google Maps & Website Services | Spot My Business",

  description:
    "Spot My Business strengthens local visibility with Google Business Profile optimization, Google Maps and Local SEO, reputation management, and website development, management, SEO, and performance.",

  keywords: [
    "Google Business Profile Optimization",
    "Local SEO",
    "Google Maps SEO",
    "Reputation Management",
    "Website Development",
    "Website Management",
    "Website SEO",
    "Website Performance",
  ],

  authors: [
    {
      name: "Spot My Business",
    },
  ],

  openGraph: {
    title: "Local SEO, Google Maps & Website Services | Spot My Business",

    description:
      "Spot My Business strengthens local visibility with Google Business Profile optimization, Google Maps and Local SEO, reputation management, and website services.",

    url: "https://spotmybusiness.in",

    siteName: "Spot My Business",

    images: [
      {
        url: "/assets/logo.jpg",
        width: 512,
        height: 512,
        alt: "Spot My Business Logo",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Local SEO, Google Maps & Website Services | Spot My Business",

    description:
      "Spot My Business strengthens local visibility with Google Business Profile optimization, Google Maps and Local SEO, reputation management, and website services.",

    images: ["/assets/logo.jpg"],
  },
};

// Prevent flash of the wrong theme before React loads
const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('smb-theme');
    var theme = saved || 'system';
    var resolved = theme;

    if (theme === 'system') {
      resolved = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    document.documentElement.setAttribute('data-theme', resolved);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: "Spot My Business",
    url: "https://spotmybusiness.in",

    telephone: ["+91 8597913452", "+91 9007960333"],

    address: {
      "@type": "PostalAddress",

      streetAddress: "Middle Rd, Sen Para, Santoshpur",

      addressLocality: "Kolkata",

      addressRegion: "West Bengal",

      postalCode: "700075",

      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",

      latitude: 22.49583535142233,

      longitude: 88.3806285747356,
    },

    openingHours: "Mo-Su 00:00-23:59",

    sameAs: [
      "https://www.linkedin.com/company/spot-my-business/",
      "https://www.instagram.com/spotmybusiness.in/",
    ],
  };

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent theme flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />

        {/* Local Business Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className="min-h-full bg-primary-bg font-body text-white-text selection:bg-bronze selection:text-white-text">

       


        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
