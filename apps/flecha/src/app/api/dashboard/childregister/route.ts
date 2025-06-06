import { ChildRegister } from "apps/flecha/src/services/ChildRegister";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const arg = await req.json();
    const child = await ChildRegister(arg);

    return NextResponse.json(
      { message: 'Criança cadastrada com sucesso', child },
      { status: 200 }
    );
  } catch (e: any) {
    if (e.name === 'ConflictError') {
      return NextResponse.json(
        { error: 'Error 409: Uma criança com este nome já está cadastrada.' },
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
