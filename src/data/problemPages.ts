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
  }
];

export function getProblemPagePath(page: ProblemPage): string {
  return `/${page.slug}/`;
}