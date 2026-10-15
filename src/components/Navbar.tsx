"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { getNavigationClusters } from "@/lib/services";

const navigationClusters = getNavigationClusters();

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const isScrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const nextIsScrolled = window.scrollY > 50;
      if (isScrolledRef.current === nextIsScrolled) return;

      isScrolledRef.current = nextIsScrolled;
      setIsScrolled(nextIsScrolled);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key for accessible menu closing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleRouteClick = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-primary-bg/85 backdrop-blur-xl border-b border-border-color/50 py-3"
            : "bg-primary-bg/50 backdrop-blur-md py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <div className="relative z-50 shrink-0 md:mr-8 lg:mr-12">
            <Link
              href="/"
              onClick={handleRouteClick}
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105 shadow-md shrink-0">
                <Image
                  src="/assets/logo.png"
                  alt="Spot My Business Logo"
                  width={44}
                  height={44}
                  className="h-10 w-10 md:h-11 md:w-11 object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold tracking-[0.15em] text-heading text-[15px] md:text-[17px] leading-none">
                  SPOT MY BUSINESS
                </span>
                <span className="text-[8px] md:text-[8.5px] tracking-[0.35em] text-light-bronze uppercase font-semibold mt-1">
                  GLOBAL SEO PARTNER
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-7">
            <Link
              href="/"
              className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300"
            >
              Home
            </Link>

            {/* Categorized Services Mega-Menu Dropdown */}
            <div className="group relative">
              <Link
                href="/services"
                className="flex items-center gap-1.5 text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300 py-1"
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-text/60 group-hover:text-light-bronze group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              <div
                id="desktop-services-menu"
                role="region"
                aria-label="Services Directory"
                className="invisible absolute left-0 md:-left-28 lg:left-1/2 lg:-translate-x-1/2 top-full z-50 mt-3 w-[640px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border-color bg-primary-bg/95 backdrop-blur-2xl p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
              >
                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {navigationClusters.map(({ cluster, services }) => (
                    <div key={cluster.id} className="space-y-2.5">
                      <div className="border-b border-border-color/50 pb-1.5">
                        <span className="text-[10px] font-heading font-bold uppercase tracking-[0.18em] text-light-bronze">
                          {cluster.name}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {services.map((service) => (
                          <li key={service.id}>
                            <Link
                              href={service.href!}
                              onClick={handleRouteClick}
                              className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-text hover:bg-secondary-bg hover:text-white transition-colors"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Bottom Bar: Quick link to all services */}
                <div className="mt-6 pt-3.5 border-t border-border-color/50 flex items-center justify-between text-xs">
                  <span className="text-gray-text/60 text-[11px]">
                    11 integrated services across 4 disciplines
                  </span>
                  <Link
                    href="/services"
                    onClick={handleRouteClick}
                    className="font-heading font-bold uppercase text-[10px] tracking-[0.2em] text-light-bronze hover:text-champagne transition-colors"
                  >
                    View All Services Hub →
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/industries"
              className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300"
            >
              Industries
            </Link>
            <Link href="/locations" className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300">
              Locations
            </Link>
            <Link href="/case-studies" className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300">
              Case Studies
            </Link>
            <Link href="/about" className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300">
              About
            </Link>
            <Link href="/faq" className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300">
              FAQ
            </Link>
            <Link href="/contact" className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300">
              Contact
            </Link>

            {/* Theme Switcher */}
            <ThemeSwitcher />

            <a
              href="tel:+919007960333"
              className="relative overflow-hidden group px-6 py-2.5 rounded-full border border-bronze/50 text-xs tracking-[0.15em] uppercase font-semibold text-heading hover:border-light-bronze/80 transition-all duration-300 shadow-md"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-bronze to-light-bronze opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
              Call Now
            </a>
            <a
              href="https://wa.me/919007960333"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase font-semibold text-light-bronze hover:text-heading transition-colors duration-300"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile: Theme Switcher + Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2.5 relative z-50">
            <ThemeSwitcher />
            
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="w-11 h-11 rounded-xl border border-border-color bg-secondary-bg/80 active:bg-secondary-bg active:scale-95 flex items-center justify-center text-gray-text hover:text-heading focus:outline-none transition-all duration-200 cursor-pointer touch-manipulation select-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-light-bronze transition-transform duration-200" />
              ) : (
                <Menu className="w-5 h-5 text-heading transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>

        {/* Premium Bronze Gradient Divider */}
        <div className="navbar-divider" />
      </header>

      {/* =======================================================
          MOBILE DRAWER NAVIGATION (Accessible, Scrollable, High Z-Index)
          ======================================================= */}
      <div
        className={`fixed inset-0 z-40 bg-primary-bg/98 backdrop-blur-2xl flex flex-col justify-start items-center pt-24 pb-12 px-6 overflow-y-auto transition-all duration-400 ease-out md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-6 pointer-events-none invisible"
        }`}
        style={{ minHeight: "100dvh" }}
      >
        {/* Background glow accent */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-bronze/10 blur-[90px] pointer-events-none" />

        <div className="w-full max-w-sm flex flex-col items-center gap-5 my-auto py-4 relative z-10">
          
          <Link
            href="/"
            onClick={handleRouteClick}
            className="w-full text-center py-2.5 text-base tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-light-bronze active:text-champagne transition-colors"
          >
            Home
          </Link>

          {/* Categorized Mobile Services Accordion */}
          <div className="w-full flex flex-col">
            <button
              type="button"
              onClick={() => setIsServicesOpen((prev) => !prev)}
              aria-expanded={isServicesOpen}
              aria-controls="mobile-services-menu"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-base tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-light-bronze transition-colors cursor-pointer"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 text-light-bronze transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isServicesOpen && (
              <div
                id="mobile-services-menu"
                className="w-full my-2 py-3 px-3.5 rounded-2xl bg-secondary-bg/90 border border-border-color/60 flex flex-col gap-4 text-xs font-medium animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <Link
                  href="/services"
                  onClick={handleRouteClick}
                  className="w-full py-2 px-3 text-center rounded-xl bg-primary-bg/70 border border-border-color text-light-bronze font-heading font-bold uppercase tracking-[0.15em] text-[11px] hover:text-champagne transition-colors"
                >
                  All Services Overview →
                </Link>

                {navigationClusters.map(({ cluster, services }) => (
                  <div key={cluster.id} className="space-y-1.5 text-left">
                    <p className="text-[10px] uppercase font-heading font-bold tracking-[0.18em] text-light-bronze/90 px-2 py-0.5 border-b border-border-color/40">
                      {cluster.name}
                    </p>
                    <div className="flex flex-col gap-0.5 pt-0.5">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          href={service.href!}
                          onClick={handleRouteClick}
                          className="py-1.5 px-2 rounded-lg text-gray-text hover:text-white hover:bg-primary-bg/50 transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/industries"
            onClick={handleRouteClick}
            className="w-full text-center py-2.5 text-base tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-light-bronze active:text-champagne transition-colors"
          >
            Industries
          </Link>

          <Link
            href="/locations"
            onClick={handleRouteClick}
            className="w-full text-center py-2.5 text-base tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-light-bronze active:text-champagne transition-colors"
          >
            Locations
          </Link>

          <Link
            href="/case-studies"
            onClick={handleRouteClick}
            className="w-full text-center py-2.5 text-base tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-light-bronze active:text-champagne transition-colors"
          >
            Case Studies
          </Link>

          <Link
            href="/about"
            onClick={handleRouteClick}
            className="w-full text-center py-2.5 text-base tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-light-bronze active:text-champagne transition-colors"
          >
            About
          </Link>

          <Link
            href="/faq"
            onClick={handleRouteClick}
            className="w-full text-center py-2.5 text-base tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-light-bronze active:text-champagne transition-colors"
          >
            FAQ
          </Link>

          <div className="w-full border-t border-border-color/50 my-2" />

          <Link
            href="/contact"
            onClick={handleRouteClick}
            className="w-full py-3.5 rounded-full bg-gradient-to-r from-bronze to-light-bronze text-center text-xs tracking-[0.2em] uppercase font-bold text-white shadow-lg shadow-bronze/20 transition-all duration-300 active:scale-98"
          >
            Contact
          </Link>

          <div className="flex items-center justify-center gap-6 pt-2 text-xs tracking-[0.15em] uppercase font-semibold">
            <a
              href="tel:+919007960333"
              onClick={handleRouteClick}
              className="text-light-bronze hover:text-heading transition-colors"
            >
              Call Now
            </a>
            <span className="text-gray-text/30">•</span>
            <a
              href="https://wa.me/919007960333"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleRouteClick}
              className="text-light-bronze hover:text-heading transition-colors"
            >
              WhatsApp
            </a>
          </div>

        </div>
      </div>
    </>
  );
}
