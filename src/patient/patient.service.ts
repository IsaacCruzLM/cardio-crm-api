import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Patient } from 'src/patient/entities/patient.entity';
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';
import { UpdatePatientDto } from 'src/patient/dto/update-patient.dto';

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient) private patientRepo: Repository<Patient>,
    @InjectRepository(User) private userRepo: Repository<User>,
  ) {}

  async create(dto: CreatePatientDto) {
    const medico = await this.userRepo.findOneBy({
      id: dto.id_medico_responsavel,
    });
    if (!medico) throw new NotFoundException('Médico não encontrado');

    const paciente = this.patientRepo.create({
      ...dto,
      medico_responsavel: medico,
    });

    return this.patientRepo.save(paciente);
  }

  async findByMedico(id_medico: number) {
    return this.patientRepo.find({
      where: {
        medico_responsavel: {
          id: id_medico,
        },
      },
      relations: ['medico_responsavel'],
    });
  }

  findOne(id: number) {
    return this.patientRepo.findOneBy({ id });
  }

  async update(id: number, updatePatientDto: UpdatePatientDto) {
    const patient = await this.patientRepo.preload({
      id,
      ...updatePatientDto,
    });
    if (!patient) throw new NotFoundException(`Patient #${id} not found`);
    return this.patientRepo.save(patient);
  }

  async remove(id: number) {
    const patient = await this.findOne(id);
    if (!patient) throw new NotFoundException(`Patient #${id} not found`);
    return this.patientRepo.remove(patient);
  }
}
