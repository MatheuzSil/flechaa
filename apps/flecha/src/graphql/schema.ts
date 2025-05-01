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

  type Query {
    search(query: String!): [SearchResult!]!
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
