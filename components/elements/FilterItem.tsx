import useOutsideClick from 'components/hooks/useOutsideClick.hook'
import { useRef } from 'react'
import DownArrow from 'lib/assets/icons/arrow-down.svg'
import style from 'styles/components/_filterItem.module.scss'
import { filterType } from 'lib/types/componentTypes'

export interface FilterItemProps {
  title: string
  checked: boolean
  check?: (isChecked: boolean) => void
}

export const FilterItem = ({
  title,
  checked,
  check = () => console.log('function not implemented'),
}: FilterItemProps) => {
  return (
    <div className={style.filterItem}>
      <span className={style.title}>{title}</span>
      <input
        className={style.checkbox}
        type="checkbox"
        // checked={checked}
        // onChange={() => {
        //   check(checked)
        //   console.log(filter?.course)
        // }}
      />
    </div>
  )
}
export default FilterItem
