//module horas practicas
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorasPracticasController } from './controllers/horas-practicas.controller';
import { HorasPracticasService } from './services/horas-practicas.service';
import { InformePracticas } from './entities/informe-practicas';
import { Practicante } from './entities/practicante';

@Module({
  imports: [TypeOrmModule.forFeature([InformePracticas, Practicante])],
  controllers: [HorasPracticasController],
  providers: [HorasPracticasService],
})
export class HorasPracticasModule {}
