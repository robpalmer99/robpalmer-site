import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

export const POSTS_PER_PAGE = 12

export interface PaginatedBlogPosts {
  posts: BlogPostMeta[]
  totalPosts: number
  totalPages: number
  currentPage: number
}

export function getPaginatedBlogPosts(page: number): PaginatedBlogPosts {
  const allPosts = getAllBlogPosts()
  const totalPosts = allPosts.length
  const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE))
  const start = (page - 1) * POSTS_PER_PAGE
  const posts = allPosts.slice(start, start + POSTS_PER_PAGE)

  return { posts, totalPosts, totalPages, currentPage: page }
}

export interface BlogFAQ {
  question: string
  answer: string
}

export interface BlogPostMeta {
  title: string
  description: string
  metaTitle?: string
  metaDescription?: string
  date: string
  updated?: string
  category: string
  tags: string[]
  slug: string
  readingTime: string
  published: boolean
  heroImage?: string
  heroAlt?: string
  faqs?: BlogFAQ[]
}

// Slim shape for listing pages. BlogPostMeta serialized into the client
// BlogGrid's props weighs ~850KB across 150 posts (the faqs field alone
// carries ~10 long Q&As per post) — listings only need these fields.
export type BlogPostListing = Pick<
  BlogPostMeta,
  | 'title'
  | 'description'
  | 'date'
  | 'category'
  | 'tags'
  | 'slug'
  | 'readingTime'
  | 'heroImage'
  | 'heroAlt'
>

export function toListing(post: BlogPostMeta): BlogPostListing {
  return {
    title: post.title,
    description: post.description,
    date: post.date,
    category: post.category,
    tags: post.tags,
    slug: post.slug,
    readingTime: post.readingTime,
    heroImage: post.heroImage,
    heroAlt: post.heroAlt,
  }
}

export function getAllBlogListings(): BlogPostListing[] {
  return getAllBlogPosts().map(toListing)
}

let _cachedPosts: BlogPostMeta[] | null = null

export function getAllBlogPosts(): BlogPostMeta[] {
  if (_cachedPosts) return _cachedPosts

  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.mdx'))

  const posts = files
    .map((filename) => {
      const slug = filename.replace('.mdx', '')
      return getBlogPostMeta(slug)
    })
    .filter((post): post is BlogPostMeta => post !== null && post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  _cachedPosts = posts
  return posts
}

function buildMeta(
  slug: string,
  data: Record<string, unknown>,
  content: string
): BlogPostMeta {
  const stats = readingTime(content)
  // Fail the build loudly on a bad date — a malformed one otherwise reaches
  // the sitemap as Invalid Date (build crash with a useless stack) and
  // silently scrambles the NaN-compared sort order in getAllBlogPosts.
  for (const field of ['date', 'updated'] as const) {
    const value = data[field]
    if (value !== undefined && isNaN(new Date(value as string).getTime())) {
      throw new Error(`Blog post "${slug}" has an invalid ${field}: ${JSON.stringify(value)}`)
    }
  }
  return {
    title: (data.title as string) || '',
    description: (data.description as string) || '',
    metaTitle: (data.metaTitle as string) || undefined,
    metaDescription: (data.metaDescription as string) || undefined,
    date: (data.date as string) || '',
    updated: (data.updated as string) || undefined,
    category: (data.category as string) || 'Copywriting',
    tags: (data.tags as string[]) || [],
    slug,
    readingTime: stats.text,
    published: data.published !== false,
    heroImage: (data.heroImage as string) || undefined,
    heroAlt: (data.heroAlt as string) || undefined,
    faqs: (data.faqs as BlogFAQ[]) || undefined,
  }
}

export function getBlogPostMeta(slug: string): BlogPostMeta | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)

  return buildMeta(slug, data, content)
}

export function getBlogPostContent(slug: string): {
  meta: BlogPostMeta
  content: string
} | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    return null
  }

  const source = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(source)
  const meta = buildMeta(slug, data, content)

  // Drafts (published: false) must 404, not quietly go live outside listings
  if (!meta.published) {
    return null
  }

  return { meta, content }
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPostMeta[] {
  const allPosts = getAllBlogPosts()
  const current = allPosts.find((p) => p.slug === slug)
  if (!current) return []

  const others = allPosts.filter((p) => p.slug !== slug)

  // Score each post by relevance: same category + shared tags
  const scored = others.map((post) => {
    let score = 0
    if (post.category === current.category) score += 3
    const sharedTags = post.tags.filter((t) => current.tags.includes(t))
    score += sharedTags.length
    return { post, score }
  })

  // Sort by score desc, then by date desc
  scored.sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())

  return scored.slice(0, limit).map((s) => s.post)
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) {
    return []
  }

  // Published posts only — this feeds generateStaticParams, and drafts must
  // not get pages built for them
  return getAllBlogPosts().map((post) => post.slug)
}
