import { useCourse } from 'components/context/courseContext'
import React from 'react'
import Footer from './Footer'
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import style from 'styles/layout/_chapterLayout.module.scss'

export const ChapterLayout = ({ children }: { children?: React.ReactNode }) => {
  const { course } = useCourse()

  return (
    <div className={style.content}>
      {course && course.name && course.slugs && (
        <Sidebar
          course={course.name}
          closed={false}
          chapters={course.slugs}
          courseSlug={course.name}
        />
      )}
      <article>{children}</article>
    </div>
  )
}

export default ChapterLayout
