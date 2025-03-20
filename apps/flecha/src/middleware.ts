import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt'; // Importa a função getToken do NextAuth

// Lista de rotas que não precisam de autenticação
const publicRoutes = ['/login', '/cadastrar'];

const secret = process.env.AUTH_SECRET;

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Verifica se a rota atual não é uma rota pública
  if (!publicRoutes.includes(pathname)) {
    // Obtém o token do NextAuth
    const token = await getToken({ req, secret });

    if (!token) {
      // Redireciona para a página de login se o token não existir ou for inválido
      return NextResponse.redirect(new URL('/login', req.url));
    }

    // Adiciona o userId ao cabeçalho da requisição para uso posterior (opcional)
    const requestHeaders = new Headers(req.headers);
    requestHeaders.set('userId', token.sub || ''); // `sub` geralmente contém o ID do usuário

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  }

  // Se for uma rota pública, permite a requisição continuar
  return NextResponse.next();
}

// Configuração do middleware para aplicar apenas em rotas específicas
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};