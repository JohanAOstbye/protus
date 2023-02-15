import Link from 'next/link'
import style from 'styles/components/_sidebar.module.scss'

export const Sidebar = ({
  chapters,
  courseSlug,
}: {
  chapters: { title: string; slug: string }[]
  courseSlug: string
}) => {
  console.log(chapters);
  
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
