'use client'
import { Button } from 'components/elements/Button'
import ProtusLabel from 'components/elements/ProtusLabel'
import FrontPageImage from 'lib/assets/images/frontpageimage.svg'
import style from 'styles/pages/_frontPage.module.scss'
import { useSession } from 'next-auth/react'
import CourseCard from 'components/elements/CourseCard'
import { useCourse } from 'components/context/courseContext'
import Loading from 'components/elements/Loading'

export const FrontPage = () => {
  const { data: session, status } = useSession()
  const { courses } = useCourse()

  return (
    <div className={style.page}>
      <div className={style.intro}>
        <h2>Welcome to</h2>
        <ProtusLabel />
        <p>
          A programming tutoring systemdesigned for learners with no programming
          experience.
        </p>
      </div>
      <>
        {status == 'authenticated' ? (
          <div className={style.courses}>
            {courses.map((course, index) => (
              <CourseCard key={index} title={course.title} slug={course.slug} />
            ))}
          </div>
        ) : (
          <div>
            <div className={style.button}>
              <Button url="/auth/signin" text="Login" />
            </div>
            <FrontPageImage />
          </div>
        )}
      </>
    </div>
  )
}
