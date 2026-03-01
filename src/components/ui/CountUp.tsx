'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  value: string
  className?: string
  duration?: number
}

export function CountUp({ value, className, duration = 2000 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [displayValue, setDisplayValue] = useState(value)

  // Extract numeric part, prefix, and suffix
  const match = value.match(/^([^0-9]*)([0-9,]+\.?[0-9]*)(.*)$/)
  const prefix = match?.[1] || ''
  const numericStr = match?.[2]?.replace(/,/g, '') || ''
  const suffix = match?.[3] || ''
  const target = parseFloat(numericStr)
  const hasDecimals = numericStr.includes('.')
  const decimalPlaces = hasDecimals ? (numericStr.split('.')[1]?.length || 0) : 0

  useEffect(() => {
    const el = ref.current
    if (!el || hasAnimated) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setHasAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          observer.unobserve(el)
          animate()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasAnimated])

  function animate() {
    if (isNaN(target) || target === 0) return

    const startTime = performance.now()
    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const current = easedProgress * target

      const formatted = hasDecimals
        ? current.toFixed(decimalPlaces)
        : Math.floor(current).toLocaleString()

      setDisplayValue(`${prefix}${formatted}${suffix}`)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setDisplayValue(value)
      }
    }

    setDisplayValue(`${prefix}0${suffix}`)
    requestAnimationFrame(step)
  }

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  )
}
