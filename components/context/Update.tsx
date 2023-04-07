'use client'
import { chapterType, courseType } from 'lib/types/sanity'
import React, { useEffect } from 'react'
import { useCourse } from './courseContext'

export const UpdateCourse = ({ course }: { course: courseType }) => {
  const { course: c, updateCourse } = useCourse()

  useEffect(() => {
    if (c?.title != course.title) updateCourse(course)
    return () => {
      updateCourse(undefined)
    }
  }, [course])
  return <></>
}

export const UpdateChapter = ({
  chapter,
  course,
}: {
  chapter: chapterType
  course: string
}) => {
  const { courses, updateCourse } = useCourse()

  useEffect(() => {
    const newCourse = courses.find((c) => c.title == course)

    updateCourse(newCourse)
    return () => {
      updateCourse(undefined)
    }
  }, [chapter, courses])
  return <></>
}
