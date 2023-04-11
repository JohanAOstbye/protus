import ChapterPage from 'components/pages/chapter/ChapterPage'
import { getChapter } from 'lib/sanity/sanity.client'

export default async function SlugRoute({
  params,
}: {
  params: { slug: string; course: string }
}) {
  const chapter = getChapter(params.slug, params.course)

  return <ChapterPage chapter={await chapter} course={params.course} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
