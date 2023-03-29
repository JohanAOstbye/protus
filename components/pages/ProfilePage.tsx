'use client'
import { useSession } from 'next-auth/react'
import Profile from 'lib/assets/images/profile.svg'
import style from 'styles/pages/_profilePage.module.scss'
import { useDeferredValue, useEffect, useState } from 'react'
import { Session } from 'next-auth'
import Loading from 'components/elements/Loading'
import { Button } from 'components/elements/Button'
import { trpc } from 'lib/server/trpc/provider'

export const ProfilePage = () => {
  const { data: session, status } = useSession({ required: true })
  const [user, setUser] = useState<Session['user'] | undefined>(undefined)
  const deferredUser = useDeferredValue(user)

  const mutation = trpc.user.update.useMutation()
  const update = async () => {
    if (deferredUser && user && deferredUser != user) {
      const res = await mutation.mutateAsync({
        name:
          deferredUser.name == user.name || deferredUser.name == null
            ? undefined
            : deferredUser.name,
        email:
          deferredUser.email == user.email || deferredUser.email == null
            ? undefined
            : deferredUser.email,
        image:
          deferredUser.image == user.image || deferredUser.image == null
            ? undefined
            : deferredUser.image,
      })
      console.log(res)
    }
  }

  useEffect(() => {
    if (session) setUser(session.user)
    return () => setUser(undefined)
  }, [session])

  return (
    <div className={style.page}>
      {session && session.user ? (
        deferredUser ? (
          <>
            <div className={style.image}>
              {deferredUser.image ? (
                <img src={deferredUser.image} />
              ) : (
                <Profile />
              )}

              <span
                className={style.editable}
                contentEditable
                onFocus={(e) => {
                  if (e.currentTarget.innerText != deferredUser.image)
                    e.currentTarget.innerText = ''
                }}
                onBlur={(e) => {
                  setUser({
                    ...deferredUser,
                    image: e.currentTarget.textContent,
                  })
                  e.currentTarget.innerText =
                    deferredUser.image || 'imageUrl...'
                }}
              >
                {deferredUser.image || 'imageUrl...'}
              </span>
            </div>
            <div className={style.details}>
              <div className={style.name}>
                <h1>
                  <span
                    className={style.editable}
                    contentEditable
                    onFocus={(e) => {
                      if (e.currentTarget.innerText != deferredUser.name)
                        e.currentTarget.innerText = ''
                    }}
                    onBlur={(e) => {
                      setUser({
                        ...deferredUser,
                        name: e.currentTarget.textContent,
                      })
                      e.currentTarget.innerText = deferredUser.name || 'Name...'
                    }}
                  >
                    {deferredUser.name || 'Name...'}
                  </span>
                </h1>
                {deferredUser.roles?.map((role) => (
                  <span>{role.toLocaleLowerCase()}</span>
                ))}
              </div>

              <span
                className={style.editable}
                contentEditable
                onFocus={(e) => {
                  if (e.currentTarget.innerText != deferredUser.email)
                    e.currentTarget.innerText = ''
                }}
                onBlur={(e) => {
                  setUser({
                    ...deferredUser,
                    email: e.currentTarget.textContent,
                  })
                  e.currentTarget.innerText = deferredUser.email || 'Email...'
                }}
              >
                {deferredUser.email || 'Email...'}
              </span>
              <div>
                <Button onClick={() => update()}>Save</Button>
              </div>
              {/* {JSON.stringify(deferredUser)} */}
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
