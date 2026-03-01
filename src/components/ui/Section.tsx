import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'alt' | 'gold'
  id?: string
  divider?: boolean
}

export function Section({ children, className, variant = 'default', id, divider = false }: SectionProps) {
  const variants = {
    default: 'bg-paper-50',
    dark: 'bg-ink-950 text-paper-100 noise-overlay',
    alt: 'bg-gradient-to-b from-paper-100 to-paper-50',
    gold: 'bg-gradient-to-r from-gold-50 via-gold-100/50 to-gold-50',
  }

  return (
    <section
      id={id}
      className={cn(
        'py-16 sm:py-20 lg:py-24',
        variants[variant],
        divider && 'section-divider',
        className
      )}
    >
      {children}
    </section>
  )
}
