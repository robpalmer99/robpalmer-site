import Image from 'next/image'
import { Container } from '@/components/ui/Container'
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
      className={cn(
        'relative py-12 sm:py-16 border-y',
        variant === 'dark'
          ? 'bg-ink-900 border-gold-400/15'
          : 'bg-paper-100 border-paper-200',
        className
      )}
    >
      <Container>
        <p
          className={cn(
            'text-center text-xs sm:text-sm font-heading uppercase tracking-[0.2em] mb-10 font-semibold',
            variant === 'dark' ? 'text-gold-400' : 'text-paper-500'
          )}
        >
          Trusted by Fortune 500 brands and top direct-response marketers
        </p>

        {/* Fortune 500 text logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 sm:gap-x-14 gap-y-5">
          {FORTUNE_500_CLIENTS.map((client) => (
            <div
              key={client}
              className={cn(
                'font-heading text-xl sm:text-2xl font-bold tracking-wide',
                variant === 'dark'
                  ? 'text-white'
                  : 'text-paper-500 hover:text-paper-700'
              )}
            >
              {client}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className={cn(
            'mx-auto mt-10 mb-8 max-w-xs border-t',
            variant === 'dark' ? 'border-gold-400/15' : 'border-paper-200'
          )}
        />

        {/* Marketplace image logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
          {MARKETPLACE_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className={cn(
                'transition-opacity',
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
          ))}
        </div>
      </Container>
    </section>
  )
}
