'use client'
import { ClientProvider } from 'lib/server/trpc/provider'
import { courseType } from 'lib/types/sanity'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { CourseContextProvider } from './courseContext'
import { StateContextProvider } from './stateContext'

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
          <StateContextProvider>{children}</StateContextProvider>
        </ClientProvider>
      </CourseContextProvider>
    </SessionProvider>
  )
}

export default ContextWrapper
