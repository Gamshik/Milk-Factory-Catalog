import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { ProductRepository } from '../../repos/product.repository';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository],
})
export class ProductsModule {}
