# Technical SEO audit: robpalmer.com (2026-10-09)

Technical score: 91/100

## Pass/fail
- Crawlability: PASS. robots.txt serves with a global Allow / and Disallow /api/ only. /_next/ is NOT blocked (confirmed). Sample /_next/static JS and CSS return 200. The Sitemap directive is present. AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, CCBot) are explicitly allowed.
- Sitemap: PASS. /sitemap.xml returns 200 as application/xml with 186 unique URLs. Every one returned 200 with zero redirects (checked all 186). No duplicates. /connect and /create are absent, as intended.
- Indexability: PASS. All sampled pages carry a self-referencing, absolute, non-trailing-slash canonical that matches the sitemap form. Pages sampled: home, /services/direct-response-copywriter, /services, /verticals, a vertical page and a blog post. Each has meta robots "index, follow", a unique title and description, and exactly one h1. /create is noindex,nofollow with a canonical, as intended. /connect is noindex,nofollow.
- Security: PASS. HSTS (2 years, includeSubDomains, preload), CSP, X-Frame-Options DENY with frame-ancestors none, nosniff, Referrer-Policy and Permissions-Policy are all set.
- URL structure and redirects: PASS with an accepted quirk. Every redirect is a 308.
  - http://robpalmer.com/ goes to https://robpalmer.com/ in 1 hop.
  - https://www.robpalmer.com/ goes to the apex in 1 hop.
  - http://www.robpalmer.com/ goes to https://www.robpalmer.com/ and then to the apex (2 hops, normal).
  - A trailing-slash URL goes to the non-slash URL in 1 hop.
  - Not tested: http://www plus a trailing slash, which would be 3 hops. The known Vercel quirk, accepted.
- 404 handling: PASS. A bad URL returns a real 404 status with a custom page.
- Mobile: PASS. The viewport tag is width=device-width, initial-scale=1 and the html lang is "en". I did not run a rendering test.
- hreflang: PASS. None present, which is correct for a single-locale site. No errors.
- Structured data: PASS on detection. JSON-LD is present on all pages (6 to 12 blocks per page). I did not validate it in the Rich Results Test.
- JS rendering: PASS. The App Router pages are prerendered (x-nextjs-prerender: 1), the h1 and meta tags are in the raw HTML, and the homepage is served from the Vercel cache.
- Core Web Vitals (source-level only): The homepage HTML is 207 KB (uncompressed), which is heavy. 13 script tags. CSP allows GTM, Calendly, Sentry and Vercel analytics, so third-party JS could hurt INP. Lab CWV data was not measured. Run PageSpeed Insights or check CrUX.
- IndexNow: Not checked.

## Issues

### Critical
None.

### High
None.

### Medium
1. The /call page is indexable, canonical and in the sitemap at priority 0.9 (the sitemap.ts line is `${BASE_URL}/call`). It is a booking page, so it is thin and low search value. It can compete with or dilute service pages in the index, and the 0.9 priority is misleading. The /call vs /contact decision is already pending in the backlog. Fix: either keep it and drop the priority, or set noindex and remove it from the sitemap.
2. The homepage is a 207 KB HTML payload with 8 JSON-LD blocks, and similar pages carry 12. Check for redundant or duplicated schema (for example Organization and Person repeated per page). Trimming the payload helps LCP on mobile.

### Low
1. The sitemap has no lastmod on 36 of 186 URLs (150 lastmod tags against 186 URLs). Google uses lastmod only when it is accurate. Add it to the remaining URLs, or confirm the 36 are static pages. Priority and changefreq are ignored by Google and are harmless.
2. The 404 page emits two robots meta tags ("noindex" and "noindex, nofollow"), and its description is the generic site description. Harmless, but the page should emit one tag.
3. Homepage canonical and og:url are `https://robpalmer.com` with no trailing slash. This is consistent with the sitemap, so no action needed. Noted only for completeness.
4. The robots.txt `User-Agent:` capitalisation is non-standard but parsed fine. Each AI bot entry is redundant with `*` (Allow: /). Harmless, and it is useful as explicit documentation.
5. Redirect chains of 2 hops (www to https) are the accepted Vercel quirk. No action.
6. CSP uses 'unsafe-inline' for scripts. This is a security-hardening opportunity, not an SEO issue.

## Crawl traps
None found. The only query-parameter test (?utm_source=x) returned 200, and the canonical stays clean. /api/ is disallowed. No faceted navigation or infinite calendars were observed in the sitemap. Blog pages (151 URLs) are all flat, with no pagination URLs in the sitemap.

## Scope notes
Checked all 186 sitemap URLs for status and redirects, plus headers and tags on 9 sampled pages. Pace: 0.3 to 1s between requests. Not covered: rendered-page testing, Search Console coverage, a full link crawl for broken internal links or orphan pages, IndexNow, and real CWV data.
