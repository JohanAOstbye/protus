import { Colors } from 'lib/types/style'
import Link from 'next/link'
import style from 'styles/components/_activityCard.module.scss'
import exerciseIcon from 'lib/assets/icons/exercise.svg'
import challengeIcon from 'lib/assets/icons/challenge.svg'
import { activityType } from '@prisma/client'

export interface ActivityCardProps {
  title?: string
  type?: activityType
  icon?: string
  color?: Extract<Colors, 'red' | 'purple'>
}

export const ActivityCard = ({
  title,
  type,
  icon,
  color,
}: ActivityCardProps) => {
  if (type == 'Exercise') {
    color = 'purple'
    icon = exerciseIcon
  }
  if (type == 'Challenge') {
    color = 'red'
    icon = challengeIcon
  }

  return (
    <Link className={style.container} href={''}>
      {/* TODO, replace above tag with <Link> */}
      {/* <Link className={style.link} href={''}> */}
      <img src={exerciseIcon} alt="icon logo" className={style.icon} />
      <div className={style.cardTitle}>{title}</div>
      <div
        className={`${style.activityLabel} ${style[`activityLabel-${color}`]}`}
      >
        {type}
      </div>
      {/* </Link> */}
    </Link>
  )
}
export default ActivityCard
