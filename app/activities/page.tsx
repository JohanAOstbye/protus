import ActivitiesPage from 'components/pages/ActivitiesPage'
import { getChapter, getCourse, getSettings } from 'lib/sanity/sanity.client'
import { prisma } from 'lib/server/db'
import { previewData } from 'next/headers'

export default async function IndexRoute() {
  const courses = (
    await prisma.course.findMany({
      select: { name: true, chapters: { select: { name: true } } },
    })
  ).map((course) => ({
    ...course,
    chapters: course.chapters.map((chapter) => chapter.name),
  }))

  return (
    <ActivitiesPage
      options={{ courses: courses, type: ['Exercise', 'Challenge'] }}
    />
  )
}
