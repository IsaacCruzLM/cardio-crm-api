import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from './entities/appointment.entity';
import { CreateConsultaDto } from './dto/create-appointment.dto';
import { UpdateConsultaDto } from './dto/update-appointment.dto';

@Injectable()
export class ConsultasService {
  constructor(
    @InjectRepository(Consulta)
    private repo: Repository<Consulta>,
  ) {}

  create(dto: CreateConsultaDto) {
    const consulta = this.repo.create({
      paciente: { id: dto.paciente_id },
      medico: { id: dto.medico_id },
      sintomas: dto.sintomas,
      observacoes: dto.observacoes,
      risco_cardio: dto.risco_cardio,
    });
    return this.repo.save(consulta);
  }

  findAll() {
    return this.repo.find();
  }

  findOne(id: number) {
    return this.repo.findOneBy({ id });
  }

  async update(id: number, dto: UpdateConsultaDto) {
    const consulta = await this.repo.preload({
      id,
      paciente: dto.paciente_id ? { id: dto.paciente_id } : undefined,
      medico: dto.medico_id ? { id: dto.medico_id } : undefined,
      sintomas: dto.sintomas,
      observacoes: dto.observacoes,
      risco_cardio: dto.risco_cardio,
    });
    if (!consulta) throw new NotFoundException('Consulta não encontrada');
    return this.repo.save(consulta);
  }

  async remove(id: number) {
    const consulta = await this.repo.findOneBy({ id });
    if (!consulta) throw new NotFoundException('Consulta não encontrada');
    return this.repo.remove(consulta);
  }
}
