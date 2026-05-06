import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { FadeIn } from '@/components/ui/FadeIn'
import { FORTUNE_500_CLIENTS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const MARKETPLACE_LOGOS = [
  { name: 'ClickBank', src: '/images/logos/clickbank.png', width: 120, height: 30 },
  { name: 'Shopify', src: '/images/logos/shopify.png', width: 100, height: 30 },
  { name: 'Digistore24', src: '/images/logos/digistore24.png', width: 110, height: 30 },
]

interface ClientLogoBarProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function ClientLogoBar({ variant = 'dark', className }: ClientLogoBarProps) {
  return (
    <section
      aria-label="Trusted clients and partners"
      className={cn(
        'relative py-12 sm:py-16 border-y',
        variant === 'dark'
          ? 'bg-ink-900 border-gold-400/15'
          : 'bg-paper-100 border-paper-200',
        className
      )}
    >
      <Container>
        <FadeIn>
          <p
            className={cn(
              'text-center text-xs sm:text-sm font-heading uppercase tracking-[0.2em] mb-10 font-semibold',
              variant === 'dark' ? 'text-gold-400' : 'text-paper-600'
            )}
          >
            Trusted by Fortune 500 brands and top direct-response marketers
          </p>
        </FadeIn>

        {/* Fortune 500 text logos with stagger */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-5">
          {FORTUNE_500_CLIENTS.map((client, index) => (
            <FadeIn key={client} delay={index * 80} duration={500} direction="none">
              <div
                className={cn(
                  'font-heading text-xl sm:text-2xl font-bold tracking-wide transition-colors duration-200',
                  variant === 'dark'
                    ? 'text-white/80 hover:text-white'
                    : 'text-paper-600 hover:text-ink-950'
                )}
              >
                {client}
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Divider */}
        <div
          className={cn(
            'mx-auto mt-10 mb-8 max-w-xs border-t',
            variant === 'dark' ? 'border-gold-400/20' : 'border-paper-200'
          )}
        />

        {/* Marketplace image logos with stagger */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {MARKETPLACE_LOGOS.map((logo, index) => (
            <FadeIn key={logo.name} delay={400 + index * 100} duration={500} direction="none">
              <div
                className={cn(
                  'transition-opacity duration-200',
                  variant === 'dark'
                    ? 'opacity-80 hover:opacity-100'
                    : 'opacity-60 hover:opacity-80'
                )}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  sizes="120px"
                  className={cn(
                    'h-7 sm:h-8 w-auto object-contain',
                    variant === 'dark' ? 'brightness-0 invert' : ''
                  )}
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
