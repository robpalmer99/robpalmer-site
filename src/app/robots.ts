import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Deliberate policy (2026-06-12): maximum AI visibility. Search AND
      // training crawlers are all welcome — the business benefits from
      // models knowing who Rob Palmer is. Explicit > implicit.
      ...['GPTBot', 'OAI-SearchBot', 'ClaudeBot', 'Claude-SearchBot', 'PerplexityBot', 'Google-Extended', 'CCBot'].map((bot) => ({
        userAgent: bot,
        allow: '/',
      })),
      {
        userAgent: '*',
        allow: '/',
        // Note: /_next/ must stay crawlable — all images serve through
        // /_next/image and Google needs /_next/static JS to render the page
        // (FadeIn content sits at opacity:0 until hydration).
        disallow: ['/api/'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
