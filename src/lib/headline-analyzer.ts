/**
 * Headline analyzer scoring engine.
 *
 * Scores headlines on multiple dimensions based on direct-response
 * copywriting principles and advertising research.
 */

// ─── Word lists ──────────────────────────────────────────────────────────────

const POWER_WORDS = new Set([
  // Urgency
  'now', 'today', 'instant', 'immediately', 'hurry', 'fast', 'quick', 'rapid',
  'limited', 'deadline', 'expires', 'urgent', 'rush', 'final',
  // Exclusivity
  'secret', 'hidden', 'exclusive', 'insider', 'private', 'confidential',
  'underground', 'banned', 'classified', 'restricted', 'invitation',
  // Authority
  'proven', 'guaranteed', 'certified', 'official', 'expert', 'professional',
  'research', 'science', 'scientific', 'study', 'data', 'evidence',
  // Value
  'free', 'bonus', 'save', 'discount', 'bargain', 'cheap', 'affordable',
  'valuable', 'priceless', 'profit', 'revenue', 'roi', 'wealth',
  // Results
  'results', 'transform', 'breakthrough', 'revolutionary', 'ultimate',
  'powerful', 'massive', 'skyrocket', 'explode', 'double', 'triple',
  'boost', 'surge', 'dominate', 'crush', 'destroy', 'eliminate',
  // Trust
  'authentic', 'genuine', 'real', 'honest', 'truth', 'trusted', 'reliable',
  'tested', 'verified', 'backed', 'endorsed',
  // Curiosity
  'strange', 'weird', 'bizarre', 'shocking', 'surprising', 'unexpected',
  'little-known', 'remarkable', 'astonishing', 'unbelievable', 'jaw-dropping',
])

const EMOTIONAL_WORDS = new Set([
  // Fear / Pain
  'afraid', 'agony', 'anxiety', 'avoid', 'beware', 'catastrophe', 'collapse',
  'crisis', 'danger', 'deadly', 'devastating', 'disaster', 'dread', 'fail',
  'failure', 'fear', 'frightening', 'heartbreaking', 'helpless', 'horrible',
  'hurt', 'kill', 'lose', 'losing', 'loss', 'mistake', 'nightmare', 'pain',
  'painful', 'panic', 'pitfall', 'risk', 'ruin', 'scam', 'scary', 'struggle',
  'suffer', 'terrible', 'terrifying', 'threat', 'toxic', 'trap', 'trouble',
  'victim', 'vulnerable', 'warning', 'worry', 'worst',
  // Desire / Pleasure
  'amazing', 'awesome', 'beautiful', 'best', 'bliss', 'brilliant', 'celebrate',
  'confident', 'delight', 'dream', 'effortless', 'enjoy', 'epic',
  'euphoria', 'excited', 'extraordinary', 'fantastic', 'fortune', 'freedom',
  'fulfilled', 'gorgeous', 'grateful', 'happiness', 'happy', 'heaven',
  'hero', 'incredible', 'inspire', 'inspiring', 'joy', 'legendary',
  'life-changing', 'love', 'lucky', 'luxurious', 'luxury', 'magic',
  'magical', 'magnificent', 'miracle', 'obsessed', 'paradise', 'passion',
  'passionate', 'perfect', 'phenomenal', 'pleasure', 'proud', 'remarkable',
  'sensational', 'spectacular', 'stunning', 'success', 'superb', 'thrive',
  'thriving', 'triumphant', 'unforgettable', 'unstoppable', 'victory',
  'wonderful',
  // Anger / Frustration
  'angry', 'annoying', 'brutal', 'cruel', 'disgusting', 'enraged',
  'fed-up', 'frustrated', 'furious', 'hate', 'infuriating', 'lies',
  'livid', 'manipulate', 'outraged', 'revenge', 'ridiculous', 'sick',
  'tired', 'unfair',
])

const COMMON_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for',
  'of', 'with', 'by', 'from', 'is', 'are', 'was', 'were', 'be', 'been',
  'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would',
  'could', 'should', 'may', 'might', 'shall', 'can', 'need', 'must',
  'it', 'its', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she',
  'we', 'they', 'me', 'him', 'her', 'us', 'them', 'my', 'your', 'his',
  'our', 'their', 'what', 'which', 'who', 'whom', 'when', 'where', 'why',
  'how', 'all', 'each', 'every', 'both', 'few', 'more', 'most', 'other',
  'some', 'such', 'no', 'not', 'only', 'same', 'so', 'than', 'too',
  'very', 'just', 'about', 'up', 'out', 'if', 'then', 'as', 'into',
])

// ─── Types ───────────────────────────────────────────────────────────────────

export interface HeadlineScore {
  overall: number // 0-100
  wordCount: number
  charCount: number
  wordBalance: {
    common: number
    uncommon: number
    emotional: number
    power: number
  }
  headlineType: string
  sentiment: 'positive' | 'negative' | 'neutral'
  readingEase: 'easy' | 'moderate' | 'hard'
  hasNumber: boolean
  startsWithNumber: boolean
  isQuestion: boolean
  tips: string[]
  strengths: string[]
  emotionalWords: string[]
  powerWords: string[]
}

