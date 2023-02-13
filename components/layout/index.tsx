import { useCourse } from "components/context/course"
import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({children}:{children:React.ReactNode}) => {
  const {course} = useCourse()
  return <div className="layout">
    <Navbar />
    <Sidebar chapters={[]} courseSlug={course.name}/>
    <main>{children}</main>
    <Footer/>
    </div>
}

export default Layout