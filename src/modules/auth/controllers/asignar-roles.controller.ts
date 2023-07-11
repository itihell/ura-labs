import { Body, Controller, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AsignarRolesService } from '../services';
import { UserHasRolesDto } from '../dtos';

@Controller('asignar-roles')
export class AsignarRolesController {
  constructor(private readonly asignarRolesRepo: AsignarRolesService) {}

  @Post('/:userId')
  async asignarRol(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: UserHasRolesDto,
  ) {
    const data = await this.asignarRolesRepo.asignarRol(userId, payload);

    return data;
  }

  @Post('/remover/:userId')
  async removerRol(
    @Param('userId', ParseIntPipe) userId: number,
    @Body() payload: UserHasRolesDto,
  ) {
    const data = await this.asignarRolesRepo.removerRol(userId, payload);

    return data;
  }
}
