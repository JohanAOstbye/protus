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
        {/* <SearchIcon /> */}
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5 14H14.71L14.43 13.73C15.4439 12.554 16.0011 11.0527 16 9.5C16 8.21442 15.6188 6.95772 14.9046 5.8888C14.1903 4.81988 13.1752 3.98676 11.9874 3.49479C10.7997 3.00282 9.49279 2.87409 8.23192 3.1249C6.97104 3.3757 5.81285 3.99477 4.90381 4.90381C3.99477 5.81285 3.3757 6.97104 3.1249 8.23192C2.87409 9.49279 3.00282 10.7997 3.49479 11.9874C3.98676 13.1752 4.81988 14.1903 5.8888 14.9046C6.95772 15.6188 8.21442 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
            fill="currentColor"
          />
        </svg>
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
