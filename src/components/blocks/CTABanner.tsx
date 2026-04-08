'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/ui/FadeIn'
import { cn } from '@/lib/utils'
import { trackCTAClick } from '@/lib/analytics'

interface CTABannerProps {
  headline?: string
  subtext?: string
  buttonText?: string
  buttonHref?: string
  variant?: 'default' | 'dark' | 'gold'
  className?: string
}

export function CTABanner({
  headline = 'Ready to scale your conversions?',
  subtext,
  buttonText = 'Book a Call',
  buttonHref = '/contact',
  variant = 'default',
  className,
}: CTABannerProps) {
  const variants = {
    default: 'bg-ink-950 text-white noise-overlay',
    dark: 'bg-ink-900 text-white noise-overlay',
    gold: 'bg-gradient-to-r from-gold-50 via-gold-100 to-gold-50 text-ink-950',
  }

  return (
    <section className={cn('relative py-16 sm:py-20', variants[variant], className)}>
      {/* Gold atmospheric glow for dark variants */}
      {variant !== 'gold' && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(245,183,49,0.06),transparent_60%)]" />
      )}

      <Container className="relative z-10">
        <FadeIn>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
            <div>
              <h2 className={cn(
                'font-heading text-2xl sm:text-3xl font-bold',
                variant === 'gold' ? 'text-ink-950' : 'text-white'
              )}>
                {headline}
              </h2>
              {subtext && (
                <p className={cn(
                  'mt-3 text-base sm:text-lg',
                  variant === 'gold' ? 'text-paper-600' : 'text-paper-300'
                )}>
                  {subtext}
                </p>
              )}
            </div>
            <Button
              href={buttonHref}
              variant={variant === 'gold' ? 'secondary' : 'primary'}
              size="lg"
              className="shrink-0"
              onClick={() => trackCTAClick(buttonText)}
            >
              {buttonText}
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
