/* OHAYO NIHONGO analytics loader
 * Usage: <script src="/assets/analytics.js"></script> just before </body>.
 * Both IDs empty = complete no-op. Fill in the IDs below to activate.
 *   ga4_id:      GA4 Measurement ID, e.g. "G-XXXXXXXXXX"
 *   goatcounter: GoatCounter site code, e.g. "ohayonihongo" (-> ohayonihongo.goatcounter.com)
 * Click tracking: add data-oa-event="buy_etsy|buy_ls|email_signup|play_game|..." to any element.
 */
(function () {
  "use strict";
  window.OHAYO_ANALYTICS = { ga4_id: "", goatcounter: "" };
  var cfg = window.OHAYO_ANALYTICS;

  try {
    if (cfg.ga4_id) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("js", new Date());
      window.gtag("config", cfg.ga4_id);
      var s = document.createElement("script");
      s.async = true;
      s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(cfg.ga4_id);
      document.head.appendChild(s);
    }
  } catch (e) { /* no-op */ }

  try {
    if (cfg.goatcounter) {
      var g = document.createElement("script");
      g.async = true;
      g.src = "https://gc.zgo.at/count.js";
      g.setAttribute("data-goatcounter", "https://" + cfg.goatcounter + ".goatcounter.com/count");
      document.head.appendChild(g);
    }
  } catch (e) { /* no-op */ }

  try {
    document.addEventListener("click", function (ev) {
      try {
        var t = ev.target;
        var el = t && t.closest ? t.closest("[data-oa-event]") : null;
        if (!el) return;
        var name = el.getAttribute("data-oa-event");
        if (!name) return;
        if (cfg.ga4_id && typeof window.gtag === "function") {
          window.gtag("event", name, {
            event_category: "oa_cta",
            link_url: el.href || el.getAttribute("href") || ""
          });
        }
        if (cfg.goatcounter && window.goatcounter && typeof window.goatcounter.count === "function") {
          window.goatcounter.count({ path: "event/" + name, event: true });
        }
      } catch (e) { /* no-op */ }
    }, true);
  } catch (e) { /* no-op */ }
})();
