import Link from 'next/link'
import style from 'styles/layout/_sidebar.module.scss'
import { useState } from 'react'
import { Chapter } from 'lib/sanity/sanity.queries'
import ArrowRight from 'lib/assets/icons/arrow-right.svg'

export interface SidebarProps {
  closed: boolean
  chapters: Pick<Chapter, 'title' | 'slug'>[]
  courseSlug: string
  course: string
}

export const Sidebar = ({ chapters, courseSlug, course }: SidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={style.container}>
      {isExpanded ? (
        <div className={style.sidebar}>
          <div className={style.title}>
            <label>{course}</label>
            <button
              className={style.button}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              x
            </button>
          </div>
          <ul>
            {chapters.map((chapter, i) => (
              <li key={i}>
                <Link
                  className={style.items}
                  href={`${courseSlug}/${chapter.slug}`}
                >
                  <span>{chapter.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${style.button} ${style.button_open}`}
        >
          <ArrowRight />
        </button>
      )}
    </div>
  )
}

export default Sidebar
