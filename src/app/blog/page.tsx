import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { BlogPostCard } from '@/components/blocks/BlogPostCard'
import { SITE_URL } from '@/lib/constants'
import { getAllBlogPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog | Direct-Response Copywriting Insights',
  description:
    'Expert insights on direct-response copywriting, VSLs, sales funnels, email marketing, and AI-assisted copywriting from a 30-year veteran.',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

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
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogPostCard
                  key={post.slug}
                  title={post.title}
                  slug={post.slug}
                  excerpt={post.description}
                  date={post.date}
                  category={post.category}
                  readingTime={post.readingTime}
                  heroImage={post.heroImage}
                  heroAlt={post.heroAlt}
                />
              ))}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto text-center py-12">
              <p className="text-lg text-paper-600 font-body">
                New content coming soon. In the meantime, check out the{' '}
                <a
                  href="/case-studies"
                  className="text-gold-500 hover:text-gold-600 font-semibold"
                >
                  case studies
                </a>{' '}
                to see the results behind the words.
              </p>
            </div>
          )}
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}
