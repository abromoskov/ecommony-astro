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
    title: 'Ecommerce consultant in London for Shopify, Magento and WordPress growth',
    description:
      'Find where your ecommerce site is leaking revenue. London-based consultant for Shopify, Magento, CRO, speed, SEO and tracking fixes that improve performance.',
    serviceType: 'Ecommerce consulting',
    intro:
      'If your ecommerce site is getting traffic but revenue is not moving, the problem is usually not one thing. It is often a mix of slow templates, weak product journeys, tracking gaps, SEO leakage and conversion friction. Ecommony helps London and UK ecommerce brands find the issues that are quietly costing revenue — then prioritise what to fix first.',
    symptoms: [
      'Traffic is coming in but conversion is weaker than expected.',
      'The site feels slow, technically messy or hard to improve without breaking something.',
      'SEO, paid media and analytics reports do not clearly explain what is limiting growth.',
      'The team needs a practical action plan rather than another generic audit.'
    ],
    help: [
      'Competitor-benchmarked ecommerce diagnosis across speed, SEO, CRO and tracking.',
      'Prioritised recommendations based on commercial impact and implementation effort.',
      'Support across Shopify, Magento, WordPress, GA4, GTM and technical SEO.',
      'Clear next steps for internal teams, agencies or hands-on implementation.'
    ],
    relatedLinks: [
      {
        label: 'Ecommerce conversion audit',
        href: '/services/ecommerce-conversion-audit/',
        description: 'Find where trust, product discovery, offer clarity, speed or tracking issues are limiting revenue.'
      },
      {
        label: 'Ecommerce speed optimisation guide',
        href: '/guides/ecommerce-speed-optimisation/',
        description: 'Understand the speed issues that affect conversion, UX and search visibility.'
      },
      {
        label: 'Contact Ecommony',
        href: '/contact/',
        description: 'Discuss a project, audit or implementation support.'
      }
    ],
    faqs: [
      {
        question: 'Do you only work with London businesses?',
        answer:
          'No. Ecommony is London-based but supports ecommerce businesses across the UK. The focus is practical ecommerce growth: finding the speed, SEO, tracking and conversion issues that are costing revenue, then prioritising the fixes that matter most.'
      },
      {
        question: 'What platforms do you support?',
        answer:
          'Ecommony works across Shopify, Magento and WordPress, with support for speed, conversion, SEO, GA4, GTM and tracking issues.'
      },
      {
        question: 'Can you help after the audit?',
        answer:
          'Yes. Ecommony can provide diagnosis only, implementation support, or ongoing technical growth consulting depending on the project.'
      }
    ]
  },
  {
    slug: 'shopify-consultant-london',
    eyebrow: 'Shopify consultant London',
    title: 'Shopify consultant in London for CRO, speed and ecommerce growth',
    description:
      'Fix the Shopify issues holding back revenue: slow themes, app bloat, weak product pages, checkout friction and unreliable GA4 tracking.',
    serviceType: 'Shopify consulting',
    intro:
      'If your Shopify store is slow, hard to track or converting below where it should, the problem is often hidden in the theme, apps, templates, product pages or checkout journey. Ecommony helps Shopify brands find the issues costing revenue and prioritise the fixes with the strongest commercial impact.',
    symptoms: [
      'Shopify conversion rate is flat despite traffic and paid media activity.',
      'Apps, scripts or theme changes have made the store slower over time.',
      'Product and collection pages do not build enough confidence to buy.',
      'GA4, Shopify and ad platform numbers do not clearly agree.'
    ],
    help: [
      'Shopify CRO review across product pages, collection journeys, trust signals and offer clarity.',
      'Shopify speed review across apps, scripts, templates and Core Web Vitals issues.',
      'Tracking review across GA4, GTM, Shopify and paid media events.',
      'Prioritised fixes based on likely commercial impact.'
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
      }
    ]
  },
  {
    slug: 'technical-seo-consultant-london',
    eyebrow: 'Technical SEO consultant London',
    title: 'Technical SEO consultant in London for ecommerce and high-consideration websites',
    description:
      'Find the technical SEO issues limiting ecommerce growth: crawl waste, weak metadata, schema gaps, slow pages, duplicate content and indexation problems.',
    serviceType: 'Technical SEO consulting',
    intro:
      'If your ecommerce SEO has stalled, the issue may not be content volume. It may be crawl waste, weak templates, poor metadata, schema gaps, duplicate pages, indexation problems or speed issues that stop Google from understanding the site properly. Ecommony finds the technical issues limiting organic growth and turns them into a prioritised fix plan.',
    symptoms: [
      'Organic visibility is weaker than expected outside branded searches.',
      'Important product, service or guide pages are not ranking strongly enough.',
      'Technical SEO issues are suspected but not clearly prioritised.',
      'Site speed, templates, plugins or platform limitations may be affecting search performance.'
    ],
    help: [
      'Technical SEO review across crawlability, indexation, metadata, structured data and internal linking.',
      'Commercial prioritisation of SEO fixes based on likely impact.',
      'Support for ecommerce platforms, category pages, product pages and content hubs.',
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
        label: 'Ecommerce guides',
        href: '/guides/',
        description: 'Browse practical ecommerce guides across SEO, speed, conversion and tracking.'
      }
    ],
    faqs: [
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
          'Yes where relevant. The focus is technical SEO, but page quality, search intent and content structure are often part of the diagnosis.'
      }
    ]
  },
  {
    slug: 'ga4-tracking-consultant-london',
    eyebrow: 'GA4 tracking consultant London',
    title: 'GA4 tracking consultant in London for ecommerce measurement confidence',
    description:
      'GA4 revenue not matching Shopify, Magento or your ad platforms? Find broken ecommerce tracking, missing events and attribution gaps before they distort decisions.',
    serviceType: 'GA4 and GTM tracking consulting',
    intro:
      'If GA4 revenue does not match Shopify, Magento or your ad platforms, the problem can quickly distort budget, reporting and growth decisions. Ecommony helps ecommerce teams find missing events, duplicated conversions, checkout gaps, consent issues and attribution problems before unreliable data leads to the wrong priorities.',
    symptoms: [
      'GA4 revenue, Shopify revenue and paid media conversions do not reconcile clearly.',
      'Checkout, lead or ecommerce events appear missing, duplicated or unreliable.',
      'Tracking changed after a redesign, theme update, checkout migration or consent change.',
      'The team cannot confidently judge which campaigns or site changes are working.'
    ],
    help: [
      'GA4 ecommerce event review across key journeys and conversion points.',
      'GTM and tag audit for duplicate, missing or misfiring events.',
      'Tracking confidence review across Shopify, paid media and reporting tools.',
      'Clear repair plan for measurement, attribution and decision-making confidence.'
    ],
    relatedLinks: [
      {
        label: 'GA4 ecommerce tracking audit',
        href: '/services/ga4-ecommerce-tracking-audit/',
        description: 'Find missing events, duplicated conversions and checkout tracking gaps.'
      },
      {
        label: 'Ecommerce tracking cleanup',
        href: '/services/ecommerce-tracking-cleanup/',
        description: 'Clean up GA4, GTM, Shopify and paid media tracking problems.'
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
          'Yes. Tracking issues often appear after theme changes, checkout migrations, app changes or consent updates, and those can be reviewed and prioritised.'
      }
    ]
  }
];

export function getLocationPagePath(page: LocationPage): string {
  return `/${page.slug}/`;
}