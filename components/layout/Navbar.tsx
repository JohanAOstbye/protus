import Link from 'next/link'
import style from 'styles/layout/_navbar.module.scss'
import { courseType } from 'lib/types/sanity'
import ProtusLabel from 'components/elements/ProtusLabel'

export const Navbar = ({
  courses,
  selectedCourse,
}: {
  courses?: courseType[]
  selectedCourse?: courseType
}) => {
  return (
    <div className={style.container}>
      <ProtusLabel />
      {courses && selectedCourse && (
        <>
          <div className={style.lineSeperator}>|</div>
          <div className={style.courseContainer}>
            <label className={style.courseText}>Course</label>
            <div className={style.thisCourse}>
              {selectedCourse.name}
              <ul className={style.test}>
                {courses
                  .filter((course) => course.name != selectedCourse.name)
                  .map((course, i) => (
                    <li className={style.listItems} key={i}>
                      <Link href={`${course.name}`}>{course.name}</Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar
