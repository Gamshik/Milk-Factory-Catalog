import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateStoreDto } from '../../dto/store/create-store.dto';
import { UpdateStoreDto } from '../../dto/store/update-store.dto';
import { StoreRepository } from '../../repos/store.repository';

@Injectable()
export class StoresService {
  constructor(private readonly storeRepository: StoreRepository) {}

  create(createStoreDto: CreateStoreDto) {
    return this.storeRepository.create({ data: createStoreDto });
  }

  findAll() {
    return this.storeRepository.findMany();
  }

  async findOne(id: string) {
    const store = await this.storeRepository.findUnique({ where: { id } });
    if (!store) {
      throw new NotFoundException(`Store with ID #${id} not found`);
    }
    return store;
  }

  async update(id: string, updateStoreDto: UpdateStoreDto) {
    try {
      return await this.storeRepository.update({
        where: { id },
        data: updateStoreDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Store with ID #${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.storeRepository.delete({ where: { id } });
  }
}
