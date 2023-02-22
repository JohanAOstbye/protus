'use client'

import { CourseContextProvider, useCourse } from 'components/context/courseContext'
import Layout from 'components/layout/ChapterLayout'
import { getCourse, getCourses } from 'lib/sanity/sanity.client'

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const queryClient = new QueryClient()

  const course = useCourse()
  

  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black">
      <QueryClientProvider client={queryClient}>
        <CourseContextProvider>
          <Layout >
            {children}
            </Layout>
        </CourseContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
