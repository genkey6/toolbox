import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ClassisDto } from 'src/application/classis/classis.dto';

@ObjectType()
export class OrderDto {
  @Field(() => ID)
  readonly id: string;

  @Field(() => String)
  readonly name: string;

  @Field(() => ClassisDto)
  readonly classis: ClassisDto;

  constructor(init: Required<OrderDto>) {
    Object.assign(this, init);
  }
}
