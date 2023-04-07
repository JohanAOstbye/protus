import ActivityCard from 'components/elements/ActivityCard'
import ChapterCard from 'components/elements/ChapterCard'
import style from 'styles/components/_chapterList.module.scss'

export interface ChapterListProps {
  list: React.ComponentProps<typeof ChapterCard>[]
}

export const ChapterList = ({ list }: ChapterListProps) => {
  return (
    <ul className={style.chapterList}>
      {list.map((item, i) => (
        <ChapterCard key={i} {...item} />
      ))}
    </ul>
  )
}
export default ChapterList
