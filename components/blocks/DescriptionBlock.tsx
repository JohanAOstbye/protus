import React from 'react'
import { Content } from './Content'
import { PortableTextTypeComponent } from '@portabletext/react'
import { TypedObject } from 'sanity'
import style from 'styles/components/_descriptionBlock.module.scss'

export const DescriptionBlock: PortableTextTypeComponent<any> = ({
  value,
}: {
  value: { title: string; content: TypedObject[] }
}) => {
  const { title, content } = value
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <div className={style.content}>
        <Content value={content} />
      </div>
    </div>
  )
}

export default DescriptionBlock
