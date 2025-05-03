import { IsNotEmpty, IsBoolean, IsOptional, IsNumber, IsString } from 'class-validator';

export class CreateEvolucaoDto {
  @IsNotEmpty()
  @IsNumber()
  consulta_id: number;

  @IsNotEmpty()
  @IsString()
  texto_evolucao: string;

  @IsOptional()
  @IsBoolean()
  gerado_por_ia?: boolean;
}
