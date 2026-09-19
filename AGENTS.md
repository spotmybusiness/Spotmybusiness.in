<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# CURRENT SMB WEBSITE ARCHITECTURE & DESIGN SYSTEM

> Observed directly from the repository on 2026-09-19. Treat this as the single source of truth. Do not rely on prior conversation history or generated summaries that may be stale.

---

## 1. ROUTING & ARCHITECTURE

### Tech Stack
- **Framework**: Next.js (App Router), TypeScript, Tailwind CSS v4
- **Fonts**: `next/font/google` — `Space_Grotesk` (weights 600, 700, CSS var `--font-space-grotesk`) + `Inter` (weights 400, 500, 600, CSS var `--font-inter`). Both use `display: "swap"`.
- **Key deps**: `framer-motion`, `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`, `canvas-confetti`, `next/image`

### Route Tree (all current `page.tsx` files)
```
/                              → src/app/page.tsx
/about/                        → src/app/about/page.tsx
/case-studies/                 → src/app/case-studies/page.tsx
/contact/                      → src/app/contact/page.tsx
/industries/                   → src/app/industries/page.tsx
/locations/                    → src/app/locations/page.tsx
/privacy-policy/               → src/app/privacy-policy/page.tsx  (noindex)
/terms/                        → src/app/terms/page.tsx            (noindex)
/services/                     → src/app/services/page.tsx
/services/internet-marketing/  → src/app/services/internet-marketing/page.tsx
/services/google-business-profile-optimization/
/services/google-maps-seo/
/services/local-seo/
/services/reputation-management/
/services/website-development/
/services/website-management/
/services/website-seo/
/services/website-performance/
```
**18 routes total. No dynamic segments. No subroutes under `/industries/` or `/locations/`.**

### Layout Architecture (`src/app/layout.tsx`)
- `Navbar`, `Footer`, and `FloatingContactActions` are rendered **in `layout.tsx`** inside `<ThemeProvider>`, wrapping `{children}`. They appear on every page automatically.
- `<html lang="en">` with `suppressHydrationWarning`
- Inline `<script>` in `<head>` for theme-flash prevention (reads `smb-theme` from localStorage)
- Global `LocalBusiness`+`ProfessionalService` JSON-LD in `<head>` via `getLocalBusinessSchema()` from `src/lib/business.ts`
- `metadataBase: new URL("https://spotmybusiness.in")` in layout `metadata`

### Business Data Module (`src/lib/business.ts`)
All verified business facts live here. **Always import from this module rather than hardcoding strings.**
- `businessInfo` — name, address, phones, email, WhatsApp, geo, social URLs, hours description
- `businessHours[]` — per-day hours array used by the Contact page
- `getLocalBusinessSchema()` — returns the full `LocalBusiness`+`ProfessionalService` JSON-LD object

### Sitemap (`src/app/sitemap.ts`)
18 URLs including `/about/`, `/contact/`, `/privacy-policy/`, `/terms/`, and `/services/internet-marketing/`. No `lastModified` field (removed from current version). Uses `changeFrequency` cast to `MetadataRoute.Sitemap[0]["changeFrequency"]`.

### Robots (`src/app/robots.ts`)
`allow: "/"` for all agents. Sitemap at `https://spotmybusiness.in/sitemap.xml`.

---

## 2. SERVER / CLIENT COMPONENT BOUNDARIES

**Server Components (no `"use client"`):**
All `page.tsx` files. These are pure Server Components. They may import Client Components as leaves.

**Client Components (`"use client"`):**
- `Navbar.tsx` — scroll detection, mobile menu state, services dropdown
- `Footer.tsx` — `"use client"` (uses Image, ArrowUp, static; check if still marked)
- `ThemeProvider.tsx` — theme state
- `ThemeSwitcher.tsx` — used inside Navbar
- `FloatingContactActions.tsx` — floating phone/WhatsApp buttons
- `About.tsx` — framer-motion animations
- `Services.tsx` — 3D tilt cards, modal overlay (framer-motion, useState)
- `Contact.tsx` — react-hook-form, zod validation, canvas-confetti
- `HeroMotion.tsx` — framer-motion wrapper
- `ClientShowcase.tsx` — CSS marquee animation
- `TrustMarquee.tsx` — CSS marquee
- `TeamShowcase.tsx` — imported by `/about/` page

**Rule:** Never add `"use client"` to a `page.tsx`. Import Client Components as leaves where needed.

---

## 3. METADATA & SEO CONVENTIONS

