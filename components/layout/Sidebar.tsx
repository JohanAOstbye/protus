import Link from 'next/link'
import style from 'styles/layout/_sidebar.module.scss'
import { useState } from 'react'
import { Chapter } from 'lib/sanity/sanity.queries'
import ArrowRight from 'lib/assets/icons/arrow-right.svg'
import { useCourse } from 'components/context/courseContext'

export interface SidebarProps {}

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { course } = useCourse()

  return (
    <nav>
      {course && course.name && course.slugs && (
        <>
          <div
            className={`${style.sidebar} ${
              isExpanded || window.innerWidth >= 1312
                ? style.open
                : style.closed
            }`}
          >
            <div className={style.title}>
              <label>{course.name}</label>
              <button
                className={style.button}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                x
              </button>
            </div>
            <ul>
              {course.slugs.map((chapter, i) => (
                <li key={i}>
                  <Link
                    className={style.items}
                    href={`${course.name}/${chapter.slug}`}
                  >
                    <span>{chapter.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`${style.button_test} ${style.button} ${
              style.button_test
            } ${
              isExpanded || window.innerWidth >= 1312
                ? style.closed
                : style.open
            }`}
          >
            <ArrowRight />
          </button>
        </>
      )}
    </nav>
  )
}

export default Sidebar
