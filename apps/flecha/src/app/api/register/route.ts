import { NextResponse } from 'next/server';
import { AuthService } from '../../../services/AuthService';
import { UserRepository } from '../../../repositories/UserRepository';
import { generateToken } from '../../../utils/auth';

const authService = new AuthService(new UserRepository());

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const user = await authService.register(name, email, password);
    const token = await generateToken(user.id, user.name);

    const response = new NextResponse('User created', { status: 200 });

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (e: any) {
    if (e.message === 'USER_ALREADY_EXISTS') {
      return NextResponse.json(
        { error: 'Error 409: Um usuário com este email já está cadastrado.' },
        { status: 409 }
      );
    }

    console.error(e);
    return NextResponse.json(
      { error: 'Error 500: Erro interno do servidor ao cadastrar' },
      { status: 500 }
    );
  }
}
