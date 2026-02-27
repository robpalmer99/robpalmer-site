import type { Metadata } from 'next'
import { BlogListingLayout } from './_components/BlogListingLayout'
import { SITE_URL } from '@/lib/constants'
import { getPaginatedBlogPosts, getAllBlogPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog | Direct-Response Copywriting Insights',
  description:
    'Expert insights on direct-response copywriting, VSLs, sales funnels, email marketing, and AI-assisted copywriting from a 30-year veteran.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
}

export default function BlogPage() {
  const { posts, totalPages } = getPaginatedBlogPosts(1)
  const allPosts = getAllBlogPosts()

  return (
    <BlogListingLayout
      posts={posts}
      allPosts={allPosts}
      currentPage={1}
      totalPages={totalPages}
    />
  )
}
