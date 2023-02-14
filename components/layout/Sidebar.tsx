import { title } from 'lib/sanity/demo.data'
import { Chapter } from 'lib/sanity/sanity.queries'
import Link from 'next/link'
import chapter from 'schemas/chapter'
import style from 'styles/components/_sidebar.module.scss'

const Sidebar = ({
  chapters,
  courseSlug,
}: {
  chapters: { title: string; slug: string }[]
  courseSlug: string
}) => {
  return (
    <ul className={style.sidebar}>
      {chapters.map((chapter, i) => (
        <li key={i}>
          <Link href={`${courseSlug}/${chapter.slug}`}>{chapter.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
