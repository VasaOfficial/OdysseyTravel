// middleware.ts
import { type NextRequest, NextResponse } from 'next/server';
import { UserAuth } from '@/src/app/context/AuthContext';

export function middleware(request: NextRequest) {
  const { user } = UserAuth();

  console.log(user)
  if (!user) {
    // Parse the current URL to extract the base URL (http://localhost:3000)
    const baseUrl = new URL(request.url).origin;

    // Construct the absolute redirect URL using the base URL and the desired path
    const redirectUrl = new URL('/pages/auth/login', baseUrl);

    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

// Export the middleware for use
export const config = {
  api: {
    bodyParser: false,
  },
  matcher: ['/pages/auth/protected/cart', '/pages/auth/protected/saved-destinations'],
};