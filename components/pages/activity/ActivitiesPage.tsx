'use client'
import ActivityList from 'components/blocks/ActivityList'
import Filter from 'components/blocks/Filter'
import { filterType } from 'lib/types/componentTypes'
import React, { useDeferredValue, useState } from 'react'
import SearchIcon from 'lib/assets/icons/search.svg'
import style from 'styles/pages/_activitiesPage.module.scss'
import { trpc } from 'lib/server/trpc/provider'
import Loading from 'components/elements/Loading'
import { ActivityCardProps } from 'components/elements/ActivityCard'
import { Button } from 'components/elements/Button'
import { useSession } from 'next-auth/react'

type activitiesPageProps = {
  options?: filterType
  initialfilter: filterType
}

export const ActivitiesPage = ({
  options = {
    type: ['Exercise', 'Challenge'],
    courses: [
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
  initialfilter,
}: activitiesPageProps) => {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<filterType>(initialfilter)
  const deferredFilter = useDeferredValue({ query: query, ...filter })
  useSession({ required: true })

  const activities = trpc.activities.getAll.useInfiniteQuery(
    { limit: 20, filter: filter },
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor,
      trpc: { abortOnUnmount: true },
    }
  )

  return (
    <div className={style.page}>
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
        activities.data && (
          <ActivityList
            list={activities.data.pages.reduce<ActivityCardProps[]>(
              (acc, page) => {
                return [
                  ...acc,
                  ...page.items.map((item) => {
                    return { name: item.name, type: item.type, id: item.id }
                  }),
                ]
              },
              []
            )}
          />
        )
      )}
      {activities.hasNextPage && (
        <div className={style.more}>
          <Button onClick={() => activities.fetchNextPage()}>Load more</Button>
        </div>
      )}
    </div>
  )
}
