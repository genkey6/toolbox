import { Field, ID, ObjectType } from '@nestjs/graphql';
import { FamilyDto } from 'src/application/family/family.dto';
import { Animal } from 'src/domain/animal/animal';

@ObjectType()
export class AnimalDto {
  @Field(() => ID)
  readonly id: string;

  @Field(() => String)
  readonly name: string;

  @Field(() => FamilyDto)
  readonly family: FamilyDto;

  constructor(init: Required<AnimalDto>) {
    Object.assign(this, init);
  }

  static from(animal: Animal): AnimalDto {
    return new AnimalDto(animal);
  }
}
