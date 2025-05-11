import { gql } from '@apollo/client';

export const SEARCH_PARENT_QUERY = gql`
  query getParentResult($query: String!) {
    getParentResult(query: $query) {
      parentResult {
        id
        name
      }
    }
  }
`;