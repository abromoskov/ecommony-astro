---
title: "What Google AI Overviews are doing to ecommerce category discovery and what still earns clicks"
description: "AI Overviews are rerouting category discovery and stealing clicks; see impact on Shopify and Magento, how to shore up CTR with schema, and what to fix first."
image: "/images/blog-what-google-ai-overviews-are-doing-to-ecommerce-category-dis.jpg"
excerpt: "AI Overviews are rerouting category discovery and stealing clicks; see impact on Shopify and Magento, how to shore up CTR with schema, and what to fix first."
category: "seo"
date: 2026-04-10
author: "Nigel Abramow"
references: [
  {
    "label": "Google: Creating helpful, reliable, people-first content",
    "url": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
  },
  {
    "label": "Google: Product structured data",
    "url": "https://developers.google.com/search/docs/appearance/structured-data/product"
  },
  {
    "label": "Google Web Vitals (LCP, INP, CLS)",
    "url": "https://web.dev/vitals/"
  }
]
---




Open a rank tracker this quarter and the picture is familiar: your main category terms haven’t fallen, but clicks are down. A manual check shows why. For “men’s waterproof jacket” or “best desk chair for back pain,” Google now opens with an AI Overview that explains what to look for, sometimes shows product tiles, and links to a handful of sources. Your category page sits below that block and the ads, even when it still ranks number one.

For ecommerce teams on Shopify, Magento or WordPress, this feels like the ground shifting under category discovery. The search page has turned from a hand-off to your list pages into a place where selection happens, or at least begins. That changes what gets clicked and which pages get to participate.

## The problem

Category queries used to be reliable feeders into collection and PLP templates. Today, AI Overviews intercept a share of that intent with quick guidance and product picks drawn from Google’s Shopping systems. Users get enough signal to postpone the click, or they jump to a source that looks more like a buying guide than a grid. Category pages that rely on filters and a sentence of boilerplate often fail to earn a slot in the overview, and even when they sit just below it, they win fewer clicks.

The result isn’t a ranking crash; it’s a CTR slide concentrated on generic and “help me choose” queries. Product and brand terms are steadier. That pattern is exactly what operators are reporting in Search Console: impressions flat to up, clicks and CTR down on head category phrases since AI Overviews rolled out at scale in mid‑2024.

## Why it happens

It’s tempting to think of AI Overviews as a bigger featured snippet. In practice, it’s a new layer that reframes intent and pulls from different data sources than the ten blue links. That combination nudges users toward criteria and options before they see your category.

- Selection intent is being answered up top

Google’s AI Overview is tuned to answer “what matters” before “where to go.” For category terms, that means a short explainer on materials, key specs or trade‑offs, plus a few product examples. Editorial buying guides, spec explainers and authoritative retailers tend to be cited here, not generic category grids with no real advice. If your page doesn’t explain how to choose, it rarely earns a mention.

- The Shopping Graph feeds the product tiles

Those compact product cards in and around AI Overviews don’t come from your on-page copy. They’re driven by Google’s Shopping Graph, which aggregates feeds from Merchant Center, structured data, and user interactions. Retailers with complete GTIN coverage, accurate availability, clean images and stable pricing are more likely to surface as examples, even for broad queries. That shifts some early attention from category pages to individual product pages.

- The layout compresses organic discovery

On many commercial queries, the screen now stacks paid units, an AI Overview, and additional carousels before the first organic link. Even when you hold a high position, you are a scroll away from the first interaction. That pushes users toward quick comparisons and short answers, and it rewards titles and snippets that promise something the overview cannot deliver.

- Eligibility favors concise, extractable signals

AI Overviews cite sources when they add evidence or clarity. Pages that structure answers with clear headings, specific claims and supporting data are more quotable than a faceted grid with a vague intro. Technical signals still matter: fast rendering helps the crawler access content, and supported structured data types make your products and organization easier to trust programmatically.

- Freshness and consensus shape what appears

Google’s systems look for up‑to‑date guidance that aligns with a broad understanding of the topic. Static category blurbs from years ago won’t look current next to a 2024 buying guide. Seasonal categories, model‑year refreshes and compliance‑sensitive items need updated advice to match what the overview is trying to explain.

## What it means commercially

Traffic mix is changing at the top of the funnel. Non‑brand category clicks are becoming harder to earn with a plain PLP, and some of that discovery is drifting to editorial sources and Shopping surfaces. If paid activity fills the gap, acquisition costs climb because you’re paying to replace what used to be organic.

