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
      <div className={style.logoAndCourse}>
        <ProtusLabel />
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
                    courseIsVisible && courses.length !== 0 ? 'block' : 'none',
                }}
              >
                {courses
                  .filter((course) => course._id != selectedCourse._id)
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

      <div ref={authRef} className={style.auth}>
        <div onClick={() => setAuthIsVisible(!authIsVisible)}>
          {status === 'authenticated' ? (
            session.user && session.user.image ? (
              <img src={session.user.image} />
            ) : (
              <PersonIcon />
            )
          ) : (
            <SignInIcon />
          )}
        </div>
        <ul
          className={style.authDropdown}
          style={{ display: authIsVisible ? 'block' : 'none' }}
        >
          {status === 'authenticated' ? (
            <>
              <li>
                <Link href="/profile">Profile</Link>
              </li>
              <li>
                <Link href="/api/auth/signout">Sign out</Link>
              </li>
            </>
          ) : (
            <li>
              <Link href="/api/auth/signin">Sign in</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
