import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EvolucoesService } from './evolution.service';
import { CreateEvolucaoDto } from './dto/create-evolution.dto';
import { UpdateEvolucaoDto } from './dto/update-evolution.dto';

@Controller('evolucoes')
export class EvolucoesController {
  constructor(private readonly service: EvolucoesService) {}

  @Post()
  create(@Body() dto: CreateEvolucaoDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEvolucaoDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
