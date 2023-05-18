'use client'
import BarChart from 'components/elements/BarChart'
import Loading from 'components/elements/Loading'
import { trpc } from 'lib/server/trpc/provider'
import {
  averageDuration,
  durationToMinutes,
  durationToSeconds,
  durationToString,
  totalDuration,
} from 'lib/time'
import React from 'react'
import { serialize } from 'tinyduration'

export const AdminPage = () => {
  const statements = trpc.admin.statements.useQuery()
  if (statements.status === 'loading') return <Loading />
  const { data: times } = statements
  if (!times) return <div>no data</div>

  return (
    <div>
      <h1>Times</h1>
      <div>
        <div>
          <h2>total time spent on the site</h2>
          <p>
            {durationToString(
              totalDuration(
                times.reduce((acc, time) => {
                  return acc.concat(...time.durations)
                }, [] as string[])
              )
            )}
          </p>
        </div>
        <div>
          <h2>amount of statements</h2>
          <p>{times.length}</p>
        </div>
        <div>
          <h2>average total time spent per user</h2>
          <p>
            {durationToString(
              averageDuration(
                times.reduce((acc, time) => {
                  return acc.concat(...time.durations)
                }, [] as string[]),
                51
              )
            )}
          </p>
        </div>
        <div>
          <h2>average time page time for users</h2>
          <p>
            {durationToString(
              averageDuration(
                times.reduce((acc, time) => {
                  return acc.concat(...time.durations)
                }, [] as string[])
              )
            )}
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>page\device</th>
              <th>mobile</th>
              <th>tablet</th>
              <th>desktop</th>
              <th>total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>course</td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.mobile.page.course)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.tablet.page.course)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.desktop.page.course)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(
                        ...time.devices.desktop.page.course,
                        ...time.devices.tablet.page.course,
                        ...time.devices.mobile.page.course
                      )
                    }, [] as string[])
                  )
                )}
              </td>
            </tr>
            <tr>
              <td>chapter</td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.mobile.page.chapter)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.tablet.page.chapter)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.desktop.page.chapter)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(
                        ...time.devices.desktop.page.chapter,
                        ...time.devices.tablet.page.chapter,
                        ...time.devices.mobile.page.chapter
                      )
                    }, [] as string[])
                  )
                )}
              </td>
            </tr>
            <tr>
              <td>activity</td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.mobile.page.activity)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.tablet.page.activity)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.desktop.page.activity)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(
                        ...time.devices.desktop.page.activity,
                        ...time.devices.tablet.page.activity,
                        ...time.devices.mobile.page.activity
                      )
                    }, [] as string[])
                  )
                )}
              </td>
            </tr>
            <tr>
              <td>total</td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.mobile.total)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.tablet.total)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(...time.devices.desktop.total)
                    }, [] as string[])
                  )
                )}
              </td>
              <td>
                {durationToSeconds(
                  averageDuration(
                    times.reduce((acc, time) => {
                      return acc.concat(
                        ...time.devices.desktop.total,
                        ...time.devices.tablet.total,
                        ...time.devices.mobile.total
                      )
                    }, [] as string[])
                  )
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        {/* <BarChart
          data={times.map((time) => ({
            id: time.actorid,
            mobile: durationToMinutes(totalDuration(time.devices.mobile)),
            tablet: durationToMinutes(totalDuration(time.devices.tablet)),
            desktop: durationToMinutes(totalDuration(time.devices.desktop)),
          }))}
          keys={['mobile', 'tablet', 'desktop']}
          indexBy={'id'}
        />
        <BarChart
          data={times.map((time) => ({
            id: time.actorid,
            course: durationToMinutes(totalDuration(time.page.course)),
            chapter: durationToMinutes(totalDuration(time.page.chapter)),
            activity: durationToMinutes(totalDuration(time.page.activity)),
          }))}
          keys={['course', 'chapter', 'activity']}
          indexBy={'id'}
        /> */}
      </div>
    </div>
  )
}
