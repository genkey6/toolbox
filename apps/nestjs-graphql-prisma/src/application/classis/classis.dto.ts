import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ClassisDto {
  @Field(() => ID)
  readonly id: string;

  @Field(() => String)
  readonly name: string;

  constructor(init: Required<ClassisDto>) {
    Object.assign(this, init);
  }
}
