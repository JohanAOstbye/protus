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
                    isExpanded || window.innerWidth >= 1312
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
              <svg
                fill="white"
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                opacity="0.7"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z" />
              </svg>

              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 19a1 1 0 0 1-.64-.23 1 1 0 0 1-.13-1.41L13.71 12 9.39 6.63a1 1 0 0 1 .15-1.41 1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19z"
                  fill="currentColor"
                />
              </svg>
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
