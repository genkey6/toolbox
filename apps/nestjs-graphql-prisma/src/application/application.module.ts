import { Module } from '@nestjs/common';
import { AnimalService } from 'src/application/animal/animal.service';
import {
  ANIMAL_REPOSITORY,
  DATASOURCE_CLIENT,
  FAMILY_REPOSITORY,
} from 'src/constants';
import { AnimalDatasource } from 'src/infrastructure/animal/animal.datasource';
import { DatasourceClient } from 'src/infrastructure/datasource.client';
import { FamilyDatasource } from 'src/infrastructure/family/family.datasource';

@Module({
  providers: [
    AnimalService,
    {
      provide: DATASOURCE_CLIENT,
      useValue: DatasourceClient.getInstance(),
    },
    {
      provide: ANIMAL_REPOSITORY,
      useClass: AnimalDatasource,
    },
    {
      provide: FAMILY_REPOSITORY,
      useClass: FamilyDatasource,
    },
  ],
  exports: [AnimalService],
})
export class ApplicationModule {}
