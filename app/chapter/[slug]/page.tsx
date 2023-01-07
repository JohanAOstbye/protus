import ChapterPage from 'components/chapter/ChapterPage'
import PreviewChapterPage from 'components/PreviewChapterPage'
import { PreviewSuspense } from 'components/PreviewSuspense'
import {
  getAllChaptersSlugs,
  getChapterAndMoreStories,
  getSettings,
} from 'lib/sanity.client'
import { previewData } from 'next/headers'

export async function generateStaticParams() {
  return await getAllChaptersSlugs()
}

export default async function SlugRoute({
  params,
}: {
  params: { slug: string }
}) {
  // Start fetching settings early, so it runs in parallel with the chapter query
  const settings = getSettings()

  if (previewData()) {
    const token = previewData().token || null
    const data = getChapterAndMoreStories(params.slug, token)
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
        <PreviewChapterPage token={token} slug={params.slug} />
      </PreviewSuspense>
    )
  }

  const data = getChapterAndMoreStories(params.slug)
  return <ChapterPage data={await data} settings={await settings} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
