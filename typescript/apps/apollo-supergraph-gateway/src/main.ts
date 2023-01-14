import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { ApolloGateway } from '@apollo/gateway';
import { watch } from 'fs';
import { readFile } from 'fs/promises';

const gateway = new ApolloGateway({
  // !! Avoid using `IntrospectAndCompose` in production, since it has some critical limitations.
  // For details, see: https://www.apollographql.com/docs/apollo-server/using-federation/apollo-gateway-setup/#limitations-of-introspectandcompose
  // supergraphSdl: new IntrospectAndCompose({
  //   subgraphs: [
  //     { name: 'reviews', url: 'http://localhost:4001/graphql' },
  //     { name: 'zoos', url: 'http://localhost:4002/graphql' },
  //     { name: 'animals', url: 'http://localhost:4003/graphql' }
  //   ],
  //   subgraphHealthCheck: true,
  // }),

  // https://www.apollographql.com/docs/apollo-server/using-federation/apollo-gateway-setup#updating-the-supergraph-schema
  async supergraphSdl({ update, healthCheck }) {
    // create a file watcher
    const watcher = watch('apps/apollo-supergraph-gateway/supergraph.graphqls');
    // subscribe to file changes
    watcher.on('change', async () => {
      // update the supergraph schema
      try {
        const updatedSupergraph = await readFile(
          'apps/apollo-supergraph-gateway/supergraph.graphqls',
          'utf-8'
        );
        // optional health check update to ensure our services are responsive
        await healthCheck(updatedSupergraph);
        // update the supergraph schema
        update(updatedSupergraph);
      } catch (e) {
        // handle errors that occur during health check or while updating the supergraph schema
        console.error(e);
      }
    });

    return {
      supergraphSdl: await readFile(
        'apps/apollo-supergraph-gateway/supergraph.graphqls',
        'utf-8'
      ),
      // cleanup is called when the gateway is stopped
      async cleanup() {
        watcher.close();
      },
    };
  },
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
