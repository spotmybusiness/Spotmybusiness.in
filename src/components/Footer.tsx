import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { getServicesByCluster } from "@/lib/services";
import { socialLinks } from "@/lib/business";

const webAndAIServices = [
  ...getServicesByCluster("web-engineering"),
  ...getServicesByCluster("ai-search"),
];

const searchAndGovernanceServices = [
  ...getServicesByCluster("search-local"),
  ...getServicesByCluster("governance-management"),
];

export default function Footer() {
  return (
    <footer className="bg-primary-bg relative z-10 border-t border-border-color">
      {/* Premium top accent border line in bronze gradient */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-bronze/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-3 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-md">
                <Image
                  src="/assets/logo.png"
                  alt="Spot My Business Logo"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold tracking-[0.15em] text-heading text-[16px] leading-none">
                  SPOT MY BUSINESS
                </span>
                <span className="text-[8px] tracking-[0.3em] text-light-bronze uppercase font-semibold mt-1">
                  GLOBAL SEO PARTNER
                </span>
              </div>
            </div>
            <p className="text-gray-text text-xs md:text-sm max-w-sm leading-relaxed">
              Spot My Business helps local businesses strengthen their presence across their website, Google Search, Google Maps, and customer feedback.
            </p>
            <div className="flex gap-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="me noopener noreferrer"
                className="p-2.5 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors flex items-center justify-center"
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
                className="p-2.5 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors flex items-center justify-center"
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
                className="p-2.5 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="Follow Spot My Business on X"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Web & AI Services */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-heading font-bold">
              Web & AI Search
            </p>
            <ul className="space-y-2.5 text-xs text-gray-text font-medium">
              {webAndAIServices.map((service) => (
                <li key={service.id}>
                  <Link href={service.href!} className="hover:text-light-bronze transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Search & Governance Services */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-heading font-bold">
              Search & Governance
            </p>
            <ul className="space-y-2.5 text-xs text-gray-text font-medium">
              {searchAndGovernanceServices.map((service) => (
                <li key={service.id}>
                  <Link href={service.href!} className="hover:text-light-bronze transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Explore */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-heading font-bold">
              Company
            </p>
            <ul className="space-y-2.5 text-xs text-gray-text font-medium">
              <li><Link href="/industries" className="hover:text-light-bronze transition-colors">Industries</Link></li>
              <li><Link href="/locations" className="hover:text-light-bronze transition-colors">Locations</Link></li>
              <li><Link href="/case-studies" className="hover:text-light-bronze transition-colors">Case Studies</Link></li>
              <li><Link href="/about" className="hover:text-light-bronze transition-colors">About</Link></li>
              <li><Link href="/faq" className="hover:text-light-bronze transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-light-bronze transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div className="md:col-span-3 space-y-4">
            <p className="text-xs uppercase tracking-[0.18em] text-heading font-bold">
              Find Us
            </p>

            <div className="overflow-hidden rounded-xl border border-border-color">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.222150801929!2d88.3806334!3d22.4958468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027174483eab37%3A0xdff839b9e9c6b474!2sSpot%20My%20Business!5e0!3m2!1sen!2sin!4v1785688925625!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Spot My Business Location"
                className="w-full"
              />
            </div>

            <div className="space-y-2 text-xs text-gray-text leading-relaxed font-medium">
              <p>Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075</p>
              <p>Phone: <a href="tel:+919007960333" className="hover:text-light-bronze transition-colors">+91 9007960333</a> / <a href="tel:+918597913452" className="hover:text-light-bronze transition-colors">+91 8597913452</a></p>
              <p>Email: <a href="mailto:smb.spot.my.business@gmail.com" className="hover:text-light-bronze transition-colors">smb.spot.my.business@gmail.com</a></p>
              <p>Hours: <span className="text-heading font-medium">Mon – Sun: Open 24 Hours</span></p>
              <p><a href="https://wa.me/919007960333" target="_blank" rel="noopener noreferrer" className="hover:text-light-bronze transition-colors">WhatsApp</a></p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border-color/40 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-text/50 uppercase tracking-widest font-semibold">
          <p>© 2026 SPOT MY BUSINESS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <a
            href="#"
            className="p-3 rounded-xl border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors flex items-center justify-center"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </a>
        </div>

      </div>
    </footer>
  );
}
