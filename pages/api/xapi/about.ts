import { defineEndpoints } from 'lib/server/rest'
import { z } from 'zod'

defineEndpoints({
  GET: {
    input: {
      contentType: 'application/json',
      body: undefined,
      query: undefined,
    },
    output: [
      {
        status: 200,
        contentType: 'application/json',
        schema: z.object({
          version: z.array(z.string()),
          extensions: z.record(z.string(), z.any()).optional(),
        }),
      },
    ],
    handler: async ({ res }) => {
      res.status(200).json({
        version: ['1.0.0'],
      })
    },
  },
})
