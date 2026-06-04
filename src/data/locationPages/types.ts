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