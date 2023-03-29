import { SignInPage } from 'components/pages/auth/SignInPage'

const SignIn = async () => {
  const csrfTokenResponse = await fetch(
    `${process.env.NEXTAUTH_URL}/api/auth/csrf`
  )
  const csrfToken = await csrfTokenResponse.json()
  return <SignInPage csrfToken={csrfToken} />
}
export default SignIn
