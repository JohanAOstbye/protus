import * as demo from 'lib/demo.data'
import { getChapter, getSettings } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'

export default async function SlugHead({
  params,
}: {
  params: { slug: string; course: string }
}) {
  const [{ title = demo.title }, chapter] = await Promise.all([
    getSettings(),
    getChapter(params.slug, params.course),
  ])

  if (!chapter) return <>loading</>

  return (
    <>
      <title>{chapter.title ? `${chapter.title} | ${title}` : title}</title>
      {chapter.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(chapter.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </>
  )
}
