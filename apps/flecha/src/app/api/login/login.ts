import { PrismaClient } from '@prisma/client';
import { generateToken } from 'apps/flecha/src/utils/auth';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function login(req: any) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json(
        { error: 'Error 404: Usuário não encontrado' },
        { status: 404 }
      );
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Error 401: Senha inválida' },
        { status: 401 }
      );
    }
    const token = await generateToken(user.id);
    const response = new NextResponse('Login realizado com sucesso', {
      status: 200,
    });

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: 'Error 500: Error interno do servidor' },
      { status: 500 }
    );
  }
}
