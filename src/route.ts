/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes: string[] = [
    '/',
    '/about',
    '/blog',
    '/contact',
    '/faq',
    '/help',
    '/parent',
    '/payment',
    '/conference-Registration',
    '/terms-of-service',
    '/privacy-and-policy',
    '/student',
    '/teachers',
    '/status',
    '/blog/:id',
    '/blog/details',
    '/pricing',
    '/changelog',
  ]
  
  /**
   * An array of routes that are used for authentication
   * These routes will redirect logged in users to /settings
   * @type {string[]}
   */
  export const authRoutes: string[] = [
    '/login',
    '/signup',
    '/members-Registration',
    '/loginTwo',
    '/registerTwo',
    '/reset-password',
    '/invite',
    '/parent/invite',
    '/forgot-password',
    '/new-password',
  ]
  
  /**
   * The prefix for API authentication routes
   * Routes that start with this prefix are used for API authentication purposes
   * @type {string}
   */
  export const apiAuthPrefix: string = '/api/auth'
  
  /**
   * The default redirect path after logging in
   * @type {string}
   */
  export const DEFAULT_LOGIN_REDIRECT: string = '/dashboard'
  