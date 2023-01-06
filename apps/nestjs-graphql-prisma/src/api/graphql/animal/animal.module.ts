import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';

import { AnimalResolver } from './animal.resolver';

@Module({
  imports: [ApplicationModule],
  providers: [AnimalResolver],
})
export class AnimalModule {}
