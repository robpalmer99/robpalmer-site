// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import type { ErrorEvent } from "@sentry/core";

// Same crawler policy as the client and server configs.
const BOT_UA =
  /bot\b|crawler|spider|headless|facebookexternalhit|slurp|ia_archiver|whatsapp|skypeuripreview/i;

Sentry.init({
  dsn: "https://0b510f2d0ab66699aa23696dfecd40ed@o4511144096038912.ingest.us.sentry.io/4511144172060672",

  environment: process.env.NODE_ENV,

  // Match the client rate (0.1) — see sentry.server.config.ts.
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
