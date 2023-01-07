import BlogMeta from 'components/BlogMeta'
import * as demo from 'lib/demo.data'
import { getChapterBySlug, getSettings } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'

export default async function SlugHead({
  params,
}: {
  params: { slug: string }
}) {
  const [{ title = demo.title }, chapter] = await Promise.all([
    getSettings(),
    getChapterBySlug(params.slug),
  ])
  return (
    <>
      <title>{chapter.title ? `${chapter.title} | ${title}` : title}</title>
      <BlogMeta />
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
