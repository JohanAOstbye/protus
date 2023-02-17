import Link from 'next/link'
import style from 'styles/components/_sidebar.module.scss'
import { courseType } from 'lib/types/sanity';
import { useState } from 'react';

export const Sidebar = ({
  chapters,
  courseSlug,
  // course
  closed,
}: {
  chapters: { title: string; slug: string }[]
  courseSlug: string
  closed: boolean
  // course:courseType
}) => {

  const [isOpen, setIsopen] = useState(false);

    const Sidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
        console.log(isOpen);
        
    }

  // console.log(chapters);
  // console.log(course);
  // console.log(courseSlug);
  const course = courseSlug

  
  
  // if (closed === false)
  return (
    <div >
      <>
        {/* <div className="btnSome" onClick={Sidebar} ></div> */}
        {/* <div className={`sidebar ${isOpen == true ? 'active' : ''}`}></div> */}
      </>
      <ul className={style.sidebar}>
        <div>
          <label className={style.currentCourse}>{courseSlug.toLocaleUpperCase()}</label>
          <a onClick={Sidebar} className={style.closebtn}></a>
        </div>
        {chapters.map((chapter, i) => (
          <li key={i}>
            <Link href={`${courseSlug}/${chapter.slug}`}>{chapter.title}</Link>
          </li>
        ))}
      </ul>
      {/* <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={Sidebar}></div> */}
    </div>
  )
  // else return (
  //   <div>
  //     <a href="" className={style.close}></a>
  //   </div>
  // )
}

export default Sidebar
