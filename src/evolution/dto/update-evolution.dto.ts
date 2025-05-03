import { PartialType } from '@nestjs/mapped-types';
import { CreateEvolucaoDto } from './create-evolution.dto';

export class UpdateEvolucaoDto extends PartialType(CreateEvolucaoDto) {}
