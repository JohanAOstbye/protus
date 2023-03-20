import { Button } from 'components/elements/Button'
import ProtusLabel from 'components/elements/ProtusLabel'
import FrontPageImage from 'lib/assets/images/frontpageimage.svg'
import style from 'styles/pages/_frontPage.module.scss'
const FrontPage = () => {
  return (
    <div className={style.page}>
      <div className={style.intro}>
        <h2>Welcome to</h2>
        <ProtusLabel />
        <p>
          A programming tutoring systemdesigned for learners with no programming
          experience.
        </p>
      </div>
      <div className={style.button}>
        <Button text="Login"></Button>
      </div>
      <FrontPageImage />
    </div>
  )
}

export default FrontPage
