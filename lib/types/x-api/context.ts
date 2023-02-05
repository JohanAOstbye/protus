import { z } from 'zod'
import { actor, group } from './actor'
import { activity } from './object'
import { languageTag, extensions } from '.'

const contextActivitiesObject = z.map(
  z
    .literal('Parent')
    .or(z.literal('Grouping'))
    .or(z.literal('Category'))
    .or(z.literal('Other')),
  activity.or(z.array(activity))
)

export const context = z.object({
  registration: z.string().uuid().optional(),
  instructor: actor.optional(),
  team: group.optional(),
  contextActivities: contextActivitiesObject.optional(),
  revision: z.string().optional(),
  platform: z.string().optional(),
  language: languageTag.optional(),
  statment: z.string().uuid().optional(),
  extensions: extensions.optional(),
})
