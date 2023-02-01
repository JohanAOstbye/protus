
import Layout from 'app/layout'
import * as demo from 'lib/demo.data'
import type { Chapter, Settings } from 'lib/sanity.queries'
import BlogHeader from './BlogHeader'
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
      <Layout >
      
          <BlogHeader title={title} description={description} level={1} />
      
      </Layout>
    </>
  )
}
