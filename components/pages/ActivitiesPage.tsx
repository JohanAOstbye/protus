'use client'
import ActivityList from 'components/blocks/ActivityList'
import Filter from 'components/blocks/Filter'
import { filterType } from 'lib/types/componentTypes'
import React, { useDeferredValue, useState } from 'react'
import SearchIcon from 'lib/assets/icons/search.svg'
import style from 'styles/pages/_activitiesPage.module.scss'
import { trpc } from 'lib/server/trpc/provider'
import Loading from 'components/elements/Loading'
import { ActivitiesRouterInput } from 'lib/server/trpc/api/router/activities'

type activitiesPageProps = {
  options: filterType
}

const ActivitiesPage = ({
  options = {
    activitytype: ['Exercise', 'Challenge'],
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
  },
}: activitiesPageProps) => {
  const [query, setQuery] = useState('')
  const deferredQuery = useDeferredValue(query) //TODO: fix søk i query
  const [filter, setFilter] = useState<
    ActivitiesRouterInput['getAllActivities']
  >({
    type: [],
    courses: [],
  })

  const activities = trpc.activities.getAllActivities.useQuery(filter)

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
      <Filter filter={filter} setFilter={setFilter} options={options} />
      {activities.isLoading ? (
        <Loading />
      ) : (
        activities.data && <ActivityList list={activities.data} />
      )}
    </div>
  )
}

export default ActivitiesPage
