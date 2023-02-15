import Link from "next/link"
import style from "styles/components/_navbar.module.scss"
import Loading from "components/elements/Loading"
import { getCourses } from "lib/sanity.client"

const Navbar = ({ courses }) => {

 


  //const {isLoading, isError, data, error} = useQuery('courses', )
  
  //if(isLoading) return <Loading/>

  //if(isError) return <span>Error: {JSON.stringify(error,null)}</span> // PREVIOUS .stringify(error,2,null)
  
    return <ul className={style.container}>
      <li className={style.protus}>ProTus </li>
      <li>|</li>
      <li className={style.coursesDrop}> COURSES #
        <ul>
          {courses.map((course,i)=><li key={i}><Link href={`${course.name}`} >{course.name}</Link></li>)}
        </ul>
      </li>
    </ul>
  }




export default Navbar

