import { Module } from '@nestjs/common';
import { StoresService } from './stores.service';
import { StoresController } from './stores.controller';
import { StoreRepository } from '../../repos/store.repository';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StoresController],
  providers: [StoresService, StoreRepository],
})
export class StoresModule {}
