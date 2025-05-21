import { NextResponse } from 'next/server';
import { AuthParentService } from '../../../services/AuthParentService';
import { userRepository } from 'apps/flecha/src/lib/repositories';
import { parentUserRepository } from 'apps/flecha/src/lib/repositories';
import { generateToken } from '../../../utils/auth';

const authParentService = new AuthParentService(parentUserRepository);

export async function POST(req: Request) {
  try {
    const { name, email, password, phone, emergencyContact } = await req.json();

    const parentUser = await authParentService.register(name, email, password, phone, emergencyContact);
    const token = await generateToken(parentUser.id, name, 'parent');

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
