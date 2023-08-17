// registro-carreras/registro-carreras.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area, Carrera } from './entities';
import { RegistroCarrerasController } from './controllers/registro-carrera.controller';
import { RegistroCarrerasService } from './services/registro-carrera.service';

@Module({
  imports: [TypeOrmModule.forFeature([Area, Carrera])],
  controllers: [RegistroCarrerasController],
  providers: [RegistroCarrerasService],
})
export class RegistroCarrerasModule {}
