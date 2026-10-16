<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# CURRENT SMB WEBSITE ARCHITECTURE & DESIGN SYSTEM

> Observed directly from the repository. Treat this as the single source of truth. Do not rely on prior conversation history or generated summaries that may be stale.

---

## 1. ROUTING & ARCHITECTURE

### Tech Stack
- **Framework**: Next.js 16.2.7 (App Router, Turbopack), React 19.2.4, TypeScript 5, Tailwind CSS v4
- **Fonts**: `next/font/google` — `Space_Grotesk` (weights 600, 700, CSS var `--font-space-grotesk`) + `Inter` (weights 400, 500, 600, CSS var `--font-inter`). Both use `display: "swap"`.
- **Active Dependencies**: `lucide-react`, `react-hook-form`, `tailwind-merge`, `clsx`, `next/image`
- **Zero Animation Runtimes**: Zero `framer-motion` or GSAP dependencies. All animations use native CSS keyframes (e.g., marquee in `globals.css`) and Tailwind CSS transition classes.
- **Zero Schema/Validation Runtimes**: Form validation uses lightweight native RegExp functions in React Hook Form (no `zod` or `@hookform/resolvers`).

### Route Tree (all current `page.tsx` files)
```
/                              → src/app/page.tsx
/about/                        → src/app/about/page.tsx
/case-studies/                 → src/app/case-studies/page.tsx
/contact/                      → src/app/contact/page.tsx
/faq/                          → src/app/faq/page.tsx
/industries/                   → src/app/industries/page.tsx
/locations/                    → src/app/locations/page.tsx
/locations/[slug]/             → src/app/locations/[slug]/page.tsx (SSG for 20 verified markets)
/privacy-policy/               → src/app/privacy-policy/page.tsx   (noindex)
/terms/                        → src/app/terms/page.tsx             (noindex)
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
**39 total production URLs**: 19 static routes + 20 statically pre-rendered location routes under `/locations/[slug]/`.

### 20 Verified Service-Area Location Slugs (`src/lib/locations.ts`)
1. `kolkata`
2. `bidhannagar`
3. `howrah`
4. `west-bengal`
5. `bhubaneswar`
6. `delhi`
7. `noida`
8. `gurugram`
9. `mumbai`
10. `pune`
11. `nagpur`
12. `bengaluru`
13. `hyderabad`
14. `chennai`
15. `kochi`
16. `ahmedabad`
17. `jaipur`
18. `lucknow`
19. `visakhapatnam`
20. `goa`

### Layout Architecture (`src/app/layout.tsx`)
- `Navbar`, `Footer`, and `FloatingContactActions` are rendered **in `layout.tsx`** inside `<ThemeProvider>`, wrapping `{children}`. They appear on every page automatically.
- `<html lang="en">` with `suppressHydrationWarning`
- Inline `<script>` in `<head>` for theme-flash prevention (reads `smb-theme` from localStorage)
- Global `LocalBusiness` + `ProfessionalService` JSON-LD in `<head>` via `getLocalBusinessSchema()` from `src/lib/business.ts`
- `metadataBase: new URL("https://www.spotmybusiness.in")` in layout `metadata`

### Data Modules (`src/lib/`)
All domain data is centralized in typed modules. **Always import from these modules rather than hardcoding strings:**
- `src/lib/business.ts` — `businessInfo`, `businessHours[]`, `getLocalBusinessSchema()` (canonical business identity)
- `src/lib/locations.ts` — `locationsData[]`, `getAllLocationSlugs()`, `getLocationBySlug()` (20 market profiles)
- `src/lib/faq.ts` — `faqCategories[]`, `getAllFAQs()`, `getFAQById()` (13 factual Q&As across 4 categories)

### Sitemap (`src/app/sitemap.ts`)
Exports **37 indexable URLs** dynamically combining the 17 static indexable routes and all 20 location slugs from `src/lib/locations.ts` (excluding noindex routes `/privacy-policy` and `/terms`). No `lastModified` timestamps (prevents false crawl frequency signals).

### Robots (`src/app/robots.ts`)
`allow: "/"` for all user agents. Points sitemap to `https://www.spotmybusiness.in/sitemap.xml`.

---

## 2. SERVER / CLIENT COMPONENT BOUNDARIES

**Server Components (100% server-rendered, 0 KB client JS):**
- All `page.tsx` files (including `/`, `/services/*`, `/locations/*`, `/faq/`, `/about/`, `/contact/`, `/industries/`, `/case-studies/`)
- `About.tsx`
- `ClientShowcase.tsx`
- `TrustMarquee.tsx`
- `Process.tsx`
- `Comparison.tsx`
- `PhoneMockup.tsx`
- `Footer.tsx`

