import { prisma } from '../lib/prisma';

export async function SearchParentResult(query: string) {
  if (query.length < 1) return [];
  const parentResult = await prisma.parent.findMany({
    where: {
      name: {
        startsWith: query,
        mode: 'insensitive'
      }
    },
    select: {
      id: true,
      name: true,
      phone: true,
    }
  });

  return { parentResult };
}