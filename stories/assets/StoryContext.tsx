import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CourseContextProvider } from 'components/context/courseContext'
import { courseMock, coursesMock } from './mockdata/course'
import { UserRole } from '@prisma/client'

export const StoryContext = ({
  children,
  authenticated = false,
  roles = ['STUDENT'],
}: {
  children: React.ReactNode
  authenticated?: boolean
  roles?: UserRole[]
}) => {
  const queryClient = new QueryClient()
  return (
    <SessionProvider
      session={
        authenticated
          ? {
              user: {
                id: '123',
                email: 'test@email.com',
                name: 'Robert',
                roles: roles,
              },
              expires: 'never',
            }
          : undefined
      }
    >
      <QueryClientProvider client={queryClient}>
        <CourseContextProvider course={courseMock} courses={coursesMock}>
          {children}
        </CourseContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}
