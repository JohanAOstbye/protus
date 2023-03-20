import { createTRPCRouter } from "./trpc";
// import { exampleRouter } from "./routers/example"; //TODO create a similar one

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
    // example: exampleRouter, //TODO create a similar one
});

// export type definition of API
export type AppRouter = typeof appRouter;