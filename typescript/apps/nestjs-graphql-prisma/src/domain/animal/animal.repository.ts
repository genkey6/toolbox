import { Animal } from 'src/domain/animal/animal';

export interface AnimalRepository {
  findMany(): Promise<Animal[]>;
  findById(id: string): Promise<Animal | undefined>;
}
