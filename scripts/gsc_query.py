#!/usr/bin/env python3
"""Pull Search Console data for robpalmer.com.

Usage (run with the seo skill venv python):
  ~/.claude/skills/seo/.venv/bin/python scripts/gsc_query.py                  # top queries + pages, 28d
  ~/.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --days 90
  ~/.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --contains "direct response"
  ~/.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --dimension page # page-level rollup
  ~/.claude/skills/seo/.venv/bin/python scripts/gsc_query.py --json           # raw JSON out

Credentials: service-account JSON at ~/.config/claude-seo/service_account.json
(path overridable in ~/.config/claude-seo/google-api.json). The service account
email must be added as a user on the GSC property.
"""
import argparse, json, os, sys
from datetime import date, timedelta

CONFIG = os.path.expanduser("~/.config/claude-seo/google-api.json")
DEFAULT_SA = os.path.expanduser("~/.config/claude-seo/service_account.json")
DEFAULT_PROPERTY = "sc-domain:robpalmer.com"


def load_config():
    cfg = {}
    if os.path.exists(CONFIG):
        cfg = json.load(open(CONFIG))
    sa = os.path.expanduser(cfg.get("service_account_path", DEFAULT_SA))
    prop = cfg.get("default_property", DEFAULT_PROPERTY)
    return sa, prop


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", type=int, default=28)
    ap.add_argument("--dimension", choices=["query", "page", "query,page"], default="query,page")
    ap.add_argument("--contains", help="filter: query contains this string")
    ap.add_argument("--page-contains", help="filter: page URL contains this string")
    ap.add_argument("--limit", type=int, default=1000)
    ap.add_argument("--property", dest="prop")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    sa_path, prop = load_config()
    if args.prop:
        prop = args.prop
    if not os.path.exists(sa_path):
        sys.exit(f"No service account key at {sa_path} — complete GSC setup first.")

    from google.oauth2 import service_account
    from googleapiclient.discovery import build

    creds = service_account.Credentials.from_service_account_file(
        sa_path, scopes=["https://www.googleapis.com/auth/webmasters.readonly"]
    )
    svc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

    end = date.today() - timedelta(days=3)  # GSC data lags 2-3 days
    start = end - timedelta(days=args.days)
    body = {
        "startDate": start.isoformat(),
        "endDate": end.isoformat(),
        "dimensions": args.dimension.split(","),
        "rowLimit": args.limit,
        "type": "web",
    }
    filters = []
    if args.contains:
        filters.append({"dimension": "query", "operator": "contains", "expression": args.contains})
    if args.page_contains:
        filters.append({"dimension": "page", "operator": "contains", "expression": args.page_contains})
    if filters:
        body["dimensionFilterGroups"] = [{"filters": filters}]

    resp = svc.searchanalytics().query(siteUrl=prop, body=body).execute()
    rows = resp.get("rows", [])

    if args.json:
        print(json.dumps({"property": prop, "start": start.isoformat(), "end": end.isoformat(), "rows": rows}, indent=2))
        return

    print(f"{prop}  {start} → {end}  ({len(rows)} rows)\n")
    dims = args.dimension.split(",")
    header = [d.upper() for d in dims] + ["CLICKS", "IMPR", "CTR", "POS"]
    print("  ".join(header))
    for r in rows[:60]:
        keys = [k.replace("https://robpalmer.com", "") for k in r["keys"]]
        print("  ".join(keys) + f"  {r['clicks']:.0f}  {r['impressions']:.0f}  {r['ctr']*100:.1f}%  {r['position']:.1f}")

    # quick wins: position 4-15 with impressions
    if "query" in dims:
        qw = [r for r in rows if 4 <= r["position"] <= 15 and r["impressions"] >= 20]
        qw.sort(key=lambda r: -r["impressions"])
        if qw:
            print(f"\nQUICK WINS (pos 4-15, ≥20 impressions): {len(qw)}")
            for r in qw[:20]:
                keys = [k.replace("https://robpalmer.com", "") for k in r["keys"]]
                print(f"  pos {r['position']:.1f}  {r['impressions']:.0f} impr  " + " | ".join(keys))


if __name__ == "__main__":
    main()
