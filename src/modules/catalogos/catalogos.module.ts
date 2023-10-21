import { Module } from '@nestjs/common';
import { CatalogosService } from './services/catalogos.service';
import { AuthModule } from '../auth/auth.module';
import { ModalidadesModule } from '../modalidades/modalidades.module';
import { CatalogosController } from './controllers/catalogos.controller';
import { HorasPracticasModule } from '../horas-practicas/horas-practicas.module';

@Module({
  imports: [AuthModule, ModalidadesModule, HorasPracticasModule],
  controllers: [CatalogosController],
  providers: [CatalogosService],
})
export class CatalogosModule { }
