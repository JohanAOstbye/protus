import Avatar from 'old/AuthorAvatar'

import type { Chapter } from 'lib/sanity.queries'
import Link from 'next/link'
import CoverImage from 'old/CoverImage'

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
     
      {excerpt && <p className="mb-4 text-lg leading-relaxed">{excerpt}</p>}
      {author && <Avatar name={author.name} picture={author.picture} />}
    </div>
  )
}
