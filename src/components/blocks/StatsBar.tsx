import { Container } from '@/components/ui/Container'
import { CountUp } from '@/components/ui/CountUp'
import { STATS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface StatsBarProps {
  variant?: 'dark' | 'light'
  className?: string
}

export function StatsBar({ variant = 'dark', className }: StatsBarProps) {
  return (
    <section
      aria-label="Key statistics"
      className={cn(
        'py-10 sm:py-12',
        variant === 'dark' ? 'bg-ink-900' : 'bg-paper-100 border-y border-paper-200',
        className
      )}
    >
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((stat, index) => (
            <div key={index}>
              <dt
                className={cn(
                  'font-heading text-4xl sm:text-5xl font-bold tracking-tight',
                  variant === 'dark' ? 'text-gold-400' : 'text-ink-950'
                )}
              >
                <CountUp value={stat.value} />
              </dt>
              <dd
                className={cn(
                  'mt-2 text-sm font-heading uppercase tracking-wider',
                  variant === 'dark' ? 'text-paper-400' : 'text-paper-600'
                )}
              >
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
