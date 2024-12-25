import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();

  // Intercepta la solicitud a `/linktr`
  if (url.pathname === '/linktr') {
    const response = NextResponse.rewrite('https://151.101.130.133/somitalaventuras');

    // Agrega el encabezado `Host`
    response.headers.set('Host', 'linktr.ee');

    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/linktr',
};
