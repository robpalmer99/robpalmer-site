import path from 'path'
import sharp from 'sharp'

// Blog heroes are a mix of 1200x675, 1200x800, and odd sizes — hard-coding
// width/height on <Image> reserves the wrong box and causes CLS on a
// priority, above-the-fold image. Resolve the real dimensions at build time
// (pages are SSG, so this never runs per-request in production).
const cache = new Map<string, { width: number; height: number } | null>()

export async function getPublicImageSize(
  publicPath: string
): Promise<{ width: number; height: number } | null> {
  const cached = cache.get(publicPath)
  if (cached !== undefined) return cached

  let dims: { width: number; height: number } | null = null
  try {
    const file = path.join(process.cwd(), 'public', publicPath)
    const { width, height } = await sharp(file).metadata()
    if (width && height) dims = { width, height }
  } catch {
    // Missing or unreadable file — fall back to the caller's defaults
  }
  cache.set(publicPath, dims)
  return dims
}
