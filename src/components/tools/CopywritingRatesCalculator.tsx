'use client'

import { useState, useCallback } from 'react'
import Link from 'next/link'
import {
  calculateRates,
  formatCurrency,
  PROJECT_TYPE_OPTIONS,
  EXPERIENCE_OPTIONS,
  NICHE_OPTIONS,
  PRICING_MODEL_OPTIONS,
  type ExperienceLevel,
  type ProjectType,
  type Niche,
  type PricingModel,
  type RateEstimate,
} from '@/lib/copywriting-rates'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

function SelectField({
  label,
  id,
  value,
  onChange,
  options,
}: {
  label: string
  id: string
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-heading font-semibold text-ink-900 mb-1.5">
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full rounded-lg border border-paper-300 bg-paper-50 px-4 py-3 text-base font-body text-ink-900 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%236B6760%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[center_right_1rem]"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}

function RateBar({ low, mid, high, unit }: { low: number; mid: number; high: number; unit: string }) {
  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div className="text-center flex-1">
          <p className="text-xs font-body text-paper-600 uppercase tracking-wide">Low</p>
          <p className="text-xl sm:text-2xl font-heading font-bold text-paper-600">{formatCurrency(low)}</p>
        </div>
        <div className="text-center flex-1">
          <p className="text-xs font-body text-gold-600 uppercase tracking-wide font-semibold">Recommended</p>
          <p className="text-3xl sm:text-4xl font-heading font-bold text-gold-600">{formatCurrency(mid)}</p>
        </div>
        <div className="text-center flex-1">
          <p className="text-xs font-body text-paper-600 uppercase tracking-wide">High</p>
          <p className="text-xl sm:text-2xl font-heading font-bold text-paper-600">{formatCurrency(high)}</p>
        </div>
      </div>
      {/* Visual range bar */}
      <div className="relative h-3 rounded-full bg-paper-200 overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-paper-400 via-gold-400 to-gold-600 rounded-full" style={{ width: '100%' }} />
        {/* Mid marker */}
        <div className="absolute inset-y-0 left-1/2 w-0.5 bg-ink-900 -translate-x-1/2" />
      </div>
      <p className="text-center text-sm font-body text-paper-600">{unit}</p>
    </div>
  )
}

function InfoCard({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('rounded-xl border border-paper-200 bg-white p-6 shadow-sm', className)}>
      <h3 className="text-sm font-heading font-semibold text-ink-900 uppercase tracking-wide mb-3">{title}</h3>
      {children}
    </div>
  )
}

