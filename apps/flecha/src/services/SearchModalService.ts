import { prisma } from '../lib/prisma';

export async function searchModalService(childId: string) {
  const childInfo = await prisma.child.findUnique({
    where: {
      id: childId,
    },
    select: {
      id: true,
      name: true,
      age: true,
      class: true,
      pcd: true,
      birthDate: true,
      medicalConditions: true,
      parent: {
        select: {
          id: true,
          name: true,
          phone: true,
          emergencyContact: true,
        },
      },
    },
  });

  return childInfo;
}