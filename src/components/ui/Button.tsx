import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  external,
  onClick,
  type = 'button',
  disabled,
}: ButtonProps) {
  const variants = {
    primary:
      'bg-gold-400 text-ink-950 hover:bg-gold-500 hover:scale-[1.02] active:scale-[0.98] active:bg-gold-600 font-heading font-semibold shadow-md shadow-gold-400/20',
    secondary:
      'bg-ink-950 text-paper-50 hover:bg-ink-800 hover:scale-[1.02] active:scale-[0.98] active:bg-ink-700 font-heading font-semibold shadow-md shadow-ink-950/20',
    outline:
      'border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-ink-950 hover:scale-[1.02] active:scale-[0.98] font-heading font-semibold backdrop-blur-sm',
    ghost:
      'text-gold-600 hover:text-gold-700 underline-offset-4 hover:underline font-heading font-medium',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const baseClasses = cn(
    'inline-flex items-center justify-center rounded-lg transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-600',
    variants[variant],
    sizes[size],
    className
  )

  if (href) {
    if (external) {
      return (
        <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cn(baseClasses, disabled && 'opacity-50 cursor-not-allowed')}>
      {children}
    </button>
  )
}
