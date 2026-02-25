import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

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
    default: 'bg-ink-950 text-white',
    dark: 'bg-ink-900 text-white',
    gold: 'bg-gold-50 text-ink-950',
  }

  return (
    <section className={cn('py-12 sm:py-16', variants[variant], className)}>
      <Container>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h2 className={cn(
              'font-heading text-2xl sm:text-3xl font-bold',
              variant === 'gold' ? 'text-ink-950' : 'text-white'
            )}>
              {headline}
            </h2>
            {subtext && (
              <p className={cn(
                'mt-2 text-base',
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
          >
            {buttonText}
          </Button>
        </div>
      </Container>
    </section>
  )
}
