import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const target = process.env.PROXY_TARGET?.replace(/\/$/, '')

  if (!target) {
    return NextResponse.next()
  }

  const url = request.nextUrl
  const destination = new URL(`${target}${url.pathname}${url.search}`)

  return NextResponse.rewrite(destination)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
