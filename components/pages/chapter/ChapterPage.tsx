'use client'

import AlertBanner from 'components/elements/AlertBanner'
import { chapterType } from 'lib/types/sanity'
import { Content } from 'components/blocks/Content'
import { UpdateChapter } from 'components/context/Update'
import { useXapi } from 'components/context/XapiContext'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { getDeviceCategory } from 'lib/types/x-api/functions'

const ChapterPage = ({
  preview = false,
  loading,
  chapter,
  course,
}: {
  preview?: boolean
  loading?: boolean
  chapter: chapterType
  course: string
}) => {
  // const { data: session, status } = useSession({ required: true })
  // const { recordStatment } = useXapi()

  // useEffect(() => {
  //   if (status === 'authenticated' && session && session.user) {
  //     recordStatment({
  //       object: {
  //         objectType: 'Activity',
  //         id: `https://protus.no/c/${course}/${chapter.slug}`,
  //         definition: {
  //           name: {
  //             en: chapter.title || 'Untitled chapter: ' + chapter._id,
  //           },
  //         },
  //       },
  //       actor: {
  //         objectType: 'Agent',
  //         name: session.user.name === null ? undefined : session.user.name,
  //         mbox: `mailto:${session.user.email}`,
  //       },
  //       verb: {
  //         id: 'http://adlnet.gov/expapi/verbs/viewed',
  //         display: {
  //           en: 'viewed',
  //         },
  //       },
  //       context: {
  //         platform: `${getDeviceCategory(
  //           window.innerWidth,
  //           window.innerHeight
  //         )} ${window.navigator.userAgent}`,
  //       },
  //     })
  //   }
  // }, [status, course])
  return (
    <article>
      {preview && <AlertBanner loading={loading} />}

      {chapter && chapter.content ? (
        <>
          <UpdateChapter chapter={chapter} course={course} />
          <Content value={chapter.content} />
        </>
      ) : (
        <div>content missing</div>
      )}
    </article>
  )
}

export default ChapterPage
