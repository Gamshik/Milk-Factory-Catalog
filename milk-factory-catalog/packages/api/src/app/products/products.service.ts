import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateProductDto } from '../../dto/product/create-product.dto';
import { UpdateProductDto } from '../../dto/product/update-product.dto';
import { ProductRepository } from '../../repos/product.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(createProductDto: CreateProductDto) {
    return await this.productRepository.create({
      data: createProductDto,
    });
  }

  findAll() {
    return this.productRepository.findMany();
  }

  async findOne(id: string) {
    const product = await this.productRepository.findUnique({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Product with ID #${id} not found`);
    }

    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    try {
      return await this.productRepository.update({
        where: { id },
        data: updateProductDto,
      });
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2025') {
          throw new NotFoundException(`Product with ID #${id} not found`);
        }
      }
      throw error;
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.productRepository.delete({ where: { id } });
  }
}
