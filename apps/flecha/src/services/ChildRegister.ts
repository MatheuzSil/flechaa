
import { NextResponse } from "next/server";
import { prisma } from "../lib/prisma"

export async function ChildRegister(arg: any) {

  try{

    const {childName, childAge, birthDate, medicalConditions, selectedClass, selectedParent, isPcd } = arg;

    const isChildExists = await prisma.child.findFirst({
      where: {
        name: childName,
      }
    }) 

    if(isChildExists) {
      throw new Error('CHILD_ALREADY_EXISTS');
    }

    const child = await prisma.child.create({
      data: {
        name: childName,
        age: childAge,
        birthDate: birthDate,
        medicalConditions: medicalConditions,
        class: selectedClass,
        parentId: selectedParent.id,
        pcd: isPcd
      }
    })


    return child;
  }catch (e: any) {
    if (e.message === 'CHILD_ALREADY_EXISTS') {
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
