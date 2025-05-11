// graphql/schema.ts
import { makeExecutableSchema } from '@graphql-tools/schema';
import { resolvers } from './resolvers';
import { gql } from '@apollo/client';

const typeDefs = gql`
  type SearchResult {
    id: String!
    name: String!
    age: Int!
    class: String!
  }

  type SearchResponse {
    results: [SearchResult!]!
    totalCount: Int!
  }

  type Query {
    search(query: String!, page: Int, limit: Int, searchType: String): SearchResponse!
  }

  type Parent {
    id: String!
    name: String!
    phone: String!
    emergencyContact: String!
  }

  type ChildModal {
    birthDate: String!
    medicalConditions: [String!]!
    parent: Parent!
  }

  extend type Query {
    getChildModal(childId: String!): ChildModal!
  }

  type ParentSelectResult {
    id: String!
    name: String!
  }

  type ParentResult {
    parentResult: [ParentSelectResult!]!
  }

  extend type Query {
    getParentResult(query: String!): ParentResult!
  }
`;

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
