import CoursePage from 'components/pages/CoursePage'

import { getCourse } from 'lib/sanity/sanity.client'

export default async function SlugRoute({
  params,
}: {
  params: { course: string }
}) {
  const course = await getCourse(params.course)

  return <CoursePage course={course} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
