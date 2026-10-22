"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { getNavigationClusters } from "@/lib/services";
import { socialLinks } from "@/lib/business";

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
          <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-5 lg:gap-6 xl:gap-8">
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
                className="invisible absolute left-0 top-full z-50 mt-3 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 w-[640px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border-color bg-primary-bg/95 backdrop-blur-2xl p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
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

            {/* Social Links (Desktop Header) */}
            <div className="hidden xl:flex items-center gap-1.5 pl-2 border-l border-border-color/60">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="me noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border-color bg-secondary-bg/80 text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="Follow Spot My Business on Instagram"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border-color bg-secondary-bg/80 text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="Follow Spot My Business on LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={socialLinks.x}
                target="_blank"
                rel="me noopener noreferrer"
                className="w-8 h-8 rounded-full border border-border-color bg-secondary-bg/80 text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="Follow Spot My Business on X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

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

          {/* Mobile Drawer Social Links */}
          <div className="flex flex-col items-center gap-3 pt-3 border-t border-border-color/50 w-full">
            <span className="text-[10px] tracking-[0.25em] uppercase text-gray-text/60 font-semibold">
              Follow Us
            </span>
            <div className="flex items-center justify-center gap-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="me noopener noreferrer"
                onClick={handleRouteClick}
                className="w-9 h-9 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="Follow Spot My Business on Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="me noopener noreferrer"
                onClick={handleRouteClick}
                className="w-9 h-9 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="Follow Spot My Business on LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={socialLinks.x}
                target="_blank"
                rel="me noopener noreferrer"
                onClick={handleRouteClick}
                className="w-9 h-9 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-light-bronze hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="Follow Spot My Business on X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
