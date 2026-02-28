'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '@/lib/constants'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'

export function Header() {
  const scrolled = useScrolled()

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-ink-950/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <Container>
        <nav aria-label="Main navigation" className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="block">
            <Logo className="h-10 sm:h-11 w-auto" variant="light" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-heading text-sm font-medium text-paper-300 hover:text-gold-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/blog?search=true"
              aria-label="Search blog"
              className="text-paper-300 hover:text-gold-400 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </Link>
            <Button href="/contact" size="sm">
              Book a Call
            </Button>
          </div>

          {/* Mobile menu (button + sliding nav panel) */}
          <MobileMenu />
        </nav>
      </Container>
    </header>
  )
}
