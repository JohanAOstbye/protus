'use client'
import { usePreview } from 'lib/sanity.preview'
import {
  type Chapter,
  type Settings,
  chapterAndMoreStoriesQuery,
  settingsQuery,
} from 'lib/sanity.queries'
import ChapterPage from './chapter/ChapterPage'

export default function PreviewChapterPage({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const data: { chapter: Chapter; moreChapters: Chapter[] } = usePreview(
    token,
    chapterAndMoreStoriesQuery,
    {
      slug,
    }
  ) || { chapter: null, moreChapters: [] }
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <ChapterPage preview data={data} settings={settings} />
}
