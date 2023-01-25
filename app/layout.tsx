'use client'

import { CourseContextProvider } from 'components/context/course'

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
          {children}
        </CourseContextProvider>
      </body>
    </html>
  )
}
