import AlertBanner from 'components/elements/AlertBanner'

export default function ChapterLayout({
  preview = false,
  loading,
  children,
}: {
  preview?: boolean
  loading?: boolean
  children: React.ReactNode
}) {
  return (
    <>
      <div className="min-h-screen">
        <AlertBanner preview={preview} loading={loading} />
        <main>{children}</main>
      </div>
    </>
  )
}
