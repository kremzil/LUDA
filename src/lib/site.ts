export const site = {
  name: 'LUDA.AI',
  legalName: 'LUDA.AI s. r. o.',
  tagline: 'Digital Solutions for Legal',
  email: 'hello@luda.ai',
  primaryDomain: 'https://ludasolutions.ai',
  secondaryDomain: 'https://ludasolutions.eu',
};

export type Locale = 'en' | 'sk';

export const labels = {
  en: {
    services: 'Services',
    about: 'About',
    insights: 'Insights',
    contact: 'Contact',
    discuss: 'Discuss your project',
    language: 'SK',
    languageHref: '/sk/',
    readArticle: 'Read article',
    menu: 'Menu',
  },
  sk: {
    services: 'Služby',
    about: 'O nás',
    insights: 'Články',
    contact: 'Kontakt',
    discuss: 'Prediskutujme váš projekt',
    language: 'EN',
    languageHref: '/',
    readArticle: 'Čítať článok',
    menu: 'Menu',
  },
} satisfies Record<Locale, Record<string, string>>;

export function localPath(locale: Locale, path = '') {
  const clean = path.replace(/^\/+|\/+$/g, '');
  if (locale === 'en') return clean ? `/${clean}/` : '/';
  return clean ? `/sk/${clean}/` : '/sk/';
}
