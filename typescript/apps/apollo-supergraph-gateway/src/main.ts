import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';

const gateway = new ApolloGateway({
  // !! Avoid using `IntrospectAndCompose` in production, since it has some critical limitations.
  // For details, see: https://www.apollographql.com/docs/apollo-server/using-federation/apollo-gateway-setup/#limitations-of-introspectandcompose
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'reviews', url: 'http://localhost:4001/graphql' },
      { name: 'zoos', url: 'http://localhost:4002/graphql' },
      { name: 'animals', url: 'http://localhost:4003/graphql' }
    ],
    subgraphHealthCheck: true,
  }),
});

async function startApolloServer() {
  const server = new ApolloServer({
    gateway,
  });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
    listen: { port: 4000 },
  });

  console.log(`Server ready at ${url}`);
}

startApolloServer();
