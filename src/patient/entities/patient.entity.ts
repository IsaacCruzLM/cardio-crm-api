import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/user/entities/user.entity';

import { Sexo } from '../enums/sexo-do-usuario.enum';

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'varchar', length: 14, unique: true, nullable: false })
  cpf: string;

  @Column({ type: 'date' })
  data_nascimento: Date;

  @Column({ type: 'varchar', length: 15, nullable: true })
  telefone: string;

  @Column({
    type: 'text',
    enum: Sexo,
    nullable: true
  })
  sexo: Sexo;

  @Column({ type: 'text', nullable: true })
  endereco: string;

  @Column({ type: 'text', nullable: true })
  historico_medico: string;

  @Column({ type: 'text', nullable: true })
  medicamentos_em_uso: string; // você pode separar por vírgula ou usar JSON

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_medico_responsavel' })
  medico_responsavel: User;
}
