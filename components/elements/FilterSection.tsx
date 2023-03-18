import useOutsideClick from 'components/hooks/useOutsideClick.hook'
import { useState } from 'react'
import DownArrow from 'lib/assets/icons/arrow-down.svg'
import style from 'styles/components/_filterSection.module.scss'
import checkbox from 'styles/components/_filterItem.module.scss'

export interface FilterSectionProps {
  title: string
  children: React.ReactNode
  canSelect: boolean
  checked?: boolean
  check?: (isChecked: boolean) => void
}

export const FilterSection = ({
  title,
  children,
  canSelect,
  checked = false,
  check = () => console.log('function not implemented'),
}: FilterSectionProps) => {
  const [isVisible, setIsVisible] = useState(checked)
  return (
    <div className={style.filterSection}>
      <button
        className={style.button}
        onClick={() => (canSelect ? check(checked) : setIsVisible(!isVisible))}
      >
        <span className={style.title}>{title}</span>
        {canSelect ? (
          <input
            className={checkbox.checkbox}
            type="checkbox"
            checked={checked}
            readOnly
          />
        ) : (
          <DownArrow />
        )}
      </button>
      <div
        className={style.content}
        style={{ height: isVisible || checked ? 'min-content' : 0 }}
      >
        {children}
      </div>
    </div>
  )
}
export default FilterSection
