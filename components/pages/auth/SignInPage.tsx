'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from 'components/elements/Button'
import { Input } from 'components/elements/Input'
import Link from 'next/link'
import style from 'styles/pages/_signInPage.module.scss'

export const SignInPage = ({ csrfToken }: { csrfToken: string }) => {
  const [isRegister, setRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')

  const signin = async () => {
    await signIn('credentials', {
      email,
      password,
      callbackUrl: '/',
      isRegister: false,
      verifyPassword: '',
    })
  }

  const register = async () => {
    await signIn('credentials', {
      email,
      password,
      verifyPassword,
      isRegister: true,
      callbackUrl: '/',
    })
  }

  return (
    <div className={style.content}>
      <h1 className={style.title}>Login</h1>
      <Input
        type="email"
        id="email"
        name="email"
        value={email}
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        id="password"
        name="password"
        value={password}
        placeholder="Password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      {isRegister ? (
        <>
          <Input
            type="password"
            id="password"
            name="passwordVerify"
            value={verifyPassword}
            placeholder="Verify password..."
            onChange={(e) => setVerifyPassword(e.target.value)}
          />
          <span className={style.separator} />
          <Button onClick={() => register()}>Register</Button>
        </>
      ) : (
        <>
          <Link
            href={'/auth/forgotPassword'}
            className={`${style.link} ${style.separator}`}
          >
            <span>Forgot password?</span>
          </Link>
          <Button onClick={() => signin()}>Sign in</Button>
        </>
      )}
      <Button onClick={() => setRegister(!isRegister)}>
        {isRegister ? 'Sign in' : 'Register'}
      </Button>
    </div>
  )
}
