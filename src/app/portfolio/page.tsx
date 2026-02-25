import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { Button } from '@/components/ui/Button'
import { PortfolioGrid } from '@/components/blocks/PortfolioGrid'
import { portfolioItems } from './_data/portfolio'

export const metadata: Metadata = {
  title: 'Portfolio | Direct-Response Copywriting Work Samples',
  description:
    'Browse VSL scripts, sales pages, email sequences, and full-funnel copy samples from Rob Palmer — veteran direct-response copywriter with $523M+ in tracked results.',
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
          <div className="max-w-3xl mx-auto text-center -mt-2">
            <p className="text-lg text-paper-600 leading-relaxed font-body">
              Every piece below was written to sell — not to win creative
              awards. These samples represent a cross-section of the{' '}
              <strong className="text-ink-950">1,200+ projects</strong> I&apos;ve
              delivered across health, finance, info products, SaaS, and
              direct-response verticals. Click any card to view the full sample
              in my portfolio drive.
            </p>
          </div>
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
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-paper-50">
                Results That Speak for Themselves
              </h2>
              <p className="mt-3 text-lg text-paper-400 font-body">
                A snapshot of what my copy has delivered across these and other
                projects.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { stat: '$523M+', label: 'Tracked Revenue' },
                { stat: '1,200+', label: 'Projects Delivered' },
                { stat: '8%+', label: 'Avg. Cold Traffic CVR' },
                { stat: '300%+', label: 'ROAS Across Campaigns' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="font-heading text-3xl sm:text-4xl font-bold text-gold-400">
                    {item.stat}
                  </div>
                  <div className="mt-2 text-sm font-heading font-medium text-paper-400 uppercase tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Related Links ───────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
                Explore More
              </h2>
              <p className="mt-3 text-lg text-paper-600 font-body">
                See the services behind these results, or read what clients have
                to say.
              </p>
            </div>
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
                    '36+ verified testimonials from clients who hired me to write their highest-stakes copy.',
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
              ].map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block rounded-xl border border-paper-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5"
                >
                  <h3 className="font-heading text-lg font-bold text-ink-950 group-hover:text-gold-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-paper-600 leading-relaxed font-body">
                    {card.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-heading font-semibold text-gold-500 group-hover:text-gold-600 transition-colors">
                    {card.cta}
                    <svg
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
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}
