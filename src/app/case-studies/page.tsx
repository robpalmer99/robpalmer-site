import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { CaseStudyCard } from '@/components/blocks/CaseStudyCard'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Read detailed case studies showing how Rob Palmer has generated $523M+ in tracked results through direct-response copywriting.',
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

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="The $523M Secret Weapon Campaign"
              slug="belron-safelite-523m-campaign"
              result="$523M"
              client="Belron / Safelite"
              description="A campaign that ran for 9 years, generated $523 million in sales, and saved hundreds of lives. Five previous award-winning copywriters had failed at the task."
            />
            <CaseStudyCard
              title="The Apple UK Direct Mail Campaign"
              slug="apple-direct-mail-campaign"
              result="A/B Winner"
              client="Apple Computer UK"
              description="A direct mail campaign for Apple UK that beat the control and demonstrated the power of research-driven direct-response copywriting."
            />
          </div>
        </Container>
      </Section>

      <CTABanner />
    </>
  )
}
