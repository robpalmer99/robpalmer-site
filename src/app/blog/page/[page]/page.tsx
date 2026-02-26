import type { Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { BlogListingLayout } from '../../_components/BlogListingLayout'
import { SITE_URL } from '@/lib/constants'
import { getPaginatedBlogPosts, getAllBlogPosts, POSTS_PER_PAGE } from '@/lib/mdx'

interface PaginatedBlogPageProps {
  params: Promise<{ page: string }>
}

export function generateStaticParams() {
  const allPosts = getAllBlogPosts()
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE))

  // Generate pages 2 through N (page 1 is handled by /blog)
  return Array.from({ length: totalPages - 1 }, (_, i) => ({
    page: String(i + 2),
  }))
}

export async function generateMetadata({ params }: PaginatedBlogPageProps): Promise<Metadata> {
  const { page } = await params
  const pageNum = parseInt(page, 10)

  return {
    title: `Blog — Page ${pageNum} | Direct-Response Copywriting Insights`,
    description:
      'Expert insights on direct-response copywriting, VSLs, sales funnels, email marketing, and AI-assisted copywriting from a 30-year veteran.',
    alternates: {
      canonical: `${SITE_URL}/blog/page/${pageNum}`,
    },
  }
}

export default async function PaginatedBlogPage({ params }: PaginatedBlogPageProps) {
  const { page } = await params
  const pageNum = parseInt(page, 10)

  // Redirect page 1 to canonical /blog
  if (pageNum === 1) {
    redirect('/blog')
  }

  // Validate page number
  if (isNaN(pageNum) || pageNum < 1) {
    notFound()
  }

  const { posts, totalPages, currentPage } = getPaginatedBlogPosts(pageNum)

  // Out of range
  if (pageNum > totalPages) {
    notFound()
  }

  return (
    <BlogListingLayout
      posts={posts}
      currentPage={currentPage}
      totalPages={totalPages}
    />
  )
}
