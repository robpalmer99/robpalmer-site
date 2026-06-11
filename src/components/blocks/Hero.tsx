import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'

interface HeroProps {
  headline: string
  subheadline?: string
  cta?: { label: string; href: string }
  secondaryCta?: { label: string; href: string }
  variant?: 'home' | 'page' | 'minimal'
  image?: { src: string; alt: string }
  children?: React.ReactNode
}

export function Hero({
  headline,
  subheadline,
  cta,
  secondaryCta,
  variant = 'page',
  image,
  children,
}: HeroProps) {
  if (variant === 'home') {
    return (
      <section className="relative bg-ink-950 text-white overflow-hidden noise-overlay">
        {/* Layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-900 to-ink-800" />
        {/* Gold atmospheric glow — stronger for visual drama */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(245,183,49,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,183,49,0.05),transparent_40%)]" />

        <Container className="relative z-10">
          <div className="pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-48 lg:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text content */}
            <div className="flex-1 max-w-2xl">
              <FadeIn immediate duration={800}>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                  {headline}
                </h1>
              </FadeIn>
              {subheadline && (
                <FadeIn immediate delay={150} duration={800}>
                  <p
                    className="mt-6 text-lg sm:text-xl text-paper-300 leading-relaxed font-body [&_a]:text-gold-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold-300"
                    dangerouslySetInnerHTML={{ __html: subheadline }}
                  />
                </FadeIn>
              )}
              {(cta || secondaryCta) && (
                <FadeIn immediate delay={300} duration={800}>
                  <div className="mt-10 flex flex-col sm:flex-row items-start gap-4">
                    {cta && (
                      <Button href={cta.href} size="lg">
                        {cta.label}
                      </Button>
                    )}
                    {secondaryCta && (
                      <Button href={secondaryCta.href} variant="outline" size="lg">
                        {secondaryCta.label}
                      </Button>
                    )}
                  </div>
                </FadeIn>
              )}
              {children}
            </div>

            {/* Hero image with gold ring glow */}
            {image && (
              <FadeIn immediate delay={400} duration={1000} direction="none">
                <div className="shrink-0 relative">
                  {/* Glow ring behind image */}
                  <div className="absolute -inset-3 rounded-2xl bg-gold-400/10 blur-xl" />
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={288}
                    height={288}
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 256px, 288px"
                    className="relative w-56 sm:w-64 lg:w-72 h-auto rounded-xl ring-2 ring-gold-400/20"
                    priority
                  />
                </div>
              </FadeIn>
            )}
          </div>
        </Container>
      </section>
    )
  }

  if (variant === 'minimal') {
    return (
      <section className="bg-ink-950 text-white pt-28 pb-12 sm:pt-32 sm:pb-16 noise-overlay">
        <Container className="relative z-10">
          <FadeIn immediate duration={600}>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">
              {headline}
            </h1>
            {subheadline && (
              <p
                className="mt-3 text-lg text-paper-300 font-body [&_a]:text-gold-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold-300"
                dangerouslySetInnerHTML={{ __html: subheadline }}
              />
            )}
          </FadeIn>
        </Container>
      </section>
    )
  }

  // page variant
  return (
    <section className="bg-ink-950 text-white pt-28 pb-16 sm:pt-32 sm:pb-20 noise-overlay">
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <FadeIn immediate duration={700}>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
              {headline}
            </h1>
          </FadeIn>
          {subheadline && (
            <FadeIn immediate delay={100} duration={700}>
              <p
                className="mt-4 text-lg sm:text-xl text-paper-300 leading-relaxed font-body [&_a]:text-gold-400 [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-gold-300"
                dangerouslySetInnerHTML={{ __html: subheadline }}
              />
            </FadeIn>
          )}
          {cta && (
            <FadeIn immediate delay={200} duration={700}>
              <div className="mt-8">
                <Button href={cta.href}>{cta.label}</Button>
              </div>
            </FadeIn>
          )}
        </div>
      </Container>
    </section>
  )
}
