import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-ink-900 text-paper-300 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-ink-700">
          {/* Brand */}
          <div>
            <Link href="/" className="block">
              <Logo className="h-10 w-auto" variant="light" />
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-paper-400">
              Veteran direct-response copywriter specializing in VSLs, TSLs,
              email sequences, and sales funnels. AI-powered. Battle-tested.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-paper-200 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper-400 hover:text-gold-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-sm text-paper-400 hover:text-gold-400 transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-sm text-paper-400 hover:text-gold-400 transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-paper-400 hover:text-gold-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-paper-200 mb-4">
              Get in Touch
            </h3>
            <p className="text-sm text-paper-400 mb-4">
              Ready to discuss your next campaign? Book a free strategy call or send me a message.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-heading font-semibold text-gold-400 hover:text-gold-500 transition-colors"
            >
              Book a Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-paper-400">
            &copy; {new Date().getFullYear()} Rob Palmer. All rights reserved.
          </p>
          <p className="text-xs text-paper-400">
            Direct-Response Copywriter &bull; AI-Powered &bull; Battle-Tested
          </p>
        </div>
      </Container>
    </footer>
  )
}