### Pattern (all indexable pages follow this exactly)
```ts
export const metadata: Metadata = {
  title: "Page-Specific Title | Spot My Business",
  description: "Natural sentence description matching the page.",
  alternates: {
    canonical: "https://spotmybusiness.in/path/",   // trailing slash always
  },
  openGraph: {
    title: "...",
    description: "...",
    url: "https://spotmybusiness.in/path/",
    siteName: "Spot My Business",
    type: "website",
  },
};
```
- **No `twitter` card** on individual pages (only in layout global metadata)
- **No `keywords`** on individual pages
- Canonical always uses the full absolute URL with trailing slash
- Layout metadata acts as global fallback; every real page overrides with its own `metadata` export

### noindex pages
```ts
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};
```
Currently applied to `/privacy-policy/` and `/terms/`.

### JSON-LD Schema Patterns

**Service pages** (`/services/[slug]/`): Use `@graph` array with two nodes:
1. `BreadcrumbList` — Home → Services → [Service Name]
2. `Service` — with `provider` as `LocalBusiness` (inline, not referencing global schema)

**Hub pages** (`/industries/`, `/locations/`, `/case-studies/`): Single `BreadcrumbList` object (not `@graph`).

**Service pages with `@graph`** include provider address and phones inline in the `Service` node. The internet-marketing page uses `["LocalBusiness", "ProfessionalService"]` as the provider type array.

**Schema injection pattern** (all service/hub pages):
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```
Placed as the **first child of `<main>`**, before any visible content.

---

## 4. VISUAL DESIGN SYSTEM

### Color Palette (CSS variables, `globals.css`)
| Token | Dark (default) | Light (`[data-theme="light"]`) |
|---|---|---|
| `primary-bg` | `#0B0B0B` | `#F5F0EA` |
| `secondary-bg` | `#141414` | `#EBE3D9` |
| `bronze` | `#8B5E3C` | `#704421` |
| `light-bronze` | `#D4A373` | `#704421` |
| `champagne` | `#E7D3B0` | `#5C361A` |
| `white-text` | `#F8F8F8` | `#1A1A1A` |
| `gray-text` | `#CFCFCF` | `#333333` |
| `border-color` | `#242424` | `#D1C5B6` |
| `heading` | `#F8F8F8` | `#1A1A1A` |

### Glass Utility Classes
- `.glass-panel` — `rgba(20,20,20,0.65)`, `backdrop-blur(16px)`, subtle white border. Used for CTA boxes, modals.
- `.glass-card` — `rgba(20,20,20,0.4)`, `backdrop-blur(12px)`. Used for info/feature cards.
- Both adapt in light mode via `[data-theme="light"]` overrides.

### Layout Constants
- **Max width**: `max-w-7xl` (`1280px`) — used on every page wrapper
- **Horizontal padding**: `px-6 md:px-12` — consistent across all pages
- **Content width cap for prose**: `max-w-3xl` for hero/intro text blocks
- **Breadcrumb top padding**: `pt-28 pb-4` (accounts for fixed Navbar height)

### Spacing Rhythm (hub pages like `/services/`)
- Hero section: `py-12 md:py-16`
- Content sections: `py-16 md:py-20`
- CTA section: `py-16 md:py-24`
- Related-links pill row: `py-12`
- Section dividers: `<div className="border-t border-border-color/40" />`

### Service Detail Pages (`/services/[slug]/`) — DIFFERENT PATTERN
These use a **simpler, denser prose layout** without glass cards:
- Outer wrapper: `<div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">`
- Hero: `<section className="max-w-3xl py-16 md:py-24">`
- Content sections: `<section className="... border-t border-border-color py-12">`
- Cards: `rounded-xl border border-border-color bg-secondary-bg p-5` (not glass)
- Grids: `grid gap-4 sm:grid-cols-2` for capabilities; `grid gap-4 md:grid-cols-2 lg:grid-cols-5` for process steps
- CTA block: `rounded-2xl bg-secondary-bg p-8 md:p-12` (not glass-panel)

---

## 5. TYPOGRAPHY

### Font Families
- **Headings**: `font-heading` → `Space_Grotesk`, weights 600/700
- **Body**: `font-body` / `font-inter` → `Inter`, weights 400/500/600
- Both loaded via `next/font/google` with CSS variables injected on `<html>`

### Heading Sizes (hub pages)
| Element | Classes |
|---|---|
| H1 | `text-4xl md:text-5xl font-heading font-bold tracking-tight text-heading leading-tight` |
| H2 (section) | `text-2xl md:text-3xl font-heading font-bold tracking-tight text-heading` |
| H2 (CTA) | `text-3xl md:text-4xl font-heading font-bold tracking-tight text-heading` |
| Card H2/H3 | `text-xl font-heading font-bold text-heading` |

