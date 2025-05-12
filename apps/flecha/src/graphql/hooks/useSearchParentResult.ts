import { useLazyQuery } from '@apollo/client';
import { SEARCH_PARENT_QUERY } from '../queries/searchparent.graphql';

export const useSearchParentResult = () => {
  const [getParentResult, { data, loading, error }] = useLazyQuery(SEARCH_PARENT_QUERY);

  const formattedResults: CustomInputSearchResult[] = data?.getParentResult.parentResult?.map((parent: any) => ({
    id: parent.id,
    parentName: parent.name,
    phone: parent.phone,
    imgUrl: '/icons/profile_placeholder.svg'
  })) ?? [];

  return {
    parentResult: formattedResults,
    getParentResult,
    loading,
    error,
  };
};
