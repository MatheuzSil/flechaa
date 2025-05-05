import { searchService } from '../services/SearchService';
import { searchModalService } from '../services/SearchModalService';

export const resolvers = {
  Query: {
    search: async (_: any, { query, page = 1, limit = 5 }: { query: string,  page?: number, limit?: number }) => {
      return await searchService(query, page, limit);
    },
    getChildModal: async (_: any, { childId }: { childId: string }) => {
      return await searchModalService(childId);
    },
  },
};
