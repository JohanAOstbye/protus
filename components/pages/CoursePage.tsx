import AlertBanner from 'components/elements/AlertBanner'
import CourseChip from 'components/elements/CourseCard'
import { courseType } from 'lib/types/sanity'
import style from 'styles/pages/_coursePage.module.scss'

const FrontPage = ({
  preview = false,
  loading,
  data,
}: {
  preview?: boolean
  loading?: boolean
  data: courseType[]
}) => {
  return (
    <div className={style.container}>
      <div className={style.title}>Courses</div>
      {preview && <AlertBanner loading={loading} />}
      <main className={style.courses}>
        {data && data.map((course) => <CourseChip name={course.name} />)}
      </main>
    </div>
  )
}

export default FrontPage
