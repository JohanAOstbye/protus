import React from "react"
import style from "styles/components/_descriptionBlock.module.scss"



export const DescriptionBlock = ({title, content}:{title:string, content:string[]}) => {
    
    return (
        <div className={style.container}>
            <div className={style.titleText}>{title}</div>
                <ul className={style.list}>
                        {content.map( (item, i) => <li className={style.items} key={i}>{item}</li>)}
                </ul>
        </div>
    )
}

export default DescriptionBlock