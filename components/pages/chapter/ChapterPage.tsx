import AlertBanner from 'components/elements/AlertBanner'
import Loading from 'components/elements/Loading'
import { chapterType } from 'lib/types'

export default function ChapterPage({
  preview = false,
  loading,
  data,
}: {
  preview?: boolean
  loading?: boolean
  data: chapterType
}) {
  return (
    <>
      <div className="min-h-screen">
        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>
        <Sidebar children={<div></div>} />
        <Footer />
      </div>
    </>
  )
}
