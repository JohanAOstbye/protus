import { statementType } from 'lib/types/x-api'
import React, { createContext, useContext, useMemo } from 'react'

type XapiContextType = {
  recordStatment: (statement: statementType) => void
}

const XapiContext = createContext<XapiContextType>({
  recordStatment: (statement: statementType) => console.log('function missing'),
})

interface SessionContextProviderProps {
  children: React.ReactNode
}
export const SessionContextProvider = ({
  children,
}: SessionContextProviderProps) => {
  const recordStatment = (statement: statementType) => {
    //TODO: implement trpc
    console.log(statement)
  }

  const memoedXapi = useMemo(
    () => ({
      recordStatment,
    }),
    [recordStatment]
  )

  return (
    // the Provider gives access to the context to its children
    <XapiContext.Provider value={memoedXapi}>{children}</XapiContext.Provider>
  )
}

export const useXapi = () => {
  const Xapi = useContext(XapiContext)
  if (Xapi === undefined) {
    throw new Error('useXapi was used outside of its Provider')
  }
  return Xapi
}
