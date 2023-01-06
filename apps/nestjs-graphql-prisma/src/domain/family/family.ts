import { Order } from 'src/domain/order/order';

export class Family {
  readonly id: string;
  readonly name: string;
  readonly order: Order;

  private constructor(id: string, name: string, order: Order) {
    this.id = id;
    this.name = name;
    this.order = order;
  }

  public static reconstruct(id: string, name: string, order: Order): Family {
    return new Family(id, name, order);
  }
}
