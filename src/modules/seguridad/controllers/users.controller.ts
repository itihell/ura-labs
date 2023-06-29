import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { GenerarIdPipe } from '../pipes/generar-id.pipe';
import { UsersDto, UserPartialTypeDto } from '../dtos/users-dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersServices: UsersService) {}

  @Get('/')
  getUsers() {
    return this.usersServices.getUsers();
  }

  @Post('/')
  createUser(@Body() payload: UsersDto) {
    return this.usersServices.created(payload);
  }

  @Get('/:id')
  getUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersServices.getUser(id);
  }

  @Put('/:id')
  updatedUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UserPartialTypeDto,
  ) {
    return this.usersServices.updated(id, payload);
  }

  @Delete('/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.usersServices.deleted(id);
  }
}
