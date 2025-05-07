import { cacheService } from './CacheService';
import { childRepository } from '../lib/repositories';

export async function searchService(query: string, page: number, limit: number, searchType: 'name' | 'age' | 'class') {
  const skip = (page - 1) * limit;
  const isBaseQuery = query.trim() === '';

  if (isBaseQuery) {
    const cacheKey = `children:all:query:${query}:page:${page}:limit:${limit}`;
    const cached = await cacheService.get<{ results: any[]; totalCount: number }>(cacheKey);

    if (cached) return cached;

    const [results, totalCount] = await Promise.all([
      childRepository.findAllPaginated(skip, limit),
      childRepository.countAll(),
    ]);

    const response = { results, totalCount };
    await cacheService.set(cacheKey, response, 600);

    return response;
  }

  const [results, totalCount] = await Promise.all([
    childRepository.searchByField(searchType, query, skip, limit),
    childRepository.countByField(searchType, query),
  ]);

  return { results, totalCount };
}
