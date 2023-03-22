import { Colors } from 'lib/types/style'
import Link from 'next/link'
import style from 'styles/components/_activityCard.module.scss'
import ExerciseIcon from 'lib/assets/icons/exercise.svg'
import ChallengeIcon from 'lib/assets/icons/challenge.svg'
import React from 'react'

export interface ActivityCardProps {
  title?: string
  type?: 'Challenge' | 'Exercise'
}

export const ActivityCard = ({ title, type }: ActivityCardProps) => {
  return (
    <li className={style.activityCard}>
      <Link href={''}>
        {type === 'Challenge' ? <ChallengeIcon /> : <ExerciseIcon />}
        <div className={style.title}>{title}</div>
        <div
          className={`${style.type} ${
            style[`type-${type === 'Challenge' ? 'red' : 'purple'}`]
          }`}
        >
          {type}
        </div>
      </Link>
    </li>
  )
}
export default ActivityCard
