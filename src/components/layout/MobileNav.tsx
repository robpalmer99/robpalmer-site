'use client'

import { useEffect } from 'react'
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

  // Auto-close on route change (e.g. browser back/forward)
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  return (
    <div
      className={cn(
        'lg:hidden bg-ink-950 border-t border-ink-700 overflow-hidden transition-all duration-300',
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      )}
    >
      <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block py-3 px-4 font-heading text-base font-medium text-paper-300 hover:text-gold-400 hover:bg-ink-800 rounded-lg transition-colors"
          >
            {link.label}
          </Link>
        ))}
        <div className="pt-3 px-4">
          <Button href="/contact" className="w-full" onClick={onClose}>
            Book a Call
          </Button>
        </div>
      </nav>
    </div>
  )
}
