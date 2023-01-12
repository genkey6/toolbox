import {
  Directive,
  Field,
  ID,
  Int,
  ObjectType,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Zoo } from './zoo.resolver';

@ObjectType()
@Directive('@key(fields: "id")')
export class Review {
  @Field(() => ID)
  readonly id: string;

  @Field(() => Int)
  readonly score: number;

  @Field(() => Int)
  readonly zooId: string;

  @Field(() => Zoo)
  readonly zoo?: Zoo;

  constructor(init: Partial<Review>) {
    Object.assign(this, init);
  }
}

export const reviews = [
  new Review({
    id: '1',
    score: 5,
    zooId: '1',
  }),
  new Review({
    id: '2',
    score: 3,
    zooId: '1',
  }),
  new Review({
    id: '3',
    score: 4,
    zooId: '2',
  }),
];

@Resolver(() => Review)
export class ReviewResolver {
  @Query(() => [Review])
  async reviews(): Promise<Review[]> {
    return reviews;
  }

  @ResolveField(() => Zoo)
  async zoo(@Parent() review: Review) {
    return { __typename: 'Zoo', id: review.zooId };
  }
}
