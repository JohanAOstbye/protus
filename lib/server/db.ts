import { PrismaClient } from '@prisma/client'

import { PrismaClient as ServerPrismaClient } from 'react-prisma'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['error', 'warn'],
    // process.env.NODE_ENV === 'development'
    //   ? ['query', 'error', 'warn']
    //   : ['error'],
  })

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}
