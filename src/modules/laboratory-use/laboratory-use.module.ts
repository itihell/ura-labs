import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaboratoryUse } from './entities';
import { UseLabController } from './controller/use-lab.controller';
import { UseLabService } from './services/use-lab.service';
import { Modalidades } from '../modalidades/entities/modalidades-entities';
import { Carrera } from '../registro-carreras/entities';
import { LabEntity } from '../lab-register/entities';

@Module({
    imports: [TypeOrmModule.forFeature([LaboratoryUse, Modalidades, Carrera,LabEntity])],
    controllers: [UseLabController],
    providers: [UseLabService],
})
export class UseLabModule { }