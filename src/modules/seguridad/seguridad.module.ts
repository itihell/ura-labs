import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role, User } from './entities';
import { AuthModule } from '../auth/auth.module';
import { UsersController, RolesController } from './controllers';
import { UsersService, RolesService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role]), AuthModule],
  controllers: [UsersController, RolesController],
  providers: [UsersService, RolesService],
  exports: [TypeOrmModule, UsersService],
})
export class SeguridadModule {}
