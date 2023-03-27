import React from 'react'
import Link from 'next/link'
import style from 'styles/components/_courseCard.module.scss'
import JavaIcon from 'lib/assets/icons/java.svg'
import CodeIcon from 'lib/assets/icons/codeicon.svg'

export interface CourseCardProps {
  name?: string
}

export const CourseCard = ({ name }: CourseCardProps) => {
  return (
    <Link className={style.courseCard} href={''}>
      {name === 'Java' ? <JavaIcon /> : <CodeIcon />}
      <div className={style.title}>{name + ' course'}</div>
      {/* <div className={style.typeText}>Course</div> */}
    </Link>
  )
}
export default CourseCard
