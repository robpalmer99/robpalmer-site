'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname()
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null)

  // Auto-close on route change (e.g. browser back/forward)
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  // Reset dropdown when mobile nav closes
  useEffect(() => {
    if (!isOpen) setExpandedDropdown(null)
  }, [isOpen])

  return (
    <div
      className={cn(
        'absolute left-0 right-0 top-full lg:hidden bg-ink-950 border-t border-ink-700 overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      )}
      aria-hidden={!isOpen}
    >
      <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
        {NAV_LINKS.map((item) =>
          'href' in item ? (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              tabIndex={isOpen ? 0 : -1}
              className="block py-3 px-4 font-heading text-base font-medium text-paper-300 hover:text-gold-400 hover:bg-ink-800 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <div key={item.label}>
              <button
                type="button"
                onClick={() => setExpandedDropdown(expandedDropdown === item.label ? null : item.label)}
                tabIndex={isOpen ? 0 : -1}
                aria-expanded={expandedDropdown === item.label}
                className="flex items-center justify-between w-full py-3 px-4 font-heading text-base font-medium text-paper-300 hover:text-gold-400 hover:bg-ink-800 rounded-lg transition-colors"
              >
                {item.label}
                <svg
                  aria-hidden="true"
                  className={cn(
                    'w-4 h-4 transition-transform duration-200',
                    expandedDropdown === item.label && 'rotate-180'
                  )}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={cn(
                  'overflow-hidden transition-all duration-200',
                  expandedDropdown === item.label ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                )}
              >
                {item.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={onClose}
                    tabIndex={isOpen && expandedDropdown === item.label ? 0 : -1}
                    className="block py-2.5 pl-8 pr-4 font-heading text-sm font-medium text-paper-400 hover:text-gold-400 hover:bg-ink-800 rounded-lg transition-colors"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          )
        )}
        <Link
          href="/blog?search=true"
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="flex items-center gap-3 py-3 px-4 font-heading text-base font-medium text-paper-300 hover:text-gold-400 hover:bg-ink-800 rounded-lg transition-colors"
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
          Search
        </Link>
        <div className="pt-3 px-4">
          <Button href="/call" className="w-full" onClick={onClose}>
            Book a Strategy Call
          </Button>
        </div>
      </nav>
    </div>
  )
}
