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
        'py-10 sm:py-12',
        variant === 'dark' ? 'bg-ink-900/50' : 'bg-paper-100',
        className
      )}
    >
      <Container>
        <p
          className={cn(
            'text-center text-sm font-heading uppercase tracking-wider mb-8',
            variant === 'dark' ? 'text-paper-400' : 'text-paper-600'
          )}
        >
          Trusted by Fortune 500 brands and top direct-response marketers
        </p>

        {/* Fortune 500 text logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 mb-8">
          {FORTUNE_500_CLIENTS.map((client) => (
            <div
              key={client}
              className={cn(
                'font-heading text-xl sm:text-2xl font-bold tracking-wide opacity-40 hover:opacity-70 transition-opacity',
                variant === 'dark' ? 'text-paper-200' : 'text-paper-600'
              )}
            >
              {client}
            </div>
          ))}
        </div>

        {/* Marketplace image logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 pt-4 border-t border-ink-700/30">
          {MARKETPLACE_LOGOS.map((logo) => (
            <div
              key={logo.name}
              className="opacity-50 hover:opacity-80 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                sizes="120px"
                className={cn(
                  'h-6 sm:h-8 w-auto object-contain',
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
