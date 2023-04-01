import { Activity } from '@prisma/client'
import React from 'react'
import style from 'styles/pages/_activityPage.module.scss'

export const ActivityPage = ({ activity }: { activity: Activity | null }) => {
  if (!activity) return <div>Activity not found</div>
  return (
    <div className={style.page}>
      <h1>{activity.name}</h1>
      <iframe src={activity.url} />
    </div>
  )
}
