import React from 'react'
import Link from 'next/link'
import style from 'styles/components/_courseCard.module.scss'
import JavaIcon from 'lib/assets/icons/java.svg'
import { trpc } from 'lib/server/trpc/provider'

export interface CourseCardProps {
  title?: string
  slug?: string
  icon?: { name: string; provider: string }
}

export const CourseCard = ({ title, slug }: CourseCardProps) => {
  return (
    <Link className={style.courseCard} href={`/c/${slug}`}>
      <>
        <JavaIcon />
        <div className={style.title}>{title + ' course'}</div>
      </>
    </Link>
  )
}
export default CourseCard
