import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { ClientLogoBar } from '@/components/blocks/ClientLogoBar'
import { StatsBar } from '@/components/blocks/StatsBar'
import { CareerTimeline } from '@/components/blocks/CareerTimeline'
import { SpecialtyGrid } from '@/components/blocks/SpecialtyGrid'
import { AboutTestimonials } from '@/components/blocks/AboutTestimonials'
import { CTABanner } from '@/components/blocks/CTABanner'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'

export const metadata: Metadata = {
  title: 'About Rob Palmer | Direct-Response Copywriter',
  description:
    'Rob Palmer is a veteran direct-response copywriter with 30+ years of experience, Fortune 500 clients including Apple and IBM, and $523M+ in tracked results. Pioneer of blogging (1993) and AI-assisted copywriting.',
}

export default function AboutPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="About Rob Palmer"
        subheadline="The direct-response copywriter behind $523M+ in tracked results. Fortune 500 foundations. AI-powered edge."
      />
      <Breadcrumbs items={[{ label: 'About' }]} />

      {/* ───────────────────────────── Opening Bio ───────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start gap-8 mb-10">
              <div className="shrink-0">
                <Image
                  src="/images/headshots/rob-palmer-clean.png"
                  alt="Rob Palmer - Direct-Response Copywriter"
                  width={240}
                  height={240}
                  className="w-44 h-44 sm:w-56 sm:h-56 rounded-xl object-cover shadow-lg"
                  priority
                />
              </div>
              <div className="space-y-4 text-lg text-paper-700 leading-relaxed font-body">
                <p>
                  I am a direct-response copywriter who has generated over{' '}
                  <strong className="text-ink-950">
                    $523 million in tracked revenue
                  </strong>{' '}
                  for clients ranging from Fortune 500 corporations to
                  today&apos;s top ClickBank vendors and DTC brands.
                </p>
                <p>
                  The CEO of Belron International once called me his{' '}
                  <strong className="text-ink-950">
                    &ldquo;Secret Weapon.&rdquo;
                  </strong>{' '}
                  Stefan Georgi, founder of Copy Accelerator, hired me as{' '}
                  <strong className="text-ink-950">Copy Chief for CA Labs.</strong>{' '}
                  And in 1993, I published what is widely recognized as the{' '}
                  <strong className="text-ink-950">
                    world&apos;s first blog
                  </strong>{' '}
                  — years before the term was even coined.
                </p>
                <p>
                  I have been writing copy longer than the internet has existed.
                  And I am still at the frontier.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Stats Bar ───────────────────────────── */}
      <StatsBar variant="dark" />

      {/* ───────────────────────────── The $523M Story ───────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mb-6">
              The $523M Campaign That Five Copywriters Failed to Crack
            </h2>
            <div className="space-y-5 text-lg text-paper-700 leading-relaxed font-body">
              <p>
                Belron International — known in the US as Safelite AutoGlass — is
                the world&apos;s largest vehicle glass repair and replacement
                company. They needed a direct-response campaign to drive auto
                glass replacement bookings. The challenge: windshield damage is a
                safety issue, and the copy had to make people act{' '}
                <em>before</em> an accident, not after.
              </p>
              <p>
                Five previous award-winning copywriters had tried and failed to
                meet performance targets. Each had led with features and
                convenience. None of them cracked the code.
              </p>
              <p>
                I dug deeper. Through extensive research, I discovered that the
                most powerful motivator was not convenience — it was{' '}
                <strong className="text-ink-950">fear.</strong> Specifically, the
                fear of a damaged windshield failing during an accident. The fear
                that a cracked windshield could endanger the people you love
                most.
              </p>
              <p>
                I rewrote the campaign around that emotional core — combining
                classic direct-response storytelling with urgency triggers and
                social proof. The result:
              </p>
              <ul className="space-y-3 pl-4">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                  <span>
                    The campaign ran for{' '}
                    <strong className="text-ink-950">
                      nine consecutive years
                    </strong>{' '}
                    without fatigue
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                  <span>
                    It generated{' '}
                    <strong className="text-ink-950">
                      $523 million in tracked sales
                    </strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                  <span>
                    It contributed to{' '}
                    <strong className="text-ink-950">
                      saving hundreds of lives
                    </strong>{' '}
                    by motivating timely windshield replacements
                  </span>
                </li>
              </ul>
              <p>
                Gary Lubner, CEO of Belron International, told me:{' '}
                <em>
                  &ldquo;You are our secret weapon. Keep your diary clear,
                  please!&rdquo;
                </em>
              </p>
              <p>
                <Link
                  href="/case-studies/belron-safelite-523m-campaign"
                  className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                >
                  Read the full Belron case study
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Fortune 500 Foundations ───────────────────────────── */}
      <Section variant="alt">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mb-6">
              Fortune 500 Foundations
            </h2>
            <div className="space-y-5 text-lg text-paper-700 leading-relaxed font-body">
              <p>
                My career began in the golden age of direct mail, writing
                campaigns for{' '}
                <strong className="text-ink-950">
                  Apple, IBM, Microsoft, Citibank, and Morgan Stanley.
                </strong>{' '}
                Those Fortune 500 boardrooms taught me something that most
                copywriters never learn: rigorous, research-driven persuasion at
                scale.
              </p>
              <p>
                When you write for Apple, every word is scrutinized. When you
                write for Morgan Stanley, the compliance bar is unforgiving.
                When you write for IBM, you learn to translate complexity into
                clarity. These are the foundations that still inform every piece
                of copy I write today — because{' '}
                <strong className="text-ink-950">
                  human psychology does not change, even when the medium does.
                </strong>
              </p>
              <p>
                The persuasion principles that drove direct mail response rates
                in the 1990s are the same principles that drive VSL conversion
                rates today. The medium is different. The fundamentals are
                timeless.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Client Logos ───────────────────────────── */}
      <ClientLogoBar variant="light" />

      {/* ───────────────────────────── Career Timeline ───────────────────────────── */}
      <CareerTimeline />

      {/* ───────────────────────────── World's First Blogger ───────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mb-6">
              The World&apos;s First Blogger
            </h2>
            <div className="space-y-5 text-lg text-paper-700 leading-relaxed font-body">
              <p>
                In June 1993, I published what is widely recognized as the
                world&apos;s first blog — a regularly updated online journal
                years before the term &ldquo;blog&rdquo; was even coined.
                This piece of internet history is{' '}
                <strong className="text-ink-950">
                  referenced by Wikipedia
                </strong>{' '}
                in its timeline of early web publishing.
              </p>
              <p>
                I mention this not to brag about being early to something, but
                because it reveals a pattern that defines my entire career:{' '}
                <strong className="text-ink-950">
                  I go where the opportunity is before the crowd arrives.
                </strong>
              </p>
              <p>
                I was writing direct-response copy before the internet existed. I
                was publishing online content before anyone called it a blog. I
                was building digital sales funnels before &ldquo;funnel&rdquo;
                became a marketing buzzword. And today, I am at the cutting edge
                of AI-assisted copywriting — because the best copywriters do not
                fear new tools. They weaponize them.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── AI-Powered Section ───────────────────────────── */}
      <Section variant="dark">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-paper-50 mb-6">
              AI-Powered. Human-Crafted.
            </h2>
            <div className="space-y-5 text-lg text-paper-300 leading-relaxed font-body">
              <p>
                I use AI as a{' '}
                <strong className="text-paper-50">force multiplier</strong>, not
                a replacement for craft. Here is what that looks like in
                practice:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                {[
                  {
                    label: 'Market Research',
                    detail:
                      'AI helps me analyze thousands of competitor ads, reviews, and forums to understand what your market actually wants — in hours, not weeks.',
                  },
                  {
                    label: 'Headline Testing',
                    detail:
                      'I generate and evaluate more headline variations than any human-only process could produce, then apply 30 years of intuition to pick the winners.',
                  },
                  {
                    label: 'Competitive Analysis',
                    detail:
                      'AI-powered funnel mapping lets me reverse-engineer what is working for your competitors at scale — then build something better.',
                  },
                  {
                    label: 'Speed & Precision',
                    detail:
                      'Faster research means faster delivery. More testing means sharper copy. The result: campaigns that launch sooner and convert harder.',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-lg border border-ink-700 bg-ink-900/50 p-5"
                  >
                    <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold-400 mb-2">
                      {item.label}
                    </h3>
                    <p className="text-sm text-paper-400 font-body leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>
              <p>
                This is not about replacing the craft with technology. It is
                about amplifying{' '}
                <strong className="text-paper-50">
                  decades of direct-response experience
                </strong>{' '}
                with the most powerful tools available. The strategic thinking,
                the emotional intelligence, the persuasion architecture that
                turns words into revenue — that only comes from thousands of
                tested campaigns and 30+ years of learning what actually works.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── Specialties & Industries ───────────────────────────── */}
      <SpecialtyGrid />

      {/* ───────────────────────────── Testimonials ───────────────────────────── */}
      <AboutTestimonials />

      {/* ───────────────────────────── My Approach / Working With Me ───────────────────────────── */}
      <Section>
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink-950 mb-6">
              What It&apos;s Like Working With Me
            </h2>
            <div className="space-y-5 text-lg text-paper-700 leading-relaxed font-body">
              <p>
                I do not do content production, blog posts for SEO, or low-level
                copywriting tasks. Every project I take on is a{' '}
                <strong className="text-ink-950">
                  strategic, high-impact engagement
                </strong>{' '}
                designed to deliver measurable ROI.
              </p>
              <p>Here is what you can expect:</p>
              <div className="space-y-4 my-6">
                {[
                  {
                    title: 'Deep Research First',
                    text: 'Every project begins with thorough audience research, competitive analysis, and offer assessment. I do not start writing until I understand your market inside and out.',
                  },
                  {
                    title: 'Fast, Reliable Delivery',
                    text: 'Multiple clients have commented on how fast I work without sacrificing quality. When you need copy that is both excellent and on time, that is what you get.',
                  },
                  {
                    title: 'Battle-Tested Frameworks',
                    text: 'My copy is built on proven direct-response frameworks refined over 30+ years. No guesswork. No trendy tactics that fail next month. Just copy that converts.',
                  },
                  {
                    title: 'Measurable Results',
                    text: 'I write copy designed to move specific metrics — conversions, AOV, ROAS, revenue. Every engagement is accountable to real numbers, not vanity metrics.',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-4 rounded-lg border border-paper-200 bg-white p-5"
                  >
                    <div className="mt-0.5 w-2 h-2 rounded-full bg-gold-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-heading text-base font-bold text-ink-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-paper-600 font-body leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ───────────────────────────── CTA ───────────────────────────── */}
      <CTABanner
        headline="Ready to put 30 years of direct-response expertise to work?"
        subtext="Book a free strategy call and let's discuss how I can help grow your business."
      />
    </>
  )
}
