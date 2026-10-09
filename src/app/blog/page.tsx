import type { Metadata } from 'next'
import { BlogListingLayout } from './_components/BlogListingLayout'
import { SITE_URL } from '@/lib/constants'
import { getPaginatedBlogPosts, getAllBlogListings, toListing } from '@/lib/mdx'
import { getSiteSearchIndex } from '@/lib/search'

export const metadata: Metadata = {
  title: 'Blog | Direct-Response Copywriting Insights',
  description:
    'Expert insights on direct-response copywriting, VSLs, sales funnels, email marketing, and AI-assisted copywriting from a 40-year veteran.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
}

export default function BlogPage() {
  const { posts, totalPages } = getPaginatedBlogPosts(1)
  // Slim listing shape — full BlogPostMeta serialized into the client grid
  // is ~850KB of HTML payload (mostly per-post FAQs the grid never shows)
  const allPosts = getAllBlogListings()
  const siteSearchIndex = getSiteSearchIndex()

  return (
    <BlogListingLayout
      posts={posts.map(toListing)}
      allPosts={allPosts}
      siteSearchIndex={siteSearchIndex}
      currentPage={1}
      totalPages={totalPages}
    />
  )
}
