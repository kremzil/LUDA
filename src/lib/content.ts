import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './site';

export async function getPage(locale: Locale, key: string) {
  const pages = await getCollection('pages');
  const page = pages.find(
    (entry) => entry.data.locale === locale && entry.data.translationKey === key,
  );
  if (!page) throw new Error(`Missing ${locale} page content for "${key}"`);
  return page;
}

export async function getPublishedInsights(locale: Locale) {
  const insights = await getCollection('insights', ({ data }) =>
    data.locale === locale && data.status === 'published',
  );
  return insights.sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime(),
  );
}

export function findTranslation(
  entries: CollectionEntry<'insights'>[],
  entry: CollectionEntry<'insights'>,
) {
  return entries.find(
    (candidate) =>
      candidate.data.translationKey === entry.data.translationKey &&
      candidate.data.locale !== entry.data.locale,
  );
}
