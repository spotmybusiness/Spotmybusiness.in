"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  Building2, Gauge, Globe, Map, MapPin, Search, Settings, Star,
  TrendingUp, X, ArrowUpRight,
} from "lucide-react";

interface ServiceItem {
  id: number;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  shortDesc: string;
  longDesc: string;
  features: string[];
  href?: string;
}

const servicesList: ServiceItem[] = [
  {
    id: 1,
    title: "Website Development",
    href: "/services/website-development/",
    icon: Globe,
    shortDesc: "Build a professional website that clearly represents your business and makes it easier for customers to take the next step.",
    longDesc: "We create high-quality business websites with a clear structure, useful content, and a customer-focused experience that supports your wider digital presence.",
    features: ["Business Website Planning", "Customer-Focused Page Structure", "Mobile-Responsive Design", "Clear Contact Paths"],
  },
  {
    id: 2,
    title: "Website Management",
    href: "/services/website-management/",
    icon: Settings,
    shortDesc: "Keep your website current, dependable, and aligned with the way your business operates.",
    longDesc: "We provide ongoing website management so your online information, content, and essential website elements can stay accurate and well maintained.",
    features: ["Content Updates", "Business Information Maintenance", "Website Health Checks", "Ongoing Support"],
  },
  {
    id: 3,
    title: "Website Growth",
    icon: TrendingUp,
    shortDesc: "Develop a practical website strategy that supports your business as its needs and market evolve.",
    longDesc: "We help identify meaningful improvements to your website’s content, structure, and customer journey so it can better support your broader digital goals.",
    features: ["Website Strategy", "Content Improvement Planning", "Customer Journey Review", "Growth Roadmap"],
  },
  {
    id: 4,
    title: "Website SEO",
    href: "/services/website-seo/",
    icon: Search,
    shortDesc: "Make your website easier for search engines and prospective customers to understand.",
    longDesc: "We improve the on-page foundations that support organic search visibility, including site structure, relevant content, and technical SEO essentials.",
    features: ["On-Page SEO", "Site Structure Review", "Content Optimization", "Technical SEO Foundations"],
  },
  {
    id: 5,
    title: "Website Performance",
    href: "/services/website-performance/",
    icon: Gauge,
    shortDesc: "Improve the technical experience of your website so visitors can use it with greater confidence.",
    longDesc: "We review key website performance considerations and recommend improvements that support a smoother, more reliable experience across devices.",
    features: ["Performance Review", "Mobile Experience Review", "Core Website Improvements", "Technical Recommendations"],
  },
  {
    id: 6,
    title: "Local SEO",
    href: "/services/local-seo/",
    icon: MapPin,
    shortDesc: "Strengthen your visibility for the local searches that matter to your business.",
    longDesc: "We develop a local SEO approach around your services, locations, and market so customers can find accurate, relevant information when they search online.",
    features: ["Local Search Strategy", "Location-Focused Content", "Local Presence Review", "Search Visibility Foundations"],
  },
  {
    id: 7,
    title: "Google Maps SEO",
    href: "/services/google-maps-seo/",
    icon: Map,
    shortDesc: "Help customers discover your business more clearly when they search in Google Maps.",
    longDesc: "We refine the local signals and information that support a more complete, consistent presence in Google Maps for your relevant service areas.",
    features: ["Maps Presence Review", "Location Information Optimization", "Service Area Alignment", "Local Discovery Strategy"],
  },
  {
    id: 8,
    title: "Google Business Profile Optimization",
    href: "/services/google-business-profile-optimization/",
    icon: Building2,
    shortDesc: "Make your Google Business Profile accurate, complete, and useful for prospective customers.",
    longDesc: "We optimize the information and presentation of your Google Business Profile so customers can quickly understand your business, services, and ways to get in touch.",
    features: ["Profile Information Optimization", "Service and Category Review", "Customer-Facing Updates", "Profile Completeness Review"],
  },
  {
    id: 9,
    title: "Reputation Management",
    href: "/services/reputation-management/",
    icon: Star,
    shortDesc: "Support a trustworthy online presence by making customer feedback an active part of your digital strategy.",
    longDesc: "We help you establish a thoughtful approach to reviews and customer feedback that supports trust and presents your business more clearly online.",
    features: ["Review Strategy", "Customer Feedback Guidance", "Reputation Presence Review", "Trust-Building Recommendations"],
  },
];

