import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localizedPage = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.json' }),
  schema: z.object({
    locale: z.enum(['en', 'sk']),
    translationKey: z.string(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    hero: z.object({
      title: z.string(),
      intro: z.string(),
      primaryCta: z.string(),
      secondaryCta: z.string(),
    }).optional(),
    title: z.string().optional(),
    intro: z.string().optional(),
    sections: z.array(z.object({
      title: z.string(),
      body: z.string(),
    })).optional(),
  }),
});

const insights = defineCollection({
  loader: glob({ base: './src/content/insights', pattern: '**/*.md' }),
  schema: z.object({
    locale: z.enum(['en', 'sk']),
    translationKey: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    status: z.enum(['draft', 'published']).default('draft'),
  }),
});

export const collections = { pages: localizedPage, insights };
