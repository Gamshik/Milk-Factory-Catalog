import { Module } from '@nestjs/common';
import { VacanciesService } from './vacancies.service';
import { VacanciesController } from './vacancies.controller';
import { VacancyRepository } from '../../repos/vacancy.repository';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [VacanciesController],
  providers: [VacanciesService, VacancyRepository],
})
export class VacanciesModule {}
