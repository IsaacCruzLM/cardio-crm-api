import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ConsultasService } from './appointment.service';
import { CreateConsultaDto } from './dto/create-appointment.dto';
import { UpdateConsultaDto } from './dto/update-appointment.dto';

@Controller('consultas')
export class ConsultasController {
  constructor(private readonly service: ConsultasService) {}

  @Post()
  create(@Body() dto: CreateConsultaDto) {
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
  update(@Param('id') id: string, @Body() dto: UpdateConsultaDto) {
    return this.service.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
