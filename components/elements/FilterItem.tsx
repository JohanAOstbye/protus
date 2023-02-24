import style from 'styles/components/_filterItem.module.scss'

export interface FilterItemProps {
  text?: string
  type?: string
  checked?: boolean
}

export const FilterItem = ({ text, type, checked }: FilterItemProps) => {
  return (
    <div className={style.container}>
      <input className={style.checkbox} type="checkbox" checked={checked} />
      <div className={style.itemText}>{text}</div>
    </div>
  )
}
export default FilterItem
