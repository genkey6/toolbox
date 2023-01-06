import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// https://docs.nestjs.com/recipes/prisma#use-prisma-client-in-your-nestjs-services
@Injectable()
export class DatasourceClient extends PrismaClient implements OnModuleInit {
  private static _instance: PrismaClient;

  private constructor() {
    super();
  }

  // If you create an instance every time, you will get a warning that a large number of DB connections will be created.
  // As a workaround, make it a singleton.
  // https://github.com/prisma/prisma/discussions/4399
  static getInstance() {
    if (!DatasourceClient._instance) {
      DatasourceClient._instance = new DatasourceClient();
    }
    return DatasourceClient._instance;
  }

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
