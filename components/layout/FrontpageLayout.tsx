import { Button } from 'components/elements/Button'
import { ProtusLabel } from 'components/elements/ProtusLabel'
import style from 'styles/pages/_frontpageLayout.module.scss'
import frontpageImage from 'lib/assets/icons/frontpageImage.svg'
import 'styles/utils/_global.scss'

export const Layout = () => {
  return (
    <>
      <div className={style.navText}>
        <ProtusLabel />
      </div>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.welcome}>Welcome to</div>
          <div className={style.protusV}>ProTus v4?</div>
          <div className={style.desc}>
            A programming tutoring systemdesigned for learners with no
            programming experience.
          </div>
          <div className={style.btn}>
            <Button text="Login"></Button>
          </div>
        </div>
        <img
          className={style.image}
          src={frontpageImage}
          alt="online learning image"
        />
      </div>
    </>
  )
}

export default Layout
