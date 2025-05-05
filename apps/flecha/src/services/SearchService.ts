import { prisma } from '../lib/prisma';
import { redis } from '../lib/redis';

export async function searchService(query: string, page: number, limit: number) {
  const skip = (page - 1) * limit;

  const isBaseQuery = query.trim() === '';

  if (isBaseQuery) {
    const cacheKey = `children:all:page:${page}:limit:${limit}`;
    const cached = await redis.get<typeof response>(cacheKey);

    if (cached) {
      return cached;
    }

    const [results, totalCount] = await Promise.all([
      prisma.child.findMany({
        select: {
          id: true,
          name: true,
          age: true,
        },
        skip,
        take: limit,
        orderBy: {
          name: 'asc',
        },
      }),
      prisma.child.count(),
    ]);

    const response = { results, totalCount };

    await redis.set(cacheKey, response, { ex: 600 });

    return response;
  }

  // Normal query (non-cached)
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
      skip,
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
  ]);

  return { results, totalCount };
}
