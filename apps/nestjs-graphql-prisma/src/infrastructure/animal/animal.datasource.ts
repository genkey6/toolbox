import { Inject, Injectable } from '@nestjs/common';
import { DATASOURCE_CLIENT } from 'src/constants';
import { Animal } from 'src/domain/animal/animal';
import { AnimalRepository } from 'src/domain/animal/animal.repository';
import { Classis } from 'src/domain/classis/classis';
import { Family } from 'src/domain/family/family';
import { Order } from 'src/domain/order/order';
import { DatasourceClient } from 'src/infrastructure/datasource.client';

@Injectable()
export class AnimalDatasource implements AnimalRepository {
  constructor(@Inject(DATASOURCE_CLIENT) private client: DatasourceClient) {}

  async findMany(): Promise<Animal[]> {
    const animals = await this.client.animal.findMany({
      include: {
        family: {
          include: {
            order: {
              include: {
                classis: true,
              },
            },
          },
        },
      },
    });

    return animals.map((animal) => {
      const classis = Classis.reconstruct(
        animal.family.order.classis.id,
        animal.family.order.classis.name
      );
      const order = Order.reconstruct(
        animal.family.order.id,
        animal.family.order.name,
        classis
      );
      const family = Family.reconstruct(
        animal.family.id,
        animal.family.name,
        order
      );
      return Animal.reconstruct(animal.id, animal.name, family);
    });
  }

  async findById(id: string): Promise<Animal | undefined> {
    const animal = await this.client.animal.findUnique({
      where: {
        id,
      },
      include: {
        family: {
          include: {
            order: {
              include: {
                classis: true,
              },
            },
          },
        },
      },
    });
    if (!animal) {
      return undefined;
    }
    const classis = Classis.reconstruct(
      animal.family.order.classis.id,
      animal.family.order.classis.name
    );
    const order = Order.reconstruct(
      animal.family.order.id,
      animal.family.order.name,
      classis
    );
    const family = Family.reconstruct(
      animal.family.id,
      animal.family.name,
      order
    );
    return Animal.reconstruct(animal.id, animal.name, family);
  }
}
