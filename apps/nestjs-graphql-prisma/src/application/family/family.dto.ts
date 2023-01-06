import { Field, ID, ObjectType } from '@nestjs/graphql';

import { OrderDto } from '../order/order.dto';

@ObjectType()
export class FamilyDto {
  @Field(() => ID)
  readonly id: string;

  @Field(() => String)
  readonly name: string;

  @Field(() => OrderDto)
  readonly order: OrderDto;

  constructor(init: Required<FamilyDto>) {
    Object.assign(this, init);
  }
}
