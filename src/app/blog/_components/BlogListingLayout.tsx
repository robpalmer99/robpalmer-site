import { Suspense } from 'react'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { BlogGrid } from '@/components/blocks/BlogGrid'
import type { BlogPostMeta } from '@/lib/mdx'
import type { SiteSearchResult } from '@/lib/search'

interface BlogListingLayoutProps {
  posts: BlogPostMeta[]
  allPosts: BlogPostMeta[]
  siteSearchIndex: SiteSearchResult[]
  currentPage: number
  totalPages: number
}

export function BlogListingLayout({ posts, allPosts, siteSearchIndex, currentPage, totalPages }: BlogListingLayoutProps) {
  return (
    <>
      <Hero
        variant="page"
        headline="Direct-Response Copywriting Insights"
        subheadline="Expert insights on VSLs, sales funnels, email marketing, and AI-assisted copywriting from a 40-year veteran."
      />
      <Breadcrumbs items={[{ label: 'Blog' }]} />

      <Section>
        <Container>
          <Suspense fallback={null}>
            <BlogGrid
              posts={posts}
              allPosts={allPosts}
              siteSearchIndex={siteSearchIndex}
              currentPage={currentPage}
              totalPages={totalPages}
            />
          </Suspense>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}
