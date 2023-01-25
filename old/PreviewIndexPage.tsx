'use client'

import IndexPage from 'components/IndexPage'
import { usePreview } from 'lib/sanity.preview'
import { type Settings, settingsQuery } from 'lib/sanity.queries'

export default function PreviewIndexPage({ token }: { token: null | string }) {
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <IndexPage preview settings={settings} />
}
