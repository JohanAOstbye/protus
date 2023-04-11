import style from 'styles/components/_filterItem.module.scss'

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
        checked={checked}
        onChange={() => {
          check(checked)
        }}
      />
    </div>
  )
}
export default FilterItem