// Interactive 3D Tilt Card
function TiltCard({ service, onClick }: { service: ServiceItem; onClick: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation angles (-15 to 15 deg)
    const rX = ((mouseY - height / 2) / (height / 2)) * -12;
    const rY = ((mouseX - width / 2) / (width / 2)) * 12;

    card.style.setProperty("--rotate-x", `${rX}deg`);
    card.style.setProperty("--rotate-y", `${rY}deg`);
    card.style.setProperty("--tilt-transition", "none");

    // Calculate glow position as percentage
    card.style.setProperty("--glow-x", `${(mouseX / width) * 100}%`);
    card.style.setProperty("--glow-y", `${(mouseY / height) * 100}%`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rotate-x", "0deg");
    cardRef.current.style.setProperty("--rotate-y", "0deg");
    cardRef.current.style.setProperty("--tilt-transition", "transform 0.5s ease");
  };

  const IconComponent = service.icon;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: "perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))",
        transition: "var(--tilt-transition, transform 0.5s ease)",
      }}
      className="glass-card hover:border-bronze/50 cursor-pointer p-8 rounded-2xl flex flex-col justify-between h-[300px] relative group overflow-hidden border border-border-color"
    >
      {/* Interactive Radial Glow Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "radial-gradient(circle 120px at var(--glow-x, 50%) var(--glow-y, 50%), rgba(212, 163, 115, 0.15), transparent)",
        }}
      />

      <div>
        <div className="flex justify-between items-start">
          <div className="p-3 bg-secondary-bg border border-border-color rounded-xl flex items-center justify-center text-light-bronze group-hover:text-champagne transition-colors duration-300">
            <IconComponent className="w-7 h-7" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-gray-text/40 group-hover:text-light-bronze transition-colors duration-300" />
        </div>

        <h3 className="text-xl font-heading font-bold text-heading mt-6 group-hover:text-white transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-text text-sm mt-3 leading-relaxed">
          {service.shortDesc}
        </p>
      </div>

      {service.href ? (
        <a
          href={service.href}
          onClick={(event) => event.stopPropagation()}
          className="relative z-10 w-fit text-[10px] tracking-[0.2em] font-heading font-bold text-light-bronze uppercase mt-4 hover:text-champagne transition-colors duration-300"
          aria-label={`View ${service.title} service page`}
        >
        View Service →
        </a>
      ) : (
        <div className="text-[10px] tracking-[0.2em] font-heading font-bold text-light-bronze uppercase mt-4">
          Explore Details
        </div>
      )}
    </div>
  );
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current !== null) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const openService = (service: ServiceItem) => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setSelectedService(service);
    window.requestAnimationFrame(() => setIsModalVisible(true));
  };

  const closeService = () => {
    setIsModalVisible(false);
    const timer = window.setTimeout(() => {
      setSelectedService(null);
      closeTimerRef.current = null;
    }, 200);
    closeTimerRef.current = timer;
  };

  return (
    <section id="services" className="py-24 md:py-32 relative overflow-hidden bg-primary-bg">
      {/* Background radial highlight */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-bronze/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24 space-y-4">
          <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
            WHAT WE DO
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading">
            DIGITAL PRESENCE, BUILT AROUND YOUR BUSINESS
          </h2>
          <p className="text-gray-text text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From your website to Google Search, Google Maps, and customer trust, our services work together to help people find and understand your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service) => (
            <TiltCard
              key={service.id}
              service={service}
              onClick={() => openService(service)}
            />
          ))}
        </div>
      </div>

      {/* Expandable Detail Modal Overlay */}
      {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Modal Backdrop */}
            <div
              onClick={closeService}
              className={`absolute inset-0 bg-primary-bg/85 backdrop-blur-md transition-opacity duration-200 ease-out ${
                isModalVisible ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Modal Box */}
            <div
              className={`glass-panel w-full max-w-2xl rounded-2xl border border-border-color p-8 md:p-10 relative z-10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-[opacity,transform] duration-200 ease-out ${
                isModalVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-5 scale-90 opacity-0"
              }`}
            >
              {/* Decorative Accent Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-bronze/10 blur-[50px] pointer-events-none" />

              <button
                onClick={closeService}
                className="absolute top-6 right-6 p-2 rounded-full border border-border-color bg-secondary-bg hover:border-bronze/50 hover:text-white text-gray-text transition-colors duration-200"
                aria-label="Close details"
              >
                <X size={16} />
              </button>

              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-secondary-bg border border-border-color rounded-2xl text-light-bronze">
                  {React.createElement(selectedService.icon, { className: "w-8 h-8" })}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-heading">
                    {selectedService.title}
                  </h3>
                  <span className="text-[10px] tracking-[0.25em] text-light-bronze uppercase font-bold mt-1 block">
                    Service Overview
                  </span>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-heading font-bold">
                    Overview
                  </h4>
                  <p className="text-gray-text text-sm mt-2.5 leading-relaxed">
                    {selectedService.longDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-[0.2em] text-heading font-bold">
                    What This Service Covers
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    {selectedService.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-gray-text">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border-color/60 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-gray-text/60">
                  Ready to strengthen your digital presence?
                </span>
                {selectedService.href ? (
                  <a
                    href={selectedService.href}
                    className="w-full sm:w-auto px-6 py-3 text-center rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-[0.2em] uppercase font-bold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
                  >
                    View Service Page
                  </a>
                ) : (
                  <a
                    href="#contact"
                    onClick={closeService}
                    className="w-full sm:w-auto px-6 py-3 text-center rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-[0.2em] uppercase font-bold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300"
                  >
                    Talk to Us
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
    </section>
  );
}
