import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoryUse } from './entities';
import { UseLabController } from './controller/use-lab.controller';
import { UseLabService } from './services/use-lab.service';
import { Modalidades } from '../modalidades/entities/modalidades-entities';
import { Carrera } from '../registro-carreras/entities';
import { LabEntity } from '../lab-register/entities';
import { Asignatura } from '../asignatura/entities/asignatura.entity';
import { Turnos } from '../turnos/entities/turnos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([LaboratoryUse, Modalidades, Carrera,LabEntity, Asignatura])],
    controllers: [UseLabController],
    providers: [UseLabService],
})
export class UseLabModule { }