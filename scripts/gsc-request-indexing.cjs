// Request indexing for one URL in the Search Console UI.
// Usage: node scripts/gsc-request-indexing.cjs <url> [cdp-port]
// Needs a running Chromium on the signed-in Google profile (~/.cache/claude-google-chrome-profile)
// with a remote debugging port; find it with: lsof -iTCP -sTCP:LISTEN -P | grep Google
const { chromium } = require('/Users/robpalmer/dev/node_modules/playwright');
(async () => {
  const target = process.argv[2];
  const b = await chromium.connectOverCDP('http://localhost:' + (process.argv[3] || '9223'));
  const ctx = b.contexts()[0];
  const page = ctx.pages().find(p => p.url().includes('search-console')) || await ctx.newPage();
  await page.goto('https://search.google.com/search-console?resource_id=sc-domain%3Arobpalmer.com', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(8000);
  const box = page.locator('input[aria-label*="Inspect"], input[placeholder*="Inspect"]').first();
  await box.click(); await box.fill(target); await page.keyboard.press('Enter');
  await page.waitForTimeout(25000);
  const state = await page.evaluate(() => (document.body.innerText.match(/URL is (not )?on Google[^\n]*|Page is not indexed[^\n]*/) || ['?'])[0]);
  console.log('state before:', state);
  await page.getByText(/^request indexing$/i).first().click();
  let done = '';
  for (let i = 0; i < 40; i++) {
    await page.waitForTimeout(4000);
    const t = await page.evaluate(() => document.body.innerText);
    const m = t.match(/Indexing requested|Quota exceeded[^\n]*|Oops[^\n]*|Something went wrong[^\n]*|Indexing request rejected[^\n]*/i);
    if (m) { done = m[0]; break; }
  }
  console.log('result:', done || 'no confirmation within 160s');
  const btn = page.getByText(/^dismiss$/i).first();
  if (await btn.count()) await btn.click().catch(() => {});
  await b.close();
})().catch(e => { console.error('ERR', e.message); process.exit(1); });
