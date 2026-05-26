export type LocationPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  serviceType: string;
  intro: string;
  symptoms: string[];
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

export const locationPages: LocationPage[] = [
{
  slug: 'ecommerce-consultant-london',
  eyebrow: 'Ecommerce consultant London',
 title: 'Ecommerce Consultant London | Revenue Leakage Fix',
  description:
    'London ecommerce consultant for Shopify, Magento and WordPress brands. Find speed, SEO, tracking and conversion issues costing revenue — with a clear fix plan.',
  serviceType: 'Ecommerce consulting',
  intro:
    'Getting traffic but not enough revenue? Ecommony helps London and UK ecommerce brands find where growth is being held back across speed, SEO, tracking, product journeys, conversion friction and channel mix. The goal is simple: show the evidence, identify the revenue leakage, and prioritise what to fix first.',
  symptoms: [
    'Traffic is coming in, but sales, conversion rate or profit are not improving clearly.',
    'Paid media, SEO and analytics reports do not explain what is actually limiting growth.',
    'The site feels slow, difficult to optimise, or dependent on too many apps, scripts or workarounds.',
    'You need a practical fix plan based on commercial impact, not another broad audit with generic recommendations.'
  ],
  help: [
    'Evidence-led diagnosis across speed, SEO, CRO, tracking, product pages and customer journeys.',
    'Competitor-benchmarked context so you can see where the site is falling behind.',
    'Prioritised fixes based on likely revenue impact and implementation effort.',
    'Clear next actions for Shopify, Magento, WordPress, GA4, GTM, agencies, developers or internal teams.'
  ],
  relatedLinks: [
    {
      label: 'Ecommerce conversion audit',
      href: '/services/ecommerce-conversion-audit/',
      description: 'Find where trust, product discovery, offer clarity, speed or tracking issues are limiting revenue.'
    },
    {
      label: 'Performance marketing optimisation London',
      href: '/performance-marketing-optimisation-london/',
      description: 'Find where paid search, paid social, landing pages, CRM or channel mix may be leaking revenue.'
    },
    {
      label: 'Contact Ecommony',
      href: '/contact/',
      description: 'Discuss a project, audit or implementation support.'
    }
  ],
  faqs: [
    {
      question: 'What does an ecommerce consultant actually review?',
      answer:
        'Ecommony reviews the commercial system behind ecommerce performance: site speed, SEO, product journeys, conversion friction, tracking, analytics, paid traffic readiness, CRM capture and channel mix. The aim is to find what is limiting revenue and what should be fixed first.'
    },
    {
      question: 'Do you only work with London businesses?',
      answer:
        'No. Ecommony is London-based but supports ecommerce businesses across the UK. London is useful for search and local relevance, but the work itself is focused on practical ecommerce growth wherever the business is based.'
    },
    {
      question: 'What platforms do you support?',
      answer:
        'Ecommony works across Shopify, Magento and WordPress, with support for speed, conversion, SEO, GA4, GTM, tracking and commercial prioritisation.'
    },
    {
      question: 'Can you help after the audit?',
      answer:
        'Yes. Ecommony can provide diagnosis only, implementation support, or ongoing ecommerce growth consulting depending on the project and the level of help required.'
    }
  ]
},
{
  slug: 'performance-marketing-optimisation-london',
  eyebrow: 'Performance marketing optimisation London',
  title: 'Performance Marketing Optimisation London | Fix Revenue Leakage',
  description:
    'Paid media not scaling profitably? Find tracking gaps, weak landing pages, poor CRM capture and channel-mix issues before increasing ecommerce ad spend.',
  serviceType: 'Performance marketing optimisation',
  intro:
    'If paid search or paid social is getting more expensive but revenue is not scaling profitably, the problem may not be the campaign setup alone. Ecommony looks at the wider ecommerce performance system: landing pages, product pages, mobile speed, tracking, CRM capture and channel mix — so you know what to fix before increasing spend.',
  symptoms: [
    'Paid search or paid social spend is rising, but profitable revenue is not improving clearly.',
    'ROAS looks acceptable in-platform, but MER, profit, cashflow or repeat purchase do not feel strong enough.',
    'GA4, Shopify and ad-platform numbers do not agree, making budget decisions harder to trust.',
    'Agencies are optimising campaigns, but landing pages, product pages, CRM and channel mix still feel unresolved.'
  ],
  help: [
    'Performance mix review across paid search, paid social, SEO, CRM, affiliate, marketplace and retention signals.',
    'Landing page and product page diagnosis to identify where paid traffic loses purchase intent.',
    'Tracking and measurement review so channel decisions are not based on unreliable data.',
    'A clear action plan showing what to fix before increasing media spend.'
  ],
  relatedLinks: [
    {
      label: 'GA4 tracking consultant London',
      href: '/ga4-tracking-consultant-london/',
      description: 'Review whether tracking gaps are distorting channel performance and budget decisions.'
    },
    {
      label: 'Ecommerce conversion audit',
      href: '/services/ecommerce-conversion-audit/',
      description: 'Find where landing pages, product journeys, trust signals and checkout friction are limiting revenue.'
    },
    {
      label: 'Ecommerce consultant London',
      href: '/ecommerce-consultant-london/',
      description: 'Get broader ecommerce growth diagnosis across CRO, SEO, speed, tracking and platform issues.'
    }
  ],
  faqs: [
    {
      question: 'Is performance marketing optimisation the same as hiring a paid media agency?',
      answer:
        'No. A paid media agency usually focuses on campaign management. Ecommony looks at the wider ecommerce performance system: landing pages, product pages, tracking, SEO, CRM, offer clarity and channel mix. The aim is to find why paid traffic is not turning into profitable growth.'
    },
    {
      question: 'Can you work alongside our existing paid media agency?',
      answer:
        'Yes. Ecommony can provide an independent diagnosis of the site, tracking and channel mix so your existing agency has clearer commercial priorities and stronger landing page evidence to work with.'
    },
    {
      question: 'What channels are included in the review?',
      answer:
        'The review can cover paid search, paid social, SEO, email and CRM, affiliate or partnership signals, organic social, marketplace presence and retention opportunities. The focus is on visible evidence, commercial impact and practical next steps.'
    },
    {
      question: 'Do you need access to ad accounts or GA4?',
      answer:
        'A basic review can start from visible site, tracking and journey evidence. Access to GA4, Google Ads, Meta Ads, Shopify, Klaviyo or other platforms allows a deeper review of actual performance, attribution and channel profitability.'
    },
    {
      question: 'When should an ecommerce brand get this reviewed?',
      answer:
        'It is useful when paid media costs are rising, ROAS is becoming harder to trust, conversion rate is flat, tracking is unclear, or the brand needs to know whether to increase spend, fix the site, improve CRM or rebalance the channel mix.'
    }
  ]
},
{
  slug: 'shopify-consultant-london',
  eyebrow: 'Shopify consultant London',
  title: 'Shopify Consultant London | Fix Speed, CRO and Tracking Gaps',
  description:
    'Shopify consultant for stores losing revenue through slow themes, app bloat, weak product pages, checkout friction or unreliable GA4 tracking.',
  serviceType: 'Shopify consulting',
  intro:
    'If Shopify traffic is growing but revenue is not, the issue is often hidden in the theme, apps, scripts, product pages, tracking or checkout journey. Ecommony helps Shopify brands find the leaks and prioritise the fixes most likely to improve speed, conversion and measurement confidence.',
  symptoms: [
    'Shopify conversion rate is flat despite traffic, campaigns or merchandising work.',
    'Apps, scripts or theme changes have made the store slower over time.',
    'Product pages, collection pages or checkout journeys are not building enough confidence to buy.',
    'GA4, Shopify and ad-platform numbers do not clearly agree.'
  ],
  help: [
    'Shopify CRO review across product pages, collections, trust signals, offer clarity and conversion paths.',
    'Shopify speed review across apps, scripts, theme weight, images and Core Web Vitals issues.',
    'Tracking review across GA4, GTM, Shopify Web Pixels and paid media events.',
    'Prioritised Shopify fixes based on likely commercial impact, not just technical tidiness.'
  ],
  relatedLinks: [
    {
      label: 'Shopify CRO audit',
      href: '/services/shopify-cro-audit/',
      description: 'Understand where Shopify visitors drop off, hesitate or fail to progress.'
    },
    {
      label: 'Shopify speed optimisation',
      href: '/services/shopify-speed-optimisation/',
      description: 'Identify app, script and theme issues slowing Shopify performance.'
    },
    {
      label: 'Shopify CRO guide',
      href: '/guides/shopify-conversion-rate-optimisation/',
      description: 'Learn what to fix before changing a Shopify theme.'
    }
  ],
  faqs: [
    {
      question: 'Can you work with an existing Shopify developer or agency?',
      answer:
        'Yes. Ecommony can provide the diagnosis, prioritisation and commercial brief so an existing developer or agency can implement the right changes.'
    },
    {
      question: 'Is this only for Shopify Plus?',
      answer:
        'No. The work is relevant for Shopify and Shopify Plus stores where conversion, speed, tracking or growth priorities need clearer diagnosis.'
    },
    {
      question: 'Can you improve Shopify speed?',
      answer:
        'Yes. Ecommony reviews app load, scripts, theme weight, images, templates and Core Web Vitals issues to identify what is slowing the store down and which fixes are most likely to improve conversion.'
    },
    {
      question: 'Can you help if GA4 revenue does not match Shopify?',
      answer:
        'Yes. Shopify tracking issues can come from checkout changes, consent behaviour, duplicated tags, missing ecommerce events, Web Pixels configuration or ad-platform attribution gaps. Ecommony can help diagnose where the mismatch is likely coming from.'
    }
  ]
},
{
  slug: 'technical-seo-consultant-london',
  eyebrow: 'Technical SEO consultant London',
  title: 'Technical SEO Consultant London | Ecommerce SEO Fix Plan',
  description:
    'Technical SEO consultant for ecommerce sites. Find crawl, indexation, schema, metadata, speed and template issues blocking qualified organic growth.',
  serviceType: 'Technical SEO consulting',
  intro:
    'Technical SEO only matters when it improves crawlability, visibility and commercial performance. Ecommony helps ecommerce and high-consideration websites find the technical SEO issues blocking qualified traffic — from metadata and schema gaps to indexation, internal linking, templates, page quality and speed.',
  symptoms: [
    'Organic visibility is weak outside branded searches.',
    'Important product, service, category or guide pages are not ranking strongly enough.',
    'Technical SEO issues exist, but the commercial priorities are unclear.',
    'Templates, plugins, duplicate URLs, site speed or platform limitations may be holding search performance back.'
  ],
  help: [
    'Technical SEO review across crawlability, indexation, metadata, structured data and internal linking.',
    'Commercial prioritisation of SEO fixes based on likely impact, not just audit volume.',
    'Support for ecommerce platforms, category pages, product pages, content hubs and high-consideration journeys.',
    'Clear recommendations for developers, agencies or internal teams.'
  ],
  relatedLinks: [
    {
      label: 'Technical SEO for ecommerce',
      href: '/guides/technical-seo-for-ecommerce/',
      description: 'Understand the technical SEO issues that block qualified organic growth.'
    },
    {
      label: 'WordPress technical SEO audit',
      href: '/services/wordpress-technical-seo-audit/',
      description: 'Review crawlability, metadata, plugin bloat, structure and speed foundations.'
    },
    {
      label: 'Ecommerce speed optimisation guide',
      href: '/guides/ecommerce-speed-optimisation/',
      description: 'Understand how mobile speed, JavaScript and templates affect ecommerce performance.'
    }
  ],
  faqs: [
    {
      question: 'What technical SEO issues matter most for ecommerce?',
      answer:
        'The most important issues are usually the ones affecting commercial pages: crawlability, indexation, metadata, internal linking, structured data, duplicate or thin URLs, slow templates and category or product pages that do not match search intent.'
    },
    {
      question: 'Do you only do technical SEO for WordPress?',
      answer:
        'No. Ecommony supports technical SEO across WordPress, Shopify, Magento and other ecommerce or high-consideration websites.'
    },
    {
      question: 'Is technical SEO separate from speed?',
      answer:
        'They overlap. Speed, templates, rendering, internal linking and technical structure can all affect both search visibility and conversion.'
    },
    {
      question: 'Will this include content recommendations?',
      answer:
        'Yes where relevant. The focus is technical SEO, but page quality, search intent, internal linking and content structure are often part of the diagnosis.'
    }
  ]
},
{
  slug: 'ga4-tracking-consultant-london',
  eyebrow: 'GA4 tracking consultant London',
  title: 'GA4 Tracking Consultant London | Fix Ecommerce Revenue Data',
  description:
    'GA4 revenue not matching Shopify, Magento or ad platforms? Find missing events, duplicate conversions, checkout gaps and attribution problems.',
  serviceType: 'GA4 and GTM tracking consulting',
  intro:
    'If GA4, Shopify and ad-platform revenue do not agree, growth decisions become guesswork. Ecommony helps ecommerce teams find missing events, duplicated conversions, checkout gaps, consent issues and attribution problems before unreliable data distorts budget, reporting and optimisation decisions.',
  symptoms: [
    'GA4 revenue, Shopify revenue and paid media conversions do not reconcile clearly.',
    'Checkout, lead or ecommerce events appear missing, duplicated or unreliable.',
    'Tracking changed after a redesign, theme update, checkout migration, consent change or Shopify checkout update.',
    'The team cannot confidently judge which campaigns, landing pages or site changes are actually working.'
  ],
  help: [
    'GA4 ecommerce event review across key journeys and conversion points.',
    'GTM and tag audit for duplicate, missing or misfiring events.',
    'Tracking confidence review across Shopify, Magento, paid media and reporting tools.',
    'Clear repair plan for measurement, attribution and decision-making confidence.'
  ],
  relatedLinks: [
    {
      label: 'GA4 ecommerce tracking audit',
      href: '/services/ga4-ecommerce-tracking-audit/',
      description: 'Find missing events, duplicated conversions and checkout tracking gaps.'
    },
    {
      label: 'Shopify GA4 revenue not matching',
      href: '/shopify-ga4-revenue-not-matching/',
      description: 'Understand why Shopify, GA4 and ad-platform revenue may not reconcile.'
    },
    {
      label: 'GA4 ecommerce tracking guide',
      href: '/guides/ga4-ecommerce-tracking/',
      description: 'Understand why GA4 ecommerce reports break and what to check first.'
    }
  ],
  faqs: [
    {
      question: 'Can you audit GA4 without rebuilding the whole setup?',
      answer:
        'Yes. The first step is usually to diagnose which events, tags or reporting assumptions are unreliable before deciding what needs rebuilding.'
    },
    {
      question: 'Do you work with GTM as well as GA4?',
      answer:
        'Yes. Ecommony reviews GA4, GTM, platform events, paid media conversion tags and tracking consistency across the ecommerce journey.'
    },
    {
      question: 'Can you help after a Shopify checkout or theme change?',
      answer:
        'Yes. Tracking issues often appear after theme changes, checkout migrations, app changes, Shopify Web Pixels changes or consent updates. These can be reviewed and prioritised.'
    },
    {
      question: 'Why does GA4 revenue not match Shopify or Meta Ads?',
      answer:
        'Revenue can differ because of missing purchase events, consent behaviour, attribution windows, duplicate tags, checkout restrictions, refunds, currency handling or ad-platform modelling. The goal is to identify which gaps are material enough to affect decisions.'
    }
  ]
}
];

export function getLocationPagePath(page: LocationPage): string {
  return `/${page.slug}/`;
}