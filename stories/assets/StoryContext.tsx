import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { CourseContextProvider } from 'components/context/courseContext'
import { courseMock, coursesMock } from './mockdata/course'
import { UserRole } from '@prisma/client'
import { ClientProvider } from 'lib/server/trpc/provider'

export const StoryContext = ({
  children,
  authenticated = false,
  roles = ['STUDENT'],
}: {
  children: React.ReactNode
  authenticated?: boolean
  roles?: UserRole[]
}) => {
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
      <CourseContextProvider course={courseMock} courses={coursesMock}>
        <ClientProvider>{children}</ClientProvider>
      </CourseContextProvider>
    </SessionProvider>
  )
}
