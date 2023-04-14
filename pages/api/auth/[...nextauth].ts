import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import * as bcrypt from 'bcrypt'

import { prisma } from 'lib/server/db'

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin',
    // signOut: '/auth/signout',
    error: '/auth/error',
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },
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
        verifyPassword: { label: 'Verify Password', type: 'password' },
        isRegister: { label: 'Register', type: 'checkbox' },
      },
      async authorize(credentials, req) {
        if (!credentials) return null

        let user = await prisma.user.findUnique({
          where: { email: credentials.email },
        })
        if (user === null && credentials.isRegister) {
          if (credentials.password !== credentials.verifyPassword) {
            throw new Error('Passwords do not match')
          }
          const hash = await bcrypt.hash(credentials.password, 10)
          user = await prisma.user.create({
            data: {
              email: credentials.email,
              password: hash,
            },
          })

          return user
        }
        if (user === null) {
          throw new Error('User not found')
        }

        if (user.password === null) {
          throw new Error('User is not a credentials user')
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
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      console.log('jwt', token, user)
      if (trigger === 'update' && session?.code) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token.code = session.code
      }
      if (user) {
        token.password = undefined
        token.picture = undefined
        token = {
          ...token,
          ...user,
        }
      }

      return token
    },
    async session({ session, token }) {
      token.sub = undefined
      token.iat = undefined
      token.exp = undefined
      token.jti = undefined
      token.password = undefined
      token.picture = undefined

      session.user = token

      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}

export default NextAuth(authOptions)
