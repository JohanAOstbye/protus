import { activitiesRouter } from './router/activities'
import { createTRPCRouter } from './trpc'
// import { exampleRouter } from "./routers/example"; //TODO create a similar one

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  activities: activitiesRouter,
})

// export type definition of API
export type AppRouter = typeof appRouter
