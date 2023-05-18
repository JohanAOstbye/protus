import Link from 'next/link'
import React from 'react'
import style from 'styles/layout/_adminLayout.module.scss'

export const AdminLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    // <div className={style.layout}>
    //   <div className={style.sidebar}>
    //     <h1>Usage</h1>
    //     <ul>
    //       <li>
    //         <Link href={'/admin/time'}>time</Link>
    //       </li>
    //       <li>
    //         <Link href={'/admin/devices'}>devices</Link>
    //       </li>
    //     </ul>
    //   </div>
    <div className={style.content}>{children}</div>
    // </div>
  )
}

export default AdminLayout
