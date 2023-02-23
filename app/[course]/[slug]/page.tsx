import Loading from 'components/elements/Loading'
import ChapterPage from 'components/pages/chapter/ChapterPage'
import ChapterLayout from 'components/pages/chapter/ChapterPage'
import PreviewChapterPage from 'components/pages/chapter/PreviewChapterPage'
import {
  getChapter,
  getInitialChapter,
  getSettings,
} from 'lib/sanity/sanity.client'
// import { PreviewSuspense } from 'next-sanity/preview';
import { previewData } from 'next/headers'
import { Suspense } from 'react'

export default async function SlugRoute({
  params,
}: {
  params: { slug: string; course: string }
}) {
  // Start fetching settings early, so it runs in parallel with the chapter query
  const settings = getSettings()

  // if (previewData()) {
  //   const token = previewData().token || null
  //   const data = getInitialChapter(params, token)
  //   return (
  //     <PreviewSuspense
  //       fallback={
  //         <ChapterLayout
  //           loading
  //           preview
  //         ><div></div></ChapterLayout>
  //       }
  //     >
  //       <PreviewChapterPage token={token} chapter={params} />
  //     </PreviewSuspense>
  //   )
  // }

  const data = getChapter(params.slug, params.course)

  return <ChapterPage data={await data} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
