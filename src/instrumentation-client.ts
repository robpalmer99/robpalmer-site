// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

// Crawlers and link-preview fetchers (SEBot, Googlebot, facebookexternalhit,
// WhatsApp…) execute scripts in half-built pages and throw from next/script's
// loader. Gating init itself (not just beforeSend) means bots generate no
// errors, traces, logs, or replays — and never lazy-load rrweb. The cubot
// carve-out: Cubot is an Android phone brand whose UA would match /bot\b/.
const ua = typeof navigator !== "undefined" ? navigator.userAgent : ""
const isBotUA =
  /bot\b|crawler|spider|headless|facebookexternalhit|slurp|ia_archiver|whatsapp|skypeuripreview/i.test(ua) &&
  !/cubot/i.test(ua)

// Decide the Replay session sample HERE, before loading anything: with the
// rate inside Sentry.init alone, every visitor downloads ~48KB of rrweb that
// 90% of sessions never use. Sampled sessions load Replay on idle and record;
// the rest only fetch it if an error actually fires (capture from the error
// onward — the pre-error buffer isn't worth 48KB on every pageview of a
// marketing site).
const replaySampled = Math.random() < 0.1

if (process.env.NODE_ENV === "production" && !isBotUA && !Sentry.getClient()) {
  Sentry.init({
    dsn: "https://0b510f2d0ab66699aa23696dfecd40ed@o4511144096038912.ingest.us.sentry.io/4511144172060672",

    environment: process.env.NODE_ENV,

    // Ignore common errors caused by browser extensions, not our code
    ignoreErrors: [
      // Browser extension script injection failures
      "Failed to execute 'importScripts' on 'WorkerGlobalScope'",
      // Common extension / ad-blocker noise
      "ResizeObserver loop",
      "ResizeObserver loop completed with undelivered notifications",
      // Extensions injecting into the page
      /^Script error\.?$/,
      // Chrome extensions
      /chrome-extension:\/\//,
      /moz-extension:\/\//,
      // Hydration mismatches almost always caused by browser translators
      // (Google Translate, Safari Translate) or extensions mutating the DOM
      // before React hydrates. Real hydration bugs show up with component
      // stack traces in dev and tend to be caught in CI.
      /Hydration failed/i,
      /There was an error while hydrating/i,
      /Text content does not match server-rendered HTML/i,
      /Minified React error #(418|419|422|423|425)/,
    ],

    // Drop Replay-generated hydration diffs entirely. These are almost always
    // false positives from browser in-page translators (Chrome/Safari auto-
    // translate wraps every text node in <font> tags, which Replay sees as a
    // DOM mismatch against the SSR HTML). Real React hydration errors still
    // flow through `ignoreErrors` patterns above if they slip past this.
    beforeSend(event) {
      const message =
        event.message ||
        event.exception?.values?.[0]?.value ||
        ""
      if (/hydrat/i.test(message)) {
        return null
      }
      // Sentry's Replay hydration-error integration tags events with this
      // category; drop them regardless of message.
      const tags = (event.tags || {}) as Record<string, unknown>
      if (
        tags.replay_hydration_error === true ||
        tags["replay.hydrate_error"] === true
      ) {
        return null
      }
      return event
    },
    denyUrls: [
      // Browser extensions
      /extensions\//i,
      /^chrome:\/\//i,
      /^chrome-extension:\/\//i,
      /^moz-extension:\/\//i,
      /^safari-extension:\/\//i,
      // Common ad/tracking scripts
      /^blob:/,
    ],

    // Session Replay is lazy-loaded after init (see below) so rrweb stays
    // out of the render-critical bundle.
    integrations: [],

    // Sample traces — full tracing on every pageview isn't worth the cost.
    tracesSampleRate: 0.1,
    // Enable logs to be sent to Sentry
    enableLogs: true,

    // The 10% session sample is decided above (replaySampled) so unsampled
    // sessions never download rrweb; a loaded Replay then always records.
    replaysSessionSampleRate: replaySampled ? 1.0 : 0,

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // No logged-in users on a marketing site — visitor IPs are pure GDPR
    // exposure with nothing to correlate them against.
    sendDefaultPii: false,
  });

  let replayLoaded = false
  const loadReplay = () => {
    if (replayLoaded) return
    replayLoaded = true
    Sentry.lazyLoadIntegration("replayIntegration")
      .then((replayIntegration) => {
        Sentry.addIntegration(replayIntegration())
      })
      .catch(() => {
        // Replay is best-effort; never let telemetry loading break the page.
      })
  }

  if (replaySampled) {
    // Idle-deferred so the download never competes with LCP.
    if ("requestIdleCallback" in window) {
      requestIdleCallback(loadReplay)
    } else {
      setTimeout(loadReplay, 3000)
    }
  } else {
    // Unsampled sessions fetch Replay only when an error actually occurs.
    Sentry.getClient()?.on("beforeSendEvent", (event) => {
      if (event.exception) loadReplay()
    })
  }
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
