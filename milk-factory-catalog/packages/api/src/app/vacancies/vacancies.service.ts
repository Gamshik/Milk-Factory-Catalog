import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateVacancyDto } from '../../dto/vacancy/create-vacancy.dto';
import { UpdateVacancyDto } from '../../dto/vacancy/update-vacancy.dto';
import { VacancyRepository } from '../../repos/vacancy.repository';

@Injectable()
export class VacanciesService {
  constructor(private readonly vacancyRepository: VacancyRepository) {}

  create(createVacancyDto: CreateVacancyDto) {
    return this.vacancyRepository.create({ data: createVacancyDto });
  }

  findAll() {
    return this.vacancyRepository.findMany({ orderBy: { postedAt: 'desc' } });
  }

  async findOne(id: string) {
    const vacancy = await this.vacancyRepository.findUnique({ where: { id } });
    if (!vacancy) {
      throw new NotFoundException(`Vacancy with ID #${id} not found`);
    }
    return vacancy;
  }

  async update(id: string, updateVacancyDto: UpdateVacancyDto) {
    try {
      return await this.vacancyRepository.update({
        where: { id },
        data: updateVacancyDto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new NotFoundException(`Vacancy with ID #${id} not found`);
      }
      throw error;
    }
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.vacancyRepository.delete({ where: { id } });
  }
}
