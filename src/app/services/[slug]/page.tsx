import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { CTABanner } from '@/components/blocks/CTABanner'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { DefinitionBox } from '@/components/ui/DefinitionBox'
import { SITE_URL, TESTIMONIAL_COUNT } from '@/lib/constants'
import { testimonials } from '@/content/testimonials'
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

  // Get testimonials for this service
  const serviceTestimonials = service.testimonialIds
    .map((id) => testimonials.find((t) => t.id === id))
    .filter(Boolean)

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Hero
        variant="page"
        headline={service.headline}
        subheadline={service.subheadline}
        cta={{ label: 'Book a Call', href: '/contact' }}
      />
      <Breadcrumbs
        items={[
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
      />

      {/* ───────────────────────────── Hero Stats Bar ───────────────────────────── */}
      {service.heroStats && (
        <section className="bg-ink-950 text-white noise-overlay py-10 sm:py-12">
          <Container>
            <FadeIn duration={800}>
              <div className="max-w-4xl mx-auto text-center">
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gold-400">
                  {service.heroStats.primary.value}
                </div>
                <div className="mt-1 text-sm sm:text-base text-paper-400 font-body uppercase tracking-wide">
                  {service.heroStats.primary.label}
                </div>
                {service.heroStats.secondary && service.heroStats.secondary.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                    {service.heroStats.secondary.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                          {stat.value}
                        </div>
                        <div className="mt-0.5 text-xs sm:text-sm text-paper-400 font-body uppercase tracking-wide">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </FadeIn>
          </Container>
        </section>
      )}

      {/* ───────────────────────────── Hero Image ───────────────────────────── */}
      <section className="bg-paper-50">
        <Container>
          <FadeIn duration={800}>
            <div className="max-w-4xl mx-auto -mt-4 pb-8">
              <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 896px"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ───────────────────────────── Credential Bar or Definition Box ───────────────────────────── */}
      {service.credentialBar ? (
        <Section>
          <Container>
            <FadeIn>
              <div className="max-w-4xl mx-auto text-center">
                {service.credentialBar.heading && (
                  <p className="text-sm text-paper-600 font-body uppercase tracking-wider mb-4">
                    {service.credentialBar.heading}
                  </p>
                )}
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {service.credentialBar.items.map((item, index) => (
                    <Badge key={index} variant="gold">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          </Container>
        </Section>
      ) : service.definition ? (
        <Section>
          <Container>
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <DefinitionBox
                  term={service.definition.term}
                  definition={service.definition.text}
                />
              </div>
            </FadeIn>
          </Container>
        </Section>
      ) : null}

      {/* ───────────────────────────── Main Content Sections ───────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {service.sections.map((section, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                    {section.heading}
                  </h2>
                  <p
                    className="mt-4 text-lg text-ink-700 leading-relaxed font-body [&_a]:text-gold-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold-700"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                  {section.bullets && (
                    <ul role="list" className="mt-4 space-y-2">
                      {section.bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-lg text-ink-700 font-body leading-relaxed"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-400" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Case Studies ───────────────────────────── */}
      {service.caseStudies && service.caseStudies.length > 0 && (
        <Section variant="gold">
          <Container>
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="text-center mb-10">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                    Proven Results
                  </h2>
                  <p className="mt-3 text-lg text-ink-700 font-body">
                    Real numbers from real offers.
                  </p>
                </div>
              </FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.caseStudies.map((study, index) => (
                  <FadeIn key={index} delay={index * 80} className="h-full">
                    <div className="rounded-xl border border-paper-200 bg-white p-6 shadow-sm h-full text-center">
                      <Badge variant="gold">{study.category}</Badge>
                      <h3 className="mt-3 font-heading text-lg font-bold text-ink-950">
                        {study.name}
                      </h3>
                      <div className="mt-2 text-3xl sm:text-4xl font-heading font-bold text-gold-600">
                        {study.metric}
                      </div>
                      {study.detail && (
                        <p className="mt-2 text-sm text-ink-700 font-body">
                          {study.detail}
                        </p>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ───────────────────────────── Key Deliverables ───────────────────────────── */}
      <Section variant="alt" divider>
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                  {service.deliverablesHeading || 'What You Get'}
                </h2>
                <p className="mt-3 text-lg text-ink-700 font-body">
                  {service.deliverablesSubtext || 'Every deliverable is built on proven direct-response frameworks — not templates.'}
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.deliverables.map((item, index) => (
                <FadeIn key={index} delay={index * 80} className="h-full">
                  <div className="rounded-xl border border-paper-200 bg-white p-5 shadow-sm border-t-2 border-t-gold-400/40 h-full">
                    <h3 className="font-heading text-base font-bold text-ink-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-700 font-body leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Mid-page CTA ───────────────────────────── */}
      <CTABanner
        headline={service.midCta?.headline || `Ready to hire a ${service.title.toLowerCase()}?`}
        subtext={service.midCta?.subtext || 'Book a free strategy call to discuss your project.'}
        variant="gold"
      />

      {/* ───────────────────────────── Service Testimonials ───────────────────────────── */}
      {serviceTestimonials.length > 0 && (
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="text-center mb-10">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                    What Clients Say
                  </h2>
                </div>
              </FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceTestimonials.map(
                  (testimonial, index) =>
                    testimonial && (
                      <FadeIn key={testimonial.id} delay={index * 100} className="h-full">
                        <TestimonialCard
                          testimonial={testimonial}
                        />
                      </FadeIn>
                    )
                )}
              </div>
              <FadeIn>
                <div className="text-center mt-8">
                  <Link
                    href="/testimonials"
                    className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                  >
                    Read all {TESTIMONIAL_COUNT} testimonials
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>
      )}

      {/* ───────────────────────────── Portfolio Samples ───────────────────────────── */}
      {service.portfolioItems.length > 0 && (
        <Section variant="dark">
          <Container>
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <div className="text-center mb-10">
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-paper-50">
                    Relevant Work Samples
                  </h2>
                  <p className="mt-3 text-lg text-paper-400 font-body">
                    Examples from my portfolio in this space.
                  </p>
                </div>
              </FadeIn>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {service.portfolioItems.map((item, index) => (
                  <FadeIn key={index} delay={index * 80}>
                    <a
                      href="https://drive.google.com/drive/folders/1ivFq-UhqthNnaGhlp6nJOc1G9s7H4iDI"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-lg border border-ink-700 bg-ink-900/50 px-5 py-4 transition-all duration-200 hover:border-gold-500/50 hover:bg-ink-800/50"
                    >
                      <Badge variant="gold">{item.category}</Badge>
                      <span className="font-heading text-sm font-semibold text-paper-200 group-hover:text-gold-400 transition-colors">
                        {item.title}
                      </span>
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-paper-500 group-hover:text-gold-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </FadeIn>
                ))}
              </div>
              <FadeIn>
                <div className="text-center mt-8">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                  >
                    View full portfolio
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </Container>
        </Section>
      )}

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

      {/* ───────────────────────────── FAQ ───────────────────────────── */}
      {service.faqs.length > 0 && (
        <Section variant="alt">
          <Container>
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 text-center mb-8">
                  Frequently Asked Questions
                </h2>
              </FadeIn>
              <FadeIn delay={100}>
                <FAQAccordion items={service.faqs} />
              </FadeIn>
            </div>
          </Container>
        </Section>
      )}

      <CTABanner />
    </>
  )
}
