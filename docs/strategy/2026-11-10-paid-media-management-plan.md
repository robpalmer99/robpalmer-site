# AI-run paid media management: build plan, 2026-11-10

Status: direction set by Rob on 2026-11-10. This is Rob's own offer, not a joint venture with Ben. It widens the agency idea in `2026-11-09-agency-site-scope.md` from a creative team to a growth team that runs Google Ads and Meta Ads accounts with the creative, pages and offer economics inside the same loop. The agency site becomes this offer's site once there is a name; nothing here waits on the name.

## 1. The decision and its premises

Rob's words, 2026-11-10, paraphrased only where needed:

- The Native Formulas review showed a Google Ads manager doing a mediocre job and not using AI for any advantage. Rob believes that is true of most client and agency relationships on both Google and Meta.
- The offer goes beyond creative strategy (still offered) to **managing Google and Meta ad accounts**, using Claude, the copywriting vault and the creative tools to deliver value most agencies can't.
- **Rob runs the accounts himself at first** and hires when the numbers justify it. Ben's team does not execute, certainly not early; Ben has no experience here.
- **Any client that gives experience and testimonials is a good client at the start.** The bar rises as business comes in.
- **Google and Meta from day one.** Clients want both; each is an upsell for the other.
- Scott's account may or may not land (he may stay loyal). Plan without it.
- **Heavy coding goes to Opus 5.5 or similar.** Fable does the strategy, the copy and the judgement calls.

## 2. The offer

**Positioning sentence to test every page against:** *We run your Google and Meta ads and build the creative they need, as one loop, led by a 40-year direct response copywriter on an AI engine that reads your account, your customers and your pages every week.*

**Why it wins.** The platforms already automate the mechanical optimisation. The thing no agency does is close the loop between the account data, the creative, the landing page and the offer economics, because the media buyer can't write the page and the copywriter never sees the search terms. We hold all four. The Scott account is the proof: $25K to $30K lost in one year by a manager who couldn't see outside the account, found in a day with read-only access and the toolchain.

