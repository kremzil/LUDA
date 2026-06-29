import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ludasolutions.ai',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'sk'],
    routing: {
      prefixDefaultLocale: false,
      fallbackType: 'redirect',
    },
  },
  image: { responsiveStyles: true },
});
