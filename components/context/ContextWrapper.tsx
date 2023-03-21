'use client'
import { Loader } from 'components/Loader'
import { ClientProvider } from 'lib/server/trpc/provider'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { CourseContextProvider } from './courseContext'

const ContextWrapper = ({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session
}) => {
  return (
    //TODO: remove the loader pls
    <SessionProvider session={session}>
      <CourseContextProvider>
        <ClientProvider>
          <Loader />
          {children}
        </ClientProvider>
      </CourseContextProvider>
    </SessionProvider>
  )
}

export default ContextWrapper
