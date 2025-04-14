import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/entities/user.entity';
import { AuthModule } from 'src/auth/auth.module';
import { PatientModule } from 'src/patient/patient.module';
import { Patient } from 'src/patient/entities/patient.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [User, Patient],
      synchronize: true, // cuidado: use apenas em dev
    }),
    UserModule,
    AuthModule,
    PatientModule,
  ],
})
export class AppModule {}
