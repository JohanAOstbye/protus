'use client'
import Loading from 'components/elements/Loading'
import { trpc } from 'lib/server/trpc/provider'
import React from 'react'

export const TestPage = () => {
  const contexts = trpc.admin.test.useQuery()
  if (contexts.status === 'loading') return <Loading />
  const { data } = contexts
  if (!data) return <div>no data</div>
  const { chapters, courses, activities } = data

  return (
    <div>
      {JSON.stringify(chapters)}
      {JSON.stringify(courses)}
      {JSON.stringify(activities.length)}
    </div>
  )
}
