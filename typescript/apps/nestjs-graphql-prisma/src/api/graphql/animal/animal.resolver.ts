import { Args, ID, Query, Resolver } from '@nestjs/graphql';
import { AnimalDto } from 'src/application/animal/animal.dto';
import { AnimalService } from 'src/application/animal/animal.service';

@Resolver(() => AnimalDto)
export class AnimalResolver {
  constructor(private readonly animalService: AnimalService) {}

  @Query(() => [AnimalDto])
  async animals(): Promise<AnimalDto[]> {
    return this.animalService.getAll();
  }

  @Query(() => AnimalDto)
  async animal(
    @Args('animalId', { type: () => ID }) animalId: string
  ): Promise<AnimalDto> {
    return this.animalService.getById(animalId);
  }
}
