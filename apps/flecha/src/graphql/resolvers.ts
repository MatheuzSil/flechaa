import { searchService } from '../services/SearchService';
import { searchModalService } from '../services/SearchModalService';
import { SearchParentResult } from '../services/SearchParentResult';
import { preloadModalService } from '../services/PreloadModalService';

export const resolvers = {
  Query: {
    search: async (_: any, { query, page = 1, limit = 5, searchType = 'name' }: { query: string, page?: number, limit?: number, searchType?: 'name' | 'age' | 'class' }) => {
      return await searchService(query, page, limit, searchType);
    },
    getChildModal: async (_: any, { childId }: { childId: string }) => {
      return await searchModalService(childId);
    },
    getPreloadedModal: async (_: any, { childId }: { childId: string }) => {
      return await preloadModalService(childId);
    },
    getParentResult: async(_: any, {query}: { query: string }) => {
      return await SearchParentResult(query);
    }
  },
};
