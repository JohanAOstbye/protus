'use client'

import { courseType } from 'lib/types'
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useCallback,
} from 'react'

type courseContextType = {
  course: courseType
  updateCourse: (course: courseType) => void
}

const CourseContext = createContext<courseContextType>(null)

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
  const course = useContext(CourseContext)
  if (course === undefined) {
    throw new Error('usecourse was used outside of its Provider')
  }
  return course
}