Winners tend to have three traits. First, they feed the Shopping Graph well, so their SKUs appear as examples with price and availability. Second, they publish buyer’s‑guide content linked to category and subcategory pages, so they can be cited when the overview explains trade‑offs. Third, they offer something the overview can’t resolve—live inventory by size, fit finders, compatibility guarantees, local pickup—called out clearly in titles and snippets to motivate the click.

Expect product pages to pick up a greater share of entrances on generic terms, especially when a specific model is shown in the overview. Expect category pages that rely on filters alone to lose share, and subcategories that map tightly to jobs‑to‑be‑done (e.g., “men’s waterproof jackets for cycling”) to hold up better. Reporting needs to reflect that shift so merchandising and media budgets aren’t reacting to aggregate declines without nuance.

## What to check first

Before redesigning templates, confirm where and how AI Overviews are affecting you. Sample the actual results, not just positions.

- Take your top 50 non‑brand category queries and record whether an AI Overview appears, which sources are cited, and whether product tiles show
- Note whether the overview frames the query as “how to choose,” “best of,” or “compare,” and map that to your current landing pages
- In Search Console, segment category queries by modifiers like “best,” “for [use case],” “size,” and “near me” to isolate where CTR is declining most

Once you know the pattern, focus on the inputs Google is using and the promises that still earn a click.

- Merchant Center and feed quality

Your eligibility for product tiles depends on data quality, not prose. Check GTIN coverage, price and availability freshness, image policy compliance, and shipping settings. Data mismatches or missing identifiers suppress visibility even if your SEO is solid. On Shopify, audit your feed app’s attribute mapping; on Magento and WooCommerce, ensure configurable and variant data resolves to valid, indexable SKUs with unique identifiers.

- Category and subcategory architecture

Most themes ship with thin category copy buried below the fold. Replace generic blurbs with real selection guidance that addresses materials, trade‑offs and use cases in 120–200 words above the grid, then link to deeper guides. Create indexable subcategories for high‑intent facets like “wide fit,” “carry‑on 22‑inch,” or “for small spaces,” and link them in navigation. Avoid parameter‑only URLs for core facets; use clean paths and canonicalize alternates carefully.

- Content designed to be cited

Publish evergreen buyer’s‑guide pages that your category and subcategories can own. Structure them with clear H2s that match how people ask (“What size carry‑on fits a regional jet?”), short declarative answers, and supportive tables or checklists. Reference standards, compatibility, or brand‑specific quirks. Link back to the category or a curated set rather than dumping the entire range.

- Structured data where Google supports it

Use Product, Review, AggregateRating, Offer, Organization and Breadcrumb markup consistently. Add pros and cons on product pages where you have real opinions, not autogenerated fluff. On category and guide pages, use ItemList to describe curated lists, and keep internal linking clean so Google can associate guides with the products and categories they inform.

- Snippets that promise what the overview cannot

Rewrite titles and meta descriptions to surface concrete advantages: live inventory by size, fit finder tools, price‑match policies, delivery windows, and local pickup. “Men’s waterproof jackets | In‑stock by size, free returns, 2‑day delivery” earns more than “Buy men’s waterproof jackets | Brand.”

- Speed and interaction quality

A slow category page loses twice: it’s less likely to be crawled and quoted cleanly, and users who do click back out. Prioritize LCP on collection templates by deferring non‑essential scripts, compressing hero media, and server‑side rendering product tiles where your stack allows it. Many Shopify and WooCommerce themes ship with heavy front‑end frameworks; trim app scripts on PLPs that don’t drive selection.

These checks don’t require a platform rebuild. They align your pages with how the SERP is now orchestrating discovery and give you hooks to be included or to out‑promise the overview.

## Final thought

Category discovery is no longer a straight line from query to grid. The search page is doing more of the early sorting, and it’s doing it with signals your product feed and buying advice provide. Retailers that treat category SEO as both content and data—guides that explain, feeds that are complete, and templates that advertise real service advantages—will keep earning clicks even when the overview is in the way.

When the grid isn’t the first stop, the click goes to whoever reduces uncertainty fastest. That’s still a race retail can win.

If you want an outside view, start with a simple exercise: pick ten of your biggest category queries, capture the current SERP, and mark what the overview says that you don’t. If the gaps are feed quality, missing subcategories or thin guidance, we can help you audit and prioritize the fixes without blowing up your templates. The aim is pragmatic: protect discovery where AI Overviews are strongest, and grow it where they’re weakest—specificity, service and real‑time availability.
