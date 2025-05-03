import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { SinaisVitaisService } from './vital_signs.service';
import { CreateSinalVitalDto } from './dto/create-vital_signs.dto';
import { UpdateSinalVitalDto } from './dto/update-vital_signs.dto';

@Controller('sinais-vitais')
export class SinaisVitaisController {
  constructor(private readonly service: SinaisVitaisService) {}

  @Post()
  create(@Body() dto: CreateSinalVitalDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateSinalVitalDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
