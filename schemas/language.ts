import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

import chapterType from './chapter'

export default defineType({
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'chapter',
      title: 'Chapter',
      type: 'reference',
      to: [{ type: 'reference', to: [{ type: chapterType.name }] }],
    }),
    ,
  ],
})
