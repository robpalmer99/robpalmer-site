'use client'

import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS, type NavItem } from '@/lib/constants'
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
            {NAV_LINKS.map((item) =>
              'href' in item ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-heading text-sm font-medium text-paper-300 hover:text-gold-400 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <div key={item.label} className="relative group">
                  <button
                    type="button"
                    className="flex items-center gap-1 font-heading text-sm font-medium text-paper-300 hover:text-gold-400 transition-colors"
                  >
                    {item.label}
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                    <div className="bg-ink-950 border border-ink-700 rounded-lg shadow-xl py-2 min-w-[180px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 font-heading text-sm font-medium text-paper-300 hover:text-gold-400 hover:bg-ink-800 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
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
