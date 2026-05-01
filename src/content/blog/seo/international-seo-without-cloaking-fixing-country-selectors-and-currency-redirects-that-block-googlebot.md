---
title: "International SEO without cloaking: fixing country selectors and currency redirects that block Googlebot"
description: "Geo and currency redirects are killing crawlability. Fix country pickers, hreflang and indexing on Shopify, Magento, WordPress—what to check now."
image: "/images/blog-international-seo-without-cloaking-fixing-country-selectors.jpg"
excerpt: "Geo and currency redirects are killing crawlability. Fix country pickers, hreflang and indexing on Shopify, Magento, WordPress—what to check now."
category: "seo"
date: 2026-04-09
author: "Nigel Abramow"
references: [
  {
    "label": "Google Search Central: Tell Google about localized versions of your page",
    "url": "https://developers.google.com/search/docs/specialty/international/localized-versions"
  },
  {
    "label": "Google Search Central: Use hreflang for language and regional URLs",
    "url": "https://developers.google.com/search/docs/specialty/international/localized-versions#hreflang"
  },
  {
    "label": "Google Search Central: JavaScript SEO basics",
    "url": "https://developers.google.com/search/docs/crawling-indexing/javascript"
  },
  {
    "label": "Adobe Commerce (Magento) Guide: Multiple websites, stores, and store views",
    "url": "https://experienceleague.adobe.com/docs/commerce-admin/stores-sales/site-store/store-views.html"
  },
  {
    "label": "Cloudflare Docs: URL redirects and rewrite rules",
    "url": "https://developers.cloudflare.com/rules/url-forwarding/"
  }
]
---

A UK buyer clicks a Google result for your brand, lands on a US page in USD, and leaves. In Search Console, the UK landing page you expect to see impressions for barely features. Meanwhile, your team swears the UK site is live, translated and priced correctly. The common thread is usually a country selector or currency redirect doing more than it should — and doing it to Googlebot as well as to people.

Country switching is a real business need. Tax rules change, assortment varies by market, and pricing has to localise. The trouble starts when those decisions get baked into automatic redirects, JavaScript-only selectors, or currency apps that rewrite URLs. That combination often hides entire markets from search, or causes Google to index the wrong version and ignore hreflang completely.

## The problem

International setups often ship with automatic geo-IP redirects and currency logic that rewrite URLs. Googlebot crawls primarily from US IPs and doesn’t click banners. If a UK page auto-redirects a US visitor to /us/, Googlebot sees the same and never crawls /uk/. Add a JavaScript-only country selector and a canonical pointing at the global root, and Google has no stable way to discover or index your international pages.

What you see is a mix of symptoms: only one country’s pages in the index, search snippets showing the wrong currency, hreflang being ignored, or crawl stats that dip whenever a new redirect rule is deployed. In paid campaigns, landing pages underperform because ad clicks get bounced to a different locale. None of this is “cloaking” on purpose, but the effect is the same: bots don’t get the same, stable URLs people can navigate to, so your international inventory goes dark.

## Why it happens

International SEO tends to break at the edges — the CDN, the app that handles currency, the middleware that sits in front of the CMS. The aim is valid: get the right version to the right person. The failure mode is consistent: rewrite or block access to URLs that search engines need to crawl.

### Geo-IP auto-redirects applied to bots

It’s tempting to route every visit to a market-specific URL based on IP. That helps users, but it collapses crawling because Googlebot mostly comes from US subnets.

- A UK URL that 302-redirects US IPs to /us/ prevents Googlebot from ever seeing /uk/
- Edge workers that rewrite the path without changing the URL hide the true page from crawling
- “Country-gating” that returns a 403 or 451 to out-of-region IPs blocks entire sections from indexing

The safer pattern is to present a non-blocking recommendation banner, keep URLs stable, and let users switch.

### JavaScript-only country and language selectors

Many selectors don’t use real links. They trigger AJAX calls or write a cookie and reload the same URL.

- If the selector isn’t an anchor with an href to the target locale, Google can’t discover those pages
- POST-based switchers don’t create crawlable paths
- Modal dialogs that trap focus and block content can interfere with rendering and hreflang parsing

A good selector uses normal links to fully qualified locale URLs and works with JavaScript off.

### One URL, many versions

Serving different language or currency on the same URL based on cookies or Accept-Language creates ambiguity.

- Without separate URLs, hreflang can’t map languages or regions reliably
- Vary: Accept-Language complicates caching and doesn’t give a canonical target for each locale
- Search snippets can show the wrong language or currency because Google saw one version at crawl time

International SEO needs one indexable URL per locale, each with self-referencing canonical and hreflang links across the set.

### Currency apps and middleware that redirect

Currency switchers often add redirects or query parameters, then canonicalise away the variation.

