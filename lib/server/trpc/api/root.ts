import { activitiesRouter } from './router/activities'
import { adminRouter } from './router/admin'
import { stateRouter } from './router/state'
import { userRouter } from './router/user'
import { createTRPCRouter } from './trpc'

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  activities: activitiesRouter,
  state: stateRouter,
  user: userRouter,
  admin: adminRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
