// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// Same crawler policy as the client (src/instrumentation-client.ts): bot
// traffic is not worth Sentry quota. Server events carry the UA in
// event.request headers rather than navigator. The cubot carve-out: Cubot
// is an Android phone brand whose UA would match /bot\b/.
const BOT_UA =
  /bot\b|crawler|spider|headless|facebookexternalhit|slurp|ia_archiver|whatsapp|skypeuripreview/i;

Sentry.init({
  dsn: "https://0b510f2d0ab66699aa23696dfecd40ed@o4511144096038912.ingest.us.sentry.io/4511144172060672",

  environment: process.env.NODE_ENV,

  // Match the client rate (0.1) — 100% server sampling on a public marketing
  // site mostly records crawler pageloads and orphans 9 of 10 client traces.
  tracesSampleRate: 0.1,

  // Enable logs to be sent to Sentry
  enableLogs: true,

  beforeSend(event) {
    const ua = event.request?.headers?.["user-agent"] ?? "";
    if (BOT_UA.test(ua) && !/cubot/i.test(ua)) {
      return null;
    }
    return event;
  },

  // No logged-in users on a marketing site — visitor IPs are pure GDPR
  // exposure with nothing to correlate them against.
  sendDefaultPii: false,
});
