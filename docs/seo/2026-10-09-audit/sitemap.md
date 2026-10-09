# Sitemap audit, robpalmer.com (2026-10-09). Score: 86/100

Live /sitemap.xml: HTTP 200, well-formed (xmllint OK), 186 URLs, 31.9 KB, no duplicates, no trailing-slash variants.

## Inventory
17 static + 13 services + 6 verticals + 150 blog = 186. This matches the repo: 150 blog files, and the 3 case-study URLs (index + 2) are in the static list.
Portfolio has no detail routes (12 items sit on /portfolio), so nothing is missing there.
No indexable page is missing. /connect and /create are excluded on purpose. /call/confirmed and /blog/page/N are not listed, which is reasonable.

## Status and canonical
All 186 URLs return 200 with no redirects. 22 spot-checked URLs (static, services, verticals, blog) all have a self-referencing canonical and `robots: index, follow`. No noindex, redirected or 404 URLs found.

## Issues, ranked
1. Medium: 36 of 186 URLs (all static, service and vertical pages, including the money page) have no `<lastmod>`. In src/app/sitemap.ts only the blog block sets lastModified. The `now` variable is unused for them. Google can't see when your key commercial pages change. Fix: add real dates (git last-commit date per file, or a `updated` field in services.ts / verticals.ts). Don't use build time, which would be fake freshness.
2. Low: blog lastmod is real (63 distinct dates, from `updated` or `date` frontmatter, not build time). Dates are formatted as `T00:00:00.000Z`, which is valid. Only 21 posts have `updated`. Check that `updated` gets bumped when posts are edited, e.g. the SEO overhauls of the creative-strategist cluster.
3. Info: all 186 entries carry `<priority>` and `<changefreq>` (372 tags) from sitemap.ts. Google ignores both. Remove them to cut noise. Not harmful.
4. Info: /blog/page/N pagination isn't in the sitemap. That's fine if the pages canonicalize correctly; not verified.

## Passed
XML validity, 50k limit (186), duplicates, status codes, noindex, canonicals, inventory match, robots.txt references the sitemap and does not block it, no location-page quality-gate concerns.
