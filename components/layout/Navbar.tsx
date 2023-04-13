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
    (session.user.code === null ||
      session.user.code === undefined ||
      session.user.code === '') &&
    window.location.pathname !== '/auth/new-user'
  ) {
    console.log(
      session.user.code === null,
      session.user.code === undefined,
      session.user.code === ''
    )

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
                <PersonIcon />
              )
            ) : (
              <SignInIcon />
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
