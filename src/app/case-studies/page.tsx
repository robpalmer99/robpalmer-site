import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
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
      <div className="bg-ink-950 py-10">
        <Container>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-gold-400">$523M+</div>
              <div className="mt-1 text-xs font-heading uppercase tracking-wider text-paper-400">Total Tracked Revenue</div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-gold-400">Fortune 500</div>
              <div className="mt-1 text-xs font-heading uppercase tracking-wider text-paper-400">Client Calibre</div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-gold-400">100s</div>
              <div className="mt-1 text-xs font-heading uppercase tracking-wider text-paper-400">Of Successful Projects</div>
            </div>
            <div>
              <div className="font-heading text-2xl sm:text-3xl font-bold text-gold-400">30+</div>
              <div className="mt-1 text-xs font-heading uppercase tracking-wider text-paper-400">Years of Experience</div>
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <ul role="list" className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <li key={cs.slug}>
                <CaseStudyCard
                  title={cs.title}
                  slug={cs.slug}
                  result={cs.result}
                  client={cs.client}
                  description={cs.description}
                  heroImage={cs.heroImage}
                  heroAlt={cs.heroAlt}
                />
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