**Client Components (`"use client"` only where state/events are strictly required):**
- `Navbar.tsx` — scroll detection, mobile menu drawer, services dropdown
- `Contact.tsx` — form submission state, inline regex validation via `react-hook-form`
- `Services.tsx` — 3D interactive tilt cards and modal view (`useState`, `useRef`)
- `TeamShowcase.tsx` — founder profile modal view (`useState`)
- `ThemeProvider.tsx` / `ThemeSwitcher.tsx` — light/dark theme context and toggle
- `FloatingContactActions.tsx` — floating quick-contact buttons

**Rule:** Never add `"use client"` to a `page.tsx`. Use native HTML (`<details>`/`<summary>`) for accordions and pure CSS for animations where possible.

---

## 3. METADATA & SEO CONVENTIONS

### Standard Page Metadata Pattern
```ts
export const metadata: Metadata = {
  title: "Page-Specific Title | Spot My Business",
  description: "Natural sentence description matching the page.",
  alternates: {
    canonical: "https://www.spotmybusiness.in/path",   // canonical origin with no trailing slash except /
  },
  openGraph: {
    title: "...",
    description: "...",
    url: "https://www.spotmybusiness.in/path",
    siteName: "Spot My Business",
    type: "website",
  },
};
```
- **No `twitter` card** on individual pages (defined globally in `layout.tsx`)
- **No `keywords`** on individual pages
- Canonical always uses the full absolute URL on `https://www.spotmybusiness.in` with no trailing slash (root is `https://www.spotmybusiness.in/`)

### noindex Pages
```ts
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};
```
Applied to `/privacy-policy` and `/terms`.

### JSON-LD Schema Patterns

1. **Service Pages** (`/services/[slug]/`): Use `@graph` with two nodes:
   - `BreadcrumbList` (Home → Services → [Service])
   - `Service` with `provider` referencing `LocalBusiness` / `ProfessionalService`

2. **Hub Pages** (`/industries/`, `/locations/`, `/case-studies/`, `/faq/`): Single `BreadcrumbList` node.

3. **Location Detail Pages** (`/locations/[slug]/`): Use `@graph` with two nodes:
   - `BreadcrumbList` (Home → Locations → [Location Name])
   - `Service` scoped with `areaServed` (`City` or `State`) and `provider` referencing verified Kolkata headquarters data from `src/lib/business.ts`.
   - **Never create a fake LocalBusiness schema for target cities.**

4. **FAQ Page** (`/faq/`):
   - Uses `BreadcrumbList` schema only.
   - **Never add `FAQPage` schema** (aligned with modern Google search guidelines restricting rich results).

**Schema Injection Pattern:**
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
- `.glass-panel` — `rgba(20,20,20,0.65)`, `backdrop-blur(16px)`, subtle white border. Used for hero blocks, CTA cards, modals.
- `.glass-card` — `rgba(20,20,20,0.4)`, `backdrop-blur(12px)`. Used for interactive feature cards.
- Both adapt automatically in light mode via `[data-theme="light"]` rules.

### Layout Constants
- **Max container width**: `max-w-7xl` (`1280px`) — used on every page wrapper
- **Horizontal padding**: `px-6 md:px-12` — consistent across all pages
- **Content width cap for prose**: `max-w-3xl` for hero and intro text blocks
- **Breadcrumb top padding**: `pt-28 pb-4` (accounts for fixed Navbar)

### Two Established Content Page Layout Modes:
1. **Hub / Overview Pages** (`/services/`, `/faq/`, `/about/`):
   - Uses glass-panel CTAs, pill navigations, and flexible category blocks.
2. **Detail / Market Pages** (`/services/[slug]/`, `/locations/[slug]/`):
   - Outer wrapper: `<div className="mx-auto max-w-7xl px-6 py-12 md:px-12 md:py-16">`
   - Content sections separated by `<section className="border-t border-border-color py-12">`
   - Cards: `rounded-2xl border border-border-color bg-secondary-bg p-6`
   - Grids: `grid gap-6 sm:grid-cols-2 lg:grid-cols-3`
   - CTA block: `rounded-2xl bg-secondary-bg p-8 md:p-12`

---

## 5. TYPOGRAPHY

### Font Families
- **Headings**: `font-heading` → `Space_Grotesk`, weights 600/700
- **Body**: `font-body` / `font-inter` → `Inter`, weights 400/500/600

### Heading Sizes
| Element | Classes |
|---|---|
| H1 (hero) | `text-4xl font-heading font-bold leading-tight md:text-6xl` |
| H2 (section) | `text-3xl font-heading font-bold` |
| H3 (card) | `text-lg md:text-xl font-heading font-bold text-heading` |
| Eyebrow | `text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-light-bronze` |

