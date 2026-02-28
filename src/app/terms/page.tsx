import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Breadcrumbs } from '@/components/layout/Breadcrumbs'
import { SITE_URL, CONTACT_EMAIL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'Terms and conditions governing the use of robpalmer.com and the copywriting services provided by Rob Palmer.',
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
}

export default function TermsPage() {
  return (
    <>
      <Hero
        variant="page"
        headline="Terms & Conditions"
        subheadline="Last updated: February 28, 2026"
      />
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <Section>
        <Container>
          <div className="prose prose-lg max-w-3xl mx-auto font-body">
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using robpalmer.com (the &ldquo;Site&rdquo;), you
              agree to be bound by these Terms &amp; Conditions. If you do not
              agree, please do not use the Site.
            </p>

            <h2>2. Services</h2>
            <p>
              Rob Palmer (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) provides direct-response copywriting and
              conversion-optimization services. All engagements are governed by a
              separate written agreement or proposal between Rob Palmer and the
              client. These Terms apply to your use of the Site itself, not to
              any client engagement.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this Site — including text, graphics, logos, images,
              blog posts, and design elements — is the property of Rob Palmer or
              its licensors and is protected by copyright and other intellectual
              property laws. You may not reproduce, distribute, or create
              derivative works from this content without prior written consent.
            </p>

            <h2>4. Use of the Site</h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Site for any unlawful purpose or in violation of
                applicable laws.
              </li>
              <li>
                Attempt to gain unauthorized access to any portion of the Site or
                its related systems.
              </li>
              <li>
                Scrape, data-mine, or use automated tools to extract content from
                the Site, except as permitted by our robots.txt file.
              </li>
              <li>
                Submit false, misleading, or spam content through the contact
                form.
              </li>
            </ul>

            <h2>5. Blog Content & Advice</h2>
            <p>
              Blog posts and other educational content on this Site are provided
              for informational purposes only. They do not constitute
              professional advice. Results described in case studies and
              testimonials are specific to those engagements and are not
              guaranteed for future projects.
            </p>

            <h2>6. Testimonials & Results</h2>
            <p>
              Testimonials displayed on this Site reflect the experiences of
              individual clients. Past results — including revenue figures and
              conversion rates — are specific to each campaign and depend on
              factors including market conditions, offer quality, and traffic
              sources. We do not guarantee specific outcomes.
            </p>

            <h2>7. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites or services. We
              are not responsible for the content, privacy practices, or
              availability of those external sites.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Rob Palmer shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising from your use of the Site or reliance on
              its content. The Site is provided on an &ldquo;as is&rdquo; and
              &ldquo;as available&rdquo; basis without warranties of any kind.
            </p>

            <h2>9. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Rob Palmer from any
              claims, damages, or expenses arising from your use of the Site or
              violation of these Terms.
            </p>

            <h2>10. Changes to These Terms</h2>
            <p>
              We may update these Terms from time to time. The &ldquo;last
              updated&rdquo; date at the top of this page reflects the most
              recent revision. Continued use of the Site after changes
              constitutes acceptance of the updated Terms.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of the State of California, without regard to conflict-of-law
              principles.
            </p>

            <h2>12. Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}
