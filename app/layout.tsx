'use client'

import { CourseContextProvider } from 'components/context/courseContext'

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
          <CourseContextProvider>{children}</CourseContextProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
