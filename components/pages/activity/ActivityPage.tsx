'use client'

import { Activity } from '@prisma/client'
import { useXapi } from 'components/context/XapiContext'
import { useTimedStatement } from 'components/hooks/useTimedStatement.hook'
import { getDeviceCategory } from 'lib/types/x-api/functions'
import { useSession } from 'next-auth/react'
import React, { useEffect, useRef, useState } from 'react'
import style from 'styles/pages/_activityPage.module.scss'

export const ActivityPage = ({ activity }: { activity: Activity | null }) => {
  if (!activity) return <div>Activity not found</div>
  const ref = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)
  const { data: session, status } = useSession({ required: true })
  const { recordStatment } = useXapi()

  useTimedStatement((duration) => {
    if (status === 'authenticated' && session && session.user) {
      recordStatment({
        object: {
          objectType: 'Activity',
          id: `https://protus.vercel.app/activity/${activity.id}`,
          definition: {
            name: {
              en: activity.name,
            },
            description: {
              en: activity.name,
            },
            type: 'http://adlnet.gov/expapi/activities/' + activity.type,
            moreInfo: activity.url,
          },
        },
        actor: {
          objectType: 'Agent',
          name: session.user.name === null ? undefined : session.user.name,
          mbox: `mailto:${session.user.email}`,
        },
        verb: {
          id: 'http://adlnet.gov/expapi/verbs/viewed',
          display: {
            en: 'viewed',
          },
        },
        result: {
          duration: duration,
        },
        context: {
          platform: `${getDeviceCategory(
            window.innerWidth,
            window.innerHeight
          )} ${window.navigator.userAgent}`,
        },
      })
    }
  })

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
      {activity.url.startsWith('https://') ? (
        <iframe src={activity.url} height={height} width="100%" />
      ) : (
        <div>
          Our activity api doesnt seem to use https. please click{' '}
          <a href={activity.url}>here</a> to access the activity
        </div>
      )}
    </div>
  )
}
