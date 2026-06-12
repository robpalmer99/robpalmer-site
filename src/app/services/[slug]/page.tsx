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
import { getServiceBySlug, getAllServiceSlugs, services as allServices } from '../_data/services'
import { verticals } from '@/app/verticals/_data/verticals'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${SITE_URL}/services/${slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${slug}`,
      images: [{ url: `${SITE_URL}${service.heroImage}`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${SITE_URL}${service.heroImage}`],
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.metaDescription,
    provider: {
      '@type': 'Person',
      name: 'Rob Palmer',
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/${slug}`,
    areaServed: 'Worldwide',
    serviceType: 'Direct-Response Copywriting',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <DetailPageLayout
        headline={service.headline}
        subheadline={service.subheadline}
        heroCta={{ label: 'Book a Strategy Call', href: '/call' }}
        breadcrumbParent={{ label: 'Services', href: '/services' }}
        breadcrumbLabel={service.title}
        heroImage={service.heroImage}
        heroImageAlt={service.heroImageAlt}
        heroStats={service.heroStats}
        credentialBar={service.credentialBar}
        definition={service.definition}
        sections={service.sections}
        caseStudies={service.caseStudies}
        deliverablesHeading={service.deliverablesHeading}
        deliverablesSubtext={service.deliverablesSubtext}
        deliverables={service.deliverables}
        midCtaHeadline={service.midCta?.headline || `Ready to hire a ${service.title.toLowerCase()}?`}
        midCtaSubtext={service.midCta?.subtext || 'Book a free strategy call to discuss your project.'}
        testimonialIds={service.testimonialIds}
        fadeTestimonialsLink
        portfolioItems={service.portfolioItems}
        faqs={service.faqs}
        relatedLinksSlot={
          <>
            {/* ───────────────────────────── Related Services ───────────────────────────── */}
            {service.relatedServices && service.relatedServices.length > 0 && (
              <Section
                variant={service.portfolioItems.length > 0 ? 'default' : 'alt'}
                divider
              >
                <Container>
                  <div className="max-w-4xl mx-auto">
                    <FadeIn>
                      <div className="text-center mb-10">
                        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                          Related Services
                        </h2>
                        <p className="mt-3 text-lg text-ink-700 font-body">
                          Other direct-response copywriting services that complement{' '}
                          {service.title.toLowerCase()}.
                        </p>
                      </div>
                    </FadeIn>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {service.relatedServices
                        .map((slug) => allServices.find((s) => s.slug === slug))
                        .filter(Boolean)
                        .map((related, index) => (
                          <FadeIn key={related!.slug} delay={index * 80}>
                            <Link
                              href={`/services/${related!.slug}`}
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
                        <Button href="/services" variant="outline">
                          View All Services
                        </Button>
                      </div>
                    </FadeIn>
                  </div>
                </Container>
              </Section>
            )}

            {/* ───────────────────────────── Related Verticals ───────────────────────────── */}
            <Section variant="alt" divider>
              <Container>
                <div className="max-w-4xl mx-auto">
                  <FadeIn>
                    <div className="text-center mb-10">
                      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                        Verticals I Write For
                      </h2>
                      <p className="mt-3 text-lg text-ink-700 font-body">
                        Deep experience across verticals that demand direct-response
                        excellence.
                      </p>
                    </div>
                  </FadeIn>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {(service.relatedVerticals
                      ? verticals.filter((v) =>
                          service.relatedVerticals!.includes(v.slug)
                        )
                      : verticals
                    ).map((vertical, index) => (
                      <FadeIn key={vertical.slug} delay={index * 80}>
                        <Link
                          href={`/verticals/${vertical.slug}`}
                          className="group block rounded-xl border border-paper-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-1"
                        >
                          <span className="font-heading text-sm font-semibold text-ink-950 group-hover:text-gold-600 transition-colors">
                            {vertical.title}
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
          </>
        }
      />
    </>
  )
}
