import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';

import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [
    NestGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile:
        process.env.NODE_ENV === 'production'
          ? true
          : 'apps/nextjs-urql/graphql/schema.graphql',
      playground: process.env.NODE_ENV !== 'production',
    }),
    AnimalModule,
  ],
})
export class GraphQLModule {}
