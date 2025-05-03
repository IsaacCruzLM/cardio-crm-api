import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert, CreateDateColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { TipoUsuario } from '../enums/tipo-usuario.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string;

  @BeforeInsert()
  async hashPassword() {
    this.senha = await bcrypt.hash(this.senha, 10);
  }

  @Column({
    type: 'text',
    enum: TipoUsuario,
  })
  tipo: TipoUsuario;

  @Column({ type: 'text', nullable: true })
  crm: string | null;

  @CreateDateColumn({ name: 'criado_em' })
  criado_em: Date; 
}
