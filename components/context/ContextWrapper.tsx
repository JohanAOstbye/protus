'use client'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CourseContextProvider } from './courseContext'

const ContextWrapper = ({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session
}) => {
  const queryClient = new QueryClient()
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <CourseContextProvider>{children}</CourseContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default ContextWrapper
