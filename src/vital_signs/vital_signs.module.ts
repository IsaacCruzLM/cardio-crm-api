import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SinaisVitaisService } from './vital_signs.service';
import { SinaisVitaisController } from './vital_signs.controller';
import { SinalVital } from './entities/vital_signs.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SinalVital])],
  controllers: [SinaisVitaisController],
  providers: [SinaisVitaisService],
})
export class SinaisVitaisModule {}
