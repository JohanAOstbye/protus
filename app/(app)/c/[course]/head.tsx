import * as demo from 'lib/sanity/demo.data'
import { getCourse, getSettings } from 'lib/sanity/sanity.client'

export default async function SlugHead({
  params,
}: {
  params: { course: string }
}) {
  const [{ title: t = demo.title }, course] = await Promise.all([
    getSettings(),
    getCourse(params.course),
  ])

  if (!course) return <>loading</>

  const { title } = course

  return (
    <>
      <title>{title ? `${title} | ${t}` : t}</title>
    </>
  )
}
