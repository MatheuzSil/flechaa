import { prisma } from '../lib/prisma';

export async function searchService(query: string) {
  if (!query || query.length < 2) return [];

  return await prisma.child.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
    select: {
      id: true,
      name: true,
      age: true,
      class: true,
      imageUrl: true,
    },
    take: 10,
  });
}
