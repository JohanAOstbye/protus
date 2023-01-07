import Container from 'components/BlogContainer'
import BlogHeader from 'components/BlogHeader'
import Layout from 'components/BlogLayout'
import MoreStories from 'components/MoreStories'
import * as demo from 'lib/demo.data'
import type { Chapter, Settings } from 'lib/sanity.queries'
import HeroChapter from './HeroChapter'

export default function IndexPage(props: {
  preview?: boolean
  loading?: boolean
  chapters: Chapter[]
  settings: Settings
}) {
  const { preview, loading, chapters, settings } = props
  const [heroChapter, ...moreChapters] = chapters || []
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
          {heroChapter && (
            <HeroChapter
              title={heroChapter.title}
              coverImage={heroChapter.coverImage}
              date={heroChapter.date}
              author={heroChapter.author}
              slug={heroChapter.slug}
              excerpt={heroChapter.excerpt}
            />
          )}
          {moreChapters.length > 0 && <MoreStories chapters={moreChapters} />}
        </Container>
      </Layout>
    </>
  )
}
