import style from 'styles/components/_activitiesMenu.module.scss'
import Filter, { FilterProps } from './Filter'
import search from 'assets/icons/search.svg'
import { FilterItemProps } from 'components/elements/FilterItem'

export interface ActivitiesMenuProps {
  filterList: FilterItemProps[]
}

export const ActivitiesMenu = ({ filterList }: ActivitiesMenuProps) => {
  return (
    <div className={style.container}>
      <div className={style.activitiesLabel}>Activities</div>
      <div className={style.searchBox}>
        <input type="text" className={style.search} placeholder="Search..." />
        <img src={search} alt="Search icon" className={style.searchIcon} />
      </div>
      <Filter filterList={filterList} />
    </div>
  )
}
export default ActivitiesMenu
