#!/usr/bin/env python3
"""GA4 report for the ChatGPT (OpenAI) ads campaign relaunched 2026-10-23.

Ad clicks arrive tagged utm_source=chatgpt & utm_medium=cpc (campaign-level
tracking parameters), with utm_content = the OpenAI ad id. Organic ChatGPT
citations stay as chatgpt.com / ai-assistant and are shown for contrast.

Run on Rob's Mac (needs the GA4 service-account key in ~/.config/claude-seo/):
  .claude/skills/seo/.venv/bin/python -I scripts/chatgpt_ads_report.py [--since 2026-10-23] [--until today]

Note: Rob's own Thailand test visits on 2026-10-23 carried utm_campaign=verify*; ignore them.
calendly_click was double-counted before 2026-10-23 (fixed that day),
so counts from the relaunch onward are true single counts.
"""
import argparse
import glob
import json
import os
import sys

PROPERTY = 'properties/266179141'  # robpalmer.com (NOT the shared config's id)


def load_credentials():
    for k in glob.glob(os.path.expanduser('~/.config/claude-seo/*.json')):
        try:
            if json.load(open(k)).get('type') == 'service_account':
                os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = k
                return k
        except Exception:
            continue
    sys.exit('No GA4 service-account key found in ~/.config/claude-seo/')


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--since', default='2026-10-23')
    ap.add_argument('--until', default='today')
    a = ap.parse_args()
    load_credentials()

    from google.analytics.data_v1beta import BetaAnalyticsDataClient
    from google.analytics.data_v1beta.types import (
        DateRange, Dimension, Filter, FilterExpression, FilterExpressionList, Metric, OrderBy, RunReportRequest,
    )

    client = BetaAnalyticsDataClient()

    def eq(field, value):
        return FilterExpression(filter=Filter(field_name=field, string_filter=Filter.StringFilter(
            match_type=Filter.StringFilter.MatchType.EXACT, value=value)))

    paid = FilterExpression(and_group=FilterExpressionList(expressions=[eq('sessionSource', 'chatgpt'), eq('sessionMedium', 'cpc')]))

    def run(dims, mets, filt=paid, order_metric=None, limit=50):
        req = RunReportRequest(
            property=PROPERTY,
            dimensions=[Dimension(name=d) for d in dims],
            metrics=[Metric(name=m) for m in mets],
            date_ranges=[DateRange(start_date=a.since, end_date=a.until)],
            dimension_filter=filt, limit=limit,
        )
        if order_metric:
            req.order_bys = [OrderBy(metric=OrderBy.MetricOrderBy(metric_name=order_metric), desc=True)]
        rows = client.run_report(req).rows
        return [([d.value for d in r.dimension_values], [m.value for m in r.metric_values]) for r in rows]

    def table(title, header, rows):
        print(f'\n## {title}\n')
        if not rows:
            print('_(no data)_')
            return
        print('| ' + ' | '.join(header) + ' |')
        print('|' + '---|' * len(header))
        for d, m in rows:
            cells = d + [f'{float(x):.0%}' if 'Rate' in h else (f'{float(x):.0f}s' if 'Duration' in h else x)
                         for x, h in zip(m, header[len(d):])]
            print('| ' + ' | '.join(cells) + ' |')

    print(f'# ChatGPT ads report, {a.since} to {a.until}')

    table('Paid ChatGPT sessions by lander', ['Landing page', 'Sessions', 'Engaged', 'Avg duration', 'Engagement rate'],
          run(['landingPage'], ['sessions', 'engagedSessions', 'averageSessionDuration', 'engagementRate'], order_metric='sessions'))
    table('Paid ChatGPT sessions by ad (utm_content = OpenAI ad id)', ['Ad id', 'Landing page', 'Sessions', 'Engaged'],
          run(['sessionManualAdContent', 'landingPage'], ['sessions', 'engagedSessions'], order_metric='sessions'))
    table('Paid ChatGPT sessions by country', ['Country', 'Sessions'],
          run(['country'], ['sessions'], order_metric='sessions', limit=10))
    table('Paid ChatGPT sessions by device', ['Device', 'Sessions'],
          run(['deviceCategory'], ['sessions'], order_metric='sessions'))

    conv = FilterExpression(and_group=FilterExpressionList(expressions=[
        eq('sessionSource', 'chatgpt'), eq('sessionMedium', 'cpc'),
        FilterExpression(or_group=FilterExpressionList(expressions=[eq('eventName', 'calendly_click'), eq('eventName', 'contact_form_submit')])),
    ]))
    # event_label is not registered as a GA4 custom dimension, so calendly_click
    # here mixes calendar views, time picks and bookings. Real bookings come
    # from the Calendly notification emails (utm_campaign lp-ads / lp-copy).
    table('Booking-intent events from paid ChatGPT sessions (calendly_click = any calendar interaction)', ['Event', 'Landing page', 'Count'],
          run(['eventName', 'landingPage'], ['eventCount'], filt=conv, order_metric='eventCount'))

    table('For contrast: organic ChatGPT (chatgpt.com / ai-assistant) sessions', ['Landing page', 'Sessions'],
          run(['landingPage'], ['sessions'], filt=FilterExpression(and_group=FilterExpressionList(expressions=[
              eq('sessionSource', 'chatgpt.com'), eq('sessionMedium', 'ai-assistant')])), order_metric='sessions', limit=10))


if __name__ == '__main__':
    main()
