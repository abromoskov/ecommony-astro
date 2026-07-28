import type { IntentPage } from './intentPages';

export const ecommerceRevenueLeakageAuditPage = {
  section: 'services',
  slug: 'ecommerce-funnel-leakage-audit',
  eyebrow: 'Ecommerce Revenue Leakage Audit',
  title: 'Ecommerce Conversion Audit | Find Where Your Revenue Is Leaking',
  description:
    'Find where ecommerce revenue is being lost between traffic, landing pages, product pages, checkout and repeat purchase. Identify the fixes most likely to improve conversion and profitable growth.',
  metaDescription:
    'Traffic but not enough sales? Find where ecommerce revenue is leaking across landing pages, product journeys, checkout, tracking and retention. Ecommony shows what to fix first.',
  intentSummary:
    'You are already paying for traffic, but revenue is not growing as efficiently as it should. The problem is often not getting more visitors. It is what happens after they arrive.',
  symptoms: [
    'Website traffic is increasing but sales are not following.',
    'Paid advertising costs are rising while profitability is falling.',
    'Conversion rate is lower than competitors.',
    'Customers view products but do not add to basket.',
    'Basket abandonment is higher than expected.',
    'Marketing teams cannot agree on what is limiting growth.',
    'Analytics shows numbers but not clear answers.',
    'The business keeps making website changes without knowing which problems actually matter.'
  ],
  commercialImpact: [
    'More traffic creates more wasted opportunity when the buying journey is leaking revenue.',
    'Acquisition becomes increasingly expensive while underlying conversion problems remain.',
    'Fixing conversion improves the value of all future traffic.',
    'Small conversion improvements can create significant additional revenue without increasing advertising spend.'
  ],
  whatToFixFirst: [
    'Review whether the right visitors are arriving.',
    'Check whether landing pages match customer intent.',
    'Identify where product journeys fail to give customers enough confidence to buy.',
    'Review trust, reassurance, checkout, tracking and retention.',
    'Prioritise the highest-value constraint instead of trying to fix everything at once.'
  ],
  howEcommonyHelps: [
    'Reviews the customer journey from first click to purchase.',
    'Identifies the biggest revenue leakage points.',
    'Adds competitor context showing missed opportunities.',
    'Finds tracking issues that may be hiding performance problems.',
    'Creates a prioritised roadmap showing what to fix first.'
  ],
  contentSections: [
    {
      title: 'What is usually happening',
      intro: [
        'You are already paying for traffic.',
        'You have campaigns running. Customers are visiting your website. Your team is producing content. Agencies are reporting activity.',
        'But revenue is not growing as efficiently as it should.',
        'The problem is often not getting more visitors.',
        'It is what happens after they arrive.',
        'Customers drop out because:'
      ],
      items: [
        'Landing pages do not match what they expected.',
        'Product pages do not answer buying questions.',
        'Trust signals are missing.',
        'Mobile experiences create friction.',
        'Checkout creates unnecessary hesitation.',
        'Tracking does not clearly show where revenue is being lost.'
      ],
      outro: [
        'Every ecommerce business has points where potential revenue disappears.',
        'The challenge is finding the leaks that matter most.'
      ]
    },
    {
      title: 'Common symptoms',
      items: [
        'Website traffic is increasing but sales are not following.',
        'Paid advertising costs are rising while profitability is falling.',
        'Conversion rate is lower than competitors.',
        'Customers view products but do not add to basket.',
        'Basket abandonment is higher than expected.',
        'Marketing teams cannot agree on what is limiting growth.',
        'Analytics shows numbers but not clear answers.',
        'The business keeps making website changes without knowing which problems actually matter.'
      ]
    },
    {
      title: 'Why it matters commercially',
      intro: [
        'Most businesses try to solve ecommerce growth problems by buying more traffic.',
        'But if the buying journey is leaking revenue, more traffic simply creates more wasted opportunity.',
        'For example:',
        'A store generating £100,000 per month with a 2% conversion rate:',
        'Improving conversion to 2.5% creates:'
      ],
      items: [
        '25% more orders from the same traffic.',
        'More revenue without increasing advertising spend.',
        'Better return from every future visitor.'
      ],
      outro: [
        'Unlike increasing acquisition spend, fixing conversion improves the value of all future traffic.'
      ]
    },
    {
      title: 'What to fix first',
      intro: [
        'The biggest mistake is trying to fix everything at once.',
        'Ecommony identifies the highest-value constraint first.',
        'We review:'
      ],
      items: [
        'Traffic quality — are the right visitors arriving?',
        'Landing pages — does the page match customer intent?',
        'Product journeys — are customers given enough confidence to buy?',
        'Trust and reassurance — are concerns about price, quality, delivery or risk being addressed?',
        'Checkout — where are customers abandoning?',
        'Tracking — can you confidently see what is working?',
        'Retention — are opportunities being lost after the first purchase?'
      ]
    },
    {
      title: 'What you receive',
      intro: [
        'A prioritised revenue recovery plan.',
        'You receive:'
      ],
      items: [
        'A review of the customer journey from first click to purchase.',
        'Identification of the biggest revenue leakage points.',
        'Competitor context showing missed opportunities.',
        'Tracking issues that may be hiding performance problems.',
        'A prioritised roadmap showing what to fix first.'
      ],
      outro: [
        'Not another generic CRO checklist.',
        'A clear answer to:'
      ],
      emphasis: [
        'What is costing us revenue?',
        'Why is it happening?',
        'What should we fix first?'
      ]
    },
    {
      title: 'How Ecommony helps',
      intro: [
        'Ecommony combines ecommerce experience across:'
      ],
      items: [
        'Conversion optimisation',
        'SEO',
        'Paid media',
        'Analytics',
        'Customer journeys',
        'Technology',
        'Trading performance'
      ],
      outro: [
        'The goal is not simply improving a conversion rate.',
        'The goal is helping the business understand where growth is being lost and where investment will create the biggest return.'
      ]
    }
  ],
  faqs: [
    {
      question: 'What is ecommerce revenue leakage?',
      answer:
        'Revenue leakage is where potential customers are lost between discovering your business and completing a purchase.'
    },
    {
      question: 'How do I know if my ecommerce funnel is leaking?',
      answer:
        'Common signs include traffic growth without matching revenue growth, expensive acquisition, weak conversion rates and customers abandoning before purchase.'
    },
    {
      question: 'Is this just a CRO audit?',
      answer:
        'No. CRO is part of the picture. The review also considers traffic quality, tracking, acquisition, product journeys, checkout and retention.'
    },
    {
      question: 'Should we spend more on advertising first?',
      answer:
        'Not necessarily. If the buying journey is inefficient, increasing traffic can increase wasted spend.'
    },
    {
      question: 'How much revenue could we recover?',
      answer:
        'The opportunity depends on your traffic, conversion rate and customer journey. Even small improvements can create significant additional revenue because they improve every future visitor.'
    }
  ]
} satisfies IntentPage;
