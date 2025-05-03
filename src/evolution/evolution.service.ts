import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Evolucao } from './entities/evolution.entity';
import { CreateEvolucaoDto } from './dto/create-evolution.dto';
import { UpdateEvolucaoDto } from './dto/update-evolution.dto';

@Injectable()
export class EvolucoesService {
  constructor(
    @InjectRepository(Evolucao)
    private repo: Repository<Evolucao>,
  ) {}

  create(dto: CreateEvolucaoDto) {
    const evolucao = this.repo.create({
      texto_evolucao: dto.texto_evolucao,
      gerado_por_ia: dto.gerado_por_ia ?? false,
      consulta: { id: dto.consulta_id }
    });
    return this.repo.save(evolucao);
  }

  findAll() {
    return this.repo.find({ relations: ['consulta'] });
  }

  findOne(id: number) {
    return this.repo.findOne({ where: { id }, relations: ['consulta'] });
  }

  async update(id: number, dto: UpdateEvolucaoDto) {
    const evolucao = await this.repo.preload({
      id,
      texto_evolucao: dto.texto_evolucao,
      gerado_por_ia: dto.gerado_por_ia,
      consulta: dto.consulta_id ? { id: dto.consulta_id } : undefined
    });
    if (!evolucao) throw new NotFoundException('Evolução não encontrada');
    return this.repo.save(evolucao);
  }

  async remove(id: number) {
    const evolucao = await this.repo.findOneBy({ id });
    if (!evolucao) throw new NotFoundException('Evolução não encontrada');
    return this.repo.remove(evolucao);
  }
}
