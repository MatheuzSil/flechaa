import { prisma } from '../lib/prisma';

export async function searchService(query: string) {

  return await prisma.child.findMany({
    where: {
      name: {
        startsWith: query,
        mode: 'insensitive',
      },
    },
    select: {
      id: true,
      name: true,
      age: true,
    },
    take: 5,
    orderBy: {
      name: 'asc',
    },
  });
}
