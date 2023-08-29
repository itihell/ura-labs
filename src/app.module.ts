import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { RegistroCarrerasModule } from './modules/registro-carreras/registro-carreras.module';
import { ModalidadesModule } from './modules/modalidades/modalidades.module';
import { UseLabModule } from './modules/laboratory-use/laboratory-use.module';
import { HorasPracticasModule } from './modules/horas-practicas/horas-practicas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    HorasPracticasModule,
    AuthModule,
    RegistroCarrerasModule,
    ModalidadesModule,
    UseLabModule,
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
