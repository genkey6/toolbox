import { Inject, Injectable } from '@nestjs/common';
import { DATASOURCE_CLIENT } from 'src/constants';
import { Classis } from 'src/domain/classis/classis';
import { Family } from 'src/domain/family/family';
import { FamilyRepository } from 'src/domain/family/family.repository';
import { Order } from 'src/domain/order/order';
import { DatasourceClient } from 'src/infrastructure/datasource.client';

@Injectable()
export class FamilyDatasource implements FamilyRepository {
  constructor(@Inject(DATASOURCE_CLIENT) private client: DatasourceClient) {}

  async findById(id: string): Promise<Family | undefined> {
    const family = await this.client.family.findUnique({
      where: {
        id,
      },
      include: {
        order: {
          include: {
            classis: true,
          },
        },
      },
    });

    if (!family) {
      return undefined;
    }

    const classis = Classis.reconstruct(
      family.order.classis.id,
      family.order.classis.name
    );
    const order = Order.reconstruct(
      family.order.id,
      family.order.name,
      classis
    );
    return Family.reconstruct(family.id, family.name, order);
  }
}
