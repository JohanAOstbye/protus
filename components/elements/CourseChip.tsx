import Link from 'next/link'
import style from 'styles/components/_courseChip.module.scss'

export interface CourseChipProps {
  name?: string
}

export const CourseChip = ({ name }: CourseChipProps) => {
  return (
    <Link className={style.container} href={''}>
      <div className={style.chipText}>{name}</div>
    </Link>
  )
}
export default CourseChip
