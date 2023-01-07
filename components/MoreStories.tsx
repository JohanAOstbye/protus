import ChapterPreview from 'components/chapter/ChapterPreview'
import type { Chapter } from 'lib/sanity.queries'

export default function MoreStories({ chapters }: { chapters: Chapter[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        More Stories
      </h2>
      <div className="mb-32 grid grid-cols-1 gap-y-20 md:grid-cols-2 md:gap-x-16 md:gap-y-32 lg:gap-x-32">
        {chapters.map((chapter) => (
          <ChapterPreview
            key={chapter._id}
            title={chapter.title}
            coverImage={chapter.coverImage}
            date={chapter.date}
            author={chapter.author}
            slug={chapter.slug}
            excerpt={chapter.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
