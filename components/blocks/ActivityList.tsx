import ActivityCard from 'components/elements/ActivityCard'
import style from 'styles/components/_activityList.module.scss'

export interface ActivityListProps {
  list: React.ComponentProps<typeof ActivityCard>[]
}

export const ActivityList = ({ list }: ActivityListProps) => {
  return (
    <ul className={style.container}>
      {list.map((item, i) => (
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
export default ActivityList
