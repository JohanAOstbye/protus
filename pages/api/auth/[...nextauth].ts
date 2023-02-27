import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import * as bcrypt from 'bcrypt'

import { prisma } from 'lib/server/db'

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id
      }
      return session
    },
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'example@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) return null

        let user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        if (user === null || user.password === null) {
          throw new Error('User not found, or is not a credentials user')
        }
        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        )
        if (!isPasswordCorrect) {
          throw new Error('Password is not correct')
        }
        // Any user object returned here will be saved in the JSON Web Token
        return user
      },
    }),
    CredentialsProvider({
      name: 'credentials-register',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'example@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        if (!credentials) return null

        let user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        if (!user) {
          const hash = await bcrypt.hash(credentials.password, 10)
          user = await prisma.user.create({
            data: {
              email: credentials.email,
              password: hash,
            },
          })
        } else {
          throw new Error('User already exists')
        }
        return user
      },
    }),
  ],
}

export default NextAuth(authOptions)
