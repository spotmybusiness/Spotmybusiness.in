export interface BusinessHoursEntry {
  day: string;
  schemaDay: string;
  hours: string;
  opens: string;
  closes: string;
}

export const businessHours: BusinessHoursEntry[] = [
  { day: "Monday", schemaDay: "Monday", hours: "Open 24 hours", opens: "00:00", closes: "23:59" },
  { day: "Tuesday", schemaDay: "Tuesday", hours: "Open 24 hours", opens: "00:00", closes: "23:59" },
  { day: "Wednesday", schemaDay: "Wednesday", hours: "Open 24 hours", opens: "00:00", closes: "23:59" },
  { day: "Thursday", schemaDay: "Thursday", hours: "Open 24 hours", opens: "00:00", closes: "23:59" },
  { day: "Friday", schemaDay: "Friday", hours: "Open 24 hours", opens: "00:00", closes: "23:59" },
  { day: "Saturday", schemaDay: "Saturday", hours: "Open 24 hours", opens: "00:00", closes: "23:59" },
  { day: "Sunday", schemaDay: "Sunday", hours: "Open 24 hours", opens: "00:00", closes: "23:59" },
];

export const socialLinks = {
  instagram: "https://www.instagram.com/spotmybusiness.in/",
  linkedin: "https://www.linkedin.com/company/spot-my-business/",
  x: "https://x.com/spotmybusinesss",
};

export const businessInfo = {
  name: "Spot My Business",
  alternateName: "SMB",
  legalName: "Spot My Business",
  primaryCategory: "Internet Marketing Service",
  description:
    "Spot My Business is an internet marketing service in Kolkata helping businesses grow with Google Business Profile, Google Maps, Local SEO, and website solutions.",
  url: "https://www.spotmybusiness.in",
  logo: "https://www.spotmybusiness.in/assets/logo.png",
  image: "https://www.spotmybusiness.in/assets/logo.png",
  telephones: ["+91 9007960333", "+91 8597913452"],
  primaryPhone: "+91 9007960333",
  secondaryPhone: "+91 8597913452",
  email: "smb.spot.my.business@gmail.com",
  whatsappUrl: "https://wa.me/919007960333",
  address: {
    streetAddress: "Middle Rd, Sen Para, Santoshpur",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    postalCode: "700075",
    addressCountry: "IN",
  },
  geo: {
    latitude: 22.49583535142233,
    longitude: 88.3806285747356,
  },
  areaServed: [
    { name: "Kolkata", type: "City" },
    { name: "West Bengal", type: "State" },
    { name: "India", type: "Country" },
  ],
  sameAs: [
    "https://www.instagram.com/spotmybusiness.in/",
    "https://www.linkedin.com/company/spot-my-business/",
    "https://x.com/spotmybusinesss",
  ],
  priceRange: "$$",
  hoursDescription: "Monday to Sunday: Open 24 hours",
};

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    alternateName: businessInfo.alternateName,
    legalName: businessInfo.legalName,
    description: businessInfo.description,
    url: businessInfo.url,
    logo: businessInfo.logo,
    image: businessInfo.image,
    telephone: businessInfo.telephones,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHoursSpecification: businessHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.schemaDay,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: businessInfo.areaServed.map((area) => ({
      "@type": area.type,
      name: area.name,
    })),
    sameAs: businessInfo.sameAs,
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${businessInfo.url}/#organization`,
    name: businessInfo.name,
    alternateName: businessInfo.alternateName,
    legalName: businessInfo.legalName,
    url: businessInfo.url,
    logo: businessInfo.logo,
    email: businessInfo.email,
    telephone: businessInfo.telephones,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.address.streetAddress,
      addressLocality: businessInfo.address.addressLocality,
      addressRegion: businessInfo.address.addressRegion,
      postalCode: businessInfo.address.postalCode,
      addressCountry: businessInfo.address.addressCountry,
    },
    sameAs: businessInfo.sameAs,
  };
}
