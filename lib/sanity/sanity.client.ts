import 'server-only'

import {
  apiVersion,
  dataset,
  projectId,
  readToken,
  useCdn,
} from 'lib/sanity/sanity.api'
import {
  type Chapter,
  type Settings,
  type Course,
  settingsQuery,
  chapterBySlugAndCourseQuery,
  coursesQuery,
  CoursePageQuery,
  courseQuery,
} from 'lib/sanity/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn, token: readToken })
  : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getCourse(course: string): Promise<Course> {
  if (client) {
    return (await client.fetch(courseQuery, { course })) || ({} as any)
  }
  return {} as any
}

export async function getInitialCourse(
  course: string,
  token?: string | null
): Promise<Course> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(courseQuery, { course })
  }
  return {} as any
}

export async function getChapter(
  slug: string,
  course: string
): Promise<Chapter> {
  if (client) {
    let chapter = client.fetch(chapterBySlugAndCourseQuery, {
      slug,
      course,
    })

    return chapter || ({} as any)
  }
  return {} as any
}

export async function getInitialChapter(
  chapter: { slug: string; course: string },
  token?: string | null
): Promise<Chapter> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    return await client.fetch(chapterBySlugAndCourseQuery, chapter)
  }
  return {} as any
}

export async function getCourses(
  token?: string | null
): Promise<Course[]> {
  if (projectId) {
    const client = createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: token || undefined,
    })
    let courses = await client.fetch(coursesQuery)

    return courses
  }
  return []
}
