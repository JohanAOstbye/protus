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
  settings: Settings
}) {
  const { preview, loading, settings } = props
  const { title = demo.title, description = demo.description } = settings || {}

  return (
    <>
      <Layout preview={preview} loading={loading}>
        <Container>
          <BlogHeader title={title} description={description} level={1} />
        </Container>
      </Layout>
    </>
  )
}
