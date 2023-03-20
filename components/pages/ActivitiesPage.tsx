'use client'
import ActivityList from 'components/blocks/ActivityList'
import Filter from 'components/blocks/Filter'
import { filterType } from 'lib/types/componentTypes'
import React, { useState } from 'react'
import SearchIcon from 'lib/assets/icons/search.svg'
import style from 'styles/pages/_activitiesPage.module.scss'

const mockdata: React.ComponentProps<typeof ActivityList>['list'] = [
  { title: 'Time Operator', type: 'Exercise' },
  { title: 'Variables', type: 'Challenge' },
  { title: 'Time Operator', type: 'Exercise' },
  { title: 'Lists', type: 'Challenge' },
  { title: 'If and Else', type: 'Exercise' },
  { title: 'For loops', type: 'Challenge' },
  { title: 'Observebale and Observer', type: 'Exercise' },
  { title: 'streams & stuff', type: 'Challenge' },
  { title: 'Time Operator', type: 'Exercise' },
  { title: 'Variables', type: 'Challenge' },
  { title: 'Time Operator', type: 'Exercise' },
  { title: 'Lists', type: 'Challenge' },
  { title: 'If and Else', type: 'Exercise' },
  { title: 'For loops', type: 'Challenge' },
  { title: 'Observebale and Observer', type: 'Exercise' },
  { title: 'streams & stuff', type: 'Challenge' },
]

const ActivitiesPage = () => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<filterType>({
    activitytype: [],
    course: [],
  })
  return (
    <div>
      <div className={style.title}>Activities</div>
      <div className={style.search}>
        <input
          type="text"
          className={style.search_input}
          value={query !== '' ? query : undefined}
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <SearchIcon />
      </div>
      <Filter
        filter={filter}
        setFilter={setFilter}
        options={{
          activitytype: ['example', 'exercise', 'challenge'],
          course: [
            {
              name: 'course 1',
              chapters: ['chapter 1', 'chapter 2', 'chapter 3'],
            },
            {
              name: 'course 2',
              chapters: ['chapter 1', 'chapter 2', 'chapter 3'],
            },
            {
              name: 'course 3',
              chapters: ['chapter 1', 'chapter 2', 'chapter 3'],
            },
          ],
        }}
      />
      <ActivityList list={mockdata} />
    </div>
  )
}

export default ActivitiesPage
