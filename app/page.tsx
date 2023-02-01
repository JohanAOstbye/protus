import ChapterLayout from 'components/pages/chapter/ChapterPage'
import { getSettings } from 'lib/sanity.client'
// import { PreviewSuspense } from 'next-sanity/preview'
import { previewData } from 'next/headers'
import PreviewIndexPage from 'old/PreviewIndexPage'

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, courses] = await Promise.all([getSettings(), ,])

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

  return <ChapterLayout  ><div></div></ChapterLayout>
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
