// graphql/schema.ts
import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';
import { gql } from '@apollo/client';

const typeDefs = gql`
  type SearchResult {
    id: String!
    name: String!
    age: Int!
  }

  type SearchResponse {
    results: [SearchResult!]!
    totalCount: Int!
  }

  type Query {
    search(query: String!, page: Int, limit: Int): SearchResponse!
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
