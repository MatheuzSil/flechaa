import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '../src/utils/auth';
import { decode } from 'punycode';

// Lista de rotas públicas (onde usuários não autenticados podem acessar)
const publicRoutes = ['/login', '/cadastrar', '/cadastrar-pais', '/login-pais'];
const dashboardRoute = '/dashboard';
const loginRoute = '/login';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value;

  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/static/') ||
    pathname.startsWith('/icons/') ||
    pathname.endsWith('.svg') ||
    pathname.endsWith('.png') ||
    pathname.endsWith('.jpg') ||
    pathname.endsWith('.css') ||
    pathname.endsWith('.js') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  let decoded = null;
  let isTokenValid = false;
  if (token) {
    try {
      decoded = await verifyToken(token); // Tenta verificar o token
      if (decoded) {
        isTokenValid = true; // Marcar como válido se a verificação for bem-sucedida
      }
    } catch (error) {
      return NextResponse.redirect(new URL(loginRoute, req.url));
    }
  }

  if(decoded?.role === 'parent') {
    // Se o usuário for um pai e tentar acessar o dashboard, redireciona para a página de pais
    if (pathname === dashboardRoute) {
      return NextResponse.redirect(new URL('/dashboard-pais', req.url));
    }
  }

  // Se o usuário for um admin e tentar acessar o dashboard de pais, redireciona para a página de admin
  if (decoded?.role === 'admin' && pathname === '/dashboard-pais') {
    return NextResponse.redirect(new URL(dashboardRoute, req.url));
  }

  if (isTokenValid) {
    // Se tentar acessar rotas públicas (login/cadastro) OU a raiz '/', redireciona para o dashboard
    if (publicRoutes.includes(pathname) || pathname === '/') {
      return NextResponse.redirect(new URL(dashboardRoute, req.url));
    }

    // Se logado e acessando qualquer outra rota protegida, adiciona headers e permite
    const requestHeaders = new Headers(req.headers);
    
    if (decoded && typeof decoded === 'object' && 'userId' in decoded) {
       requestHeaders.set('userId', decoded.userId as string);
    }
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } else {
    // Se tentar acessar uma rota protegida (não pública), redireciona para login
    if (!publicRoutes.includes(pathname)) {
      const response = NextResponse.redirect(new URL(loginRoute, req.url));
      // Se havia um token, mas ele era inválido, remove o cookie
      if (token) {
        response.cookies.delete('token');
      }
      return response;
    }

    // Se não logado e acessando uma rota pública, permite o acesso
    return NextResponse.next();
  }
}

// Configuração do middleware
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
     '/'
  ],
};