'use client'
import { useCourse } from 'components/context/courseContext'
import { courseType } from 'lib/types/sanity'
import { useEffect } from 'react'
import style from 'styles/pages/_coursePage.module.scss'

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
    console.log('changed', data, course, data._id == course?._id)
    updateCourse(data)
    if (!course || (data && !(data._id == course._id))) {
      console.log('update course')
    }
    return () => {
      updateCourse(undefined)
    }
  }, [data])

  return (
    <div className={style.page}>
      {course ? (
        <>
          <h1>{course.name}</h1>
        </>
      ) : (
        <h1>Course not found</h1>
      )}

      {JSON.stringify(course)}
    </div>
  )
}

export default CoursePage
