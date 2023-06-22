import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { GenerarIdPipe } from '../pipes/generar-id.pipe';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Get('/')
  getUsers() {
    return this.usersServices.getUsers();
  }

  @Post('/')
  createUser(@Body(GenerarIdPipe) payload: any) {
    return this.usersServices.created(payload);
  }

  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return this.usersServices.getUser(id);
  }
}
