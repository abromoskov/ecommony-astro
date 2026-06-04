import type { LocationPage } from './types';

export const ga4TrackingConsultantLondon: LocationPage = {
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
};