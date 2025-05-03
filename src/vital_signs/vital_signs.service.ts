import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SinalVital } from './entities/vital_signs.entity';
import { CreateSinalVitalDto } from './dto/create-vital_signs.dto';
import { UpdateSinalVitalDto } from './dto/update-vital_signs.dto';

@Injectable()
export class SinaisVitaisService {
  constructor(
    @InjectRepository(SinalVital)
    private repo: Repository<SinalVital>,
  ) {}

  create(dto: CreateSinalVitalDto) {
    const sinal = this.repo.create({
      paciente: { id: dto.paciente_id },
      batimentos_cardiacos: dto.batimentos_cardiacos,
      pressao_arterial: dto.pressao_arterial,
      glicose: dto.glicose,
    });
    return this.repo.save(sinal);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateSinalVitalDto) {
    const sinal = await this.repo.preload({
      id,
      paciente: dto.paciente_id ? { id: dto.paciente_id } : undefined,
      batimentos_cardiacos: dto.batimentos_cardiacos,
      pressao_arterial: dto.pressao_arterial,
      glicose: dto.glicose,
    });
    if (!sinal) throw new NotFoundException('Registro não encontrado');
    return this.repo.save(sinal);
  }

  async remove(id: number) {
    const sinal = await this.repo.findOneBy({ id });
    if (!sinal) throw new NotFoundException('Registro não encontrado');
    return this.repo.remove(sinal);
  }
}
