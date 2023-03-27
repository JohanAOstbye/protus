'use client'
import { useCourse } from 'components/context/courseContext'
import { isDeepEqual } from 'lib/deepCompare'
import { courseType } from 'lib/types/sanity'
import { useEffect } from 'react'
import style from 'styles/pages/_coursePage.module.scss'
import ChapterPage from './chapter/ChapterPage'

const CoursePage = ({
  preview = false,
  loading,
  data,
}: {
  preview?: boolean
  loading?: boolean
  data: courseType
}) => {
  const { course, updateCourse } = useCourse()

  useEffect(() => {
    if (data && !isDeepEqual(data, course)) {
      updateCourse(data)
    }
  }, [data])

  return (
    <div className={style.page}>
      {course && (
        <>
          <h1>{course.name}</h1>
          <ChapterPage data={course.page} />
        </>
      )}
    </div>
  )
}

export default CoursePage
