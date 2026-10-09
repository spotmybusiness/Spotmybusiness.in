"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Phone,
  Mail,
  ArrowUpRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";

export interface Founder {
  name: string;
  role: string;
  phone: string;
  email: string;
  linkedin: string;
  qualification: string;
  initials: string;
  image?: string;
  bio?: string;
}

export const foundersData: Founder[] = [
  {
    name: "Swapnonil Nath",
    role: "Co-Founder",
    phone: "+91-8597913452",
    email: "swapnonil2007@gmail.com",
    linkedin: "https://www.linkedin.com/in/swapnonil-nath-gmb-expert/",
    qualification: "IIT KHARAGPUR",
    initials: "SN",
    image: "/images/team/swapnonil.jpg",
    bio: "Leads client visibility strategy, market presence alignment, and local business growth.",
  },
  {
    name: "Srijan Seal",
    role: "Co-Founder",
    phone: "+91-9007960333",
    email: "srijanseal.in@gmail.com",
    linkedin: "https://www.linkedin.com/in/srijan-seal-2055b43a5",
    qualification: "JADAVPUR UNIVERSITY",
    initials: "SS",
    image: "/images/team/srijan.jpg",
    bio: "Focuses on search architecture, technical performance, and digital foundation systems.",
  },  
  {
    name: "Sagnik Bhaskar",
    role: "Co-Founder",
    phone: "+91-8101812459",
    email: "rajabhaskar508@gmail.com",
    linkedin: "https://www.linkedin.com/in/sagnik-bhaskar-2b42b93a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    qualification: "KALYANI GOVERNMENT ENGINEERING COLLEGE",
    initials: "SB",
    image: "/images/team/sagnik.jpg",
    bio: "Drives web development execution, digital touchpoints, and brand credibility workflows.",
  },
];

function LinkedInIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={`${className} fill-current`} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  const [bgError, setBgError] = useState(false);

  // Helper to format safe links for placeholders
  const getHref = (type: "tel" | "mailto" | "linkedin", val: string) => {
    if (val.startsWith("[") && val.endsWith("]")) {
      return undefined;
    }
    if (type === "tel") return `tel:${val.replace(/\s+/g, "")}`;
    if (type === "mailto") return `mailto:${val}`;
    if (type === "linkedin") return val.startsWith("http") ? val : `https://${val}`;
    return val;
  };

  const linkedinHref = getHref("linkedin", founder.linkedin);
  const phoneHref = getHref("tel", founder.phone);
  const emailHref = getHref("mailto", founder.email);

  return (
    <div className="group relative rounded-2xl md:rounded-3xl border border-border-color/80 bg-secondary-bg overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 hover:border-bronze/50 hover:shadow-2xl hover:shadow-bronze/10">
      
      {/* Top Accent Line on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-light-bronze/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

      {/* =======================================================
          PORTRAIT FRAME (Top Area with Smooth Feathered Blend)
          ======================================================= */}
      <div className="relative w-full h-72 sm:h-80 overflow-hidden bg-[#0F0F0F]">
        
        {founder.image && !bgError ? (
          <Image
            src={founder.image}
            alt={`${founder.name} — ${founder.role}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            className="object-cover object-top filter brightness-[0.88] contrast-[1.05] saturate-[0.9] group-hover:scale-105 group-hover:brightness-100 group-hover:saturate-100 transition-all duration-700 ease-out"
            onError={() => setBgError(true)}
          />
        ) : (
          /* Elegant Placeholder */
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#181818] to-secondary-bg">
            <div className="w-16 h-16 rounded-2xl bg-bronze/10 border border-bronze/30 flex items-center justify-center font-heading font-bold text-2xl text-light-bronze">
              {founder.initials}
            </div>
          </div>
        )}

        {/* Multi-layered Feather Gradient: Smoothly transitions photo into card background */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg via-secondary-bg/50 via-30% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-widest text-light-bronze uppercase">
            <span>{founder.initials}</span>
            <span className="text-white/20">•</span>
            <span>SMB</span>
          </span>

          <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono font-medium text-gray-text/70">
            0{index + 1}
          </span>
        </div>
      </div>

      {/* =======================================================
          CARD BODY CONTENT
          ======================================================= */}
      <div className="p-6 sm:p-7 md:p-8 flex flex-col justify-between flex-1 space-y-6 relative z-10 -mt-6 bg-secondary-bg">
        
        {/* Founder Identity */}
        <div className="space-y-2">
          {linkedinHref ? (
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group/name inline-flex items-center gap-1.5 text-2xl font-heading font-bold text-heading hover:text-light-bronze transition-colors duration-200"
            >
              <span>{founder.name}</span>
              <ArrowUpRight className="w-4 h-4 text-light-bronze/60 group-hover/name:text-light-bronze group-hover/name:translate-x-0.5 group-hover/name:-translate-y-0.5 transition-all duration-200 shrink-0" />
            </a>
          ) : (
            <h3 className="text-2xl font-heading font-bold text-heading">
              {founder.name}
            </h3>
          )}

          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-light-bronze">
              {founder.role}
            </span>
            <span className="text-gray-text/30 text-xs">•</span>
            <span className="text-[11px] text-gray-text/60">Spot My Business</span>
          </div>

          {founder.bio && (
            <p className="text-xs text-gray-text/75 leading-relaxed pt-1">
              {founder.bio}
            </p>
          )}
        </div>

        {/* Structured Editorial Information Rows */}
        <div className="border-t border-border-color/60 pt-5 space-y-3.5">
          
          {/* Qualification */}
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-primary-bg/80 border border-border-color/80 shrink-0 text-light-bronze mt-0.5">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
            <div className="space-y-0.5 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-gray-text/50 font-bold block">
                Qualification
              </span>
              <p className="text-xs text-heading/90 font-semibold truncate">
                {founder.qualification}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-primary-bg/80 border border-border-color/80 shrink-0 text-light-bronze mt-0.5">
              <Phone className="w-3.5 h-3.5" />
            </div>
            <div className="space-y-0.5 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-gray-text/50 font-bold block">
                Phone
              </span>
              {phoneHref ? (
                <a
                  href={phoneHref}
                  className="text-xs text-gray-text hover:text-light-bronze transition-colors duration-200 font-medium block truncate"
                >
                  {founder.phone}
                </a>
              ) : (
                <span className="text-xs text-gray-text/70 font-mono block truncate">
                  {founder.phone}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div className="p-1.5 rounded-lg bg-primary-bg/80 border border-border-color/80 shrink-0 text-light-bronze mt-0.5">
              <Mail className="w-3.5 h-3.5" />
            </div>
            <div className="space-y-0.5 min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-gray-text/50 font-bold block">
                Email
              </span>
              {emailHref ? (
                <a
                  href={emailHref}
                  className="text-xs text-gray-text hover:text-light-bronze transition-colors duration-200 font-medium block truncate"
                >
                  {founder.email}
                </a>
              ) : (
                <span className="text-xs text-gray-text/70 font-mono block truncate">
                  {founder.email}
                </span>
              )}
            </div>
          </div>

        </div>

        {/* Bottom LinkedIn Button */}
        <div className="pt-2">
          {linkedinHref ? (
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-primary-bg/80 hover:bg-bronze/15 border border-border-color hover:border-bronze/50 text-xs tracking-[0.18em] uppercase font-bold text-light-bronze hover:text-champagne transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm"
            >
              <LinkedInIcon className="w-3.5 h-3.5 text-light-bronze" />
              <span>View LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" />
            </a>
          ) : (
            <div className="w-full py-2.5 px-4 rounded-xl bg-primary-bg/50 border border-border-color/50 text-xs tracking-[0.15em] uppercase font-semibold text-gray-text/40 flex items-center justify-center gap-2 cursor-default">
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default function TeamShowcase() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="team" className="py-20 md:py-28 relative overflow-hidden bg-primary-bg">
      {/* Background ambient lighting */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-bronze/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* =======================================================
            1. SECTION INTRODUCTION
            ======================================================= */}
        <div className="max-w-3xl mb-12 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bronze/10 border border-bronze/20">
            <Sparkles className="w-3.5 h-3.5 text-light-bronze" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-light-bronze font-bold">
              Founded 2026
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading leading-[1.15]">
            The Team Behind <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-bronze via-light-bronze to-champagne">
              Spot My Business
            </span>
          </h2>

          <p className="text-gray-text text-base md:text-lg leading-relaxed pt-2">
            Spot My Business was founded in 2026 by three people with a shared focus
            on helping local businesses build a reliable, accurate presence across
            Google Search, Google Maps, and the web. We are a small, focused team working
            closely with each business to establish true digital credibility.
          </p>
        </div>

        {/* =======================================================
            2. LARGE CENTERPIECE FOUNDER SHOWCASE (IMAGE AREA)
            ======================================================= */}
        <div className="space-y-6 mb-16 md:mb-20">
          <div className="flex items-center justify-between border-b border-border-color/50 pb-4">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-light-bronze animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-light-bronze font-bold">
                The People Behind SMB
              </span>
            </div>
            <span className="text-xs text-gray-text/50 tracking-wider hidden sm:inline">
              Srijan • Swapnonil • Sagnik
            </span>
          </div>

          {/* Cinematic Gallery Frame with Connected Caption */}
          <div className="group relative rounded-2xl md:rounded-3xl overflow-hidden border border-border-color bg-secondary-bg shadow-2xl transition-all duration-500 hover:border-bronze/40">
            
            {/* Top Accent Line on Hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-light-bronze/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />

            {/* Photo Container with Full Unobscured Visibility */}
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/10] max-h-[520px] overflow-hidden bg-gradient-to-b from-[#141414] to-[#0A0A0A]">
              
              {!imageError ? (
                <Image
                  src="/images/team/smb-founders.png"
                  alt="Spot My Business Founding Team — Srijan Seal, Swapnonil Nath, Sagnik Bhaskar"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:contrast-[1.03]"
                  onError={() => setImageError(true)}
                  priority={false}
                />
              ) : (
                /* Fallback Image Placeholder */
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-secondary-bg">
                  <div className="w-16 h-16 rounded-2xl bg-bronze/10 border border-bronze/30 flex items-center justify-center text-light-bronze font-heading font-bold text-xl mb-4">
                    SMB
                  </div>
                  <h3 className="text-lg md:text-xl font-heading font-bold text-heading">
                    Founding Team Photograph
                  </h3>
                  <p className="text-xs md:text-sm text-gray-text/70 max-w-md mt-2">
                    Srijan Seal • Swapnonil Nath • Sagnik Bhaskar
                  </p>
                  <span className="mt-4 px-3 py-1 rounded-full bg-primary-bg border border-border-color text-[11px] text-light-bronze font-mono">
                    /public/images/team/smb-founders.png
                  </span>
                </div>
              )}

              {/* Very Subtle Vignette only at bottom edge of photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-secondary-bg/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Clean Connected Caption Bar (Never Overlaps Faces) */}
            <div className="p-6 sm:p-7 md:p-8 bg-secondary-bg border-t border-border-color/60 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-light-bronze font-bold block">
                  Founding Partners
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-heading tracking-tight">
                  Three Founders. One Vision.
                </h3>
                <p className="text-xs sm:text-sm text-gray-text max-w-xl leading-relaxed">
                  A dedicated team building reliable, high-impact digital presence for local businesses.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-primary-bg border border-border-color/80 text-xs font-medium text-gray-text self-start md:self-auto shrink-0 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Kolkata, India • Remote Delivery</span>
              </div>
            </div>

          </div>
        </div>

        {/* =======================================================
            3. THREE INDIVIDUAL FOUNDER HARMONIZED PORTRAIT CARDS
            ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {foundersData.map((founder, idx) => (
            <FounderCard key={founder.name} founder={founder} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
