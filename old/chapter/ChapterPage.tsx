import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/MoreStories'
import SectionSeparator from 'components/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Chapter, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import ChapterBody from './ChapterBody'
import ChapterHeader from './ChapterHeader'
import ChapterTitle from './ChapterTitle'

export default function ChapterPage(props: {
  preview?: boolean
  loading?: boolean
  data: Chapter
  settings: Settings
}) {
  const { preview, loading, data, settings } = props
  const chapter = data
  const { title = demo.title } = settings || {}

  const slug = chapter?.slug

  console.log('slug:', !slug)
  console.log('preview', !preview)

  if (!slug && !preview) {
    notFound()
  }

  return (
    <Layout preview={preview} loading={loading}>
      <Container>
        <BlogHeader title={title} level={2} />
        {preview && !chapter ? (
          <ChapterTitle>Loading…</ChapterTitle>
        ) : (
          <>
            <article>
              <ChapterHeader
                title={chapter.title}
                coverImage={chapter.coverImage}
                date={chapter.date}
                author={chapter.author}
              />
              <ChapterBody content={chapter.content} />
            </article>
            <SectionSeparator />
            {/* {moreChapters?.length > 0 && (
              <MoreStories chapters={moreChapters} />
            )} */}
          </>
        )}
      </Container>
    </Layout>
  )
}
