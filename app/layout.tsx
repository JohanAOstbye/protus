'use client'

import { CourseContextProvider } from 'components/context/courseContext'
import Layout from 'components/layout'
import 'styles/utils/_global.scss'

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
            <Layout>{children}</Layout>
          </CourseContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
