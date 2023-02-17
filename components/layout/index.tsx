import { useCourse } from 'components/context/courseContext'
import { Button } from 'components/elements/Button'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import style from "styles/layout/_layout.module.scss"

export const Layout = ({ children }: { children?: React.ReactNode }) => {
  const {course, courses}  = useCourse()
  
  return (
    <div className={style.layout}>
      <Navbar courses={courses} selectedCourse={course} />
      {course.name && course.slugs && (
        <Sidebar chapters={course.slugs} courseSlug={course.name} />
      )}
      <main>{children}</main>
      <Button text="variables"></Button>
      <Footer />
    </div>
  )
}

export default Layout
