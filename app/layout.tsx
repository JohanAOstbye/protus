import { QueryClient, QueryClientProvider } from 'react-query'
import { Session } from 'next-auth'
import { headers } from 'next/headers'
import Layout from 'components/layout'
import 'styles/utils/_global.scss'
import ContextWrapper from 'components/context/ContextWrapper'
import { Suspense } from 'react'
import Loading from 'components/elements/Loading'
import { getCourses } from 'lib/sanity/sanity.client'

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/session`, {
    headers: {
      cookie,
    },
  })

  const session = await response.json()

  return Object.keys(session).length > 0 ? session : null
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession(headers().get('cookie') ?? '')
  const courses = await getCourses()
  return (
    <html lang="en">
      <head />
      <body>
        <ContextWrapper session={session}>
          <Layout courses={courses}>
            <Suspense fallback={<Loading />}>{children}</Suspense>
          </Layout>
        </ContextWrapper>
      </body>
    </html>
  )
}
