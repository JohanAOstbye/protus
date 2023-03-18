import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { CourseContextProvider } from 'components/context/courseContext'
import { courseMock, coursesMock } from './mockdata/course'

const StroyContext = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()
  return (
    <SessionProvider
      session={{
        user: { id: '123', email: 'test@email.com', name: 'Robert' },
        expires: 'never',
      }}
    >
      <QueryClientProvider client={queryClient}>
        <CourseContextProvider course={courseMock} courses={coursesMock}>
          {children}
        </CourseContextProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default StroyContext
