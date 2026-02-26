import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Badge } from '@/components/ui/Badge'
import { JsonLd } from '@/components/seo/JsonLd'
import { DefinitionBox } from '@/components/mdx/DefinitionBox'
import { KeyTakeaways } from '@/components/mdx/KeyTakeaways'
import { FAQSection, FAQItem } from '@/components/mdx/FAQ'
import { ComparisonTable } from '@/components/mdx/ComparisonTable'
import { ExpertQuote } from '@/components/mdx/ExpertQuote'
import { BlogPostCard } from '@/components/blocks/BlogPostCard'
import { getBlogPostContent, getAllBlogSlugs, getRelatedPosts } from '@/lib/mdx'
import { formatDate } from '@/lib/utils'
import { SITE_URL } from '@/lib/constants'

const mdxComponents = {
  DefinitionBox,
  KeyTakeaways,
  FAQSection,
  FAQItem,
  ComparisonTable,
  ExpertQuote,
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPostContent(slug)
  if (!post) return {}

  return {
    title: post.meta.title,
    description: post.meta.description,
    alternates: {
      canonical: `${SITE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.meta.title,
      description: post.meta.description,
      type: 'article',
      publishedTime: post.meta.date,
      authors: ['Rob Palmer'],
      tags: post.meta.tags,
      ...(post.meta.heroImage && {
        images: [{ url: `${SITE_URL}${post.meta.heroImage}`, width: 1200, height: 630 }],
      }),
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getBlogPostContent(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.meta.title,
    description: post.meta.description,
    datePublished: post.meta.date,
    dateModified: post.meta.date,
    author: {
      '@type': 'Person',
      name: 'Rob Palmer',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Person',
      name: 'Rob Palmer',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
  }

  const faqSchema = post.meta.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.meta.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null

  return (
    <>
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Hero variant="minimal" headline={post.meta.title} />
      <Breadcrumbs
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.meta.title },
        ]}
      />

      <Section>
        <Container>
          <article className="max-w-3xl mx-auto">
            {/* Hero Image */}
            {post.meta.heroImage && (
              <div className="mb-8 -mx-4 sm:mx-0">
                <Image
                  src={post.meta.heroImage}
                  alt={post.meta.heroAlt || post.meta.title}
                  width={1200}
                  height={630}
                  sizes="(max-width: 768px) 100vw, 768px"
                  className="w-full h-auto rounded-xl object-cover"
                  priority
                />
              </div>
            )}

            {/* Post Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-8 pb-8 border-b border-paper-200">
              <Badge variant="gold">{post.meta.category}</Badge>
              <span className="text-sm text-paper-600 font-heading">
                {post.meta.readingTime}
              </span>
              <span className="text-sm text-paper-600 font-heading">•</span>
              <time className="text-sm text-paper-600 font-heading">
                {formatDate(post.meta.date)}
              </time>
            </div>

            {/* Post Content */}
            <div className="prose prose-lg max-w-none font-body">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [
                      rehypeSlug,
                      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
                    ],
                  },
                }}
              />
            </div>

            {/* Author Bio */}
            <div className="mt-12 pt-8 border-t border-paper-200">
              <div className="flex items-start gap-4">
                <Image
                  src="/images/headshots/rob-palmer-clean.png"
                  alt="Rob Palmer"
                  width={64}
                  height={64}
                  sizes="64px"
                  className="w-16 h-16 rounded-full object-cover shrink-0"
                />
                <div>
                  <h3 className="font-heading font-bold text-ink-950">
                    Rob Palmer
                  </h3>
                  <p className="text-sm text-paper-600 font-body mt-1">
                    Rob Palmer is a veteran direct-response copywriter with 30+ years of experience and $523M+ in tracked results. His clients include Apple, IBM, Microsoft, and Citibank. He specializes in VSLs, sales funnels, and email sequences for ClickBank and DTC brands, leveraging AI to amplify battle-tested direct-response principles.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
              <div className="mt-12 pt-8 border-t border-paper-200">
                <h3 className="font-heading text-lg font-bold text-ink-950 mb-6">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {relatedPosts.map((related) => (
                    <BlogPostCard
                      key={related.slug}
                      title={related.title}
                      slug={related.slug}
                      excerpt={related.description}
                      date={related.date}
                      category={related.category}
                      readingTime={related.readingTime}
                      heroImage={related.heroImage}
                      heroAlt={related.heroAlt}
                    />
                  ))}
                </div>
              </div>
            )}
          </article>
        </Container>
      </Section>

      <CTABanner
        headline="Need copy that converts?"
        subtext="Book a free strategy call to discuss your project."
      />
    </>
  )
}
