import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getAllServiceSlugs } from '@/app/services/_data/services'
import { getAllVerticalSlugs } from '@/app/verticals/_data/verticals'
import { getAllBlogPosts } from '@/lib/mdx'

const BASE_URL = SITE_URL

// Last substantive content change per page, from git history of the page/data
// files — NOT build time (a fake lastmod teaches Google to ignore the field).
// Bump the relevant date whenever a page's copy actually changes.
const STATIC_UPDATED: Record<string, string> = {
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/verticals`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/case-studies`, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${BASE_URL}/case-studies/belron-safelite-523m-campaign`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies/apple-direct-mail-campaign`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${BASE_URL}/testimonials`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/portfolio`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/call`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/tools`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/headline-analyzer`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/tools/copywriting-rates-calculator`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/terms`, changeFrequency: 'yearly', priority: 0.3 },
  ].map((page) => {
    const path = page.url.slice(BASE_URL.length)
    const updated = STATIC_UPDATED[path]
    return updated ? { ...page, lastModified: new Date(updated) } : page
  })

  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: new Date(SERVICE_UPDATED[slug] || SERVICE_UPDATED_DEFAULT),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const verticalPages: MetadataRoute.Sitemap = getAllVerticalSlugs().map((slug) => ({
    url: `${BASE_URL}/verticals/${slug}`,
    lastModified: new Date(VERTICAL_UPDATED[slug] || VERTICAL_UPDATED_DEFAULT),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = getAllBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updated
      ? new Date(post.updated)
      : post.date
        ? new Date(post.date)
        : now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...verticalPages, ...blogPages]
}
