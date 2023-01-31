import Avatar from 'components/elements/AuthorAvatar'
import Date from 'components/chapter/ChapterDate'
import CoverImage from 'components/CoverImage'
import type { Chapter } from 'lib/sanity.queries'
import Link from 'next/link'

export default function ChapterPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Omit<Chapter, '_id'>) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          image={coverImage}
          priority={false}
        />
      </div>
      <h3 className="mb-3 text-3xl leading-snug">
        <Link href={`/chapters/${slug}`} className="hover:underline">
          {title}
        </Link>
      </h3>
      <div className="mb-4 text-lg">
        <Date dateString={date} />
      </div>
      {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
