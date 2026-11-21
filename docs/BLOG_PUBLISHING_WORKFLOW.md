# Spot My Business — Repeatable Blog Publishing Workflow

Because `spotmybusiness.in` runs on **Next.js App Router Static Site Generation (SSG)** deployed via GitHub → Vercel (with no third-party CMS or auto-scheduler), every article moves through a disciplined **10-stage manual publishing workflow**.

---

## 10-Stage Article Lifecycle

1. **Topic Approved**: Confirm target service pillar, search intent, funnel stage, and unique angle (avoiding duplicate intent with existing posts).
2. **Keyword Research Completed**: Define primary keyword, 3–5 secondary keywords, and conversational GEO questions.
3. **Primary Source Research Completed**: Verify every statistic, INR benchmark, and Google Business Profile policy against official documentation or completed Gemini Deep Research. Never invent figures.
4. **Draft Prepared (`status: "draft"`)**:
   - Create `src/app/blog/posts/<ArticleName>Post.tsx` as a pure Server Component (no `"use client"`).
   - Register metadata in `src/lib/blog.ts` with `status: "draft"`. Drafts are automatically excluded from `/blog`, `/blog/[slug]`, and `/sitemap.xml` until approved.
5. **Editorial Review**: Remove generic AI filler, check zero-hype compliance (no `#1` ranking or revenue guarantees, no fake reviews/authors, no Spot My Business fixed pricing packages).
6. **Technical SEO & Schema Review**:
   - Exactly one `<h1>`, sequential `<h2>`/`<h3>` hierarchy.
   - Keyboard-scrollable `<div tabIndex={0} role="region" aria-labelledby="...">` around wide `<table>` comparisons.
   - Native `<details>`/`<summary>` FAQ disclosures (never add `FAQPage` JSON-LD).
   - Attribution-tracked CTAs (`/contact?source=blog&article=<slug>`).
7. **Visuals & Metadata Prepared**:
   - Generate 1–2 custom `<45 KB` WebP diagrams (`1200×675`) inside `public/images/blog/` via `scripts/generate-blog-images.js`.
   - Hero image uses `priority` + `fetchPriority="high"`; secondary images use `loading="lazy"` + `decoding="async"`.
   - Verify `metaTitle` (40–60 chars), `metaDescription` (135–160 chars), OG image, and Twitter/X card overrides.
8. **Final Explicit Approval**: Review staging/local output and obtain sign-off before publication.
9. **Published**:
   - Flip `status: "published"` in `src/lib/blog.ts`.
   - Register the component in `src/app/blog/posts/registry.ts`.
   - Add bidirectional internal links from relevant `/services/*` pages and add the article URL to `public/llms.txt`.
   - Run `npx.cmd tsc --noEmit`, `npm.cmd run lint`, and `npm.cmd run build` (`0` errors, confirm static SSG route generation).
   - Commit and push to `origin/main`, then verify Vercel production deployment `state: "success"`.
10. **Performance Monitoring (Day 1 / 30 / 60 / 90)**:
    - Submit the new URL in Google Search Console URL Inspection.
    - Monitor impressions, clicks, average position, CTR, and `/contact?source=blog&article=<slug>` lead attribution.

---

## Quick Checklist for Adding a Future Article

1. Add diagram SVGs to `scripts/generate-blog-images.js` and run `node scripts/generate-blog-images.js`.
2. Add the article entry to `blogPosts` in `src/lib/blog.ts` (`status: "published"` once approved).
3. Create `src/app/blog/posts/<ComponentName>.tsx`.
4. Add `"[slug]": ComponentName` to `src/app/blog/posts/registry.ts`.
5. Add the live URL to `public/llms.txt` and link to it from the matching `/services/*` page.
6. Note: `/blog`, `/blog/[slug]`, `SocialShareBar`, `RelatedArticlesSection`, Twitter/OG cards, `BlogPosting` JSON-LD, and `/sitemap.xml` all update **automatically**.
