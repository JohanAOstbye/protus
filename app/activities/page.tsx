import ChapterLayout from 'components/pages/chapter/ChapterPage'
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
      options={{ courses: courses, activitytype: ['Exercise', 'Challenge'] }}
    />
  )
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1

// --- PREVIEW ----
// if (previewData()) {
//   const token = previewData().token || null

//   return (
//     <PreviewSuspense
//       fallback={<ChapterLayout loading preview children={''} />}
//     >
//       <PreviewIndexPage token={token} />
//     </PreviewSuspense>
//   )
// }
