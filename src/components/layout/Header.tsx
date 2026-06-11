'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS, type NavItem } from '@/lib/constants'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/utils'

type NavDropdown = Extract<NavItem, { children: readonly { label: string; href: string }[] }>

function DropdownNav({ item }: { item: NavDropdown }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([])
  const menuId = `dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`

  const close = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        close()
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, close])

  function handleButtonKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Escape') {
      close()
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIsOpen(true)
      requestAnimationFrame(() => itemRefs.current[0]?.focus())
    }
  }

  function handleMenuKeyDown(e: React.KeyboardEvent) {
    const items = itemRefs.current.filter(Boolean) as HTMLAnchorElement[]
    const currentIndex = items.indexOf(e.target as HTMLAnchorElement)

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = currentIndex + 1 < items.length ? currentIndex + 1 : 0
      items[next]?.focus()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const prev = currentIndex - 1 >= 0 ? currentIndex - 1 : items.length - 1
      items[prev]?.focus()
    } else if (e.key === 'Escape') {
      e.preventDefault()
      close()
      containerRef.current?.querySelector('button')?.focus()
    }
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleButtonKeyDown}
        className="flex items-center gap-1 font-heading text-sm font-medium text-paper-300 hover:text-gold-400 transition-colors"
      >
        {item.label}
        <svg
          aria-hidden="true"
          className={cn('w-3.5 h-3.5 transition-transform', isOpen && 'rotate-180')}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id={menuId}
        role="menu"
        aria-label={`${item.label} submenu`}
        onKeyDown={handleMenuKeyDown}
        className={cn(
          'absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200',
          isOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
        )}
      >
        <div className="bg-ink-950 border border-ink-700 rounded-lg shadow-xl py-2 min-w-[180px]">
          {item.children.map((child, index) => (
            <Link
              key={child.href}
              ref={(el) => { itemRefs.current[index] = el }}
              href={child.href}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              onClick={close}
              className="block px-4 py-2.5 font-heading text-sm font-medium text-paper-300 hover:text-gold-400 hover:bg-ink-800 focus-visible:text-gold-400 focus-visible:bg-ink-800 transition-colors"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

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
            <Logo className="h-8 sm:h-11 w-auto" variant="light" />
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
                <DropdownNav key={item.label} item={item as NavDropdown} />
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
            <Button href="/call" size="sm">
              Book a Strategy Call
            </Button>
          </div>

          {/* Mobile: compact booking CTA + menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button href="/call" size="sm" className="whitespace-nowrap px-3">
              Book a Call
            </Button>
            <MobileMenu />
          </div>
        </nav>
      </Container>
    </header>
  )
}
