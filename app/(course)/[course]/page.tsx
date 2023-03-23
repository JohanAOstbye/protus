import Loading from 'components/elements/Loading'
import ChapterPage from 'components/pages/chapter/ChapterPage'
import PreviewChapterPage from 'components/pages/chapter/PreviewChapterPage'

import {
  getCourse,
  getInitialCourse,
  getSettings,
} from 'lib/sanity/sanity.client'
import { Suspense } from 'react'
// import { PreviewSuspense } from 'next-sanity/preview'
// import { previewData } from 'next/headers'
// import { notFound } from 'next/navigation'

export default async function SlugRoute({
  params,
}: {
  params: { course: string }
}) {
  const course = await getCourse(params.course)

  console.log(course.page)

  return <ChapterPage data={course.page} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1

// THIS WAS PREVIEW
/*
  // Start fetching settings early, so it runs in parallel with the chapter query
  const settings = getSettings()

  if (previewData()) {
    const token = previewData().token || null
    const data = await getInitialCourse(params.course, token)

    return (
      // <PreviewSuspense
      //   fallback={
      //     <ChapterPage
      //       loading
      //       preview
      //       data={await data}
      //       settings={await settings}
      //     />
      //   }
      // >
        <PreviewChapterPage token={token} chapter={params} />
      // </PreviewSuspense>
    )
  }
  */
