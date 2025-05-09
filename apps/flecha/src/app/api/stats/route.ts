import { prisma } from "apps/flecha/src/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export default async function GET() {
  try {
    const totalCriancas = 2
    const totalSalas = 7;
    const totalResponsaveis = 2
    const totalComSaude = 2
    const totalEspeciais = 0

    return NextResponse.json({
      totalCriancas,
      totalSalas,
      totalResponsaveis,
      totalComSaude,
      totalEspeciais,
    }, { status: 200 });
    
  }catch (error) {
    console.error("Error fetching stats:", error);
    return NextResponse.json(
      { error: "Error 500: Erro interno do servidor ao buscar as estatísticas" },
      { status: 500 }
    );
  }
}