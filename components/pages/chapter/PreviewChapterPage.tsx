'use client'

import { usePreview } from 'lib/sanity/sanity.preview'
import { Chapter, courseQuery, settingsQuery } from 'lib/sanity/sanity.queries'
import { Settings } from 'sanity'
import ChapterPage from './ChapterPage'

export default function PreviewChapterPage({
  token,
  chapter,
}: {
  token: null | string
  chapter: { course: string }
}) {
  const data: Chapter = usePreview(token, courseQuery, chapter) || null
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <ChapterPage preview data={data}  />
}
