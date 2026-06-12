'use client'

import { useState, useCallback } from 'react'
import { analyzeHeadline, getScoreLabel, getScoreColor, getScoreRingColor, type HeadlineScore } from '@/lib/headline-analyzer'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

function ScoreRing({ score }: { score: number }) {
  const radius = 54
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference
  const colorClass = getScoreRingColor(score)

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width="140" height="140" className="-rotate-90">
        <circle
          cx="70" cy="70" r={radius}
          fill="none"
          strokeWidth="8"
          className="stroke-paper-200"
        />
        <circle
          cx="70" cy="70" r={radius}
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn(colorClass, 'transition-all duration-700 ease-out')}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={cn('text-3xl font-heading font-bold', getScoreColor(score))}>{score}</span>
        <span className="text-xs text-paper-600 font-body">{getScoreLabel(score)}</span>
      </div>
    </div>
  )
}

function StatCard({ label, value, sublabel }: { label: string; value: string | number; sublabel?: string }) {
  return (
    <div className="rounded-lg border border-paper-200 bg-white p-4 text-center">
      <p className="text-xs font-body text-paper-600 uppercase tracking-wide">{label}</p>
      <p className="mt-1 text-2xl font-heading font-bold text-ink-900">{value}</p>
      {sublabel && <p className="mt-0.5 text-xs font-body text-paper-600">{sublabel}</p>}
    </div>
  )
}

function WordBalanceBar({ balance }: { balance: HeadlineScore['wordBalance'] }) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-heading font-semibold text-ink-900 uppercase tracking-wide">Word Balance</h3>
      {[
        { label: 'Common', value: balance.common, color: 'bg-paper-400' },
        { label: 'Uncommon', value: balance.uncommon, color: 'bg-ink-700' },
        { label: 'Emotional', value: balance.emotional, color: 'bg-gold-500' },
        { label: 'Power', value: balance.power, color: 'bg-gold-400' },
      ].map(({ label, value, color }) => (
        <div key={label} className="flex items-center gap-3">
          <span className="w-20 text-xs font-body text-paper-600">{label}</span>
          <div className="flex-1 h-2.5 rounded-full bg-paper-200 overflow-hidden">
            <div
              className={cn('h-full rounded-full transition-all duration-700 ease-out', color)}
              style={{ width: `${Math.max(value, 2)}%` }}
            />
          </div>
          <span className="w-10 text-right text-xs font-body font-medium text-ink-900">{value}%</span>
        </div>
      ))}
    </div>
  )
}

function TagPill({ children, variant = 'default' }: { children: React.ReactNode; variant?: 'emotional' | 'power' | 'default' }) {
  const styles = {
    emotional: 'bg-gold-100 text-gold-600 border-gold-200',
    power: 'bg-ink-950 text-paper-100 border-ink-800',
    default: 'bg-paper-100 text-paper-600 border-paper-200',
  }
  return (
    <span className={cn('inline-block rounded-full border px-3 py-1 text-xs font-body font-medium', styles[variant])}>
      {children}
    </span>
  )
}

const EXAMPLE_HEADLINES = [
  '7 Proven Headline Formulas That Generated $523M in Sales',
  'How to Write Headlines That Convert Cold Traffic Into Buyers',
  'The Secret Psychology Behind Headlines That Make People Click',
  'Stop Writing Boring Headlines: 5 Direct-Response Tricks That Work',
  'Why Your Landing Page Headlines Are Killing Your Conversion Rate',
]

