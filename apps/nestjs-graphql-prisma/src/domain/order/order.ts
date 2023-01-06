import { Classis } from 'src/domain/classis/classis';

export class Order {
  readonly id: string;
  readonly name: string;
  readonly classis: Classis;

  private constructor(id: string, name: string, classis: Classis) {
    this.id = id;
    this.name = name;
    this.classis = classis;
  }

  public static reconstruct(id: string, name: string, classis: Classis): Order {
    return new Order(id, name, classis);
  }
}
