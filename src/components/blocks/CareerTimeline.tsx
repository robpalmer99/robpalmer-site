import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'

const milestones = [
  {
    era: 'Early Career',
    title: 'Fortune 500 Direct Response',
    description:
      'Built foundations writing direct-response campaigns for Apple, IBM, Microsoft, Citibank, and Morgan Stanley — learning the research-driven persuasion principles that still power every campaign I write today.',
  },
  {
    era: '2000s',
    title: 'The $523M Belron Campaign',
    description:
      'Wrote the Belron/Safelite campaign that five previous copywriters had failed to crack. Research-first strategy. Emotion-driven copy. $523 million in tracked results.',
  },
  {
    era: '2010s',
    title: 'Digital Funnels & ClickBank',
    description:
      'Moved into VSLs, sales funnels, email sequences, and ClickBank offers — applying proven direct-response frameworks to digital channels and scaling results for DTC and info product brands.',
  },
  {
    era: 'Now',
    title: 'AI-Powered Conversion Strategy',
    description:
      'Building high-converting funnels and campaigns using AI-powered research, rapid variation testing, and CRO. Platform-fluent across Meta, YouTube, and TikTok. Offer strategy, funnel architecture, and copy — all under one roof.',
  },
]

export function CareerTimeline() {
  return (
    <Section variant="dark">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <FadeIn>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-paper-50">
              Always at the Frontier
            </h2>
            <p className="mt-4 text-lg text-paper-400 font-body">
              From Fortune 500 boardrooms to AI-powered funnels — a career
              built on adapting faster than the market.
            </p>
          </FadeIn>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gold-500/30" />

          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <FadeIn key={index} delay={index * 150} direction="left">
                <div className="relative flex gap-6 sm:gap-8">
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 w-12 sm:w-16 flex items-start justify-center pt-1">
                    <div className="w-3 h-3 rounded-full bg-gold-500 ring-4 ring-ink-950" />
                  </div>
                  {/* Content */}
                  <div className="pb-2 min-w-0">
                    <span className="inline-block text-xs font-heading font-semibold uppercase tracking-widest text-gold-400 mb-1">
                      {milestone.era}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-paper-50">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-paper-400 font-body leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
