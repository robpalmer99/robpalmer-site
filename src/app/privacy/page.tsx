import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for robpalmer.com — how we collect, use, and protect your personal information.',
  alternates: {
    canonical: `${SITE_URL}/privacy`,
  },
}

export default function PrivacyPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Privacy Policy"
        subheadline="Last updated: February 28, 2026"
      />
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <Section>
        <Container>
          <div className="prose prose-lg max-w-3xl mx-auto font-body">
            <h2>1. Introduction</h2>
            <p>
              Rob Palmer (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy. This Privacy Policy
              explains how we collect, use, and protect information when you
              visit robpalmer.com (the &ldquo;Site&rdquo;).
            </p>

            <h2>2. Information We Collect</h2>

            <h3>Information You Provide</h3>
            <p>
              When you use the <Link href="/contact">contact form</Link>, you
              voluntarily provide your name, email address, and message content.
              We use this information solely to respond to your inquiry.
            </p>

            <h3>Information Collected Automatically</h3>
            <p>
              We use the following services that may collect data automatically:
            </p>
            <ul>
              <li>
                <strong>Google Analytics (GA4)</strong> — collects anonymized
                usage data including pages visited, time on site, device type,
                and approximate geographic location. Google Analytics uses
                cookies to distinguish users. See{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Vercel Analytics &amp; Speed Insights</strong> —
                collects anonymized, cookie-free performance and usage metrics.
                See{' '}
                <a
                  href="https://vercel.com/docs/analytics/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vercel&apos;s Analytics Privacy Policy
                </a>
                .
              </li>
            </ul>

            <h3>Server Logs</h3>
            <p>
              Our hosting provider (Vercel) automatically logs IP addresses,
              browser type, and request timestamps for security and operational
              purposes. These logs are retained according to Vercel&apos;s data
              retention policies.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use collected information to:</p>
            <ul>
              <li>
                Respond to inquiries submitted through the contact form.
              </li>
              <li>
                Understand how visitors use the Site so we can improve content
                and performance.
              </li>
              <li>
                Protect the Site from abuse (e.g., rate limiting on the contact
                form).
              </li>
            </ul>

            <h2>4. Cookies</h2>
            <p>
              This Site uses cookies set by Google Analytics to measure traffic
              and usage patterns. You can opt out of Google Analytics by
              installing the{' '}
              <a
                href="https://tools.google.com/dlpage/gaoptout"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Analytics Opt-out Browser Add-on
              </a>
              , or by adjusting your browser&apos;s cookie settings.
            </p>

            <h2>5. Data Sharing</h2>
            <p>
              We do not sell, rent, or trade your personal information. We share
              data only with:
            </p>
            <ul>
              <li>
                <strong>Resend</strong> — our email delivery provider, which
                processes contact form submissions to deliver them to us. See{' '}
                <a
                  href="https://resend.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resend&apos;s Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>Google</strong> and <strong>Vercel</strong> — as
                described above for analytics purposes.
              </li>
            </ul>

            <h2>6. Data Retention</h2>
            <p>
              Contact form submissions are retained only as long as necessary to
              respond to your inquiry and maintain business records. Analytics
              data is retained according to the default retention settings of
              each provider (26 months for Google Analytics).
            </p>

            <h2>7. Your Rights</h2>
            <p>
              Depending on your jurisdiction, you may have the right to access,
              correct, delete, or restrict the processing of your personal data.
              California residents have additional rights under the CCPA. To
              exercise any of these rights, contact us at the email below.
            </p>

            <h2>8. Children&apos;s Privacy</h2>
            <p>
              This Site is not directed at individuals under the age of 16. We
              do not knowingly collect personal information from children.
            </p>

            <h2>9. Security</h2>
            <p>
              We implement reasonable security measures including HTTPS
              encryption, rate limiting, input validation, and honeypot spam
              protection. However, no method of transmission over the internet is
              100% secure.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The
              &ldquo;last updated&rdquo; date at the top of this page reflects
              the most recent revision.
            </p>

            <h2>11. Contact</h2>
            <p>
              If you have questions about this Privacy Policy or wish to exercise
              your data rights, please contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
