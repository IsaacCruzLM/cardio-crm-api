import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consulta } from './entities/appointment.entity';
import { ConsultasService } from './appointment.service';
import { ConsultasController } from './appointment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Consulta])],
  controllers: [ConsultasController],
  providers: [ConsultasService],
})
export class ConsultasModule {}
