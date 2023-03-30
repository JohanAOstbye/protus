import { Colors } from 'lib/types/style'
import Link from 'next/link'
import style from 'styles/components/_chapterCard.module.scss'
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

export interface ChapterCardProps {
  name: string
  url: string
}

export const ChapterCard = ({ name, url }: ChapterCardProps) => {
  return (
    <li className={style.chapterCard}>
      <Link href={url}>
        <FaAngleRight />
        <div className={style.title}>{name}</div>
      </Link>
    </li>
  )
}
export default ChapterCard
