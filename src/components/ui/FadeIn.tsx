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
}

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
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [once, threshold])

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
    none: 'none',
  }

  return (
    <Component
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : translateMap[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms, transform ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      }}
    >
      {children}
    </Component>
  )
}

interface StaggerChildrenProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  baseDelay?: number
  duration?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  distance?: number
  as?: React.ElementType
}

export function StaggerChildren({
  children,
  className,
  staggerDelay = 100,
  baseDelay = 0,
  duration = 600,
  direction = 'up',
  distance = 24,
  as: Component = 'div',
}: StaggerChildrenProps) {
  const childArray = Array.isArray(children) ? children : [children]

  return (
    <Component className={className}>
      {childArray.map((child, index) => (
        <FadeIn
          key={index}
          delay={baseDelay + index * staggerDelay}
          duration={duration}
          direction={direction}
          distance={distance}
        >
          {child}
        </FadeIn>
      ))}
    </Component>
  )
}
