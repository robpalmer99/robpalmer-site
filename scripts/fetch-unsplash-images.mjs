#!/usr/bin/env node
/**
 * Fetches hero images from Unsplash for all blog posts.
 *
 * Usage:
 *   node scripts/fetch-unsplash-images.mjs
 *
 * Requires: UNSPLASH_ACCESS_KEY env var (or edit the key below)
 */

import https from "node:https";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMAGES_DIR = path.join(__dirname, "..", "public", "images", "blog");

const ACCESS_KEY =
  process.env.UNSPLASH_ACCESS_KEY ||
  "kViRs57U0hCuiRW8zt6Er6YmvGPebMSU1gGbK7qit6g";

const WIDTH = 1200;
const HEIGHT = 675;

// Map each blog slug to a curated Unsplash search query.
// Queries are designed to return professional, on-topic landscape photos.
const IMAGE_MAP = {
  // --- Copywriting fundamentals ---
  "30-years-of-copywriting-lessons": "vintage typewriter desk",
  "523m-copywriting-campaign": "marketing strategy boardroom",
  "ai-copywriting": "artificial intelligence writing",
  "aida-copywriting": "attention marketing funnel",
  "b2b-copywriting": "business meeting office",
  "best-copywriting-books": "stack of books desk",
  "conversion-copywriting": "conversion rate dashboard",
  "copywriter-vs-content-writer-for-sales": "writer at desk working",
  "copywriting-bullet-points": "checklist notepad pen",
  "copywriting-formulas": "mathematical formula whiteboard",
  "copywriting-niches": "niche market target",
  "copywriting-portfolio-examples": "creative portfolio showcase",
  "copywriting-psychology": "brain psychology concept",
  "copywriting-rates": "calculator money desk",
  "copywriting-services": "professional writing service",
  "copywriting-vs-content-writing": "writing comparison side by side",
  "ecommerce-copywriting": "ecommerce shopping laptop",
  "email-copywriting": "email inbox laptop",
  "facebook-ad-copywriting": "social media advertising",
  "famous-copywriters": "vintage advertising agency",
  "financial-copywriting": "finance documents charts",
  "headline-formulas": "newspaper headlines stack",
  "health-supplement-copywriting": "health supplements bottles",
  "how-long-should-a-sales-page-be": "long scroll document",
  "how-much-does-a-direct-response-copywriter-cost": "pricing calculator business",
  "how-to-hire-a-copywriter": "job interview hiring",
  "how-to-start-a-copywriting-career": "career path starting",
  "how-to-write-a-headline": "newspaper headline close-up",
  "how-to-write-a-sales-letter": "letter writing pen paper",
  "how-to-write-a-sales-page": "sales page laptop screen",
  "how-to-write-ad-copy": "advertising creative process",
  "how-to-write-email-subject-lines": "email notification mobile",
  "in-house-copywriter-vs-freelance": "office vs remote work",
  "is-copywriting-dead": "vintage typewriter abandoned",
  "landing-page-copywriting": "landing page website design",
  "long-form-copy-vs-short-form-copy": "long short comparison",
  "long-form-sales-copy": "long document scroll paper",
  "saas-copywriting": "software dashboard screen",
  "sales-copywriter": "professional copywriter writing",
  "small-business-copywriting": "small business owner laptop",
  "storytelling-in-copywriting": "storytelling campfire book",
  "ux-copywriting": "user experience design screen",
  "website-copywriting": "website design laptop",
  "what-does-a-copywriter-do": "writer at desk working laptop",

  // --- Direct response ---
  "direct-response-copywriting": "direct mail letters stack",
  "direct-mail-copywriting": "mailbox letters",
  "direct-mail-vs-digital-marketing": "mail versus digital comparison",
  "direct-response-vs-brand-marketing": "brand strategy planning",

  // --- Sales pages & funnels ---
  "sales-funnel-vs-single-sales-page": "funnel diagram business",
  "sales-letter-examples": "sales letter paper envelope",
  "sales-page-examples": "sales page website mockup",
  "how-to-write-a-sales-page": "sales page wireframe design",
  "what-is-a-sales-funnel": "sales funnel diagram",

  // --- VSL ---
  "vsl-copywriting": "video production studio",
  "vsl-vs-sales-page": "video versus text comparison",
  "what-is-a-vsl": "video sales presentation screen",

  // --- CRO ---
  "b2b-conversion-rate-optimization": "business analytics dashboard",
  "benefits-of-conversion-rate-optimization": "growth chart analytics",
  "conversion-rate-optimization-audit": "audit checklist magnifying glass",
  "conversion-rate-optimization-case-studies": "case study research data",
  "conversion-rate-optimization-checklist": "checklist clipboard pen",
  "conversion-rate-optimization-strategies": "strategy planning whiteboard",
  "ecommerce-conversion-rate-optimization": "ecommerce analytics dashboard",
  "landing-page-conversion-rate-optimization": "landing page AB testing",
  "personalization-conversion-rate-optimization": "personalization targeting user",
  "what-is-conversion-rate-optimization": "conversion funnel analytics",

  // --- Advertising history ---
  "claude-hopkins-scientific-advertising-lessons": "vintage advertisement 1920s",
  "david-ogilvy-ai-copywriting": "vintage advertising agency 1960s",
  "eugene-schwartz-breakthrough-advertising-lessons": "breakthrough advertising vintage",
  "forgotten-copywriters-better-than-famous": "vintage writing desk antique",
  "fortune-500-copywriting-lessons": "corporate headquarters skyline",
  "golden-age-of-advertising": "vintage advertising poster retro",
  "history-of-direct-mail-marketing": "vintage postal mail letters",
  "history-of-direct-response-advertising": "vintage newspaper advertisement",
  "history-of-sales-letters": "antique letter writing quill",
  "lessons-from-gary-halbert": "handwritten letter vintage",

  // --- AI & tools ---
  "ai-ad-copy-examples": "artificial intelligence marketing",
  "ai-copywriting-prompts": "AI chatbot conversation screen",
  "ai-copywriting-tools": "AI tools software laptop",
  "ai-email-sequence-generator": "email automation workflow",
  "ai-sales-page-generator": "AI generated content screen",
  "ai-vs-human-copywriting": "robot human handshake",
  "can-ai-write-sales-copy": "AI writing robot keyboard",
  "chatgpt-for-copywriting": "chatbot AI assistant screen",
  "copywriting-tools": "writing tools desk supplies",
  "headline-analyzer-tools": "analytics tool dashboard",

  // --- Freelancing & career ---
  "copywriter-salary": "salary money growth chart",
  "copywriting-examples": "copywriting examples portfolio",
  "copywriting-skills": "professional skills development",
  "copywriting-templates": "document template layout",
  "freelance-copywriter-vs-marketing-agency": "freelancer versus agency team",
  "freelance-copywriting-guide": "freelancer laptop coffee shop",
  "generative-engine-optimization-for-copywriters": "search engine optimization",
  "geo-copywriting-guide": "local geography map pins",

  // --- Case studies ---
  "clickbank-copywriting": "affiliate marketing dashboard",
  "clickbank-funnel-roas-case-study": "marketing ROI analytics",
  "cold-email-copywriting": "cold email outreach inbox",
  "product-launch-email-sequence-case-study": "product launch rocket",
  "upsell-sequence-doubled-aov-case-study": "upsell cart checkout",
  "vsl-cold-traffic-conversion-case-study": "video conversion analytics",

  // --- State of industry ---
  "state-of-ai-copywriting-2026": "AI future technology",
  "state-of-direct-response-copywriting-2026": "direct response marketing trends",
  "state-of-email-marketing-2026": "email marketing trends analytics",
  "state-of-landing-pages-2026": "landing page design trends",
  "state-of-vsl-marketing-2026": "video marketing trends",

  // --- Swipe file ---
  "swipe-file": "inspiration mood board clips",
  "what-is-a-swipe-file": "swipe file folder collection",
  "what-is-direct-response-copywriting": "direct response marketing mail",

  // --- Landing page ---
  "landing-page-copywriting": "landing page design wireframe",
};

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { Authorization: `Client-ID ${ACCESS_KEY}` } }, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          return;
        }
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
      res.on("error", reject);
    });
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      res.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
      res.on("error", (err) => {
        fs.unlinkSync(dest);
        reject(err);
      });
    });
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function main() {
  const slugs = Object.keys(IMAGE_MAP);
  console.log(`Fetching ${slugs.length} images from Unsplash...\n`);

  const attributions = [];
  let downloaded = 0;
  let failed = 0;

  for (const slug of slugs) {
    const query = IMAGE_MAP[slug];
    const dest = path.join(IMAGES_DIR, `${slug}.jpg`);

    try {
      const searchUrl = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape`;
      const data = await fetchJSON(searchUrl);

      if (!data.results || data.results.length === 0) {
        console.log(`  SKIP  ${slug} — no results for "${query}"`);
        failed++;
        continue;
      }

      const photo = data.results[0];
      // Use raw URL with width/height params for exact dimensions
      const imgUrl = `${photo.urls.raw}&w=${WIDTH}&h=${HEIGHT}&fit=crop&auto=format,compress&q=80`;

      await downloadFile(imgUrl, dest);
      downloaded++;

      // Track Unsplash attribution (required by their license)
      attributions.push({
        slug,
        photographer: photo.user.name,
        profileUrl: photo.user.links.html,
        photoUrl: photo.links.html,
      });

      const size = fs.statSync(dest).size;
      console.log(
        `  ✓  ${slug} (${(size / 1024).toFixed(0)}KB) — by ${photo.user.name}`
      );

      // Unsplash rate limit: 50 req/hour for demo apps. Add delay.
      await sleep(1500);
    } catch (err) {
      console.log(`  ✗  ${slug} — ${err.message}`);
      failed++;
    }
  }

  // Write attribution file (required by Unsplash terms)
  const attrPath = path.join(IMAGES_DIR, "ATTRIBUTION.md");
  const attrContent = [
    "# Image Attribution",
    "",
    "Images sourced from [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license).",
    "",
    ...attributions.map(
      (a) =>
        `- **${a.slug}**: Photo by [${a.photographer}](${a.profileUrl}?utm_source=robpalmer_site&utm_medium=referral) on [Unsplash](${a.photoUrl}?utm_source=robpalmer_site&utm_medium=referral)`
    ),
  ].join("\n");
  fs.writeFileSync(attrPath, attrContent);

  console.log(`\nDone! ${downloaded} downloaded, ${failed} failed.`);
  console.log(`Attribution file: ${attrPath}`);
}

main().catch(console.error);
