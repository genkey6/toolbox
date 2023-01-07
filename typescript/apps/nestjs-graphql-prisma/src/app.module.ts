import { Module } from '@nestjs/common';

import { GraphQLModule } from './api/graphql/graphql.module';

@Module({
  imports: [GraphQLModule],
})
export class AppModule {}