### Body & Labels
- Lead paragraph: `text-lg leading-relaxed text-gray-text`
- Body copy: `text-sm leading-relaxed text-gray-text`
- Card text: `text-xs md:text-sm leading-relaxed text-gray-text`
- Breadcrumbs: `text-sm text-gray-text` with `→` or `/` separators

---

## 6. REUSABLE PAGE PATTERNS

### Breadcrumb Navigation
```tsx
<nav aria-label="Breadcrumb" className="text-sm text-gray-text">
  <ol className="flex flex-wrap gap-2">
    <li><a href="/" className="hover:text-light-bronze">Home</a></li>
    <li aria-hidden="true">→</li>
    <li><a href="/parent/" className="hover:text-light-bronze">Parent</a></li>
    <li aria-hidden="true">→</li>
    <li aria-current="page">Current Page</li>
  </ol>
</nav>
```

### Native HTML Accessible FAQ / Accordion (Zero JS)
```tsx
<details className="group rounded-2xl border border-border-color bg-secondary-bg p-6 transition-colors duration-200 open:border-bronze/40">
  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-lg font-bold text-heading">
    <span>Question Text?</span>
    <span aria-hidden="true" className="shrink-0 text-light-bronze transition-transform duration-300 group-open:rotate-180">
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </span>
  </summary>
  <div className="mt-4 space-y-3 text-sm leading-relaxed text-gray-text border-t border-border-color/50 pt-4">
    <p>Answer paragraph...</p>
  </div>
</details>
```

### Primary Action Button
```tsx
<a href="/contact/" className="rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading hover:shadow-lg hover:shadow-bronze/20 transition-all">
  Talk to Us
</a>
```

### Secondary Outline Button
```tsx
<a href="/locations/" className="rounded-full border border-border-color px-6 py-3 text-sm font-semibold text-gray-text hover:text-heading transition-colors">
  View All Locations
</a>
```

### Standard Content Page CTA Block
```tsx
<section className="rounded-2xl bg-secondary-bg p-8 md:p-12">
  <h2 className="text-3xl font-heading font-bold">Headline</h2>
  <p className="mt-3 max-w-2xl text-gray-text">Descriptive text...</p>
  <a href="/contact/" className="mt-6 inline-block rounded-full bg-gradient-to-r from-bronze to-light-bronze px-6 py-3 text-sm font-semibold text-heading">
    Contact Spot My Business
  </a>
</section>
```

---

## 7. CONTENT STRUCTURE & TONE

### Rules
1. **Exactly one H1 per page.**
2. **Honest, transparent tone**: No superlatives ("best", "guaranteed #1"), no false promises, no artificial urgency.
3. **Explicit remote service positioning**: Always state that Spot My Business operates from Kolkata, West Bengal, serving clients in target markets remotely without physical branch offices.
4. **Anti-Doorway standard**: Every location page must have unique market-specific context, regional consumer behavior, and realistic search challenges.
5. **Client metrics**: Metrics in `ClientShowcase.tsx` represent recorded project snapshot data and must stay byte-for-byte unchanged unless verified replacement data is supplied.

### Prohibited Content
- No invented statistics, percentages, or results
- No Google affiliation or endorsement claims
- No FAQPage schema
- No doorway/programmatic thin location pages
- No pricing packages or fixed fee schedules
- No ranking promises or revenue claims
- No fake branch offices or local addresses outside Kolkata

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
X: https://x.com/spotmybusinesss
Geo: 22.49583535142233, 88.3806285747356
Hours: Mo–Su 00:00–23:59 (Open 24 hours)
Domain: https://www.spotmybusiness.in
```

### Canonical Convention
- Full absolute URL on canonical origin `https://www.spotmybusiness.in` with no trailing slash except root `/` (e.g., `https://www.spotmybusiness.in/locations/bengaluru`, `https://www.spotmybusiness.in/faq`)
- Self-referencing on every indexable page

---

## 9. PERFORMANCE & BUILD CONVENTIONS

- **Static Pre-Rendering (SSG)**: Dynamic routes must export `generateStaticParams()` and set `export const dynamicParams = false;` to guarantee 100% static output and prevent dynamic runtime server compute.
- **Pure Server Components**: Keep `page.tsx` files as Server Components.
- **Images**: Use `next/image` with explicit dimensions and descriptive alt tags.
- **Fonts**: Loaded once in `layout.tsx` via `next/font/google`.
- **Validation**: Always run `npx tsc --noEmit` and `npm run build` after changes to verify zero TypeScript errors and confirm successful static page generation.
