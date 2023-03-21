'use client'
import { trpc } from 'lib/server/trpc/provider'

export const Loader = () => {
  const test = trpc.activities.get.useQuery()
  if (test.isLoading || !test.data) <div>moren din </div>
  console.log('loader', test.data?.version)

  return <div>øøøøhhh {JSON.stringify(test.data)}</div>
}
