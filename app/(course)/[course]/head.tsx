
import * as demo from 'lib/sanity/demo.data'
import { getCourse, getSettings } from 'lib/sanity/sanity.client'
import { urlForImage } from 'lib/sanity/sanity.image'

export default async function SlugHead({
  params,
}: {
  params: { course: string }
}) {
  const [{ title = demo.title }, course] = await Promise.all([
    getSettings(),
    getCourse(params.course),
  ])

  if (!course) return <>loading</>

  const { name, page } = course

  return (
    <>
      <title>{name ? `${name} | ${title}` : title}</title>

      {page && page.coverImage?.asset?._ref && (
        <meta
          property="og:image"
          content={urlForImage(page.coverImage)
            .width(1200)
            .height(627)
            .fit('crop')
            .url()}
        />
      )}
    </>
  )
}