import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { CountUp } from '@/components/ui/CountUp'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { CaseStudyCard } from '@/components/blocks/CaseStudyCard'
import { SITE_URL } from '@/lib/constants'
import { caseStudies } from './_data/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies | Direct-Response Campaigns That Delivered',
  description:
    'Read detailed case studies showing how Rob Palmer has generated $523M+ in tracked results through direct-response copywriting for Fortune 500 brands and beyond.',
  alternates: {
    canonical: `${SITE_URL}/case-studies`,
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Case Studies"
        subheadline="Real campaigns. Real results. Real revenue."
      />
      <Breadcrumbs items={[{ label: 'Case Studies' }]} />

      {/* Results Summary */}
      <div className="bg-ink-950 py-10 noise-overlay">
        <Container>
          <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { stat: '$523M+', label: 'Total Tracked Revenue' },
              { stat: 'Fortune 500', label: 'Client Calibre', isText: true },
              { stat: '100s', label: 'Of Successful Projects', isText: true },
              { stat: '30+', label: 'Years of Experience' },
            ].map((item, index) => (
              <FadeIn key={item.label} delay={index * 100}>
                <div>
                  {'isText' in item && item.isText ? (
                    <div className="font-heading text-3xl sm:text-4xl font-bold text-gold-400 tracking-tight">{item.stat}</div>
                  ) : (
                    <CountUp
                      value={item.stat}
                      className="font-heading text-3xl sm:text-4xl font-bold text-gold-400 tracking-tight"
                    />
                  )}
                  <div className="mt-2 text-xs font-heading uppercase tracking-wider text-paper-400">{item.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, index) => (
              <li key={cs.slug}>
                <FadeIn delay={index * 100} className="h-full">
                  <CaseStudyCard
                    title={cs.title}
                    slug={cs.slug}
                    result={cs.result}
                    client={cs.client}
                    description={cs.description}
                    heroImage={cs.heroImage}
                    heroAlt={cs.heroAlt}
                  />
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTABanner
        headline="Ready to become the next case study?"
        subtext="Let's discuss how direct-response copywriting can transform your results."
      />
    </>
  )
}
