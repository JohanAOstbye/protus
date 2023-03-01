import Link from 'next/link'
import style from 'styles/layout/_navbar.module.scss'
import { courseType } from 'lib/types/sanity'
import ProtusLabel from 'components/elements/ProtusLabel'
import { useRef, useState } from 'react'
import useOutsideClick from 'components/hooks/useOutsideClick.hook'
import DownArrow from 'public/arrow-down.svg'

export const Navbar = ({
  courses,
  selectedCourse,
}: {
  courses?: courseType[]
  selectedCourse?: courseType
}) => {
  const ref = useRef(null)
  const { isVisible, setIsVisible } = useOutsideClick(false, ref)

  return (
    <div className={style.container}>
      <div className={style.logoAndCourse}>
        <ProtusLabel />
        {courses && selectedCourse && (
          <>
            <hr className={style.lineSeperator} />
            <div className={style.courseContainer} ref={ref}>
              <button
                className={style.courseButton}
                onClick={() => setIsVisible(!isVisible)}
              >
                <div>
                  <span>Course</span>
                  <p>{selectedCourse.name}</p>
                </div>
                <div>
                  <DownArrow />
                </div>
              </button>
              <ul
                className={style.courseDropdown}
                style={{ display: isVisible ? 'block' : 'none' }}
              >
                {courses
                  .filter((course) => course.name != selectedCourse.name)
                  .map((course, i) => (
                    <li className={style.courseItem} key={i}>
                      <Link href={`${course.name}`}>{course.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </>
        )}
      </div>

      <div>login</div>
    </div>
  )
}

export default Navbar
