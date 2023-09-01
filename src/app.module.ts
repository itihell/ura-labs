import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { RegistroCarrerasModule } from './modules/registro-carreras/registro-carreras.module';
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
