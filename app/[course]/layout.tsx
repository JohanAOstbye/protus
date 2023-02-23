'use client'

import { CourseContextProvider } from 'components/context/courseContext'
import Loading from 'components/elements/Loading'
import Layout from 'components/layout/ChapterLayout'
import { Suspense } from 'react'

import { QueryClient, QueryClientProvider } from 'react-query'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const queryClient = new QueryClient()

  return (
    <html lang="en">
      <head />
      <body>
        <QueryClientProvider client={queryClient}>
          <CourseContextProvider>
            <Layout>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </Layout>
          </CourseContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
