import { Suspense } from 'react'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { BlogGrid } from '@/components/blocks/BlogGrid'
import type { BlogPostMeta } from '@/lib/mdx'

interface BlogListingLayoutProps {
  posts: BlogPostMeta[]
  currentPage: number
  totalPages: number
}

export function BlogListingLayout({ posts, currentPage, totalPages }: BlogListingLayoutProps) {
  return (
    <>
      <Hero
        variant="page"
        headline="Direct-Response Copywriting Insights"
        subheadline="Expert insights on VSLs, sales funnels, email marketing, and AI-assisted copywriting from a 30-year veteran."
      />
      <Breadcrumbs items={[{ label: 'Blog' }]} />

      <Section>
        <Container>
          <Suspense>
            <BlogGrid
              posts={posts}
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
