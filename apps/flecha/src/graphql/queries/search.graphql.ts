import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
  query Search($query: String!, $page: Int, $limit: Int) {
    search(query: $query, page: $page, limit: $limit) {
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
