import Link from "next/link"
import style from "styles/components/_navbar.module.scss"
import { courseType } from "lib/types/sanity"

const Navbar = ({ courses, selectedCourse }:{courses:courseType[], selectedCourse:courseType}) => {
  
  const courseList = courses.filter((course) => course.name != selectedCourse.name) 

  return <ul className={style.container}>
    <li className={style.protus}>ProTus </li>
    <li className={style.lineSeperator}>|</li>
    <div className={style.courseContainer}>
      <label className={style.courseText}>Course</label>
    <li>{selectedCourse.name}
      <ul>
        {courseList.map((course,i)=><li key={i}><Link href={`${course.name}`} >{course.name}</Link></li>)}
      </ul>
    </li>
    </div>
  </ul>
  }

export default Navbar

