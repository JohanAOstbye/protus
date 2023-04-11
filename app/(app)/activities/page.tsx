import { ActivitiesPage } from 'components/pages/activity/ActivitiesPage'
import { prisma } from 'lib/server/db'
import { filterType } from 'lib/types/componentTypes'

type test = 'Exercise' | 'Challenge'

export default async function IndexRoute({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const courses = (
    await prisma.course.findMany({
      select: { name: true, chapters: { select: { name: true } } },
    })
  ).map((course) => ({
    ...course,
    chapters: course.chapters.map((chapter) => chapter.name),
  }))

  const t: filterType['type'] = []
  if (searchParams.type) {
    if (
      typeof searchParams.type == 'string' &&
      (searchParams.type == 'Exercise' || searchParams.type == 'Challenge')
    )
      t.push(searchParams.type)
    else if (Array.isArray(searchParams.type)) {
      searchParams.type.forEach((type) => {
        if (type == 'Exercise' || type == 'Challenge') t.push(type)
      })
    }
  }
  const c: filterType['courses'] = []

  if (searchParams.course) {
    if (typeof searchParams.course == 'string') {
      let course = JSON.parse(searchParams.course)

      if (course.name) {
        let chapters: string[] = Array.isArray(course.chapters)
          ? course.chapters.filter(
              (chapter: any) => typeof chapter === 'string'
            )
          : []
        c.push({ name: course.name, chapters })
      }
    } else if (Array.isArray(searchParams.course)) {
      searchParams.course.forEach((test) => {
        let course = JSON.parse(test)

        if (course.name) {
          let chapters: string[] = Array.isArray(course.chapters)
            ? course.chapters.filter(
                (chapter: any) => typeof chapter === 'string'
              )
            : []
          c.push({ name: course.name, chapters })
        }
      })
    }
  }

  const initialfilter: filterType = {
    type: t,
    courses: c,
  }

  return (
    <ActivitiesPage
      initialfilter={initialfilter}
      options={{ courses: courses, type: ['Exercise', 'Challenge'] }}
    />
  )
}
