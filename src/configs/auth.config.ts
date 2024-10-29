// auth.config.ts
import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "@/schema"
import { loginUser } from "@/action/auth"
import { title } from "process"

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)
        
        if (!validatedFields.success) {
          return null
        }

        const { uid, password } = validatedFields.data

        try {
          const response = await loginUser({ uid, password })
          
          if (response.status !== 200) {
            return null
          }

          // Extract user data from the API response
          const userData = response.user.data.user_data
          
          return {
            id: response.user.data.token,
            f_name: userData.f_name,
            l_name: userData.l_name,
            m_name: userData.m_name,
            email: userData.email,
            phone: userData.phone,
            registration: userData.registration,
            membership_due_date: userData.membership_due_date,
            access_token: response.user.data.token
          }
        } catch (error) {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          f_name: user.f_name,
          l_name: user.l_name,
          m_name: user.m_name,
          email: user.email,
          phone: user.phone,
          registration: user.registration,
          membership_due_date: user.membership_due_date,
          access_token: user.access_token
        }
      }
      return token
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
          f_name: token.f_name,
          l_name: token.l_name,
          m_name: token.m_name,
          email: token.email,
          phone: token.phone,
          registration: token.registration,
          membership_due_date: token.membership_due_date,
        },
        pending_payments: {
          
          title: token.title,
        },
        access_token: token.access_token
      }
    }
  },
  pages: {
    signIn: "/login",
    error: "/error",
  },
} satisfies NextAuthConfig