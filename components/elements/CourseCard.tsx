import React from 'react'
import Link from 'next/link'
import style from 'styles/components/_courseCard.module.scss'
import JavaIcon from 'lib/assets/icons/java.svg'
import CodeIcon from 'lib/assets/icons/codeicon.svg'
import { Icon } from './Icon'

export interface CourseCardProps {
  title?: string
  slug?: string
  icon?: { name: string; provider: string }
}

export const CourseCard = ({ title, slug, icon }: CourseCardProps) => {
  return (
    <Link className={style.courseCard} href={`/c/${slug}`}>
      <>
        {/* {icon ? Icon(icon) : Icon({ name: 'FaBook', provider: 'fa' })} */}
        <JavaIcon />
        <div className={style.title}>{title + ' course'}</div>
      </>
    </Link>
  )
}
export default CourseCard
