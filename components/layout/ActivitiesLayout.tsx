import { useCourse } from 'components/context/courseContext'
import 'styles/utils/_global.scss'
import style from 'styles/layout/_activitiesLayout.module.scss'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import ActivitiesMenu from 'components/blocks/ActivitiesMenu'
import Activities, { ActivitiesProps } from 'components/blocks/Activities'
import { ActivityCardProps } from 'components/elements/ActivityCard'
import { useState } from 'react'

export const ActivitiesLayout = () => {
  const { course, courses } = useCourse()

  const mockdata: ActivityCardProps[] = [
    { title: 'Time Operator', type: 'Exercise' },
    { title: 'Variables', type: 'Challenge' },
    { title: 'Time Operator', type: 'Exercise' },
    { title: 'Lists', type: 'Challenge' },
    { title: 'If and Else', type: 'Exercise' },
    { title: 'For loops', type: 'Challenge' },
    { title: 'Observebale and Observer', type: 'Exercise' },
    { title: 'streams & stuff', type: 'Challenge' },
    { title: 'Time Operator', type: 'Exercise' },
    { title: 'Variables', type: 'Challenge' },
    { title: 'Time Operator', type: 'Exercise' },
    { title: 'Lists', type: 'Challenge' },
    { title: 'If and Else', type: 'Exercise' },
    { title: 'For loops', type: 'Challenge' },
    { title: 'Observebale and Observer', type: 'Exercise' },
    { title: 'streams & stuff', type: 'Challenge' },
  ]

  return (
    <>
      <Navbar courses={courses} selectedCourse={course} />
      <ActivitiesMenu />
      <div className={style.layout}>
        {course && course.name && course.slugs && (
          <Sidebar
            course={course.name}
            closed={false}
            chapters={course.slugs}
            courseSlug={course.name}
          />
        )}
        <div className={style.content}>
          <Activities activityList={mockdata} />
        </div>
      </div>
    </>
  )
}

export default ActivitiesLayout
