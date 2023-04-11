import { PortableText } from '@portabletext/react'
import DescriptionBlock from './DescriptionBlock'
import style from 'styles/components/_content.module.scss'

export function Content({ value }: React.ComponentProps<typeof PortableText>) {
  return (
    <div className={style.content}>
      <PortableText
        value={value}
        components={{ types: { descriptionBlock: DescriptionBlock } }}
      />
    </div>
  )
}
