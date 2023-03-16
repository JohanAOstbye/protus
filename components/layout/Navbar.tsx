'use client'
import Link from 'next/link'
import style from 'styles/layout/_navbar.module.scss'
import { courseType } from 'lib/types/sanity'
import ProtusLabel from 'components/elements/ProtusLabel'
import { useRef } from 'react'
import useOutsideClick from 'components/hooks/useOutsideClick.hook'
import DownArrow from 'lib/assets/icons/arrow-down.svg'
import SignInIcon from 'lib/assets/icons/signin.svg'
import PersonIcon from 'lib/assets/icons/person.svg'
import { useSession } from 'next-auth/react'

export const Navbar = ({
  courses,
  selectedCourse,
}: {
  courses?: courseType[]
  selectedCourse?: courseType
}) => {
  const { data: session, status } = useSession()
  const courseRef = useRef(null)
  const authRef = useRef(null)
  const { isVisible: courseIsVisible, setIsVisible: setCourseIsVisible } =
    useOutsideClick(false, courseRef)
  const { isVisible: authIsVisible, setIsVisible: setAuthIsVisible } =
    useOutsideClick(false, authRef)

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.logoAndCourse}>
          <Link href={'/'}>
            <ProtusLabel />
          </Link>
          {courses && selectedCourse && (
            <>
              <hr className={style.lineSeperator} />
              <div className={style.courseContainer} ref={courseRef}>
                <button
                  className={style.courseButton}
                  onClick={() => setCourseIsVisible(!courseIsVisible)}
                >
                  <div>
                    <span>Course</span>
                    <p>{selectedCourse.name}</p>
                  </div>
                  <DownArrow />
                </button>
                <ul
                  className={style.courseDropdown}
                  style={{
                    display:
                      courseIsVisible && courses.length !== 0
                        ? 'block'
                        : 'none',
                  }}
                >
                  {courses
                    .filter((course) => course._id != selectedCourse._id)
                    .map((course, i) => (
                      <li className={style.courseItem} key={i}>
                        <Link href={`${course.name}`}>
                          <span>{course.name}</span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </>
          )}
        </div>

        <div ref={authRef} className={style.auth}>
          <button
            onClick={() => setAuthIsVisible(!authIsVisible)}
            className={style.auth_Button}
          >
            {status === 'authenticated' ? (
              session.user && session.user.image ? (
                // <img src={session.user.image} />
                <PersonIcon />
              ) : (
                <PersonIcon />
              )
            ) : (
              <SignInIcon />
            )}
          </button>
          <ul
            className={style.auth_Dropdown}
            style={{ display: authIsVisible ? 'block' : 'none' }}
            onClick={() => setAuthIsVisible(!authIsVisible)}
          >
            {status === 'authenticated' ? (
              <>
                <li>
                  <Link href="/profile">
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <Link href="/api/auth/signout">
                    <span>Sign out</span>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link href="/api/auth/signin">
                  <span>Sign in</span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
