import React from "react"
import style from "styles/components/_button.module.scss"

const Button = ({children}:{children:React.ReactNode}) => {
     console.log(style);
    
    
    return <button className={style.button}>{children}</button>
}

export default Button