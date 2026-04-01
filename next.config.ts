import type { NextConfig } from 'next'
import createMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://assets.calendly.com https://va.vercel-scripts.com https://vitals.vercel-insights.com https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://calendly.com https://assets.calendly.com https://va.vercel-scripts.com https://vitals.vercel-insights.com https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://www.googletagmanager.com",
      "frame-src https://calendly.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/downloads/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  async redirects() {
    const oldBlogSlugs = [
      '/10-ways-to-halve-your-google-ad-spend-and-double-your-leads',
      '/forget-features-benefits-to-sell-more-focus-on-this-instead',
      '/how-to-deploy-the-pyramid-of-promises-to-maximize-trust-and-sales',
      '/how-to-sell-with-stories-turning-emotion-into-cash-in-the-bank',
      '/borrow-the-money-making-secrets-of-political-fundraisers',
      '/how-to-out-compete-big-brands-without-losing-your-shirt',
      '/the-ultimate-writers-guide-to-good-style',
      '/are-you-making-these-mistakes-in-email-marketing',
      '/why-you-should-love-saturated-markets-dive-right-in',
      '/customer-lifetime-value-win-the-facebook-ads-auction-every-time-2',
      '/aerodynamic-copywriting',
      '/copywriter-101-killer-copywriting-strategies-that-make-more-sales',
      '/the-p-for-persuasion-copywriting-system-a-principle-that-pimps-your-profits',
      '/nepal',
      '/secret-weapon',
      '/podcast-guest',
      '/sales-funnel-optimization-the-weakest-link-problem',
      '/how-i-became-the-worlds-first-blogger-digital-nomad-pioneer',
    ]

    return [
      {
        source: '/industries',
        destination: '/verticals',
        permanent: true,
      },
      {
        source: '/industries/:slug',
        destination: '/verticals/:slug',
        permanent: true,
      },
      // Old WordPress tag pages
      {
        source: '/tag/:path*',
        destination: '/',
        permanent: true,
      },
      // Old WordPress category pages
      {
        source: '/category/:path*',
        destination: '/',
        permanent: true,
      },
      // Old blog pagination
      {
        source: '/blog/page/:path*',
        destination: '/blog',
        permanent: true,
      },
      // Old blog post URLs that were under /blog/ path
      {
        source: '/blog/ai-sales-page-generator',
        destination: '/blog',
        permanent: true,
      },
      // Old WordPress pages with traffic — redirect to best equivalent
      {
        source: '/17-proven-bullet-point-tactics-that-skyrocket-engagement-sales',
        destination: '/blog/copywriting-bullet-points',
        permanent: true,
      },
      {
        source: '/how-a-secret-weapon-hit-523m-in-sales-saved-hundreds-of-lives',
        destination: '/case-studies/belron-safelite-523m-campaign',
        permanent: true,
      },
      {
        source: '/apple',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home-cloned-at-2023-06-04-001834',
        destination: '/',
        permanent: true,
      },
      // Old blog posts and pages
      ...oldBlogSlugs.map((slug) => ({
        source: slug,
        destination: '/',
        permanent: true as const,
      })),
    ]
  },
}

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
})

export default withMDX(nextConfig)
