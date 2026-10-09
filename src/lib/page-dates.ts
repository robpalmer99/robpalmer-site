/**
 * Last substantive content change per page, from git history of the page/data
 * files — NOT build time (a fake lastmod teaches Google to ignore the field).
 * Consumed by sitemap.ts (<lastmod>) and the service/vertical page templates
 * (WebPage dateModified), so the sitemap and the on-page schema always agree.
 * Bump the relevant date whenever a page's copy actually changes.
 */

export const STATIC_UPDATED: Record<string, string> = {
  '': '2026-06-12',
  '/about': '2026-06-12',
  '/services': '2026-03-01',
  '/verticals': '2026-03-01',
  '/case-studies': '2026-06-11',
  '/case-studies/belron-safelite-523m-campaign': '2026-06-12',
  '/case-studies/apple-direct-mail-campaign': '2026-06-12',
  '/testimonials': '2026-03-12',
  '/portfolio': '2026-10-09',
  '/blog': '2026-06-12',
  '/contact': '2026-06-11',
  '/call': '2026-06-11',
  '/tools': '2026-06-11',
  '/tools/headline-analyzer': '2026-06-12',
  '/tools/copywriting-rates-calculator': '2026-06-12',
  '/privacy': '2026-02-28',
  '/terms': '2026-02-28',
}

// services.ts: all entries last swept 2026-05-07 (hype-word audit); later
// targeted edits override below.
const SERVICE_UPDATED_DEFAULT = '2026-05-07'
const SERVICE_UPDATED: Record<string, string> = {
  'direct-response-copywriter': '2026-10-09',
  'ai-marketing-consultant': '2026-09-22',
  'conversion-rate-optimization': '2026-09-22',
}

// verticals.ts: all entries last touched 2026-06-11 (hero CTA change).
const VERTICAL_UPDATED_DEFAULT = '2026-06-11'
const VERTICAL_UPDATED: Record<string, string> = {
  'ecommerce-dtc-copywriter': '2026-09-22',
}

export function serviceUpdated(slug: string): string {
  return SERVICE_UPDATED[slug] || SERVICE_UPDATED_DEFAULT
}

export function verticalUpdated(slug: string): string {
  return VERTICAL_UPDATED[slug] || VERTICAL_UPDATED_DEFAULT
}
