export class Classis {
  readonly id: string;
  readonly name: string;

  private constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public static reconstruct(id: string, name: string): Classis {
    return new Classis(id, name);
  }
}
