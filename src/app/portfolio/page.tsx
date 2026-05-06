import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { CountUp } from '@/components/ui/CountUp'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { PortfolioGrid } from '@/components/blocks/PortfolioGrid'
import { SITE_URL, TESTIMONIAL_COUNT } from '@/lib/constants'
import { portfolioItems } from './_data/portfolio'
import { verticals } from '@/app/verticals/_data/verticals'

export const metadata: Metadata = {
  title: 'Portfolio | Direct-Response Copywriting Work Samples',
  description:
    'Browse VSL scripts, sales pages, email sequences, and full-funnel copy samples from Rob Palmer — veteran direct-response copywriter with $523M+ in tracked results.',
  alternates: {
    canonical: `${SITE_URL}/portfolio`,
  },
}

export default function PortfolioPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Portfolio & Work Samples"
        subheadline="Real projects. Real results. Browse VSLs, sales pages, email sequences, and funnel copy across health, finance, SaaS, and DTC brands."
      />
      <Breadcrumbs items={[{ label: 'Portfolio' }]} />

      {/* ───────────────────────────── Intro ───────────────────────────── */}
      <section className="bg-paper-50 pb-2">
        <Container>
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center -mt-2">
              <p className="text-lg text-ink-700 leading-relaxed font-body">
                Every piece below was written to sell — not to win creative
                awards. These samples represent a cross-section of the{' '}
                <strong className="text-ink-950">1,200+ projects</strong> I&apos;ve
                delivered across health, finance, info products, SaaS, and
                direct-response verticals. Click any card to view the full sample
                in my portfolio drive.
              </p>
              <div className="mt-6">
                <a
                  href="https://drive.google.com/drive/folders/1ivFq-UhqthNnaGhlp6nJOc1G9s7H4iDI?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-gold-400 px-6 py-3 font-heading text-sm font-bold text-ink-950 shadow-sm transition-all duration-200 hover:bg-gold-500 hover:shadow-md hover:scale-[1.03] active:scale-[0.98]"
                >
                  Browse My Portfolio
                  <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ───────────────────────────── Portfolio Grid with Filters ───────────────────────────── */}
      <Section>
        <Container>
          <PortfolioGrid items={portfolioItems} />
        </Container>
      </Section>

      {/* ───────────────────────────── Mid-page CTA ───────────────────────────── */}
      <CTABanner
        headline="Like what you see?"
        subtext="Book a free strategy call to discuss how I can deliver results like these for your brand."
        variant="gold"
      />

      {/* ───────────────────────────── Results Snapshot ───────────────────────────── */}
      <Section variant="dark">
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-paper-50">
                  Results That Speak for Themselves
                </h2>
                <p className="mt-3 text-lg text-paper-400 font-body">
                  A snapshot of what my copy has delivered across these and other
                  projects.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { stat: '$523M+', label: 'Tracked Revenue' },
                { stat: '1,200+', label: 'Projects Delivered' },
                { stat: '8%+', label: 'Avg. Cold Traffic CVR' },
                { stat: '300%+', label: 'ROAS Across Campaigns' },
              ].map((item, index) => (
                <FadeIn key={item.label} delay={index * 100}>
                  <div className="text-center">
                    <CountUp
                      value={item.stat}
                      className="font-heading text-4xl sm:text-5xl font-bold text-gold-400 tracking-tight"
                    />
                    <div className="mt-2 text-sm font-heading font-medium text-paper-400 uppercase tracking-wide">
                      {item.label}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Related Links ───────────────────────────── */}
      <Section divider>
        <Container>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="text-center mb-10">
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                  Explore More
                </h2>
                <p className="mt-3 text-lg text-ink-700 font-body">
                  See the services behind these results, or read what clients have
                  to say.
                </p>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: 'Copywriting Services',
                  description:
                    'VSLs, sales pages, emails, ads, funnels — see the full range of direct-response services I offer.',
                  href: '/services',
                  cta: 'View Services',
                },
                {
                  title: 'Client Testimonials',
                  description:
                    `${TESTIMONIAL_COUNT} verified testimonials from clients who hired me to write their highest-stakes copy.`,
                  href: '/testimonials',
                  cta: 'Read Testimonials',
                },
                {
                  title: 'Case Studies',
                  description:
                    'Deep-dive breakdowns of specific projects — the strategy, the copy, and the results.',
                  href: '/case-studies',
                  cta: 'Read Case Studies',
                },
              ].map((card, index) => (
                <FadeIn key={card.href} delay={index * 100} className="h-full">
                  <Link
                    href={card.href}
                    className="group flex flex-col h-full rounded-xl border border-paper-200 bg-white p-6 shadow-sm border-t-2 border-t-gold-400/40 transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-1"
                  >
                    <h3 className="font-heading text-lg font-bold text-ink-950 group-hover:text-gold-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-700 leading-relaxed font-body flex-1">
                      {card.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-heading font-semibold text-gold-500 group-hover:text-gold-600 transition-colors">
                      {card.cta}
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            {/* Browse by Industry */}
            <FadeIn delay={400}>
              <div className="mt-10 pt-8 border-t border-paper-200">
                <h3 className="font-heading text-sm font-bold text-ink-700 uppercase tracking-wider mb-4 text-center">
                  Browse by Industry
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {verticals.map((vertical) => (
                    <Link
                      key={vertical.slug}
                      href={`/verticals/${vertical.slug}`}
                      className="inline-block rounded-full border border-paper-200 bg-paper-50 px-4 py-1.5 text-sm font-body font-medium text-ink-800 transition-colors hover:border-gold-200 hover:bg-gold-50 hover:text-gold-600"
                    >
                      {vertical.title}
                    </Link>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}
