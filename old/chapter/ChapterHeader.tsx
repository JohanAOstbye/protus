import Avatar from 'old/AuthorAvatar'


import type { Chapter } from 'lib/sanity.queries'
import ChapterTitle from './ChapterTitle'
import CoverImage from 'old/CoverImage'

export default function ChapterHeader(
  props: Pick<Chapter, 'title' | 'coverImage' | 'date' | 'author' | 'slug'>
) {
  const { title, coverImage, date, author, slug } = props
  return (
    <>
      <ChapterTitle>{title}</ChapterTitle>
      <div className="hidden md:mb-12 md:block">
        {author && <Avatar name={author.name} picture={author.picture} />}
      </div>
      <div className="mb-8 sm:mx-0 md:mb-16">
        <CoverImage title={title} image={coverImage} priority slug={slug} />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mb-6 block md:hidden">
          {author && <Avatar name={author.name} picture={author.picture} />}
        </div>
       
      </div>
    </>
  )
}
