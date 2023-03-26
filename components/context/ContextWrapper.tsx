'use client'
import { ClientProvider } from 'lib/server/trpc/provider'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { CourseContextProvider } from './courseContext'
import { StateContextProvider } from './stateContext'

const ContextWrapper = ({
  children,
  session,
}: {
  children: React.ReactNode
  session?: Session
}) => {
  return (
    <SessionProvider session={session}>
      <CourseContextProvider>
        <ClientProvider>
          <StateContextProvider>{children}</StateContextProvider>
        </ClientProvider>
      </CourseContextProvider>
    </SessionProvider>
  )
}

export default ContextWrapper
