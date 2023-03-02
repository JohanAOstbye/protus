import style from 'styles/components/_activitiesFilter.module.scss'
import Filter from './Filter'
import search from 'lib/assets/icons/search.svg'

export const ActivitiesFilter = () => {
  return (
    <div className={style.container}>
      <div className={style.activitiesLabel}>Activities</div>
      <div className={style.searchBox}>
        <input type="text" className={style.search} placeholder="Search..." />
        <img src={search} alt="Search icon" className={style.searchIcon} />
      </div>
      <Filter filterList={[]} />
    </div>
  )
}
export default ActivitiesFilter
