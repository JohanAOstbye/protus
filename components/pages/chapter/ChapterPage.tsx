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
      {preview && <AlertBanner loading={loading} />}
      {!loading && data ? <main>{JSON.stringify(data)}</main> : <Loading />}
    </>
  )
}
