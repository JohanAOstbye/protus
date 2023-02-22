'use client'

import { courseType } from 'lib/types/sanity'
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
} from 'react'

type courseContextType =
  {
      course: courseType | undefined
      courses: courseType[]
      updateCourse: (course: courseType) => void
      updateCourses: (courses: courseType[]) => void
    }

const courseContextDefaultvalue: courseContextType = {
  course: undefined,
  courses: [],
  updateCourse: function (course: courseType): void {
    throw new Error('Function not implemented.')
  },
  updateCourses: function (courses: courseType[]): void {
    throw new Error('Function not implemented.')
  }
}

const CourseContext = createContext<courseContextType>(courseContextDefaultvalue)

interface courseContextProviderProps {
  children: React.ReactNode
  course?: courseType | undefined
  courses?: courseType[]
}
export const CourseContextProvider = (props: courseContextProviderProps) => {
  const [course, setCourse] = useState<courseType | undefined>(props.course ? props.course : undefined)
  const [courses, setCourses] = useState<courseType[]>(props.courses ? props.courses : [])

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
