import IndexPage from 'components/IndexPage'
import PreviewIndexPage from 'components/PreviewIndexPage'
import { PreviewSuspense } from 'components/PreviewSuspense'
import { getSettings } from 'lib/sanity.client'
import { previewData } from 'next/headers'

export default async function IndexRoute() {
  // Fetch queries in parallel
  const [settings, courses] = await Promise.all([getSettings(), ,])

  if (previewData()) {
    const token = previewData().token || null

    return (
      <PreviewSuspense
        fallback={<IndexPage loading preview settings={settings} />}
      >
        <PreviewIndexPage token={token} />
      </PreviewSuspense>
    )
  }

  return <IndexPage settings={settings} />
}

// FIXME: remove the `revalidate` export below once you've followed the instructions in `/pages/api/revalidate.ts`
export const revalidate = 1
