import type { Metadata } from 'next'
import { Hero } from '@/components/blocks/Hero'
import { Section } from '@/components/ui/Section'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <>
      <Hero
        variant="minimal"
        headline="Page Not Found"
      />
      <Section>
        <Container>
          <div className="max-w-xl mx-auto text-center py-12">
            <p className="text-lg text-ink-700 font-body mb-8">
              The page you are looking for does not exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/">Go to Homepage</Button>
              <Button href="/call" variant="outline">
                Book a Strategy Call
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
