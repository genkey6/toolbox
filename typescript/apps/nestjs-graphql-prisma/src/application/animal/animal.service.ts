import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ANIMAL_REPOSITORY } from 'src/constants';
import { AnimalRepository } from 'src/domain/animal/animal.repository';

import { AnimalDto } from './animal.dto';

@Injectable()
export class AnimalService {
  constructor(
    @Inject(ANIMAL_REPOSITORY) private readonly repository: AnimalRepository
  ) {}

  async getAll(): Promise<AnimalDto[]> {
    const animals = await this.repository.findMany();
    return animals.map((animal) => {
      return AnimalDto.from(animal);
    });
  }

  async getById(id: string): Promise<AnimalDto> {
    const animal = await this.repository.findById(id);
    if (!animal) {
      throw new NotFoundException(`Animal [${id}] was not found.`);
    }

    return AnimalDto.from(animal);
  }
}
