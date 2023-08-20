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
import { InformePracticasDto } from '../dtos/informe-practicas-dto';
import { PracticanteDto } from '../dtos/practicante-dto';

@Controller('horas-practicas')
export class HorasPracticasController {
  constructor(private readonly horasPracticasService: HorasPracticasService) {}

  @Post('/informe')
  async createInforme(@Body() payload: InformePracticasDto) {
    const newHorasPracticas = await this.horasPracticasService.createdInforme(
      payload,
    );
    const data = {
      data: newHorasPracticas,
      message: 'created',
    };
    return data;
  }

  @Post('/practicante')
  async createPracticante(@Body() payload: PracticanteDto) {
    const newPracticante = await this.horasPracticasService.crearePreacticante(
      payload,
    );
  }

  @Get('/informe')
  async getInformePracticas() {
    const horasPracticas =
      await this.horasPracticasService.getInformePracticas();
    const data = {
      data: horasPracticas,
      message: 'ok',
    };
    return data;
  }

  @Get('/practicante')
  async getPracticante() {
    const practicante = await this.horasPracticasService.getPracticante();
    const data = {
      data: practicante,
      message: 'ok',
    };
    return data;
  }
  @Get('/informe/:id')
  async getInformePracticasId(@Param('id', ParseIntPipe) id: number) {
    return await this.horasPracticasService.getInformePracticasId(id);
  }

  @Get('/practicante/:id')
  async getPracticanteId(@Param('id', ParseIntPipe) id: number) {
    return await this.horasPracticasService.getPracticanteId(id);
  }
  @Put('.informe/:id')
  async updateInformePracticas(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: InformePracticasDto,
  ) {
    return await this.horasPracticasService.updateInformePracticas(id, payload);
  }
  @Delete('/informe/:id')
  async deleteInformePracticas(@Param('id', ParseIntPipe) id: number) {
    return await this.horasPracticasService.deleteInformePracticas(id);
  }
}
