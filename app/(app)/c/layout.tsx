import Loading from 'components/elements/Loading'
import Layout from 'components/layout/CourseLayout'
import { Suspense } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </Layout>
  )
}
