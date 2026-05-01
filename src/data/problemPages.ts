export type ProblemPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  serviceType: string;
  summary: string;
  introTitle: string;
  intro: string;
  symptoms: string[];
  whatBreaks: string[];
  whatToCheckFirst: string[];
  evidenceIntro: string;
  sources: {
    label: string;
    url: string;
    note: string;
  }[];
  ecommonyInterpretation: string;
  help: string[];
  relatedLinks: {
    label: string;
    href: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const problemPages: ProblemPage[] = [
  {
    slug: 'ga4-ecommerce-tracking-not-working',
    eyebrow: 'GA4 ecommerce tracking not working',
    title: 'GA4 ecommerce tracking not working? What breaks, why it matters and what to check first',
    description:
      'A practical guide for ecommerce teams when GA4 revenue, Shopify orders, checkout events or paid media conversions no longer look reliable.',
    serviceType: 'GA4 ecommerce tracking audit',
    summary:
      'GA4 ecommerce tracking usually fails because events, checkout changes, consent settings, tags or platform integrations stop passing clean revenue and conversion data. The commercial risk is not just inaccurate reporting; it is making paid media, CRO and trading decisions from data that no longer reflects how customers actually buy.',
    introTitle: 'When GA4 ecommerce data stops being trustworthy',
    intro:
      'GA4 ecommerce tracking problems are rarely caused by one obvious issue. Event names, checkout changes, consent behaviour, GTM tags, Shopify pixels, duplicate scripts and paid media conversion tags can all affect whether revenue and conversion data is reliable enough to use.',
    symptoms: [
      'GA4 revenue is materially different from Shopify, WooCommerce, Magento or payment platform revenue.',
      'Purchase, add_to_cart, begin_checkout or lead events appear missing, duplicated or inconsistent.',
      'Paid media platforms report conversions that do not match GA4 or ecommerce platform reporting.',
      'Tracking became unreliable after a redesign, checkout migration, theme update, app change or consent update.',
      'Reports show traffic and sales, but the journey between landing page, checkout and purchase is unclear.'
    ],
    whatBreaks: [
      'Ecommerce events are missing required parameters or use inconsistent event names.',
      'GTM tags fire on the wrong triggers, fire more than once, or fail on key checkout steps.',
      'Shopify customer events, pixels or checkout changes alter how purchase events are sent.',
      'Consent settings reduce or delay analytics signals without the reporting impact being understood.',
      'Multiple tags, apps or scripts send overlapping revenue and conversion events.'
    ],
    whatToCheckFirst: [
      'Compare platform orders and revenue against GA4 purchase events for the same period.',
      'Use GA4 DebugView and GTM preview mode to test key events from product page to purchase.',
      'Check whether event names and parameters match GA4 ecommerce recommendations.',
      'Review consent, cookie and tag firing behaviour across desktop, mobile and major browsers.',
      'Look for duplicate purchase events from apps, manual scripts, GTM and platform integrations.'
    ],
    evidenceIntro:
      'This page is based on practical ecommerce tracking diagnosis and official documentation covering GA4 ecommerce events, Google Tag Manager debugging, Shopify customer events and consent-related measurement behaviour.',
    sources: [
      {
        label: 'Google Analytics ecommerce events',
        url: 'https://developers.google.com/analytics/devguides/collection/ga4/ecommerce',
        note: 'Defines GA4 ecommerce event structure and recommended parameters.'
      },
      {
        label: 'GA4 recommended events',
        url: 'https://support.google.com/analytics/answer/9267735',
        note: 'Explains recommended GA4 event names and when they should be used.'
      },
      {
        label: 'Google Tag Manager preview and debug mode',
        url: 'https://support.google.com/tagmanager/answer/6107056',
        note: 'Useful for checking whether tags fire correctly during ecommerce journeys.'
      },
      {
        label: 'Shopify customer events',
        url: 'https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels',
        note: 'Explains Shopify pixel and customer event behaviour for tracking integrations.'
      },
      {
        label: 'Google Consent Mode',
        url: 'https://support.google.com/google-ads/answer/10000067',
        note: 'Explains how consent choices can affect Google measurement signals.'
      }
    ],
    ecommonyInterpretation:
      'The commercial issue is not simply whether an event fires. The real question is whether the data is reliable enough to make decisions about paid media, conversion rate optimisation, checkout performance, merchandising and revenue attribution.',
    help: [
      'Audit GA4 ecommerce events across product, basket, checkout and purchase journeys.',
      'Review GTM tags, triggers, data layer usage and duplicate conversion risks.',
      'Compare ecommerce platform revenue against analytics and paid media reporting.',
      'Identify whether consent, checkout changes, pixels or app scripts are affecting measurement.',
      'Turn the findings into a clear tracking repair plan.'
    ],
    relatedLinks: [
      {
        label: 'GA4 ecommerce tracking audit',
        href: '/services/ga4-ecommerce-tracking-audit/',
        description: 'A focused audit for missing events, duplicated conversions, checkout gaps and unreliable ecommerce reporting.'
      },
      {
        label: 'Ecommerce tracking cleanup',
        href: '/services/ecommerce-tracking-cleanup/',
        description: 'Clean up GA4, GTM, Shopify and paid media tracking so growth decisions use more reliable data.'
      },
      {
        label: 'GA4 tracking consultant London',
        href: '/ga4-tracking-consultant-london/',
        description: 'London and UK support for ecommerce teams that need stronger measurement confidence.'
      }
    ],
    faqs: [
      {
        question: 'Why does GA4 revenue not match Shopify revenue?',
        answer:
          'GA4 and Shopify can differ because of attribution windows, consent behaviour, refunds, tax, shipping, duplicate events, missing purchase events or checkout tracking changes. A small difference can be normal, but large unexplained gaps usually need investigation.'
      },
      {
        question: 'Can GA4 ecommerce tracking break after a Shopify checkout change?',
        answer:
          'Yes. Checkout migrations, customer events, pixels, apps and theme changes can all affect how ecommerce events are sent. Purchase events should be tested after any checkout or tracking change.'
      },
      {
        question: 'Should I rebuild GA4 tracking from scratch?',
        answer:
          'Not always. The first step is to diagnose which events, tags, parameters or integrations are unreliable. Some setups need a rebuild, but others only need targeted repair.'
      }
    ]
  },
    {
slug: 'shopify-ga4-revenue-not-matching',
eyebrow: 'Shopify GA4 revenue not matching',
title: 'Shopify and GA4 revenue not matching? Why it happens and what to check first',
description:
    'A practical guide for Shopify teams when GA4 revenue, purchase events or paid media conversion data does not match Shopify orders and sales reporting.',
serviceType: 'Shopify GA4 tracking audit',
summary:
    'Shopify and GA4 revenue rarely match perfectly, but large unexplained gaps usually point to tracking, consent, checkout, attribution or duplicate-event issues. The commercial risk is making paid media, CRO and trading decisions from reports that misrepresent orders, revenue and customer behaviour.',
introTitle: 'When Shopify and GA4 numbers stop agreeing',
intro:
    'Shopify is usually the commercial source of truth for orders and revenue, while GA4 is used to understand acquisition, behaviour and conversion journeys. Problems appear when GA4 purchase events, revenue values, attribution, consent settings or checkout tracking no longer reflect what Shopify records.',
symptoms: [
    'GA4 purchase revenue is materially lower or higher than Shopify revenue.',
    'GA4 purchase events do not match Shopify order volume for the same period.',
    'Google Ads, Meta, GA4 and Shopify all show different conversion numbers without a clear reason.',
    'Tracking changed after Shopify checkout updates, customer events, app changes or theme work.',
    'Reports make it hard to understand which channels, landing pages or journeys are actually driving sales.'
],
whatBreaks: [
    'Purchase events fail to fire consistently after checkout or customer event changes.',
    'Duplicate purchase events are sent by multiple apps, scripts, pixels or GTM tags.',
    'Revenue parameters are missing, malformed or sent with different tax, shipping or discount treatment.',
    'Consent settings alter when analytics and advertising tags can send data.',
    'GA4 attribution and Shopify order reporting are being compared as if they use the same logic.'
],
whatToCheckFirst: [
    'Compare Shopify order count and revenue against GA4 purchase events for the same date range.',
    'Separate expected reporting differences from unexplained tracking gaps.',
    'Test a purchase journey using GA4 DebugView and GTM preview mode where possible.',
    'Check whether Shopify customer events, pixels, apps or custom scripts are sending overlapping events.',
    'Review purchase event parameters including transaction_id, value, currency, tax, shipping and items.'
],
evidenceIntro:
    'This page is based on ecommerce measurement practice and official documentation covering GA4 ecommerce events, Shopify customer events, Google Tag Manager debugging and the reporting differences between analytics and commerce platforms.',
sources: [
    {
    label: 'Google Analytics ecommerce events',
    url: 'https://developers.google.com/analytics/devguides/collection/ga4/ecommerce',
    note: 'Defines GA4 purchase events, ecommerce parameters and item-level data requirements.'
    },
    {
    label: 'GA4 purchase event documentation',
    url: 'https://developers.google.com/analytics/devguides/collection/ga4/reference/events',
    note: 'Explains recommended GA4 event parameters including purchase and transaction data.'
    },
    {
    label: 'Shopify customer events and pixels',
    url: 'https://help.shopify.com/en/manual/promoting-marketing/pixels/custom-pixels',
    note: 'Explains how Shopify customer events and custom pixels are used for tracking.'
    },
    {
    label: 'Google Tag Manager preview and debug mode',
    url: 'https://support.google.com/tagmanager/answer/6107056',
    note: 'Useful for checking whether conversion and ecommerce tags fire correctly.'
    },
    {
    label: 'Google Analytics attribution',
    url: 'https://support.google.com/analytics/answer/10597962',
    note: 'Explains attribution concepts that can affect channel and conversion reporting.'
    }
],
ecommonyInterpretation:
    'The goal is not to force Shopify and GA4 to match exactly. The goal is to know which differences are expected, which are caused by broken tracking, and whether the remaining data is reliable enough to guide marketing and conversion decisions.',
help: [
    'Compare Shopify orders and revenue against GA4 purchase events.',
    'Identify duplicate, missing or malformed purchase events.',
    'Review Shopify customer events, app pixels, GTM tags and custom scripts.',
    'Check purchase parameters including transaction ID, value, currency and item data.',
    'Create a practical repair plan so ecommerce, marketing and reporting teams know which numbers to trust.'
],
relatedLinks: [
    {
    label: 'GA4 ecommerce tracking not working',
    href: '/ga4-ecommerce-tracking-not-working/',
    description: 'Understand what usually breaks when GA4 ecommerce tracking becomes unreliable.'
    },
    {
    label: 'GA4 ecommerce tracking audit',
    href: '/services/ga4-ecommerce-tracking-audit/',
    description: 'A focused audit for missing events, duplicated conversions, checkout gaps and unreliable ecommerce reporting.'
    },
    {
    label: 'Shopify consultant London',
    href: '/shopify-consultant-london/',
    description: 'Shopify support for stores that need clearer conversion, speed and tracking priorities.'
    }
],
faqs: [
    {
    question: 'Should Shopify and GA4 revenue match exactly?',
    answer:
        'No. Shopify and GA4 use different reporting logic, attribution, timing and filtering, so small differences are normal. Large unexplained differences usually need investigation.'
    },
    {
    question: 'Why is GA4 revenue lower than Shopify revenue?',
    answer:
        'GA4 revenue may be lower because purchase events are missing, consent limits tracking, tags fail during checkout, users block scripts, or GA4 is not receiving complete ecommerce parameters.'
    },
    {
    question: 'Why is GA4 revenue higher than Shopify revenue?',
    answer:
        'GA4 revenue may be higher if purchase events are duplicated, transaction IDs are missing, multiple apps or tags send the same purchase, or test and internal transactions are included.'
    }
]
    },
      {
    slug: 'shopify-site-slow',
    eyebrow: 'Shopify site slow',
    title: 'Shopify site slow? What usually causes it and what to check first',
    description:
      'A practical guide for Shopify teams when slow pages, heavy apps, scripts or theme code are affecting conversion, paid media efficiency and search visibility.',
    serviceType: 'Shopify speed optimisation',
    summary:
      'A slow Shopify site is usually caused by a combination of app scripts, theme weight, images, third-party tags, rendering delays and unused code. The commercial risk is not just a poor speed score; slower journeys can reduce conversion, increase paid media waste and weaken customer confidence before checkout.',
    introTitle: 'When Shopify speed starts affecting growth',
    intro:
      'Shopify speed problems often build up gradually. New apps, tracking scripts, theme edits, image-heavy sections, page builders and marketing tools can all add weight to the customer journey. The problem is rarely just one file or one score; it is usually the combined effect of many small performance drags.',
    symptoms: [
      'Mobile pages feel slow even when the desktop version appears acceptable.',
      'Product pages, collection pages or the homepage take too long to become usable.',
      'PageSpeed or Core Web Vitals scores are weak, especially on mobile.',
      'Conversion rate is lower than expected despite good traffic and product-market fit.',
      'Paid traffic is expensive because users leave before they properly engage with the store.'
    ],
    whatBreaks: [
      'Too many Shopify apps load scripts, widgets or tracking code across every page.',
      'Theme code includes unused JavaScript, CSS, sections or legacy customisations.',
      'Large images, videos or hero assets are not properly sized, compressed or prioritised.',
      'Third-party tags delay rendering, interaction or key ecommerce actions.',
      'Important mobile journeys are slowed by pop-ups, reviews widgets, bundles, subscriptions or personalisation tools.'
    ],
    whatToCheckFirst: [
      'Review mobile Core Web Vitals and compare homepage, collection, product and checkout-adjacent journeys.',
      'Check which apps and third-party scripts load on key commercial pages.',
      'Identify oversized images, render-blocking assets and heavy theme sections.',
      'Look for unused apps, duplicate tags and legacy code from previous experiments.',
      'Prioritise fixes by likely conversion impact, not just by technical score.'
    ],
    evidenceIntro:
      'This page is based on practical Shopify performance diagnosis and official documentation covering Core Web Vitals, Lighthouse, Shopify theme performance, image optimisation and the commercial relationship between speed, usability and conversion.',
    sources: [
      {
        label: 'Google Core Web Vitals',
        url: 'https://web.dev/articles/vitals',
        note: 'Explains the key user-experience metrics Google uses to assess loading, responsiveness and visual stability.'
      },
      {
        label: 'PageSpeed Insights',
        url: 'https://pagespeed.web.dev/',
        note: 'Provides lab and field performance diagnostics for web pages, including Core Web Vitals signals.'
      },
      {
        label: 'Lighthouse performance audits',
        url: 'https://developer.chrome.com/docs/lighthouse/performance/performance-scoring',
        note: 'Explains how Lighthouse performance scoring works and why individual audits affect the final score.'
      },
      {
        label: 'Shopify theme performance',
        url: 'https://shopify.dev/docs/storefronts/themes/best-practices/performance',
        note: 'Outlines Shopify theme performance best practices for faster storefront experiences.'
      },
      {
        label: 'Google image optimisation guidance',
        url: 'https://web.dev/learn/images',
        note: 'Explains how image size, format and loading behaviour affect page performance.'
      }
    ],
    ecommonyInterpretation:
      'The most useful Shopify speed work is not chasing a perfect score in isolation. It is identifying which performance issues slow real customer journeys, which ones affect conversion or paid traffic efficiency, and which fixes can be made without damaging merchandising, tracking or revenue-critical functionality.',
    help: [
      'Audit Shopify speed across homepage, collection, product and key conversion journeys.',
      'Identify heavy apps, scripts, theme sections, images and third-party tags.',
      'Separate cosmetic performance issues from commercially important bottlenecks.',
      'Create a prioritised speed improvement plan for developers or implementation teams.',
      'Protect tracking, merchandising and conversion functionality while reducing technical drag.'
    ],
    relatedLinks: [
      {
        label: 'Shopify speed optimisation',
        href: '/services/shopify-speed-optimisation/',
        description: 'Identify app, script and theme issues slowing Shopify performance and affecting conversion.'
      },
      {
        label: 'Shopify speed optimisation guide',
        href: '/guides/shopify-speed-optimisation/',
        description: 'Understand what actually slows Shopify stores down and what to investigate first.'
      },
      {
        label: 'Shopify consultant London',
        href: '/shopify-consultant-london/',
        description: 'Shopify support for stores that need clearer conversion, speed and tracking priorities.'
      }
    ],
    faqs: [
      {
        question: 'Why is my Shopify site slow?',
        answer:
          'Shopify sites usually become slow because of a combination of app scripts, theme code, large images, third-party tags, unused customisations and heavy marketing tools. The cause is often cumulative rather than one single issue.'
      },
      {
        question: 'Do Shopify apps slow down a store?',
        answer:
          'Yes, some Shopify apps can add scripts, widgets, tracking calls or front-end assets that affect page speed. Not every app is a problem, but app load should be reviewed on important commercial pages.'
      },
      {
        question: 'Should I remove apps to improve Shopify speed?',
        answer:
          'Sometimes, but not blindly. Apps should be reviewed by commercial value and performance cost. The aim is to remove, replace or limit the load of apps that slow the customer journey without supporting revenue.'
      }
    ]
  },
    {
    slug: 'shopify-conversion-rate-low',
    eyebrow: 'Shopify conversion rate low',
    title: 'Shopify conversion rate low? What usually causes it and what to check first',
    description:
      'A practical guide for Shopify teams when traffic is coming in but product pages, collection journeys or checkout paths are not converting enough customers.',
    serviceType: 'Shopify conversion rate optimisation',
    summary:
      'A low Shopify conversion rate is usually caused by a mix of unclear product value, weak trust signals, slow journeys, poor merchandising, checkout friction and unreliable tracking. The commercial risk is spending more on traffic while the store continues to lose customers who were already interested enough to visit.',
    introTitle: 'When Shopify traffic is not turning into enough sales',
    intro:
      'Shopify conversion problems are rarely caused by one isolated issue. Product pages, collection navigation, mobile usability, pricing clarity, delivery information, reviews, payment options, speed and tracking all shape whether a visitor becomes a customer. The first step is to identify where confidence, clarity or momentum is being lost.',
    symptoms: [
      'Traffic volume is reasonable, but sales or revenue are weaker than expected.',
      'Product pages receive visits but add-to-cart rate is low.',
      'Users browse collections but do not progress confidently to product pages or checkout.',
      'Paid traffic costs are rising because the store is not converting enough visitors.',
      'The team is considering a redesign without clear evidence of what is actually blocking sales.'
    ],
    whatBreaks: [
      'Product pages do not explain value, benefits, delivery, returns or trust clearly enough.',
      'Collection pages make it hard for users to compare, filter or choose products confidently.',
      'Mobile journeys are slowed or interrupted by apps, pop-ups, widgets or layout issues.',
      'Reviews, guarantees, payment options, shipping thresholds or credibility signals are weak or hidden.',
      'GA4, Shopify and paid media tracking do not clearly show where users hesitate or drop off.'
    ],
    whatToCheckFirst: [
      'Review product page clarity: proposition, imagery, benefits, price, delivery, returns and social proof.',
      'Check mobile collection-to-product journeys for friction, hesitation and unnecessary steps.',
      'Compare add-to-cart, checkout-start and purchase rates across devices and traffic sources.',
      'Look for trust gaps around reviews, payment methods, guarantees, customer support and delivery information.',
      'Confirm tracking is reliable enough to identify where the conversion journey is leaking.'
    ],
    evidenceIntro:
      'This page is based on practical Shopify CRO diagnosis and established guidance covering ecommerce user experience, Core Web Vitals, mobile usability, product-page trust, checkout behaviour and analytics-based conversion measurement.',
    sources: [
      {
        label: 'Google Core Web Vitals',
        url: 'https://web.dev/articles/vitals',
        note: 'Explains user-experience metrics that can affect loading, responsiveness and visual stability during conversion journeys.'
      },
      {
        label: 'Google Analytics ecommerce events',
        url: 'https://developers.google.com/analytics/devguides/collection/ga4/ecommerce',
        note: 'Defines ecommerce events used to measure product views, basket actions, checkout progress and purchases.'
      },
      {
        label: 'Baymard Institute ecommerce UX research',
        url: 'https://baymard.com/research',
        note: 'Provides ecommerce UX research covering product pages, checkout, mobile usability and customer decision-making.'
      },
      {
        label: 'Shopify conversion rate optimisation guidance',
        url: 'https://www.shopify.com/uk/blog/conversion-rate-optimization',
        note: 'Explains common Shopify CRO concepts and areas that influence ecommerce conversion.'
      },
      {
        label: 'Google mobile site speed guidance',
        url: 'https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/',
        note: 'Highlights the relationship between mobile speed, user behaviour and commercial performance.'
      }
    ],
    ecommonyInterpretation:
      'The most useful Shopify CRO work is not guessing which design change might help. It is diagnosing where buying confidence breaks down, which friction points affect the most valuable journeys, and which fixes are likely to improve revenue without creating unnecessary development or redesign work.',
    help: [
      'Audit product pages, collection journeys, mobile UX and checkout paths for conversion friction.',
      'Identify trust gaps around reviews, delivery, returns, payment options and proposition clarity.',
      'Review Shopify speed, apps and scripts where they affect the buying journey.',
      'Check GA4 and Shopify data to understand where visitors drop off.',
      'Create a prioritised CRO action plan based on likely commercial impact.'
    ],
    relatedLinks: [
      {
        label: 'Shopify CRO audit',
        href: '/services/shopify-cro-audit/',
        description: 'Understand where Shopify visitors drop off, hesitate or fail to progress.'
      },
      {
        label: 'Shopify conversion rate optimisation guide',
        href: '/guides/shopify-conversion-rate-optimisation/',
        description: 'Learn what to check before changing a Shopify theme or redesigning the store.'
      },
      {
        label: 'Shopify site slow',
        href: '/shopify-site-slow/',
        description: 'Understand how slow Shopify journeys can reduce conversion and paid media efficiency.'
      }
    ],
    faqs: [
      {
        question: 'Why is my Shopify conversion rate low?',
        answer:
          'A low Shopify conversion rate can be caused by unclear product value, weak trust signals, slow mobile journeys, poor merchandising, checkout friction, pricing concerns or unreliable tracking. The cause is usually a combination of issues rather than one single problem.'
      },
      {
        question: 'Should I redesign my Shopify store to improve conversion?',
        answer:
          'Not immediately. A redesign can help, but it should follow diagnosis. Many conversion problems can be improved by fixing product-page clarity, trust signals, speed, collection journeys, checkout friction and tracking before rebuilding the whole store.'
      },
      {
        question: 'What should I check first if Shopify traffic is not converting?',
        answer:
          'Start with product-page clarity, mobile usability, add-to-cart behaviour, checkout progression, trust signals and tracking accuracy. These areas usually reveal whether the problem is persuasion, usability, speed, offer clarity or measurement.'
      }
    ]
  }
];

export function getProblemPagePath(page: ProblemPage): string {
  return `/${page.slug}/`;
}