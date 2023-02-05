import { z } from 'zod'
import { agent, group } from './actor'

export const authority = agent.or(
  group.refine((data) => data.member.length == 2)
)
