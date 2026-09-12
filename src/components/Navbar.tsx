"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const handleRouteClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-primary-bg/80 backdrop-blur-xl border-b border-border-color/50 py-3"
            : "bg-primary-bg/40 backdrop-blur-md py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo with slight overlap/glow */}
          <div className="relative z-50">
            <a
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-11 h-11 rounded-full overflow-hidden border border-border-color bg-secondary-bg transition-transform duration-500 group-hover:scale-105 group-hover:border-bronze">
                <Image
  src="/assets/logo.jpg"
  alt="Spot My Business Logo"
  width={44}
  height={44}
  className="h-11 w-11 object-cover"
  priority
/>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold tracking-[0.15em] text-heading text-[16px] md:text-[17px] leading-none">
                  SPOT MY BUSINESS
                </span>
                <span className="text-[8px] tracking-[0.35em] text-light-bronze uppercase font-medium mt-1">
                  Local SEO & GBP Experts
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300"
            >
              Home
            </a>
            <div className="group relative">
              <a
                href="/services/"
                className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300"
              >
                Services
              </a>
              <div className="invisible absolute left-1/2 top-full z-50 mt-3 w-72 -translate-x-1/2 rounded-xl border border-border-color bg-primary-bg p-3 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="flex flex-col gap-1">
                  <a href="/services/google-business-profile-optimization/" className="rounded-lg px-3 py-2 text-xs text-gray-text hover:bg-secondary-bg hover:text-light-bronze">Google Business Profile Optimization</a>
                  <a href="/services/google-maps-seo/" className="rounded-lg px-3 py-2 text-xs text-gray-text hover:bg-secondary-bg hover:text-light-bronze">Google Maps SEO</a>
                  <a href="/services/local-seo/" className="rounded-lg px-3 py-2 text-xs text-gray-text hover:bg-secondary-bg hover:text-light-bronze">Local SEO</a>
                  <a href="/services/reputation-management/" className="rounded-lg px-3 py-2 text-xs text-gray-text hover:bg-secondary-bg hover:text-light-bronze">Reputation Management</a>
                  <a href="/services/website-development/" className="rounded-lg px-3 py-2 text-xs text-gray-text hover:bg-secondary-bg hover:text-light-bronze">Website Development</a>
                  <a href="/services/website-management/" className="rounded-lg px-3 py-2 text-xs text-gray-text hover:bg-secondary-bg hover:text-light-bronze">Website Management</a>
                  <a href="/services/website-seo/" className="rounded-lg px-3 py-2 text-xs text-gray-text hover:bg-secondary-bg hover:text-light-bronze">Website SEO</a>
                  <a href="/services/website-performance/" className="rounded-lg px-3 py-2 text-xs text-gray-text hover:bg-secondary-bg hover:text-light-bronze">Website Performance</a>
                </div>
              </div>
            </div>
            <a
              href="/industries/"
              className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300"
            >
              Industries
            </a>
            <a href="/locations/" className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300">
              Locations
            </a>
            <a href="/case-studies/" className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300">
              Case Studies
            </a>
            <a href="/about/" className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300">
              About
            </a>
            <a href="/contact/" className="text-xs tracking-[0.2em] uppercase font-medium text-gray-text hover:text-light-bronze transition-colors duration-300">
              Contact
            </a>

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

          {/* Mobile: Theme Switcher + Menu button */}
          <div className="md:hidden flex items-center gap-3 z-50">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-text hover:text-heading focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Premium Bronze Gradient Divider */}
        <div className="navbar-divider" />
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-30 bg-primary-bg/98 backdrop-blur-xl flex flex-col justify-center items-center gap-8 px-6 transition-[transform,opacity,visibility] duration-500 ease-out ${
          isMobileMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-full opacity-0 pointer-events-none"
        }`}
      >
            <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-bronze/5 blur-[70px]"></div>
            <a
              href="/"
              onClick={handleRouteClick}
              className="text-lg tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-heading transition-colors"
            >
              Home
            </a>
            <details className="text-center text-lg tracking-[0.2em] uppercase font-semibold text-gray-text">
              <summary className="cursor-pointer list-none hover:text-heading transition-colors">Services</summary>
              <div className="mt-4 flex flex-col gap-3 text-sm normal-case tracking-normal font-medium">
                <a href="/services/google-business-profile-optimization/" onClick={handleRouteClick} className="hover:text-heading">Google Business Profile Optimization</a>
                <a href="/services/google-maps-seo/" onClick={handleRouteClick} className="hover:text-heading">Google Maps SEO</a>
                <a href="/services/local-seo/" onClick={handleRouteClick} className="hover:text-heading">Local SEO</a>
                <a href="/services/reputation-management/" onClick={handleRouteClick} className="hover:text-heading">Reputation Management</a>
                <a href="/services/website-development/" onClick={handleRouteClick} className="hover:text-heading">Website Development</a>
                <a href="/services/website-management/" onClick={handleRouteClick} className="hover:text-heading">Website Management</a>
                <a href="/services/website-seo/" onClick={handleRouteClick} className="hover:text-heading">Website SEO</a>
                <a href="/services/website-performance/" onClick={handleRouteClick} className="hover:text-heading">Website Performance</a>
              </div>
            </details>
            <a href="/industries/" onClick={handleRouteClick} className="text-lg tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-heading transition-colors">Industries</a>
            <a href="/locations/" onClick={handleRouteClick} className="text-lg tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-heading transition-colors">Locations</a>
            <a href="/case-studies/" onClick={handleRouteClick} className="text-lg tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-heading transition-colors">Case Studies</a>
            <a href="/about/" onClick={handleRouteClick} className="text-lg tracking-[0.2em] uppercase font-semibold text-gray-text hover:text-heading transition-colors">About</a>
            <a
              href="/contact/"
              onClick={handleRouteClick}
              className="px-8 py-3 rounded-full border border-bronze text-sm tracking-[0.15em] uppercase font-semibold text-heading hover:bg-bronze hover:text-white transition-all duration-300"
            >
              Contact
            </a>
            <div className="flex items-center gap-5 text-sm tracking-[0.15em] uppercase font-semibold">
              <a href="tel:+919007960333" className="text-light-bronze hover:text-heading transition-colors">Call Now</a>
              <a href="https://wa.me/919007960333" target="_blank" rel="noopener noreferrer" className="text-light-bronze hover:text-heading transition-colors">WhatsApp</a>
            </div>
      </div>
    </>
  );
}
