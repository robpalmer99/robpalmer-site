import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'

const milestones = [
  {
    era: 'Early 1990s',
    title: 'Fortune 500 Direct Mail',
    description:
      'Cut teeth writing direct-response campaigns for Apple, IBM, Microsoft, Citibank, and Morgan Stanley. Learned the fundamentals of persuasion that still drive conversions today.',
  },
  {
    era: 'June 1993',
    title: "World's First Blog Published",
    description:
      'Published what is widely recognized as the world\'s first blog — years before the term "blog" was even coined. Referenced by Wikipedia as a pioneering moment in internet history.',
  },
  {
    era: '2000s',
    title: 'The $523M Campaign',
    description:
      'Wrote the Belron/Safelite direct-response campaign that five previous copywriters had failed to crack. It ran for nine consecutive years and generated $523 million in tracked sales.',
  },
  {
    era: '2010s',
    title: 'Digital Direct Response',
    description:
      'Transitioned to digital — VSLs, sales funnels, email sequences, and ClickBank offers. Applied battle-tested direct mail principles to the new medium with devastating effect.',
  },
  {
    era: 'Today',
    title: 'AI-Powered Copywriting',
    description:
      'Operating at the cutting edge of AI-assisted direct-response copywriting. Using AI to research faster, test more variations, and scale what works — amplified by 30+ years of craft.',
  },
]

export function CareerTimeline() {
  return (
    <Section variant="dark">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-paper-50">
            Three Decades at the Frontier
          </h2>
          <p className="mt-4 text-lg text-paper-400 font-body">
            From Fortune 500 boardrooms to the cutting edge of AI — a career
            built on being first.
          </p>
        </div>
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gold-500/30" />

          <div className="space-y-10">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex gap-6 sm:gap-8">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 w-12 sm:w-16 flex items-start justify-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-gold-500 ring-4 ring-ink-950" />
                </div>
                {/* Content */}
                <div className="pb-2">
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
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
