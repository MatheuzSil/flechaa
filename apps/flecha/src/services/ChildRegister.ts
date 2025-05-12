import { prisma } from "../lib/prisma";

export async function ChildRegister(arg: any) {
  const { childName, childAge, birthDate, medicalConditions, selectedClass, selectedParent, isPcd } = arg;

  const doesChildExist = await prisma.child.findFirst({
    where: { name: childName }
  });

  if (doesChildExist) {
    const error = new Error('CHILD_ALREADY_EXISTS');
    error.name = 'ConflictError';
    throw error;
  }

  const child = await prisma.child.create({
    data: {
      name: childName,
      age: childAge,
      birthDate,
      medicalConditions,
      class: selectedClass,
      parentId: selectedParent.id,
      pcd: isPcd
    }
  });

  return child;
}
