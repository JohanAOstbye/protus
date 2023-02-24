import { Colors } from 'lib/types/style'
import style from 'styles/components/_activityCard.module.scss'

export interface ActivityCardProps {
  title?: string
  type?: string
  icon?: string
  color?: Extract<Colors, 'red' | 'purple'>
}

export const ActivityCard = ({
  title,
  type,
  icon,
  color,
}: ActivityCardProps) => {
  return (
    <div className={style.container}>
      <img src={icon} alt="icon logo" className={style.icon} />
      <div className={style.cardTitle}>{title}</div>
      <div className={`${style.activity} ${style[`type-${color}`]}`}>
        {type}
      </div>
    </div>
  )
}
export default ActivityCard
