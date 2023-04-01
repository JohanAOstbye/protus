import { Colors } from 'lib/types/style'
import Link from 'next/link'
import style from 'styles/components/_activityCard.module.scss'
import ExerciseIcon from 'lib/assets/icons/exercise.svg'
import ChallengeIcon from 'lib/assets/icons/challenge.svg'
import React from 'react'
import { activityType } from '@prisma/client'

export interface ActivityCardProps {
  name?: string
  type?: activityType
  id: string
}

export const ActivityCard = ({ name, type, id }: ActivityCardProps) => {
  return (
    <li className={style.activityCard}>
      <Link href={`/activity/${id}`}>
        {type === 'Challenge' ? <ChallengeIcon /> : <ExerciseIcon />}
        <div className={style.title}>{name}</div>
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
