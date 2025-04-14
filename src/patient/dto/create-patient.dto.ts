import { IsNotEmpty, IsDateString, IsEnum, IsOptional } from 'class-validator';
import { Sexo } from '../enums/sexo-do-usuario.enum';

export class CreatePatientDto {
  @IsNotEmpty()
  nome: string;

  @IsDateString()
  data_nascimento: Date;

  @IsEnum(Sexo)
  sexo: Sexo;

  @IsOptional()
  historico_medico?: string;

  @IsOptional()
  medicamentos_em_uso?: string;

  @IsNotEmpty()
  id_medico_responsavel: number;
}
