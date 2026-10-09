import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'
import { getAllServiceSlugs } from '@/app/services/_data/services'
import { getAllVerticalSlugs } from '@/app/verticals/_data/verticals'
import { getAllBlogPosts } from '@/lib/mdx'

const BASE_URL = SITE_URL

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
  ]

  const servicePages: MetadataRoute.Sitemap = getAllServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const verticalPages: MetadataRoute.Sitemap = getAllVerticalSlugs().map((slug) => ({
    url: `${BASE_URL}/verticals/${slug}`,
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
