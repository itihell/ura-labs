//module horas practicas
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorasPracticasController } from './controllers/horas-practicas.controller';
import { HorasPracticasService } from './services/horas-practicas.service';
import { HorasPracticas } from './entities/horas-practicas';

@Module({
  imports: [TypeOrmModule.forFeature([HorasPracticas])],
  controllers: [HorasPracticasController],
  providers: [HorasPracticasService],
})
export class HorasPracticasModule {}
