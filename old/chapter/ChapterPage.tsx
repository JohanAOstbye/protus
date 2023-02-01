import Container from 'components/blocks/BlogContainer'
import BlogHeader from 'old/BlogHeader'

import MoreStories from 'old/MoreStories'
import SectionSeparator from 'old/SectionSeparator'
import * as demo from 'lib/demo.data'
import type { Chapter, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'
import ChapterBody from './ChapterBody'
import ChapterHeader from './ChapterHeader'
import ChapterTitle from './ChapterTitle'
import Layout from 'app/layout'

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
    <Layout >
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
