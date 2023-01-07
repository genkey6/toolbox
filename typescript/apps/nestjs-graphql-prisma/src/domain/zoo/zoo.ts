import { Animal } from 'src/domain/animal/animal';

export class Zoo {
  readonly id: string;
  readonly name: string;
  readonly animals: Animal[];

  private constructor(id: string, name: string, animals: Animal[]) {
    this.id = id;
    this.name = name;
    this.animals = animals;
  }

  public static reconstruct(id: string, name: string, animals: Animal[]): Zoo {
    return new Zoo(id, name, animals);
  }

  public static create(id: string, name: string): Zoo {
    return new Zoo(id, name, []);
  }
}
