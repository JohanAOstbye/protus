'use client'
import Link from 'next/link'
import style from 'styles/layout/_sidebar.module.scss'
import { useState } from 'react'
import ArrowRight from 'lib/assets/icons/arrow-right.svg'
import { useCourse } from 'components/context/courseContext'

export interface SidebarProps {}

export const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { course } = useCourse()
  return (
    <nav>
      {course && course.slug && course.chapters && (
        <>
          <div>
            <div
              className={`${style.sidebar} ${
                isExpanded || window.innerWidth >= 1312
                  ? style.open
                  : style.closed
              }`}
            >
              <div className={style.title}>
                <label>{course.title ? course.title : course.slug}</label>
                <button
                  className={`${style.button} ${
                    window.innerWidth <= 1312 && isExpanded
                      ? style.closed
                      : style.open
                  }`}
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  x
                </button>
              </div>
              <ul>
                {course.chapters.map((chapter, i) => (
                  <li key={i}>
                    <Link
                      className={style.items}
                      href={`c/${course.slug}/${chapter.slug}`}
                    >
                      <span>{chapter.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              {isExpanded && window.innerWidth <= 700 && (
                <Link
                  className={style.activitiesLink}
                  href={`/activities?${new URLSearchParams({
                    course: JSON.stringify({ name: course.title }),
                  }).toString()}`}
                >
                  Activities
                </Link>
              )}
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
            {isExpanded && window.innerWidth >= 700 && (
              <Link
                className={style.activitiesLink}
                href={`/activities?${new URLSearchParams({
                  course: JSON.stringify({ name: course.title }),
                }).toString()}`}
              >
                Activities
              </Link>
            )}
          </div>
        </>
      )}
    </nav>
  )
}

export default Sidebar
