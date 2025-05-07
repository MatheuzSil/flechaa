import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
  query Search($query: String!, $page: Int, $limit: Int, $searchType: String) {
    search(query: $query, page: $page, limit: $limit, searchType: $searchType) {
      results {
        id
        name
        age
        class
      }
      totalCount
    }
  }
`;
