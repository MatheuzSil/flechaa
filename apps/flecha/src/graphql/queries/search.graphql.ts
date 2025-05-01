import { gql } from '@apollo/client';

export const SEARCH_QUERY = gql`
  query Search($query: String!) {
    search(query: $query) {
      id
      name
      age
    }
  }
`;
