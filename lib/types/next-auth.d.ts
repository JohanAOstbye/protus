import { DefaultSession, DefaultUser } from 'next-auth'
import { UserRole } from '@prisma/client'

// common interface for JWT and Session
interface IUser extends DefaultUser {
  name?: string
  roles?: UserRole[]
}
declare module 'next-auth' {
  interface User extends IUser {}
  interface Session {
    user?: User
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
