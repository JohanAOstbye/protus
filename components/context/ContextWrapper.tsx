'use client'
import { ClientProvider } from 'lib/server/trpc/provider'
import { courseType } from 'lib/types/sanity'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { CourseContextProvider } from './courseContext'
import { StateContextProvider } from './stateContext'
import { XapiContextProvider } from './XapiContext'

const ContextWrapper = ({
  children,
  session,
  courses,
}: {
  children: React.ReactNode
  session?: Session
  courses?: courseType[]
}) => {
  return (
    <SessionProvider session={session}>
      <CourseContextProvider courses={courses}>
        <ClientProvider>
          <XapiContextProvider>
            <StateContextProvider>{children}</StateContextProvider>
          </XapiContextProvider>
        </ClientProvider>
      </CourseContextProvider>
    </SessionProvider>
  )
}

export default ContextWrapper
