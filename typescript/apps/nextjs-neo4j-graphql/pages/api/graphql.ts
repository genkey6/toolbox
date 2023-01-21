import { ApolloServer } from 'apollo-server-micro';
import { Neo4jGraphQL } from '@neo4j/graphql';
import Cors from 'cors';
import getConfig from 'next/config';
import { NextApiRequest, NextApiResponse } from 'next';
import neo4j from 'neo4j-driver';
import typeDefs from '../../graphql/typeDefs.graphql';

export const config = {
  api: {
    bodyParser: false,
  },
};

const { publicRuntimeConfig } = getConfig();

const driver = neo4j.driver(
  publicRuntimeConfig.neo4j.url,
  neo4j.auth.basic(
    publicRuntimeConfig.neo4j.username,
    publicRuntimeConfig.neo4j.password
  )
);
const neoSchema = new Neo4jGraphQL({ typeDefs, driver });
const schema = await neoSchema.getSchema();
const apolloServer = new ApolloServer({
  schema,
  context: { driverConfig: { database: 'neo4j' } },
});

const startServer = apolloServer.start();

const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
});

const runMiddleware = (req: NextApiRequest, res: NextApiResponse, fn: any) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await startServer;
  await runMiddleware(req, res, cors);
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}
