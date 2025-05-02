import { prisma } from '../lib/prisma';

export async function searchService(query: string, page = 1, limit = 5) {
  const skip = (page - 1) * limit;

  const [results, totalCount] = await Promise.all([
  prisma.child.findMany({
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
    skip: skip,
    take: limit,
    orderBy: {
      name: 'asc',
    },

  }),
  prisma.child.count({
    where: {
      name: {
        startsWith: query,
        mode: 'insensitive',
      },
    },
  }),
])
return{
  results,
  totalCount,
}
}