### Heading Sizes (service detail pages)
| Element | Classes |
|---|---|
| H1 | `text-4xl font-heading font-bold leading-tight md:text-6xl` |
| H2 | `text-3xl font-heading font-bold` |

### Body / Label Text (hub pages)
- Intro paragraph: `text-base md:text-lg leading-relaxed text-gray-text`
- Secondary paragraphs: `text-sm leading-relaxed text-gray-text`
- Section eyebrow label: `text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold`
- Card body: `text-sm text-gray-text leading-relaxed`
- Bullet items: `text-xs text-gray-text/80`
- Breadcrumb: `text-xs text-gray-text/60 font-medium tracking-wide`
- Pill link label: `text-xs tracking-[0.15em] uppercase font-semibold text-gray-text`
- Primary CTA link (card): `text-[10px] tracking-[0.2em] font-heading font-bold text-light-bronze uppercase`

---

## 6. REUSABLE PAGE PATTERNS

### Breadcrumb (hub pages)
```tsx
<nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-4">
  <ol className="flex items-center gap-2 text-xs text-gray-text/60 font-medium tracking-wide">
    <li><a href="/" className="hover:text-light-bronze transition-colors duration-200">Home</a></li>
    <li aria-hidden="true" className="text-gray-text/30">/</li>
    <li aria-current="page" className="text-light-bronze">Page Name</li>
  </ol>
</nav>
```

### Breadcrumb (service detail pages) — different style
```tsx
<nav aria-label="Breadcrumb" className="text-sm text-gray-text">
  <ol className="flex flex-wrap gap-2">
    <li><a href="/" className="hover:text-light-bronze">Home</a></li>
    <li aria-hidden="true">→</li>
    <li><a href="/services/" className="hover:text-light-bronze">Services</a></li>
    <li aria-hidden="true">→</li>
    <li aria-current="page">Service Name</li>
  </ol>
</nav>
```

### Section Eyebrow + Heading pattern
```tsx
<span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">
  Label Text
</span>
<h2 className="mt-4 text-2xl md:text-3xl font-heading font-bold tracking-tight text-heading">
  Section Heading
</h2>
```

### Section Divider
```tsx
<div className="max-w-7xl mx-auto px-6 md:px-12">
  <div className="border-t border-border-color/40" />
</div>
```

### Glass Card (hub pages)
```tsx
<div className="glass-card border border-border-color rounded-2xl p-8 ... hover:border-bronze/40 transition-colors duration-300">
```

### Feature/Capability Card (service detail pages)
```tsx
<li className="rounded-xl border border-border-color bg-secondary-bg p-5">
  <p className="font-semibold text-heading">{item.title}</p>
  <p className="mt-2 text-gray-text">{item.detail}</p>
</li>
```

### Primary CTA Button
```tsx
<a href="/contact/" className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading">
  Talk to Us
</a>
```

### Secondary / Outline Button
```tsx
<a href="..." className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading">
  Label
</a>
```

### Related Service Pills (hub pages)
```tsx
<a href="/services/..." className="px-5 py-2.5 rounded-full border border-border-color text-xs tracking-[0.15em] uppercase font-semibold text-gray-text hover:border-bronze/50 hover:text-white transition-all duration-200">
  Service Name
</a>
```

### Related Service Pills (service detail pages) — slightly different
```tsx
<a href="..." className="rounded-full border border-border-color px-5 py-2 text-sm text-gray-text hover:text-light-bronze">
  Service name
</a>
```

### Contact CTA Block (hub pages — glass-panel)
```tsx
<section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
  <div className="glass-panel border border-border-color rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-bronze/5 blur-[120px] pointer-events-none" />
    <div className="relative z-10 space-y-5 max-w-xl mx-auto">
      <span className="text-xs uppercase tracking-[0.3em] text-light-bronze font-semibold">Get Started</span>
      <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-heading">...</h2>
      <p className="text-gray-text text-sm leading-relaxed">...</p>
      <a href="/contact/" className="inline-block mt-2 px-8 py-4 rounded-full bg-gradient-to-r from-bronze to-light-bronze text-xs tracking-[0.25em] uppercase font-bold font-heading text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all duration-300">
        Start a Conversation
      </a>
    </div>
  </div>
</section>
```

