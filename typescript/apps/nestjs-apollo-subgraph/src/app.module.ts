import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { ReviewResolver } from './graphql/review.resolver';
import { Zoo, ZooResolver } from './graphql/zoo.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [Zoo],
      },
      playground: process.env.NODE_ENV !== 'production',
    }),
  ],
  providers: [ZooResolver, ReviewResolver],
})
export class AppModule {}
