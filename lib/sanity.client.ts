import 'server-only'

import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  type Chapter,
  type Settings,
  indexQuery,
  chapterAndMoreStoriesQuery,
  chapterBySlugQuery,
  chapterSlugsQuery,
  settingsQuery,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getAllChapters(): Promise<Chapter[]> {
  if (client) {
    return (await client.fetch(indexQuery)) || []
  }
  return []
}

export async function getAllChaptersSlugs(): Promise<Pick<Chapter, 'slug'>[]> {
  if (client) {
    const slugs = (await client.fetch<string[]>(chapterSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getChapterBySlug(slug: string): Promise<Chapter> {
  if (client) {
    return (await client.fetch(chapterBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getChapterAndMoreStories(
  slug: string,
  token?: string | null
): Promise<{ chapter: Chapter; moreChapters: Chapter[] }> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(chapterAndMoreStoriesQuery, { slug })
  }
  return { chapter: null, moreChapters: [] }
}
