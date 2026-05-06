// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

if (!Sentry.getClient()) {
  Sentry.init({
    dsn: "https://0b510f2d0ab66699aa23696dfecd40ed@o4511144096038912.ingest.us.sentry.io/4511144172060672",

    environment: process.env.NODE_ENV,
    enabled: process.env.NODE_ENV === "production",

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

    // Add optional integrations for additional features
    integrations: [Sentry.replayIntegration()],

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,
    // Enable logs to be sent to Sentry
    enableLogs: true,

    // Define how likely Replay events are sampled.
    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    replaysSessionSampleRate: 0.1,

    // Define how likely Replay events are sampled when an error occurs.
    replaysOnErrorSampleRate: 1.0,

    // Enable sending user PII (Personally Identifiable Information)
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/configuration/options/#sendDefaultPii
    sendDefaultPii: true,
  });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