**Who it's for.** Direct response brands spending roughly $5K to $100K a month, where paid media is most of revenue and the owner can't read the account: supplements and health (Rob's home vertical), info products, ecommerce and DTC, finance publishers. Early on: anyone who'll give access, a fair fee and a testimonial.

**The ladder.**

| Step | What it is | Price shape (Rob's call) |
|---|---|---|
| **Forensics audit** | The Scott method: two years of the account, brand versus cold, rebuild history, bidding targets versus customer value, search-term waste, page congruency and speed, policy exposure. Delivered as a recovery brief in 48 hours. | Fixed fee, $1,500 to $3,000. Free for founding clients and as the wedge above a spend threshold |
| **90-day recovery** | The brief carried out: structure frozen, brand ring-fenced, targets set from LTV, negatives, ad text rewritten to policy, page fixes written. Fortnightly report. | Month one of management at the management fee, with the audit credited |
| **Management** | Both platforms run day to day with the creative loop inside: angles, statics, ads, landers and advertorials, compliance on every asset, fortnightly written report, monthly strategy call. | Retainer plus a share of spend. Market is 10 to 20% of spend with a floor; Scott's $2,500 on ~$16K is 15%. Founding clients: a lower floor, a 90-day term, a testimonial on results |
| **Creative and funnel work** | What robpalmer.com already sells: VSL, TSL, advertorial, email, offer rebuilds. | Project fees as now, or inside a larger retainer |

**What the client owns.** Their ad accounts, their spend on their own card, their data. We work through manager and partner access and leave when asked, with the change log.

## 3. How delivery works

**The weekly loop** (the same loop as the creative-team page, with the account added):

- **Monday:** read both accounts. Spend, cost per new customer, click-to-order, brand versus cold, disapprovals, anomalies. One page of notes, generated, then read by Rob.
- **Tuesday:** angles and changes. What the data says to test next: search terms into negatives or new ad groups, fatigue into new concepts, a congruency break into a page fix. Angle-finder on the week's customer data.
- **Wednesday and Thursday:** creative and copy. Static-ad, ad-copy, landing-page-copy, compliance-checker. Ads written to each platform's policy and matched to the page they land on.
- **Friday:** changes made through the write layer with a logged reason, creatives uploaded, report drafted.
- **Fortnightly:** the written report to the client: the five numbers (brand searches and brand CPC, cost of a new customer, share of cold clicks that buy, share of spend on no-sale terms, what changed and why).
- **Monthly:** strategy call, targets re-set from updated LTV.

**Change discipline, from day one.** Every mutation goes through our tooling, which writes who, what, why and the before-and-after to a ledger. No structure rebuilds without a written case and a four-week read. This is the discipline the Scott account never had, and it's a selling point.

**Compliance is our exposure now.** Every ad and page through compliance-checker before upload. Health and finance clients sign that claims substantiation is theirs; we flag, we don't certify. Spend caps and authority limits written into the agreement.

## 4. Tooling: what exists, what to build

### 4.1 Platform access (facts checked 2026-11-10 on the vendors' own docs)

**Google Ads.**

- Developer tokens were retired on 9 September 2026. API access is now a property of a **Google Cloud project** at four levels: Test (test accounts only), **Explorer** (production accounts, 2,880 operations a day, automated approval in most cases, blocked from account creation, user management, planning and billing), **Basic** (15,000 a day, needs brand verification of the Cloud project first), Standard (unlimited, manual review, about ten business days).
- Explorer is enough to run a handful of accounts. Apply for Basic once the brand (name, site) exists, because brand verification needs it.
- A **manager account (MCC)** holds client links; clients grant access to the MCC, not to Rob's personal login. `GOOGLE_ADS_LOGIN_CUSTOMER_ID` is the MCC.
- **Official MCP server** (`googleads/google-ads-mcp`, Python, `pipx run`, service account or application default credentials): reads via `list_accessible_customers`, GAQL `search` and resource metadata; writes only assets and labels, each defaulting to validate-only with a checksum confirm. Good for analysis and asset upload; campaign, budget and bid changes need our own write layer.
- **Writes** need our own thin layer over the Google Ads API Python client: bids, budgets, negatives, ad text, pause and enable, labels. Nothing else at first.

**Meta Ads.**

- **Ads CLI** (official): authenticates with a **system user access token** from Business Manager, reads insights with breakdowns, and creates, updates and deletes campaigns, ad sets, ads and creatives. This is the practical read-and-write path and needs no app review for accounts the system user can reach.
- **Official MCP server** at `mcp.facebook.com/ads`: reporting plus create and edit of campaigns, ad sets and ads. Meta's July 2026 note says it's open to any developer with their own Meta app, and the app needs the `ads_mcp_management` permission, which goes through App Review with screencasts. Treat as phase two; start with the CLI.
- **Client accounts** are reached by the client assigning our Business Manager as a partner on their ad account, pixel and page. Standard agency onboarding; document it as a checklist.
- A **Meta developer app** is needed either way; create it under Rob's Business Manager now so App Review can start when the MCP is wanted.

### 4.2 What exists already

- The analysis method, proven once: `~/dev/proposals/Native Formulas/google-ads/REVIEW-2026-11-10.md` and the recovery brief. Done by hand on CSV exports; the plan below turns it into a skill.
- The creative loop: angle-finder, static-ad, ad-copy, landing-page-copy, copychief, compliance-checker, funnel-teardown (public), plus meta-ad-images and the vault (private).
- Ben's side: Meta buying SOPs and the Ben Heath course inside the Paletrove dashboard MCP; useful as training material and as a second opinion, not as execution.
- GA4 and Search Console access via service account (`~/.config/claude-seo/`), reusable for client analytics with the client's grant.
- Cloud routines (RemoteTrigger) for scheduled jobs, and the launchd pattern on the Mac.

### 4.3 What to build

A new **private** repo, working name `paid-media-ops` (rename with the brand). Never public: it holds the moat and, in per-client folders, client data. Structure:

```
paid-media-ops/
  CLAUDE.md                 how the loop runs, guardrails, where things live
  skills/                   private skills, symlinked into ~/.claude/skills
  tools/
    gads/                   Google Ads: GAQL library, exporters, guarded mutations, change ledger
    meta/                   Meta: Ads CLI wrappers, insights exporters, guarded mutations, change ledger
    report/                 fortnightly report and Monday notes generators
    monitor/                daily health checks (spend anomaly, disapprovals, CPA drift, zero-delivery)
  clients/<slug>/           brief, LTV sheet, access notes, exports, reports, change log, creative
  templates/                onboarding checklist, agreement clauses, report template, audit template
```

**Skills to write** (private; each one is a method, the tools do the fetching):

| Skill | Job | Built from |
|---|---|---|
| `gads-forensics` | The Scott method as a procedure: pull two years, brand/cold split from search terms, change history by actor and date, campaign ROAS by quarter around each rebuild, bidding targets versus LTV, search-term waste themes, landing page map and speed, policy flags. Output: the recovery brief | The 10 Nov review and brief |
| `meta-forensics` | The Meta equivalent: creative fatigue curves, audience overlap, learning-phase resets, CPA drift by placement and age, attribution window sanity, landing page split, policy flags | Ben's SOPs plus the vault's Meta ad ops notes |
| `search-term-miner` | Weekly: themes with spend and no sale, negatives list with match types, new ad group candidates, brand leakage into PMax and Shopping | The negatives analysis in the review |
| `ltv-bid-target` | Allowable cost per new customer from first-order margin, subscription take rate, rebill count and refund rate; outputs Target CPA and Target ROAS per campaign and the date to revisit | The brief's section 3 |
| `account-change` | The only way a change is made. Takes a proposed change, checks it against guardrails (spend cap, structure freeze window, brand ring-fence), runs a dry run, writes the ledger entry, then applies | New |
| `weekly-loop` | Orchestrates Monday to Friday: reads, decides what to test, calls the creative skills, queues changes for approval | New |
| `fortnightly-report` | The five numbers, what changed and why, next fortnight's tests, in the client's language | The brief's "what to look at every two weeks" |
| `paid-media-onboarding` | Access checklist for both platforms, pixel and conversion audit, LTV data request, agreement clauses, baseline capture | New |
| `ad-creative-loop` | Angle-finder → static-ad → ad-copy → compliance-checker → upload through the write layer with naming that matches the ledger | Existing skills, chained |

**Tools to code** (Opus 5.5 grunt work, Fable reviews):

1. `tools/gads/`: GAQL query library (campaign, ad group, keyword, search term, change event, landing page, asset, conversion action), CSV and parquet exporters, a `mutate.py` with the five allowed operations behind dry-run and ledger, OAuth setup script, MCC account lister.
2. `tools/meta/`: wrappers over the Ads CLI for insights with the breakdowns we use, creative upload, campaign and ad set updates behind the same dry-run and ledger, token refresh notes.
3. `tools/report/`: Monday notes and fortnightly report generators from the exports, markdown out, PDF via `md2pdf`.
4. `tools/monitor/`: a daily job that reads both platforms for every client and writes an alert file: spend above cap, zero delivery, disapprovals, CPA drift beyond a threshold, learning-phase resets. Runs as a cloud routine or launchd, with secrets in the environment, never in the repo.
5. A small per-client dashboard later, only if the markdown reports aren't enough. Not in the first build.

**Guardrails in code, not in memory:** daily and monthly spend caps per client; no campaign creation or deletion through the tooling in the first version; a structure-freeze flag per client that blocks pause-and-replace for a set number of weeks; every mutation needs a reason string and lands in the ledger before the API call.

## 5. Build sequence

| Week | Milestone | Who |
|---|---|---|
| **0 (this week)** | Google Cloud project, enable the Ads API, apply for Explorer. Create the MCC. Meta Business Manager tidy, developer app created, system user and token. Install the Google MCP and the Meta Ads CLI; confirm reads against an account we control. Repo scaffolded with CLAUDE.md and guardrails written. | Rob sets up accounts; Fable scaffolds |
| **1** | Read layer and exporters on both platforms. `gads-forensics` run against Scott's exports to match the hand review line for line; `meta-forensics` run on an account of Ben's with permission, as the sandbox. | Opus builds, Fable reviews against the review doc |
| **2** | Write layer with dry-run and ledger. `account-change`, `ltv-bid-target`, `search-term-miner`. Test every mutation on a Google test account and a low-spend Meta ad set before any client account. | Opus builds, Rob approves the guardrails |
| **3** | `weekly-loop`, `fortnightly-report`, `monitor` as a daily job, `paid-media-onboarding` checklist and agreement clauses. Dry-run the whole week on the sandbox account. | Fable |
| **4** | First client live. Scott if he's in; otherwise a founding client from section 6. Run the loop for real, fix what breaks. Apply for Basic access once the brand exists. | Rob |
| **5 to 12** | Three founding clients. Collect results and testimonials. Meta App Review for `ads_mcp_management` when the MCP is worth having. Decide the hire threshold from hours per account. | Rob |

Rob's time is the constraint. The tooling is built so one person can run three to five accounts in a working week with the creative inside; past that, the first hire is a buyer who runs the loop and Rob keeps the strategy and the controls.

## 6. Founding clients and go-to-market

- **Scott Nobriga** is the first conversation already open, with a $2,500 a month line in the proposal and a free brief that demonstrates the method. If he stays with his manager, the brief still becomes the audit template and the case for the offer.
- **The leads ledger.** Fourteen Calendly bookings and two website leads this year. Re-read each for traffic and account problems mentioned on the call; offer the audit free to the ones with live spend.
- **Ben's network and offers.** Ben's own accounts are the sandbox and, with his consent, the first internal case on Meta. His partners and vendors are warm introductions for the audit.
- **robpalmer.com.** One service page as the demand test, the same way `/services/creative-team` tests the agency, with the audit as the CTA. Keywords the site already gets impressions for and has nothing to catch: "ai copy google ads", "claude google ads skill", "ppc copywriting". A post, "why your Google Ads agency can't tell you why sales halved", written from the Scott findings with the numbers anonymised, is the first content piece. The page moves to the agency domain when it exists.
- **Content later, not now.** A public "google-ads-forensics" skill would rank in the skill cluster, but it gives away the audit. Decide after three paid audits.

## 7. Pricing to confirm

Rob's call, suggested starting points:

- Audit: free while the offer is being proven (Rob, 2026-11-10): the audit shows the client the weaknesses in their setup and the value of the management. Price it ($1,500, credited against month one) once there are testimonials and a waiting list.
- Management: $2,000 a month floor or 12% of spend, whichever is higher, for one platform; $3,000 or 15% for both. Creative included up to an agreed number of concepts a month; above that, the creative-team rates.
- Founding client terms: 90 days, a results-based testimonial, a named case study with numbers, in exchange for the floor rate held for twelve months.

## 8. Risks and how they're held

- **Liability for spend and bans.** Spend caps in code and in the agreement; authority limits; the client's substantiation duty in health and finance; the compliance pass logged per asset.
- **Rob's capacity.** The loop is tooled so Monday's read and Friday's report are generated. Cap at five accounts solo; the hire trigger is written down in week 4 from real hours.
- **API gating.** Explorer's 2,880 operations a day covers a few accounts of reads and small writes; Basic needs brand verification, which needs the name. Meta's MCP needs App Review; the CLI doesn't.
- **The edge erodes.** Google and Meta ship more automation every quarter. The durable edge is the creative and page loop and the forensics judgement, not the API calls. Keep the vault and the private skills private.
- **Proof.** No claimed client results on any page until a founding client has them. The Scott brief, anonymised, is the only public artefact until then.
- **Dilution.** The robpalmer.com content programme is complete through Tier D; Tier C waits for December. This build is the November and December priority alongside the agency site.

## 9. Decisions for Rob

Decided 2026-11-10:

1. **Pricing:** section 7 as written, except audits are free for now. They are the demonstration of value; the fee comes later.
2. **Ben and his accounts are not involved** at this stage. The Meta sandbox is one of Rob's own ad accounts or a fresh one in Rob's Business portfolio; the Google write-layer test is a Google test account under the MCC (free).
3. **Demand-test page:** can ship now if it makes sense; a name is coming soon, so it stays on robpalmer.com as a service page and moves when the brand site exists. The anonymised Scott-findings post waits for Scott's reply.
4. **Legal:** start the agreement template and spend-cap wording now; not critical until there is interest. Rob's entity holds the MCC and the Business portfolio.
5. The name and domain, when ready. Nothing above waits on it except Basic access and the brand site.

**Meta constraint (found 2026-11-10):** Rob's personal Facebook profile has carried a profile-level advertising ban since 2023-04-13 (an impossible payment-verification demand; no ad was ever rejected). The case file and the reinstatement campaign live in `~/dev/projects/meta-ads-reinstatement/case-file.md`. A banned profile cannot create a business portfolio, an ad account or a system user token, so Meta account management cannot start from Rob's own assets until the ban is lifted. Rob's standing rule holds: his own account or nothing; no new profiles, no borrowed logins, never added to anyone's Business Manager, nothing run through Ben's accounts. Consequences for this plan:

- The offer launches **Google-first**. Meta account management is the upsell that switches on with reinstatement.
- Meta **creative** is unaffected: angles, statics, ad copy, compliance passes and landers are delivered as files; the client's own team uploads them. That keeps "both platforms" in the pitch as creative plus Google management.
- The reinstatement campaign (Meta Verified chat, BBB complaint) is now a business workstream, not a chore, and gets scheduled.
- The Meta tooling in `paid-media-ops` is still built against the Ads CLI docs so it runs the day a token exists.
- A hired media buyer with their own clean profile, when numbers justify the hire, is the other route to Meta management; it is a later decision and must not look like evasion while the appeal is open.

**Interim domain (Rob, 2026-11-10):** `bobpalmerinvests` is a dead Vercel project and domain that can be repurposed to get started. Use it for what needs a URL before the name exists: the Meta developer app's privacy policy and terms pages (App Review and the system-user app both need them), an unindexed audit landing page for founding clients, and the Vercel project the real site later moves into. Keep it `noindex` and off the entity graph: no Organization schema, no links from robpalmer.com, so nothing has to be unwound when the brand domain arrives. Don't use it for Google's brand verification; that should wait for the real name.

## 10. This week's actions

1. Rob: create the Google Cloud project, enable the Google Ads API, apply for Explorer access, create the MCC. Create the Meta developer app, system user and token in Business Manager.
2. Fable: scaffold `paid-media-ops` (private), write CLAUDE.md with the guardrails, the onboarding checklist and the ledger format; install and test the Google MCP and the Meta Ads CLI against accounts Rob controls.
   Also: repoint the `bobpalmerinvests` Vercel project at a minimal noindex site with privacy and terms pages for the Meta app, and the audit landing page.
3. Opus 5.5: the Google read layer and exporters, then the Meta exporters, to the spec in 4.3, with tests against Scott's exports.
4. Fable: `gads-forensics` as a skill, validated by reproducing the 10 Nov review from the raw exports.
5. Rob: decide the founding-client list from the leads ledger and Scott's reply.
