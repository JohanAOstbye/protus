import Link from 'next/link'
import style from 'styles/components/_courseChip.module.scss'

export interface CourseChipProps {
  text?: string
}

export const CourseChip = ({ text }: CourseChipProps) => {
  return (
    <Link className={style.container} href={''}>
      <div className={style.chipText}>{text}</div>
    </Link>
  )
}
export default CourseChip
