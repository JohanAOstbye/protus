'use-client'
import AlertBanner from 'components/elements/AlertBanner'
import { chapterType } from 'lib/types/sanity'
import { Content } from 'components/blocks/Content'
import { useCourse } from 'components/context/courseContext'

const ChapterPage = ({
  preview = false,
  loading,
  data,
}: {
  preview?: boolean
  loading?: boolean
  data: chapterType
}) => {
  const { course, updateCourse } = useCourse()
  return (
    <article>
      {preview && <AlertBanner loading={loading} />}

      {data && data.content ? (
        <Content value={data.content} />
      ) : (
        <div>content missing</div>
      )}
    </article>
  )
}

export default ChapterPage
