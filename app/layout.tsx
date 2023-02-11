'use client'

import { CourseContextProvider } from 'components/context/course'
import Layout from 'components/layout'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black">
        <CourseContextProvider course={undefined}>
          <Layout>
            {children}
            </Layout>
        </CourseContextProvider>
      </body>
    </html>
  )
}