export function CopywritingRatesCalculator() {
  const [experience, setExperience] = useState<ExperienceLevel>('intermediate')
  const [projectType, setProjectType] = useState<ProjectType>('sales-page')
  const [niche, setNiche] = useState<Niche>('general')
  const [pricingModel, setPricingModel] = useState<PricingModel>('per-project')
  const [result, setResult] = useState<RateEstimate | null>(null)

  const handleCalculate = useCallback(() => {
    const estimate = calculateRates(experience, projectType, niche, pricingModel)
    setResult(estimate)
  }, [experience, projectType, niche, pricingModel])

  return (
    <div className="space-y-8">
      {/* Input Form */}
      <div className="rounded-xl border border-paper-200 bg-white p-6 shadow-sm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <SelectField
            label="Experience Level"
            id="experience"
            value={experience}
            onChange={v => setExperience(v as ExperienceLevel)}
            options={EXPERIENCE_OPTIONS}
          />
          <SelectField
            label="Project Type"
            id="project-type"
            value={projectType}
            onChange={v => setProjectType(v as ProjectType)}
            options={PROJECT_TYPE_OPTIONS}
          />
          <SelectField
            label="Niche / Industry"
            id="niche"
            value={niche}
            onChange={v => setNiche(v as Niche)}
            options={NICHE_OPTIONS}
          />
          <SelectField
            label="Pricing Model"
            id="pricing-model"
            value={pricingModel}
            onChange={v => setPricingModel(v as PricingModel)}
            options={PRICING_MODEL_OPTIONS}
          />
        </div>
        <div className="mt-6 flex justify-center">
          <Button type="button" variant="primary" size="lg" onClick={handleCalculate}>
            Calculate My Rate
          </Button>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Rate Display */}
          <div className="rounded-xl border border-gold-200 bg-gradient-to-b from-gold-50 to-white p-8 shadow-sm">
            <h2 className="text-center font-heading text-lg font-bold text-ink-900 mb-6">
              Estimated Rate: {result.projectType.label}
              {pricingModel === 'per-project' && <span className="text-paper-600 font-normal"> ({result.experienceInfo.label} experience)</span>}
            </h2>
            <RateBar low={result.low} mid={result.mid} high={result.high} unit={result.unit} />
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Info */}
            <InfoCard title="Project Details">
              <div className="space-y-3 text-sm font-body">
                <div>
                  <p className="text-paper-600">Description</p>
                  <p className="text-ink-900">{result.projectType.description}</p>
                </div>
                <div>
                  <p className="text-paper-600">Typical Deliverables</p>
                  <p className="text-ink-900">{result.projectType.typicalDeliverables}</p>
                </div>
                <div>
                  <p className="text-paper-600">Typical Timeline</p>
                  <p className="text-ink-900">{result.projectType.typicalTimeline}</p>
                </div>
                <div className="pt-2">
                  <Link
                    href={`/services/${result.projectType.slug}`}
                    className="text-gold-600 hover:text-gold-700 underline underline-offset-2 text-sm font-heading font-medium"
                  >
                    See how a professional handles this &rarr;
                  </Link>
                </div>
              </div>
            </InfoCard>

            {/* Niche Info */}
            <InfoCard title="Niche Factor">
              <div className="space-y-3 text-sm font-body">
                <div className="flex items-center gap-2">
                  <span className="text-paper-600">Industry:</span>
                  <span className="font-medium text-ink-900">{result.nicheInfo.label}</span>
                  {result.nicheInfo.premiumFactor > 1 && (
                    <span className="inline-block rounded-full bg-gold-100 text-gold-600 border border-gold-200 px-2 py-0.5 text-xs font-medium">
                      +{Math.round((result.nicheInfo.premiumFactor - 1) * 100)}% premium
                    </span>
                  )}
                </div>
                <p className="text-ink-900">{result.nicheInfo.note}</p>
              </div>
            </InfoCard>

            {/* Pricing Model */}
            <InfoCard title={`${result.pricingModelInfo.label} Pricing`}>
              <div className="space-y-3 text-sm font-body">
                <p className="text-ink-900">{result.pricingModelInfo.description}</p>
                <div>
                  <p className="text-success-600 font-medium mb-1">Pros</p>
                  <ul className="space-y-1">
                    {result.pricingModelInfo.pros.map((pro, i) => (
                      <li key={i} className="flex gap-2 text-ink-900">
                        <span className="text-success-600 shrink-0">+</span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-error-600 font-medium mb-1">Cons</p>
                  <ul className="space-y-1">
                    {result.pricingModelInfo.cons.map((con, i) => (
                      <li key={i} className="flex gap-2 text-ink-900">
                        <span className="text-error-600 shrink-0">&ndash;</span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </InfoCard>

            {/* Upsell Opportunities */}
            {result.upsellOpportunities.length > 0 && (
              <InfoCard title="Upsell Opportunities">
                <p className="text-xs font-body text-paper-600 mb-3">
                  Increase your project value by offering complementary deliverables:
                </p>
                <ul className="space-y-2">
                  {result.upsellOpportunities.map((opp, i) => (
                    <li key={i} className="flex gap-2 text-sm font-body text-ink-900">
                      <span className="text-gold-600 shrink-0">&rarr;</span>
                      {opp}
                    </li>
                  ))}
                </ul>
              </InfoCard>
            )}
          </div>

          {/* Tips */}
          {result.tips.length > 0 && (
            <InfoCard title="Pricing Tips for Your Situation">
              <ul className="space-y-3">
                {result.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm font-body text-ink-900">
                    <span className="text-gold-600 shrink-0 font-heading font-bold">{i + 1}.</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </InfoCard>
          )}

          {/* Recalculate */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => setResult(null)}
              className="text-sm font-heading font-medium text-gold-600 hover:text-gold-700 underline underline-offset-4 cursor-pointer"
            >
              Adjust inputs and recalculate
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
