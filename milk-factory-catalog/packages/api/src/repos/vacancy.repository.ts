import { Injectable } from '@nestjs/common';
import { Prisma, Vacancy } from '@prisma/client';
import { BasePrismaRepository } from '../base/repos/base.repository';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class VacancyRepository extends BasePrismaRepository<
  Vacancy,
  Prisma.VacancyFindUniqueArgs,
  Prisma.VacancyFindManyArgs,
  Prisma.VacancyCreateArgs,
  Prisma.VacancyUpdateArgs,
  Prisma.VacancyDeleteArgs
> {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  protected readonly model = this.prisma.vacancy;
}
