# Schema audit: robpalmer.com (2026-10-09)

Pages fetched live: /, /about, /contact, /call, /services/direct-response-copywriter, /services/vsl-copywriter, /verticals/health-supplement-copywriter, /blog/advertorial-copywriter, /blog/30-years-of-copywriting-lessons. All 200. All JSON-LD blocks parse. All use https://schema.org and absolute URLs. No Microdata/RDFa. No deprecated types (no HowTo/SpecialAnnouncement).

## Schema score: 72 / 100

## Detection matrix
| Page | Blocks |
|---|---|
| / | Person, WebSite, Organization, FAQPage (10) |
| /about | Person, WebSite, Organization, BreadcrumbList |
| /contact, /call | Person, WebSite, Organization, BreadcrumbList |
| /services/* | Person, WebSite, Organization, Service, FAQPage (8), BreadcrumbList |
| /verticals/* | same as services (Service typed, FAQPage 8) |
| /blog/* | Person, WebSite, Organization, Article, FAQPage (10), BreadcrumbList |

## Ranked issues

1. HIGH - Entities are not connected (no @id graph on Person/WebSite). Organization has @id (#organization) and Person.worksFor references it, but Person has no @id, WebSite has none, and Service.provider, Article.author, WebSite.author and Organization.founder are all re-declared as bare `{Person, name}` stubs. Google/LLMs cannot resolve them to one entity. Fix: give Person `@id: https://robpalmer.com/#rob` and WebSite `@id: .../#website`, then reference by @id everywhere (author, provider, founder, publisher). Better still, emit one `@graph` per page instead of 4-6 separate script tags, and stop repeating the full Person block on every page (it is output globally in layout.tsx).
2. HIGH - Person and Organization duplicate the same identity (Rob Palmer Copywriting vs Rob Palmer) with no relationship being the primary entity. For a personal brand, make Person the main entity (add `mainEntityOfPage`/`about` on /about, type /about as `ProfilePage` or `AboutPage` with `mainEntity: {@id: #rob}`), and make Organization a lighter wrapper. Organization has no sameAs (copy Rob's LinkedIn/X/GitHub), no description, no `image`/ImageObject logo (a bare string URL is accepted, but ImageObject with width/height is preferred).
3. HIGH - Service schema is thin and has no Offer. Service on money page has name/description/provider/url/areaServed/serviceType only. Missing: `offers` (page copy says "fixed-price from $10K": add `Offer` with `priceSpecification` minPrice 10000 USD, or `PriceSpecification`), `hasOfferCatalog` for the sub-deliverables (VSL, sales page, email, funnel), `image`, `@id`, `audience`, `serviceOutput`. Also `provider` should be the @id ref. Service pages 2, 3, verticals all reuse the same `serviceType: "Direct-Response Copywriting"`: vary it (e.g. "VSL Copywriting", "Health Supplement Copywriting"). Consider typing the money page as `ProfessionalService` (subtype of LocalBusiness/Organization) for entity clarity; no address needed with areaServed set.
4. MEDIUM - Review/AggregateRating missing. The site has 38 testimonials (src/content/testimonials.ts) but no Review markup. Caution: Google self-serving review rules prohibit review rich results for LocalBusiness/Organization self-reviews, so do not use AggregateRating on Organization/Service for stars. Safe use: individual `Review` objects with named `author` and `itemReviewed` -> Service only in the graph for AI/entity value, not for star snippets. Flag as low expected rich-result benefit.
5. MEDIUM - WebSite lacks SearchAction (checked: none on any page) and `publisher`/`inLanguage`. Note Google retired the Sitelinks Search Box in 2024, so SearchAction has no rich-result value. Do not prioritise unless the site has a real search page. Do add `publisher: {@id: #organization}` and `inLanguage: "en"`.
6. MEDIUM - Article is serviceable but not complete. Present: headline, description, datePublished, dateModified, image (ImageObject, url only), author (Person+url), publisher (Org+logo), mainEntityOfPage. Missing: image width/height (and Google recommends multiple aspect ratios 16:9/4:3/1:1), `author.@id`/`sameAs`, `articleSection`, `keywords`, `wordCount`, `inLanguage`, `about`/`mentions`. dateModified is always equal to datePublished on both sampled posts (code at src/app/blog/[slug]/page.tsx:104 falls back to date when `updated` is unset). advertorial-copywriter.mdx was last committed 2026-07-17 but still claims dateModified 2026-04-19. Stale modified dates hurt GEO freshness signals: populate `updated` in frontmatter when posts are materially edited. Date format is date-only ISO 8601 (valid); add timezone time if you want precision. Type: `BlogPosting` is more precise than `Article` for blog entries.
7. MEDIUM - FAQPage text diverges from visible content on blog posts. On /blog/advertorial-copywriter the schema question reads "How long does Rob take to deliver an advertorial?" (third person, from frontmatter line 29) but the page shows "How long do you take to deliver an advertorial?" (line 179, first person). Google requires FAQ schema to match visible content, and the first-person voice rule means the two sources are drifting. Fix by generating both from one source, or normalise the wording. The other 25 sampled FAQ questions matched visible text (home 10/10, money page 8/8, vertical 8/8).
8. INFO - FAQPage on a commercial site: no Google rich result since Aug 2023 (restricted to authoritative gov/health). Not a defect; keep it, it still helps AI/LLM extraction. The money page, 2 service/vertical pages and every blog post carry it. Two cautions: (a) 10 FAQs on every blog post is heavy and templated, so keep answers distinct from body copy; (b) no action needed to remove. Health vertical page is about copywriting for supplements, not medical advice, so it does not qualify for the health exception.
9. LOW - BreadcrumbList last item has no `item` URL (all pages). Google accepts this for the current page, so it validates, but adding the page URL is harmless and more consistent. Also /call and /contact breadcrumbs are fine. Homepage correctly has none.
10. LOW - Person: `image` is a bare URL (rob-palmer-clean.png), `award` is free-text strings that are claims rather than awards (the "$523M+ tracked revenue" is a marketing claim). Fine for AI context but not a recognised award; consider moving to `description`/`knowsAbout`. Missing `alumniOf`, `address`/`homeLocation` (Bangkok vs hasOccupation location "United States": check consistency with the real location Rob wants public), `telephone` not needed. `sameAs` has 3 profiles; add any Wikipedia/Wikidata, Muck Rack, podcasts, Amazon author page, or Crunchbase entries if they exist. `email` on Person duplicates ContactPoint.
11. LOW - Consistency of claims. Schema claims ($523M tracked, 40+ years, "from $10K", "$40M Gluco 6", 8% cold conversion) match the visible copy on the pages sampled. No placeholder text found. `areaServed: "Worldwide"` is not a recommended value; use `Place`/`AdministrativeArea` or list countries, or omit for global.
12. LOW - Redundant global blocks. Every page ships Person+WebSite+Organization (about 1.5 KB) in the head. Not harmful, but it inflates HTML and creates the duplicate-entity problem in #1. Emit the full entity set on / and /about only and use @id refs elsewhere.

## Missing high-value opportunities (for a personal-brand DR copywriting consultancy)
- `ProfilePage` / `AboutPage` on /about with `mainEntity` = Person @id (Google profile-page feature and strong E-E-A-T entity anchor).
- `Offer` / `OfferCatalog` on services (see #3).
- `CollectionPage` + `ItemList` for /services, /verticals, /blog index (check not present; not fetched).
- `CreativeWork`/`Review` for the 2 case studies and portfolio items (`/case-studies`, `/portfolio`), linked to the Person via `creator`.
- `Person.hasCredential`/`subjectOf` for press or podcast mentions if any exist.
- `VideoObject` if any VSL samples or video testimonials are embedded.
- `ContactPage` type for /contact, and `WebPage` with `potentialAction: ReserveAction` or `ScheduleAction` for /call (not rich-result relevant but clarifies intent).
- `speakable` is news-only; skip.
- `Event` is not applicable unless webinars are run.

## Passes
- JSON-LD parses on every page; https://schema.org context; absolute URLs; ISO 8601 dates.
- Required Article properties for Google (headline, image, datePublished, author) present; publisher with logo present; logo URL returns 200; hero image URL returns 200 and matches og:image.
- Organization has @id and Person.worksFor resolves to it.
- Service + BreadcrumbList + FAQPage on all service/vertical pages.
- Canonical present and matches schema URL on every page.
- No deprecated types.

## Score breakdown
Validity 25/25, Coverage of core types 20/25 (no ProfilePage, Offer, Review), Entity linking 8/20, Article/Service completeness 12/20, Content consistency 7/10 (one FAQ drift, stale dateModified). Total 72.
