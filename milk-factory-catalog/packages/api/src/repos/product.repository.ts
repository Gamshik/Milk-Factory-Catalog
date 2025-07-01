import { Injectable } from '@nestjs/common';
import { BasePrismaRepository } from '../base/repos/base.repository';
import { Product, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductRepository extends BasePrismaRepository<
  Product,
  Prisma.ProductFindUniqueArgs,
  Prisma.ProductFindManyArgs,
  Prisma.ProductCreateArgs,
  Prisma.ProductUpdateArgs,
  Prisma.ProductDeleteArgs
> {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  protected readonly model = this.prisma.product;
}
