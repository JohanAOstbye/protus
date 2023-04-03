import { Activity } from '@prisma/client'
import React, { useEffect, useRef, useState } from 'react'
import style from 'styles/pages/_activityPage.module.scss'

export const ActivityPage = ({ activity }: { activity: Activity | null }) => {
  if (!activity) return <div>Activity not found</div>
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight)
    }
    return () => {
      setHeight(0)
    }
  }, [ref.current?.clientHeight])

  return (
    <div className={style.page} ref={ref}>
      <iframe src={activity.url} height={height} width="100%" />
    </div>
  )
}
