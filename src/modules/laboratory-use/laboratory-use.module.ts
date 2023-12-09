import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoryUse } from './entities';
import { UseLabController } from './controller/use-lab.controller';
import { UseLabService } from './services/use-lab.service';
import { Modalidades } from '../modalidades/entities/modalidades-entities';
import { Carrera } from '../registro-carreras/entities';
import { LabEntity } from '../lab-register/entities';
import { Docentes } from '../Docentes/entities/docentes.entity';
import { Asignatura } from '../asignatura/entities/asignatura.entity';
import { ReportsUseLaboratoryService } from './services/reports-use-laboratory.service';
import { ReportsUseLaboratoryController } from './controller/reports-use-laboratory.controller';
import { Turnos } from '../turnos/entities/turnos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([LaboratoryUse, Modalidades, Carrera, LabEntity, Docentes, Asignatura, Turnos])],
    controllers: [UseLabController, ReportsUseLaboratoryController],
    providers: [UseLabService, ReportsUseLaboratoryService],
})
export class UseLabModule { }