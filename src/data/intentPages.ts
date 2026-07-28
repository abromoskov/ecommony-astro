export type IntentPage = {
  section: 'services' | 'guides' | 'industries';
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  intentSummary: string;
  symptoms: string[];
  commercialImpact: string[];
  whatToFixFirst: string[];
  howEcommonyHelps: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const intentPages: IntentPage[] = [
  
  {
    section: 'services',
    slug: 'shopify-cro-audit',
    eyebrow: 'Shopify CRO audit',
    title: 'Shopify CRO audit for stores losing revenue from unclear journeys',
    description:
      'A Shopify CRO audit for ecommerce teams that want to understand where visitors drop off, why conversion is stuck, and what to fix first.',
    intentSummary:
      'Most Shopify conversion problems are not solved by changing button colours. They usually come from unclear product journeys, weak trust signals, poor offer structure, app bloat, slow templates, or tracking gaps that hide where users are actually dropping out.',
    symptoms: [
      'Conversion rate is flat even though traffic quality looks acceptable.',
      'Users land on product or collection pages but do not add to basket.',
      'The homepage looks polished but does not explain why customers should buy now.',
      'Discounts create short-term sales but do not improve underlying conversion.',
      'GA4, Shopify and ad platform numbers do not clearly explain the journey.'
    ],
    commercialImpact: [
      'Paid traffic becomes more expensive because fewer visitors convert.',
      'Good products underperform because the buying journey does not build enough confidence.',
      'Teams waste time on isolated design changes instead of fixing the highest-friction points.',
      'Revenue forecasts become unreliable because the site cannot convert demand consistently.'
    ],
    whatToFixFirst: [
      'Map the highest-value journeys from landing page to product, basket and checkout.',
      'Identify the points where trust, clarity, offer strength or speed are weakest.',
      'Prioritise fixes by commercial impact rather than visual preference.',
      'Check whether tracking is strong enough to prove which changes worked.'
    ],
    howEcommonyHelps: [
      'Benchmarks your Shopify store against relevant competitors.',
      'Reviews speed, SEO, conversion signals and tracking confidence together.',
      'Turns the findings into a prioritised action plan rather than a generic CRO checklist.',
      'Helps decide whether the first move should be UX, offer, speed, tracking or content.'
    ],
    faqs: [
      {
        question: 'What is included in a Shopify CRO audit?',
        answer:
          'A Shopify CRO audit reviews the customer journey, product pages, collection pages, trust signals, offer structure, site speed and tracking setup to identify what is most likely limiting conversion.'
      },
      {
        question: 'Is this only for large Shopify stores?',
        answer:
          'No. It is useful for any Shopify store with enough traffic or sales activity to make conversion improvements commercially meaningful.'
      },
      {
        question: 'Do you implement the recommendations?',
        answer:
          'Ecommony can provide the audit only, or support implementation across Shopify, tracking, SEO, content and conversion improvements.'
      }
    ]
  },
  {
    section: 'services',
    slug: 'shopify-speed-optimisation',
    eyebrow: 'Shopify speed optimisation',
    title: 'Shopify speed optimisation for stores slowed down by apps, scripts and theme drag',
    description:
      'A practical Shopify speed optimisation service focused on identifying the scripts, apps, templates and front-end issues that slow mobile journeys and reduce conversion.',
    intentSummary:
      'Shopify sites often slow down gradually as apps, tracking scripts, theme changes and third-party tools accumulate. The problem is not always the platform itself. It is usually the combined weight of commercial features that were added without a performance plan.',
    symptoms: [
      'Mobile PageSpeed scores have dropped over time.',
      'The store feels slow even when the design looks simple.',
      'Apps have been added for reviews, pop-ups, subscriptions, tracking or merchandising.',
      'Developers are unsure which scripts can be removed safely.',
      'Conversion is weaker on mobile than expected.'
    ],
    commercialImpact: [
      'Slow mobile journeys increase bounce risk and reduce completed purchases.',
      'Paid traffic becomes less efficient because more visitors leave before buying.',
      'SEO performance can suffer when Core Web Vitals are weak.',
      'Teams become cautious about adding new features because the site already feels fragile.'
    ],
    whatToFixFirst: [
      'Separate essential commercial scripts from avoidable front-end weight.',
      'Review theme templates, app embeds, tracking tags and image loading.',
      'Prioritise improvements by likely conversion impact, not just technical score movement.',
      'Protect performance when new CRO, SEO or tracking changes are introduced.'
    ],
    howEcommonyHelps: [
      'Identifies the biggest sources of Shopify performance drag.',
      'Explains which issues are likely to matter commercially.',
      'Helps avoid removing useful apps blindly without understanding revenue impact.',
      'Builds a practical speed roadmap that protects conversion and tracking.'
    ],
    faqs: [
      {
        question: 'Why do Shopify stores slow down over time?',
        answer:
          'Shopify stores often slow down as apps, tracking scripts, theme customisations and third-party tools accumulate across the front end.'
      },
      {
        question: 'Should every app be removed?',
        answer:
          'No. Some apps are commercially useful. The right approach is to understand which scripts create the most drag and whether they justify their cost.'
      },
      {
        question: 'Does speed optimisation improve conversion?',
        answer:
          'It can, especially on mobile, but speed should be prioritised alongside trust, offer clarity and journey quality.'
      }
    ]
  },
  {
    section: 'services',
    slug: 'ecommerce-tracking-cleanup',
    eyebrow: 'GA4 and tracking cleanup',
    title: 'Ecommerce tracking cleanup for GA4, GTM, Shopify and paid media confidence',
    description:
      'A tracking cleanup service for ecommerce teams that need reliable GA4, GTM, Shopify and paid media data before making growth decisions.',
    intentSummary:
      'Growth decisions become weaker when tracking is inconsistent. If GA4, Shopify, Meta, Google Ads and dashboards disagree, teams struggle to know which channels, pages and campaigns are actually creating valuable customers.',
    symptoms: [
      'GA4 revenue does not match Shopify or payment data.',
      'Meta and Google Ads report different conversion numbers.',
      'Checkout, lead, enquiry or purchase events are missing or duplicated.',
      'A redesign, checkout change or new theme broke reporting.',
      'Dashboards exist but do not support confident decisions.'
    ],
    commercialImpact: [
      'Budget is moved toward channels that may not be genuinely profitable.',
      'CRO tests are harder to evaluate because the conversion data is unreliable.',
      'Teams waste time debating numbers instead of fixing the customer journey.',
      'Senior stakeholders lose confidence in marketing and ecommerce reporting.'
    ],
    whatToFixFirst: [
      'Map the key conversion events that matter commercially.',
      'Check event firing across the live journey, not just inside tag tools.',
      'Remove duplicate, stale or conflicting tags.',
      'Reconcile GA4, platform and ecommerce data into a usable reporting view.'
    ],
    howEcommonyHelps: [
      'Reviews GA4, GTM and ecommerce event quality.',
      'Identifies broken, duplicated or misleading tracking signals.',
      'Connects tracking cleanup to commercial decision-making.',
      'Helps rebuild confidence in performance, CRO and paid media reporting.'
    ],
    faqs: [
      {
        question: 'Why does GA4 not match Shopify?',
        answer:
          'GA4 and Shopify often differ because of attribution rules, consent behaviour, checkout tracking, duplicate tags, missing events and timing differences.'
      },
      {
        question: 'Can tracking be fixed without rebuilding the site?',
        answer:
          'Often yes. Many tracking issues can be corrected through GTM, platform settings, event cleanup and clearer reporting logic.'
      },
      {
        question: 'What is the aim of a tracking cleanup?',
        answer:
          'The aim is not perfect numbers everywhere. It is reliable enough data to make better decisions about traffic, conversion, revenue and customer quality.'
      }
    ]
  },
  {
    section: 'guides',
    slug: 'ecommerce-conversion-rate-optimisation',
    eyebrow: 'Ecommerce CRO guide',
    title: 'Ecommerce conversion rate optimisation: what to fix before redesigning',
    description:
      'A practical ecommerce conversion rate optimisation guide explaining how to diagnose friction, trust gaps, offer clarity and tracking issues before spending on a redesign.',
    intentSummary:
      'A redesign is often the most expensive way to avoid diagnosing the real conversion problem. Before changing the whole site, ecommerce teams should understand whether the constraint is traffic quality, page speed, trust, offer clarity, product discovery, checkout friction or tracking quality.',
    symptoms: [
      'The site looks good but does not convert strongly.',
      'Stakeholders disagree about whether the problem is design, traffic or price.',
      'Users browse but do not add to basket or enquire.',
      'The team wants a redesign but cannot clearly explain what it must fix.',
      'Reports show symptoms but not priority.'
    ],
    commercialImpact: [
      'A redesign can recreate the same problems in a cleaner visual style.',
      'Marketing spend becomes less efficient when conversion friction is unresolved.',
      'Teams prioritise subjective design preferences over measurable commercial blockers.',
      'Growth slows because nobody knows what to fix first.'
    ],
    whatToFixFirst: [
      'Identify which part of the journey loses the most commercial value.',
      'Separate trust problems from speed, offer, UX and tracking problems.',
      'Fix obvious clarity and reassurance gaps before major rebuild work.',
      'Use analytics, competitor context and page review together.'
    ],
    howEcommonyHelps: [
      'Provides a competitor-benchmarked view of conversion friction.',
      'Connects CRO recommendations to SEO, speed and tracking quality.',
      'Prioritises fixes by likely impact and ease of implementation.',
      'Helps teams avoid vague redesign briefs.'
    ],
    faqs: [
      {
        question: 'Should CRO happen before a redesign?',
        answer:
          'Yes. A CRO diagnosis before redesign helps define what the redesign must solve and prevents the same commercial problems being rebuilt.'
      },
      {
        question: 'What is the biggest CRO mistake?',
        answer:
          'The biggest mistake is treating CRO as small visual tweaks rather than understanding the full journey, offer, trust and measurement context.'
      },
      {
        question: 'Can CRO help if traffic is low?',
        answer:
          'Yes, but the approach should focus more on obvious friction, customer clarity and qualitative diagnosis when traffic is too low for reliable testing.'
      }
    ]
  },
  {
    section: 'guides',
    slug: 'shopify-speed-optimisation',
    eyebrow: 'Shopify speed guide',
    title: 'Shopify speed optimisation: what actually slows stores down',
    description:
      'A Shopify speed optimisation guide covering apps, scripts, theme weight, Core Web Vitals and the commercial trade-offs behind performance work.',
    intentSummary:
      'Shopify performance problems are rarely caused by one single issue. The usual pattern is accumulated drag: apps, tracking tags, heavy media, theme customisations, pop-ups, reviews, subscriptions and experimentation tools all competing for attention on mobile.',
    symptoms: [
      'The store has become slower after months of commercial changes.',
      'The theme has been edited by several developers or agencies.',
      'Apps are active but nobody knows which ones still create value.',
      'Core Web Vitals are weak on mobile.',
      'Performance work has been postponed because it feels risky.'
    ],
    commercialImpact: [
      'Slow pages reduce the value of paid and organic traffic.',
      'Mobile users lose confidence before reaching product or checkout steps.',
      'SEO performance may be weakened by poor user experience signals.',
      'Technical debt makes future growth work slower and more expensive.'
    ],
    whatToFixFirst: [
      'Audit app embeds and third-party scripts.',
      'Review the highest-value templates rather than only the homepage.',
      'Check image loading, JavaScript execution and theme structure.',
      'Measure performance changes alongside conversion and revenue quality.'
    ],
    howEcommonyHelps: [
      'Turns speed findings into a prioritised commercial action list.',
      'Balances speed improvement with conversion tools that may still be useful.',
      'Helps ecommerce teams decide what to remove, defer, replace or rebuild.',
      'Keeps performance aligned with SEO, CRO and tracking requirements.'
    ],
    faqs: [
      {
        question: 'Is Shopify slow by default?',
        answer:
          'No. Shopify can perform well, but stores often slow down when apps, scripts and theme changes accumulate without governance.'
      },
      {
        question: 'Which pages should be checked first?',
        answer:
          'Start with pages that matter commercially: homepage, collection pages, product pages, cart and any major landing pages used by paid traffic.'
      },
      {
        question: 'Can speed work damage tracking or conversion tools?',
        answer:
          'It can if done carelessly, which is why scripts and apps should be reviewed commercially as well as technically.'
      }
    ]
  },
  {
    section: 'guides',
    slug: 'ga4-ecommerce-tracking',
    eyebrow: 'GA4 ecommerce tracking guide',
    title: 'GA4 ecommerce tracking: why reports break and what to check first',
    description:
      'A practical guide to GA4 ecommerce tracking problems, including missing events, duplicated conversions, checkout changes, consent issues and platform mismatches.',
    intentSummary:
      'GA4 ecommerce tracking often breaks gradually. A theme change, checkout update, tag migration, consent banner, duplicated pixel or third-party app can make the data less reliable without anyone noticing immediately.',
    symptoms: [
      'Revenue in GA4 is lower or higher than expected.',
      'Purchases, leads or checkout events are missing.',
      'Conversions are duplicated across tags or platforms.',
      'Paid media optimisation looks unstable.',
      'Dashboards no longer match what the business expects.'
    ],
    commercialImpact: [
      'Campaigns may optimise toward incomplete or misleading events.',
      'Teams cannot confidently understand which pages or channels are working.',
      'CRO and SEO decisions are made with weak measurement.',
      'Reporting debates slow down execution.'
    ],
    whatToFixFirst: [
      'Check the event map for purchase, add to basket, checkout, lead and enquiry events.',
      'Test events through the live journey rather than relying only on setup screens.',
      'Review consent, checkout and tag sequencing.',
      'Simplify reporting so decision-makers know which numbers to trust.'
    ],
    howEcommonyHelps: [
      'Audits GA4, GTM and platform event consistency.',
      'Finds missing, duplicated or low-confidence conversion signals.',
      'Connects tracking fixes to marketing, CRO and ecommerce decisions.',
      'Creates a clearer measurement foundation for growth.'
    ],
    faqs: [
      {
        question: 'Why is GA4 ecommerce tracking unreliable?',
        answer:
          'It may be affected by consent rules, checkout restrictions, duplicate tags, missing data layer events, platform changes and attribution differences.'
      },
      {
        question: 'Should GA4 exactly match Shopify?',
        answer:
          'Not always, but the difference should be understood and controlled enough for confident decision-making.'
      },
      {
        question: 'What should be tracked first?',
        answer:
          'Prioritise the events that affect commercial decisions: revenue, purchase, checkout, add to basket, lead quality and key enquiry actions.'
      }
    ]
  },
  {
    section: 'industries',
    slug: 'fashion-ecommerce-growth',
    eyebrow: 'Fashion ecommerce growth',
    title: 'Fashion ecommerce growth for brands with weak discovery, trust or conversion',
    description:
      'Growth strategy for fashion ecommerce brands that need stronger product discovery, buyer confidence, SEO visibility and conversion from existing traffic.',
    intentSummary:
      'Fashion ecommerce growth depends on more than product availability. Buyers need to understand style, fit, quality, delivery, returns, provenance, social proof and why the brand deserves attention in a crowded market.',
    symptoms: [
      'Products are strong but collection and product pages do not rank well.',
      'Visitors browse but do not commit.',
      'Trust signals, reviews, sizing or returns information are not visible enough.',
      'The brand has a point of view but the site does not communicate it clearly.',
      'Paid social drives traffic but conversion is inconsistent.'
    ],
    commercialImpact: [
      'Good products are overlooked because discovery and reassurance are weak.',
      'Paid media has to work harder when organic visibility and trust are underdeveloped.',
      'Average order value stays low because styling, bundles or merchandising are not clear.',
      'Repeat purchase is weaker when CRM and product drops are not structured.'
    ],
    whatToFixFirst: [
      'Improve collection and product page content around how customers search and compare.',
      'Move sizing, condition, delivery, returns and reviews closer to product decisions.',
      'Clarify the brand’s taste, curation and point of view.',
      'Use email and retargeting to bring browsers back around drops, edits and occasions.'
    ],
    howEcommonyHelps: [
      'Audits fashion ecommerce journeys across SEO, CRO, speed and tracking.',
      'Identifies whether the first constraint is visibility, trust, merchandising or conversion.',
      'Builds a practical action plan for stronger demand capture and product discovery.',
      'Connects page improvements to commercial outcomes.'
    ],
    faqs: [
      {
        question: 'What matters most for fashion ecommerce conversion?',
        answer:
          'Fit, trust, imagery, product detail, delivery clarity, returns, styling context and social proof all influence whether browsers become buyers.'
      },
      {
        question: 'How can fashion brands improve SEO?',
        answer:
          'They should build collection, product and editorial pages around style, occasion, material, fit, designer, era and customer intent.'
      },
      {
        question: 'Is paid social enough for fashion growth?',
        answer:
          'Paid social can help, but it works better when the site has strong product discovery, trust signals, email capture and conversion foundations.'
      }
    ]
  },
  {
    section: 'industries',
    slug: 'beauty-ecommerce-growth',
    eyebrow: 'Beauty ecommerce growth',
    title: 'Beauty ecommerce growth for brands that need stronger trust, education and repeat purchase',
    description:
      'Growth strategy for beauty ecommerce brands that need clearer product education, stronger proof, better SEO visibility and repeat purchase journeys.',
    intentSummary:
      'Beauty buyers often research concerns, routines, ingredients, reviews and suitability before purchasing. Brands that do not explain products clearly lose confidence before price or promotion even becomes the main issue.',
    symptoms: [
      'Product pages do not explain who the product is for clearly enough.',
      'Ingredient, routine or concern-led content is thin.',
      'Reviews and proof are not close enough to purchase decisions.',
      'Customers buy once but repeat purchase is weak.',
      'Search visibility is limited outside branded terms.'
    ],
    commercialImpact: [
      'Buyers hesitate because suitability and proof are unclear.',
      'The brand becomes too dependent on paid media and promotions.',
      'Repeat revenue is weaker because routines and replenishment are not structured.',
      'AI and organic search visibility suffer when content is vague or thin.'
    ],
    whatToFixFirst: [
      'Build concern-led and routine-led product education.',
      'Move reviews, usage guidance and reassurance closer to product decisions.',
      'Clarify ingredients, benefits and suitability without unsupported claims.',
      'Create lifecycle flows around replenishment, routine and customer goals.'
    ],
    howEcommonyHelps: [
      'Reviews beauty ecommerce pages for trust, education, SEO and conversion clarity.',
      'Identifies gaps in content structure, proof and customer journey.',
      'Prioritises work across organic demand, CRO and lifecycle marketing.',
      'Helps build stronger foundations before scaling paid acquisition.'
    ],
    faqs: [
      {
        question: 'Why do beauty ecommerce sites need strong education content?',
        answer:
          'Beauty buyers often need to understand suitability, routine, ingredients, usage and proof before they feel confident enough to buy.'
      },
      {
        question: 'How can beauty brands improve repeat purchase?',
        answer:
          'Repeat purchase improves when replenishment, routine guidance, segmentation, email flows and product recommendations are structured around customer needs.'
      },
      {
        question: 'What should beauty brands avoid?',
        answer:
          'They should avoid vague claims, hidden proof, thin product descriptions and unsupported promises that reduce trust.'
      }
    ]
  },
  {
    section: 'industries',
    slug: 'supplements-ecommerce-growth',
    eyebrow: 'Supplement ecommerce growth',
    title: 'Supplement ecommerce growth for brands that need safer trust, education and retention',
    description:
      'Growth strategy for supplement ecommerce brands that need clearer education, responsible claims, stronger proof, better SEO visibility and repeat purchase journeys.',
    intentSummary:
      'Supplement buyers need confidence before purchase. They want to understand what the product is, who it is for, how to use it, what evidence supports it and whether the brand feels credible enough for repeat use.',
    symptoms: [
      'Product education is too thin or too claim-heavy.',
      'Trust signals are not visible enough near purchase decisions.',
      'SEO content does not safely answer goal-led or routine-led questions.',
      'Subscriptions or replenishment journeys are underdeveloped.',
      'Paid traffic is expensive because the site has to work harder to build trust.'
    ],
    commercialImpact: [
      'Buyers hesitate because health-related decisions carry higher perceived risk.',
      'Unsupported or vague claims can damage trust and limit channel scalability.',
      'Low repeat purchase increases dependence on new customer acquisition.',
      'Organic and AI-assisted discovery are weaker when the brand lacks structured, credible answers.'
    ],
    whatToFixFirst: [
      'Clarify product education around responsible, supportable claims.',
      'Make ingredients, usage, suitability and reassurance easy to find.',
      'Build goal-led and routine-led pages that answer real customer questions.',
      'Strengthen lifecycle journeys around repeat use and replenishment.'
    ],
    howEcommonyHelps: [
      'Reviews supplement ecommerce journeys across trust, SEO, CRO, speed and tracking.',
      'Identifies where claims, clarity or proof may be limiting conversion.',
      'Prioritises safe demand capture and retention improvements.',
      'Connects content, product page and lifecycle work into a practical growth plan.'
    ],
    faqs: [
      {
        question: 'What matters most for supplement ecommerce growth?',
        answer:
          'Trust, responsible education, clear usage guidance, proof, product-page clarity and repeat purchase journeys are all central to growth.'
      },
      {
        question: 'Can supplement SEO be done safely?',
        answer:
          'Yes, but content should be responsible, specific and supportable, avoiding exaggerated or unsupported claims.'
      },
      {
        question: 'Why is retention important for supplement brands?',
        answer:
          'Many supplement products rely on routine and repeat use, so retention, replenishment and lifecycle communication strongly affect profitability.'
      }
    ]
  },
  {
    section: 'services',
    slug: 'magento-speed-optimisation',
    eyebrow: 'Magento speed optimisation',
    title: 'Magento speed optimisation for stores slowed down by technical debt and front-end drag',
    description:
      'Magento speed optimisation for ecommerce teams that need to identify theme, extension, server, script and Core Web Vitals issues affecting conversion and SEO.',
    intentSummary:
      'Magento can support complex ecommerce operations, but performance often suffers when extensions, custom themes, tracking scripts, layered navigation, image handling and hosting choices are not governed carefully. The result is usually a site that is powerful commercially but slower than it needs to be on mobile.',
    symptoms: [
      'Magento pages feel slow on mobile or during peak traffic.',
      'Core Web Vitals are weak even after basic optimisation work.',
      'Extensions, custom modules and scripts have accumulated over time.',
      'Category and product pages load more slowly than competitors.',
      'Teams are unsure whether the issue is hosting, theme code, extensions or tracking.'
    ],
    commercialImpact: [
      'Slow Magento journeys reduce the value of paid, organic and returning traffic.',
      'Search visibility can suffer when technical performance and page experience are weak.',
      'Conversion is suppressed when users wait too long for product, basket or checkout steps.',
      'Development time is wasted when performance work is not prioritised by commercial impact.'
    ],
    whatToFixFirst: [
      'Audit the highest-value templates: homepage, category pages, product pages, basket and checkout.',
      'Separate server, theme, extension, tracking and media issues.',
      'Prioritise fixes that affect revenue-driving journeys rather than chasing isolated scores.',
      'Build a performance governance plan so future changes do not recreate the same drag.'
    ],
    howEcommonyHelps: [
      'Reviews Magento performance issues across technical, SEO and conversion impact.',
      'Identifies whether the main drag comes from templates, extensions, scripts, images or infrastructure.',
      'Turns the findings into a practical priority order for development teams.',
      'Keeps speed work aligned with CRO, tracking and commercial trading needs.'
    ],
    faqs: [
      {
        question: 'Why do Magento sites become slow?',
        answer:
          'Magento sites often slow down when custom themes, extensions, scripts, product data, media and hosting choices accumulate without a clear performance governance process.'
      },
      {
        question: 'Should Magento speed work start with hosting?',
        answer:
          'Sometimes, but not always. Hosting, theme code, extensions, JavaScript, images and tracking should be reviewed together before deciding what to fix first.'
      },
      {
        question: 'Can Magento speed optimisation improve SEO?',
        answer:
          'Yes. Stronger performance can support better user experience and reduce technical friction, which may help search visibility when combined with solid SEO foundations.'
      }
    ]
  },
  {
    section: 'services',
    slug: 'wordpress-technical-seo-audit',
    eyebrow: 'WordPress technical SEO audit',
    title: 'WordPress technical SEO audit for sites with weak visibility, plugin bloat or unclear structure',
    description:
      'A WordPress technical SEO audit for ecommerce and lead-generation sites that need clearer crawlability, metadata, structure, speed and content foundations.',
    intentSummary:
      'WordPress sites often look simple from the front end while carrying hidden technical drag behind the scenes. Themes, plugins, page builders, duplicate content, weak metadata, poor internal linking and slow templates can all reduce search visibility even when the content looks acceptable.',
    symptoms: [
      'Organic traffic is flat despite publishing content.',
      'Important pages are not ranking for commercial terms.',
      'Plugins, page builders or theme changes have accumulated over time.',
      'Metadata, headings, schema or internal linking are inconsistent.',
      'The site feels hard to maintain without breaking SEO or design.'
    ],
    commercialImpact: [
      'Qualified search demand is missed because pages do not signal relevance clearly enough.',
      'Content investment underperforms when technical foundations are weak.',
      'Paid media dependence increases because organic acquisition is not doing enough work.',
      'Future changes become risky when plugins and templates are not governed.'
    ],
    whatToFixFirst: [
      'Check indexation, canonical URLs, metadata, headings, schema and internal links.',
      'Review plugin and page-builder impact on speed, markup and maintainability.',
      'Identify which commercial pages need stronger targeting and structure.',
      'Prioritise fixes that improve crawlability, relevance and conversion together.'
    ],
    howEcommonyHelps: [
      'Audits WordPress SEO foundations with commercial context.',
      'Finds technical issues that affect visibility, speed and user confidence.',
      'Prioritises the fixes most likely to improve qualified demand capture.',
      'Connects technical SEO with content, CRO and tracking quality.'
    ],
    faqs: [
      {
        question: 'What does a WordPress technical SEO audit include?',
        answer:
          'It typically reviews crawlability, indexation, metadata, headings, schema, internal links, speed, plugin impact, duplicate content and the structure of key commercial pages.'
      },
      {
        question: 'Can plugins damage SEO?',
        answer:
          'Plugins can help, but too many or poorly configured plugins can slow pages, create conflicting markup, add duplicate features or make the site harder to maintain.'
      },
      {
        question: 'Is this only for blogs?',
        answer:
          'No. WordPress technical SEO matters for ecommerce, lead-generation, content-led and high-consideration websites.'
      }
    ]
  },
  {
    section: 'services',
    slug: 'ga4-ecommerce-tracking-audit',
    eyebrow: 'GA4 ecommerce tracking audit',
    title: 'GA4 ecommerce tracking audit for teams that cannot trust their revenue data',
    description:
      'A GA4 ecommerce tracking audit for teams that need to understand missing events, duplicated conversions, checkout gaps and unreliable paid media signals.',
    intentSummary:
      'When GA4 ecommerce tracking is unreliable, every growth decision becomes harder. The problem is rarely just one tag. Consent settings, checkout changes, data layer quality, duplicate pixels, app-based tracking and platform attribution can all create numbers that look precise but are not decision-ready.',
    symptoms: [
      'GA4 revenue does not reconcile with Shopify, Magento or payment data.',
      'Purchase, checkout, add-to-basket or lead events are missing or duplicated.',
      'Paid media platforms report different conversion numbers.',
      'A checkout, theme or consent change disrupted reporting.',
      'Dashboards exist but nobody fully trusts the numbers.'
    ],
    commercialImpact: [
      'Budget can be moved toward channels that are not genuinely creating profitable customers.',
      'CRO and SEO decisions become weaker because performance signals are unreliable.',
      'Teams waste time debating data instead of fixing the customer journey.',
      'Senior stakeholders lose confidence in ecommerce reporting.'
    ],
    whatToFixFirst: [
      'Map the events that directly affect commercial decisions.',
      'Test event firing through the live journey, including checkout and thank-you steps.',
      'Check for duplicate tags, missing parameters, consent effects and platform mismatches.',
      'Create a clearer reporting view that separates directional insight from exact accounting.'
    ],
    howEcommonyHelps: [
      'Audits GA4, GTM and platform tracking consistency.',
      'Identifies missing, duplicated or misleading ecommerce events.',
      'Explains which tracking problems are most likely to affect growth decisions.',
      'Helps rebuild a measurement foundation for paid media, CRO and ecommerce reporting.'
    ],
    faqs: [
      {
        question: 'Why does GA4 not match ecommerce platform revenue?',
        answer:
          'GA4 can differ because of attribution rules, consent, checkout restrictions, missing events, duplicate tags, payment timing and platform reporting differences.'
      },
      {
        question: 'Do ecommerce numbers need to match exactly?',
        answer:
          'Not always. The goal is to understand the difference well enough to make confident decisions about channels, pages, campaigns and conversion quality.'
      },
      {
        question: 'What events should be checked first?',
        answer:
          'Start with purchase, add to basket, checkout, lead, enquiry and any events used for paid media optimisation or senior reporting.'
      }
    ]
  },
  {
    section: 'services',
    slug: 'ecommerce-conversion-audit',
    eyebrow: 'Ecommerce conversion audit',
    title: 'Ecommerce conversion audit for sites that get traffic but do not convert enough customers',
    description:
      'An ecommerce conversion audit for brands that need to understand where trust, product discovery, offer clarity, speed or tracking issues are limiting revenue.',
    intentSummary:
      'If traffic is reaching the site but sales or enquiries are weaker than expected, the issue is usually a combination of journey friction rather than one isolated design flaw. The first job is to identify whether users lack trust, cannot find the right product, do not understand the offer, hit speed friction, or are being measured incorrectly.',
    symptoms: [
      'Traffic has grown but sales or enquiries have not followed.',
      'Users browse but do not add to basket, enquire or complete checkout.',
      'The site looks polished but does not explain the offer clearly enough.',
      'Discounts create temporary lifts without fixing the underlying issue.',
      'Analytics does not clearly show where the journey is leaking.'
    ],
    commercialImpact: [
      'Marketing spend becomes less efficient because fewer visitors turn into customers.',
      'Good products or services underperform because the journey does not build enough confidence.',
      'Teams waste budget on acquisition before fixing the revenue leakage already on the site.',
      'Growth plans become harder to forecast because conversion is inconsistent.'
    ],
    whatToFixFirst: [
      'Identify the highest-value journeys and where users are most likely to lose confidence.',
      'Separate trust, clarity, product discovery, speed, offer and tracking issues.',
      'Prioritise fixes by likely commercial impact and ease of implementation.',
      'Build a short action plan before considering a wider redesign.'
    ],
    howEcommonyHelps: [
      'Benchmarks the site against competitor and category expectations.',
      'Reviews SEO, speed, conversion and tracking together rather than separately.',
      'Identifies the highest-confidence fixes to improve revenue from existing traffic.',
      'Turns audit findings into a practical execution plan.'
    ],
    faqs: [
      {
        question: 'What is included in an ecommerce conversion audit?',
        answer:
          'It reviews the customer journey, key pages, trust signals, product discovery, offer clarity, speed, tracking and competitor context to identify what is most likely limiting conversion.'
      },
      {
        question: 'Is this different from a redesign?',
        answer:
          'Yes. A conversion audit diagnoses what should be fixed before design work begins, so a redesign does not simply rebuild the same commercial problems.'
      },
      {
        question: 'Can conversion improve without more traffic?',
        answer:
          'Yes. If the site has existing traffic, fixing trust, clarity, journey and offer issues can increase revenue without relying only on more acquisition.'
      }
    ]
  },
  {
    section: 'services',
    slug: 'fractional-head-of-ecommerce',
    eyebrow: 'Fractional Head of Ecommerce',
    title: 'Fractional Head of Ecommerce for brands that need senior commercial direction',
    description:
      'Senior ecommerce leadership for brands that need clearer growth priorities, stronger agency management, a disciplined trading rhythm and confident tracking without hiring a full-time Head of Ecommerce.',
    intentSummary:
      'Ecommerce growth can stall when responsibility is spread across founders, marketers, agencies and developers without one senior owner connecting commercial targets to day-to-day decisions. A Fractional Head of Ecommerce brings that ownership into the business, setting direction, challenging performance, coordinating partners and building a practical plan around the changes most likely to improve revenue, profit and marketing efficiency.',
    symptoms: [
      'Ecommerce decisions are split across several people but nobody owns the overall commercial plan.',
      'Agencies and specialists deliver activity without enough senior direction or accountability.',
      'Trading meetings focus on reporting results rather than deciding what to do next.',
      'Tracking and channel data conflict, making growth priorities difficult to defend.',
      'The business needs experienced ecommerce leadership but is not ready for a full-time senior hire.'
    ],
    commercialImpact: [
      'Budget is spread across disconnected initiatives instead of the highest-value growth opportunities.',
      'Agencies work in silos, creating slower delivery and weaker commercial accountability.',
      'Promotions, merchandising and acquisition decisions become reactive rather than part of a consistent trading rhythm.',
      'Senior teams lose confidence in forecasts and investment decisions when measurement is unclear.'
    ],
    whatToFixFirst: [
      'Set clear ecommerce targets, ownership and decision-making responsibilities.',
      'Establish a trading rhythm that connects performance reporting to weekly actions and longer-term priorities.',
      'Review agency scopes, roadmaps and results against shared commercial outcomes.',
      'Create a prioritised growth plan covering conversion, retention, acquisition, merchandising, technology and tracking confidence.'
    ],
    howEcommonyHelps: [
      'Provides senior ecommerce leadership without the cost or commitment of a full-time Head of Ecommerce.',
      'Turns commercial goals into a focused roadmap with clear owners, measures and priorities.',
      'Directs agencies and internal teams around shared outcomes rather than isolated channel activity.',
      'Improves trading discipline, tracking confidence and the quality of ecommerce investment decisions.'
    ],
    faqs: [
      {
        question: 'What does a Fractional Head of Ecommerce do?',
        answer:
          'A Fractional Head of Ecommerce provides part-time senior leadership across ecommerce strategy, trading, agencies, conversion, acquisition, retention, technology and measurement, with responsibility for turning commercial goals into coordinated action.'
      },
      {
        question: 'When should a brand use a fractional ecommerce leader?',
        answer:
          'It is useful when ecommerce has become commercially important but the business does not yet need, cannot justify or is not ready to recruit a full-time Head of Ecommerce.'
      },
      {
        question: 'Can a Fractional Head of Ecommerce manage existing agencies?',
        answer:
          'Yes. The role can set clearer briefs, align agency roadmaps, challenge recommendations, review performance and ensure specialist partners work toward the same commercial priorities.'
      },
      {
        question: 'Is this an advisory role or a hands-on role?',
        answer:
          'It can include both. The balance depends on the team, but the focus is practical leadership: setting direction, improving decisions, coordinating delivery and maintaining accountability for progress.'
      }
    ]
  },
  {
    section: 'guides',
    slug: 'shopify-conversion-rate-optimisation',
    eyebrow: 'Shopify CRO guide',
    title: 'Shopify conversion rate optimisation: what to fix before changing the theme',
    description:
      'A practical Shopify conversion rate optimisation guide covering trust signals, product pages, collection journeys, apps, speed and tracking.',
    intentSummary:
      'Shopify conversion problems are often blamed on the theme, but the real constraint is usually more specific. Product detail, collection logic, trust signals, offer clarity, mobile speed, app behaviour and tracking quality all affect whether visitors move from interest to purchase.',
    symptoms: [
      'The Shopify store gets traffic but conversion is stuck.',
      'Product pages look acceptable but users do not add to basket.',
      'Collection pages make it hard to compare or choose products.',
      'Apps have been added for conversion but the journey feels heavier.',
      'Reports do not clearly show where users are dropping out.'
    ],
    commercialImpact: [
      'Paid traffic becomes more expensive when the store does not convert enough visitors.',
      'Theme changes can waste budget if they do not address the real conversion blocker.',
      'Useful apps may create speed drag when they are not governed properly.',
      'Teams struggle to prioritise because UX, speed, offer and tracking issues are mixed together.'
    ],
    whatToFixFirst: [
      'Review the highest-value customer journeys before changing the theme.',
      'Check product-page clarity, trust signals, delivery, returns and social proof.',
      'Assess whether apps support conversion or create avoidable friction.',
      'Validate tracking so conversion decisions are based on reliable data.'
    ],
    howEcommonyHelps: [
      'Benchmarks Shopify journeys against competitor and category expectations.',
      'Reviews CRO, speed, SEO and tracking signals together.',
      'Identifies which Shopify fixes should happen first.',
      'Turns the audit into a practical action plan for growth.'
    ],
    faqs: [
      {
        question: 'Should Shopify CRO start with a new theme?',
        answer:
          'Not usually. It is better to diagnose the journey first, then decide whether the theme, product pages, apps, speed or offer clarity need work.'
      },
      {
        question: 'What affects Shopify conversion most?',
        answer:
          'Trust, product-page clarity, collection discovery, offer strength, mobile speed, checkout confidence and tracking quality all influence conversion.'
      },
      {
        question: 'Can Shopify apps hurt conversion?',
        answer:
          'Yes. Some apps improve conversion, but too many scripts, pop-ups or overlapping tools can slow the journey and reduce confidence.'
      }
    ]
  },
  {
    section: 'guides',
    slug: 'technical-seo-for-ecommerce',
    eyebrow: 'Technical SEO guide',
    title: 'Technical SEO for ecommerce: what blocks qualified organic growth',
    description:
      'A practical guide to technical SEO for ecommerce sites, covering crawlability, indexation, metadata, structured data, internal linking, speed and product-page quality.',
    intentSummary:
      'Ecommerce SEO is not just about adding more content. Search visibility depends on whether important pages can be crawled, understood, trusted and matched to the way customers search. Weak technical foundations can make good products invisible.',
    symptoms: [
      'Category or product pages are not ranking for commercial terms.',
      'Important pages have thin, duplicated or unclear metadata.',
      'Structured data is missing, inconsistent or not useful.',
      'Internal linking does not support priority categories or products.',
      'Organic traffic exists but does not reach the pages that drive revenue.'
    ],
    commercialImpact: [
      'Qualified demand is missed because search engines cannot interpret the site clearly enough.',
      'Content work underperforms when crawlability, metadata or structure are weak.',
      'Paid media dependence increases because organic acquisition is not doing enough work.',
      'Competitors win demand by being clearer, faster and easier to understand.'
    ],
    whatToFixFirst: [
      'Check indexation, canonical logic, metadata, headings and structured data.',
      'Review category and product-page quality around real buyer intent.',
      'Improve internal links toward commercial pages that should capture demand.',
      'Fix speed and template issues that weaken user experience and search performance.'
    ],
    howEcommonyHelps: [
      'Audits ecommerce technical SEO through a commercial lens.',
      'Connects crawl, metadata, structured data, speed and content quality.',
      'Prioritises fixes by likely impact on qualified demand capture.',
      'Links SEO work to conversion and tracking confidence.'
    ],
    faqs: [
      {
        question: 'What is technical SEO for ecommerce?',
        answer:
          'It covers the crawlability, indexation, structure, metadata, structured data, internal linking, speed and page quality that help search engines understand commercial pages.'
      },
      {
        question: 'Is technical SEO different for ecommerce?',
        answer:
          'Yes. Ecommerce sites have category, product, filter, variant, inventory and template issues that need more careful handling than simple content sites.'
      },
      {
        question: 'What should be fixed first?',
        answer:
          'Start with issues affecting indexation, commercial page relevance, structured data, internal links and any templates that drive meaningful revenue.'
      }
    ]
  },
  {
    section: 'guides',
    slug: 'ecommerce-speed-optimisation',
    eyebrow: 'Ecommerce speed guide',
    title: 'Ecommerce speed optimisation: how to protect conversion while improving performance',
    description:
      'A practical ecommerce speed optimisation guide covering mobile performance, Core Web Vitals, scripts, images, apps, templates and commercial prioritisation.',
    intentSummary:
      'Speed work should not be treated as a purely technical score chase. Ecommerce performance matters because slow journeys reduce confidence, interrupt product discovery and make paid and organic traffic less efficient. The best approach is to improve speed without damaging useful conversion tools or tracking.',
    symptoms: [
      'Mobile pages feel slow even when desktop looks fine.',
      'Core Web Vitals or PageSpeed scores are weaker than expected.',
      'Apps, pixels, scripts and media have accumulated over time.',
      'Developers are unsure what can be removed safely.',
      'Speed fixes have not clearly improved commercial performance.'
    ],
    commercialImpact: [
      'Slow journeys reduce conversion efficiency, especially on mobile.',
      'Paid traffic becomes less profitable when users leave before acting.',
      'Search performance may be weakened if page experience is poor.',
      'Teams waste development time when fixes are not prioritised by commercial value.'
    ],
    whatToFixFirst: [
      'Identify the templates and journeys that matter most commercially.',
      'Separate essential scripts from avoidable front-end weight.',
      'Review image loading, JavaScript execution, app embeds and third-party tools.',
      'Measure speed work alongside conversion, engagement and tracking impact.'
    ],
    howEcommonyHelps: [
      'Audits ecommerce speed issues by likely commercial impact.',
      'Identifies which scripts, apps, templates or media are creating the most drag.',
      'Protects useful conversion and tracking functionality while reducing friction.',
      'Builds a speed roadmap aligned with SEO and CRO.'
    ],
    faqs: [
      {
        question: 'Does ecommerce speed optimisation always improve conversion?',
        answer:
          'It can, especially on mobile, but the impact depends on the baseline, traffic quality, journey friction and whether the right templates are improved.'
      },
      {
        question: 'Should speed work focus only on PageSpeed scores?',
        answer:
          'No. Scores are useful signals, but ecommerce teams should prioritise speed improvements that affect real users and commercial journeys.'
      },
      {
        question: 'Can removing scripts damage the site?',
        answer:
          'Yes. Scripts should be reviewed carefully so useful conversion, tracking, reviews or merchandising tools are not removed blindly.'
      }
    ]
  },
  {
    section: 'guides',
    slug: 'server-side-tracking-for-ecommerce',
    eyebrow: 'Server-side tracking guide',
    title: 'Server-side tracking for ecommerce: when it helps and what to check first',
    description:
      'A practical guide to server-side tracking for ecommerce teams reviewing GA4, GTM, Meta, Google Ads, consent, latency and data quality.',
    intentSummary:
      'Server-side tracking can improve data quality, control and resilience, but it is not a magic fix for poor measurement. Ecommerce teams need to understand what problem they are solving first: missing conversions, consent effects, ad platform signal loss, slow tags, data governance or reporting confidence.',
    symptoms: [
      'Client-side tracking is being blocked or losing signal.',
      'Meta, Google Ads and GA4 conversion numbers are inconsistent.',
      'Consent settings make reporting harder to interpret.',
      'The site has many third-party tags affecting performance.',
      'The team wants server-side GTM but has not mapped the data requirements.'
    ],
    commercialImpact: [
      'Paid media optimisation can weaken when platforms receive incomplete or inconsistent signals.',
      'Reporting confidence drops when no one understands which numbers to trust.',
      'Tag-heavy pages can slow down and affect conversion.',
      'Server-side implementation can waste budget if the underlying event model is poor.'
    ],
    whatToFixFirst: [
      'Define which events and parameters are commercially important.',
      'Audit current client-side tracking, consent behaviour and platform reporting.',
      'Decide whether server-side tracking solves the specific measurement problem.',
      'Plan governance so data quality, privacy, latency and platform signals are managed together.'
    ],
    howEcommonyHelps: [
      'Reviews ecommerce tracking quality before recommending server-side implementation.',
      'Identifies where GA4, GTM and ad platform signals are weak or duplicated.',
      'Connects tracking architecture to commercial decision-making.',
      'Helps prioritise measurement fixes that support growth rather than technical complexity.'
    ],
    faqs: [
      {
        question: 'What is server-side tracking?',
        answer:
          'Server-side tracking routes selected events through a server endpoint rather than relying only on browser-side tags, giving more control over data flow, privacy handling and platform signals.'
      },
      {
        question: 'Does server-side tracking fix all attribution problems?',
        answer:
          'No. It can improve signal quality and control, but attribution differences, consent limits, event design and platform rules still need to be understood.'
      },
      {
        question: 'When should ecommerce teams consider it?',
        answer:
          'Consider it when conversion signal loss, tag governance, performance, privacy or paid media optimisation issues are significant enough to justify the added complexity.'
      }
    ]
  },
  {
    section: 'industries',
    slug: 'home-interiors-ecommerce-growth',
    eyebrow: 'Home and interiors ecommerce growth',
    title: 'Home interiors ecommerce growth for brands with slow research journeys and high-consideration purchases',
    description:
      'Growth strategy for home and interiors ecommerce brands that need stronger product discovery, buyer confidence, SEO visibility and conversion from considered purchases.',
    intentSummary:
      'Home and interiors buyers often research by room, style, size, material, delivery, returns and inspiration before buying. If product pages, category pages and trust signals do not answer those questions clearly, even strong products can underperform.',
    symptoms: [
      'Category pages do not capture room, style, size or material searches.',
      'Product pages do not provide enough reassurance around dimensions, delivery or returns.',
      'Buyers browse inspiration but do not move confidently to purchase.',
      'High-ticket products get traffic but weak conversion.',
      'SEO content is thin compared with the questions customers ask before buying.'
    ],
    commercialImpact: [
      'High-consideration buyers hesitate because they cannot picture fit, quality or delivery clearly enough.',
      'Organic visibility is weaker when pages do not match how customers research rooms, styles and products.',
      'Paid traffic becomes expensive when product pages do not build enough confidence.',
      'Average order value and repeat engagement suffer when merchandising and inspiration are not structured.'
    ],
    whatToFixFirst: [
      'Build category and guide pages around room, style, size, material and use-case intent.',
      'Improve product pages with dimensions, delivery clarity, returns, materials and visual context.',
      'Move reviews, trust signals and reassurance closer to purchase decisions.',
      'Use content and email to support longer consideration journeys.'
    ],
    howEcommonyHelps: [
      'Reviews home and interiors ecommerce journeys across SEO, CRO, speed and tracking.',
      'Identifies whether the main constraint is discovery, reassurance, speed or offer clarity.',
      'Prioritises page and content improvements by likely commercial impact.',
      'Connects product-page improvements to organic demand and conversion performance.'
    ],
    faqs: [
      {
        question: 'What matters most for home interiors ecommerce conversion?',
        answer:
          'Buyers need confidence around size, materials, delivery, returns, imagery, room fit, reviews and product quality before committing to considered purchases.'
      },
      {
        question: 'How can home and interiors brands improve SEO?',
        answer:
          'They should build pages around room, style, material, size, use case, buying questions and inspiration-led search behaviour.'
      },
      {
        question: 'Why is content important in home ecommerce?',
        answer:
          'Content helps customers imagine, compare and plan purchases, which is especially important when products affect the look and feel of a home.'
      }
    ]
  },
  {
    section: 'industries',
    slug: 'jewellery-luxury-ecommerce-growth',
    eyebrow: 'Jewellery and luxury ecommerce growth',
    title: 'Jewellery and luxury ecommerce growth for brands that need stronger trust, provenance and premium conversion',
    description:
      'Growth strategy for jewellery and luxury ecommerce brands that need stronger trust, provenance, product detail, SEO visibility and premium buyer confidence.',
    intentSummary:
      'Jewellery and luxury buyers need more than attractive product imagery. They need confidence in authenticity, materials, provenance, sizing, delivery, aftercare, reviews and the brand’s authority before committing to higher-value purchases.',
    symptoms: [
      'Premium products receive interest but conversion is weaker than expected.',
      'Product pages do not explain materials, provenance, sizing or care clearly enough.',
      'Trust signals and guarantees are not visible near purchase decisions.',
      'Organic visibility is limited outside branded searches.',
      'The brand has a premium feel but not enough proof or authority online.'
    ],
    commercialImpact: [
      'High-value buyers hesitate when authenticity, quality or service reassurance is unclear.',
      'Premium pricing becomes harder to defend without proof, provenance and authority.',
      'Organic demand is missed when collection and product pages do not match buyer search behaviour.',
      'Referral, repeat and gifting opportunities are weaker when aftercare and clienteling are underdeveloped.'
    ],
    whatToFixFirst: [
      'Strengthen product pages with materials, provenance, sizing, care, guarantees and delivery reassurance.',
      'Move reviews, press, credentials or customer proof closer to decision points.',
      'Improve collection pages around occasion, material, style, maker and gifting intent.',
      'Build authority through editorial content, expert guidance, PR and third-party validation.'
    ],
    howEcommonyHelps: [
      'Audits jewellery and luxury ecommerce journeys across trust, SEO, conversion and tracking.',
      'Identifies where proof, product detail or authority are limiting conversion.',
      'Prioritises improvements for premium buyer confidence and qualified demand capture.',
      'Connects product, content and trust improvements to commercial outcomes.'
    ],
    faqs: [
      {
        question: 'What matters most for luxury ecommerce conversion?',
        answer:
          'Premium buyers need trust, provenance, materials, sizing, service reassurance, guarantees, delivery clarity and visible proof before making higher-value purchases.'
      },
      {
        question: 'How can jewellery brands improve SEO?',
        answer:
          'Jewellery brands should improve pages around occasion, material, style, maker, gifting, care, sizing and provenance search intent.'
      },
      {
        question: 'Why is provenance important?',
        answer:
          'Provenance helps buyers understand authenticity, rarity, quality and value, which is especially important for premium or considered purchases.'
      }
    ]
  },
  {
    section: 'industries',
    slug: 'health-wellness-ecommerce-growth',
    eyebrow: 'Health and wellness ecommerce growth',
    title: 'Health and wellness ecommerce growth for brands that need safer trust, clearer education and repeat purchase',
    description:
      'Growth strategy for health and wellness ecommerce brands that need responsible education, stronger proof, better SEO visibility and repeat purchase journeys.',
    intentSummary:
      'Health and wellness buyers are cautious because the purchase often relates to personal goals, routines or wellbeing. Growth depends on clear education, responsible claims, visible proof, strong product-page reassurance and lifecycle journeys that support repeat use.',
    symptoms: [
      'Product education is either too thin, too vague or too claim-heavy.',
      'Trust signals, credentials or proof are not visible enough near purchase decisions.',
      'SEO content does not answer goal-led, routine-led or concern-led questions clearly.',
      'Customers buy once but repeat purchase is weaker than expected.',
      'Paid traffic is expensive because the site has to build trust from scratch.'
    ],
    commercialImpact: [
      'Buyers hesitate when they cannot understand suitability, usage, evidence or brand credibility.',
      'Weak education reduces organic and AI-assisted visibility for research-led queries.',
      'Retention suffers when replenishment, routine and lifecycle journeys are not structured.',
      'Overclaiming or vague proof can damage trust and limit scalable acquisition.'
    ],
    whatToFixFirst: [
      'Clarify product education around responsible, supportable claims and customer goals.',
      'Make ingredients, usage, suitability, reviews and reassurance easy to find.',
      'Build goal-led and routine-led pages that safely answer real customer questions.',
      'Create lifecycle journeys around repeat use, replenishment and customer intent.'
    ],
    howEcommonyHelps: [
      'Reviews health and wellness ecommerce journeys across trust, SEO, CRO, speed and tracking.',
      'Identifies where claims, clarity, proof or lifecycle gaps may be limiting growth.',
      'Prioritises responsible demand capture and retention improvements.',
      'Connects content, product pages and lifecycle work into a practical growth plan.'
    ],
    faqs: [
      {
        question: 'What matters most for health and wellness ecommerce growth?',
        answer:
          'Trust, responsible education, clear usage guidance, proof, product-page clarity and repeat purchase journeys are all central to growth.'
      },
      {
        question: 'Can health and wellness SEO be done safely?',
        answer:
          'Yes, but content should be specific, responsible and supportable, avoiding exaggerated or unsupported claims.'
      },
      {
        question: 'Why is retention important for health and wellness brands?',
        answer:
          'Many health and wellness products are routine-led, so replenishment, lifecycle messaging and customer education strongly affect profitability.'
      }
    ]
  }
];

export function getIntentPagePath(page: IntentPage) {
  return `/${page.section}/${page.slug}/`;
}
