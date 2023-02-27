import Footer from './Footer'
import Navbar from './Navbar'
import style from 'styles/layout/_layout.module.scss'
import { ReactNode } from 'react'
import { useCourse } from 'components/context/courseContext'

export const Layout = ({ children }: { children: ReactNode }) => {
  const { course, courses } = useCourse()

  return (
    <div className={style.layout}>
      <Navbar courses={courses} selectedCourse={course} />
      <div className={style.Content}>
      {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
