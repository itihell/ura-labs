import { Module } from '@nestjs/common';

import { CatalogosController } from './controller/catalogos.controller';
import { CatalogosService } from './services/catalogos.service';
import { AuthModule } from '../auth/auth.module';
import { ModalidadesModule } from '../modalidades/modalidades.module';
import { HorasPracticasModule } from '../horas-practicas/horas-practicas.module';
import { RegistroCarrerasModule } from '../registro-carreras/registro-carreras.module';
import { UseLabModule } from '../laboratory-use/laboratory-use.module';
import { LabRegisterModule } from '../lab-register/lab.module';
@Module({
  imports: [
    AuthModule,
    ModalidadesModule,
    HorasPracticasModule,
    RegistroCarrerasModule,
    LabRegisterModule,
    UseLabModule,
  ],
  controllers: [CatalogosController],
  providers: [CatalogosService],
})
export class CatalogosModule {}
