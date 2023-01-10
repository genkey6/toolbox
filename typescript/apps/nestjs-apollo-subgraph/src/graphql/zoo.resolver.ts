import {
  Directive,
  Field,
  ID,
  ObjectType,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';

import { Review, reviews } from './review.resolver';

@ObjectType()
@Directive('@key(fields: "id")')
export class Zoo {
  @Field(() => ID)
  readonly id: number;

  @Field(() => [Review], { nullable: 'items' })
  readonly reviews: Review[];

  constructor(init: Partial<Zoo>) {
    Object.assign(this, init);
  }
}

@Resolver(() => Zoo)
export class ZooResolver {
  @ResolveField(() => [Review])
  async reviews(@Parent() zoo: Zoo): Promise<Review[]> {
    return reviews.filter((review) => review.zooId === zoo.id);
  }
}
