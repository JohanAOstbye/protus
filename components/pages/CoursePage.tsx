import { Content } from 'components/blocks/Content'
import { UpdateCourse } from 'components/context/Update'
import { courseType } from 'lib/types/sanity'
import style from 'styles/pages/_coursePage.module.scss'

const CoursePage = ({
  preview = false,
  loading,
  course,
}: {
  preview?: boolean
  loading?: boolean
  course: courseType
}) => {
  return (
    <div className={style.page}>
      <UpdateCourse course={course} />
      {course ? (
        <>
          <h1>{course.title}</h1>
          <Content value={course.content || []} />
        </>
      ) : (
        <h1>Course not found</h1>
      )}

      {JSON.stringify(course)}
    </div>
  )
}

export default CoursePage
