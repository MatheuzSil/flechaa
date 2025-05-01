import { searchService } from '../services/SearchService';

export const resolvers = {
  Query: {
    search: async (_: any, { query }: { query: string }) => {
      return await searchService(query);
    },
  },
};