### Contact CTA Block (service detail pages — secondary-bg)
```tsx
<section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
  <h2 className="text-3xl font-heading font-bold">...</h2>
  <p className="mt-3 max-w-2xl text-gray-text">...</p>
  <a href="/contact/" className="mt-6 inline-block rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading">
    Contact Spot My Business
  </a>
</section>
```

### Inline Prose Links
```tsx
<a href="/path/" className="text-light-bronze hover:text-champagne underline underline-offset-2 transition-colors duration-200">
  anchor text
</a>
```

---

## 7. CONTENT STRUCTURE & TONE

### H1 Rule
**Exactly one H1 per page.** All pages follow this without exception.

### Hub Page Content Flow
1. Breadcrumb nav
2. Hero: eyebrow label + H1 + 1–2 intro paragraphs (max-w-3xl)
3. Divider
4. Primary content section (cards grid or prose + card grid)
5. Divider
6. Secondary content section (explanatory prose or additional cards)
7. Divider (if more content follows)
8. Related pills row
9. Contact CTA block

### Service Detail Page Content Flow
1. JSON-LD `<script>` (first in `<main>`)
2. Breadcrumb (→ separated, text-sm style)
3. Hero: eyebrow + H1 + intro paragraph + dual CTA buttons (primary + secondary)
4. Content sections separated by `border-t border-border-color py-12`:
   - "What building [X] involves" (split prose)
   - "What we can help with" (capabilities grid)
   - "Built around the business" (business-fit grid)
   - "Our approach" (numbered process steps)
   - "What a good [X] should provide" (qualities grid)
   - "Related services" (pill links)
5. CTA block (`bg-secondary-bg`, rounded-2xl)

### Tone of Voice
- Direct and plain. No marketing superlatives.
- Never imply rankings, revenue, or traffic guarantees.
- Never invent credentials, certifications, case-study outcomes, team sizes, or founding dates.
- Describe what the service *involves* and *aims toward*, not what it *guarantees*.
- Use hedging where appropriate: "can help", "aims to", "supports", "is designed to".
- Sentence-case headings on service detail pages ("What building a website involves"), not Title Case.
- Title Case on hub pages H1s ("Digital Presence Services for Local Businesses").

### Prohibited Content
- No invented statistics, percentages, or results
- No Google affiliation or endorsement language
- No FAQ schema
- No doorway/programmatic location pages
- No pricing information
- No ranking promises
- No star ratings or testimonials not sourced from real data
- Client metrics in `ClientShowcase.tsx` must not be modified without verified replacement data

---

## 8. SEO & TRUST CONVENTIONS

### Factual Business Data (from `src/lib/business.ts`)
```
Name: Spot My Business
Primary Category: Internet Marketing Service
Address: Middle Rd, Sen Para, Santoshpur, Kolkata, West Bengal 700075
Phone 1: +91 9007960333
Phone 2: +91 8597913452
Email: smb.spot.my.business@gmail.com
WhatsApp: https://wa.me/919007960333
LinkedIn: https://www.linkedin.com/company/spot-my-business/
Instagram: https://www.instagram.com/spotmybusiness.in/
Geo: 22.49583535142233, 88.3806285747356
Hours: Mo–Su 00:00–23:59 (Open 24 hours)
Domain: https://spotmybusiness.in
```
Remote-operating business. No branch offices. Serves clients in Kolkata and beyond.

### Canonical Convention
- All canonicals: full absolute URL + trailing slash
- Self-referencing on every indexable page
- Layout-level canonical (`"https://spotmybusiness.in/"`) is a fallback for the homepage only; every other page must declare its own

### Sitemap Inclusion Criteria
Include when: page has real content, unique metadata, and a `canonical`. Currently includes `/about/`, `/contact/`, `/privacy-policy/`, `/terms/` (even if still placeholders — this is the current live sitemap state).

### Internal Linking Expectations
Every page links to `/contact/` via a CTA. Hub pages link to related service pages and to `/industries/`, `/locations/`, `/case-studies/` where relevant.

---

## 9. PERFORMANCE CONVENTIONS

- All `page.tsx` files are Server Components. No exceptions.
- Images use `next/image` with explicit `width`/`height`.
- Animations are isolated to Client Components (framer-motion stays out of pages).
- No `"use client"` on pages even when importing Client Components — App Router handles this correctly.
- Fonts loaded once in `layout.tsx` via `next/font/google`; CSS variables propagated to all components.
- No `lastModified` in `sitemap.ts` (avoids always-current-date issue).
- Run `tsc --noEmit` after every file change and report the result before stopping.
