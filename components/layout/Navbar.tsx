'use client'
import Link from 'next/link'
import style from 'styles/layout/_navbar.module.scss'
import ProtusLabel from 'components/elements/ProtusLabel'
import { useRef } from 'react'
import useOutsideClick from 'components/hooks/useOutsideClick.hook'
import DownArrow from 'lib/assets/icons/arrow-down.svg'
import SignInIcon from 'lib/assets/icons/signin.svg'
import PersonIcon from 'lib/assets/icons/person.svg'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useCourse } from 'components/context/courseContext'
import { redirect } from 'next/navigation'

export const Navbar = () => {
  const { courses, course } = useCourse()
  const { data: session, status } = useSession()
  const courseRef = useRef(null)
  const authRef = useRef(null)
  const { isVisible: courseIsVisible, setIsVisible: setCourseIsVisible } =
    useOutsideClick(false, courseRef)
  const { isVisible: authIsVisible, setIsVisible: setAuthIsVisible } =
    useOutsideClick(false, authRef)

  if (
    status == 'authenticated' &&
    session.user &&
    (session.user.code === null || session.user.code === undefined) &&
    window.location.pathname !== '/auth/new-user'
  ) {
    redirect('/auth/new-user')
  }

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.logoAndCourse}>
          <Link href={'/'}>
            <ProtusLabel />
          </Link>
          {status == 'authenticated' && courses.length > 0 && (
            <>
              <hr className={style.lineSeperator} />
              <div className={style.courseContainer} ref={courseRef}>
                <button
                  className={style.courseButton}
                  onClick={() => setCourseIsVisible(!courseIsVisible)}
                >
                  <div>
                    {course && <span>Course</span>}
                    <p>{course ? course.title : 'Course'}</p>
                  </div>
                  {/* <DownArrow /> */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 10L12 15L17 10H7Z" fill="currentColor" />
                  </svg>
                </button>
                <ul
                  className={style.courseDropdown}
                  style={{
                    display:
                      courseIsVisible && courses.length !== 0
                        ? 'block'
                        : 'none',
                  }}
                  onClick={() => setCourseIsVisible(!courseIsVisible)}
                >
                  {courses
                    .filter((c) => (course ? c.slug !== course.slug : true))
                    .map((course, i) => (
                      <li className={style.courseItem} key={i}>
                        <Link href={`/c/${course.slug}`}>
                          <span>{course.title}</span>
                        </Link>
                      </li>
                    ))}
                  {course && (
                    <li className={style.courseItem}>
                      <a href="/c">
                        <span>None</span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            </>
          )}
          {status == 'authenticated' && (
            <Link href={'/activities'}>Activities</Link>
          )}
        </div>

        <div ref={authRef} className={style.auth}>
          <button
            onClick={() =>
              status != 'authenticated'
                ? signIn()
                : setAuthIsVisible(!authIsVisible)
            }
            className={style.auth_Button}
          >
            {status === 'authenticated' ? (
              session.user && session.user.image ? (
                <img src={session.user.image} />
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6C13.1 6 14 6.9 14 8C14 9.1 13.1 10 12 10C10.9 10 10 9.1 10 8C10 6.9 10.9 6 12 6ZM12 16C14.7 16 17.8 17.29 18 18H6C6.23 17.28 9.31 16 12 16ZM12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                    fill="currentColor"
                  />
                </svg>
              )
            ) : (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 7L9.6 8.4L12.2 11H2V13H12.2L9.6 15.6L11 17L16 12L11 7ZM20 19H12V21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H12V5H20V19Z"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>

          {status === 'authenticated' && (
            <ul
              className={style.auth_Dropdown}
              style={{ display: authIsVisible ? 'block' : 'none' }}
              onClick={() => setAuthIsVisible(!authIsVisible)}
            >
              <li>
                <Link href="/profile">
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <button onClick={() => signOut({ callbackUrl: '/' })}>
                  sign out
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
