'use client'

import AlertBanner from 'components/elements/AlertBanner'
import { chapterType } from 'lib/types/sanity'
import { Content } from 'components/blocks/Content'
import { UpdateChapter } from 'components/context/Update'

const ChapterPage = ({
  preview = false,
  loading,
  chapter,
  course,
}: {
  preview?: boolean
  loading?: boolean
  chapter: chapterType
  course: string
}) => {
  return (
    <article>
      {preview && <AlertBanner loading={loading} />}

      {chapter && chapter.content ? (
        <>
          <UpdateChapter chapter={chapter} course={course} />
          <Content value={chapter.content} />
        </>
      ) : (
        <div>content missing</div>
      )}
    </article>
  )
}

export default ChapterPage
