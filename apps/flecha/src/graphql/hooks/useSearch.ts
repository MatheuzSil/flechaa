import { useLazyQuery } from '@apollo/client';
import { SEARCH_QUERY } from '../queries/search.graphql';

export const useSearch = () => {
  const [search, { data, loading, error }] = useLazyQuery(SEARCH_QUERY);

  return {
    results: data?.search.results ?? [],
    totalCount: data?.search.totalCount ?? 0,
    search,
    loading,
    error,
  };
};