// ─── Scoring ─────────────────────────────────────────────────────────────────

function getWords(headline: string): string[] {
  return headline
    .toLowerCase()
    .replace(/[^a-z0-9\s'-]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 0)
}

function classifyHeadlineType(headline: string): string {
  const lower = headline.toLowerCase().trim()

  if (/^\d+\s/.test(lower) || /\b\d+\s+(ways|tips|tricks|steps|reasons|secrets|strategies|mistakes|lessons|examples|ideas|things|facts|rules|signs|habits|tools|methods|formulas|principles)\b/.test(lower)) {
    return 'List / Listicle'
  }
  if (/^(how\s+to|how\s+i|how\s+do|how\s+can|how\s+the)\b/.test(lower)) {
    return 'How-To'
  }
  if (/^(why|what|who|when|where|which|is|are|do|does|can|could|should|will|would|have)\b/.test(lower) || lower.endsWith('?')) {
    return 'Question'
  }
  if (/^(stop|start|never|always|avoid|don\'t|do\s+not|quit|beware|warning)\b/.test(lower)) {
    return 'Command / Warning'
  }
  if (/^(the\s+ultimate|the\s+complete|the\s+definitive|the\s+essential|a\s+complete|a\s+guide|the\s+guide)\b/.test(lower)) {
    return 'Guide / Resource'
  }
  if (/\bvs\.?\b|\bversus\b|\bcompared\b|\bor\b/.test(lower) && lower.length < 100) {
    return 'Comparison'
  }
  return 'Statement'
}

function detectSentiment(words: string[]): 'positive' | 'negative' | 'neutral' {
  const positiveIndicators = new Set([
    'best', 'top', 'great', 'amazing', 'proven', 'powerful', 'ultimate',
    'success', 'win', 'boost', 'grow', 'improve', 'master', 'perfect',
    'brilliant', 'love', 'free', 'easy', 'simple', 'fast', 'smart',
  ])
  const negativeIndicators = new Set([
    'worst', 'avoid', 'stop', 'never', 'mistake', 'fail', 'wrong',
    'bad', 'terrible', 'horrible', 'kill', 'dead', 'dying', 'lose',
    'hate', 'scam', 'warning', 'danger', 'risk', 'toxic', 'trap',
  ])

  let pos = 0
  let neg = 0
  for (const w of words) {
    if (positiveIndicators.has(w)) pos++
    if (negativeIndicators.has(w)) neg++
  }

  if (pos > neg) return 'positive'
  if (neg > pos) return 'negative'
  return 'neutral'
}

function assessReadingEase(words: string[]): 'easy' | 'moderate' | 'hard' {
  if (words.length === 0) return 'easy'
  const avgWordLength = words.reduce((sum, w) => sum + w.length, 0) / words.length
  const longWords = words.filter(w => w.length > 8).length
  const longWordRatio = longWords / words.length

  if (avgWordLength <= 5 && longWordRatio <= 0.1) return 'easy'
  if (avgWordLength <= 6.5 && longWordRatio <= 0.25) return 'moderate'
  return 'hard'
}

export function analyzeHeadline(headline: string): HeadlineScore {
  const trimmed = headline.trim()
  const words = getWords(trimmed)
  const wordCount = words.length
  const charCount = trimmed.length

  // Word categorization
  const foundEmotional: string[] = []
  const foundPower: string[] = []
  let commonCount = 0
  let uncommonCount = 0

  for (const word of words) {
    const isCommon = COMMON_WORDS.has(word)
    const isEmotional = EMOTIONAL_WORDS.has(word)
    const isPower = POWER_WORDS.has(word)

    if (isEmotional) foundEmotional.push(word)
    if (isPower) foundPower.push(word)

    if (isCommon) {
      commonCount++
    } else if (!isEmotional && !isPower) {
      uncommonCount++
    }
  }

  const emotionalCount = foundEmotional.length
  const powerCount = foundPower.length

  const wordBalance = wordCount > 0
    ? {
        common: Math.round((commonCount / wordCount) * 100),
        uncommon: Math.round((uncommonCount / wordCount) * 100),
        emotional: Math.round((emotionalCount / wordCount) * 100),
        power: Math.round((powerCount / wordCount) * 100),
      }
    : { common: 0, uncommon: 0, emotional: 0, power: 0 }

  const headlineType = classifyHeadlineType(trimmed)
  const sentiment = detectSentiment(words)
  const readingEase = assessReadingEase(words)
  const hasNumber = /\d/.test(trimmed)
  const startsWithNumber = /^\d/.test(trimmed)
  const isQuestion = trimmed.endsWith('?')

  // ─── Overall score ───────────────────────────────────────────────
  let score = 50 // Base score

  // Word count scoring (ideal: 6-12 words)
  if (wordCount >= 6 && wordCount <= 12) {
    score += 15
  } else if (wordCount >= 4 && wordCount <= 15) {
    score += 8
  } else if (wordCount < 4) {
    score -= 10
  } else {
    score -= 5
  }

  // Character count (ideal: 50-65 for SERP display)
  if (charCount >= 40 && charCount <= 65) {
    score += 10
  } else if (charCount >= 30 && charCount <= 80) {
    score += 5
  } else if (charCount > 80) {
    score -= 5
  }

  // Emotional words (having some is good, too many is hype)
  if (emotionalCount >= 1 && emotionalCount <= 3) {
    score += 10
  } else if (emotionalCount > 3) {
    score += 5
  }

  // Power words
  if (powerCount >= 1 && powerCount <= 2) {
    score += 10
  } else if (powerCount > 2) {
    score += 5
  }

  // Numbers in headlines perform well
  if (hasNumber) score += 5
  if (startsWithNumber) score += 3

  // Headline type bonuses (list and how-to headlines consistently outperform)
  if (headlineType === 'List / Listicle') score += 5
  if (headlineType === 'How-To') score += 5
  if (headlineType === 'Question') score += 3

  // Reading ease bonus
  if (readingEase === 'easy') score += 5
  if (readingEase === 'hard') score -= 5

  // ─── Tips & Strengths ─────────────────────────────────────────────
  const tips: string[] = []
  const strengths: string[] = []

  // Strengths
  if (wordCount >= 6 && wordCount <= 12) {
    strengths.push('Ideal headline length (6-12 words)')
  }
  if (charCount >= 40 && charCount <= 65) {
    strengths.push('Good character count for search engine display')
  }
  if (emotionalCount > 0) {
    strengths.push(`Contains ${emotionalCount} emotional word${emotionalCount > 1 ? 's' : ''} that trigger reader response`)
  }
  if (powerCount > 0) {
    strengths.push(`Contains ${powerCount} power word${powerCount > 1 ? 's' : ''} that drive action`)
  }
  if (hasNumber) {
    strengths.push('Contains a number — numbered headlines get 36% more clicks on average')
  }
  if (readingEase === 'easy') {
    strengths.push('Easy to read at a glance — important for scanning in feeds and search results')
  }
  if (headlineType === 'How-To') {
    strengths.push('How-to format signals clear value and attracts searchers with intent')
  }
  if (headlineType === 'List / Listicle') {
    strengths.push('List format performs well in both search and social — readers know what to expect')
  }

  // Tips for improvement
  if (wordCount < 6) {
    tips.push('Add more words — headlines under 6 words often lack enough specificity to compel a click')
  }
  if (wordCount > 15) {
    tips.push('Consider trimming — headlines over 15 words can feel overwhelming and get truncated in search')
  }
  if (charCount > 65) {
    tips.push(`At ${charCount} characters, Google may truncate your title in search results. Aim for 50-65 characters.`)
  }
  if (emotionalCount === 0) {
    tips.push('Add an emotional trigger word (e.g., "proven", "deadly", "stunning") to increase engagement')
  }
  if (powerCount === 0) {
    tips.push('Add a power word (e.g., "secret", "free", "guaranteed", "instant") to strengthen the hook')
  }
  if (!hasNumber && headlineType !== 'Question' && headlineType !== 'How-To') {
    tips.push('Consider adding a number — "7 Ways..." or "The $523M Secret..." outperforms numberless headlines')
  }
  if (readingEase === 'hard') {
    tips.push('Simplify your language — shorter, punchier words perform better in headlines')
  }
  if (wordBalance.common > 70) {
    tips.push('Your headline is mostly filler words. Add more specific, concrete, or unusual language.')
  }
  if (headlineType === 'Statement' && !isQuestion) {
    tips.push('Try reframing as a how-to, list, or question — these formats consistently outperform plain statements')
  }

  // Clamp score
  const overall = Math.max(0, Math.min(100, score))

  return {
    overall,
    wordCount,
    charCount,
    wordBalance,
    headlineType,
    sentiment,
    readingEase,
    hasNumber,
    startsWithNumber,
    isQuestion,
    tips,
    strengths,
    emotionalWords: foundEmotional,
    powerWords: foundPower,
  }
}

export function getScoreLabel(score: number): string {
  if (score >= 80) return 'Excellent'
  if (score >= 65) return 'Strong'
  if (score >= 50) return 'Average'
  if (score >= 35) return 'Needs Work'
  return 'Weak'
}

export function getScoreColor(score: number): string {
  if (score >= 80) return 'text-success-600'
  if (score >= 65) return 'text-gold-600'
  if (score >= 50) return 'text-gold-500'
  if (score >= 35) return 'text-warn-600'
  return 'text-error-600'
}

export function getScoreRingColor(score: number): string {
  if (score >= 80) return 'stroke-success-600'
  if (score >= 65) return 'stroke-gold-500'
  if (score >= 50) return 'stroke-gold-400'
  if (score >= 35) return 'stroke-warn-600'
  return 'stroke-error-600'
}
