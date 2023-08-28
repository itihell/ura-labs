import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area, Carrera } from './entities';
import { RegistroCarrerasController } from './controllers/registro-carrera.controller';
import { RegistroCarrerasService } from './services/registro-carrera.service';

@Module({
  imports: [TypeOrmModule.forFeature([Area, Carrera])],
    controllers: [RegistroCarrerasController, RegistroAreaController],
  providers: [RegistroCarrerasService, RegistroAreaService],
})
export class RegistroCarrerasModule {}
