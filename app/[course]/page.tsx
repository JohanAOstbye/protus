import ChapterPage from 'components/chapter/ChapterPage'
import { useCourse } from 'components/context/course'
import PreviewChapterPage from 'components/PreviewChapterPage'
import { PreviewSuspense } from 'components/PreviewSuspense'
import { getCourse, getInitialCourse, getSettings } from 'lib/sanity.client'
import { previewData } from 'next/headers'
import { notFound } from 'next/navigation'

export default async function SlugRoute({
  params,
}: {
  params: { course: string }
}) {
  // Start fetching settings early, so it runs in parallel with the chapter query
  const settings = getSettings()

  if (previewData()) {
    const token = previewData().token || null
    const data = await getInitialCourse(params.course, token)

    return (
      <PreviewSuspense
        fallback={
          <ChapterPage
            loading
            preview
            data={await data}
            settings={await settings}
          />
        }
      >
        <PreviewChapterPage token={token} chapter={params} />
      </PreviewSuspense>
    )
  }

  const course = await getCourse(params.course)

  console.log(await course)

  return <ChapterPage data={await course.page} settings={await settings} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
