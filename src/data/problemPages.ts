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
    }
];

export function getProblemPagePath(page: ProblemPage): string {
  return `/${page.slug}/`;
}