'use-client'
import AlertBanner from 'components/elements/AlertBanner'
import { chapterType } from 'lib/types/sanity'
import { Content } from 'components/blocks/Content'

const ChapterPage = ({
  preview = false,
  loading,
  data,
}: {
  preview?: boolean
  loading?: boolean
  data: chapterType
}) => {
  return (
    <>
      {preview && <AlertBanner loading={loading} />}
      <main>
        {data && data.content ? (
          <Content value={data.content} />
        ) : (
          <div>content missing</div>
        )}
      </main>
    </>
  )
}

export default ChapterPage
