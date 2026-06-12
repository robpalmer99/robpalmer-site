import type { MetadataRoute } from 'next'

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
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://robpalmer.com/sitemap.xml',
  }
}
