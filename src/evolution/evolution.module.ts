import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Evolucao } from './entities/evolution.entity';
import { EvolucoesService } from './evolution.service';
import { EvolucoesController } from './evolution.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Evolucao])],
  controllers: [EvolucoesController],
  providers: [EvolucoesService],
})
export class EvolucoesModule {}
