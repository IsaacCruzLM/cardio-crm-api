import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateSinalVitalDto {
  @IsNotEmpty()
  @IsNumber()
  paciente_id: number;

  @IsNotEmpty()
  @IsNumber()
  batimentos_cardiacos: number;

  @IsNotEmpty()
  @IsString()
  pressao_arterial: string;

  @IsNotEmpty()
  @IsNumber()
  glicose: number;
}
