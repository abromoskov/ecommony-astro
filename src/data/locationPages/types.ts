export type LocationPageLink = {
  label: string;
  href: string;
  description: string;
};

export type LocationPageFaq = {
  question: string;
  answer: string;
};

export type LocationPageHero = {
  summary: string;
  bullets?: string[];
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
};

export type LocationPageSection = {
  heading: string;
  body?: string;
  bullets?: string[];
};

export type LocationPageProblemGroup = {
  heading: string;
  body: string;
  symptoms: string[];
  checks: string[];
};

export type LocationPageProcessStep = {
  title: string;
  description: string;
};

export type LocationPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  serviceType: string;

  /*
   * Existing lightweight fields.
   * These keep the current pages working while richer pages are introduced.
   */
  intro: string;
  symptoms: string[];
  help: string[];

  /*
   * Optional richer landing-page fields.
   * Use these for higher-intent lead-generation pages.
   */
  h1?: string;
  hero?: LocationPageHero;
  quickAnswer?: LocationPageSection;
  problemGroups?: LocationPageProblemGroup[];
  commercialImpact?: LocationPageSection;
  process?: {
    heading: string;
    steps: LocationPageProcessStep[];
  };
  proof?: LocationPageSection;
  finalCta?: {
    heading: string;
    body: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta?: {
      label: string;
      href: string;
    };
  };

  relatedLinks: LocationPageLink[];
  faqs: LocationPageFaq[];
};