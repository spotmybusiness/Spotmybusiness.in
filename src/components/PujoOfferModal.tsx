"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  X,
  Sparkles,
  Phone,
  Gift,
  CheckCircle2,
  Clock,
  ArrowRight,
  Flame,
} from "lucide-react";

export default function PujoOfferModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  // WhatsApp configuration
  const whatsappNumber = "919007960333";
  const preWrittenMessage =
    "Hello Spot My Business! 🪔\n\nI want to redeem the Durga Puja Special Offer (Flat 50% OFF at ₹4,500 + 1 Week Free Trial) for my business.\n\nPlease share details on how to get started with GEO, SEO & Google Business Profile optimization!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    preWrittenMessage
  )}`;
  const phoneUrl = "tel:+919007960333";

  // Trigger popup when page opens or refreshes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      // Gentle festive confetti on popup appearance
      if (typeof window !== "undefined") {
        import("canvas-confetti")
          .then((module) => {
            const confetti = module.default;
            confetti({
              particleCount: 40,
              spread: 60,
              origin: { y: 0.5 },
              colors: ["#D4A373", "#8B5E3C", "#E7D3B0", "#DC2626", "#F59E0B"],
              disableForReducedMotion: true,
            });
          })
          .catch(() => {});
      }
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setHasInteracted(true);
  }, []);

  const handleRedeemClick = () => {
    // Joyful celebration confetti when user clicks Redeem Now
    if (typeof window !== "undefined") {
      import("canvas-confetti")
        .then((module) => {
          const confetti = module.default;
          confetti({
            particleCount: 75,
            spread: 80,
            origin: { y: 0.6 },
            colors: ["#25D366", "#D4A373", "#E7D3B0", "#DC2626", "#F59E0B"],
            disableForReducedMotion: true,
          });
        })
        .catch(() => {});
    }
  };

  return (
    <>
      {/* Floating Re-open Button (Appears if user closed the modal) */}
      {!isOpen && hasInteracted && (
        <aside
          aria-label="Reopen Durga Puja Offer"
          className="fixed left-4 bottom-6 z-40 print:hidden animate-fade-in"
        >
          <button
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#2A1009] via-[#1E110A] to-[#141414] border border-bronze/60 px-4 py-2.5 text-xs font-heading font-bold uppercase tracking-wider text-champagne shadow-[0_0_20px_rgba(205,127,50,0.35),0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-light-bronze hover:shadow-[0_0_30px_rgba(205,127,50,0.5)] active:scale-95 cursor-pointer"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-amber-400 animate-ping" />
            <span className="flex items-center gap-1.5">
              <span>🪔</span>
              <span className="bg-gradient-to-r from-champagne via-light-bronze to-amber-300 bg-clip-text text-transparent font-extrabold">
                Pujo Offer (50% OFF)
              </span>
            </span>
          </button>
        </aside>
      )}

      {/* Main Popup Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="pujo-offer-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto print:hidden"
        >
          {/* Backdrop */}
          <div
            onClick={handleClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative z-10 w-full max-w-4xl max-h-[92vh] flex flex-col my-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-bronze/50 bg-[#0E0C0A] text-white shadow-[0_0_55px_rgba(205,127,50,0.35),0_25px_65px_rgba(0,0,0,0.9)] ring-1 ring-light-bronze/30 animate-modal-pop animate-festive-glow">
            
            {/* Top Festive Accent Strip */}
            <div className="relative h-1.5 w-full bg-gradient-to-r from-red-600 via-amber-400 via-light-bronze to-red-600 animate-pulse" />

            {/* Close Button */}
            <button
              onClick={handleClose}
              aria-label="Close offer popup"
              className="absolute top-3.5 right-3.5 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 border border-white/20 text-gray-300 backdrop-blur-md transition-all duration-200 hover:bg-red-500/20 hover:border-red-400 hover:text-white hover:scale-110 active:scale-95 cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Body with Scroll Support for Smaller Screens */}
            <div className="overflow-y-auto px-4 py-5 sm:p-6 md:p-7">
              <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-8">
                
                {/* LEFT COLUMN: Visual Poster Card */}
                <div className="lg:col-span-5 flex flex-col items-center">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleRedeemClick}
                    className="group relative block w-full overflow-hidden rounded-2xl border border-bronze/40 bg-black/50 shadow-xl transition-all duration-300 hover:border-light-bronze hover:shadow-[0_0_30px_rgba(205,127,50,0.4)]"
                  >
                    {/* Festive Ribbon Tag */}
                    <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5 rounded-full bg-red-600/90 backdrop-blur-md px-3 py-1 text-[11px] font-heading font-bold uppercase tracking-wider text-white shadow-md border border-amber-300/40">
                      <Flame className="h-3 w-3 text-amber-300 fill-amber-300 animate-pulse" />
                      Pujo Special
                    </div>

                    {/* Poster Image */}
                    <div className="relative aspect-[1024/682] w-full overflow-hidden bg-black/40">
                      <Image
                        src="/images/pujo-offer.jpg"
                        alt="Spot My Business Durga Puja Digital Visibility Mahotsav Offer"
                        width={1024}
                        height={682}
                        priority
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Bottom Action Bar on Image */}
                    <div className="flex items-center justify-between border-t border-bronze/30 bg-gradient-to-r from-[#21110A] to-[#120F0C] px-3.5 py-2.5">
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-champagne">
                        <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                        Flat 50% Off Offer
                      </span>
                      <span className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-light-bronze group-hover:text-amber-300">
                        Tap To Redeem <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </a>

                  {/* Trust Highlights below image */}
                  <div className="mt-3 grid grid-cols-2 gap-2 w-full text-center">
                    <div className="rounded-lg border border-bronze/20 bg-secondary-bg/80 px-2 py-1.5">
                      <p className="text-[10px] uppercase tracking-wider text-gray-text">Verified Service</p>
                      <p className="text-xs font-bold text-champagne">Kolkata & Global</p>
                    </div>
                    <div className="rounded-lg border border-bronze/20 bg-secondary-bg/80 px-2 py-1.5">
                      <p className="text-[10px] uppercase tracking-wider text-gray-text">Free Trial</p>
                      <p className="text-xs font-bold text-emerald-400">1 Week Included</p>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN: Offer Details & High-Conversion Action */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  
                  {/* Top Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-heading font-bold uppercase tracking-widest text-amber-300">
                      <span>🪔</span> SMB PUJO DIGITAL VISIBILITY MAHOTSAV ✨
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-red-400">
                      <Clock className="h-3 w-3" /> Limited Slots
                    </span>
                  </div>

                  {/* Main Headline */}
                  <div>
                    <h2
                      id="pujo-offer-title"
                      className="font-heading text-2xl sm:text-3xl font-extrabold uppercase leading-tight tracking-tight text-white"
                    >
                      MAA ASCHHEN.
                      <span className="block mt-0.5 bg-gradient-to-r from-amber-300 via-light-bronze to-champagne bg-clip-text text-transparent">
                        YOUR BRAND SHOULD TOO! ❤️🔥
                      </span>
                    </h2>
                    <p className="mt-1.5 text-xs sm:text-sm text-gray-text leading-relaxed">
                      This Durga Puja, let your business shine brighter than ever with our comprehensive digital visibility suite.
                    </p>
                  </div>

                  {/* Pricing Deal Box */}
                  <div className="rounded-xl border border-bronze/40 bg-gradient-to-br from-[#23120A] via-[#1A0E08] to-[#120D0A] p-3.5 sm:p-4 shadow-inner">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-md bg-red-600 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
                            Flat 50% OFF
                          </span>
                          <span className="text-sm font-semibold text-gray-400 line-through">
                            ₹9,000
                          </span>
                        </div>
                        <div className="mt-1 flex items-baseline gap-2">
                          <span className="font-heading text-3xl sm:text-4xl font-extrabold text-amber-300 tracking-tight">
                            ₹4,500
                          </span>
                          <span className="text-xs font-medium text-gray-text">/ festive package</span>
                        </div>
                      </div>

                      {/* Free Trial Badge */}
                      <div className="flex items-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-950/40 px-3 py-2 text-emerald-300 shadow-sm">
                        <Gift className="h-5 w-5 text-emerald-400 shrink-0" />
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400/90">
                            Bonus Included
                          </p>
                          <p className="text-xs font-bold text-white">1 WEEK FREE TRIAL!</p>
                        </div>
                      </div>
                    </div>

                    <p className="mt-2.5 text-[11px] sm:text-xs text-champagne/90 leading-normal border-t border-bronze/20 pt-2">
                      Don&apos;t let your competitors steal the spotlight this Pujo. Get your business discovered where modern customers search!
                    </p>
                  </div>

                  {/* 4 Pillars of Visibility */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-start gap-2 rounded-lg bg-black/40 border border-white/5 p-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">Generative Engine Optimisation (GEO)</p>
                        <p className="text-[11px] text-gray-400">Ready for AI-powered discovery</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 rounded-lg bg-black/40 border border-white/5 p-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">Search Engine Optimisation (SEO)</p>
                        <p className="text-[11px] text-gray-400">Strengthen Google Search ranks</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 rounded-lg bg-black/40 border border-white/5 p-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">Answer Engine Optimisation (AEO)</p>
                        <p className="text-[11px] text-gray-400">Discoverable in answer search</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 rounded-lg bg-black/40 border border-white/5 p-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">Google Business Profile</p>
                        <p className="text-[11px] text-gray-400">Stronger local & Maps presence</p>
                      </div>
                    </div>
                  </div>

                  {/* Motivational Tagline */}
                  <div className="text-center sm:text-left py-0.5">
                    <p className="text-xs font-semibold text-champagne">
                      🌟 Be the answer. Be the discovery. Be the brand they choose.
                    </p>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="space-y-2 pt-1">
                    <div className="flex flex-col sm:flex-row gap-2.5">
                      {/* Primary WhatsApp Redeem CTA */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleRedeemClick}
                        className="group relative flex-1 flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 px-6 py-3.5 text-sm font-heading font-extrabold uppercase tracking-wider text-white shadow-[0_0_25px_rgba(16,185,129,0.45)] transition-all duration-300 hover:from-emerald-500 hover:to-teal-500 hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] hover:scale-[1.02] active:scale-95"
                      >
                        {/* WhatsApp Icon */}
                        <svg
                          className="h-5 w-5 fill-current shrink-0"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .14 5.35.14 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.44ZM12.07 21.78h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.86 9.86 0 0 1-1.51-5.26C2.22 6.47 6.64 2.05 12.06 2.05c2.63 0 5.1 1.03 6.96 2.89a9.8 9.8 0 0 1 2.89 6.98c0 5.42-4.42 9.86-9.84 9.86Zm5.41-7.39c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.19-.57-.34Z" />
                        </svg>
                        <span>Redeem Now</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </a>

                      {/* Quick Call Button */}
                      <a
                        href={phoneUrl}
                        className="flex items-center justify-center gap-2 rounded-xl border border-bronze/50 bg-secondary-bg/90 px-4 py-3 text-xs font-heading font-semibold uppercase tracking-wider text-champagne transition-all duration-300 hover:border-light-bronze hover:bg-bronze/20 hover:text-white"
                      >
                        <Phone className="h-3.5 w-3.5 text-light-bronze" />
                        <span>Call +91 9007960333</span>
                      </a>
                    </div>

                    {/* Bottom Blessings & Brand Signoff */}
                    <div className="flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 pt-1 gap-1">
                      <p className="italic text-champagne/80 text-center sm:text-left">
                        This Pujo, Maa Durga brings the blessings. Let SMB help your business get noticed! 🙏❤️
                      </p>
                      <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-200 underline underline-offset-2 transition-colors cursor-pointer text-[10px] shrink-0"
                      >
                        Maybe later
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Footer Border Glow */}
            <div className="h-1 w-full bg-gradient-to-r from-bronze/30 via-light-bronze/60 to-bronze/30" />
          </div>
        </div>
      )}
    </>
  );
}
