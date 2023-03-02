import { useState } from 'react'
import FilterItem, { FilterItemProps } from 'components/elements/FilterItem'
import style from 'styles/components/_filter.module.scss'
import filterIcon from 'lib/assets/icons/filterIcon.svg'

export interface FilterProps {
  filterList: FilterItemProps[]
}

export const Filter = ({ filterList }: FilterProps) => {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div className={style.container}>
      <div className={style.filterBtn}>
        <img src={filterIcon} alt="FilterIcon" className={style.filterIcon} />
        <div
          className={style.btnText}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          Filter
        </div>
      </div>
      {!isExpanded && (
        <ul className={style.filterBox}>
          {filterList.map((item, i) => (
            <li key={i}>
              <FilterItem
                text={item.text}
                type={item.type}
                checked={item.checked}
              ></FilterItem>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default Filter
