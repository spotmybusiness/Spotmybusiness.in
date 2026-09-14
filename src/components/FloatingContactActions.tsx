import { Phone } from "lucide-react";

export default function FloatingContactActions() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed right-4 md:right-6 lg:right-8 bottom-6 md:bottom-8 z-30 flex flex-col items-center pointer-events-auto select-none print:hidden"
    >
      <div className="p-1.5 md:p-2 rounded-full bg-primary-bg/85 backdrop-blur-xl border border-bronze/40 shadow-[0_0_22px_rgba(205,127,50,0.22),0_10px_30px_rgba(0,0,0,0.5)] flex flex-col gap-2.5 md:gap-3 transition-all duration-300 hover:border-bronze/60 hover:shadow-[0_0_30px_rgba(205,127,50,0.35),0_12px_36px_rgba(0,0,0,0.6)]">
        {/* WhatsApp Action */}
        <a
          href="https://wa.me/919007960333"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative group flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-secondary-bg border border-emerald-500/30 text-emerald-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-400/80 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-all duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-bg active:scale-95"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .14 5.35.14 11.92c0 2.1.55 4.15 1.6 5.96L0 24l6.26-1.64a11.9 11.9 0 0 0 5.8 1.48h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.44ZM12.07 21.78h-.01a9.86 9.86 0 0 1-5.02-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.86 9.86 0 0 1-1.51-5.26C2.22 6.47 6.64 2.05 12.06 2.05c2.63 0 5.1 1.03 6.96 2.89a9.8 9.8 0 0 1 2.89 6.98c0 5.42-4.42 9.86-9.84 9.86Zm5.41-7.39c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.68-1.64-.93-2.25-.25-.59-.5-.51-.68-.52h-.58c-.2 0-.52.07-.8.37-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.19-.57-.34Z" />
          </svg>

          {/* Desktop Hover Tooltip */}
          <span
            role="tooltip"
            className="pointer-events-none absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-secondary-bg/95 border border-border-color text-xs font-heading font-semibold tracking-wide text-heading whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-200 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            Chat on WhatsApp
          </span>
        </a>

        {/* Phone Action */}
        <a
          href="tel:+919007960333"
          aria-label="Call Spot My Business"
          className="relative group flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-secondary-bg border border-bronze/40 text-light-bronze hover:text-white hover:bg-gradient-to-r hover:from-bronze hover:to-light-bronze hover:border-light-bronze/80 hover:shadow-[0_0_20px_rgba(205,127,50,0.35)] transition-all duration-300 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-primary-bg active:scale-95"
        >
          <Phone className="w-5 h-5 md:w-5.5 md:h-5.5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6" />

          {/* Desktop Hover Tooltip */}
          <span
            role="tooltip"
            className="pointer-events-none absolute right-full mr-3.5 px-3 py-1.5 rounded-xl bg-secondary-bg/95 border border-border-color text-xs font-heading font-semibold tracking-wide text-heading whitespace-nowrap opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-200 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-light-bronze"></span>
            Call Spot My Business
          </span>
        </a>
      </div>
    </aside>
  );
}
