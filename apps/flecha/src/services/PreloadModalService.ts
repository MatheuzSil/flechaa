import { prisma } from '../lib/prisma';

export async function preloadModalService(childId: string) {
  const childInfo = await prisma.child.findUnique({
    where: {
      id: childId,
    },
    select: {
      id: true,
      name: true,
      age: true,
      class: true,
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