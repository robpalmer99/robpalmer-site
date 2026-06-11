'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  once?: boolean
  threshold?: number
  as?: React.ElementType
  /** Pure-CSS entrance that runs from first paint, before hydration.
   *  Use for above-the-fold content (heroes). No JS involvement at all.
   *  Ignores `distance`/`once`/`threshold`; keyframe offset is fixed at 24px. */
  immediate?: boolean
}

const keyframeClassMap = {
  up: 'fade-in-up',
  down: 'fade-in-down',
  left: 'fade-in-left',
  right: 'fade-in-right',
  none: 'fade-in',
} as const

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 600,
  direction = 'up',
  distance = 24,
  once = true,
  threshold = 0.15,
  as: Component = 'div',
  immediate = false,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  // Fail-open: SSR and first client render are ALWAYS visible. 'hidden' is
  // only ever applied post-mount to elements below the viewport (an
  // invisible mutation), so JS failure means "no animation", never
  // "no content".
  const [state, setState] = useState<'visible' | 'hidden' | 'revealed'>(
    'visible'
  )

  useEffect(() => {
    if (immediate) return
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Never re-hide painted content: anything in or above the viewport at
    // mount (above-fold content, anchor-jump targets) stays visible. Only
    // genuinely below-fold elements get the scroll-reveal treatment.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setState('visible')
      return
    }

    setState('hidden')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('revealed')
          if (once) observer.unobserve(el)
        } else if (!once) {
          setState('hidden')
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [immediate, once, threshold])

  if (immediate) {
    return (
      <Component
        className={cn(keyframeClassMap[direction], className)}
        style={
          {
            '--fi-duration': `${duration}ms`,
            '--fi-delay': `${delay}ms`,
          } as React.CSSProperties
        }
      >
        {children}
      </Component>
    )
  }

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  }

  const hidden = state === 'hidden'
  return (
    <Component
      ref={ref}
      className={cn(className)}
      style={{
        opacity: hidden ? 0 : 1,
        transform: hidden ? translateMap[direction] : 'none',
        // Transition only on reveal: hiding (offscreen) is an instant snap,
        // revealing animates. The 'visible' resting state carries no
        // transition so there is nothing to animate at hydration time.
        transition:
          state === 'revealed'
            ? `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`
            : undefined,
        willChange: hidden ? 'opacity, transform' : undefined,
      }}
    >
      {children}
    </Component>
  )
}
