import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CTABanner } from '@/components/blocks/CTABanner'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { TestimonialCard } from '@/components/blocks/TestimonialCard'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/constants'
import { testimonials } from '@/content/testimonials'
import { getServiceBySlug, getAllServiceSlugs } from '../_data/services'

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
      images: [{ url: service.heroImage, width: 800, height: 400 }],
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

      {/* ───────────────────────────── Hero Image ───────────────────────────── */}
      <section className="bg-paper-50">
        <Container>
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
        </Container>
      </section>

      {/* ───────────────────────────── Main Content Sections ───────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-10">
            {service.sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                  {section.heading}
                </h2>
                <p className="mt-4 text-lg text-paper-600 leading-relaxed font-body">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Key Deliverables ───────────────────────────── */}
      <Section variant="alt">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                What You Get
              </h2>
              <p className="mt-3 text-lg text-paper-600 font-body">
                Every deliverable is built on proven direct-response frameworks
                — not templates.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.deliverables.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-paper-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-heading text-base font-bold text-ink-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-paper-600 font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Mid-page CTA ───────────────────────────── */}
      <CTABanner
        headline={`Ready to hire a ${service.title.toLowerCase()}?`}
        subtext="Book a free strategy call to discuss your project."
        variant="gold"
      />

      {/* ───────────────────────────── Service Testimonials ───────────────────────────── */}
      {serviceTestimonials.length > 0 && (
        <Section>
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                  What Clients Say
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceTestimonials.map(
                  (testimonial) =>
                    testimonial && (
                      <TestimonialCard
                        key={testimonial.id}
                        testimonial={testimonial}
                      />
                    )
                )}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/testimonials"
                  className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Read all 36+ testimonials
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ───────────────────────────── Portfolio Samples ───────────────────────────── */}
      {service.portfolioItems.length > 0 && (
        <Section variant="dark">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-paper-50">
                  Relevant Work Samples
                </h2>
                <p className="mt-3 text-lg text-paper-400 font-body">
                  Examples from my portfolio in this space.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {service.portfolioItems.map((item, index) => (
                  <a
                    key={index}
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
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-400 hover:text-gold-300 transition-colors"
                >
                  View full portfolio
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* ───────────────────────────── Related Industries ───────────────────────────── */}
      <Section
        variant={service.portfolioItems.length > 0 ? 'default' : 'alt'}
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                Industries I Write For
              </h2>
              <p className="mt-3 text-lg text-paper-600 font-body">
                Deep experience across verticals that demand direct-response
                excellence.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                {
                  label: 'Health & Supplements',
                  href: '/industries/health-supplement-copywriter',
                },
                {
                  label: 'Financial Services',
                  href: '/industries/financial-copywriter',
                },
                {
                  label: 'E-Commerce & DTC',
                  href: '/industries/ecommerce-dtc-copywriter',
                },
                {
                  label: 'ClickBank',
                  href: '/industries/clickbank-copywriter',
                },
                { label: 'SaaS', href: '/industries/saas-copywriter' },
                {
                  label: 'Info Products',
                  href: '/industries/info-product-copywriter',
                },
              ].map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="group block rounded-xl border border-paper-200 bg-white p-4 text-center shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5"
                >
                  <span className="font-heading text-sm font-semibold text-ink-950 group-hover:text-gold-600 transition-colors">
                    {industry.label}
                  </span>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Button href="/industries" variant="outline">
                View All Industries
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── FAQ ───────────────────────────── */}
      {service.faqs.length > 0 && (
        <Section variant="alt">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 text-center mb-8">
                Frequently Asked Questions
              </h2>
              <FAQAccordion items={service.faqs} />
            </div>
          </Container>
        </Section>
      )}

      <CTABanner />
    </>
  )
}
