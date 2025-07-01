import { Injectable } from '@nestjs/common';
import { Prisma, Store } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { BasePrismaRepository } from '../base/repos/base.repository';

@Injectable()
export class StoreRepository extends BasePrismaRepository<
  Store,
  Prisma.StoreFindUniqueArgs,
  Prisma.StoreFindManyArgs,
  Prisma.StoreCreateArgs,
  Prisma.StoreUpdateArgs,
  Prisma.StoreDeleteArgs
> {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  protected readonly model = this.prisma.store;
}
