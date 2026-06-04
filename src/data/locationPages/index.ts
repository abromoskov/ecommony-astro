import type { LocationPage } from './types';

import { ecommerceConsultantLondon } from './ecommerce-consultant-london';
import { performanceMarketingOptimisationLondon } from './performance-marketing-optimisation-london';
import { shopifyConsultantLondon } from './shopify-consultant-london';
import { technicalSeoConsultantLondon } from './technical-seo-consultant-london';
import { ga4TrackingConsultantLondon } from './ga4-tracking-consultant-london';

export type { LocationPage } from './types';

export const locationPages: LocationPage[] = [
  ecommerceConsultantLondon,
  performanceMarketingOptimisationLondon,
  shopifyConsultantLondon,
  technicalSeoConsultantLondon,
  ga4TrackingConsultantLondon,
];

export function getLocationPagePath(page: LocationPage): string {
  return `/${page.slug}/`;
}