import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import {
  RolesService,
  UsersService,
  AsignarRolesService,
  AuthService,
} from './services';
import {
  AuthController,
  RolesController,
  UsersController,
  AsignarRolesController,
} from './controllers';
import { User, Role } from './entities';
import { HorasPracticasController } from './controllers/horas-practicas.controller';
import { HorasPracticasService } from './services/horas-practicas.service';
import { HorasPracticas } from './entities/horas-practicas';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role, HorasPracticas]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
            expiresIn: '2h',
          },
        };
      },
    }),
  ],
  controllers: [
    AuthController,
    RolesController,
    UsersController,
    AsignarRolesController,
    HorasPracticasController,
  ],
  providers: [
    AuthService,
    UsersService,
    JwtStrategy,
    RolesService,
    AsignarRolesService,
    HorasPracticasService,
  ],
  exports: [TypeOrmModule, JwtStrategy, PassportModule, JwtModule],
})
export class AuthModule {}
