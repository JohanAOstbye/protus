'use client'

import { CourseContextProvider } from 'components/context/course'
import Footer from 'components/layout/Footer'
import Navbar from 'components/layout/Navbar'
import Sidebar from 'components/layout/Sidebar'

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
          <Navbar/>
          <Sidebar/>
          <Footer/>
        </CourseContextProvider>
      </body>
    </html>
  )
}
