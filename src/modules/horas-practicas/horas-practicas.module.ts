//module horas practicas
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HorasPracticasController } from './controllers/horas-practicas.controller';
import { HorasPracticasService } from './services/horas-practicas.service';
import { CortePracticas } from './entities/corte-practicas.entity';
import { Practicante } from './entities/practicante.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CortePracticas, Practicante])],
  controllers: [HorasPracticasController],
  providers: [HorasPracticasService],
})
export class HorasPracticasModule {}
