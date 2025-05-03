import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PatientService } from 'src/patient/patient.service';
import { CreatePatientDto } from 'src/patient/dto/create-patient.dto';
import { UserJwtPayload } from 'src/auth/jwt.strategy';
import { User } from 'src/common/decorators/user.decorator';
import { UpdatePatientDto } from 'src/patient/dto/update-patient.dto';

@Controller('pacientes')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() dto: CreatePatientDto) {
    return this.patientService.create(dto);
  }

  @Get()
  findAll(@User() user: UserJwtPayload) {
    console.log('Usuário logado:', user);
    return this.patientService.findByMedico(user.userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.patientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto) {
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.patientService.remove(+id);
  }
}
