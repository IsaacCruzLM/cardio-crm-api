import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { PatientModule } from 'src/patient/patient.module';
import { EvolucoesModule } from 'src/evolution/evolution.module';
import { ConsultasModule } from 'src/appointment/appointment.module';
import { SinaisVitaisModule } from 'src/vital_signs/vital_signs.module';
import { Patient } from 'src/patient/entities/patient.entity';
import { Consulta } from 'src/appointment/entities/appointment.entity';
import { Evolucao } from 'src/evolution/entities/evolution.entity';
import { SinalVital } from 'src/vital_signs/entities/vital_signs.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Patient, Consulta, Evolucao, SinalVital],
      synchronize: true, // cuidado: use apenas em dev
    }),
    UserModule,
    AuthModule,
    PatientModule,
    ConsultasModule,
    EvolucoesModule,
    SinaisVitaisModule,
  ],
})
export class AppModule {}
