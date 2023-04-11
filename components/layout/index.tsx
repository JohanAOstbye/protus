import Navbar from './Navbar'
import style from 'styles/layout/_layout.module.scss'

import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className={style.layout}>
      <Navbar />
      <div className={style.content}>{props.children}</div>
      {/* <Footer /> */}
    </div>
  )
}

export default Layout
