import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '../src/utils/auth'; // Função para verificar o token

// Lista de rotas que não precisam de autenticação
const publicRoutes = ['/login', '/cadastrar'];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Verifica se a rota atual não é uma rota pública
  if (!publicRoutes.includes(pathname)) {
    const token = req.cookies.get('token')?.value;

    if (!token) {
      // Redireciona para a página de login se o token não existir
      return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
      // Verifica se o token é válido
      const decoded = await verifyToken(token);
      if (!decoded) {
        // Redireciona para a página de login se o token for inválido
        return NextResponse.redirect(new URL('/login', req.url));
      }

      // Adiciona o userId ao cabeçalho da requisição para uso posterior
      const requestHeaders = new Headers(req.headers);
      requestHeaders.set('userId', decoded.userId);

      return NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
    } catch (error) {
      console.error('Token verification failed:', error);
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  // Se for uma rota pública, permite a requisição continuar
  return NextResponse.next();
}

// Configuração do middleware para aplicar apenas em rotas específicas
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};