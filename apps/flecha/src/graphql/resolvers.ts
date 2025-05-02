import { searchService } from '../services/SearchService';

export const resolvers = {
  Query: {
    search: async (_: any, { query, page = 1, limit = 5 }: { query: string,  page?: number, limit?: number }) => {
      return await searchService(query, page, limit);
    },
  },
};
