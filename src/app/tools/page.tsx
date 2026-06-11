import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Free Copywriting Tools',
  description:
    'Free copywriting tools from Rob Palmer: a headline analyzer scoring your headlines against proven direct-response formulas, and a copywriting rates calculator.',
  alternates: {
    canonical: `${SITE_URL}/tools`,
  },
  openGraph: {
    title: 'Free Copywriting Tools',
    description:
      'Free copywriting tools: headline analyzer and copywriting rates calculator.',
    url: `${SITE_URL}/tools`,
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 630 }],
  },
}

const tools = [
  {
    href: '/tools/headline-analyzer',
    title: 'Headline Analyzer',
    description:
      'Score your headline against the direct-response formulas I actually use — word balance, emotional pull, specificity, and clarity.',
  },
  {
    href: '/tools/copywriting-rates-calculator',
    title: 'Copywriting Rates Calculator',
    description:
      'Get a realistic 2026 budget range for your project — sales pages, VSLs, email sequences, and full funnels.',
  },
]

export default function ToolsPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Free Copywriting Tools"
        subheadline="Use the same checks I run on client copy. No email gate, no signup — just the tools."
      />
      <Breadcrumbs items={[{ label: 'Tools' }]} />

      <Section>
        <Container>
          <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {tools.map((tool, index) => (
              <li key={tool.href}>
                <FadeIn delay={index * 100}>
                  <Link
                    href={tool.href}
                    className="block h-full rounded-xl border border-paper-200 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-gold-200 hover:-translate-y-0.5"
                  >
                    <h2 className="font-heading text-xl font-bold text-ink-950 mb-3">
                      {tool.title}
                    </h2>
                    <p className="text-ink-700 font-body mb-4">{tool.description}</p>
                    <span className="font-heading text-sm font-semibold text-gold-600">
                      Open the tool &rarr;
                    </span>
                  </Link>
                </FadeIn>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  )
}
