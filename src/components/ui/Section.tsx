import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'dark' | 'alt' | 'gold'
  id?: string
}

export function Section({ children, className, variant = 'default', id }: SectionProps) {
  const variants = {
    default: 'bg-paper-50',
    dark: 'bg-ink-950 text-paper-100',
    alt: 'bg-paper-100',
    gold: 'bg-gold-50',
  }

  return (
    <section id={id} className={cn('py-16 sm:py-20 lg:py-24', variants[variant], className)}>
      {children}
    </section>
  )
}
