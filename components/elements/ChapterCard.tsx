import { Colors } from 'lib/types/style'
import Link from 'next/link'
import style from 'styles/components/_chapterCard.module.scss'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { ProgressBar } from './ProgressBar'

export interface ChapterCardProps {
  title: string
  url: string
}

export const ChapterCard = ({ title, url }: ChapterCardProps) => {
  return (
    <li className={style.chapterCard}>
      <Link href={url}>
        <div>
          <FaAngleRight />
          <div className={style.title}>{title}</div>
        </div>

        <ProgressBar percent={Math.random() * 100} />
      </Link>
    </li>
  )
}
export default ChapterCard
