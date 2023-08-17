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
import { HorasPracticasService } from '../services/horas-practicas.service';
import { HorasPracticasDto } from '../dtos/horas-practivas-dto';

@Controller('horas-practicas')
export class HorasPracticasController {
  constructor(private readonly horasPracticasService: HorasPracticasService) {}

  @Post('/')
  async createUser(@Body() payload: HorasPracticasDto) {
    const newHorasPracticas = await this.horasPracticasService.created(payload);
    const data = {
      data: newHorasPracticas,
      message: 'created',
    };
    return data;
  }

  @Get('/')
  async getHorasPracticas() {
    const horasPracticas = await this.horasPracticasService.getHorasPracticas();
    const data = {
      data: horasPracticas,
      message: 'ok',
    };
    return data;
  }
  @Get('/:id')
  async getHorasPracticasId(@Param('id', ParseIntPipe) id: number) {
    return await this.horasPracticasService.getHorasPracticasId(id);
  }

  @Put('/:id')
  async updateHorasPracticas(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: HorasPracticasDto,
  ) {
    return await this.horasPracticasService.updateHorasPracticas(id, payload);
  }
  @Delete('/:id')
  async deleteHorasPracticas(@Param('id', ParseIntPipe) id: number) {
    return await this.horasPracticasService.deleteHorasPracticas(id);
  }
}
