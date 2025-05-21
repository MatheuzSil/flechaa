import { NextResponse } from 'next/server';
import { parentUserRepository } from 'apps/flecha/src/lib/repositories';
import { AuthParentService } from 'apps/flecha/src/services/AuthParentService';

const authParentService = new AuthParentService(parentUserRepository); // to be created only once

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const result = await authParentService.login(email, password);

  if (result.error === 'user_not_found') {
    return NextResponse.json(
      { error: 'Usuário não encontrado' },
      { status: 404 }
    );
  }

  if (result.error === 'invalid_password') {
    return NextResponse.json({ error: 'Senha inválida' }, { status: 401 });
  }

  const response = new NextResponse('Login realizado com sucesso');
  response.cookies.set('token', result.token, {
    httpOnly: true,
    secure: false,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
