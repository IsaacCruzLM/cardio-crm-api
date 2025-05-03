import { PartialType } from '@nestjs/mapped-types';
import { CreateConsultaDto } from './create-appointment.dto';

export class UpdateConsultaDto extends PartialType(CreateConsultaDto) {}
