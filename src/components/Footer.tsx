import Image from "next/image";
import { ArrowUp } from "lucide-react";

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
                href="https://www.linkedin.com/company/spot-my-business/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="LinkedIn Link"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/spotmybusiness.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border-color bg-secondary-bg text-gray-text hover:text-white hover:border-bronze/50 transition-colors flex items-center justify-center"
                aria-label="Instagram Link"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 12 16.5 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17.25 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-heading font-bold">
              Services
            </p>
            <ul className="space-y-2.5 text-xs text-gray-text font-medium">
              <li><a href="/services/internet-marketing/" className="hover:text-light-bronze transition-colors">Internet Marketing</a></li>
              <li><a href="/services/google-business-profile-optimization/" className="hover:text-light-bronze transition-colors">Google Business Profile Optimization</a></li>
              <li><a href="/services/google-maps-seo/" className="hover:text-light-bronze transition-colors">Google Maps SEO</a></li>
              <li><a href="/services/local-seo/" className="hover:text-light-bronze transition-colors">Local SEO</a></li>
              <li><a href="/services/reputation-management/" className="hover:text-light-bronze transition-colors">Reputation Management</a></li>
              <li><a href="/services/website-development/" className="hover:text-light-bronze transition-colors">Website Development</a></li>
              <li><a href="/services/website-management/" className="hover:text-light-bronze transition-colors">Website Management</a></li>
              <li><a href="/services/website-seo/" className="hover:text-light-bronze transition-colors">Website SEO</a></li>
              <li><a href="/services/website-performance/" className="hover:text-light-bronze transition-colors">Website Performance</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-heading font-bold">Explore</p>
            <ul className="space-y-2.5 text-xs text-gray-text font-medium">
              <li><a href="/industries/" className="hover:text-light-bronze transition-colors">Industries</a></li>
              <li><a href="/locations/" className="hover:text-light-bronze transition-colors">Locations</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-heading font-bold">Company</p>
            <ul className="space-y-2.5 text-xs text-gray-text font-medium">
              <li><a href="/case-studies/" className="hover:text-light-bronze transition-colors">Case Studies</a></li>
              <li><a href="/about/" className="hover:text-light-bronze transition-colors">About</a></li>
              <li><a href="/faq/" className="hover:text-light-bronze transition-colors">FAQ</a></li>
              <li><a href="/contact/" className="hover:text-light-bronze transition-colors">Contact</a></li>
              <li><a href="/privacy-policy/" className="hover:text-light-bronze transition-colors">Privacy Policy</a></li>
              <li><a href="/terms/" className="hover:text-light-bronze transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Contact & Map */}
<div className="md:col-span-3 space-y-4">
  <p className="text-xs uppercase tracking-[0.2em] text-heading font-bold">
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
            <a href="/privacy-policy/" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms/" className="hover:text-white transition-colors">Terms of Service</a>
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
