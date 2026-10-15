import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import "./globals.css";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import FloatingContactActions from "@/components/FloatingContactActions";
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

import { getLocalBusinessSchema } from "@/lib/business";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spotmybusiness.in"),

  alternates: {
    canonical: "https://www.spotmybusiness.in/",
  },

  title: "Spot My Business | Internet Marketing Service in Kolkata",

  description:
    "Spot My Business is an internet marketing service in Kolkata helping businesses grow with Google Business Profile, Google Maps, Local SEO and website solutions.",

  keywords: [
    "Internet Marketing Service",
    "Internet Marketing Service in Kolkata",
    "Spot My Business",
    "Local SEO Kolkata",
    "Google Business Profile Optimization",
    "Google Maps SEO",
    "Reputation Management",
    "Website Development Kolkata",
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
    title: "Spot My Business | Internet Marketing Service in Kolkata",

    description:
      "Spot My Business is an internet marketing service in Kolkata helping businesses grow with Google Business Profile, Google Maps, Local SEO and website solutions.",

    url: "https://www.spotmybusiness.in",

    siteName: "Spot My Business",

    images: [
      {
        url: "/assets/logo.png",
        width: 512,
        height: 512,
        alt: "Spot My Business Logo",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@spotmybusinesss",
    creator: "@spotmybusinesss",

    title: "Spot My Business | Internet Marketing Service in Kolkata",

    description:
      "Spot My Business is an internet marketing service in Kolkata helping businesses grow with Google Business Profile, Google Maps, Local SEO and website solutions.",

    images: ["/assets/logo.png"],
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
  const jsonLd = getLocalBusinessSchema();

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
          <FloatingContactActions />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
