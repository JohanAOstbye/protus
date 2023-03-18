import ActivityCard, {
  ActivityCardProps,
} from 'components/elements/ActivityCard'
import style from 'styles/components/_activities.module.scss'

export interface ActivitiesProps {
  activityList: ActivityCardProps[]
}

export const Activities = ({ activityList }: ActivitiesProps) => {
  return (
    <ul className={style.container}>
      {activityList.map((item, i) => (
        <li key={i} className={style.item}>
          <ActivityCard
            title={item.title}
            type={item.type}
            color={item.color}
            icon={item.icon}
          />
        </li>
      ))}
    </ul>
  )
}
export default Activities
