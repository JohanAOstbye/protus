import { agentType } from 'lib/types/x-api/actor'
import { authorityType } from 'lib/types/x-api/authority'
import { statement, statementType } from 'lib/types/x-api/statement'
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useSession } from 'next-auth/react'
import { sendStatement, sendStatements } from 'lib/types/x-api/functions'

type XapiContextType = {
  recordStatment: (statement: statementType) => void
}

const XapiContext = createContext<XapiContextType>({
  recordStatment: (statement: statementType) => console.log('function missing'),
})

interface XapiContextProviderProps {
  children: React.ReactNode
}
export const XapiContextProvider = ({ children }: XapiContextProviderProps) => {
  const { data: session, status } = useSession()
  const [agent, setAgent] = useState<agentType | undefined>(undefined)
  const [authority, setAuthority] = useState<authorityType | undefined>(
    undefined
  )
  const [relatedStatements, setRelatedStatements] = useState([])
  const recordStatment = async (statement: statementType) => {
    if (!authority) return console.log('authority is missing')
    return sendStatement(statement, authority)
  }
  const recordStatments = async (statements: statementType[]) => {
    statements.map((statement) => {
      return { ...statement, authority: authority }
    })

    const response = await fetch('/xAPI/statements', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ statements: statements }),
    })

    return response.json()
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
              homePage: 'https://protus.vercel.app',
              name: 'protus-client',
            },
          },
        ],
      })
      fetch(
        '/xAPI/statements?' +
          new URLSearchParams({
            related_agents: 'true',
            agent: JSON.stringify(agent),
          }).toString(),
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ).then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setRelatedStatements(data.statements)
          })
        }
      })
    }
    return () => {
      setRelatedStatements([])
      setAuthority(undefined)
    }
  }, [agent])

  const memoedXapi = useMemo(
    () => ({
      recordStatment,
      recordStatments,
      relatedStatements,
    }),
    [recordStatment, recordStatments, relatedStatements]
  )

  return (
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
