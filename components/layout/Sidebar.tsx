import Link from 'next/link'
import style from 'styles/layout/_sidebar.module.scss'
import { useState } from 'react'
import arrowRight from 'public/icons/arrow-right.svg'
import { Chapter } from 'lib/sanity/sanity.queries'

export interface SidebarProps {
  closed: boolean
  chapters: Pick<Chapter, 'title' | 'slug'>[]
  courseSlug: string
  course: string
}

export const Sidebar = ({ chapters, courseSlug, course }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={isExpanded ? 'style.sidebar' : 'style.sidebarClosed'}>
      {!isExpanded && (
        <ul className={style.sidebar}>
          <div>
            <a
              onClick={() => setIsExpanded(!isExpanded)}
              className={style.btnOpen}
            ></a>
            <label className={style.currentCourse}>{course}</label>
          </div>
          {chapters.map((chapter, i) => (
            <li key={i}>
              <Link
                className={style.items}
                href={`${courseSlug}/${chapter.slug}`}
              >
                {chapter.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {isExpanded && (
        <img
          src={arrowRight}
          onClick={() => setIsExpanded(!isExpanded)}
          className={style.btnClose}
        ></img>
      )}
    </div>
  )
}

export default Sidebar
