import ChapterLayout from 'components/pages/chapter/ChapterPage'
import { getChapter, getCourse, getSettings } from 'lib/sanity/sanity.client'
// import { PreviewSuspense } from 'next-sanity/preview'
import { previewData } from 'next/headers'

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, courses] = await Promise.all([getSettings(), ,])

  return <div>test</div> //data ={getChapter?}
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
