import AlertBanner from 'components/elements/AlertBanner'
import BlogContainer from 'components/blocks/BlogContainer'
import Sidebar from 'components/layout/Sidebar'
import BlogHeader from 'old/BlogHeader'
import Header from 'components/layout/Header'
import Footer from 'components/layout/Footer'

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
        {/* <BlogHeader title={''} level={1}/> */}
        <Header/>
        <BlogContainer children={<div></div>}/>
        <Sidebar children={<div></div>}/>
        <Footer/>
      </div>
    </>
  )
}
