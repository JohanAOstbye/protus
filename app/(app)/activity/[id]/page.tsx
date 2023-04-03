import { ActivityPage } from 'components/pages/activity/ActivityPage'
import React from 'react'
import { prisma } from 'lib/server/db'

const Page = async ({ params }: { params: { id: string } }) => {
  const activity = await prisma.activity.findUnique({
    where: { id: params.id },
  })
  return <ActivityPage activity={activity} />
}

export default Page
