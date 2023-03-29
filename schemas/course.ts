import { defineField, defineType } from 'sanity'
import {} from '@sanity/icons'

import chapterType from './chapter'
import descriptionBlockType from './blocks/descriptionBlock'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'iconPicker',
      options: {
        outputFormat: 'react',
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: descriptionBlockType.name }],
    }),
    defineField({
      name: 'chapters',
      title: 'Chapters',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: chapterType.name }] }],
    }),
  ],
})