- Auto-converting currency with a 302 to add ?currency=GBP then canonicalising to the clean URL discards the “GBP” version for indexing
- Some apps block Googlebot from fetching currency APIs, leading to incomplete rendering and soft 404s
- Edge redirects fire before your platform code, so platform-level hreflang never gets a chance to load

Keep currency presentation decoupled from indexing. Prices can adapt per locale page without using redirects or parameters for search.

### Canonical and hreflang conflicts

Even with separate URLs, metadata can cancel the setup.

- Locale pages that point canonical to the global homepage tell Google to ignore the localized URL
- Missing return tags in hreflang break the cluster, so signals from one page don’t benefit the others
- Using language-only hreflang on country-specific pages (en instead of en-GB) weakens targeting

The hreflang set must be complete, reciprocal and aligned with canonicals.

## What it means commercially

This isn’t a theoretical ranking problem. It shows up in money.

- Wrong-market indexing lifts bounce and drops conversion when the price or shipping message is off
- Organic visibility gets concentrated in one market, starving others regardless of content quality
- Market budgets underperform because paid clicks land on pages that immediately redirect
- Merchandising loses leverage when structured data and snippets reflect the wrong currency or availability
- Teams waste weeks creating localized content that never gets crawled

If your UK revenue mix relies on search, you’re paying twice: once to build the market, again to overcome technical drag.

## What to check first

Start with behaviour you can observe, then validate with logs and configuration. A short, focused audit usually pinpoints the blocker.

- Fetch key locale URLs using URL Inspection’s “Test live” in Search Console and confirm the final URL and rendered HTML

- Crawl a sample of locale URLs with Screaming Frog using Googlebot’s UA and a UK exit IP, then repeat with a US IP to compare responses

- Review server and CDN logs for Googlebot requests that return 301/302 to another market or 403/451 status codes

- Click through your country selector with JavaScript disabled and verify that each option is a normal link to a distinct URL

- Inspect canonical and hreflang on a few templates and ensure they self-canonicalise and reference all alternates with return tags and x-default

- Remove or disable automatic geo-IP redirects temporarily and check if hreflang starts to resolve in Search Console over the next crawls

- Check Shopify/Magento/WooCommerce app settings for “auto-redirect by location” and switch to a recommendation banner instead

- Validate that currency is determined by the locale URL, not by a cookie or query parameter that’s later canonicalised away

- Confirm robots.txt and meta robots are not blocking locale paths, especially if you use subfolders like /en-gb/ or /fr-fr/

- For Cloudflare or similar, review edge redirect and rewrite rules and add a single source of truth at the application layer

A day of controlled testing beats weeks of guesswork. Find one configuration that preserves stable URLs for bots and people, and make that the standard across markets.

## Platform notes: Shopify, Magento and WordPress

Each platform solves internationalisation differently. Small defaults create big differences in how search sees the site.

- Shopify: Markets supports domains or subfolders and outputs hreflang automatically. Avoid auto-redirects based on IP; use the Geolocation app’s recommendation bar. Ensure your selector links to full locale URLs. If you use subfolders, make sure robots.txt allows them and that canonicals are localised.

- Magento (Adobe Commerce): Use separate store views with “Add Store Code to URLs” enabled so each locale has a unique path. Configure hreflang per store view. Replace JS-only store switchers with anchor links. Keep any geo-IP rules at the application layer where you can add exceptions and consistent redirects.

- WordPress/WooCommerce: Run separate URLs per language/market via WPML or Polylang. Expose a crawlable switcher. Check that the currency plugin doesn’t auto-redirect or alter canonicals. Validate that hreflang maps one-to-one across the set and that sitemaps include localized URLs.

## International SEO without cloaking

It’s tempting to special-case Googlebot. The cleaner solution is to avoid forced redirects for anyone. Keep locale on the URL, show a non-blocking suggestion to switch, and let users choose. If business rules require an automatic move, keep it reversible with a permanent link to the requested page and don’t block access for out-of-region IPs. That way, you aren’t serving bots something people can’t reach, and you avoid the grey area of cloaking.

Two guardrails keep you out of trouble: one URL per locale and a selector that works as plain HTML. Everything else — pricing logic, stock messages, shipping banners — can sit on top without getting in the crawler’s way.

## Final thought

Most international SEO failures aren’t about algorithms. They’re about control flow. If the site rewrites or hides URLs, Google can’t build a correct map of your markets. When URLs stay stable and connected, hreflang does its job, and your market pages start to win in the places they’re meant to.

## If this sounds familiar

We typically resolve this with a short edge-to-template audit: crawl from multiple locations, review redirects at the CDN and platform layers, and fix selectors and metadata on a small set of templates. If your team wants a second pair of eyes on a Shopify Markets rollout, a Magento store switcher, or a WooCommerce currency plugin, bring a few example URLs and we’ll help you trace what Googlebot actually sees.
