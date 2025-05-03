import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateConsultaDto {
  @IsNotEmpty()
  @IsNumber()
  paciente_id: number;

  @IsNotEmpty()
  @IsNumber()
  medico_id: number;

  @IsOptional()
  @IsString()
  sintomas?: string;

  @IsOptional()
  @IsString()
  observacoes?: string;

  @IsOptional()
  @IsString()
  risco_cardio?: string;
}
