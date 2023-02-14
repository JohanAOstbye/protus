'use client'

import { courseType } from 'lib/types/sanity'
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from 'react'

type courseContextType =
  | {
      course: courseType
      updateCourse: (course: courseType) => void
    }
  | undefined

const CourseContext = createContext<courseContextType>(undefined)

interface courseContextProviderProps {
  children: React.ReactNode
  course: courseType
}
export const CourseContextProvider = (props: courseContextProviderProps) => {
  const [course, setCourse] = useState<courseType>(props.course)

  const updateCourse = (course: courseType) => setCourse(course)

  const memoedCourse = useMemo(
    () => ({
      course,
      updateCourse,
    }),
    [course, updateCourse]
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
