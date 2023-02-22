import { useCourse } from 'components/context/courseContext'
import React from 'react'
import Footer from './Footer'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import style from "styles/layout/_chapterLayout.module.scss"

export const ChapterLayout = ({ children }: { children?: React.ReactNode }) => {
  const {course, courses}  = useCourse()
  
  if (!course) throw new Error('Course not set')
  
  return (
    <div className={style.layout}>
      <Navbar courses={courses} selectedCourse={course} />
      <div className={style.content}>
        {course.name && course.slugs && (
          <Sidebar course={course.name} closed={false} chapters={course.slugs} courseSlug={course.name} />
        )}
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default ChapterLayout
