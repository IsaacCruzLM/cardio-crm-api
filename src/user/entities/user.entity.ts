import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { TipoUsuario } from '../enums/tipo-usuario.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @Column({
    type: 'text',
    enum: TipoUsuario,
  })
  tipo_usuario: TipoUsuario;

  @Column({ type: 'text', nullable: true })
  crm: string | null;
}
