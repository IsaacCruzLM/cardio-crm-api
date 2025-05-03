import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Consulta } from 'src/appointment/entities/appointment.entity';

@Entity('evolucoes')
export class Evolucao {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Consulta, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'consulta_id' })
  consulta: Consulta;

  @Column({ type: 'text' })
  texto_evolucao: string;

  @Column({ default: false })
  gerado_por_ia: boolean;

  @CreateDateColumn({ name: 'criado_em' })
  criado_em: Date;
}
