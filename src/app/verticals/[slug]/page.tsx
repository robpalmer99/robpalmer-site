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

  // Get testimonials for this vertical
  const verticalTestimonials = vertical.testimonialIds
    .map((id) => testimonials.find((t) => t.id === id))
    .filter(Boolean)

  return (
    <>
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <Hero
        variant="page"
        headline={vertical.headline}
        subheadline={vertical.subheadline}
      />
      <Breadcrumbs
        items={[
          { label: 'Verticals', href: '/verticals' },
          { label: vertical.title },
        ]}
      />

      {/* ───────────────────────────── Hero Image ───────────────────────────── */}
      <section className="bg-paper-50">
        <Container>
          <FadeIn duration={800}>
            <div className="max-w-4xl mx-auto -mt-4 pb-8">
              <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={vertical.heroImage}
                  alt={vertical.heroImageAlt}
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

      {/* ───────────────────────────── Definition Box ───────────────────────────── */}
      {vertical.definition && (
        <Section>
          <Container>
            <FadeIn>
              <div className="max-w-3xl mx-auto">
                <DefinitionBox
                  term={vertical.definition.term}
                  definition={vertical.definition.text}
                />
              </div>
            </FadeIn>
          </Container>
        </Section>
      )}

      {/* ───────────────────────────── Main Content Sections ───────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {vertical.sections.map((section, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                    {section.heading}
                  </h2>
                  <div className="mt-4 space-y-5 text-lg text-ink-700 leading-relaxed font-body [&_a]:text-gold-600 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold-500">
                    {section.content.split('\n\n').map((para, i) => (
                      <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
                    ))}
                  </div>
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

      {/* ───────────────────────────── Key Deliverables ───────────────────────────── */}
      <Section variant="alt" divider>
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                  What You Get
                </h2>
                <p className="mt-3 text-lg text-ink-700 font-body">
                  Every deliverable is built on proven direct-response frameworks
                  — not templates.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {vertical.deliverables.map((item, index) => (
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
        headline={`Ready to scale your ${vertical.title.toLowerCase().replace(' copywriter', '')} campaigns?`}
        subtext="Book a free strategy call to discuss your project."
        variant="gold"
      />

      {/* ───────────────────────────── Industry Testimonials ───────────────────────────── */}
      {verticalTestimonials.length > 0 && (
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
                {verticalTestimonials.map(
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
              <div className="text-center mt-8">
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-600 hover:text-gold-500 transition-colors"
                >
                  Read all {TESTIMONIAL_COUNT} testimonials
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ───────────────────────────── Portfolio Samples ───────────────────────────── */}
      {vertical.portfolioItems.length > 0 && (
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
                {vertical.portfolioItems.map((item, index) => (
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
                        className="w-4 h-4 text-paper-600 group-hover:text-gold-400 transition-colors"
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
                    className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-400 hover:text-gold-200 transition-colors"
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

      {/* ───────────────────────────── FAQ ───────────────────────────── */}
      {vertical.faqs.length > 0 && (
        <Section variant="alt">
          <Container>
            <div className="max-w-3xl mx-auto">
              <FadeIn>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 text-center mb-8">
                  Frequently Asked Questions
                </h2>
              </FadeIn>
              <FadeIn delay={100}>
                <FAQAccordion items={vertical.faqs} />
              </FadeIn>
            </div>
          </Container>
        </Section>
      )}

      <CTABanner />
    </>
  )
}
