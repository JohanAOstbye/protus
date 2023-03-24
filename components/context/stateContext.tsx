'use client'
import { trpc } from 'lib/server/trpc/provider'
import { groupType } from 'lib/types/course-api/group'
import { learnerType } from 'lib/types/course-api/learner'
import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  useEffect,
} from 'react'

type StateContextType = {
  learners: learnerType[]
  groups: groupType[]
}

const StateContextDefaultvalue: StateContextType = {
  learners: [],
  groups: [],
}

const StateContext = createContext<StateContextType>(StateContextDefaultvalue)

interface StateContextProviderProps {
  children: React.ReactNode
  learners?: learnerType[]
  groups?: groupType[]
}
export const StateContextProvider = (props: StateContextProviderProps) => {
  const [learners, setLearners] = useState<learnerType[]>(props.learners || [])
  const [groups, setGroups] = useState<groupType[]>(props.groups || [])
  const prank = trpc.state.get.useQuery()

  useEffect(() => {
    if (prank.isSuccess) {
      setLearners(prank.data.learners)
      setGroups(prank.data.groups)
    }
    return () => {
      setLearners([])
      setGroups([])
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