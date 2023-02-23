import { agentType } from 'lib/types/x-api/actor'
import { authorityType } from 'lib/types/x-api/authority'
import { statementType } from 'lib/types/x-api/statement'
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useSession } from 'next-auth/react'

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
  const { data: session, status } = useSession()
  const [agent, setAgent] = useState<agentType | undefined>(undefined)
  const [authority, setAuthority] = useState<authorityType | undefined>(
    undefined
  )
  const [relatedStatements, setRelatedStatements] = useState([])
  const recordStatment = (statement: statementType) => {
    statement.authority = authority

    const response = fetch('/api/xapi/statements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(statement),
    })
  }

  useEffect(() => {
    if (status === 'authenticated' && session && session.user) {
      setAgent({
        objectType: 'Agent',
        name: session.user.name === null ? undefined : session.user.name,
        mbox: `mailto:${session.user.email}`,
      })
    }

    return () => {
      setAgent(undefined)
      setAuthority(undefined)
    }
  }, [session, status])

  useEffect(() => {
    if (agent) {
      setAuthority({
        objectType: 'Group',
        name: 'LMS',
        member: [
          agent,
          {
            objectType: 'Agent',
            account: {
              homePage: process.env.NEXTAUTH_URL
                ? process.env.NEXTAUTH_URL
                : 'www.protus.no',
              name: 'protus-client',
            },
          },
        ],
      })
      //add related statements
    }
    return () => {
      setAuthority(undefined)
    }
  }, [agent])

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
