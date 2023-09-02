import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { Reservation } from './entities/reservation.entity';
import { LabRegisterModule } from '../lab-register/lab.module';
import { LabEntity } from '../lab-register/entities';
import { LabRegisterService } from '../lab-register/services';
import { UsersService } from '../auth/services';
import { User } from '../auth/entities';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reservation, LabEntity, User]),
    LabRegisterModule,
    AuthModule, // Importa el módulo de registro de laboratorio para usarlo en el servicio
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, LabRegisterService, UsersService],
})
export class ReservationsModule {}
