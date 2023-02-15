'use client'

import { CourseContextProvider } from 'components/context/courseContext'
import Layout from 'components/layout'

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

  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black">
      <QueryClientProvider client={queryClient}>
        <CourseContextProvider course={undefined} courses={undefined}>
          <Layout>
            {children}
            </Layout>
        </CourseContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
