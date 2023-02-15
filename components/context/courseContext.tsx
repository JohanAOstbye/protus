'use client'

import { courseType } from 'lib/types/sanity'
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
} from 'react'

type courseContextType =
  | {
      course: courseType
      courses: courseType[]
      updateCourse: (course: courseType) => void
      updateCourses: (courses: courseType[]) => void
    }
  | undefined

const CourseContext = createContext<courseContextType>(undefined)

interface courseContextProviderProps {
  children: React.ReactNode
  course: courseType
  courses: courseType[]
}
export const CourseContextProvider = (props: courseContextProviderProps) => {
  const [course, setCourse] = useState<courseType>(props.course)
  const [courses, setCourses] = useState<courseType[]>(props.courses)

  const updateCourse = (course: courseType) => setCourse(course)
  const updateCourses = (courses: courseType[]) => setCourses(courses)

  const memoedCourse = useMemo(
    () => ({
      course,
      updateCourse,
      courses,
      updateCourses,
    }),
    [course, updateCourse, courses, updateCourses]
  )

  return (
    // the Provider gives access to the context to its children
    <CourseContext.Provider value={memoedCourse}>
      {props.children}
    </CourseContext.Provider>
  )
}

export const useCourse = () => {
  const courseInfo = useContext(CourseContext)
  if (courseInfo === undefined) {
    throw new Error('usecourse was used outside of its Provider')
  }
  return courseInfo
}
