import { createSchema, createYoga } from 'graphql-yoga';
import { schema } from '../../../graphql/schema';

const { handleRequest } = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response, Request },
});

export { handleRequest as GET, handleRequest as POST };
