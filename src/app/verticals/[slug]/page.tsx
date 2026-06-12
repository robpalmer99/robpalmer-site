import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { DetailPageLayout } from '@/components/blocks/DetailPageLayout'
import { SITE_URL } from '@/lib/constants'
import { getVerticalBySlug, getAllVerticalSlugs, verticals as allVerticals } from '@/app/verticals/_data/verticals'
import { services } from '@/app/services/_data/services'

interface VerticalPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllVerticalSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: VerticalPageProps): Promise<Metadata> {
  const { slug } = await params
  const vertical = getVerticalBySlug(slug)
  if (!vertical) return {}

  return {
    title: vertical.metaTitle,
    description: vertical.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/verticals/${slug}`,
    },
    openGraph: {
      title: vertical.metaTitle,
      description: vertical.metaDescription,
      url: `${SITE_URL}/verticals/${slug}`,
      images: [{ url: `${SITE_URL}${vertical.heroImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: vertical.metaTitle,
      description: vertical.metaDescription,
      images: [`${SITE_URL}${vertical.heroImage}`],
    },
  }
}

export default async function VerticalPage({ params }: VerticalPageProps) {
  const { slug } = await params
  const vertical = getVerticalBySlug(slug)

  if (!vertical) {
    notFound()
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: vertical.title,
    description: vertical.metaDescription,
    provider: {
      '@type': 'Person',
      name: 'Rob Palmer',
      url: SITE_URL,
    },
    url: `${SITE_URL}/verticals/${slug}`,
    areaServed: 'Worldwide',
    serviceType: 'Direct-Response Copywriting',
  }

  const faqSchema = vertical.faqs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: vertical.faqs.map((faq) => ({
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
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <DetailPageLayout
        headline={vertical.headline}
        subheadline={vertical.subheadline}
        heroCta={vertical.heroCta ?? { label: 'Book a Strategy Call', href: '/call' }}
        breadcrumbParent={{ label: 'Verticals', href: '/verticals' }}
        breadcrumbLabel={vertical.title}
        heroImage={vertical.heroImage}
        heroImageAlt={vertical.heroImageAlt}
        heroStats={vertical.heroStats}
        credentialBar={vertical.credentialBar}
        definition={vertical.definition}
        sections={vertical.sections}
        caseStudies={vertical.caseStudies}
        deliverablesHeading={vertical.deliverablesHeading}
        deliverablesSubtext={vertical.deliverablesSubtext}
        deliverables={vertical.deliverables}
        midCtaHeadline={vertical.midCta?.headline || `Ready to scale your ${vertical.title.toLowerCase().replace(' copywriter', '')} campaigns?`}
        midCtaSubtext={vertical.midCta?.subtext || 'Book a free strategy call to discuss your project.'}
        testimonialIds={vertical.testimonialIds}
        portfolioItems={vertical.portfolioItems}
        faqs={vertical.faqs}
        relatedLinksSlot={
          <>
            {/* ───────────────────────────── Related Services ───────────────────────────── */}
            <Section
              variant={vertical.portfolioItems.length > 0 ? 'default' : 'alt'}
              divider
            >
              <Container>
                <div className="max-w-4xl mx-auto">
                  <FadeIn>
                    <div className="text-center mb-10">
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                        Services for Your Vertical
                      </h2>
                      <p className="mt-3 text-lg text-ink-700 font-body">
                        I offer a full range of direct-response copywriting services
                        tailored to your niche.
                      </p>
                    </div>
                  </FadeIn>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {(vertical.relatedServices
                      ? services.filter((s) =>
                          vertical.relatedServices!.includes(s.slug)
                        )
                      : services.slice(0, 4)
                    ).map((svc, index) => (
                      <FadeIn key={svc.slug} delay={index * 80}>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="group block rounded-xl border border-paper-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-1"
                        >
                          <span className="font-heading text-sm font-semibold text-ink-950 group-hover:text-gold-600 transition-colors">
                            {svc.title}
                          </span>
                        </Link>
                      </FadeIn>
                    ))}
                  </div>
                  <FadeIn>
                    <div className="text-center mt-6">
                      <Button href="/services" variant="outline">
                        View All Services
                      </Button>
                    </div>
                  </FadeIn>
                </div>
              </Container>
            </Section>

            {/* ───────────────────────────── Related Verticals ───────────────────────────── */}
            {vertical.relatedVerticals && vertical.relatedVerticals.length > 0 && (
              <Section divider>
                <Container>
                  <div className="max-w-4xl mx-auto">
                    <FadeIn>
                      <div className="text-center mb-10">
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                          Related Verticals
                        </h2>
                        <p className="mt-3 text-lg text-ink-700 font-body">
                          Explore other industries where I deliver results-driven copy.
                        </p>
                      </div>
                    </FadeIn>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {vertical.relatedVerticals
                        .map((slug) => allVerticals.find((v) => v.slug === slug))
                        .filter(Boolean)
                        .map((related, index) => (
                          <FadeIn key={related!.slug} delay={index * 80}>
                            <Link
                              href={`/verticals/${related!.slug}`}
                              className="group block rounded-xl border border-paper-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-1"
                            >
                              <span className="font-heading text-sm font-semibold text-ink-950 group-hover:text-gold-600 transition-colors">
                                {related!.title}
                              </span>
                            </Link>
                          </FadeIn>
                        ))}
                    </div>
                    <FadeIn>
                      <div className="text-center mt-6">
                        <Button href="/verticals" variant="outline">
                          View All Verticals
                        </Button>
                      </div>
                    </FadeIn>
                  </div>
                </Container>
              </Section>
            )}
          </>
        }
      />
    </>
  )
}
