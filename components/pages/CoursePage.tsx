'use client'

import ChapterList from 'components/blocks/ChapterList'
import { Content } from 'components/blocks/Content'
import { UpdateCourse } from 'components/context/Update'
import ChapterCard from 'components/elements/ChapterCard'
import { useXapi } from 'components/context/XapiContext'
import { courseType } from 'lib/types/sanity'
import { getDeviceCategory } from 'lib/types/x-api/functions'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import style from 'styles/pages/_coursePage.module.scss'
import { useTimedStatement } from 'components/hooks/useTimedStatement.hook'

const CoursePage = ({
  preview = false,
  loading,
  course,
}: {
  preview?: boolean
  loading?: boolean
  course: courseType
}) => {
  const { data: session, status } = useSession({ required: true })
  const { recordStatment } = useXapi()
  useTimedStatement((duration) => {
    if (status === 'authenticated' && session && session.user) {
      recordStatment({
        object: {
          objectType: 'Activity',
          id: `https://protus.no/c/${course.slug}`,
          definition: {
            name: {
              en: course.title || 'Untitled course: ' + course._id,
            },
          },
        },
        actor: {
          objectType: 'Agent',
          name: session.user.name === null ? undefined : session.user.name,
          mbox: `mailto:${session.user.email}`,
        },
        verb: {
          id: 'http://adlnet.gov/expapi/verbs/viewed',
          display: {
            en: 'viewed',
          },
        },
        result: {
          duration: duration,
        },
        context: {
          platform: `${getDeviceCategory(
            window.innerWidth,
            window.innerHeight
          )} ${window.navigator.userAgent}`,
        },
      })
    }
  })

  return (
    <div className={style.page}>
      <div>{JSON.stringify(course)}</div>
      <UpdateCourse course={course} />
      {course ? (
        <>
          <h1>{course.title}</h1>
          <Content value={course.content || []} />
          <ChapterList
            list={
              course.chapters?.map((chapter) => {
                return { ...chapter, url: `/c/${course.slug}/${chapter.slug}` }
              }) || []
            }
          />
        </>
      ) : (
        <h1>Course not found</h1>
      )}
    </div>
  )
}

export default CoursePage
