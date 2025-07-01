import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ProductsModule } from './products/products.module';
import { VacanciesModule } from './vacancies/vacancies.module';
import { StoresModule } from './stores/stores.module';

@Module({
  imports: [PrismaModule, ProductsModule, VacanciesModule, StoresModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
