import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Patient } from 'src/patient/entities/patient.entity';

@Entity('sinais_vitais')
export class SinalVital {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Patient, { eager: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'paciente_id' })
  paciente: Patient;

  @Column()
  batimentos_cardiacos: number;

  @Column({ length: 20 })
  pressao_arterial: string;

  @Column('decimal', { precision: 5, scale: 2 })
  glicose: number;

  @CreateDateColumn({ type: 'datetime' })
  coletado_em: Date;
}
