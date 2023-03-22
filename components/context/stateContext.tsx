'use client'
import { ActivitiesRouterInput } from 'lib/server/trpc/api/router/activities'
import { trpc } from 'lib/server/trpc/provider'
import { groupType } from 'lib/types/course-api/group'
import { learnerType } from 'lib/types/course-api/learner'
import { courseType } from 'lib/types/sanity'
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from 'react'

type StateContextType = {
  //   course: courseType | undefined
  //   courses: courseType[]
  //   updateCourse: (course: courseType) => void
  //   updateCourses: (courses: courseType[]) => void
}

const StateContextDefaultvalue: StateContextType = {
  course: undefined,
  courses: [],
  updateCourse: function (course: courseType): void {
    throw new Error('Function not implemented.')
  },
  updateCourses: function (courses: courseType[]): void {
    throw new Error('Function not implemented.')
  },
}

const StateContext = createContext<StateContextType>(StateContextDefaultvalue)

interface StateContextProviderProps {
  children: React.ReactNode
  course?: courseType | undefined
  courses?: courseType[]
}
export const StateContextProvider = (props: StateContextProviderProps) => {
  const [learners, setLearners] = useState<undefined | learnerType[]>()
  const [groups, setGroups] = useState<undefined | groupType[]>()
  const prank = trpc.activities.get.useQuery()

  useEffect(() => {
    if (prank.isSuccess) {
      setLearners(prank.data.learners)
      setGroups(prank.data.groups)
    }
    return () => {
      setLearners(undefined)
      setGroups(undefined)
    }
  }, [])

  const memoedState = useMemo(() => ({ learners, groups }), [prank])

  return (
    // the Provider gives access to the context to its children
    <StateContext.Provider value={memoedState}>
      {props.children}
    </StateContext.Provider>
  )
}

export const useActivities = () => {
  const courseInfo = useContext(StateContext)
  if (courseInfo === undefined) {
    throw new Error('usecourse was used outside of its Provider')
  }
  return courseInfo
}
