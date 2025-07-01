import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CreateVacancyDto } from '../../dto/vacancy/create-vacancy.dto';
import { UpdateVacancyDto } from '../../dto/vacancy/update-vacancy.dto';
import { VacanciesService } from './vacancies.service';

@Controller('vacancies')
export class VacanciesController {
  constructor(private readonly vacanciesService: VacanciesService) {}

  @Post()
  create(@Body() createVacancyDto: CreateVacancyDto) {
    return this.vacanciesService.create(createVacancyDto);
  }

  @Get()
  findAll() {
    return this.vacanciesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.vacanciesService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateVacancyDto: UpdateVacancyDto
  ) {
    return this.vacanciesService.update(id, updateVacancyDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.vacanciesService.remove(id);
  }
}
