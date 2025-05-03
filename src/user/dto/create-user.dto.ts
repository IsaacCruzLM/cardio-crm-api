/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEnum, IsNotEmpty, ValidateIf } from 'class-validator';
import { TipoUsuario } from '../enums/tipo-usuario.enum';

export class CreateUserDto {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  senha: string;

  @IsEnum(TipoUsuario)
  tipo: TipoUsuario;

  @ValidateIf((obj) => obj.tipo === TipoUsuario.MEDICO)
  @IsNotEmpty({ message: 'CRM é obrigatório para médicos' })
  crm?: string;
}
