import { NextResponse } from 'next/server'
import { auth } from './auth'
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT,
  publicRoutes,
} from './route'

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = Boolean(req.auth)
  const pathname = nextUrl.pathname

  // Allow access to API auth routes and public routes without authentication
  if (pathname.startsWith(apiAuthPrefix) || publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  // Redirect logged-in users away from auth routes (e.g., login page)
  if (authRoutes.includes(pathname)) {
    return isLoggedIn
      ? NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
      : NextResponse.next()
  }

  // If not logged in and not accessing a public route, redirect to login
  if (!isLoggedIn) {
    const callbackUrl = nextUrl.search
      ? `${pathname}${nextUrl.search}`
      : pathname
    const loginUrl = new URL(
      `/login?callbackUrl=${encodeURIComponent(callbackUrl)}`,
      nextUrl
    )

    return NextResponse.redirect(loginUrl)
  }

  // Allow access to all other routes for logged-in users
  return NextResponse.next()
})

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
