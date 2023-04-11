import ActivityCard from 'components/elements/ActivityCard'
import style from 'styles/components/_activityList.module.scss'

export interface ActivityListProps {
  list: React.ComponentProps<typeof ActivityCard>[]
}

export const ActivityList = ({ list }: ActivityListProps) => {
  return (
    <ul className={style.activityList}>
      {list.map((item, i) => (
        <ActivityCard key={i} {...item} />
      ))}
    </ul>
  )
}
export default ActivityList