export function HeadlineAnalyzer() {
  const [headline, setHeadline] = useState('')
  const [result, setResult] = useState<HeadlineScore | null>(null)
  const [analyzedHeadline, setAnalyzedHeadline] = useState('')

  const handleAnalyze = useCallback(() => {
    if (!headline.trim()) return
    const score = analyzeHeadline(headline)
    setResult(score)
    setAnalyzedHeadline(headline.trim())
  }, [headline])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAnalyze()
    }
  }, [handleAnalyze])

  const handleExample = useCallback((example: string) => {
    setHeadline(example)
    const score = analyzeHeadline(example)
    setResult(score)
    setAnalyzedHeadline(example)
  }, [])

  return (
    <div className="space-y-8">
      {/* Input Area */}
      <div className="rounded-xl border border-paper-200 bg-white p-6 shadow-sm">
        <label htmlFor="headline-input" className="block text-sm font-heading font-semibold text-ink-900 mb-2">
          Enter your headline
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            id="headline-input"
            type="text"
            value={headline}
            onChange={e => setHeadline(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type or paste your headline here..."
            className="flex-1 rounded-lg border border-paper-300 bg-paper-50 px-4 py-3 text-base font-body text-ink-900 placeholder:text-paper-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-colors"
            autoComplete="off"
            aria-describedby="headline-hint"
          />
          <Button
            type="button"
            variant="primary"
            size="lg"
            onClick={handleAnalyze}
            disabled={!headline.trim()}
          >
            Analyze
          </Button>
        </div>
        <p id="headline-hint" className="mt-2 text-xs font-body text-paper-600">
          Press Enter or click Analyze to score your headline
        </p>
      </div>

      {/* Example Headlines */}
      {!result && (
        <div className="space-y-3">
          <p className="text-sm font-heading font-semibold text-ink-900">Try an example:</p>
          <div className="flex flex-wrap gap-2">
            {EXAMPLE_HEADLINES.map(ex => (
              <button
                key={ex}
                type="button"
                onClick={() => handleExample(ex)}
                className="rounded-lg border border-paper-200 bg-white px-3 py-2 text-left text-sm font-body text-paper-600 hover:border-gold-200 hover:text-ink-900 hover:shadow-sm transition-all cursor-pointer"
              >
                &ldquo;{ex}&rdquo;
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Analyzed headline echo */}
          <div className="rounded-xl border border-gold-200 bg-gold-50 p-4">
            <p className="text-center text-lg font-heading font-semibold text-ink-900">
              &ldquo;{analyzedHeadline}&rdquo;
            </p>
          </div>

          {/* Score + Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start">
            {/* Score Ring */}
            <div className="flex justify-center md:justify-start">
              <ScoreRing score={result.overall} />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <StatCard label="Words" value={result.wordCount} sublabel={result.wordCount >= 6 && result.wordCount <= 12 ? 'Ideal range' : result.wordCount < 6 ? 'Too short' : 'Consider trimming'} />
              <StatCard label="Characters" value={result.charCount} sublabel={result.charCount <= 65 ? 'SERP friendly' : 'May truncate'} />
              <StatCard label="Type" value={result.headlineType} />
              <StatCard label="Reading Ease" value={result.readingEase === 'easy' ? 'Easy' : result.readingEase === 'moderate' ? 'Moderate' : 'Hard'} sublabel={result.readingEase === 'easy' ? 'Scans quickly' : result.readingEase === 'hard' ? 'Simplify' : ''} />
            </div>
          </div>

          {/* Word Balance */}
          <div className="rounded-xl border border-paper-200 bg-white p-6 shadow-sm">
            <WordBalanceBar balance={result.wordBalance} />
          </div>

          {/* Detected Words */}
          {(result.emotionalWords.length > 0 || result.powerWords.length > 0) && (
            <div className="rounded-xl border border-paper-200 bg-white p-6 shadow-sm space-y-4">
              <h3 className="text-sm font-heading font-semibold text-ink-900 uppercase tracking-wide">Detected Words</h3>
              {result.emotionalWords.length > 0 && (
                <div>
                  <p className="text-xs font-body text-paper-600 mb-2">Emotional Triggers</p>
                  <div className="flex flex-wrap gap-2">
                    {result.emotionalWords.map(w => (
                      <TagPill key={w} variant="emotional">{w}</TagPill>
                    ))}
                  </div>
                </div>
              )}
              {result.powerWords.length > 0 && (
                <div>
                  <p className="text-xs font-body text-paper-600 mb-2">Power Words</p>
                  <div className="flex flex-wrap gap-2">
                    {result.powerWords.map(w => (
                      <TagPill key={w} variant="power">{w}</TagPill>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Strengths & Tips */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {result.strengths.length > 0 && (
              <div className="rounded-xl border border-paper-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-heading font-semibold text-success-600 uppercase tracking-wide mb-3">
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {result.strengths.map((s, i) => (
                    <li key={i} className="flex gap-2 text-sm font-body text-ink-900">
                      <span className="text-success-600 shrink-0" aria-hidden="true">+</span>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {result.tips.length > 0 && (
              <div className="rounded-xl border border-paper-200 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-heading font-semibold text-gold-600 uppercase tracking-wide mb-3">
                  Tips to Improve
                </h3>
                <ul className="space-y-2">
                  {result.tips.map((t, i) => (
                    <li key={i} className="flex gap-2 text-sm font-body text-ink-900">
                      <span className="text-gold-600 shrink-0" aria-hidden="true">&rarr;</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Properties Row */}
          <div className="flex flex-wrap gap-2">
            <TagPill>{result.headlineType}</TagPill>
            <TagPill>{result.sentiment === 'positive' ? 'Positive Sentiment' : result.sentiment === 'negative' ? 'Negative Sentiment' : 'Neutral Sentiment'}</TagPill>
            {result.hasNumber && <TagPill>Contains Number</TagPill>}
            {result.isQuestion && <TagPill>Question Format</TagPill>}
          </div>

          {/* Try Another */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => {
                setHeadline('')
                setResult(null)
                setAnalyzedHeadline('')
              }}
              className="text-sm font-heading font-medium text-gold-600 hover:text-gold-700 underline underline-offset-4 cursor-pointer"
            >
              Analyze another headline
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
