'use client'
import { useSession } from 'next-auth/react'
import Profile from 'lib/assets/images/profile.svg'
import style from 'styles/pages/_profilePage.module.scss'
import { useEffect, useState } from 'react'
import { Input } from 'components/elements/Input'
import { Session } from 'next-auth'
import Loading from 'components/elements/Loading'
import { Button } from 'components/elements/Button'
export const ProfilePage = () => {
  const { data: session, status } = useSession({ required: true })
  const [user, setUser] = useState<Session['user'] | undefined>(undefined)

  useEffect(() => {
    if (session) setUser(session.user)
    return () => setUser(undefined)
  }, [session])

  return (
    <div className={style.page}>
      {session && session.user ? (
        user ? (
          <>
            <div className={style.image}>
              {user.image ? <img src={user.image} /> : <Profile />}
            </div>
            <div className={style.details}>
              <h1>Profile</h1>
              <Input
                value={user.name || ''}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                color="dark"
              />
              <Input
                value={user.email || ''}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                color="dark"
              />
              <div>
                <Button>Save</Button>
              </div>
            </div>
          </>
        ) : (
          <Loading />
        )
      ) : (
        <div>Not logged in</div>
      )}
    </div>
  )
}
