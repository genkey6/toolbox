import { Family } from 'src/domain/family/family';

export class Animal {
  readonly id: string;
  readonly name: string;
  readonly family: Family;

  private constructor(id: string, name: string, family: Family) {
    this.id = id;
    this.name = name;
    this.family = family;
  }

  public static reconstruct(id: string, name: string, family: Family): Animal {
    return new Animal(id, name, family);
  }

  public static create(id: string, name: string, family: Family): Animal {
    return new Animal(id, name, family);
  }
}
