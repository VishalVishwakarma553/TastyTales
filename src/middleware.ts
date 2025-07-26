import { clerkMiddleware } from '@clerk/nextjs/server'

// It just move to the signin page if user is not logged in
// const isPublicRoute = createRouteMatcher(['/sign-in(.*)'])
// wrap this up in the clerk middleware bracket
// async (auth, req) => {
//   if (!isPublicRoute(req)) {
//     await auth.protect()
//   }
// }

export default clerkMiddleware()

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}