import React from 'react'
import { Sidebar } from './Sidebar'
import style from 'styles/layout/_chapterLayout.module.scss'

export const CourseLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className={style.content}>
      <Sidebar />
      <>{children}</>
    </div>
  )
}

export default CourseLayout
