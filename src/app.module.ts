import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { ValidarApiKeyGuard } from './modules/auth/guards';
import { RegistroCarrerasModule } from './modules/registro-carreras/registro-carreras.module';
import { ModalidadesModule } from './modalidades/modalidades.module';
import { LabRegisterModule } from './modules/lab-register/lab.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
    AuthModule,
    RegistroCarrerasModule,
    ModalidadesModule,
    LabRegisterModule,

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
