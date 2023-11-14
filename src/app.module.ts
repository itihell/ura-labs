import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { RegistroCarrerasModule } from './modules/registro-carreras/registro-carreras.module';
import { LabRegisterModule } from './modules/lab-register/lab.module';
import { HorasPracticasModule } from './modules/horas-practicas/horas-practicas.module';
import { ReservationsModule } from './modules/reservations/reservations.module';
import { UseLabModule } from './modules/laboratory-use/laboratory-use.module';
import { ModalidadesModule } from './modules/modalidades/modalidades.module';
import { CatalogosModule } from './modules/catalogos/catalogos.module';
import { RegistroDocentesModule } from './modules/Docentes/docentes.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    HorasPracticasModule,
    ModalidadesModule,
    AuthModule,
    RegistroCarrerasModule,
    LabRegisterModule,
    ReservationsModule,
    UseLabModule,
    ModalidadesModule,
    CatalogosModule,
    RegistroDocentesModule,
  ],
  controllers: [AppController],
  providers: [
    // {
    //   // provide: APP_GUARD,
    //   useClass: ValidarApiKeyGuard,
    // },
    AppService,
  ],
})
export class AppModule {}
