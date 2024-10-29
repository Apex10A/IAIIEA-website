// auth.ts
import NextAuth, { Session, type DefaultSession } from 'next-auth'
import authConfig from './configs/auth.config'
import { User } from './types'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      f_name: string
      l_name: string
      m_name: string
      email: string
      phone: string
      registration: string
      membership_due_date: string
      google_login?: boolean
    } & DefaultSession['user']
    access_token: string
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  unstable_update,
} = NextAuth(authConfig)