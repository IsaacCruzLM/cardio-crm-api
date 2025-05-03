import { PartialType } from '@nestjs/mapped-types';
import { CreateSinalVitalDto } from './create-vital_signs.dto';

export class UpdateSinalVitalDto extends PartialType(CreateSinalVitalDto) {}
