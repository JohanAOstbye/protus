import Link from 'next/link'
import style from 'styles/components/_sidebar.module.scss'
import { courseType } from 'lib/types/sanity';
import { useState } from 'react';
import arrowRight from 'public/arrow-right.svg'

export interface SidebarProps {
  closed: boolean
  chapters: { title: string; slug: string }[]
  courseSlug: string
  course: string
}

export const Sidebar = ({
  chapters,
  courseSlug,
  course
}: SidebarProps) => {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={isExpanded ? "style.sidebar" :  "style.sidebarClosed"}>
      {!isExpanded && (
        <ul className={style.sidebar}>
        <div>
          <a onClick={() => setIsExpanded(!isExpanded)} className={style.btnOpen}></a>
          <label className={style.currentCourse}>{course}</label>
        </div>
        {chapters.map((chapter, i) => (
          <li  key={i}>
            <Link className={style.items} href={`${courseSlug}/${chapter.slug}`}>{chapter.title}</Link>
          </li>
        ))}
        </ul>
      )}    
      {isExpanded && (
        <img src={arrowRight} onClick={() => setIsExpanded(!isExpanded)} className={style.btnClose}></img>
      )}
    </div>
  ) 
}

export default Sidebar
