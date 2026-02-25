import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Apple UK Direct Mail Campaign | Case Study',
  description:
    'How Rob Palmer created a direct mail campaign for Apple Computer UK that beat the control through research-driven direct-response copywriting.',
}

export default function AppleCaseStudyPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="The Apple UK Direct Mail Campaign"
        subheadline="How research-driven direct-response copywriting beat the control for one of the world's most iconic brands."
      />
      <Breadcrumbs
        items={[
          { label: 'Case Studies', href: '/case-studies' },
          { label: 'Apple UK Campaign' },
        ]}
      />

      <Section>
        <Container>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-paper-600 leading-relaxed font-body">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950">
              The Challenge
            </h2>
            <p>
              Apple Computer UK needed a direct mail campaign that would drive
              responses from business decision-makers. The existing control was
              performing adequately, but Apple wanted to test whether a
              different approach could improve results.
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
              The Approach
            </h2>
            <p>
              Rob Palmer conducted extensive A/B testing research to understand
              what specific value propositions resonated most with the target
              audience. Rather than leading with product features — as most
              tech companies did at the time — he crafted a campaign that spoke
              directly to the business outcomes that mattered to decision-makers.
            </p>

            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-ink-950 pt-4">
              The Results
            </h2>
            <p>
              The new campaign beat the existing control, demonstrating the
              power of research-driven direct-response copywriting even for
              a brand as strong as Apple. The success reinforced a principle
              that Rob carries into every project: understand the audience
              first, write second.
            </p>
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}
