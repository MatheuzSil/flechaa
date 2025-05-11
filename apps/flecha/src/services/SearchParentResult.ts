import { prisma } from '../lib/prisma';

export async function SearchParentResult(query: string) {
  const parentResult = await prisma.parent.findMany({
    where: {
      name: {
        startsWith: query,
        mode: 'insensitive'
      }
    },
    select: {
      id: true,
      name: true
    }
  });

  return { parentResult };
}