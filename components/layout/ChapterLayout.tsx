import { useCourse } from 'components/context/courseContext'
import { Button } from 'components/elements/Button'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import style from "styles/layout/_chapterLayout.module.scss"
import DescriptionBlock from 'schemas/blocks/descriptionBlock'
import { getChapter } from 'lib/sanity/sanity.client'

export const ChapterLayout = ({ children }: { children?: React.ReactNode }) => {
  const {course, courses}  = useCourse()
  // const chapter = getChapter()
  if (!course) return <>course not set</>
  console.log(course.name);
  
  
  return (
    <div className={style.layout}>
      <Navbar courses={courses} selectedCourse={course} />
      <div className={style.content}>
        {course.name && course.slugs && (
          <Sidebar course={course.name} closed={false} chapters={course.slugs} courseSlug={course.name} />
        )}
        <main>{children}</main>
        {/* <Button text="Activities"></Button> */}
        {/* <DescriptionBlock title={course.name} ></DescriptionBlock> */}
      </div>
      <Footer />
    </div>
  )
}

export default ChapterLayout
