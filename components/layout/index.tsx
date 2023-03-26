'use client'
import Footer from './Footer'
import Navbar from './Navbar'
import style from 'styles/layout/_layout.module.scss'

import { ReactNode, useEffect } from 'react'
import { useCourse } from 'components/context/courseContext'
import { isDeepEqual } from 'lib/deepCompare'
import { Course } from 'lib/sanity/sanity.queries'

type LayoutProps = {
  children: ReactNode
  courses: Course[]
}

export const Layout = (props: LayoutProps) => {
  const { course, courses, updateCourses } = useCourse()

  useEffect(() => {
    console.log('Layout useEffect')

    if (!isDeepEqual(props.courses, courses)) updateCourses(props.courses)
  }, [])

  return (
    <div className={style.layout}>
      <Navbar courses={courses} selectedCourse={course} />
      <div className={style.content}>{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
