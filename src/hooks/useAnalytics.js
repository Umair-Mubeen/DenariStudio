import { useEffect } from "react";

/* ───────────────────────────────────────────────────────────
   ANALYTICS CONFIGURATION
   Replace the placeholder IDs with your real ones when ready.
   ─────────────────────────────────────────────────────────── */

const GA4_ID         = "G-XXXXXXXXXX";       // ← Google Analytics 4 measurement ID
const META_PIXEL_ID  = "XXXXXXXXXXXXXXXX";   // ← Meta (Facebook) Pixel ID
const CLARITY_ID     = "xxxxxxxxxx";          // ← Microsoft Clarity project ID

const isReal = (id, placeholder) => id && !id.includes(placeholder);

/**
 * useAnalytics — load and initialise GA4, Meta Pixel, Microsoft Clarity.
 *
 * Respects cookie consent. Only loads scripts after user has accepted.
 * Call once in App.jsx.
 */
export default function useAnalytics() {
  useEffect(() => {
    const consent = (() => {
      try { return localStorage.getItem("ds-cookies-accepted"); } catch { return null; }
    })();

    if (consent !== "1") return; // Only load with consent

    /* ── Google Analytics 4 ──────────────────────────── */
    if (isReal(GA4_ID, "X")) {
      const s = document.createElement("script");
      s.async = true;
      s.src   = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
      document.head.appendChild(s);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", GA4_ID, { anonymize_ip: true });
    }

    /* ── Meta (Facebook) Pixel ───────────────────────── */
    if (isReal(META_PIXEL_ID, "X")) {
      (function(f,b,e,v,n,t,s) {
        if (f.fbq) return; n = f.fbq = function() {
          n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n; n.push = n; n.loaded = true; n.version = "2.0";
        n.queue = []; t = b.createElement(e); t.async = true; t.src = v;
        s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
      })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
      window.fbq("init", META_PIXEL_ID);
      window.fbq("track", "PageView");
    }

    /* ── Microsoft Clarity ───────────────────────────── */
    if (isReal(CLARITY_ID, "x")) {
      (function(c,l,a,r,i,t,y) {
        c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", CLARITY_ID);
    }
  }, []);
}

/**
 * Track a custom event — call from anywhere in the app.
 *
 * Example:
 *   trackEvent("contact_form_submitted", { service: "Web Development" });
 *   trackEvent("whatsapp_clicked", { source: "hero" });
 */
export function trackEvent(name, params = {}) {
  if (window.gtag) {
    window.gtag("event", name, params);
  }
  if (window.fbq) {
    window.fbq("trackCustom", name, params);
  }
}
