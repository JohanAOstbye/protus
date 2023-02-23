import { PortableText } from '@portabletext/react'
import DescriptionBlock from './DescriptionBlock'

const customComponents = {
  types: {
    descriptionBlock: DescriptionBlock,
  },
}

export function Content({ value }: React.ComponentProps<typeof PortableText>) {
  return (
    <PortableText
      value={value}
      components={{ types: { descriptionBlock: DescriptionBlock } }}
    />
  )
}

// import { PortableText } from "@portabletext/react"
// import DescriptionBlock from "components/blocks/DescriptionBlock"
// import { Block } from "lib/types/componentTypes"
// import React from "react"

// interface ContentProps {
//   blocks: Block[]
// }

// // Add allowed components here
// const Components: { [key: string]: any } = {
//     block:PortableText,
//     descriptionBlock:DescriptionBlock
// }

// // TODO: Spacing between items

// export const Content = ({ blocks }: ContentProps) => (
//   <div className='component-list'>
//     {blocks &&
//       blocks.map((block, i) =>
//         Components[block.name] === undefined ? (
//           <div key={i}>
//             Component <b>'{block.name}'</b> is not supported
//           </div>
//         ) : (
//           block.data &&
//           React.createElement(Components[block.name], {
//             ...{ ...block.data, key: i },
//           })
//         ),
//       )}
//   </div>
// )
