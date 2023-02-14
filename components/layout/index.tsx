import { useCourse } from 'components/context/courseContext'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { course } = useCourse()
  return (
    <div className="layout">
      <Navbar />
      {course.name && course.slugs && (
        <Sidebar chapters={course.slugs} courseSlug={course.name} />
      )}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
